//layout.tsx
import Footer from "@/components/footer";
import "@/styles/index.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useTranslations } from "next-intl";
import { Analytics } from "@vercel/analytics/react";
export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const t = useTranslations("meta");
  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t("description")} />
        <meta
          name="keywords"
          content="portfolio, thomas remblier, web designer rouen, web designer, développeur web rouen, développeur web, remblier, 3D"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Thomas Remblier" />
        <meta name="theme-color" content="#0f0f0f" />
        <meta property="og:title" content="Portfolio Thomas Remblier" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thomasremblier.fr" />
        <meta property="og:image" content="/big-logo.png" />
        <meta property="og:description" content={t("ogDescription")} />
        <meta property="og:site_name" content="Portfolio Thomas Remblier" />
        <meta name="twitter:title" content="Portfolio Thomas Remblier" />
        <meta name="twitter:description" content={t("ogDescription")} />
        <meta name="twitter:image" content="/big-logo.png" />
        <meta name="twitter:site" content="@site" />
        <meta name="twitter:creator" content="@kc_thomaaas" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="logo thomas remblier" />
        <meta name="twitter:locale" content="fr_FR" />
        <link rel="icon" href="/big-logo.png" />
        <link rel="apple-touch-icon" href="/big-logo.png" />
        <link rel="canonical" href="thomasremblier.fr" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://thomasremblier.fr/en"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://thomasremblier.fr/fr"
        />

        <title>Thomas Remblier | Portfolio</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
