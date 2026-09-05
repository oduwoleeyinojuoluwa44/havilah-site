"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

/* Only the two About pages exist so far. The remaining labels stand as the
   intended structure and do not navigate yet; give each an href as its page
   lands. */
type NavItem = {
  label: string;
  href?: string;
  panel?: { heading: string; blurb: string; group: string; cards: Card[] };
};

type Card = { title: string; blurb: string; href: string; tone: "gold" | "ink" };

const items: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    panel: {
      heading: "Inside Havilah",
      blurb: "Building dreams, shaping communities.",
      group: "About Havilah",
      cards: [
        {
          title: "Havilah Story",
          blurb: "Seven years of delivering and managing quality homes.",
          href: "/about/story",
          tone: "gold",
        },
        {
          title: "Career Opportunities",
          blurb: "Work with the Havilah team.",
          href: "/about/careers",
          tone: "ink",
        },
      ],
    },
  },
  {
    label: "Projects",
    panel: {
      heading: "Our Projects",
      blurb: "What we have delivered, and what is taking shape.",
      group: "Browse Projects",
      cards: [
        {
          title: "Completed Projects",
          blurb: "Delivered and handed over.",
          href: "/projects/completed",
          tone: "gold",
        },
        {
          title: "Ongoing Projects",
          blurb: "Currently taking shape.",
          href: "/projects/ongoing",
          tone: "ink",
        },
      ],
    },
  },
  { label: "Management" },
  { label: "Contact Us" },
];

export default function Nav({
  variant = "solid",
}: {
  /** "overlay" floats a transparent bar over the page's own top section. */
  variant?: "solid" | "overlay";
} = {}) {
  const overlay = variant === "overlay";
  const [open, setOpen] = useState(false);          // mobile sheet
  const [panel, setPanel] = useState<string | null>(null); // open dropdown
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openPanel = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setPanel(label);
  };
  const closePanelSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setPanel(null), 180);
  };

  /* Close on Escape, and on any click that lands outside the bar. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPanel(null);
        setOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setPanel(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const cardTone = (tone: Card["tone"]) =>
    tone === "gold"
      ? "bg-gold text-ink hover:bg-golden"
      : "bg-ink-soft text-white border border-gold/30 hover:border-gold";

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[50] ${
          overlay
            ? "bg-transparent text-ink"
            : "bg-ink border-b border-gold/25 text-white"
        }`}
        onMouseLeave={closePanelSoon}
        onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)}
      >
        <div className="flex justify-between items-center px-[34px] py-4 max-md:px-[22px] max-md:py-3">
          <Link
            href="/"
            className="font-cormorant text-[19px] tracking-[3px] leading-tight max-md:text-[17px]"
          >
            HAVILAH
            <em className="font-great-vibes font-normal text-[13.5px] block tracking-[1px] opacity-85 max-md:text-[12px]">
              Development &amp; Management
            </em>
          </Link>

          {/* ── Desktop ── */}
          <div className="hidden md:flex items-center gap-[26px] text-[12.5px] tracking-[2px] uppercase">
            {items.map((item) =>
              item.panel ? (
                <button
                  key={item.label}
                  onMouseEnter={() => openPanel(item.label)}
                  onClick={() => setPanel(panel === item.label ? null : item.label)}
                  aria-expanded={panel === item.label}
                  aria-haspopup="true"
                  className={`flex items-center gap-1.5 uppercase tracking-[2px] transition-colors ${
                    panel === item.label ? "text-golden" : "hover:text-golden"
                  }`}
                >
                  {item.label}
                  <span
                    className={`text-[8px] transition-transform duration-300 ${
                      panel === item.label ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
              ) : item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setPanel(null)}
                  className="hover:text-golden transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span key={item.label} className="cursor-default">
                  {item.label}
                </span>
              )
            )}
          </div>

          {/* ── Hamburger ── */}
          <button
            className="md:hidden bg-transparent border-0 p-2 cursor-pointer flex flex-col gap-[5px] w-[34px] relative z-[60]"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <span
              className="block h-[1.5px] bg-current transition-transform duration-300"
              style={open ? { transform: "translateY(6.5px) rotate(45deg)" } : undefined}
            />
            <span
              className="block h-[1.5px] bg-current transition-opacity duration-200"
              style={open ? { opacity: 0 } : undefined}
            />
            <span
              className="block h-[1.5px] bg-current transition-transform duration-300"
              style={open ? { transform: "translateY(-6.5px) rotate(-45deg)" } : undefined}
            />
          </button>
        </div>

        {/* ── Dropdown panel ── */}
        {/* Height and opacity are eased rather than toggled, so the panel
            grows out of the bar instead of snapping open. The cards follow
            just behind it. */}
        <AnimatePresence initial={false}>
          {items.map(
            (item) =>
              item.panel &&
              panel === item.label && (
                <motion.div
                  key={item.label}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.42, ease: [0.22, 0.61, 0.36, 1] },
                    opacity: { duration: 0.28, ease: "easeOut" },
                  }}
                  className="hidden overflow-hidden border-t border-gold/20 bg-ink md:block"
                >
                  <motion.div
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -8, opacity: 0 }}
                    transition={{ duration: 0.34, ease: "easeOut", delay: 0.06 }}
                    className="mx-auto max-w-[1180px] px-[34px] py-9"
                  >
                    <h2 className="font-cormorant text-[30px] leading-tight text-white">
                      {item.panel.heading}
                    </h2>
                    <p className="mt-1.5 text-[13.5px] normal-case tracking-normal text-white/65">
                      {item.panel.blurb}
                    </p>

                    <p className="mt-7 mb-3 text-[11.5px] uppercase tracking-[2.5px] text-golden">
                      {item.panel.group}
                    </p>
                    <div className="grid gap-4 border-t border-white/12 pt-5 sm:grid-cols-2 lg:max-w-[760px]">
                      {item.panel.cards.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setPanel(null)}
                          className={`rounded-lg px-6 py-5 transition-colors duration-300 ${cardTone(
                            c.tone
                          )}`}
                        >
                          <span className="block font-cormorant text-[21px] normal-case tracking-normal">
                            {c.title}
                          </span>
                          <span className="mt-1.5 block text-[13px] normal-case tracking-normal opacity-80">
                            {c.blurb}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </nav>

      {/* ── Mobile sheet ── */}
      <div
        className={`fixed inset-0 z-[45] flex flex-col items-center justify-center gap-6 overflow-y-auto bg-ink px-8 py-24 text-center text-[15px] uppercase tracking-[3px] text-white transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        {items.map((item) =>
          item.panel ? (
            <div key={item.label} className="w-full max-w-[340px]">
              <p className="mb-3 text-golden">{item.label}</p>
              <div className="flex flex-col gap-3">
                {item.panel.cards.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-5 py-4 font-cormorant text-[19px] normal-case tracking-normal ${cardTone(
                      c.tone
                    )}`}
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : item.href ? (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ) : (
            <span key={item.label} className="cursor-default">
              {item.label}
            </span>
          )
        )}
      </div>
    </>
  );
}
