import { motion } from "framer-motion";
import { Award, GraduationCap, Heart, ArrowRight, ChevronDown, ChevronUp, Stethoscope, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const STATS = [
  {
    icon: <Award className="h-5 w-5 text-turquoise-500" />,
    label: "10+ years of experience",
  },
  {
    icon: <Stethoscope className="h-5 w-5 text-turquoise-500" />,
    label: "Clinical Associate Doctor to Senior Surgeon",
  },
  {
    icon: <Heart className="h-5 w-5 text-turquoise-500" />,
    label: "General Physician",
  },
  {
    icon: <Shield className="h-5 w-5 text-turquoise-500" />,
    label: "AHA Certified BLS and ACLS Instructor",
  },
];

const SPECIALITIES = [
  "Female doctor for Piles",
  "Video proctoscopy",
  "Family Physician Doctor",  
  "One point contact from consultation till recovery for our surgical patients",
  "Post surgery care and wound management",
  "Surgery assistant",
  "Hospital administration and operation management",
  "Basic Life Support emergency response and First Aid education",
  "Health Check up and Consultantation",

];

export default function CoFounder() {
  const [showAllSpecialities, setShowAllSpecialities] = useState(false);
  
  const INITIAL_SPECIALITIES_COUNT = 3;
  // Show all stats by default
  const displayedStats = STATS;
  const displayedSpecialities = showAllSpecialities 
    ? SPECIALITIES 
    : SPECIALITIES.slice(0, INITIAL_SPECIALITIES_COUNT);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-turquoise-50/20 to-white py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-turquoise-100/20 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-0 items-stretch shadow-xl sm:shadow-2xl shadow-turquoise-900/10 ring-1 ring-turquoise-100/50"
        >
          {/* Image Content - 2 columns (left) - Show first on mobile */}
          <motion.div
            variants={imageVariants}
            className="order-1 lg:order-first lg:col-span-2 relative min-h-[250px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[380px] lg:h-full overflow-hidden"
          >
            <div className="absolute h-[100%] inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-turquoise-100/20 via-transparent to-transparent z-10" />
            <img
              src="/sharma4.jpg"
              alt="Dr. Shital Sharma"
              className="h-full w-full object-contain object-center"
            />
           
          </motion.div>

          {/* Text Content - 3 columns - Show second on mobile */}
          <div className="order-2 lg:order-none lg:col-span-3 p-4 sm:p-6 md:p-8 lg:p-12">
            <motion.div variants={itemVariants}>
              <span className="inline-block text-xs sm:text-sm font-semibold text-turquoise-600 tracking-wide  bg-turquoise-50 px-2 sm:px-3 py-1 rounded-full">
                Meet Our Physician
              </span>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-stone-900 leading-tight">
                Dr. Shital Satish{" "}
                <span className="font-semibold bg-gradient-to-r from-turquoise-600 to-turquoise-500 bg-clip-text text-transparent">
                  Sharma
                </span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-turquoise-600 font-medium">Clinical Associate Doctor to Senior Surgeon & General Physician</p>
              <p className="mt-2 text-sm sm:text-base text-turquoise-600 font-medium">MBA Hospital Administration and Healthcare Managementn</p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-stone-600">BAMS, PGD Emergency Medical Services</p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-stone-600">MMC Registration No. – I‑70646‑A</p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-stone-600">AHA Certified BLS & ACLS Instructor</p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed max-w-2xl">
                Associate doctor to Senior Surgeon-Dr. Pramod Kadam since 10+ years. 13 years of experience at Ruby Hall Clinic, Pune as Emergency Physician & Assistant Manager of Accident & Emergency Department.
              </p>
            </motion.div>

            {/* Stats - Compact on mobile */}
            <motion.div variants={itemVariants} className="mt-3 sm:mt-4 md:mt-6">
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {displayedStats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 sm:gap-2.5 bg-gradient-to-br from-turquoise-50/80 to-sky-50/50 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-lg sm:rounded-xl border border-turquoise-100/60 group hover:border-turquoise-200 transition-all flex-1 sm:flex-initial min-w-0"
                  >
                    <div className="flex-shrink-0">{stat.icon}</div>
                    <span className="font-medium text-stone-700 text-[10px] sm:text-xs md:text-sm truncate sm:whitespace-nowrap">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Specialities - Compact with Show More/Less */}
            <motion.div variants={itemVariants} className="mt-3 sm:mt-4 md:mt-6">
              <h4 className="text-[10px] sm:text-xs font-semibold text-turquoise-700 uppercase tracking-wider mb-1.5 sm:mb-2 md:mb-3">
                Key Specialities
              </h4>
              <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                {displayedSpecialities.map((spec, i) => (
                  <span
                    key={i}
                    className="bg-white/80 text-stone-700 text-[9px] sm:text-[10px] md:text-xs font-medium px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-md sm:rounded-lg border border-stone-200/60 hover:border-turquoise-300 hover:bg-turquoise-50/50 transition-all"
                  >
                    {spec}
                  </span>
                ))}
                <button
                  onClick={() => setShowAllSpecialities(!showAllSpecialities)}
                  className="inline-flex items-center gap-1 bg-gradient-to-r from-turquoise-50 to-sky-50 text-turquoise-700 text-[9px] sm:text-[10px] md:text-xs font-semibold px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-md sm:rounded-lg border border-turquoise-200 hover:border-turquoise-300 hover:from-turquoise-100 hover:to-sky-100 transition-all group"
                >
                  {showAllSpecialities ? (
                    <>
                      Show Less
                      <ChevronUp className="h-2.5 sm:h-3 w-2.5 sm:w-3 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  ) : (
                    <>
                      +{SPECIALITIES.length - INITIAL_SPECIALITIES_COUNT} More
                      <ChevronDown className="h-2.5 sm:h-3 w-2.5 sm:w-3 group-hover:translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 flex flex-wrap gap-2 sm:gap-3">
              <Link
                to="/shital-sharma"
                className="group inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-turquoise-400 to-turquoise-600 hover:from-turquoise-500 hover:to-turquoise-700 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg shadow-turquoise-500/30 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
