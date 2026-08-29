"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";
import styles from "./property-card.module.css";

interface Props {
  project: Project;
  onSelect: (project: Project) => void;
}

const statusLabels: Record<string, string> = {
  completed: "Completed",
  ongoing: "Ongoing",
  pipeline: "Pipeline",
};

export default function PropertyCard({ project, onSelect }: Props) {
  const statusText = project.year
    ? `${statusLabels[project.status]} ${project.year}`
    : statusLabels[project.status];

  return (
    <motion.article
      className={styles.card}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect(project);
      }}
    >
      <div className={styles.imgWrap}>
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
          style={{ objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.2,0.7,0.3,1)" }}
        />
      </div>
      <div className={styles.body}>
        <p className={styles.status}>{statusText}</p>
        <h4 className={styles.name}>{project.name}</h4>
        <p className={styles.location}>{project.location}</p>
      </div>
    </motion.article>
  );
}
