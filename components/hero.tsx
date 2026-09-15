"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import ChatModal from "@/components/chat-modal";

/* Completed projects only. These are the landscape photos from the Havilah
   brochure, cut to 16:9 and upscaled 4x with Real-ESRGAN (x4plus), then saved
   at 2880x1620; the portrait shots in data/projects.ts lose over half the
   frame at this aspect. Havilah Court 1's brochure photo is only 434px wide,
   so it carries the most AI detail; swap it for an original when one exists. */
const heroImages = [
  { src: "/images/hero-completed-koinonia.jpg", alt: "Koinonia, Agungi" },
  { src: "/images/hero-completed-havilah-1.jpg", alt: "Havilah Court 1, Platinum Way, Ikate" },
  { src: "/images/hero-completed-havilah-2.jpg", alt: "Havilah Court 2, The Nest Estate" },
  { src: "/images/hero-completed-havilah-3.jpg", alt: "Havilah Court 3, Jakande First Gate" },
  { src: "/images/hero-completed-havilah-4.jpg", alt: "Havilah Court 4, Jakande First Gate" },
];

const CYCLE_MS = 6500;
const FADE_S = 1.2;

/* Socials are placeholders until the real handles are supplied. */
const socials = [
  { name: "Facebook", href: "#", d: "M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" },
  { name: "Instagram", href: "#", d: "M12 8.6A3.4 3.4 0 1 0 12 15.4 3.4 3.4 0 0 0 12 8.6zm0 5.6a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4zM16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm2.8 12a2.8 2.8 0 0 1-2.8 2.8H8A2.8 2.8 0 0 1 5.2 16V8A2.8 2.8 0 0 1 8 5.2h8A2.8 2.8 0 0 1 18.8 8zm-1.6-8.2a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0z" },
  { name: "LinkedIn", href: "#", d: "M8.3 18H5.7V9.7h2.6V18zM7 8.6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.3 18h-2.6v-4c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.4-.1.7V18h-2.6s0-7.5 0-8.3H13v1.2c.3-.5 1-1.3 2.4-1.3 1.7 0 3 1.1 3 3.6V18z" },
  { name: "X", href: "#", d: "M17.5 4h2.6l-5.7 6.5L21 20h-5.2l-4.1-5.3L6.9 20H4.3l6.1-7L4 4h5.4l3.7 4.9zm-.9 14.4h1.4L8.5 5.5H7z" },
  { name: "YouTube", href: "#", d: "M21.6 8.2s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.8C16.3 5.2 12 5.2 12 5.2s-4.3 0-6.9.2c-.4 0-1.2 0-1.9.8-.6.6-.8 2-.8 2S2.2 9.8 2.2 11.5v1.6c0 1.6.2 3.3.2 3.3s.2 1.4.8 2c.7.8 1.7.7 2.1.8 1.5.1 6.7.2 6.7.2s4.3 0 6.9-.2c.4 0 1.2 0 1.9-.8.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.6c0-1.6-.2-3.3-.2-3.3zM10.1 15V9.6l5.2 2.7-5.2 2.7z" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const slide = heroImages[current];

  return (
    <section className="relative h-[100dvh] overflow-hidden bg-ink" id="hero">
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_S, ease: "easeInOut" }}
        >
          {/* Full bleed and centred. The sources are 16:9, so a 16:9 screen
              shows the whole photo; other screen shapes trim only the edges
              furthest from the centre. */}
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            className="object-cover object-center"
            loading={current === 0 ? "eager" : "lazy"}
            fetchPriority={current === 0 ? "high" : "auto"}
          />
        </motion.div>
      </AnimatePresence>

      {/* Readability wash: heavier top and bottom, where the bar, headline
          and footer strip sit. */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg,rgba(13,14,17,.82) 0%,rgba(13,14,17,.55) 22%,rgba(13,14,17,.45) 55%,rgba(13,14,17,.88) 100%)",
        }}
      />

      {/* ---- centre block ---- */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 pt-24 pb-36 text-center text-white max-md:px-5 max-md:pt-20 max-md:pb-28">
        <motion.h1
          className="font-jost font-semibold uppercase leading-[1.08] tracking-tight text-[clamp(28px,5.4vw,68px)] max-w-[19ch]"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          Building dreams,
          <br />
          <span className="text-golden">shaping communities.</span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-[62ch] text-[clamp(13.5px,1.5vw,19px)] leading-[1.6] text-white/85 max-[900px]:mt-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
        >
          Seven years of delivering quality, well-designed properties, and
          managing them long after handover.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55 }}
          className="mt-8 max-[900px]:mt-5"
        >
          <Link
            href="/projects"
            className="inline-block rounded-full border-2 border-gold bg-transparent px-8 sm:px-11 py-3.5 sm:py-4 text-[12.5px] sm:text-[13px] font-medium uppercase tracking-[1.5px] text-white transition-colors duration-300 hover:border-golden hover:bg-gold hover:text-ink"
          >
            See Completed Projects
          </Link>
        </motion.div>
      </div>

      {/* ---- bottom strip: socials left, copyright right ---- */}
      {/* Right padding clears the fixed chat button (right-6 + 56px on
          larger screens) so the copyright never slides underneath it. */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-4 py-4 pl-6 pr-28 max-md:flex-col max-md:items-start max-md:gap-2 max-md:py-3.5 max-md:pr-20">
        <div className="flex gap-2.5">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-label={s.name}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gold text-ink transition-colors duration-300 hover:bg-golden"
            >
              <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] sm:h-[17px] sm:w-[17px] fill-current">
                <path d={s.d} />
              </svg>
            </a>
          ))}
        </div>
        <p className="text-[11px] sm:text-[11.5px] tracking-[1.2px] text-white/60">
          &copy; {new Date().getFullYear()} Havilah Development and Management Services
        </p>
      </div>

      {/* ---- chat, bottom right ---- */}
      <button
        type="button"
        onClick={() => setIsChatOpen((open) => !open)}
        aria-label="Chat with us"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gold text-ink shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-golden cursor-pointer"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7 fill-current">
          <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM8 11H6V9h2v2zm5 0h-2V9h2v2zm5 0h-2V9h2v2z" />
        </svg>
      </button>

      {/* ---- chat modal / contact form ---- */}
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </section>
  );
}
