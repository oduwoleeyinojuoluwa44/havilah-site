"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./preloader.module.css";

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
          className={styles.preloader}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className={styles.mark}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="script" style={{ fontSize: "clamp(48px, 8vw, 96px)", display: "block" }}>
              Havilah
            </span>
            <span className={styles.sub}>Nigeria</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
