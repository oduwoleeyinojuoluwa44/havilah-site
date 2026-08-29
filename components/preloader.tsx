"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const HOLD_MS = 2200;
const EXIT_DURATION = 1.05;

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(rm);

    // Lock body scroll while preloader is visible to prevent touch shifts on mobile
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const t = setTimeout(() => {
      setVisible(false);
    }, rm ? 100 : HOLD_MS);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleExitComplete = () => {
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="preloader-curtain"
          className="fixed inset-0 z-[100] bg-ink flex items-center justify-center pointer-events-auto select-none"
          initial={{ y: 0, opacity: 1 }}
          exit={reducedMotion ? { opacity: 0 } : { y: "-100%" }}
          transition={{
            duration: reducedMotion ? 0.3 : EXIT_DURATION,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {/* Center Brand Logo Content */}
          <motion.div
            className="text-center text-white px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{
              duration: reducedMotion ? 0.2 : 0.7,
              ease: "easeOut",
            }}
          >
            <span className="font-great-vibes text-gold block text-[clamp(48px,8vw,96px)] leading-none">
              Havilah
            </span>
            <span className="text-[12px] tracking-[6px] text-white/65 uppercase mt-3 block">
              Nigeria
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}




