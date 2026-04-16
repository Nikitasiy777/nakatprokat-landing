"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";

type Category = "all" | "bike" | "walk";

const testimonials = [
  {
    initials: "АМ",
    name: "Алексей М.",
    role: "Велокурьер",
    platform: "Яндекс Маркет",
    category: "bike" as Category,
    text: "Работаю велокурьером уже 4 месяца. Взял велосипед на первую неделю бесплатно, потом выкупил за заработанные деньги. За день выходит 2 500–3 800 ₽, если смена полная.",
  },
  {
    initials: "ДК",
    name: "Дмитрий К.",
    role: "Пеший курьер",
    platform: "Самокат",
    category: "walk" as Category,
    text: "Студент, работаю по 4–6 часов между парами. За месяц уже заработал на аренду квартиры. Документы оформили за один день — всё без меня, я только подписал.",
  },
  {
    initials: "РС",
    name: "Рашид С.",
    role: "Велокурьер PRO",
    platform: "Яндекс Маркет",
    category: "bike" as Category,
    text: "Приехал из Ташкента, Накат Прокат помогли оформить все документы за сутки. Менеджер на связи в Телеграме — отвечает быстро, помог разобраться с приложением.",
  },
  {
    initials: "НА",
    name: "Настя А.",
    role: "Пеший курьер",
    platform: "Самокат",
    category: "walk" as Category,
    text: "Искала подработку без опыта. Оказалось, всё элементарно — скачала приложение, прошла инструктаж 30 минут и вышла на первый заказ. Менеджер помог с любым вопросом.",
  },
];

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "Все" },
  { key: "bike", label: "Велокурьеры" },
  { key: "walk", label: "Пешие курьеры" },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState<Category>("all");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "var(--bg-primary)" }} className="py-16 lg:py-24">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          style={{ marginBottom: "40px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ background: "linear-gradient(to right, #9FCC3A, #BFE65F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontSize: "13px", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>
              Отзывы
            </span>
          </div>

          <h2
            className="heading"
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              color: "var(--text-primary)",
              textTransform: "uppercase" as const,
              marginBottom: "12px",
            }}
          >
            Курьеры о работе с нами
          </h2>
          <p style={{ fontSize: "17px", color: "var(--text-sub)", maxWidth: "480px", fontWeight: 500, lineHeight: 1.6, marginBottom: "28px" }}>
            Реальные истории тех, кто уже работает вместе с Накат Прокат.
          </p>

          {/* Фильтры */}
          <div style={{ display: "inline-flex", gap: "8px", padding: "4px", borderRadius: "99px", background: "var(--bg-secondary)" }}>
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                style={{
                  padding: "6px 18px",
                  borderRadius: "99px",
                  fontSize: "13px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s, color 0.2s",
                  background: active === f.key ? "var(--lime)" : "transparent",
                  color: active === f.key ? "var(--dark)" : "var(--text-sub)",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => {
            const visible = active === "all" || t.category === active;
            return (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
                style={{ transition: "opacity 0.3s", opacity: visible ? 1 : 0.25 }}
              >
              <TiltCard>
              <div
                style={{
                  borderRadius: "20px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  padding: "24px",
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {/* Цитата */}
                  <p style={{ fontSize: "15px", color: "var(--text-sub)", lineHeight: 1.7, fontWeight: 500 }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  {/* Автор */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "12px", borderTop: "1px solid var(--border)" }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: "var(--lime)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <span style={{ fontSize: "13px", fontWeight: 800, color: "var(--dark)" }}>{t.initials}</span>
                    </div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)" }}>{t.name}</div>
                      <div style={{ fontSize: "12px", color: "var(--text-sub)", fontWeight: 500 }}>
                        {t.role} · {t.platform}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </TiltCard>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
