import React from 'react';
import { HeartCrack } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

const RectalProlapseSurgeryPage = () => {
  const serviceData = {
    title: "Rectal Prolapse Surgery",
    subtitle: "Minimally invasive and robotic repair to restore comfort and control.",
    image: "/rectal_prolapse.jpg",
    Icon: HeartCrack,
    overview: [
      "Rectal prolapse occurs when a part of the rectum slips out of its normal position, often protruding through the anus. It can cause discomfort, bleeding, mucus discharge, or difficulty controlling bowel movements. Though not life-threatening, it can affect daily comfort and confidence.",
    ],
    whenToConsult: [
      "A feeling or visible bulge coming out during bowel movements",
      "Mucus or blood discharge",
      "Discomfort or pain while sitting or walking",
      "Difficulty controlling stool (incontinence)",
    ],
    treatmentOptions: [
      "Rectal prolapse is best treated with Laparoscopic or Robotic Rectopexy, a minimally invasive surgery that repositions and secures the rectum in its place.",
      "The surgery is performed under general anaesthesia and takes around 1–2 hours. Depending on the patient’s age and health, either a perineal (lower) or abdominal approach may be used.",
    ],
    recovery: [
      "Most patients can return home within 2–3 days and resume routine activities in about 1 week.",
      "Complete internal healing takes 3–4 weeks.",
    ],
    whyChooseUs: [
      "We specialize in minimally invasive and robotic techniques that offer less pain, faster recovery, and a much lower chance of recurrence — restoring comfort and normal bowel function.",
    ],
    timeline: [
      { title: "Clinical Assessment", description: "Exam and proctoscopy; imaging if needed to confirm diagnosis and plan." },
      { title: "Surgical Planning", description: "Choose laparoscopic vs robotic rectopexy; discuss perineal vs abdominal approach." },
      { title: "Pre‑op Preparation", description: "Anaesthesia fitness, bowel prep, and peri‑operative instructions." },
      { title: "Rectopexy (1–2 hours)", description: "Minimally invasive repositioning and fixation of rectum to restore anatomy." },
      { title: "Recovery & Follow‑up", description: "Discharge in 2–3 days; diet progression, pelvic floor rehab, and review." },
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default RectalProlapseSurgeryPage;