"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const slides = [
  {
    number: "01",
    title: "DESIGN",
    copy: "Bold facades, layered stone and clean white volumes: architecture that reads as a signature, not a template.",
    image: "/images/swap-01.jpg",
    alt: "Stone and white facade of the Havilah development",
  },
  {
    number: "02",
    title: "BUILD",
    copy: "Delivered structures you can walk through, not just render.",
    image: "/images/swap-02.jpg",
    alt: "Delivered terrace row with glazed balconies",
  },
  {
    number: "03",
    title: "MANAGEMENT",
    copy: "Property management keeps every investment maintained and continuously valuable, long after handover.",
    image: "/images/swap-03.jpg",
    alt: "Planted frontage along the Havilah terraces",
  },
];

const CYCLE_MS = 5000;

export default function HavilahWay() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const slide = slides[current];

  return (
    <section className="py-[clamp(70px,9vh,110px)] px-7 bg-paper-dim">
      <div className="max-w-[900px] mx-auto">
        <p className="text-xs tracking-[5px] uppercase text-gold-deep mb-4">
          What Makes Havilah Different
        </p>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="flex items-baseline gap-3.5 justify-center mb-7">
                <span className="font-cormorant text-[64px] leading-none text-gold font-medium">
                  {slide.number}
                </span>
                <span className="font-cormorant text-[clamp(32px,5vw,52px)] uppercase text-ink">
                  {slide.title}
                </span>
              </div>

              <div className="relative w-full aspect-video overflow-hidden mb-7">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>

              <p className="text-[16px] leading-[1.8] text-[#3f434b] max-w-[560px] mx-auto">
                {slide.copy}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-4 justify-center mt-9">
          <span className="text-[12px] tracking-[2px] tabular-nums text-stone">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <div className="w-[180px] h-px bg-line relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-ink"
              key={`bar-${current}`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
