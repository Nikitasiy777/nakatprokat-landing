"use client";

import { motion } from "framer-motion";

/**
 * Обёртка с hover-эффектом: карточка поднимается, левый верхний угол
 * наклоняется ближе к пользователю (3D tilt через rotateX/rotateY).
 */
export default function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div style={{ perspective: "900px" }} className={className}>
      <motion.div
        whileHover={{
          y: -6,
          rotateX: -4,
          rotateY: 5,
          boxShadow: "0 20px 52px rgba(44,44,44,0.11)",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        style={{ transformStyle: "preserve-3d", height: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
