/* The topographic line pattern behind the careers heading. It lives in
   public as an SVG rather than inline, so it is cached and does not add
   10KB to every page that uses it. Purely decorative, so it is hidden from
   assistive tech and never intercepts a click.
   The stroke colour is baked into the file: currentColor cannot inherit
   through a CSS background-image, so strength is set with `opacity` here
   rather than a text colour class. */
export default function ContourBackdrop({
  className = "",
  opacity = 0.5,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{
        opacity,
        backgroundImage: "url(/images/contour.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
