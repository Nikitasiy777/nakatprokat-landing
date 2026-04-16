"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { label: "Вакансии",       href: "#vacancies" },
  { label: "Как устроиться", href: "#how" },
  { label: "Вопросы",        href: "#faq" },
  { label: "Контакты",       href: "#form" },
];

/* ── Анимированный бургер → X ── */
function MenuToggle({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Закрыть меню" : "Открыть меню"}
      style={{
        background: "none",
        border: "1.5px solid var(--border)",
        borderRadius: "10px",
        width: "38px", height: "38px",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", flexShrink: 0,
      }}
    >
      <svg
        strokeWidth={2.5}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 32 32"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          width: 20, height: 20,
          color: "var(--text-primary)",
          transform: open ? "rotate(-45deg)" : "rotate(0deg)",
          transition: "transform 0.45s cubic-bezier(0.23,1,0.32,1)",
        }}
      >
        <path
          style={{
            strokeDasharray: open ? "20 300" : "12 63",
            strokeDashoffset: open ? "-32.42px" : "0",
            transition: "stroke-dasharray 0.45s cubic-bezier(0.23,1,0.32,1), stroke-dashoffset 0.45s cubic-bezier(0.23,1,0.32,1)",
          }}
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        />
        <path d="M7 16 27 16" />
      </svg>
    </button>
  );
}

