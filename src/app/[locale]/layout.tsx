//layout.tsx
import Footer from "@/components/footer";
import SmoothScrolling from "@/components/smoothScoll";
import "@/styles/index.scss";
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
        <Footer />
      </body>
    </html>
  );
}
