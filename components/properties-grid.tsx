"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects, type Project, type ProjectStatus } from "@/data/projects";
import PropertyCard from "./property-card";
import PropertyModal from "./property-modal";
import styles from "./properties-grid.module.css";

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
    <section className={styles.section} id="properties">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className="section-kicker section-kicker--light">Our Track Record</p>
          <h2 className={styles.heading}>Our Projects</h2>
          <p className={styles.sub}>
            Nine developments, grouped by where each one stands today.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <b>09</b>
              <span>Developments</span>
            </div>
            <div className={styles.stat}>
              <b>06</b>
              <span>Completed</span>
            </div>
            <div className={styles.stat}>
              <b>02</b>
              <span>Ongoing</span>
            </div>
            <div className={styles.stat}>
              <b>01</b>
              <span>Pipeline</span>
            </div>
          </div>
        </div>

        <div className={styles.filters}>
          {filters.map((f) => (
            <button
              key={f.value}
              className={`${styles.filterBtn} ${active === f.value ? styles.active : ""}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div className={styles.grid} layout>
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
