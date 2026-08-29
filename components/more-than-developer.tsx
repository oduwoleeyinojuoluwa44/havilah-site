"use client";

import Image from "next/image";
import { motion } from "motion/react";
import styles from "./more-than-developer.module.css";

export default function MoreThanDeveloper() {
  return (
    <section className={styles.section} id="management">
      <div className={styles.grid}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-kicker section-kicker--light">
            More Than a Developer
          </p>
          <h2 className={styles.heading}>
            We stay <span className="script">long after</span> handover
          </h2>
          <p className={styles.body}>
            Havilah is deeply involved in property management, the assurance
            that your investment is well-maintained and continuously valuable
            long after construction is complete. One hand on quality, from first
            drawing to every year that follows.
          </p>
          <div className={styles.points}>
            <div className={styles.point}>
              <span className={styles.dot} />
              Facility &amp; property management
            </div>
            <div className={styles.point}>
              <span className={styles.dot} />
              Maintenance &amp; long-term upkeep
            </div>
            <div className={styles.point}>
              <span className={styles.dot} />
              Value preservation for investors
            </div>
            <div className={styles.point}>
              <span className={styles.dot} />
              Design-to-management quality control
            </div>
          </div>
        </motion.div>

        <div className={styles.imageCol}>
          <Image
            src="/images/completed-1.jpg"
            alt="Completed Havilah property"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
