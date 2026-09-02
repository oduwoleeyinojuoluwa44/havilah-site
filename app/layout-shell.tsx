import Nav from "@/components/nav";
import Footer from "@/components/footer";

/* Every page carries the same bar and footer, so they live in one shell
   rather than being repeated per route. */
export default function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="pt-[76px]">{children}</main>
      <Footer />
    </>
  );
}
