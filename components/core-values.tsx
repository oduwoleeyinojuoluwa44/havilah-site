/* PROVISIONAL WORDING.
   Havilah has not supplied a set of core values. Each value below is named
   from a quality the client's own About copy already claims, with the
   description drawn from the same text, so nothing is invented. Replace
   these four once the real values arrive. */
const values = [
  {
    title: "Architectural Excellence",
    body: "Unique designs that combine creativity, functionality and enduring quality, with every project approached from a fresh perspective.",
    icon: (
      <>
        <path d="M4 30h40M10 30V14l14-8 14 8v16" />
        <path d="M18 30V20h12v10" />
      </>
    ),
  },
  {
    title: "Integrity",
    body: "Every property we hand over carries our name and our reputation, and we take that responsibility seriously.",
    icon: (
      <>
        <path d="M24 5l15 6v10c0 10-6.5 17.5-15 22-8.5-4.5-15-12-15-22V11z" />
        <path d="M17 23l5 5 9-10" />
      </>
    ),
  },
  {
    title: "Full-Cycle Control",
    body: "Quality held at every stage, from design and construction through to long-term upkeep, under one roof.",
    icon: (
      <>
        <circle cx="24" cy="24" r="17" />
        <path d="M24 12v12l8 5" />
      </>
    ),
  },
  {
    title: "Earned Trust",
    body: "Individuals, families and investors return to us because of consistency, transparency and delivery on our promises.",
    icon: (
      <>
        <path d="M17 21a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
        <path d="M5 39c0-6.6 5.4-12 12-12s12 5.4 12 12" />
        <path d="M31 10a6 6 0 0 1 0 12M43 39c0-5.6-3.8-10.3-9-11.6" />
      </>
    ),
  },
];

export default function CoreValues() {
  return (
    <section className="bg-paper px-[8vw] py-[clamp(64px,9vh,110px)]">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="font-cormorant text-[clamp(32px,5vw,58px)] uppercase leading-[1.05]">
          Our Core Values
        </h2>
        <p className="mt-3 text-[15px] text-[#3f434b]">
          What it takes to build with Havilah.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <article key={v.title}>
              <div className="flex h-[130px] items-center justify-center bg-paper-dim">
                <svg
                  viewBox="0 0 48 48"
                  aria-hidden
                  className="h-14 w-14 stroke-gold-deep"
                  fill="none"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {v.icon}
                </svg>
              </div>
              <h3 className="mt-6 font-cormorant text-[23px] leading-tight text-ink">
                {v.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.8] text-[#3f434b]">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
