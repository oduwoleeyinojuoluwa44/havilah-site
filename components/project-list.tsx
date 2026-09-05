import Image from "next/image";
import Link from "next/link";
import { projects, type ProjectStatus } from "@/data/projects";

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
  const list = projects.filter((p) => p.status === status);
  const { title, blurb } = headings[status];

  return (
    <section className="bg-paper px-[8vw] py-[clamp(56px,8vh,96px)]">
      <div className="mx-auto w-full max-w-[1180px]">
        <Link
          href="/projects"
          className="text-[11.5px] uppercase tracking-[2.5px] text-gold-deep hover:underline"
        >
          &larr; All Projects
        </Link>

        <h1 className="mt-5 font-cormorant text-[clamp(34px,5.6vw,64px)] uppercase leading-[1.05]">
          {title}
        </h1>
        <p className="mt-3 text-[15.5px] text-[#3f434b]">{blurb}</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.id} className="flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-5">
                <p className="text-[11.5px] uppercase tracking-[2.4px] text-gold-deep">
                  {[p.status === "completed" ? "Completed" : "Ongoing", p.year]
                    .filter(Boolean)
                    .join(" ")}
                </p>
                <h2 className="mt-1.5 font-cormorant text-[26px] leading-tight text-ink">
                  {p.name}
                </h2>
                <p className="mt-1 text-[12px] uppercase tracking-[2px] text-stone">
                  {p.location}
                </p>
                <p className="mt-3 text-[14.5px] leading-[1.8] text-[#3f434b]">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
