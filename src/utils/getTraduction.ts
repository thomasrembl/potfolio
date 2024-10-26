// utils/localeUtils.ts
import { useLocale } from 'next-intl';

export const useActiveLocale = () => {
  const locale = useLocale();
  return locale === 'en' ? 'en' : 'fr'; // Ou adapte cette logique selon tes besoins
};
