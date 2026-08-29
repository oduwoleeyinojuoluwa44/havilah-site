"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function MoreThanDeveloper() {
  return (
    <section className="relative min-h-[80vh] bg-ink text-white flex items-center py-[clamp(80px,10vh,130px)] px-[10vw]" id="management">
      <div className="grid grid-cols-[1.1fr_0.9fr] gap-[7vw] items-center max-w-[1200px] mx-auto w-full max-md:grid-cols-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[5px] uppercase text-golden mb-5">
            More Than a Developer
          </p>
          <h2 className="text-white text-[clamp(32px,4.6vw,56px)] leading-[1.1] uppercase font-cormorant font-medium">
            We stay <span className="font-great-vibes text-gold normal-case text-[0.85em]">long after</span> handover
          </h2>
          <p className="text-[14.5px] leading-[1.85] text-white/80 mt-6">
            Havilah is deeply involved in property management, the assurance
            that your investment is well-maintained and continuously valuable
            long after construction is complete. One hand on quality, from first
            drawing to every year that follows.
          </p>
          <div className="mt-[34px] flex flex-col">
            {[
              "Facility & property management",
              "Maintenance & long-term upkeep",
              "Value preservation for investors",
              "Design-to-management quality control",
            ].map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-4 py-[17px] text-[13px] tracking-[2px] uppercase ${
                  i === 0 ? "border-t border-white/14" : ""
                } border-b border-white/14`}
              >
                <span className="w-[7px] h-[7px] rounded-full bg-golden shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative h-[64vh] min-h-[380px] overflow-hidden max-md:h-[50vh] max-md:min-h-[280px]">
          <Image
            src="/images/completed-1.jpg"
            alt="Completed Havilah property"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
