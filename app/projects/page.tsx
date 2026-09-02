import type { Metadata } from "next";
import LayoutShell from "../layout-shell";
import PropertiesGrid from "@/components/properties-grid";
import CurrentlyDeveloping from "@/components/currently-developing";

export const metadata: Metadata = {
  title: "Projects · Havilah Development and Management Services",
  description:
    "Completed, ongoing and upcoming developments by Havilah Development and Management Services Limited.",
};

export default function ProjectsPage() {
  return (
    <LayoutShell>
      <CurrentlyDeveloping />
      <PropertiesGrid />
    </LayoutShell>
  );
}
