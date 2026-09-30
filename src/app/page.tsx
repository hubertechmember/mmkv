import SmoothScroll from "../components/SmoothScroll";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import ValueProps from "../components/ValueProps";
import Services from "../components/Services";
import Ksef from "../components/Ksef";
// import PricingCalculator from "../components/PricingCalculator";
import Process from "../components/Process";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import FbPosts from "../components/FbPosts";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main className="bg-white text-slate-900">
        <Hero />
        <Marquee />
        <ValueProps />
        <Services />
        <Ksef />
        {/* <PricingCalculator /> */}
        <Process />
        <About />
        <Testimonials />
        <FbPosts />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
