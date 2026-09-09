import Image from "next/image";

const pillars = [
  {
    title: "Vision",
    statement:
      "To deliver 1,000 quality homes by 2030, creating thriving communities and transforming lives through sustainable real estate development.",
    image: "/images/proj-havilah-1.jpg",
  },
  {
    title: "Mission",
    statement:
      "To lead transformative real estate development, delivering 1,000 homes that embody quality, sustainability, and community value, creating living spaces that inspire comfort, connection, and lasting impact.",
    image: "/images/proj-havilah-3.jpg",
  },
  {
    title: "Purpose",
    statement:
      "To create and deliver quality, sustainable homes across Nigeria.",
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
