"use client";

import { useEffect } from "react";

/* The landing screen is exactly one viewport, so scrolling is switched off
   while it is mounted and cleared on the way out.
   The cleanup deliberately clears the inline value rather than restoring a
   captured one: effects run twice in development, so the second mount would
   capture the already-locked value as the "previous" state and put the lock
   back permanently, leaving every other page unscrollable. */
export default function LockScroll() {
  useEffect(() => {
    const { documentElement: html, body } = document;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.removeProperty("overflow");
      body.style.removeProperty("overflow");
    };
  }, []);
  return null;
}
