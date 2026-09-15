"use client";

import { useRef, useState } from "react";
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

const SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

/* The card's photo. A project with a `gallery` gets side arrows, dots and
   swipe to step through every photo; the rest keep a single image. */
function CardImages({ project: p }: { project: Project }) {
  const photos = [p.image, ...(p.gallery ?? [])];
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const many = photos.length > 1;

  const go = (step: number) =>
    setIndex((i) => (i + step + photos.length) % photos.length);

  return (
    <div
      className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink-soft"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (!many || touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      {/* Every photo is stacked and cross-faded, so stepping is instant once
          they have loaded. */}
      {photos.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={many ? `${p.name}, photo ${i + 1} of ${photos.length}` : p.name}
          fill
          sizes={SIZES}
          aria-hidden={i !== index}
          className={`object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-108 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark gradient wash appearing on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {many && (
        <>
          {[
            { step: -1, label: "Previous photo", d: "M15 18l-6-6 6-6" },
            { step: 1, label: "Next photo", d: "M9 6l6 6-6 6" },
          ].map((b) => (
            <button
              key={b.label}
              type="button"
              aria-label={b.label}
              onClick={() => go(b.step)}
              className={`absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-ink/55 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-gold hover:text-ink ${
                b.step < 0 ? "left-3" : "right-3"
              }`}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <path d={b.d} />
              </svg>
            </button>
          ))}

          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
            {photos.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                  i === index ? "w-5 bg-golden" : "w-2 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

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
                  <CardImages project={p} />

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
