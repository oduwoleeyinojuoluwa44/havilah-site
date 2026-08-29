"use client";

import { motion } from "motion/react";

export default function FinalCta() {
  return (
    <section className="relative py-[clamp(60px,7vh,78px)] px-8 pb-[clamp(48px,5.5vh,62px)] bg-paper text-center overflow-hidden" id="contact">
      <motion.div
        className="max-w-[600px] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-xs tracking-[5px] uppercase text-gold-deep mb-6">
          Havilah Development &amp; Management Services Ltd.
        </p>
        <h2 className="text-[clamp(38px,6.5vw,86px)] leading-[1.02] uppercase font-cormorant font-medium">
          Built on{" "}
          <span className="font-great-vibes text-gold normal-case text-[0.68em] my-2 block">
            trust
          </span>{" "}
          one project at a time
        </h2>
        <p className="max-w-[480px] mx-auto mt-9 text-[14px] leading-[1.85] text-[#3f434b]">
          A short conversation is enough to understand which property fits: a
          family home, an investment, or a place to put down roots. Come and
          walk the site with us.
        </p>
        <div className="mt-[38px]">
          <a href="/inspection" className="btn-pill">
            Book an Inspection
          </a>
        </div>
      </motion.div>
    </section>
  );
}
