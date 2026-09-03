import type { Metadata } from "next";
import PageShell from "../../page-shell";
import ContourBackdrop from "@/components/contour-backdrop";
import VisionMissionPurpose from "@/components/vision-mission-purpose";
import CoreValues from "@/components/core-values";
import { openRoles } from "@/data/roles";

export const metadata: Metadata = {
  title: "Career Opportunities · Havilah Development and Management Services",
  description:
    "Join Havilah Development and Management Services Limited. See current openings and send your CV.",
};

const EMAIL = "hr.havilah@gmail.com";

export default function CareersPage() {
  return (
    <PageShell navVariant="overlay">
      {/* ── Join us ── */}
      <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden bg-paper px-[8vw] pt-[clamp(190px,26vh,300px)] pb-[clamp(72px,12vh,140px)]">
        <ContourBackdrop className="-z-10" opacity={0.13} />
        <div className="mx-auto w-full max-w-[1180px]">
          <h1 className="font-jost text-[clamp(40px,8vw,96px)] font-semibold leading-[1.02] tracking-tight">
            Join Us At <span className="text-gold-deep">Havilah</span>
          </h1>
        </div>
      </section>

      {/* ── Openings ── */}
      <section
        className="flex min-h-screen items-center px-[8vw] py-[clamp(72px,10vh,120px)] text-white"
        style={{ background: "var(--color-ink)" }}
        id="openings"
      >
        <div className="mx-auto w-full max-w-[1180px]">
          <h2 className="font-jost text-[clamp(28px,4.4vw,50px)] font-semibold leading-tight">
            View our Job Openings
          </h2>
          <p className="mt-6 max-w-[70ch] text-[15.5px] leading-[1.85] text-white/80">
            Every property we hand over carries our name and our reputation. We
            look for people who take that as seriously as we do, and who want to
            work to the standard it demands.
          </p>

          {openRoles.length === 0 ? (
            <div className="mt-10 border-t border-white/15 pt-8">
              <p className="max-w-[62ch] text-[15.5px] leading-[1.85] text-white/80">
                We do not have any roles listed at the moment. We still welcome
                speculative applications and keep them on file for when
                something opens up.
              </p>
            </div>
          ) : (
            <ul className="mt-10 flex flex-col border-t border-white/15">
              {openRoles.map((r) => (
                <li
                  key={r.id}
                  className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-white/15 py-6"
                >
                  <div className="min-w-[240px] flex-1">
                    <h3 className="font-cormorant text-[24px] text-white">
                      {r.title}
                    </h3>
                    {r.summary && (
                      <p className="mt-1.5 max-w-[60ch] text-[14.5px] leading-[1.75] text-white/70">
                        {r.summary}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="text-[11.5px] uppercase tracking-[2.5px] text-golden">
                      {[r.type, r.location].filter(Boolean).join(" · ")}
                    </span>
                    <a
                      href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                        `Application: ${r.title}`
                      )}`}
                      className="rounded-full bg-gold px-6 py-2.5 text-[11.5px] uppercase tracking-[2px] text-ink transition-colors duration-300 hover:bg-golden"
                    >
                      Apply
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10">
            <p className="text-[14.5px] text-white/70">
              Send your CV and a short note about the work you are looking for
              to{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-golden underline-offset-4 hover:underline"
              >
                {EMAIL}
              </a>
              .
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Application%20to%20Havilah`}
              className="mt-7 inline-block rounded-full bg-gold px-10 py-4 text-[12.5px] uppercase tracking-[2.5px] text-ink transition-colors duration-300 hover:bg-golden"
            >
              Send your CV
            </a>
          </div>
        </div>
      </section>

      <VisionMissionPurpose />
      <CoreValues />
    </PageShell>
  );
}
