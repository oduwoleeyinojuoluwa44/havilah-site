"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={styles.section} id="about">
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="section-kicker">The Company</p>
        <h2 className={styles.heading}>
          Built on trust,
          <span className="script"> one relationship at a time</span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.body}>
            <p className={styles.lead}>
              Havilah Development and Management Services Limited is a real
              estate development company with over seven years of experience
              delivering quality, well-designed properties across Lagos. Over
              the years, we have grown from a promising developer into a trusted
              name synonymous with architectural excellence, integrity, and
              reliability.
            </p>

            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
              >
                <p>
                  We are committed to building unique architectural designs that
                  stand out: properties that combine creativity, functionality,
                  and enduring quality. Every project we undertake is approached
                  with a fresh perspective, ensuring that our developments are
                  not just structures, but well-thought-out spaces that meet the
                  needs and aspirations of our clients.
                </p>
                <p>
                  Beyond development, Havilah is deeply involved in property
                  management, offering our clients the assurance that their
                  investments are well-maintained and continuously valuable long
                  after construction is complete. This complete, hands-on
                  approach allows us to maintain full control over quality at
                  every stage, from design and construction to long-term upkeep.
                </p>
                <p>
                  But what truly sets Havilah apart is not just what we build, it
                  is the trust we have built alongside it. We don&apos;t just
                  sell properties; we have earned the confidence of individuals,
                  families, and investors who continue to choose us because of
                  our consistency, transparency, and commitment to delivering on
                  our promises.
                </p>
                <p className={styles.close}>
                  At Havilah Development and Management Services Limited, our
                  foundation is built on more than concrete and steel. It is
                  built on trust: one project, one client, and one relationship
                  at a time.
                </p>
              </motion.div>
            )}

            {!expanded && (
              <button
                className={styles.readMore}
                onClick={() => setExpanded(true)}
              >
                Read more ▾
              </button>
            )}
          </div>

          <div className={styles.imageWrap}>
            <Image
              src="/images/courtyard.jpg"
              alt="Havilah courtyard view"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
