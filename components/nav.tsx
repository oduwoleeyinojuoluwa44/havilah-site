"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-41 flex justify-between items-center px-[34px] py-5 mix-blend-difference text-white max-md:mix-blend-normal max-md:text-ink max-md:px-[22px] max-md:py-4 ${open ? "max-md:text-white" : ""}`}
    >
      <Link href="/" className="font-cormorant text-[19px] tracking-[3px] leading-tight max-md:text-[17px]">
        HAVILAH
        <em className="font-great-vibes font-normal text-[13.5px] block tracking-[1px] opacity-85 max-md:text-[12px]">
          Development &amp; Management
        </em>
      </Link>

      <button
        className="hidden max-md:flex bg-transparent border-0 p-2 cursor-pointer flex-col gap-[5px] w-[34px] text-current relative z-[42]"
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

      <div
        className={`flex items-center gap-[26px] text-[12.5px] tracking-[2px] uppercase max-md:fixed max-md:inset-0 max-md:z-[40] max-md:bg-ink max-md:text-white max-md:flex-col max-md:justify-center max-md:gap-7 max-md:text-[15px] max-md:tracking-[3px] max-md:transition-opacity max-md:duration-350 max-md:opacity-0 max-md:invisible ${open ? "max-md:opacity-100 max-md:visible" : ""}`}
      >
        <Link href="/#hero" className="relative pb-[3px] whitespace-nowrap hover:after:scale-x-100 hover:after:origin-left after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-current after:scale-x-0 after:origin-right after:transition-transform after:duration-350" onClick={() => setOpen(false)}>
          Properties
        </Link>
        <Link href="/#about" className="relative pb-[3px] whitespace-nowrap hover:after:scale-x-100 hover:after:origin-left after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-current after:scale-x-0 after:origin-right after:transition-transform after:duration-350" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link href="/#management" className="relative pb-[3px] whitespace-nowrap hover:after:scale-x-100 hover:after:origin-left after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-current after:scale-x-0 after:origin-right after:transition-transform after:duration-350" onClick={() => setOpen(false)}>
          Management
        </Link>
        <Link href="/#contact" className="relative pb-[3px] whitespace-nowrap hover:after:scale-x-100 hover:after:origin-left after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-current after:scale-x-0 after:origin-right after:transition-transform after:duration-350" onClick={() => setOpen(false)}>
          Contact
        </Link>
        <Link
          href="/inspection"
          className="font-cormorant text-[16px] tracking-[2px] border-b border-current pb-[2px] max-md:text-[22px]"
          onClick={() => setOpen(false)}
        >
          Book an Inspection
        </Link>
      </div>
    </nav>
  );
}
