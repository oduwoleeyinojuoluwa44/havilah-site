"use client";

import { motion } from "motion/react";
import { testimonials } from "@/data/testimonials";

/* Seconds for one full pass. Slow enough to read a quote as it crosses. */
const DURATION_S = 42;

export default function HomeownerStories() {
  /* The list runs twice so the track can loop without a seam. */
  const track = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-paper py-[clamp(80px,10vh,130px)]">
      <motion.div
        className="text-center max-w-[640px] mx-auto mb-[clamp(40px,5vh,64px)] px-7"
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

      {/* The quotes drift left on their own and pause while the pointer is
          over them, so a quote can be read in full. */}
      <div className="group relative">
        <div
          className="flex w-max animate-[testimonial-marquee_var(--marquee-duration)_linear_infinite] group-hover:[animation-play-state:paused]"
          style={{ "--marquee-duration": `${DURATION_S}s` } as React.CSSProperties}
        >
          {track.map((t, i) => (
            <figure
              key={`${t.id}-${i}`}
              aria-hidden={i >= testimonials.length}
              className="relative m-0 mr-6 flex w-[min(84vw,420px)] shrink-0 flex-col border border-line bg-white p-[38px_32px_30px]"
            >
              <span className="pointer-events-none absolute top-1.5 left-6 select-none font-cormorant text-[76px] leading-none text-gold opacity-32">
                &ldquo;
              </span>
              <blockquote className="relative m-0 mb-[22px] text-[15px] leading-[1.85] text-[#3f434b]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto border-t border-line pt-[18px]">
                <div className="font-cormorant text-[19px] text-ink">
                  &mdash; {t.author}
                </div>
                <div className="mt-1.5 text-[11.5px] uppercase tracking-[2px] text-stone">
                  {t.date}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Soft edges so cards enter and leave rather than being cut off. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[clamp(24px,6vw,90px)] bg-gradient-to-r from-paper to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[clamp(24px,6vw,90px)] bg-gradient-to-l from-paper to-transparent" />
      </div>
    </section>
  );
}