export default function Header() {
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Блокируем скролл body пока Sheet открыт */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Floating header ── */}
      <div style={{
        position: "fixed", top: "16px", left: 0, right: 0,
        zIndex: 100, display: "flex", justifyContent: "center",
        padding: "0 16px",
      }}>
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            width: "100%", maxWidth: "1280px",
            background: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            borderRadius: "15px",
            border: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            boxShadow: scrolled
              ? "0 8px 36px rgba(44,44,44,0.10)"
              : "0 2px 12px rgba(44,44,44,0.06)",
            transition: "box-shadow 0.3s",
          }}
        >
          <div style={{ padding: "0 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "32px", height: "64px" }}>

              {/* Логотип */}
              <a href="#" style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center" }}>
                <img src="/assets/logo.svg" alt="Накат Прокат" style={{ height: "36px", width: "auto" }} />
              </a>

              {/* Desktop nav */}
              <nav style={{ alignItems: "center", gap: "4px", flex: 1 }}
                className="hidden md:flex">
                {nav.map((item, i) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setActive(i)}
                    style={{
                      position: "relative",
                      padding: "6px 12px",
                      fontSize: "14px",
                      fontWeight: active === i ? 700 : 500,
                      color: active === i ? "var(--text-primary)" : "var(--text-sub)",
                      textDecoration: "none",
                      transition: "color 0.18s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => { if (active !== i) e.currentTarget.style.color = "var(--text-primary)"; }}
                    onMouseLeave={(e) => { if (active !== i) e.currentTarget.style.color = "var(--text-sub)"; }}
                  >
                    {item.label}
                    {active === i && (
                      <motion.span
                        layoutId="nav-underline"
                        style={{
                          position: "absolute", bottom: -1, left: 12, right: 12,
                          height: "2px", background: "var(--lime-dark)", borderRadius: "2px",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                ))}
              </nav>

              {/* Right side */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginLeft: "auto", flexShrink: 0 }}>

                {/* Телефон — только lg+ */}
                <a href="tel:+78432130420" className="hidden lg:flex"
                  style={{ alignItems: "center", gap: "6px", textDecoration: "none",
                    fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap" }}>
                  <Phone size={14} style={{ color: "var(--lime-dark)" }} />
                  8 (843) 213-04-20
                </a>

                {/* Telegram — только lg+ */}
                <a href="https://t.me/nakatprokat" title="Telegram" className="hidden lg:flex"
                  style={{ width: 34, height: 34, borderRadius: "10px", background: "var(--lime-bg)", border: "1px solid rgba(191,230,95,0.3)", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--lime-dark)">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>

                {/* Max — только lg+ */}
                <a href="https://vk.me/nakatprokat" title="Max" className="hidden lg:flex"
                  style={{ width: 34, height: 34, borderRadius: "10px", background: "var(--lime-bg)", border: "1px solid rgba(191,230,95,0.3)", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 17 17" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.70072 4.14552C6.49435 4.02979 4.77259 5.56075 4.39296 7.95701C4.07851 9.94138 4.63598 12.3593 5.11282 12.4811C5.31504 12.5327 5.80171 12.1604 6.15581 11.8265C6.22234 11.7637 6.32304 11.7532 6.40109 11.8009C6.95304 12.1384 7.57795 12.3921 8.2669 12.4282C10.532 12.547 12.5392 10.7742 12.6579 8.50896C12.7765 6.2437 10.9658 4.26427 8.70072 4.14552ZM5.00602 15.6494C4.92062 15.5889 4.80293 15.6053 4.73131 15.6817C3.77443 16.7023 1.32547 17.4182 1.2133 16.0252C1.2133 14.9338 0.96816 14.0141 0.698256 13.0015C0.36768 11.7613 0 10.3818 0 8.37681C0 3.59568 3.92117 0 8.5703 0C13.2195 0 16.8646 3.77122 16.8646 8.42323C16.8646 13.0753 13.1034 16.7536 8.61432 16.7536C7.02168 16.7536 6.24878 16.5293 5.00602 15.6494Z" fill="var(--lime-dark)" />
                  </svg>
                </a>

                {/* CTA — только md+ */}
                <a href="#form"
                  className="hidden md:inline-flex"
                  style={{
                    alignItems: "center", justifyContent: "center",
                    height: "38px", padding: "0 20px",
                    border: "1.5px solid var(--border-active)", borderRadius: "15px",
                    fontSize: "12px", fontWeight: 800, letterSpacing: "0.04em",
                    color: "var(--lime)", textDecoration: "none",
                    textTransform: "uppercase", whiteSpace: "nowrap",
                    transition: "background 0.18s, color 0.18s, transform 0.14s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--lime)";
                    e.currentTarget.style.color = "#111110";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--lime)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Трудоустройство
                </a>

                {/* Burger — только mobile */}
                <div className="md:hidden">
                  <MenuToggle open={open} onClick={() => setOpen(!open)} />
                </div>
              </div>
            </div>
          </div>
        </motion.header>
      </div>

      {/* ── Mobile Sheet (slide from left) ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed", inset: 0, zIndex: 98,
                background: "rgba(44,44,44,0.32)",
                backdropFilter: "blur(4px)",
              }}
            />

            {/* Drawer */}
            <motion.div
              key="sheet"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 34 }}
              style={{
                position: "fixed", left: 0, top: 0, bottom: 0,
                width: "min(300px, 84vw)",
                zIndex: 99,
                background: "rgba(248, 246, 240, 0.97)",
                backdropFilter: "blur(16px)",
                borderRight: "1px solid var(--border)",
                boxShadow: "8px 0 48px rgba(44,44,44,0.12)",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* Sheet header */}
              <div style={{
                padding: "13px 16px 13px 20px",
                borderBottom: "1px solid var(--border)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <img src="/assets/logo.svg" alt="Накат Прокат" style={{ height: "32px", width: "auto" }} />
                <MenuToggle open={open} onClick={() => setOpen(false)} />
              </div>

              {/* Nav links */}
              <nav style={{ flex: 1, padding: "16px 12px", display: "flex", flexDirection: "column", gap: "2px", overflowY: "auto" }}>
                {nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => { setActive(i); setOpen(false); }}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.065 + 0.08, duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                    style={{
                      padding: "13px 14px",
                      fontSize: "16px", fontWeight: 600,
                      color: "var(--text-primary)", textDecoration: "none",
                      borderRadius: "12px",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg-elevated)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              {/* Sheet footer */}
              <div style={{
                padding: "16px 20px",
                borderTop: "1px solid var(--border)",
                display: "flex", flexDirection: "column", gap: "10px",
                background: "rgba(238, 236, 234, 0.8)",
              }}>
                <a href="tel:+78432130420" style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  fontSize: "15px", fontWeight: 600,
                  color: "var(--text-primary)", textDecoration: "none",
                }}>
                  <Phone size={15} style={{ color: "var(--lime-dark)" }} />
                  8 (843) 213-04-20
                </a>
                <div style={{ display: "flex", gap: 8 }}>
                  <a href="https://t.me/nakatprokat" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7, padding: "9px 12px", borderRadius: "12px", background: "var(--lime-bg)", border: "1px solid rgba(191,230,95,0.3)", textDecoration: "none", fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--lime-dark)">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    Telegram
                  </a>
                  <a href="https://vk.me/nakatprokat" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7, padding: "9px 12px", borderRadius: "12px", background: "var(--lime-bg)", border: "1px solid rgba(191,230,95,0.3)", textDecoration: "none", fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>
                    <svg width="14" height="14" viewBox="0 0 17 17" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.70072 4.14552C6.49435 4.02979 4.77259 5.56075 4.39296 7.95701C4.07851 9.94138 4.63598 12.3593 5.11282 12.4811C5.31504 12.5327 5.80171 12.1604 6.15581 11.8265C6.22234 11.7637 6.32304 11.7532 6.40109 11.8009C6.95304 12.1384 7.57795 12.3921 8.2669 12.4282C10.532 12.547 12.5392 10.7742 12.6579 8.50896C12.7765 6.2437 10.9658 4.26427 8.70072 4.14552ZM5.00602 15.6494C4.92062 15.5889 4.80293 15.6053 4.73131 15.6817C3.77443 16.7023 1.32547 17.4182 1.2133 16.0252C1.2133 14.9338 0.96816 14.0141 0.698256 13.0015C0.36768 11.7613 0 10.3818 0 8.37681C0 3.59568 3.92117 0 8.5703 0C13.2195 0 16.8646 3.77122 16.8646 8.42323C16.8646 13.0753 13.1034 16.7536 8.61432 16.7536C7.02168 16.7536 6.24878 16.5293 5.00602 15.6494Z" fill="var(--lime-dark)" />
                    </svg>
                    Max
                  </a>
                </div>
                <a
                  href="#form"
                  className="btn-primary"
                  onClick={() => setOpen(false)}
                  style={{ textAlign: "center", fontSize: "14px" }}
                >
                  Оставить заявку
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer под фиксированным header */}
      <div style={{ height: "96px" }} />
    </>
  );
}
