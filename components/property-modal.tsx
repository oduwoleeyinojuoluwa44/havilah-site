"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";
import BookInspectionButton from "./book-inspection-button";

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
      className="fixed inset-0 z-[100] bg-ink/60 flex items-center justify-center p-6 max-md:items-end max-md:p-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-white max-w-[600px] w-full max-h-[90vh] overflow-y-auto max-md:max-h-[92vh] max-md:rounded-t-2xl"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-[2] w-9 h-9 rounded-full border-0 bg-white/90 text-ink text-base cursor-pointer flex items-center justify-center hover:bg-white"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="relative w-full aspect-[4/3]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 600px) 100vw, 600px"
            className="object-cover"
            priority
          />
        </div>

        <div className="p-8">
          <p className="text-[11.5px] tracking-[2.4px] uppercase text-golden mb-2">
            {statusText}
          </p>
          <h3 className="font-cormorant text-[32px] font-medium text-ink m-0 mb-1.5">
            {project.name}
          </h3>
          <p className="text-[12px] tracking-[2px] uppercase text-stone mb-5">
            {project.location}
          </p>
          <p className="text-[15px] leading-[1.8] text-[#3f434b] mb-7">
            {project.description}
          </p>

          <BookInspectionButton
            className="!border-ink !text-ink hover:!bg-ink hover:!text-paper"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
