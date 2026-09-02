"use client";

import { useState } from "react";
import Link from "next/link";

/* The pages behind these are being rebuilt, so the labels stand as the
   intended structure but do not navigate yet. Give each an href again as
   its page lands. */
const links = ["Home", "About", "Projects", "Management", "Contact Us"];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Nav bar ── */}
      <nav className="fixed top-0 left-0 right-0 z-[50] flex justify-between items-center px-[34px] py-4 bg-ink border-b border-gold/25 text-white max-md:px-[22px] max-md:py-3">
        <Link href="/" className="font-cormorant text-[19px] tracking-[3px] leading-tight max-md:text-[17px]">
          HAVILAH
          <em className="font-great-vibes font-normal text-[13.5px] block tracking-[1px] opacity-85 max-md:text-[12px]">
            Development &amp; Management
          </em>
        </Link>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-[26px] text-[12.5px] tracking-[2px] uppercase">
          {links.map((label) => (
            <span
              key={label}
              className=" cursor-default opacity-70"
            >
              {label}
            </span>
          ))}
        </div>

        {/* ── Hamburger (mobile) ── */}
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
      </nav>

      {/* ── Mobile fullscreen overlay (sibling of nav, not child) ── */}
      <div
        className={`fixed inset-0 z-[45] bg-ink flex flex-col items-center justify-center gap-7 text-white text-[15px] tracking-[3px] uppercase transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {links.map((label) => (
          <span
            key={label}
            className=" cursor-default opacity-70"
          >
            {label}
          </span>
        ))}
      </div>
    </>
  );
}
