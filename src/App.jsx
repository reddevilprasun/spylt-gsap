import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./Sections/HeroSection";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import MessageSection from "./Sections/MessageSection";
import FlavorSection from "./Sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./Sections/NutritionSection";
import BenefitSection from "./Sections/BenifitSection";
import TestimonialSection from "./Sections/TestimonialSection";
import FooterSection from "./Sections/FooterSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  }, []);
  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>
          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default App;
