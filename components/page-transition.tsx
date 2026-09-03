"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/* A curtain that sweeps through on every route change.
   The pages are static and navigate almost instantly, so a spinner would
   flash by without registering. This is a deliberate transition instead: it
   covers the screen, holds briefly while the new page mounts underneath,
   then clears upward. */
const COVER_S = 0.42;
const HOLD_MS = 240;

export default function PageTransition() {
  const pathname = usePathname();
  const [covering, setCovering] = useState(false);
  const firstRender = useRef(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    /* Nothing to transition from on the very first paint; the preloader
       already covers that. */
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (reduce) return;

    setCovering(true);
    const id = setTimeout(() => setCovering(false), HOLD_MS);
    return () => clearTimeout(id);
  }, [pathname, reduce]);

  return (
    <AnimatePresence>
      {covering && (
        <motion.div
          key="curtain"
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-ink"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: COVER_S, ease: [0.65, 0.05, 0.36, 1] }}
        >
          <motion.span
            className="font-cormorant text-[26px] tracking-[6px] text-paper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            HAVILAH
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
