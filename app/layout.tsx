import type { Metadata } from "next";
import { Cormorant, Jost, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--ff-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--ff-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const greatVibes = Great_Vibes({
  variable: "--ff-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Havilah Development · Quality Homes in Nigeria",
  description:
    "Havilah Development and Management Services Limited has spent over seven years delivering quality, well-designed properties in Lagos. Development and property management.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${greatVibes.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
