//layout.tsx
import Footer from "@/components/footer";
import SmoothScrolling from "@/components/smoothScoll";
import "@/styles/index.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";
export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <SmoothScrolling>{children}</SmoothScrolling>
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
