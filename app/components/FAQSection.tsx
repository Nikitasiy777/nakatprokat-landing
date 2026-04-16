"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    id: 1,
    q: "Нужен ли опыт работы курьером?",
    a: "Нет, опыт не нужен. Мы обучаем всему необходимому и помогаем разобраться в приложении на старте.",
  },
  {
    id: 2,
    q: "Нужен ли свой велосипед?",
    a: "Нет! Мы выдаём электровелосипед бесплатно на первую неделю работы. Это наше главное преимущество — у других партнёров такого нет.",
  },
  {
    id: 3,
    q: "Как быстро можно начать работать?",
    a: "Если документы в порядке — выходишь на линию уже на следующий день. Помогаем оформить самозанятость за 24 часа.",
  },
  {
    id: 4,
    q: "Граждане СНГ могут работать?",
    a: "Да, принимаем граждан России и СНГ при наличии разрешения на работу. Менеджер проконсультирует по документам.",
  },
  {
    id: 5,
    q: "Когда выплачивают деньги?",
    a: "Выплаты производим мы сами — напрямую, без задержек. У нас всё строго: деньги приходят в оговорённые сроки, никаких «подождите ещё пару дней». Накат Прокат за своих курьеров отвечает.",
  },
  {
    id: 6,
    q: "Можно ли совмещать с учёбой?",
    a: "Да! График полностью гибкий — можно работать 4 часа в день или полный день, как удобно.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" style={{ background: "var(--bg-primary)" }} className="py-12 lg:py-20">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>

        {/* Заголовок */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          style={{ marginBottom: "40px" }}
        >
          <h2 className="heading" style={{
            fontSize: "clamp(36px, 5vw, 60px)",
            color: "var(--text-primary)",
            textTransform: "uppercase" as const,
            marginBottom: 12,
          }}>
            Часто задают вопросы
          </h2>
          <p style={{
            fontSize: "16px", color: "var(--text-sub)",
            lineHeight: 1.65, fontWeight: 500, maxWidth: "480px",
          }}>
            Не нашёл ответа — звони, ответим за 15 минут.
          </p>
        </motion.div>

        {/* Аккордеон — двухколоночный */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
          {[faqs.slice(0, 3), faqs.slice(3)].map((col, colIdx) => (
            <motion.div
              key={colIdx}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1], delay: 0.1 + colIdx * 0.08 }}
            >
              <Accordion type="single" collapsible>
                {col.map((faq, i) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1], delay: 0.12 + (colIdx * 3 + i) * 0.06 }}
                    whileHover={{
                      borderColor: "var(--border-active)",
                      boxShadow: "0 4px 20px rgba(44,44,44,0.06)",
                      transition: { duration: 0.2 },
                    }}
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: "16px",
                      marginBottom: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <AccordionItem value={`item-${faq.id}`} style={{ border: "none" }}>
                      <AccordionTrigger>
                        <span style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          lineHeight: 1.45,
                          paddingRight: "12px",
                        }}>
                          {faq.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p style={{
                          fontSize: "14.5px",
                          color: "var(--text-sub)",
                          lineHeight: 1.7,
                          fontWeight: 500,
                        }}>
                          {faq.a}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
