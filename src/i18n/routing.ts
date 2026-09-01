import { defineRouting } from "next-intl/routing";

export const locales = ["az", "ru", "en"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "az",
  localePrefix: "always",
});
