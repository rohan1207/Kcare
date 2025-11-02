import React from "react";
import { motion } from "framer-motion";
import { Award, Newspaper, CheckCircle } from "lucide-react";

const Blur = () => (
  <>
    <div className="absolute top-0 right-0 -z-10 h-[700px] w-[600px] rounded-full bg-gradient-to-br from-emerald-50 to-sky-50/70 blur-3xl opacity-80" />
    <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-emerald-50/70 blur-3xl opacity-60" />
  </>
);

const recognitions = [
  {
    id: 1,
    type: "Award",
    title: "Best Surgical Practice in Pune 2024",
    description:
      "Honored by the Pune Medical Association for our outstanding commitment to patient care, surgical innovation, and clinical excellence.",
    date: "October 15, 2024",
    image: "/blog2_2.jpg",
    source: "Pune Medical Association",
    icon: Award,
  },
  {
    id: 2,
    type: "In the News",
    title: "Pioneering Robotic Surgery for Complex Cases",
    description:
      "Featured in the Times of India for successfully performing a groundbreaking robotic-assisted surgery, reducing patient recovery time by 70%.",
    date: "September 5, 2024",
    image: "recognition2.png",
    source: "Times of India",
    icon: Newspaper,
  },
  {
    id: 3,
    type: "Certification",
    title: "NABH Accreditation",
    description:
      "Achieved full accreditation from the National Accreditation Board for Hospitals & Healthcare Providers for the highest standards in quality and patient safety.",
    date: "August 20, 2024",
    image: "recognition3.png",
    source: "NABH India",
    icon: CheckCircle,
  },
  {
    id: 4,
    type: "Award",
    title: "Excellence in Laparoscopic Surgery",
    description:
      "Dr. Pramod Kadam was recognized for his exceptional skill and contribution to the field of minimally invasive surgery.",
    date: "June 12, 2024",
    image: "recognition4.png",
    source: "Indian Association of Gastrointestinal Endo-Surgeons",
    icon: Award,
  },
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 0.8, bounce: 0.4 },
  },
};

const RecognitionPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden -mt-20">
      <Blur />
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-turquoise-600 via-turquoise-700 to-turquoise-900  text-white overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent mix-blend-overlay" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-4xl md:text-6xl font-light tracking-tight"
          >
            Recognitions{" "}
            <span className="font-serif italic text-emerald-400">&</span>{" "}
            <span className="font-medium">Achievements</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 font-light leading-relaxed"
          >
            Our commitment to excellence, recognized by leading institutions and
            publications.
          </motion.p>
        </div>
      </motion.div>

      {/* Recognitions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {recognitions.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/90 backdrop-blur-sm rounded-[2rem] shadow-xl overflow-hidden group ring-1 ring-emerald-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/100 px-3 py-1 text-sm font-medium text-white ring-1 ring-emerald-400/30 backdrop-blur-sm">
                    <item.icon className="w-4 h-4" />
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm font-medium text-emerald-600 mb-2">
                  {item.source}
                </p>
                <h2 className="text-2xl font-light text-stone-900 mb-3 leading-tight">
                  <span className="font-medium">
                    {item.title.split(":")[0]}
                  </span>
                  {item.title.includes(":") ? ":" : ""}
                  {item.title.split(":").slice(1).join(":")}
                </h2>
                <p className="text-stone-600/90 leading-relaxed mb-4 font-light">
                  {item.description}
                </p>
                <p className="text-xs text-stone-500 font-medium">
                  {item.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecognitionPage;
