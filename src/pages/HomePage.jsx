import Hero from "../components/Hero";

import MainFounder from "../components/MainFounder";

import ModernDentistrySection from "../components/ModernDentistrySection";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import Our_Experties from "../components/Our_Experties"
import ScrollStatsOverlay from "../components/ScrollStatsOverlay";
import CoFounder from "../components/CoFounder";
import GeneralPhysicianSection from "../components/GeneralPhysicianSection";
import RecognitionSection from "../components/RecognitionSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <GeneralPhysicianSection />
      <MainFounder />
      <CoFounder />
      <Our_Experties />
      {/* <AboutSection /> */}
     
      <ScrollStatsOverlay />
      <ModernDentistrySection />
      <Testimonials />
      <RecognitionSection />
    </>
  );
}
