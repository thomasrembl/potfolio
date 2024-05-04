// midleware.ts is a file that is used to configure the next-intl middleware.
import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['fr', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'fr'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*']
};