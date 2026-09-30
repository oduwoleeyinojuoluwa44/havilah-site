"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { testimonials } from "@/data/testimonials";

const CYCLE_MS = 7000;

export default function HomeownerStories() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const count = testimonials.length;

  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  /* Advances on its own, and stops while someone is reading with the
     pointer over the card or after they step through by hand. */
  useEffect(() => {
    if (paused || count < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), CYCLE_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  const current = testimonials[index];

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

      <div
        className="relative mx-auto max-w-[860px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) {
            go(dx < 0 ? 1 : -1);
            setPaused(true);
          }
          touchX.current = null;
        }}
      >
        {/* One quote at a time, cross-faded. The box keeps a minimum height so
            quotes of different lengths do not make the section jump. */}
        <div className="relative min-h-[300px] sm:min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={current.id}
              className="m-0 flex flex-col bg-white border border-line px-[clamp(28px,5vw,56px)] py-[clamp(38px,5vw,52px)] relative"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -14 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <span className="absolute top-1.5 left-6 font-cormorant text-[76px] leading-none text-gold opacity-32 pointer-events-none select-none">
                &ldquo;
              </span>
              <blockquote className="m-0 mb-[22px] relative text-[clamp(16px,2vw,20px)] leading-[1.8] text-[#3f434b]">
                {current.quote}
              </blockquote>
              <figcaption className="mt-auto pt-[18px] border-t border-line">
                <div className="font-cormorant text-[19px] text-ink">
                  &mdash; {current.author}
                </div>
                <div className="text-[11.5px] tracking-[2px] uppercase text-stone mt-1.5">
                  {current.date}
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {count > 1 && (
          <div className="mt-7 flex items-center justify-center gap-5">
            {[
              { step: -1, label: "Previous testimonial", d: "M15 18l-6-6 6-6" },
              { step: 1, label: "Next testimonial", d: "M9 6l6 6-6 6" },
            ].map((b) => (
              <button
                key={b.label}
                type="button"
                aria-label={b.label}
                onClick={() => {
                  go(b.step);
                  setPaused(true);
                }}
                className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-gold text-gold-deep transition-colors duration-300 hover:bg-gold hover:text-ink ${
                  b.step < 0 ? "order-1" : "order-3"
                }`}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d={b.d} />
                </svg>
              </button>
            ))}

            <div className="order-2 flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => {
                    setIndex(i);
                    setPaused(true);
                  }}
                  className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-gold" : "w-2 bg-ink/20 hover:bg-ink/40"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
