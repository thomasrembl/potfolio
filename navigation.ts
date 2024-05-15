import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
   
  export const locales = ['fr', 'en'] as const;
  export const localePrefix = 'always'; // Default
   
  // The `pathnames` object holds pairs of internal
  // and external paths, separated by locale.
  export const pathnames = {
    // If all locales use the same pathname, a
    // single external path can be provided.
    '/': '/',
    '/#projects-ancor': '/#projects-ancor',
    '/about': '/about',
    "#": "#",
    '/project/[...slug]': '/project/[...slug]',
    'https://twitter.com/Kc_Thomaaas': 'https://twitter.com/Kc_Thomaaas',
    'https://www.behance.net/thomasremblier': 'https://www.behance.net/thomasremblier',
    'https://www.linkedin.com/in/thomas-remblier-a9805a220/': 'https://www.linkedin.com/in/thomas-remblier-a9805a220/',
    'https://github.com/thomasrembl': 'https://github.com/thomasrembl',
    'https://www.instagram.com/remblier.psd/': 'https://www.instagram.com/remblier.psd/',
   

  } satisfies Pathnames<typeof locales>;
   
  export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});