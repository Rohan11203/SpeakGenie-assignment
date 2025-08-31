import { useEffect } from "react";
import "./App.css";
import { ComparisonSection } from "./components/ComparisonSection";
import { CTASection } from "./components/CTASection";
import { FAQSection } from "./components/FAQSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { ParentTeacherHub } from "./components/ParentTeacherHub";
import { PricingSection } from "./components/PricingSection";
import { ProgramsSection } from "./components/ProgramsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { WhyMinderyKids } from "./components/WhyMinderKids";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="pt-20">
          <HeroSection />
          <WhyMinderyKids />
          <ProgramsSection />
          <FeaturesSection />
          <ComparisonSection />
          <PricingSection />
          <ParentTeacherHub />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
