"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PopupForm from "./PopupForm";

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Показываем кнопку после того, как пользователь проскроллил 300px
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            style={{
              position: "fixed",
              zIndex: 900,
            }}
            // Десктоп: правый нижний угол / Мобильный: снизу по центру — управляем через className
            className="bottom-6 right-6 md:bottom-8 md:right-8 left-4 right-4 md:left-auto"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(159,204,58,0.35)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpen(true)}
              style={{
                background: "var(--lime)",
                color: "var(--dark)",
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "-0.01em",
                padding: "14px 28px",
                borderRadius: "15px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 0 0 var(--lime-dark), 0 8px 24px rgba(191,230,95,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                whiteSpace: "nowrap",
              }}
              // На мобильном — на всю ширину, на десктопе — авто
              className="w-full md:w-auto"
            >
              {/* Пульсирующая точка */}
              <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "var(--dark)", opacity: 0.5,
                  display: "inline-block",
                }} />
                <motion.span
                  animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    width: 8, height: 8, borderRadius: "50%",
                    background: "var(--dark)",
                    display: "inline-block",
                  }}
                />
              </span>
              Оставить заявку
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <PopupForm isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
