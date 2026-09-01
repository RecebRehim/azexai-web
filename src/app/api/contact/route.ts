import { NextRequest, NextResponse } from "next/server";
import { intentKeys, site, type IntentKey } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 5;

const buckets = new Map<string, { count: number; resetAt: number }>();

function clientKey(req: NextRequest) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function rateLimited(key: string) {
  const now = Date.now();
  const current = buckets.get(key);
  if (!current || now > current.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (current.count >= MAX_PER_WINDOW) return true;
  current.count += 1;
  return false;
}

function isIntent(value: string): value is IntentKey {
  return (intentKeys as readonly string[]).includes(value);
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      name?: string;
      email?: string;
      organization?: string;
      intent?: string;
      message?: string;
      website?: string;
    };

    if (body.website?.trim()) {
      return NextResponse.json({ ok: true });
    }

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const organization = body.organization?.trim() ?? "";
    const intent = body.intent?.trim() ?? "general";

    if (!name || name.length > 200 || !email || !EMAIL_RE.test(email) || !message) {
      return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
    }
    if (message.length < 10 || message.length > 8000) {
      return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
    }
    if (!isIntent(intent)) {
      return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
    }

    if (rateLimited(clientKey(req))) {
      return NextResponse.json({ ok: false, reason: "rate" }, { status: 429 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ ok: false, reason: "unavailable" }, { status: 503 });
    }

    const to = process.env.CONTACT_TO_EMAIL ?? site.email;
    const from =
      process.env.CONTACT_FROM_EMAIL ?? "AzexAI Systems <noreply@azexai.systems>";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[AzexAI] ${intent} — ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Organization: ${organization || "—"}`,
          `Intent: ${intent}`,
          "",
          message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false, reason: "provider" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, reason: "error" }, { status: 500 });
  }
}
