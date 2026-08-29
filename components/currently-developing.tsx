"use client";

import Image from "next/image";
import { motion } from "motion/react";
import styles from "./currently-developing.module.css";

export default function CurrentlyDeveloping() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="section-kicker">Currently Developing</p>

        <h2 className={styles.title}>HAVILAH COURT 5</h2>
        <p className={styles.location}>
          Beach Resort Estate, Lekki &middot; Ongoing
        </p>

        <div className={styles.imageWrap}>
          <Image
            src="/images/flag-01.jpg"
            alt="Havilah Court 5 front elevation"
            fill
            sizes="(max-width: 900px) 100vw, 86vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p className={styles.description}>
          Four semi-detached homes, nineteen four-bedroom terraces and sixteen
          apartments, with a gym, swimming pool and children&apos;s play area.
        </p>

        <a href="/inspection" className="btn-pill">
          Book an Inspection
        </a>
      </motion.div>
    </section>
  );
}
