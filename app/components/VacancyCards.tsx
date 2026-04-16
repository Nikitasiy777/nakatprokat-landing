"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import TiltCard from "./TiltCard";

const vacancies = [
  {
    id: "bike",
    badge: "Горячая вакансия",
    title: "Велокурьер",
    platform: "Яндекс · Купер · и др.",
    image: "/assets/images/bike 1.png",
    earn: "до 4 000 ₽",
    per: "в день",
    features: [
      "Велосипед бесплатно на 1 неделю",
      "Гибкий график — сам выбираешь смены",
      "Выплаты напрямую от платформы",
    ],
    detail: "Доставка товаров по Казани на велосипеде.",
  },
  {
    id: "walk",
    badge: "Стабильный доход",
    title: "Пеший курьер",
    platform: "Самокат · Вкусвилл · и др.",
    image: "/assets/images/bike 2.png",
    earn: "до 3 500 ₽",
    per: "в день",
    features: [
      "Короткие маршруты до 15 минут",
      "Слоты по 4–16 часов на выбор",
      "Помогаем оформить самозанятость",
    ],
    detail: "Доставка продуктов рядом с домом.",
  },
  {
    id: "combo",
    badge: "Максимум дохода",
    title: "Велокурьер PRO",
    platform: "Все платформы",
    image: "/assets/images/bike 3.png",
    earn: "до 4 000 ₽",
    per: "в день",
    features: [
      "Расширенная зона доставки",
      "Приоритет в назначении заказов",
      "Личный менеджер и поддержка",
    ],
    detail: "Больше заказов, выше приоритет.",
  },
];

/* ── Одна карточка ── */
function VacancyCard({ v, idx }: { v: typeof vacancies[0]; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
      className="h-full"
    >
      <TiltCard>
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Изображение */}
          <div
            style={{
              position: "relative",
              height: "210px",
              background: "var(--bg-secondary)",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <span className="badge" style={{ position: "absolute", top: 12, left: 12, zIndex: 2 }}>
              {v.badge}
            </span>
            <span style={{
              position: "absolute", top: 12, right: 12, zIndex: 2,
              background: "var(--bg-elevated)", color: "var(--text-sub)",
              fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "15px",
            }}>
              {v.platform}
            </span>
            <Image
              src={v.image}
              alt={v.title}
              fill
              className="object-contain p-5"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Контент */}
          <div style={{ flex: 1, padding: "20px", display: "flex", flexDirection: "column" }}>
            <h3 className="heading" style={{ fontSize: "26px", color: "var(--text-primary)", marginBottom: "6px" }}>
              {v.title}
            </h3>
            <p style={{ fontSize: "13px", color: "var(--text-sub)", marginBottom: "16px", fontWeight: 500 }}>
              {v.detail}
            </p>

            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px", flex: 1 }}>
              {v.features.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13.5px" }}>
                  <Check size={15} style={{ color: "var(--lime-dark)", flexShrink: 0, marginTop: "1px" }} />
                  <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{f}</span>
                </li>
              ))}
            </ul>

            {/* Футер карточки */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "16px", borderTop: "1px solid var(--border)" }}>
              <div>
                <div style={{ fontSize: "11px", color: "var(--text-sub)", fontWeight: 500, marginBottom: "2px" }}>Заработок</div>
                <div className="heading" style={{ fontSize: "22px", color: "var(--text-primary)" }}>
                  {v.earn} <span style={{ fontSize: "13px", fontWeight: 600 }}>{v.per}</span>
                </div>
              </div>
              <a href="#form" className="btn-primary" style={{ fontSize: "13px", padding: "10px 18px" }}>
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

/* ── Секция ── */
export default function VacancyCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="vacancies" style={{ background: "var(--bg-primary)" }} className="py-16 lg:py-24">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          style={{ marginBottom: "48px" }}
        >
          {/* Лейбл Open PRO */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ background: "linear-gradient(to right, #9FCC3A, #BFE65F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontSize: "13px", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>
              Вакансии
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
            Выбери свою вакансию
          </h2>
          <p style={{ fontSize: "17px", color: "var(--text-sub)", maxWidth: "480px", fontWeight: 500, lineHeight: 1.6 }}>
            Три варианта — выбирай что подходит. Помогаем оформиться в любой из них.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {vacancies.map((v, idx) => (
            <VacancyCard key={v.id} v={v} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
