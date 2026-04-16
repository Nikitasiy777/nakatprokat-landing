import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingCTA from "./components/FloatingCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

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
    <html lang="ru" className={inter.variable}>
      <body className="font-inter">
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
