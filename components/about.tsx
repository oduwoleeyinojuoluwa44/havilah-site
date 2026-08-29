"use client";

import { motion } from "motion/react";
const sections = [
  {
    heading: "Who We Are",
    body: (
      <p className="text-[16px] leading-[1.8] text-[#2b2e35]">
        Havilah Development and Management Services Limited is a real estate
        development company with over seven years of experience delivering
        quality, well-designed properties in the Eyebrow area of Lekki, Lagos
        State. Over the years, we have grown from a promising developer into a
        trusted name synonymous with architectural excellence, integrity, and
        reliability.
      </p>
    ),
  },
  {
    heading: "Our Approach to Design",
    body: (
      <p className="text-[16px] leading-[1.8] text-[#2b2e35]">
        We are committed to building unique architectural designs that stand out
        properties that combine creativity, functionality, and enduring quality.
        Every project we undertake is approached with a fresh perspective,
        ensuring that our developments are not just structures, but well-thought
        out spaces that meet the needs and aspirations of our clients.
      </p>
    ),
  },
  {
    heading: "Property Management",
    body: (
      <p className="text-[16px] leading-[1.8] text-[#2b2e35]">
        Beyond development, Havilah is deeply involved in property management,
        offering our clients the assurance that their investments are
        well-maintained and continuously valuable long after construction is
        complete. This complete, hands-on approach allows us to maintain full
        control over quality at every stage, from design and construction to
        long-term upkeep.
      </p>
    ),
  },
  {
    heading: "Built on Trust",
    body: (
      <>
        <p className="text-[16px] leading-[1.8] text-[#2b2e35]">
          But what truly sets Havilah apart is not just what we build it&apos;s
          the trust we have built alongside it. We don&apos;t just sell
          properties; we have earned the confidence of individuals, families, and
          investors who continue to choose us because of our consistency,
          transparency, and commitment to delivering on our promises. Every
          property we hand over carries our name and our reputation, and we take
          that responsibility seriously.
        </p>
        <p className="text-[16px] leading-[1.8] text-[#2b2e35] mt-4">
          At Havilah Development and Management Services Limited, our foundation
          is built on more than concrete and steel, it&apos;s built on trust,
          one project, one client, and one relationship at a time.
        </p>
      </>
    ),
  },
];

export default function About() {
  return (
    <section
      className="relative py-[clamp(78px,10vh,120px)] px-[10vw] bg-paper overflow-hidden"
      id="about"
    >
      <motion.div
        className="max-w-[1100px] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="text-center mb-[clamp(34px,4.5vh,52px)]">
          <p className="text-xs tracking-[5px] uppercase text-gold-deep mb-5">
            The Company
          </p>
          <h2 className="text-[clamp(34px,5vw,64px)] leading-[1.08] uppercase font-cormorant font-medium flex flex-col items-center">
            <span>Built on trust,</span>
            <span className="font-great-vibes text-gold normal-case">
              one relationship at a time
            </span>
          </h2>
        </div>

        {/* 2×2 grid of subsections */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-12 max-md:grid-cols-1 max-md:gap-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h3 className="text-xs tracking-[5px] uppercase text-gold-deep mb-4">
                {s.heading}
              </h3>
              {s.body}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
