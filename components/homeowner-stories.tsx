"use client";

import { motion } from "motion/react";
import { testimonials } from "@/data/testimonials";
import styles from "./homeowner-stories.module.css";

export default function HomeownerStories() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="section-kicker">In Their Words</p>
        <h2 className={styles.heading}>
          What our residents say
          <span className="script"> after they move in</span>
        </h2>
      </motion.div>

      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.id}
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
          >
            <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className={styles.attribution}>
              <div className={styles.author}>— {t.author}</div>
              <div className={styles.date}>{t.date}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
