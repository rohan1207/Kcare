import { motion } from "framer-motion";
import { Award, Phone, GraduationCap, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppointmentModal } from "../contexts/AppointmentModalContext";

const STATS = [
  {
    icon: <Award className="h-5 w-5 text-turquoise-500" />,
    label: "13+ Years Experience",
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-turquoise-500" />,
    label: "MBA, PGDEMS, BAMS",
  },
  {
    icon: <Heart className="h-5 w-5 text-turquoise-500" />,
    label: "AHA BLS/ACLS Instructor",
  },
];

const SPECIALITIES = [
  "Emergency Medicine",
  "Hospital Administration",
  "ACLS/BLS Training",
  "Patient Care Coordination",
  "Female Anorectal Physician",
];

export default function CoFounder() {
  const { openModal } = useAppointmentModal();
  
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
    <section className="relative bg-gradient-to-b from-white via-turquoise-50/20 to-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-turquoise-100/20 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0 items-center shadow-2xl shadow-turquoise-900/10 ring-1 ring-turquoise-100/50"
        >
          {/* Image Content - 2 columns (left) */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-2 relative h-[380px] sm:h-[420px] lg:h-[460px] overflow-hidden order-last lg:order-first"
          >
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-turquoise-100/20 via-transparent to-transparent z-10" />
            <img
              src="/sharma4.png"
              alt="Dr. Shital Sharma"
              className=""
            />
           
          </motion.div>

          {/* Text Content - 3 columns */}
          <div className="lg:col-span-3 p-8 sm:p-10 lg:p-12">
            <motion.div variants={itemVariants}>
              <span className="inline-block text-sm font-semibold text-turquoise-600 tracking-wide uppercase bg-turquoise-50 px-3 py-1 rounded-full">
                Meet Our Co‑founder & CEO
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-stone-900 leading-tight">
                Dr. Shital Satish{" "}
                <span className="font-semibold bg-gradient-to-r from-turquoise-600 to-turquoise-500 bg-clip-text text-transparent">
                  Sharma
                </span>
              </h2>
              <p className="mt-3 text-sm text-stone-600">MMC Reg. No. I‑70646‑A</p>
              <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
                BAMS, PGDEMS, MBA (Hospital Administration & Healthcare Management). AHA‑certified BLS & ACLS Instructor with 13+ years in Emergency Medicine and hospital operations.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-4">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 bg-gradient-to-br from-turquoise-50/80 to-sky-50/50 px-4 py-2.5 rounded-xl border border-turquoise-100/60 group hover:border-turquoise-200 transition-all"
                >
                  <div className="flex-shrink-0">{stat.icon}</div>
                  <span className="font-medium text-stone-700 text-sm whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Specialities */}
            <motion.div variants={itemVariants} className="mt-6">
              <h4 className="text-xs font-semibold text-turquoise-700 uppercase tracking-wider mb-3">
                Key Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {SPECIALITIES.map((spec, i) => (
                  <span
                    key={i}
                    className="bg-white/80 text-stone-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-stone-200/60 hover:border-turquoise-300 hover:bg-turquoise-50/50 transition-all"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/founders/shital-sharma"
                className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-turquoise-400 to-turquoise-600 hover:from-turquoise-500 hover:to-turquoise-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-turquoise-500/30 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-turquoise-200 text-turquoise-700 hover:bg-turquoise-50 text-sm font-semibold rounded-full transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                Book Appointment
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
