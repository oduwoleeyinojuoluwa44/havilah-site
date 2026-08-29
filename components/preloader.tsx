"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const timeout = setTimeout(
      () => setVisible(false),
      reducedMotion ? 100 : 2800
    );
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-ink flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span
              className="font-great-vibes text-gold block text-[clamp(48px,8vw,96px)]"
            >
              Havilah
            </span>
            <span className="text-[12px] tracking-[6px] text-white/65 uppercase mt-1.5 block">
              Nigeria
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
