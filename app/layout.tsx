import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

// next/font сам хэширует файлы и учитывает basePath/assetPrefix —
// прямые url('/fonts/...') в CSS ломались бы на GitHub Pages
const bounded = localFont({
  src: "../public/fonts/Bounded-Regular.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-bounded",
});

const guidy = localFont({
  src: "../public/fonts/Guidy.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-guidy",
});

export const metadata: Metadata = {
  title: "Aimy - Платформа речевой аналитики",
  description: "AI-система, которая анализирует диалоги менеджеров и повышает качество сервиса. Автоматический анализ разговоров, объективные рейтинги сотрудников, отчёты для руководителей.",
  keywords: ["речевая аналитика", "AI-анализ", "анализ диалогов", "качество сервиса", "рейтинги сотрудников", "аналитика разговоров"],
  authors: [{ name: "Aimy" }],
  openGraph: {
    title: "Aimy - Платформа речевой аналитики",
    description: "AI-система, которая анализирует диалоги менеджеров и повышает качество сервиса",
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${bounded.variable} ${guidy.variable}`}>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
