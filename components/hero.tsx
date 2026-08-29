"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import styles from "./hero.module.css";

const heroImages = [
  { src: "/images/hero-1.jpg", alt: "Havilah Court 5 front elevation" },
  { src: "/images/hero-2.jpg", alt: "Havilah Court 4 completed terraces" },
  { src: "/images/hero-3.jpg", alt: "Havilah Court 3 completed terraces" },
  { src: "/images/hero-4.jpg", alt: "Havilah Court 5 under construction" },
];

const CYCLE_MS = 6500;
const FADE_S = 1.2;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Full-bleed image layer */}
      <div className={styles.imgLayer}>
        <AnimatePresence>
          <motion.div
            key={current}
            className={styles.slide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: FADE_S, ease: "easeInOut" },
              scale: {
                duration: (CYCLE_MS - FADE_S * 1000) / 1000,
                ease: "easeOut",
                delay: FADE_S,
              },
            }}
          >
            <Image
              src={heroImages[current].src}
              alt={heroImages[current].alt}
              fill
              priority={current === 0}
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center 65%",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark readability overlay — sits above images, below text */}
      <div className={styles.overlay} />

      {/* Text content */}
      <div className={styles.copy}>
        <motion.p
          className={styles.kicker}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Development &middot; Management &middot; Lagos
        </motion.p>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          HAVILAH
        </motion.h1>

        <motion.p
          className={styles.scriptLine}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Building dreams, shaping communities
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a href="/#properties" className="btn-pill btn-pill--dark">
            Explore Properties
          </a>
          <a href="/inspection" className="btn-pill btn-pill--dark">
            Book an Inspection
          </a>
        </motion.div>

        <motion.p
          className={styles.stat}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          7+ Years of trusted development
        </motion.p>
      </div>
    </section>
  );
}
