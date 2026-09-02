import Preloader from "@/components/preloader";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import CurrentlyDeveloping from "@/components/currently-developing";
import HavilahWay from "@/components/havilah-way";
import HomeownerStories from "@/components/homeowner-stories";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Nav />
      <main>
        {/* The hero sits under the fixed bar deliberately, so the photograph
            runs to the top of the screen. Other pages start below it. */}
        <Hero />
        <CurrentlyDeveloping />
        <HavilahWay />
        <HomeownerStories />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
