import type { Metadata } from "next";
import PageShell from "../../page-shell";
import ProjectList from "@/components/project-list";

export const metadata: Metadata = {
  title: "Ongoing Projects · Havilah Development and Management Services",
  description:
    "Developments currently taking shape with Havilah Development and Management Services Limited.",
};

export default function OngoingProjectsPage() {
  return (
    <PageShell>
      <ProjectList status="ongoing" />
    </PageShell>
  );
}
