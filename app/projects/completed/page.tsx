import type { Metadata } from "next";
import PageShell from "../../page-shell";
import ProjectList from "@/components/project-list";

export const metadata: Metadata = {
  title: "Completed Projects · Havilah Development and Management Services",
  description:
    "Developments delivered and handed over by Havilah Development and Management Services Limited.",
};

export default function CompletedProjectsPage() {
  return (
    <PageShell>
      <ProjectList status="completed" />
    </PageShell>
  );
}
