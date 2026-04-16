"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bike, Clock, Calendar, MessageCircle, Wallet, Globe } from "lucide-react";
import TiltCard from "./TiltCard";

const features = [
  {
    icon: Bike,
    title: "Велосипед бесплатно",
    desc: "Электровелосипед на первую неделю — это наше главное УТП. Ни у одного конкурента такого нет.",
  },
  {
    icon: Clock,
    title: "Оформление за 24 часа",
    desc: "Помогаем с самозанятостью и всеми документами бесплатно. Выходишь на линию уже завтра.",
  },
  {
    icon: Calendar,
    title: "Гибкий график",
    desc: "Работай 4, 8 или 12 часов в любой день. Сам выбираешь смены в приложении.",
  },
  {
    icon: MessageCircle,
    title: "Личный менеджер",
    desc: "Куратор на связи в Телеграме. Отвечаем на все вопросы, помогаем с первым заказом.",
  },
  {
    icon: Wallet,
    title: "До 4 000 ₽ в день",
    desc: "Выплаты напрямую от платформы. Никаких посредников — деньги сразу тебе.",
  },
  {
    icon: Globe,
    title: "Принимаем граждан СНГ",
    desc: "Работаем с гражданами России и СНГ при наличии разрешения на работу.",
  },
];

export default function InfoStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "radial-gradient(ellipse 100% 60% at 50% 50%, rgba(191,230,95,0.12) 0%, rgba(191,230,95,0.04) 50%, var(--bg-primary) 80%)" }} className="py-16 lg:py-24">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          style={{ marginBottom: "48px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ background: "linear-gradient(to right, #9FCC3A, #BFE65F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontSize: "13px", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>
              Преимущества
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
            Почему выбирают нас
          </h2>
          <p style={{ fontSize: "17px", color: "var(--text-sub)", maxWidth: "480px", fontWeight: 500, lineHeight: 1.6 }}>
            Мы не просто помогаем найти работу — сопровождаем на каждом шаге.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              >
              <TiltCard>
              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "20px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: "12px",
                  background: "var(--lime-bg)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "16px",
                  flexShrink: 0,
                }}>
                  <Icon size={22} style={{ color: "var(--lime-dark)" }} />
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "8px", letterSpacing: "-0.01em" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-sub)", lineHeight: 1.65, fontWeight: 500 }}>
                  {f.desc}
                </p>
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
