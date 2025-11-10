import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    title: "Piles (Haemorrhoids)",
    image: "/piles.jpg",
    description:
      "Advanced laser and surgical hemorrhoid treatments for pain-free recovery.",
    category: "Proctology",
    path: "/services/piles-treatment",
  },
  {
    title: "Hernia",
    image: "/hernia.webp",
    description:
      "Precision robotic-assisted hernia surgery offering faster recovery and minimal discomfort.",
    category: "General Surgery",
    path: "/services/robotic-hernia-repair",
  },
  {
    title: "Gallbladder Stones",
    image: "/gall_bladder.jpg",
    description:
      "Advanced laparoscopic gallbladder removal ensuring quick recovery and minimal scarring.",
    category: "General Surgery",
    path: "/services/gall-bladder-removal",
  },
  {
    title: "Appendix",
    image: "/appendix.jpg",
    description:
      "Minimally invasive appendix removal with fast healing and reduced postoperative pain.",
    category: "General Surgery",
    path: "/services/laparoscopic-appendectomy",
  },
  {
    title: "Thyroid",
    image: "/thyroid.jpg",
    description:
      "State-of-the-art thyroid surgery using advanced and safe techniques for precise outcomes.",
    category: "Endocrine",
    path: "/services/advanced-thyroid-surgery",
  },
  {
    title: "Breast",
    image: "/breast.jpg",
    description:
      "Comprehensive breast procedures with advanced surgical precision and care.",
    category: "Oncology",
    path: "/services/breast-surgery",
  },
  {
    title: "Diabetic Foot",
    image: "/diabetic_foot.jpg",
    description:
      "Comprehensive diabetic foot management for faster healing and infection prevention.",
    category: "Specialized Care",
    path: "/services/diabetic-foot-care",
  },
  {
    title: "Gastrointestinal Surgeries",
    image: "/gastro_intestinal.jpg",
    description:
      "Comprehensive gastrointestinal surgical care using precision techniques for optimal outcomes.",
    category: "General Surgery",
    path: "/services/gastrointestinal-surgeries",
  },
  {
    title: "Burn Injuries",
    image: "/breast.jpg",
    description:
      "Expert burn injury treatment with advanced care and skin grafting techniques.",
    category: "Specialized Care",
    path: "/services/burn-injuries",
  },
  {
    title: "Fistula Treatment",
    image: "/fistula.jpg",
    description:
      "Minimally invasive fistula surgery ensuring complete healing and minimal recurrence.",
    category: "Proctology",
    path: "/services/fistula-treatment",
  },
  {
    title: "Anal Fissure Treatment",
    image: "/fissure.jpg",
    description:
      "Modern laser and surgical treatments for fissures with minimal discomfort and fast recovery.",
    category: "Proctology",
    path: "/services/laser-fissure-treatment",
  },
  {
    title: "Hydrocele Surgery",
    image: "/hydrocele.jpg",
    description:
      "Safe and effective hydrocele correction with minimal invasive techniques.",
    category: "Urology",
    path: "/services/hydrocele-surgery",
  },
  {
    title: "Pilonidal Sinus Care",
    image: "/pilonidal_sinus.jpg",
    description:
      "Expert treatment for pilonidal sinus with focus on complete healing and recurrence prevention.",
    category: "Specialized Care",
    path: "/services/pilonidal-sinus-care",
  },
  {
    title: "Rectal Prolapse Surgery",
    image: "/rectal_prolapse.jpg",
    description:
      "Comprehensive surgical care for rectal prolapse using modern, minimally invasive methods.",
    category: "Proctology",
    path: "/services/rectal-prolapse-surgery",
  },
  {
    title: "Phimosis Treatment",
    image: "/Phymosis.png",
    description:
      "Gentle and effective phimosis treatment ensuring comfort and quick recovery.",
    category: "Urology",
    path: "/services/phimosis-treatment",
  },
  {
    title: "Abscess Drainage",
    image: "/Abscess.jpg",
    description:
      "Safe and sterile abscess drainage procedure for quick relief and proper healing.",
    category: "General Surgery",
    path: "/services/abscess-drainage",
  },
  {
    title: "Cyst Removal",
    image: "/cyst.jpg",
    description:
      "Precise and scar-minimizing cyst removal with advanced surgical care.",
    category: "General Surgery",
    path: "/services/cyst-removal",
  },
];

