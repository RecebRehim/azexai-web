---
name: azexai-web
description: Brand, copy, and architecture rules for the AzexAI Systems public website. Use when editing pages, messages, navigation, contact, or anything user-facing in this repo.
---

# AzexAI Systems public website

This is the **corporate website** for AzexAI Systems, operator of **AzexAI VSM**. The product platform lives on a separate domain (`NEXT_PUBLIC_VSM_URL`). Do not merge login, assessments, pricing engines, or methodology internals into this site.

## Source of truth

- Runtime copy: `messages/en.json`, `messages/az.json`, `messages/ru.json`
- Content pack: `docs/AzexAI_Systems_Public_Website_Content_Pack_AZ_RU_EN.docx`
- Locales: `az` (default), `ru`, `en` with prefix always (`/az`, `/ru`, `/en`)

## Never invent

- Leadership names, bios, photos
- Customer names, logos, scores
- Plus service expansions beyond the published codes (`PB`, `EI`, `CF`, `CR`, `GOV+`, `IP+`, `ESG+`)
- Formulas, weights, internal variables, reconstructable calculation rules
- Fake research papers or insights

Research, Leadership, and Insights stay empty until copy is cleared for publication. Improve the empty state; do not fill it with fiction.

## Brand

- Company: **AzexAI Systems**
- Platform: **AzexAI VSM**
- Wordmark: ΛZEXΛI SYSTEMS
- Palette: ink / paper / bronze / signal — keep it
- Do not add shadcn, Clerk, Stripe, or generic AI-SaaS chrome

## i18n

- No hardcoded English in TSX (except brand tokens: AzexAI, IIT 3D, WhiteBox, VSM)
- Translate CTAs in AZ/RU; keep product names
- Every new UI string goes into all three message files

## Contact

- Do not report success unless the message was actually sent
- Without `RESEND_API_KEY`, return unavailable and offer mailto
- Support Assistant is a keyword FAQ over public copy, not an LLM
