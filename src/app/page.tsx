import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { LogoTicker } from "../sections/LogoTicker";
import { Pricing } from "../sections/Pricing";
import { ProductShowcase } from "../sections/ProductShowcase";
import { Testimonials } from "../sections/Testimonials";
import { CallToAction } from "../sections/CallToAction";
import { Footer } from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="logo-ticker">
        <LogoTicker />
      </div>
      <div id="features">
        <ProductShowcase />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="customers">
        <Testimonials />
      </div>
      <div id="cta">
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
