import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "../page-shell";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects · Havilah Development and Management Services",
  description:
    "Completed and ongoing developments by Havilah Development and Management Services Limited.",
};

const completed = projects.filter((p) => p.status === "completed");
const ongoing = projects.filter((p) => p.status === "ongoing");

const routes = [
  {
    href: "/projects/completed",
    label: "Completed Projects",
    blurb: "Delivered and handed over.",
    count: completed.length,
    /* The cover comes from a project in that group, so each card shows real
       work rather than stock imagery. */
    image: completed[0]?.image ?? "/images/hero-1.jpg",
  },
  {
    href: "/projects/ongoing",
    label: "Ongoing Projects",
    blurb: "Currently taking shape.",
    count: ongoing.length,
    image: ongoing[0]?.image ?? "/images/hero-2.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="bg-paper px-[8vw] py-[clamp(56px,8vh,96px)]">
        <div className="mx-auto max-w-[1180px] text-center">
          <h1 className="font-jost text-[clamp(32px,5.6vw,62px)] font-semibold leading-[1.05]">
            Start Your Property Journey
          </h1>
          <p className="mt-4 text-[16px] text-[#3f434b]">
            Browse what we have delivered and what is taking shape.
          </p>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {routes.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group relative isolate flex min-h-[420px] items-center justify-center overflow-hidden rounded-xl bg-ink lg:min-h-[520px]"
              >
                <Image
                  src={r.image}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="-z-10 object-cover brightness-[.52] transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(13,14,17,.35) 0%,rgba(13,14,17,.5) 60%,rgba(13,14,17,.75) 100%)",
                  }}
                />
                <div className="px-8 text-center">
                  <h2 className="font-jost text-[clamp(28px,3.6vw,44px)] font-semibold text-white">
                    {r.label}
                  </h2>
                  <p className="mt-2 text-[14.5px] text-white/80">{r.blurb}</p>
                  <span className="mt-5 inline-block rounded-full border border-golden px-6 py-2 text-[11.5px] uppercase tracking-[2.5px] text-golden transition-colors duration-300 group-hover:bg-golden group-hover:text-ink">
                    {String(r.count).padStart(2, "0")} Projects
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
