import type { Metadata } from "next";
import PageShell from "../../page-shell";

export const metadata: Metadata = {
  title: "Career Opportunities · Havilah Development and Management Services",
  description:
    "Work with Havilah Development and Management Services Limited. Send your CV to be considered for current and future roles.",
};

/* No roles or careers copy have been supplied, so the page says exactly that
   and gives a real way to apply, rather than listing invented positions.
   Add openings here as they are provided. */
const openRoles: { title: string; detail: string }[] = [];

const EMAIL = "hr.havilah@gmail.com";

export default function CareersPage() {
  return (
    <PageShell>
      <section className="bg-paper px-[8vw] py-[clamp(64px,9vh,110px)]">
        <div className="mx-auto max-w-[820px]">
          <p className="mb-4 text-[12px] uppercase tracking-[5px] text-gold-deep">
            Inside Havilah
          </p>
          <h1 className="font-cormorant text-[clamp(38px,6.5vw,76px)] uppercase leading-[1.04]">
            Career Opportunities
          </h1>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.85] text-[#3f434b]">
            Every property we hand over carries our name and our reputation. If
            that is the standard you want to work to, we would like to hear from
            you.
          </p>

          <div className="mt-12 border-t border-line pt-9">
            <h2 className="font-cormorant text-[26px] uppercase tracking-[1px]">
              Open Roles
            </h2>

            {openRoles.length === 0 ? (
              <p className="mt-4 max-w-[58ch] text-[15.5px] leading-[1.85] text-[#3f434b]">
                We do not have any roles listed at the moment. We still welcome
                speculative applications, and we keep them on file for when
                something opens up.
              </p>
            ) : (
              <ul className="mt-5 flex flex-col gap-4">
                {openRoles.map((r) => (
                  <li key={r.title} className="border-b border-line pb-4">
                    <p className="font-cormorant text-[21px] text-ink">{r.title}</p>
                    <p className="mt-1 text-[14.5px] text-[#3f434b]">{r.detail}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-12 border-t border-line pt-9">
            <h2 className="font-cormorant text-[26px] uppercase tracking-[1px]">
              How To Apply
            </h2>
            <p className="mt-4 max-w-[58ch] text-[15.5px] leading-[1.85] text-[#3f434b]">
              Send your CV and a short note about the work you are looking for
              to{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-gold-deep underline-offset-4 hover:underline"
              >
                {EMAIL}
              </a>
              .
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Application%20to%20Havilah`}
              className="mt-8 inline-block rounded-full bg-ink px-10 py-4 text-[12.5px] uppercase tracking-[2.5px] text-paper transition-colors duration-300 hover:bg-gold-deep"
            >
              Send your CV
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
