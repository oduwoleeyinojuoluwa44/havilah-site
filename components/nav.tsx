"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`${styles.topnav} ${open ? styles.menuOpen : ""}`}>
      <Link href="/" className={styles.logo}>
        HAVILAH
        <em>Development &amp; Management</em>
      </Link>

      <button
        className={styles.toggle}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`${styles.links} ${open ? styles.open : ""}`}>
        <Link href="/#hero" onClick={() => setOpen(false)}>
          Properties
        </Link>
        <Link href="/#about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link href="/#management" onClick={() => setOpen(false)}>
          Management
        </Link>
        <Link href="/#contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
        <Link
          href="/inspection"
          className={styles.primary}
          onClick={() => setOpen(false)}
        >
          Book an Inspection
        </Link>
      </div>
    </nav>
  );
}
