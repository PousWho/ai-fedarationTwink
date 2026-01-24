import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

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
    <html lang="ru">
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
