"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function WhereWeBuild() {
  return (
    <section className="py-[clamp(60px,8vh,100px)] px-7 bg-paper">
      <div className="grid grid-cols-2 gap-12 items-center max-w-[1100px] mx-auto max-md:grid-cols-1">
        <div className="relative w-full aspect-[4/5] overflow-hidden max-md:aspect-video">
          <Image
            src="/images/courtyard.jpg"
            alt="Street view with palms"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[5px] uppercase text-gold-deep mb-4">
            Where We Build
          </p>
          <h2 className="text-[clamp(30px,4.5vw,48px)] uppercase leading-[1.1] mb-5 font-cormorant font-medium">
            Rooted in well-connected neighbourhoods
          </h2>
          <p className="text-[15px] leading-[1.8] text-[#3f434b] mb-8">
            Minutes from the major corridors, established estates and the daily
            conveniences that make an address worth keeping.
          </p>

          <div className="flex flex-col">
            {[
              { year: "2017", label: "First delivery" },
              { year: "Today", label: "Two ongoing, one in pipeline" },
            ].map((item, i) => (
              <div
                key={item.year}
                className={`flex items-center gap-5 py-4 ${
                  i === 0 ? "border-t border-line" : ""
                } border-b border-line`}
              >
                <span className="font-cormorant text-[22px] text-gold-deep min-w-[80px]">
                  {item.year}
                </span>
                <span className="text-[13px] tracking-[2px] uppercase text-stone">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
