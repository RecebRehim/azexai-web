import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      name?: string;
      email?: string;
      organization?: string;
      intent?: string;
      message?: string;
    };
    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    // Ready for transactional email. Until a provider is connected, the
    // inquiry is accepted as a structured request without storing secrets.
    void site.email;
    void body.organization;
    void body.intent;

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
