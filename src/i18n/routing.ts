import { defineRouting } from "next-intl/routing";

export const locales = ["az", "en", "ar", "zh", "ru"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "az",
  localePrefix: "always",
});
