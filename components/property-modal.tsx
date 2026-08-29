"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";
import styles from "./property-modal.module.css";

interface Props {
  project: Project;
  onClose: () => void;
}

const statusLabels: Record<string, string> = {
  completed: "Completed",
  ongoing: "Ongoing",
  pipeline: "Pipeline",
};

export default function PropertyModal({ project, onClose }: Props) {
  const statusText = project.year
    ? `${statusLabels[project.status]} ${project.year}`
    : statusLabels[project.status];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close} onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className={styles.imageWrap}>
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 600px) 100vw, 600px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className={styles.body}>
          <p className={styles.status}>{statusText}</p>
          <h3 className={styles.name}>{project.name}</h3>
          <p className={styles.location}>{project.location}</p>
          <p className={styles.description}>{project.description}</p>

          <a
            href={`/inspection?property=${encodeURIComponent(project.name)}`}
            className="btn-pill"
          >
            Book an Inspection
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
