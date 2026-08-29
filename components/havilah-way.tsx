"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import styles from "./havilah-way.module.css";

const slides = [
  {
    number: "01",
    title: "DESIGN",
    copy: "Bold facades, layered stone and clean white volumes: architecture that reads as a signature, not a template.",
    image: "/images/swap-01.jpg",
    alt: "Stone and white facade of the Havilah development",
  },
  {
    number: "02",
    title: "BUILD",
    copy: "Delivered structures you can walk through, not just render.",
    image: "/images/swap-02.jpg",
    alt: "Delivered terrace row with glazed balconies",
  },
  {
    number: "03",
    title: "MANAGEMENT",
    copy: "Property management keeps every investment maintained and continuously valuable, long after handover.",
    image: "/images/swap-03.jpg",
    alt: "Planted frontage along the Havilah terraces",
  },
];

const CYCLE_MS = 5000;

export default function HavilahWay() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const slide = slides[current];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className="section-kicker">What Makes Havilah Different</p>

        <div className={styles.content}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className={styles.slide}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className={styles.numberLine}>
                <span className={styles.number}>{slide.number}</span>
                <span className={styles.titleText}>{slide.title}</span>
              </div>

              <div className={styles.imageWrap}>
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <p className={styles.copy}>{slide.copy}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.pager}>
          <span className={styles.pagerNum}>
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <div className={styles.bar}>
            <motion.div
              className={styles.barFill}
              key={`bar-${current}`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
