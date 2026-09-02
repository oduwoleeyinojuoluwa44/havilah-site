import type { Metadata } from "next";
import LayoutShell from "../layout-shell";
import MoreThanDeveloper from "@/components/more-than-developer";
import HomeownerStories from "@/components/homeowner-stories";

export const metadata: Metadata = {
  title: "Management · Havilah Development and Management Services",
  description:
    "Property management from Havilah: the assurance that your investment is well-maintained and continuously valuable long after construction is complete.",
};

export default function ManagementPage() {
  return (
    <LayoutShell>
      <MoreThanDeveloper />
      <HomeownerStories />
    </LayoutShell>
  );
}
