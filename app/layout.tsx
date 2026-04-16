import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "./globals.css";
import FloatingCTA from "./components/FloatingCTA";

export const metadata: Metadata = {
  title: "Накат Прокат — Работа курьером в Казани",
  description:
    "Стань курьером в Казани. Яндекс, Купер, Самокат, Вкусвилл и другие сервисы. Зарабатывай до 4 000 ₽ в день. Велосипед бесплатно на первую неделю.",
  keywords:
    "курьер Казань, работа курьером, Яндекс курьер, Купер курьер, Самокат курьер, Вкусвилл курьер, велокурьер",
  openGraph: {
    title: "Накат Прокат — Работа курьером в Казани",
    description: "До 4 000 ₽ в день. Велосипед бесплатно на первую неделю. Яндекс, Купер, Самокат, Вкусвилл.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="font-inter">
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
