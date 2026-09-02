import type { Metadata } from "next";
import LayoutShell from "../layout-shell";
import About from "@/components/about";
import MoreThanDeveloper from "@/components/more-than-developer";
import WhereWeBuild from "@/components/where-we-build";

export const metadata: Metadata = {
  title: "About · Havilah Development and Management Services",
  description:
    "Havilah Development and Management Services Limited, a real estate development company with over seven years of experience delivering quality, well-designed properties.",
};

export default function AboutPage() {
  return (
    <LayoutShell>
      <About />
      <MoreThanDeveloper />
      <WhereWeBuild />
    </LayoutShell>
  );
}
