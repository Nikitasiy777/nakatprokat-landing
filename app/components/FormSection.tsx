"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, Bike, FileCheck, MessageCircle, Globe, Phone, MapPin, Mail } from "lucide-react";
import TiltCard from "./TiltCard";

function AnimatedInput({ label, fieldKey, value, onChange, type, placeholder, required }: {
  label: string; fieldKey: string; value: string;
  onChange: (val: string) => void; type: string; placeholder: string; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>{label}</label>
      <motion.input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        animate={{
          borderColor: focused ? "var(--lime)" : "var(--border)",
          boxShadow: focused ? "0 0 0 3px rgba(191, 230, 95, 0.2)" : "0 0 0 0px transparent",
        }}
        transition={{ duration: 0.2 }}
        style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          color: "var(--text-primary)",
          padding: "14px 16px",
          fontSize: "16px",
          width: "100%",
          outline: "none",
          fontFamily: "var(--font-inter)",
        }}
      />
    </div>
  );
}

export default function FormSection() {
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm]       = useState({ name: "", phone: "", platform: "" });
  const [consent, setConsent] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="form" style={{ background: "radial-gradient(ellipse 100% 60% at 50% 50%, rgba(191,230,95,0.11) 0%, rgba(191,230,95,0.04) 50%, var(--bg-primary) 80%)" }} className="py-12 lg:py-20">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }} ref={ref}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }}
          className="lg:grid-cols-2 lg:gap-20 lg:items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="heading" style={{ fontSize: "clamp(36px, 5vw, 60px)", color: "var(--text-primary)", textTransform: "uppercase" as const, marginBottom: 16 }}>
              Оставь заявку — перезвоним за 15 минут
            </h2>
            <p style={{ fontSize: "16px", color: "var(--text-sub)", lineHeight: 1.65, marginBottom: 32, fontWeight: 500 }}>
              Менеджер свяжется с тобой в ближайшее время. Поможем выбрать платформу и оформим все документы.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Bike,           title: "Велосипед бесплатно", desc: "На первую неделю — без залога" },
                { icon: FileCheck,      title: "Самозанятость",        desc: "Оформляем бесплатно за 24 ч" },
                { icon: MessageCircle,  title: "Личный менеджер",      desc: "На связи после выхода на линию" },
                { icon: Globe,          title: "Граждане СНГ",         desc: "Работаем с РФ и СНГ" },
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                >
                <TiltCard>
                <div
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    height: "100%",
                  }}
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: "10px",
                    background: "var(--lime-bg)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={18} style={{ color: "var(--lime-dark)" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "2px" }}>
                      {title}
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--text-sub)", fontWeight: 500, lineHeight: 1.5 }}>
                      {desc}
                    </div>
                  </div>
                </div>
                </TiltCard>
                </motion.div>
              ))}
            </div>

            {/* Контакты */}
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
              <p style={{ fontSize: "11px", fontWeight: 800, color: "var(--lime-dark)", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 10 }}>
                Или напишите напрямую
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>

                <a href="tel:+78432130420" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 12px", borderRadius: "99px", background: "var(--bg-card)", border: "1px solid var(--border)", textDecoration: "none", fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap" }}>
                  <Phone size={12} style={{ color: "var(--lime-dark)" }} />
                  8 (843) 213-04-20
                </a>

                <a href="tel:+79173941235" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 12px", borderRadius: "99px", background: "var(--bg-card)", border: "1px solid var(--border)", textDecoration: "none", fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap" }}>
                  <Phone size={12} style={{ color: "var(--lime-dark)" }} />
                  8 (917) 394-12-35
                </a>

                <a href="https://t.me/nakatprokat" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 12px", borderRadius: "99px", background: "var(--bg-card)", border: "1px solid var(--border)", textDecoration: "none", fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--lime-dark)">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Telegram
                </a>

                <a href="https://vk.me/nakatprokat" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 12px", borderRadius: "99px", background: "var(--bg-card)", border: "1px solid var(--border)", textDecoration: "none", fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap" }}>
                  <svg width="13" height="13" viewBox="0 0 17 17" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.70072 4.14552C6.49435 4.02979 4.77259 5.56075 4.39296 7.95701C4.07851 9.94138 4.63598 12.3593 5.11282 12.4811C5.31504 12.5327 5.80171 12.1604 6.15581 11.8265C6.22234 11.7637 6.32304 11.7532 6.40109 11.8009C6.95304 12.1384 7.57795 12.3921 8.2669 12.4282C10.532 12.547 12.5392 10.7742 12.6579 8.50896C12.7765 6.2437 10.9658 4.26427 8.70072 4.14552ZM5.00602 15.6494C4.92062 15.5889 4.80293 15.6053 4.73131 15.6817C3.77443 16.7023 1.32547 17.4182 1.2133 16.0252C1.2133 14.9338 0.96816 14.0141 0.698256 13.0015C0.36768 11.7613 0 10.3818 0 8.37681C0 3.59568 3.92117 0 8.5703 0C13.2195 0 16.8646 3.77122 16.8646 8.42323C16.8646 13.0753 13.1034 16.7536 8.61432 16.7536C7.02168 16.7536 6.24878 16.5293 5.00602 15.6494Z" fill="var(--lime-dark)" />
                  </svg>
                  Max
                </a>

                <a href="mailto:nakatprokat@yandex.ru" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 12px", borderRadius: "99px", background: "var(--bg-card)", border: "1px solid var(--border)", textDecoration: "none", fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap" }}>
                  <Mail size={12} style={{ color: "var(--lime-dark)" }} />
                  nakatprokat@yandex.ru
                </a>

                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 12px", borderRadius: "99px", background: "var(--bg-card)", border: "1px solid var(--border)", fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap" }}>
                  <MapPin size={12} style={{ color: "var(--lime-dark)" }} />
                  Габдуллы Тукая, 113А
                </div>

              </div>
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "24px",
                padding: "clamp(20px, 4vw, 32px)",
                boxShadow: "0 4px 32px rgba(44,44,44,0.08)",
              }}
            >
              {sent ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "32px 0", gap: 16 }}>
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
                  <h3 className="heading" style={{ fontSize: "32px", color: "var(--text-primary)" }}>Заявка принята!</h3>
                  <p style={{ color: "var(--text-sub)", fontWeight: 500 }}>Мы позвоним тебе в течение 15 минут.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <h3 className="heading" style={{ fontSize: "clamp(24px, 2.5vw, 30px)", color: "var(--text-primary)", marginBottom: 4 }}>
                    Хочу стать курьером
                  </h3>

                  <AnimatedInput
                    label="Имя" fieldKey="name" type="text" placeholder="Введи своё имя"
                    value={form.name} onChange={(val) => setForm({ ...form, name: val })} required
                  />
                  <AnimatedInput
                    label="Телефон" fieldKey="phone" type="tel" placeholder="+7 (___) ___-__-__"
                    value={form.phone} onChange={(val) => setForm({ ...form, phone: val })} required
                  />

                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>Платформа</label>
                    <select
                      value={form.platform}
                      onChange={(e) => setForm({ ...form, platform: e.target.value })}
                      style={{
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        borderRadius: "12px",
                        color: form.platform ? "var(--text-primary)" : "var(--text-sub)",
                        padding: "14px 16px",
                        fontSize: "16px",
                        width: "100%",
                        outline: "none",
                        appearance: "none",
                        transition: "border-color 150ms, box-shadow 150ms",
                        fontFamily: "var(--font-inter)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--border-active)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                    >
                      <option value="">Выбери платформу</option>
                      <option value="market">Яндекс Маркет (велокурьер)</option>
                      <option value="kuper">Купер (велокурьер)</option>
                      <option value="samokat">Самокат (пеший курьер)</option>
                      <option value="vkusvill">Вкусвилл (пеший курьер)</option>
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
                      background: "var(--lime)",
                      color: "#111110",
                      fontWeight: 700,
                      fontSize: "18px",
                      borderRadius: "14px",
                      height: "56px",
                      width: "100%",
                      border: "none",
                      cursor: (loading || !consent) ? "default" : "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      opacity: (loading || !consent) ? 0.55 : 1,
                      transition: "opacity 0.2s",
                    }}
                  >
                    {loading ? "Отправляем..." : <><Send size={16} /> Отправить заявку</>}
                  </motion.button>
                </form>
              )}

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
