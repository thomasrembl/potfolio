// i18n.ts
import { getRequestConfig } from 'next-intl/server';

const locales = ['fr', 'en'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
