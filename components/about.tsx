"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative py-[clamp(78px,10vh,120px)] px-[10vw] bg-paper overflow-hidden" id="about">
      <motion.div
        className="max-w-[1000px] mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-xs tracking-[5px] uppercase text-gold-deep mb-5">
          The Company
        </p>
        <h2 className="text-[clamp(34px,5vw,64px)] leading-[1.08] uppercase font-cormorant font-medium">
          Built on trust,
          <span className="font-great-vibes text-gold normal-case"> one relationship at a time</span>
        </h2>

        <div className="grid grid-cols-[1.1fr_0.9fr] gap-12 mt-[clamp(34px,4.5vh,52px)] text-left max-md:grid-cols-1">
          <div>
            <p className="text-[17px] leading-[1.8] text-[#2b2e35] mb-5">
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
                <p className="text-[15px] leading-[1.9] text-[#3f434b] mb-5">
                  We are committed to building unique architectural designs that
                  stand out: properties that combine creativity, functionality,
                  and enduring quality. Every project we undertake is approached
                  with a fresh perspective, ensuring that our developments are
                  not just structures, but well-thought-out spaces that meet the
                  needs and aspirations of our clients.
                </p>
                <p className="text-[15px] leading-[1.9] text-[#3f434b] mb-5">
                  Beyond development, Havilah is deeply involved in property
                  management, offering our clients the assurance that their
                  investments are well-maintained and continuously valuable long
                  after construction is complete. This complete, hands-on
                  approach allows us to maintain full control over quality at
                  every stage, from design and construction to long-term upkeep.
                </p>
                <p className="text-[15px] leading-[1.9] text-[#3f434b] mb-5">
                  But what truly sets Havilah apart is not just what we build, it
                  is the trust we have built alongside it. We don&apos;t just
                  sell properties; we have earned the confidence of individuals,
                  families, and investors who continue to choose us because of
                  our consistency, transparency, and commitment to delivering on
                  our promises.
                </p>
                <p className="mt-6 pt-6 border-t border-line font-cormorant text-[20px] leading-[1.6] text-ink">
                  At Havilah Development and Management Services Limited, our
                  foundation is built on more than concrete and steel. It is
                  built on trust: one project, one client, and one relationship
                  at a time.
                </p>
              </motion.div>
            )}

            {!expanded && (
              <button
                className="bg-transparent border-0 font-jost text-[14px] text-gold-deep cursor-pointer p-0 tracking-[1px] hover:text-gold"
                onClick={() => setExpanded(true)}
              >
                Read more ▾
              </button>
            )}
          </div>

          <div className="relative w-full aspect-[4/5] overflow-hidden max-md:aspect-video max-md:order-first">
            <Image
              src="/images/courtyard.jpg"
              alt="Havilah courtyard view"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
