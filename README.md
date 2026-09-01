# AzexAI Systems

Public website for AzexAI Systems — operator of AzexAI VSM.

Languages: Azerbaijani (`/az`), Russian (`/ru`), English (`/en`).

Remote: https://github.com/RecebRehim/azexai-web

## Develop

From this folder:

```powershell
npx pnpm@9.15.4 install
npx pnpm@9.15.4 dev
```

If Next.js fails on Windows because the folder name contains `İ`, run:

```powershell
.\scripts\run-dev.ps1
```

Open `http://localhost:3000`.

## Platform access

Set `NEXT_PUBLIC_VSM_URL` in `.env.local` when the AzexAI VSM platform domain is live.
