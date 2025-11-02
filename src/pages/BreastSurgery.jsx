import React from 'react';
import { Ribbon } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';



const BreastSurgeryPage = () => {
  const serviceData = {
    title: "Breast Surgery",
    subtitle: "Comprehensive breast care—from evaluation to surgery—in a safe, supportive environment.",
    image: "/breast.jpg",
    Icon: Ribbon,
    overview: [
      "Breast conditions can range from harmless cysts and lumps to infections or even cancer. Early diagnosis and the right treatment can ensure the best possible outcome. We provide comprehensive breast care — from evaluation to surgery — in a safe and supportive environment.",
    ],
    whenToConsult: [
      "Lump or swelling in the breast or underarm",
      "Pain, nipple discharge, or redness",
      "Change in shape or skin of the breast",
    ],
    treatmentOptions: [
      "Depending on the condition, procedures may include:",
      "• Lumpectomy (removal of a small lump or cyst)",
      "• Mastectomy (removal of the whole breast, if needed)",
      "• Breast abscess drainage",
      "• Reconstructive surgery to restore natural shape after cancer surgery",
      "Most breast surgeries are done under general anaesthesia and take 1–2 hours.",
    ],
    recovery: [
      "Patients are typically discharged in 1–2 days, and complete recovery takes 1–2 weeks, depending on the procedure.",
    ],
    whyChooseUs: [
      "Our focus is on early diagnosis, precision surgery, and emotional comfort — using advanced techniques to minimize scars and promote faster healing.",
    ],
    timeline: [
      { title: "Clinical Evaluation", description: "Triple assessment—exam, imaging (mammogram/ultrasound), and biopsy if needed." },
      { title: "Multidisciplinary Planning", description: "Team review to personalise treatment and confirm need for surgery." },
      { title: "Procedure Selection", description: "Lumpectomy, mastectomy, abscess drainage, and/or reconstruction as appropriate." },
      { title: "Surgery (1–2 hours)", description: "Performed under general anaesthesia with oncoplastic focus for best cosmetic outcome." },
      { title: "Recovery & Follow‑up", description: "Discharge in 1–2 days; wound care, pathology review, and adjuvant therapy discussion if required." },
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default BreastSurgeryPage;