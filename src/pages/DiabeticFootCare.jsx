import React from 'react';
import { Footprints } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

const DiabeticFootCarePage = () => {
  const serviceData = {
    title: "Diabetic Foot Care",
    subtitle: "Early, expert care to heal wounds, protect your feet, and prevent complications.",
    image: "/diabetic_foot.png",
    Icon: Footprints,
    
    overview: [
      "People with diabetes often experience poor blood circulation and reduced sensation in their feet. This can lead to slow‑healing wounds, ulcers, or infections that, if ignored, can become serious. Early and expert care can prevent complications and even save the limb.",
    ],
    whenToConsult: [
      "Persistent wounds or ulcers on the foot",
      "Numbness, tingling, or burning sensation",
      "Swelling, redness, or foul‑smelling discharge",
      "Change in skin colour or temperature",
    ],
    treatmentOptions: [
      "At our clinic, diabetic foot care begins with a thorough assessment of blood flow, nerve function, and wound condition. Depending on the severity, treatment may include:",
      "• Advanced wound dressings and offloading techniques",
      "• Laser‑assisted wound healing",
      "• Minor debridement or surgical cleaning of infected tissue",
      "• Reconstructive procedures for deeper infections or ulcers",
    ],
    recovery: [
      "Minor wounds heal within 2–4 weeks with proper care.",
      "Complex cases may take longer, depending on blood sugar control and circulation.",
    ],
    whyChooseUs: [
      "We combine surgical expertise with diabetic wound management, ensuring faster healing, infection control, and prevention of recurrence.",
      "Our approach is comprehensive — treating both the wound and its root cause.",
    ],
    images: [
      "/blog1_1.jpg",
      "/blog1_2.jpg",
      "/blog1_3.jpg",
      "/blog1_1.jpg",
    ],
    timeline: [
      { title: "Comprehensive Assessment", description: "Check circulation, nerve function, and wound status to grade risk." },
      { title: "Personalised Plan", description: "Dressings, offloading, glucose optimisation, and footwear guidance." },
      { title: "Advanced Therapies", description: "Laser‑assisted healing and careful debridement for clean wound bed." },
      { title: "Offloading & Protection", description: "Custom footwear/devices to shift pressure and promote healing." },
      { title: "Education & Follow‑up", description: "Daily foot checks, infection signs, and regular review to prevent recurrence." },
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default DiabeticFootCarePage;