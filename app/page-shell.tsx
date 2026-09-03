import Nav from "@/components/nav";
import Footer from "@/components/footer";

/* Inner pages share the bar and footer.
   With `navVariant="overlay"` the bar is see-through and the page's own top
   section shows behind it, so `main` gets no top offset and the page is
   responsible for leaving room for the bar. */
export default function PageShell({
  children,
  navVariant = "solid",
}: {
  children: React.ReactNode;
  navVariant?: "solid" | "overlay";
}) {
  const overlay = navVariant === "overlay";
  return (
    <>
      <Nav variant={navVariant} />
      <main className={overlay ? "" : "pt-[84px]"}>{children}</main>
      <Footer />
    </>
  );
}
