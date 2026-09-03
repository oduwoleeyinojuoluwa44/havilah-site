import Image from "next/image";

/* PROVISIONAL WORDING.
   No vision, mission or purpose statements have been supplied. Each line
   below is drawn from a sentence in the client's own About copy so nothing
   is invented, but these are not statements Havilah has formally adopted.
   Replace the three `statement` values once the real wording arrives. */
const pillars = [
  {
    title: "Vision",
    statement:
      "To be a trusted name synonymous with architectural excellence, integrity, and reliability.",
    image: "/images/proj-havilah-1.jpg",
  },
  {
    title: "Mission",
    statement:
      "To build unique architectural designs that combine creativity, functionality, and enduring quality.",
    image: "/images/proj-havilah-3.jpg",
  },
  {
    title: "Purpose",
    statement:
      "To build trust: one project, one client, and one relationship at a time.",
    image: "/images/proj-havilah-5.jpg",
  },
];

export default function VisionMissionPurpose() {
  return (
    <section className="bg-paper px-[8vw] py-[clamp(56px,8vh,96px)]">
      <div className="mx-auto grid max-w-[1180px] gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <article
            key={p.title}
            className="relative isolate flex min-h-[380px] flex-col justify-end overflow-hidden rounded-lg bg-ink p-8 lg:min-h-[440px]"
          >
            {/* The photograph is texture rather than subject here, so it sits
                well back: dimmed, then covered by a wash that deepens toward
                the text. */}
            <Image
              src={p.image}
              alt=""
              aria-hidden
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="-z-10 object-cover opacity-40 brightness-[.55]"
            />
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "linear-gradient(180deg,rgba(13,14,17,.55) 0%,rgba(13,14,17,.72) 45%,rgba(13,14,17,.92) 100%)",
              }}
            />

            <h3 className="font-jost text-[30px] font-semibold text-white lg:text-[34px]">
              {p.title}
            </h3>
            <span className="mt-2.5 block h-[3px] w-14 bg-golden" />
            <p className="mt-5 text-[15.5px] leading-[1.7] text-white/85">
              {p.statement}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
