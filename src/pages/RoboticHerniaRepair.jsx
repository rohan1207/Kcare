import React from 'react';
import { Shield } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

const RoboticHerniaRepairPage = () => {
  const serviceData = {
    title: "Robotic Hernia Repair",
    subtitle: "Smaller cuts, less pain, faster healing—with precision robotic surgery.",
    image: "/hernia.webp",
    Icon: Shield,
    overview: [
      "A hernia develops when an internal organ or tissue pushes through a weak spot in the muscle wall, often appearing as a bulge in the abdomen or groin. Hernias don’t heal on their own and usually require surgery.",
    ],
    whenToConsult: [
      "Visible bulge or swelling in the abdomen or groin",
      "Pain while lifting, coughing, or bending",
      "Discomfort that worsens by the end of the day",
    ],
    treatmentOptions: [
      "In Robotic Hernia Repair, the surgeon operates using robotic arms controlled from a console. This allows unmatched precision and flexibility, even for complex or recurrent hernias. A surgical mesh is placed to strengthen the muscle wall.",
      "The procedure typically takes 1–2 hours, depending on the hernia type.",
    ],
    recovery: [
      "Most patients return home the next day and can resume light work in 3–5 days.",
      "Complete recovery takes about 2 weeks, with excellent long‑term results and minimal recurrence.",
    ],
    whyChooseUs: [
      "Smaller incisions, less pain, faster healing, and better cosmetic results.",
      "Experienced surgeon specializing in advanced robotic techniques.",
    ],
    timeline: [
      { title: "Comprehensive Evaluation", description: "Physical exam and imaging (often ultrasound/CT) to assess size, type, and complexity." },
      { title: "Surgical Planning", description: "Choose the optimal robotic approach and mesh placement tailored to your hernia." },
      { title: "Anaesthesia & Setup", description: "General anaesthesia; robotic ports placed through small keyhole incisions." },
      { title: "Robotic Repair (1–2 hours)", description: "Precise dissection and repair with mesh reinforcement using wristed robotic instruments." },
      { title: "Recovery & Discharge", description: "Observation and pain control; most go home next day with activity guidelines." },
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default RoboticHerniaRepairPage;