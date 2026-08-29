"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

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
      className="bg-ink-soft overflow-hidden flex flex-col cursor-pointer transition-transform duration-300 hover:-translate-y-1"
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
      <div className="relative aspect-[4/5] overflow-hidden bg-[#1b1e24]">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] group-hover:scale-105"
        />
      </div>
      <div className="p-6 pb-7 flex flex-col flex-1">
        <p className="text-[11.5px] tracking-[2.4px] uppercase text-golden mb-2">
          {statusText}
        </p>
        <h4 className="font-cormorant font-medium text-[27px] leading-tight text-white m-0">
          {project.name}
        </h4>
        <p className="mt-1.5 text-[12px] tracking-[2px] uppercase text-white/55">
          {project.location}
        </p>
      </div>
    </motion.article>
  );
}