function ServiceCard({ service, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 50,
        damping: 15,
      }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-lg ring-1 ring-slate-800/5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Image with gradient */}
      <div className="relative aspect-[5/3]">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-turquoise-500/10 to-transparent mix-blend-overlay" />
      </div>

      {/* Content container */}
      <div className="absolute inset-0 p-4 pr-16 flex flex-col justify-end">
        {/* Default state content */}
        <div className="transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-8">
          <h3 className="text-white text-xl font-semibold tracking-tight drop-shadow-lg leading-snug">
            {service.title}
          </h3>
        </div>

        {/* Hover state content */}
        <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:-translate-y-8">
          <h3 className="text-white text-xl font-semibold tracking-tight mb-2 leading-snug">
            {service.title}
          </h3>
          <p className="text-white leading-relaxed line-clamp-2 text-sm ">
            {service.description}
          </p>
        </div>

        {/* Morphing CTA button */}
        <Link
          to={service.path}
          aria-label={`Learn more about ${service.title}`}
          className="absolute bottom-4 right-4 inline-flex items-center justify-center gap-2 h-10 w-10 rounded-full bg-white group-hover:bg-turquoise-400 text-slate-900 group-hover:text-white shadow-lg overflow-hidden px-0 transition-all duration-300 ease-out group-hover:w-32 group-hover:px-3"
        >
          <span className="mr-1 text-sm font-medium opacity-0 w-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:w-auto">
            Learn more
          </span>
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300"
            strokeWidth={2.5}
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const [visibleRows, setVisibleRows] = useState(3);

  const ITEMS_PER_ROW = 3;
  const visibleServices = SERVICES.slice(0, visibleRows * ITEMS_PER_ROW);
  const hasMore = visibleServices.length < SERVICES.length;

  const handleViewMore = () => {
    if (visibleRows * ITEMS_PER_ROW < SERVICES.length) {
      setVisibleRows((prev) => prev + 1);
    }
  };

  return (
    <section
      id="services"
      className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 50,
            damping: 15,
          }}
          className="mb-20 text-center relative z-10"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full bg-turquoise-50 px-5 py-2.5 text-sm font-medium text-turquoise-700 mb-6 shadow-sm shadow-turquoise-100/50">
            <span className="h-1.5 w-1.5 rounded-full bg-turquoise-500"></span>
            Our Expertise
          </span>
          <h2 className="text-5xl md:text-[4.5rem] font-light tracking-tight text-slate-900 mb-6">
            Advanced <span className="font-medium">Surgical</span> Services
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Robotic precision. Minimal invasion. Faster recovery.
            <br className="hidden sm:block" />
            Experience world-class surgical care with cutting-edge technology.
          </p>
        </motion.div>

  {/* Cards Grid - 3 per row (smaller gaps and cards) */}
  <div className="grid gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <AnimatePresence mode="wait">
            {visibleServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 50,
              damping: 15,
            }}
            className="text-center"
          >
            <button
              onClick={handleViewMore}
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-turquoise-500 to-turquoise-400 px-10 py-4 text-[15px] font-medium tracking-wide text-white shadow-lg shadow-turquoise-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-turquoise-500/30 hover:-translate-y-0.5"
            >
              View More Services
              <ChevronDown
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
                strokeWidth={2.5}
              />
            </button>
            <p className="mt-5 text-sm text-slate-500 tracking-wide">
              Showing {visibleServices.length} of {SERVICES.length} services
            </p>
          </motion.div>
        )}

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-turquoise-50 to-sky-50/70 blur-3xl opacity-80" />
        <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-turquoise-50/70 blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-turquoise-50/40 to-transparent blur-3xl opacity-60" />
      </div>
    </section>
  );
}
