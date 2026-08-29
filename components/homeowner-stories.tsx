"use client";

import { motion } from "motion/react";
import { testimonials } from "@/data/testimonials";

export default function HomeownerStories() {
  return (
    <section className="relative bg-paper py-[clamp(80px,10vh,130px)] px-7">
      <motion.div
        className="text-center max-w-[640px] mx-auto mb-[clamp(40px,5vh,64px)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-xs tracking-[5px] uppercase text-gold-deep mb-3.5">
          In Their Words
        </p>
        <h2 className="text-[clamp(30px,4.4vw,52px)] uppercase leading-[1.1] font-cormorant font-medium">
          What our residents say
          <span className="block font-great-vibes text-gold normal-case text-[0.72em] mt-0.5">
            after they move in
          </span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-3 gap-6 max-w-[1100px] mx-auto max-md:grid-cols-1">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.id}
            className="bg-white border border-line p-[38px_32px_30px] relative m-0 flex flex-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
          >
            {/* Watermark quote mark */}
            <span className="absolute top-1.5 left-6 font-cormorant text-[76px] leading-none text-gold opacity-32 pointer-events-none select-none">
              &ldquo;
            </span>
            <blockquote className="m-0 mb-[22px] relative text-[14.5px] leading-[1.85] text-[#3f434b]">
              {t.quote}
            </blockquote>
            <figcaption className="mt-auto pt-[18px] border-t border-line">
              <div className="font-cormorant text-[19px] text-ink">
                — {t.author}
              </div>
              <div className="text-[11.5px] tracking-[2px] uppercase text-stone mt-1.5">
                {t.date}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
