"use client";

import React, { useRef, useState, useEffect } from "react";

type SpotlightProps = { children: React.ReactNode; className?: string };

export default function Spotlight({ children, className = "" }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [boxes, setBoxes] = useState<Array<HTMLElement>>([]);

  useEffect(() => {
    if (containerRef.current) {
      setBoxes(Array.from(containerRef.current.children).map((el) => el as HTMLElement));
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    boxes.forEach((box) => {
      const boxRect = box.getBoundingClientRect();
      const boxX = -(boxRect.left - rect.left) + x;
      const boxY = -(boxRect.top - rect.top) + y;
      box.style.setProperty("--mouse-x", `${boxX}px`);
      box.style.setProperty("--mouse-y", `${boxY}px`);
    });
  };

  return (
    <div className={className} ref={containerRef} onMouseMove={handleMouseMove}>
      {children}
    </div>
  );
}
