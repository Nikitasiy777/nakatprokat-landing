"use client";

import { Phone, MapPin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

type AnimatedContainerProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--bg-primary)", paddingTop: 32, paddingBottom: 32 }}>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{
          borderRadius: "24px",
          border: "1.5px solid rgba(191,230,95,0.45)",
          background: "radial-gradient(ellipse 80% 120% at 50% 0%, rgba(191,230,95,0.10) 0%, rgba(248,246,240,0.85) 60%, var(--bg-secondary) 100%)",
          backdropFilter: "blur(4px)",
          padding: "clamp(32px, 4vw, 48px)",
        }}>

          {/* Основная сетка: бренд | навигация (центр) | контакты */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Бренд */}
            <AnimatedContainer delay={0.1}><div>
              <div style={{ marginBottom: 16 }}>
                <img src="/assets/logo.svg" alt="Накат Прокат" style={{ height: "40px", width: "auto" }} />
              </div>
              <p style={{ fontSize: "14px", color: "var(--text-sub)", lineHeight: 1.7, fontWeight: 500, maxWidth: "280px", marginBottom: 24 }}>
                Партнёр ведущих сервисов доставки в Казани. Помогаем курьерам быстро выйти на линию — велосипед бесплатно на первую неделю.
              </p>

              {/* Соцсети */}
              <div style={{ display: "flex", gap: 12 }}>
                <a
                  href="https://t.me/nakatprokat"
                  title="Telegram"
                  style={{ width: 36, height: 36, borderRadius: "10px", background: "var(--lime-bg)", border: "1px solid rgba(191,230,95,0.3)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--lime-dark)">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
                <a
                  href="https://vk.me/nakatprokat"
                  title="Max"
                  style={{ width: 36, height: 36, borderRadius: "10px", background: "var(--lime-bg)", border: "1px solid rgba(191,230,95,0.3)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}
                >
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.70072 4.14552C6.49435 4.02979 4.77259 5.56075 4.39296 7.95701C4.07851 9.94138 4.63598 12.3593 5.11282 12.4811C5.31504 12.5327 5.80171 12.1604 6.15581 11.8265C6.22234 11.7637 6.32304 11.7532 6.40109 11.8009C6.95304 12.1384 7.57795 12.3921 8.2669 12.4282C10.532 12.547 12.5392 10.7742 12.6579 8.50896C12.7765 6.2437 10.9658 4.26427 8.70072 4.14552ZM5.00602 15.6494C4.92062 15.5889 4.80293 15.6053 4.73131 15.6817C3.77443 16.7023 1.32547 17.4182 1.2133 16.0252C1.2133 14.9338 0.96816 14.0141 0.698256 13.0015C0.36768 11.7613 0 10.3818 0 8.37681C0 3.59568 3.92117 0 8.5703 0C13.2195 0 16.8646 3.77122 16.8646 8.42323C16.8646 13.0753 13.1034 16.7536 8.61432 16.7536C7.02168 16.7536 6.24878 16.5293 5.00602 15.6494Z" fill="var(--lime-dark)" />
                  </svg>
                </a>
              </div>
            </div></AnimatedContainer>

            {/* Навигация — центральная колонка (скрыта на мобильных — есть в бургер-меню) */}
            <AnimatedContainer delay={0.2} className="hidden md:block"><div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h4 style={{
                fontSize: "11px", fontWeight: 800, color: "var(--lime-dark)",
                textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16,
              }}>
                Навигация
              </h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
                {[
                  ["Вакансии", "#vacancies"],
                  ["Как устроиться", "#how"],
                  ["Отзывы", "#testimonials"],
                  ["FAQ", "#faq"],
                  ["Оставить заявку", "#form"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      style={{ fontSize: "14px", color: "var(--text-sub)", fontWeight: 500, textDecoration: "none", transition: "color 0.2s", textAlign: "center" as const }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-sub)")}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div></AnimatedContainer>

            {/* Контакты */}
            <AnimatedContainer delay={0.3}><div>
              <h4 style={{
                fontSize: "11px", fontWeight: 800, color: "var(--lime-dark)",
                textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16,
              }}>
                Контакты
              </h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
                {[
                  { Icon: Phone,  href: "tel:+78432130420",              text: "8 (843) 213-04-20" },
                  { Icon: Phone,  href: "tel:+79173941235",              text: "8 (917) 394-12-35" },
                  { Icon: Mail,   href: "mailto:nakatprokat@yandex.ru",  text: "nakatprokat@yandex.ru" },
                  { Icon: MapPin, href: "#",                              text: "Казань, ул. Габдуллы Тукая, 113А" },
                ].map(({ Icon, href, text }) => (
                  <li key={text}>
                    <a href={href} style={{ display: "flex", alignItems: "flex-start", gap: 12, textDecoration: "none" }}>
                      <div style={{
                        width: 30, height: 30, borderRadius: "8px",
                        background: "var(--lime-bg)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <Icon size={14} style={{ color: "var(--lime-dark)" }} />
                      </div>
                      <span style={{ fontSize: "14px", color: "var(--text-sub)", fontWeight: 500, lineHeight: 1.4, paddingTop: 8 }}>{text}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#form"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="btn-primary"
                style={{ display: "inline-flex", fontSize: "14px" }}
              >
                Стать курьером →
              </motion.a>
            </div></AnimatedContainer>
          </div>

          {/* Bottom */}
          <AnimatedContainer delay={0.4}><div style={{
            marginTop: 40, paddingTop: 24,
            borderTop: "1px solid rgba(191,230,95,0.2)",
            display: "flex", flexDirection: "column", gap: 12,
          }}>
            {/* Строка 1: копирайт + правовые ссылки */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <span style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: 500 }}>
                © {year} Накат Прокат. Все права защищены.
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                <a href="/privacy" style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "3px" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--lime-dark)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  Политика конфиденциальности
                </a>
                <a href="/personal-data" style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "3px" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--lime-dark)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  Обработка персональных данных
                </a>
              </div>
            </div>
            {/* Строка 2: реквизиты + партнёры */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500 }}>
                ИП Сироткин Максим Денисович · ИНН 023102950200 · ОГРН 325028000199306
              </span>
              <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500 }}>
                Яндекс · Купер · Самокат · Вкусвилл
              </span>
            </div>
          </div></AnimatedContainer>
        </div>
      </div>
    </footer>
  );
}
