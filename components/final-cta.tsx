"use client";

import { motion } from "motion/react";
import styles from "./final-cta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.section} id="contact">
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="section-kicker">
          Havilah Development &amp; Management Services Ltd.
        </p>
        <h2 className={styles.heading}>
          Built on <span className="script">trust</span> one project at a time
        </h2>
        <p className={styles.body}>
          A short conversation is enough to understand which property fits: a
          family home, an investment, or a place to put down roots. Come and
          walk the site with us.
        </p>
        <div style={{ marginTop: 38 }}>
          <a href="/inspection" className="btn-pill">
            Book an Inspection
          </a>
        </div>
      </motion.div>
    </section>
  );
}
