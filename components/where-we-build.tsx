"use client";

import Image from "next/image";
import { motion } from "motion/react";
import styles from "./where-we-build.module.css";

export default function WhereWeBuild() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.imageCol}>
          <Image
            src="/images/courtyard.jpg"
            alt="Street view with palms"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-kicker">Where We Build</p>
          <h2 className={styles.heading}>
            Rooted in well-connected neighbourhoods
          </h2>
          <p className={styles.body}>
            Minutes from the major corridors, established estates and the daily
            conveniences that make an address worth keeping.
          </p>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <span className={styles.year}>2017</span>
              <span className={styles.label}>First delivery</span>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.year}>Today</span>
              <span className={styles.label}>Two ongoing, one in pipeline</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
