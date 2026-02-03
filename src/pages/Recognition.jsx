import React from "react";
import { motion } from "framer-motion";
import { Award, Newspaper, CheckCircle, Radio, FileText } from "lucide-react";

const Blur = () => (
  <>
    <div className="absolute top-0 right-0 -z-10 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-[400px] sm:w-[500px] md:w-[600px] rounded-full bg-gradient-to-br from-teal-50 to-sky-50/70 blur-3xl opacity-80" />
    <div className="absolute bottom-0 left-0 -z-10 h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] w-[350px] sm:w-[450px] md:w-[550px] lg:w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-teal-50/70 blur-3xl opacity-60" />
  </>
);

const recognitions = [
  {
    id: 1,
    type: "Article Publication",
    title: "Preventive Measures to Promote Healthy Gut in 2024",
    description:
      "Published article focusing on preventive healthcare strategies and measures to maintain optimal gut health and digestive wellness.",
    date: "2024",
    image: "/blog2_2.jpg",
    source: "India TV",
    icon: FileText,
  },
  {
    id: 2,
    type: "Article Publication",
    title: "Red Flags in Constipation – How Early Detection and Treatment Can Aid in Good Bowel Care",
    description:
      "Comprehensive article discussing warning signs of serious constipation, emphasizing the importance of early detection and timely treatment for maintaining bowel health.",
    date: "2024",
    image: "recognition2.png",
    source: "India TV",
    icon: FileText,
  },
  {
    id: 3,
    type: "Article Publication",
    title: "Navigating Red Flags – Recognizing Common Symptoms and Signs of Crohn's and Colitis",
    description:
      "In-depth article providing insights into identifying critical symptoms and warning signs of inflammatory bowel diseases including Crohn's disease and ulcerative colitis.",
    date: "2024",
    image: "recognition3.png",
    source: "HealthSite.com",
    icon: FileText,
  },
  {
    id: 4,
    type: "Article Publication",
    title: "Causes of Abdominal Pain and Inflammation in Females",
    description:
      "Expert analysis of various causes of abdominal pain and inflammation specific to female patients, providing valuable diagnostic and treatment insights.",
    date: "2024",
    image: "recognition4.png",
    source: "HealthSite.com",
    icon: FileText,
  },
  {
    id: 5,
    type: "Radio Program",
    title: "Stomach Pain & Digestive Health",
    description:
      "Special phone-in program on Hello Doctor Radio, addressing patient queries and concerns about stomach pain, digestive health, and gastrointestinal wellness.",
    date: "2024",
    image: "/blog2_2.jpg",
    source: "Hello Doctor Radio",
    icon: Radio,
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
        className="relative bg-gradient-to-br from-turquoise-600 via-turquoise-700 to-turquoise-900  text-white overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-32"
      >
        <div className="absolute top-0 right-0 w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 bg-teal-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-transparent mix-blend-overlay" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight"
          >
            Recognitions{" "}
            <span className="font-serif italic text-teal-400">&</span>{" "}
            <span className="font-medium">Article Publications</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-white/90 font-light leading-relaxed"
          >
            Our expertise and insights featured in leading publications and media platforms.
          </motion.p>
        </div>
      </motion.div>

      {/* Recognitions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {recognitions.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem] shadow-xl overflow-hidden group ring-1 ring-teal-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-teal-400/100 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-white ring-1 ring-teal-400/30 backdrop-blur-sm">
                    <item.icon className="w-3 sm:w-4 h-3 sm:h-4" />
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6 md:p-8">
                <p className="text-xs sm:text-sm font-medium text-teal-600 mb-1.5 sm:mb-2">
                  {item.source}
                </p>
                <h2 className="text-lg sm:text-xl md:text-2xl font-light text-stone-900 mb-2 sm:mb-3 leading-tight">
                  <span className="font-medium">
                    {item.title.split(":")[0]}
                  </span>
                  {item.title.includes(":") ? ":" : ""}
                  {item.title.split(":").slice(1).join(":")}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-stone-600/90 leading-relaxed mb-3 sm:mb-4 font-light">
                  {item.description}
                </p>
                <p className="text-[10px] sm:text-xs text-stone-500 font-medium">
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
