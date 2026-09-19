import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const sourceLocale = locale === "ar" || locale === "zh" ? "en" : locale;

  return {
    locale,
    messages: (await import(`../../messages/${sourceLocale}.json`)).default,
  };
});
