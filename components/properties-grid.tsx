"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects, type Project, type ProjectStatus } from "@/data/projects";
import PropertyCard from "./property-card";
import PropertyModal from "./property-modal";

const filters: { label: string; value: ProjectStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Ongoing", value: "ongoing" },
  { label: "Pipeline", value: "pipeline" },
];

export default function PropertiesGrid() {
  const [active, setActive] = useState<ProjectStatus | "all">("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.status === active);

  return (
    <section className="bg-ink text-white py-[clamp(80px,10vh,140px)]" id="properties">
      <div className="max-w-[1280px] mx-auto px-[6vw]">
        {/* Header */}
        <div className="max-w-[720px] mb-[clamp(40px,5vh,64px)]">
          <p className="text-xs tracking-[5px] uppercase text-golden mb-4">
            Our Track Record
          </p>
          <h2 className="text-[clamp(42px,7vw,96px)] leading-[0.98] uppercase text-white font-cormorant font-medium">
            Our Projects
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.8] text-white/72 max-w-[520px]">
            Nine developments, grouped by where each one stands today.
          </p>
          <div className="flex gap-[clamp(28px,5vw,64px)] mt-[38px] pt-[26px] border-t border-white/16">
            {[
              { n: "09", l: "Developments" },
              { n: "06", l: "Completed" },
              { n: "02", l: "Ongoing" },
              { n: "01", l: "Pipeline" },
            ].map((s) => (
              <div key={s.l}>
                <b className="block font-cormorant text-[clamp(34px,4vw,50px)] leading-none text-golden font-medium">
                  {s.n}
                </b>
                <span className="block mt-1.5 text-[12px] tracking-[2.5px] uppercase text-white/60">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-[clamp(32px,4vh,48px)] flex-wrap">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`rounded-full px-[22px] py-2.5 text-[12px] tracking-[2px] uppercase border cursor-pointer transition-colors duration-300 bg-transparent ${
                active === f.value
                  ? "bg-white text-ink border-white"
                  : "text-white/70 border-white/25 hover:border-white/50 hover:text-white"
              }`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-[clamp(22px,2.6vw,36px)] max-md:grid-cols-1"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <PropertyCard
                key={project.id}
                project={project}
                onSelect={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <PropertyModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
