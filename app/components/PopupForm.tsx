"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: Props) {
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm]       = useState({ name: "", phone: "", platform: "" });
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", phone: "", platform: "" });
      setConsent(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(28, 27, 24, 0.6)",
              backdropFilter: "blur(4px)",
              zIndex: 1000,
            }}
          />

          {/* Центрирующая обёртка */}
          <div
            key="modal-wrap"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1001,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
              pointerEvents: "none",
            }}
          >
          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            style={{
              width: "100%",
              maxWidth: "460px",
              pointerEvents: "auto",
            }}
          >
            <div style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "24px",
              padding: "32px",
              boxShadow: "0 24px 80px rgba(28,27,24,0.18)",
              position: "relative",
            }}>
              {/* Кнопка закрытия */}
              <button
                onClick={handleClose}
                style={{
                  position: "absolute", top: 16, right: 16,
                  width: 36, height: 36, borderRadius: "50%",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <X size={16} style={{ color: "var(--text-sub)" }} />
              </button>

              {sent ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "16px 0 8px", gap: 16 }}>
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                    style={{
                      width: 72, height: 72, borderRadius: "50%",
                      background: "var(--lime-bg)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <CheckCircle size={36} style={{ color: "var(--lime-dark)" }} />
                  </motion.div>
                  <h3 className="heading" style={{ fontSize: "28px", color: "var(--text-primary)" }}>Заявка принята!</h3>
                  <p style={{ color: "var(--text-sub)", fontWeight: 500, lineHeight: 1.6 }}>
                    Мы позвоним тебе в течение 15 минут.
                  </p>
                  <button onClick={handleClose} className="btn-primary" style={{ marginTop: 8, width: "100%" }}>
                    Закрыть
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ paddingRight: 32 }}>
                    <div style={{
                      display: "inline-flex", alignItems: "center",
                      background: "var(--lime-bg)", borderRadius: 99,
                      padding: "4px 12px", marginBottom: 10,
                    }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "var(--lime-dark)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                        Бесплатно
                      </span>
                    </div>
                    <h3 className="heading" style={{ fontSize: "24px", color: "var(--text-primary)", lineHeight: 1.15 }}>
                      Оставь заявку — перезвоним за 15 минут
                    </h3>
                  </div>

                  {/* Имя */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>Имя</label>
                    <input
                      type="text" required placeholder="Введи своё имя"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={{
                        background: "var(--bg-secondary)", border: "1px solid var(--border)",
                        borderRadius: "12px", color: "var(--text-primary)",
                        padding: "13px 16px", fontSize: "16px", width: "100%",
                        outline: "none", fontFamily: "var(--font-inter)", transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--lime)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                    />
                  </div>

                  {/* Телефон */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>Телефон</label>
                    <input
                      type="tel" required placeholder="+7 (___) ___-__-__"
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={{
                        background: "var(--bg-secondary)", border: "1px solid var(--border)",
                        borderRadius: "12px", color: "var(--text-primary)",
                        padding: "13px 16px", fontSize: "16px", width: "100%",
                        outline: "none", fontFamily: "var(--font-inter)", transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--lime)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                    />
                  </div>

                  {/* Платформа */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>Платформа</label>
                    <select
                      value={form.platform} onChange={(e) => setForm({ ...form, platform: e.target.value })}
                      style={{
                        background: "var(--bg-secondary)", border: "1px solid var(--border)",
                        borderRadius: "12px", color: form.platform ? "var(--text-primary)" : "var(--text-sub)",
                        padding: "13px 16px", fontSize: "16px", width: "100%",
                        outline: "none", appearance: "none",
                        fontFamily: "var(--font-inter)", transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--lime)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                    >
                      <option value="">Выбери платформу</option>
                      <option value="market">Яндекс Маркет (велокурьер)</option>
                      <option value="samokat">Самокат (пеший курьер)</option>
                      <option value="any">Не знаю — помогите выбрать</option>
                    </select>
                  </div>

                  {/* Чекбокс согласия */}
                  <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      style={{ marginTop: 3, flexShrink: 0, width: 16, height: 16, accentColor: "var(--lime-dark)", cursor: "pointer" }}
                    />
                    <span style={{ fontSize: "12px", color: "var(--text-sub)", lineHeight: 1.6, fontWeight: 500 }}>
                      Я даю{" "}
                      <a href="/personal-data" target="_blank" rel="noopener noreferrer" style={{ color: "var(--lime-dark)", textDecoration: "underline" }}>
                        согласие на обработку персональных данных
                      </a>{" "}
                      в соответствии с{" "}
                      <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--lime-dark)", textDecoration: "underline" }}>
                        Политикой конфиденциальности
                      </a>
                    </span>
                  </label>

                  <motion.button
                    whileHover={{ scale: consent ? 1.02 : 1 }} whileTap={{ scale: consent ? 0.97 : 1 }}
                    type="submit" disabled={loading || !consent}
                    style={{
                      background: "var(--lime)", color: "#111110",
                      fontWeight: 700, fontSize: "17px", borderRadius: "14px",
                      height: "54px", width: "100%", border: "none",
                      cursor: (loading || !consent) ? "default" : "pointer",
                      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                      opacity: (loading || !consent) ? 0.55 : 1, transition: "opacity 0.2s",
                      boxShadow: "0 2px 0 0 var(--lime-dark)",
                    }}
                  >
                    {loading ? "Отправляем..." : <><Send size={15} /> Отправить заявку</>}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
