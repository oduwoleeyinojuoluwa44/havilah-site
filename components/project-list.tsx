"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project, type ProjectStatus } from "@/data/projects";
import BuyModal from "./buy-modal";

const headings: Record<ProjectStatus, { title: string; blurb: string }> = {
  completed: {
    title: "Completed Projects",
    blurb: "Delivered and handed over to their owners.",
  },
  ongoing: {
    title: "Ongoing Projects",
    blurb: "Currently taking shape.",
  },
  pipeline: {
    title: "In Pipeline",
    blurb: "The next chapter in the Havilah Court series.",
  },
};

export default function ProjectList({ status }: { status: ProjectStatus }) {
  const [selectedBuyProject, setSelectedBuyProject] = useState<Project | null>(null);
  const list = projects.filter((p) => p.status === status);
  const { title, blurb } = headings[status];

  return (
    <section className="bg-paper px-[8vw] py-[clamp(56px,8vh,96px)]">
      <div className="mx-auto w-full max-w-[1180px]">
        <Link
          href="/projects"
          className="text-[11.5px] uppercase tracking-[2.5px] text-gold-deep hover:underline inline-flex items-center gap-1.5"
        >
          <span>&larr;</span>
          <span>All Projects</span>
        </Link>

        <h1 className="mt-5 font-cormorant text-[clamp(34px,5.6vw,64px)] uppercase leading-[1.05]">
          {title}
        </h1>
        <p className="mt-3 text-[15.5px] text-[#3f434b]">{blurb}</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => {
            const isHavilah6 = p.id === "havilah-6";

            return (
              <article
                key={p.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-5 border border-ink/10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                <div>
                  {/* Image container with zoom and gradient wash on hover */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink-soft">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    {/* Dark gradient wash appearing on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>

                  {/* Content details */}
                  <div className="mt-5">
                    <p className="text-[11.5px] uppercase tracking-[2.4px] text-gold-deep">
                      {[p.status === "completed" ? "Completed" : "Ongoing", p.year]
                        .filter(Boolean)
                        .join(" ")}
                    </p>
                    <h2 className="mt-1 font-cormorant text-[28px] leading-tight text-ink group-hover:text-gold transition-colors duration-300">
                      {p.name}
                    </h2>
                    <p className="mt-1 text-[12px] uppercase tracking-[2px] text-stone">
                      {p.location}
                    </p>
                    <p className="mt-3 text-[14px] leading-[1.8] text-[#3f434b]">
                      {p.description}
                    </p>
                  </div>
                </div>

                {/* Dedicated Buy Option for Havilah 6 (Court 6) */}
                {isHavilah6 ? (
                  <div className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between gap-3">
                    <div>
                      <span className="block text-[11px] uppercase tracking-[1.5px] text-stone">
                        From Deposit
                      </span>
                      <span className="font-semibold text-ink text-[16px]">
                        ₦150M{" "}
                        <span className="text-[11.5px] font-normal text-stone">/ ₦300M</span>
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedBuyProject(p)}
                      className="rounded-full bg-gold px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[1.5px] text-ink transition-all duration-300 hover:bg-golden hover:shadow-md active:scale-[0.98] cursor-pointer"
                    >
                      Buy Unit
                    </button>
                  </div>
                ) : (
                  /* Standard subtle inquiry link for other properties */
                  <div className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between">
                    <span className="text-[11.5px] uppercase tracking-[1.5px] text-stone">
                      Havilah Developments
                    </span>
                    <Link
                      href="/contact"
                      className="text-[12px] uppercase tracking-[1.5px] font-medium text-gold hover:text-golden transition-colors"
                    >
                      Inquire &rarr;
                    </Link>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* Buy Modal for Havilah 6 */}
      {selectedBuyProject && (
        <BuyModal
          project={selectedBuyProject}
          isOpen={!!selectedBuyProject}
          onClose={() => setSelectedBuyProject(null)}
        />
      )}
    </section>
  );
}
