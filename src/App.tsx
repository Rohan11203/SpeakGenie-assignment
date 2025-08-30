import "./App.css";
import { FeaturesSection } from "./components/FeaturesSection";
import { HeroSection } from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { ProgramsSection } from "./components/ProgramsSection";
import { WhyMinderyKids } from "./components/WhyMinderKids";

function App() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="pt-20">
          <HeroSection />
          <WhyMinderyKids />
          <ProgramsSection />
          <FeaturesSection />
        </div>
      </div>
    </>
  );
}

export default App;
