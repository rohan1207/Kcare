import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import servicesData from "../data/servicesData.json";

// Transform servicesData.json to match the expected format
// Using cardimage directly from servicesData.json
// Filter to only show services with id 1-27 (exclude id 28)
const SERVICES = servicesData
  .filter((service) => service.id >= 1 && service.id <= 27)
  .map((service) => ({
    title: service.name,
    phoneTitle: service.phonescreenname,
    image: service.cardimage || "/placeholder-service.jpg",
    description: service.overview,
    path: `/services/${service.slug}`,
  }));

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
      className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-lg ring-1 ring-slate-800/5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Image with gradient */}
      <div className="relative aspect-[4/3] sm:aspect-[5/3]">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-turquoise-500/10 to-transparent mix-blend-overlay" />
      </div>

      {/* Content container */}
      <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-end">
        {/* Mobile/Tablet: Always visible title - with proper spacing for button */}
        <div className="lg:hidden pr-20 sm:pr-24">
          <h3 className="text-white text-xs sm:text-sm md:text-base font-semibold tracking-tight drop-shadow-lg leading-tight">
            {service.phoneTitle}
          </h3>
        </div>

        {/* Desktop: Default state content (hidden on mobile) */}
        <div className="hidden lg:block pr-16 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-8">
          <h3 className="text-white text-xl font-semibold tracking-tight drop-shadow-lg leading-snug">
            {service.title}
          </h3>
        </div>

        {/* Desktop: Hover state content with description */}
        <div className="hidden lg:flex absolute inset-0 p-4 flex-col justify-end opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:-translate-y-8 pb-16">
          <h3 className="text-white text-xl font-semibold tracking-tight mb-2 leading-snug">
            {service.title}
          </h3>
          <p className="text-white leading-relaxed line-clamp-1 text-sm mb-3">
            {service.description}
          </p>
        </div>

        {/* CTA button - Always visible text on mobile, morphing on desktop */}
        <Link
          to={service.path}
          aria-label={`Learn more about ${service.title}`}
          className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 inline-flex items-center justify-center gap-1 sm:gap-1.5 h-7 sm:h-9 lg:h-10 rounded-full bg-turquoise-400 lg:bg-white text-white lg:text-slate-900 lg:group-hover:bg-turquoise-400 lg:group-hover:text-white shadow-lg overflow-hidden px-2.5 sm:px-3 lg:px-0 transition-all duration-300 ease-out w-auto lg:w-10 lg:group-hover:w-32 lg:group-hover:px-3 mt-8"
        >
          <span className="text-[9px] sm:text-[10px] lg:text-sm font-semibold lg:font-medium lg:opacity-0 lg:w-0 overflow-hidden transition-all duration-300 lg:group-hover:opacity-100 lg:group-hover:w-auto lg:mr-1 whitespace-nowrap ">
            Learn more
          </span>
          <ArrowRight
            className="h-2.5 sm:h-3 lg:h-4 w-2.5 sm:w-3 lg:w-4 transition-transform duration-300 flex-shrink-0"
            strokeWidth={2.5}
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const [visibleRows, setVisibleRows] = useState(4); // 4 rows × 2 cols = 8 items on mobile
  const [isMobile, setIsMobile] = useState(false);

  const ITEMS_PER_ROW = 3; // Used for desktop calculation
  
  // Use useEffect to detect mobile after component mounts to avoid hydration issues
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    // Set initial value immediately
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 1024);
    }
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Mobile (2 cols): 4 rows = 8 items initially
  // Desktop (3 cols): 3 rows = 9 items initially
  // Default to desktop layout (3 cols) until mobile is detected
  const colsPerRow = isMobile ? 2 : 3;
  const visibleServices = SERVICES.slice(0, Math.min(visibleRows * colsPerRow, SERVICES.length));
  const hasMore = visibleServices.length < SERVICES.length;

  const handleViewMore = () => {
    if (visibleRows * ITEMS_PER_ROW < SERVICES.length) {
      setVisibleRows((prev) => prev + 1);
    }
  };

  return (
    <section
      id="services"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden scroll-mt-24"
      style={{ position: 'relative', zIndex: 1, order: 0 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
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
          className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center relative z-10"
        >
          <span className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full bg-turquoise-50 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-medium text-turquoise-700 mb-3 sm:mb-4 md:mb-6 shadow-sm shadow-turquoise-100/50">
            <span className="h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-turquoise-500"></span>
            Our services 
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[4.5rem] font-light tracking-tight text-slate-900 mb-3 sm:mb-4 md:mb-6 px-4">
            Advanced <span className="font-medium">Surgical</span> Services
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light px-4">
            Robotic precision. Minimal invasion. Faster recovery.
            <br className="hidden sm:block" />
            Experience world-class surgical care with cutting-edge technology.
          </p>
        </motion.div>

        {/* Cards Grid - 2 cols mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mb-8 sm:mb-10 md:mb-12">
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
              className="group relative inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-br from-turquoise-500 to-turquoise-400 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-[15px] font-medium tracking-wide text-white shadow-lg shadow-turquoise-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-turquoise-500/30 hover:-translate-y-0.5"
            >
              View More Services
              <ChevronDown
                className="h-4 sm:h-5 w-4 sm:w-5 transition-transform duration-300 group-hover:translate-y-1"
                strokeWidth={2.5}
              />
            </button>
            <p className="mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm text-slate-500 tracking-wide">
              Showing {visibleServices.length} of {SERVICES.length} services
            </p>
          </motion.div>
        )}

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -z-10 h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-gradient-to-br from-turquoise-50 to-sky-50/70 blur-3xl opacity-80" />
        <div className="absolute bottom-0 left-0 -z-10 h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-turquoise-50/70 blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] sm:h-[800px] w-[600px] sm:w-[800px] rounded-full bg-gradient-to-r from-turquoise-50/40 to-transparent blur-3xl opacity-60" />
      </div>
    </section>
  );
}
