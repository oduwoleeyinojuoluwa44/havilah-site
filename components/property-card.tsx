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
      className="group bg-ink-soft overflow-hidden flex flex-col cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl rounded-xl border border-white/5 hover:border-gold/30"
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
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
      <div className="p-6 pb-7 flex flex-col flex-1">
        <p className="text-[11.5px] tracking-[2.4px] uppercase text-golden mb-2">
          {statusText}
        </p>
        <h4 className="font-cormorant font-medium text-[27px] leading-tight text-white group-hover:text-golden transition-colors duration-300 m-0">
          {project.name}
        </h4>
        <p className="mt-1.5 text-[12px] tracking-[2px] uppercase text-white/55">
          {project.location}
        </p>
      </div>
    </motion.article>
  );
}
