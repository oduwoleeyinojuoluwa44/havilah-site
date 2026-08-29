import Preloader from "@/components/preloader";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import CurrentlyDeveloping from "@/components/currently-developing";
import PropertiesGrid from "@/components/properties-grid";
import HavilahWay from "@/components/havilah-way";
import About from "@/components/about";
import MoreThanDeveloper from "@/components/more-than-developer";
import WhereWeBuild from "@/components/where-we-build";
import HomeownerStories from "@/components/homeowner-stories";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <CurrentlyDeveloping />
        <PropertiesGrid />
        <HavilahWay />
        <About />
        <MoreThanDeveloper />
        <WhereWeBuild />
        <HomeownerStories />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
