"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import BookInspectionButton from "./book-inspection-button";

const heroImages = [
  { src: "/images/hero-1.jpg", alt: "Havilah Court 5 front elevation" },
  { src: "/images/hero-2.jpg", alt: "Havilah Court 4 completed terraces" },
  { src: "/images/hero-3.jpg", alt: "Havilah Court 3 completed terraces" },
  { src: "/images/hero-4.jpg", alt: "Havilah Court 5 under construction" },
];

const CYCLE_MS = 6500;
const FADE_S = 1.2;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden bg-ink" id="hero">
      {/* Full-bleed image layer */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: FADE_S, ease: "easeInOut" },
              scale: {
                duration: (CYCLE_MS - FADE_S * 1000) / 1000,
                ease: "easeOut",
                delay: FADE_S,
              },
            }}
          >
            <Image
              src={heroImages[current].src}
              alt={heroImages[current].alt}
              fill
              priority={current === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "center 65%" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark readability overlay */}
      <div
        className="absolute inset-0 z-2 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,14,17,0.25) 0%, rgba(13,14,17,0.1) 35%, rgba(13,14,17,0.15) 55%, rgba(13,14,17,0.55) 100%)",
        }}
      />

      {/* Text content */}
      <div className="absolute inset-0 z-3 flex flex-col items-center justify-center text-center text-white">
        <motion.p
          className="text-xs tracking-[6px] mb-3.5 uppercase opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Development &middot; Management &middot; Lagos
        </motion.p>

        <motion.h1
          className="text-[clamp(64px,12vw,170px)] leading-[0.9] font-cormorant font-medium"
          style={{ textShadow: "0 6px 40px rgba(0,0,0,0.35)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          HAVILAH
        </motion.h1>

        <motion.p
          className="font-great-vibes text-golden text-[clamp(28px,4.5vw,56px)] -mt-2"
          style={{
            textShadow:
              "0 1px 3px rgba(22,24,29,0.85), 0 3px 14px rgba(22,24,29,0.7), 0 0 40px rgba(22,24,29,0.5)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Building dreams, shaping communities
        </motion.p>

        <motion.div
          className="flex gap-4 mt-7 max-md:flex-col max-md:gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link
            href="/#properties"
            className="inline-block rounded-full border px-[26px] py-[13px] text-[12px] tracking-[2.5px] uppercase transition-colors duration-300 border-white text-white hover:bg-white hover:text-ink"
          >
            Explore Properties
          </Link>
          <BookInspectionButton dark />
        </motion.div>

        <motion.p
          className="mt-5 text-[13px] tracking-[3px] uppercase opacity-85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          7+ Years of trusted development
        </motion.p>
      </div>
    </section>
  );
}
