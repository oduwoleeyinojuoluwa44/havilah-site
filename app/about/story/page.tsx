import type { Metadata } from "next";
import PageShell from "../../page-shell";
import VisionMissionPurpose from "@/components/vision-mission-purpose";

export const metadata: Metadata = {
  title: "Havilah Story · Havilah Development and Management Services",
  description:
    "Havilah Development and Management Services Limited: over seven years delivering quality, well-designed properties, and managing them long after handover.",
};

/* Copy as supplied by the client. Nothing added. */
const paragraphs = [
  "Havilah Development and Management Services Limited is a real estate development company with over seven years of experience delivering quality, well-designed properties. Over the years, we have grown from a promising developer into a trusted name synonymous with architectural excellence, integrity, and reliability.",
  "We are committed to building unique architectural designs that stand out: properties that combine creativity, functionality, and enduring quality. Every project we undertake is approached with a fresh perspective, ensuring that our developments are not just structures, but well-thought-out spaces that meet the needs and aspirations of our clients.",
  "Beyond development, Havilah is deeply involved in property management, offering our clients the assurance that their investments are well-maintained and continuously valuable long after construction is complete. This complete, hands-on approach allows us to maintain full control over quality at every stage, from design and construction to long-term upkeep.",
  "But what truly sets Havilah apart is not just what we build, it is the trust we have built alongside it. We don't just sell properties; we have earned the confidence of individuals, families, and investors who continue to choose us because of our consistency, transparency, and commitment to delivering on our promises. Every property we hand over carries our name and our reputation, and we take that responsibility seriously.",
];

const closing =
  "At Havilah Development and Management Services Limited, our foundation is built on more than concrete and steel. It is built on trust: one project, one client, and one relationship at a time.";

export default function StoryPage() {
  return (
    <PageShell>
      {/* Title, then the three pillars, with the written story last. */}
      <section className="bg-paper px-[8vw] pt-[clamp(56px,8vh,96px)] pb-[clamp(40px,6vh,64px)]">
        <div className="mx-auto max-w-[1180px]">
          <p className="mb-4 text-[12px] uppercase tracking-[5px] text-gold-deep">
            Inside Havilah
          </p>
          <h1 className="font-cormorant text-[clamp(38px,6.5vw,76px)] uppercase leading-[1.04]">
            Havilah Story
          </h1>
        </div>
      </section>

      <VisionMissionPurpose />

      <section className="bg-paper px-[8vw] pb-[clamp(64px,9vh,110px)]">
        <div className="mx-auto max-w-[820px] border-t border-line pt-[clamp(40px,6vh,64px)]">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className={`mb-5 leading-[1.9] text-[#3f434b] ${
                i === 0 ? "text-[17.5px] text-[#2b2e35]" : "text-[15.5px]"
              }`}
            >
              {para}
            </p>
          ))}
          <p className="mt-8 border-t border-line pt-7 font-cormorant text-[21px] leading-[1.6] text-ink">
            {closing}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
