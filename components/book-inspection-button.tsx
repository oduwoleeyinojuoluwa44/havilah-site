import Link from "next/link";

interface Props {
  /** On dark backgrounds: white outline + dark hover fill. Default: dark outline + light hover fill. */
  dark?: boolean;
  /** Extra classes to merge onto the root element */
  className?: string;
}

export default function BookInspectionButton({ dark, className = "" }: Props) {
  return (
    <Link
      href="/inspection"
      className={[
        "inline-block rounded-full border px-[26px] py-[13px] text-[12px] tracking-[2.5px] uppercase transition-colors duration-300",
        dark
          ? "border-white text-white hover:bg-white hover:text-ink"
          : "border-ink text-ink hover:bg-ink hover:text-paper",
        className,
      ].join(" ")}
    >
      Book an Inspection
    </Link>
  );
}
