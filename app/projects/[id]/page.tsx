import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/app/page-shell";
import { projects } from "@/data/projects";

/* Every development gets its own page, built from the same data the project
   lists use. Nothing here is invented: a development only shows a fact when
   data/projects.ts carries it. */

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Development not found · Havilah Development" };
  return {
    title: `${project.name} · Havilah Development and Management Services`,
    description: project.description,
  };
}

export default async function DevelopmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const photos = [project.image, ...(project.gallery ?? [])].filter(Boolean);
  const cover = photos[0];
  const rest = photos.slice(1);
  const completed = project.status === "completed";
  const facts = [
    { label: "Status", value: completed ? "Completed" : "Ongoing" },
    ...(project.year ? [{ label: "Year", value: project.year }] : []),
    ...(project.delivery
      ? [{ label: "Expected delivery", value: project.delivery }]
      : []),
    { label: "Location", value: project.location },
  ];

  return (
    <PageShell navVariant="overlay">
      {/* Cover. Without a photo the panel stays dark rather than borrowing
          another development's image. */}
      <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden bg-ink px-[8vw] pb-[clamp(36px,6vh,72px)] pt-[140px]">
        {cover && (
          <Image
            src={cover}
            alt={project.name}
            fill
            sizes="100vw"
            priority={false}
            className="-z-10 object-cover"
          />
        )}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg,rgba(13,14,17,.78) 0%,rgba(13,14,17,.45) 42%,rgba(13,14,17,.9) 100%)",
          }}
        />

        <div className="mx-auto w-full max-w-[1180px]">
          <Link
            href={completed ? "/projects/completed" : "/projects/ongoing"}
            className="inline-flex items-center gap-1.5 text-[11.5px] uppercase tracking-[2.5px] text-golden hover:underline"
          >
            <span>&larr;</span>
            <span>{completed ? "Completed Projects" : "Ongoing Projects"}</span>
          </Link>

          <h1 className="mt-5 font-cormorant text-[clamp(38px,6vw,76px)] uppercase leading-[1.03] text-white">
            {project.name}
          </h1>
          <p className="mt-3 text-[13px] uppercase tracking-[2.5px] text-white/75">
            {project.location}
          </p>
        </div>
      </section>

      <section className="bg-paper px-[8vw] py-[clamp(48px,7vh,88px)]">
        <div className="mx-auto w-full max-w-[1180px]">
          <dl className="grid gap-6 border-b border-ink/10 pb-10 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-[11.5px] uppercase tracking-[2.4px] text-gold-deep">
                  {f.label}
                </dt>
                <dd className="mt-1.5 font-cormorant text-[24px] leading-tight text-ink">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 max-w-[760px] text-[clamp(16px,2vw,19px)] leading-[1.85] text-[#3f434b]">
            {project.description}
          </p>

          {project.features && project.features.length > 0 && (
            <div className="mt-12 border-t border-ink/10 pt-10">
              <h2 className="font-cormorant text-[clamp(26px,3.4vw,38px)] uppercase leading-tight text-ink">
                Features
              </h2>
              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[15.5px] leading-[1.7] text-[#3f434b]"
                  >
                    <span
                      aria-hidden
                      className="mt-[9px] block h-[6px] w-[6px] shrink-0 rounded-full bg-gold"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {rest.length > 0 && (
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {rest.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink-soft"
                >
                  <Image
                    src={src}
                    alt={`${project.name}, photo ${i + 2} of ${photos.length}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
          {project.progress && project.progress.length > 0 && (
            <div className="mt-14 border-t border-ink/10 pt-10">
              <h2 className="font-cormorant text-[clamp(26px,3.4vw,38px)] uppercase leading-tight text-ink">
                Construction progress
              </h2>
              <p className="mt-3 text-[15px] text-[#3f434b]">
                On site at {project.name}.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {project.progress.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink-soft"
                  >
                    <Image
                      src={src}
                      alt={`${project.name} under construction, photo ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-ink px-[8vw] py-[clamp(48px,7vh,88px)] text-center">
        <div className="mx-auto w-full max-w-[760px]">
          <h2 className="font-cormorant text-[clamp(28px,4vw,46px)] uppercase leading-[1.1] text-white">
            See {project.name} for yourself
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-full border-2 border-gold bg-gold px-8 sm:px-11 py-3.5 sm:py-4 text-[12.5px] sm:text-[13px] font-medium uppercase tracking-[1.5px] text-ink transition-colors duration-300 hover:border-golden hover:bg-golden"
            >
              Book a Private Viewing
            </Link>
            <a
              href="https://wa.me/2348162649021"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border-2 border-gold bg-transparent px-8 sm:px-11 py-3.5 sm:py-4 text-[12.5px] sm:text-[13px] font-medium uppercase tracking-[1.5px] text-white transition-colors duration-300 hover:bg-gold hover:text-ink"
            >
              Speak to Sales
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
