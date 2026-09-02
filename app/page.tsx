import Preloader from "@/components/preloader";
import LockScroll from "@/components/lock-scroll";
import Nav from "@/components/nav";
import Hero from "@/components/hero";

/* The landing screen is the hero and nothing else: one viewport, no scroll.
   Every other section now lives on its own route. */
export default function Home() {
  return (
    <>
      <Preloader />
      <LockScroll />
      <Nav />
      <main>
        <Hero />
      </main>
    </>
  );
}
