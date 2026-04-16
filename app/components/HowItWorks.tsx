"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TiltCard from "./TiltCard";

const steps = [
  {
    num: "01",
    title: "Оставляешь заявку —",
    accent: "30 секунд",
    desc: "Заполни форму — только имя и номер телефона. Никаких лишних полей.",
  },
  {
    num: "02",
    title: "Мы перезваниваем —",
    accent: "за 15 минут",
    desc: "Менеджер позвонит и ответит на все вопросы. Поможем выбрать платформу.",
  },
  {
    num: "03",
    title: "Оформляем документы —",
    accent: "бесплатно",
    desc: "Помогаем с самозанятостью и всеми бумагами за 24 часа. Всё сами.",
  },
  {
    num: "04",
    title: "Выдаём велосипед —",
    accent: "первая неделя 0 ₽",
    desc: "Получаешь электровелосипед бесплатно на первую неделю работы.",
  },
];

function StepCard({ s, i }: { s: typeof steps[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: i * 0.15 }}
      style={{ height: "100%" }}
    >
      <TiltCard className="h-full">
      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: "15px",
          padding: "28px",
          position: "relative",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Лаймовый бейдж — правый верхний угол */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
            delay: i * 0.15 + 0.2,
          }}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "54px",
            height: "54px",
            background: "var(--lime)",
            borderRadius: "0 15px 0 15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 900,
            fontSize: "20px",
            color: "#111110",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}>
            {s.num}
          </span>
        </motion.div>

        {/* Заголовок */}
        <div style={{ marginBottom: "16px", paddingRight: "40px" }}>
          <div style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 800,
            fontSize: "clamp(14px, 1.5vw, 17px)",
            color: "var(--text-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.01em",
            lineHeight: 1.25,
            marginBottom: "4px",
          }}>
            {s.title}
          </div>
          <div style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 800,
            fontSize: "clamp(14px, 1.5vw, 17px)",
            color: "var(--lime-dark)",
            textTransform: "uppercase",
            letterSpacing: "0.01em",
            lineHeight: 1.25,
          }}>
            {s.accent}
          </div>
        </div>

        {/* Описание */}
        <p style={{
          fontSize: "14px",
          color: "var(--text-sub)",
          lineHeight: 1.65,
          fontWeight: 500,
          flex: 1,
        }}>
          {s.desc}
        </p>
      </div>
      </TiltCard>
    </motion.div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how" style={{ background: "var(--bg-primary)" }} className="py-12 lg:py-20">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>

        {/* Заголовок */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="heading"
          style={{
            fontSize: "clamp(36px, 5vw, 60px)",
            color: "var(--text-primary)",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Как начать работать
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          style={{
            fontSize: "17px", fontWeight: 500,
            color: "var(--text-sub)", marginBottom: "40px",
            maxWidth: "480px", lineHeight: 1.6,
          }}
        >
          От заявки до первого рабочего дня — четыре простых шага.
        </motion.p>

        {/* Карточки */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "16px",
        }}>
          {steps.map((s, i) => <StepCard key={s.num} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
