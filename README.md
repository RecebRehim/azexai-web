# AzexAI Systems

Public website for AzexAI Systems — operator of AzexAI VSM.

Languages: Azerbaijani (`/az`), Russian (`/ru`), English (`/en`).

Remote: https://github.com/RecebRehim/azexai-web

## Develop

```powershell
npx pnpm@9.15.4 install
npx pnpm@9.15.4 dev
```

Open `http://localhost:3000`. The default locale is `/az`.

```powershell
npx pnpm@9.15.4 lint
npx pnpm@9.15.4 typecheck
npx pnpm@9.15.4 build
```

## Environment

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (`https://azexai.systems`) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public contact address |
| `NEXT_PUBLIC_VSM_URL` | Live AzexAI VSM platform URL. Empty until the platform domain is live. |
| `RESEND_API_KEY` | Optional. When unset, the contact form does not claim success and offers mailto. |
| `CONTACT_TO_EMAIL` | Inbox for form submissions |
| `CONTACT_FROM_EMAIL` | Verified Resend from address |

## Deploy

1. Import [RecebRehim/azexai-web](https://github.com/RecebRehim/azexai-web) in [Vercel](https://vercel.com).
2. Framework: Next.js. Root: repository root.
3. Set the environment variables above for Production and Preview.
4. Attach `azexai.systems` when the domain is ready.

Vercel Analytics and Speed Insights are cookieless. No cookie banner is required for them.

## Content boundary

This site explains purpose and principles. It does not disclose formulas, weights, internal variables, or reconstructable calculation rules. Research, leadership biographies, and insights are published only after clearance.
