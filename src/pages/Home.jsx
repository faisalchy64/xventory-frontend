import Hero from "../components/Hero";
import Features from "../components/Features";
import ProductContainer from "../components/ProductContainer";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ProductContainer />
      <Pricing />
      <Testimonial />
      <CallToAction />
    </main>
  );
}
