"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function HeroSection() {
  return (
    <section
      style={{
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Радиальный ореол — смещён влево под текст */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 70% at 20% 50%, rgba(191, 230, 95, 0.09) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Двухколоночная сетка: текст | фото */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 py-12 lg:py-20"
        >
          {/* ── ЛЕВАЯ КОЛОНКА — текст ── */}
          <div>
            {/* Section label */}
            <motion.div
              variants={itemVariants}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <span style={{
                display: "block", height: "1px", width: "32px",
                background: "linear-gradient(to right, transparent, rgba(191,230,95,0.5))",
              }} />
              <span style={{
                background: "linear-gradient(to right, #9FCC3A, #BFE65F)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "13px", fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
              }}>
                Казань · Работа в службах доставки
              </span>
              <span style={{
                display: "block", height: "1px", width: "32px",
                background: "linear-gradient(to left, transparent, rgba(191,230,95,0.5))",
              }} />
            </motion.div>

            {/* H1 с анимированным градиентом */}
            <motion.div variants={itemVariants} style={{ marginBottom: "24px" }}>
              <h1
                className="heading"
                style={{
                  fontSize: "clamp(44px, 6.5vw, 92px)",
                  lineHeight: 0.96,
                  color: "var(--text-primary)",
                }}
              >
                Работа курьером
                <br />в Казани
              </h1>
            </motion.div>

            {/* Подзаголовок */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "clamp(15px, 1.5vw, 18px)",
                color: "var(--text-sub)",
                maxWidth: "460px",
                lineHeight: 1.65,
                marginBottom: "36px",
                fontWeight: 500,
              }}
            >
              Зарабатывай до{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 800 }}>
                4 000 ₽ в день.
              </strong>{" "}
              Велосипед — бесплатно на первую неделю. Помогаем оформиться за 24 часа.
            </motion.p>

            {/* CTA кнопки */}
            <motion.div
              variants={itemVariants}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div style={{ position: "relative" }}>
                <motion.div
                  style={{
                    position: "absolute",
                    inset: "-4px",
                    borderRadius: "18px",
                    background: "rgba(191, 230, 95, 0.2)",
                    zIndex: -1,
                  }}
                  animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.04, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <a href="#form" className="btn-primary" style={{ fontSize: "15px", padding: "13px 26px" }}>
                  Оставить заявку
                </a>
              </div>
              <a
                href="https://t.me/nakatprokat"
                className="btn-ghost"
                style={{ fontSize: "14px", padding: "13px 22px" }}
              >
                Telegram →
              </a>
            </motion.div>
          </div>

          {/* ── ПРАВАЯ КОЛОНКА — фото ── */}
          <motion.div variants={itemVariants}>
            <div
              style={{
                width: "100%",
                minHeight: "460px",
                borderRadius: "24px",
                border: "2px dashed var(--border)",
                background: "var(--bg-secondary)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Лёгкий градиент внутри placeholder */}
              <div style={{
                position: "absolute", inset: 0,
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 30%, rgba(191, 230, 95, 0.07) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />
              {/* Иконка */}
              <div style={{
                width: 64, height: 64, borderRadius: "18px",
                background: "var(--lime-bg)",
                display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 1,
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                  stroke="var(--lime-dark)" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
              </div>
              <div style={{ textAlign: "center", zIndex: 1 }}>
                <p style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                  Место для фото
                </p>
                <p style={{ fontSize: "13px", color: "var(--text-sub)", fontWeight: 500 }}>
                  Фотография курьера / велосипеда
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
