import Nav from "@/components/nav";
import Footer from "@/components/footer";

/* Inner pages share the bar and footer, and start below the fixed bar
   rather than under it the way the landing screen does. */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="pt-[84px]">{children}</main>
      <Footer />
    </>
  );
}
