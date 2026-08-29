"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const EXIT_DURATION = 1.2;
const HOLD_MS = 1500;

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(rm);
    const t = setTimeout(() => setVisible(false), rm ? 100 : HOLD_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader-panel"
          className="fixed bottom-0 z-[100] bg-ink flex items-center justify-center overflow-hidden"
          style={{ left: "50%", transform: "translateX(-50%)", width: "100%", height: "100vh" }}
          exit={
            reducedMotion
              ? { opacity: 0 }
              : {
                  width: "0%",
                  height: 0,
                  borderTopLeftRadius: "9999px",
                  borderTopRightRadius: "9999px",
                }
          }
          transition={{
            duration: reducedMotion ? 0.3 : EXIT_DURATION,
            ease: "easeInOut",
          }}
        >
          {/* Content fades out over the full collapse duration */}
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: 0 }}
            transition={{
              duration: visible ? 0.6 : EXIT_DURATION,
              ease: "easeInOut",
            }}
          >
            <span className="font-great-vibes text-gold block text-[clamp(48px,8vw,96px)]">
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
