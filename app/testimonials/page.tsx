import type { Metadata } from "next";
import PageShell from "@/app/page-shell";
import HomeownerStories from "@/components/homeowner-stories";

export const metadata: Metadata = {
  title: "Testimonials · Havilah Development and Management Services",
  description:
    "What Havilah homeowners say about building and living with Havilah Development and Management Services Limited.",
};

export default function TestimonialsPage() {
  return (
    <PageShell>
      <HomeownerStories />
    </PageShell>
  );
}
