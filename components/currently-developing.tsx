"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function CurrentlyDeveloping() {
  return (
    <section className="py-[clamp(60px,8vh,100px)] px-7 bg-paper-dim">
      <motion.div
        className="max-w-[900px] mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-xs tracking-[5px] uppercase text-gold-deep mb-4">
          Currently Developing
        </p>

        <h2 className="text-[clamp(34px,5vw,58px)] uppercase mb-2 font-cormorant font-medium">
          HAVILAH COURT 5
        </h2>
        <p className="text-[13px] tracking-[3px] uppercase text-stone mb-8">
          Beach Resort Estate, Lekki &middot; Ongoing
        </p>

        <div className="relative w-full aspect-video overflow-hidden mb-7">
          <Image
            src="/images/flag-01.jpg"
            alt="Havilah Court 5 front elevation"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <p className="text-[15px] leading-[1.8] text-[#3f434b] max-w-[600px] mx-auto mb-8">
          Four semi-detached homes, nineteen four-bedroom terraces and sixteen
          apartments, with a gym, swimming pool and children&apos;s play area.
        </p>

        <Link href="/contact" className="inline-block rounded-full border border-ink px-[26px] py-[13px] text-[12px] uppercase tracking-[2.5px] text-ink transition-colors duration-300 hover:bg-ink hover:text-paper">Contact Us</Link>
      </motion.div>
    </section>
  );
}
