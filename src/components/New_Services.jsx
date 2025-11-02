import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  HeartPulse as PilesIcon,
  GitBranch as FistulaIcon,
  Layers as HerniaIcon,
  Droplet as GallBladderIcon,
  FileMinus as AppendixIcon,
  PersonStanding as ThyroidIcon,
  Heart as BreastIcon,
  Footprints as DiabeticFootIcon,
  MinusCircle as FissureIcon,
} from "lucide-react";

// Decorative elements
const Blur = () => (
  <>
    <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-emerald-50 to-sky-50/70 blur-3xl opacity-80" />
    <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-emerald-50/70 blur-3xl opacity-60" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-emerald-50/40 to-transparent blur-3xl opacity-60" />
  </>
);

const servicesData = [
  {
    category: "Proctology",
    icon: PilesIcon,
    title: "Piles Treatment",
    path: "/services/piles-treatment",
    description:
      "Comprehensive care for hemorrhoids, focusing on minimally invasive techniques for rapid relief and recovery.",
    benefit: "Pain-free procedures with same-day discharge.",
    technology: "Advanced laser and stapler techniques.",
    image: "/piles.jpg",
  },
  {
    category: "Proctology",
    icon: FissureIcon,
    title: "Laser Fissure Treatment",
    path: "/services/laser-fissure-treatment",
    description:
      "A modern, sphincter-saving laser procedure to heal anal fissures without the risks of traditional surgery.",
    benefit: "Quick healing with preservation of muscle function.",
    technology: "Precision laser ablation.",
    image: "/fissure.jpg",
  },
  {
    category: "Proctology",
    icon: FistulaIcon,
    title: "Fistula Treatment",
    path: "/services/fistula-treatment",
    description:
      "Advanced treatments for anal fistulas, including LIFT and VAAFT procedures, to ensure high success rates.",
    benefit: "High success rate with minimal recurrence.",
    technology: "VAAFT, LIFT, and laser procedures.",
    image: "/fistula.jpg",
  },
  {
    category: "Laparoscopic Surgery",
    icon: HerniaIcon,
    title: "Robotic Hernia Repair",
    path: "/services/robotic-hernia-repair",
    description:
      "Utilizing the da Vinci system for intricate hernia repairs, offering unmatched precision and faster recovery.",
    benefit: "Reduced pain and quicker return to normal activities.",
    technology: "da Vinci Xi Robotic System.",
    image: "/hernia.jpg",
  },
  {
    category: "Laparoscopic Surgery",
    icon: GallBladderIcon,
    title: "Gall Bladder Removal",
    path: "/services/gall-bladder-removal",
    description:
      "Minimally invasive cholecystectomy for gallstone disease, ensuring a safe and swift recovery process.",
    benefit: "Minimal scarring and short hospital stay.",
    technology: "High-definition laparoscopic equipment.",
    image: "/gall_bladder.jpg",
  },
  {
    category: "Laparoscopic Surgery",
    icon: AppendixIcon,
    title: "Laparoscopic Appendectomy",
    path: "/services/laparoscopic-appendectomy",
    description:
      "Emergency and elective laparoscopic removal of the appendix to treat and prevent appendicitis.",
    benefit: "Low risk of infection and fast recovery.",
    technology: "Advanced laparoscopic tools.",
    image: "/appendicitis.jpg",
  },
  {
    category: "General Surgery",
    icon: ThyroidIcon,
    title: "Advanced Thyroid Surgery",
    path: "/services/advanced-thyroid-surgery",
    description:
      "Specialized surgical care for thyroid disorders, including cancer and goiter, with a focus on nerve preservation.",
    benefit: "Excellent cosmetic outcomes and voice preservation.",
    technology: "Intraoperative nerve monitoring.",
    image: "/thyroid.jpg",
  },
  {
    category: "General Surgery",
    icon: BreastIcon,
    title: "Breast Surgery",
    path: "/services/breast-surgery",
    description:
      "A comprehensive approach to breast conditions, from benign lumps to breast cancer, including conservation surgery.",
    benefit: "Focus on oncological safety and aesthetic results.",
    technology: "Sentinel lymph node biopsy.",
    image: "/breast_cancer.jpg",
  },
  {
    category: "General Surgery",
    icon: DiabeticFootIcon,
    title: "Diabetic Foot Care",
    path: "/services/diabetic-foot-care",
    description:
      "Multidisciplinary care to manage and treat diabetic foot ulcers and prevent amputations.",
    benefit: "Limb salvage and improved quality of life.",
    technology: "Advanced wound care and revascularization.",
    image: "/diabetic_foot.jpg",
  },
];

export default function NewServices() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const tabsRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const selectedTab = servicesData[selectedIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Consider in view if 10% is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    // Only run the auto-scroll if the component is in view and not paused
    if (isInView && !isPaused) {
      interval = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
      }, 3000); // Auto-scroll every 3 seconds
    }

    return () => clearInterval(interval);
  }, [isPaused, isInView]);

  useEffect(() => {
    // Only scroll the tabs if the component is visible
    if (isInView) {
      const activeTab = tabsRef.current?.children[selectedIndex];
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [selectedIndex, isInView]);

  const handleInteraction = (index) => {
    setSelectedIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Pause for 5 seconds on interaction
  };

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-white to-slate-50/30 overflow-hidden relative"
    >
      <Blur />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 50,
            damping: 15,
          }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full bg-emerald-50 px-5 py-2.5 text-sm font-medium text-emerald-700 mb-6 shadow-sm shadow-emerald-100/50">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            Our Services
          </span>
          <h2 className="text-5xl md:text-[4.5rem] font-light tracking-tight text-slate-900 mb-6">
            Advanced <span className="font-medium">Surgical</span> Solutions
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Cutting-edge procedures with precision technology for better
            outcomes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 50,
            damping: 15,
          }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start"
        >
          {/* Left: Service List */}
          <div
            ref={tabsRef}
            className="lg:col-span-1 h-full lg:max-h-[580px] overflow-y-auto space-y-3 pr-3 scrollbar-thin scrollbar-thumb-emerald-200 scrollbar-track-emerald-50/50"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {servicesData.map((item, index) => {
              const { icon: Icon } = item;
              const isActive = selectedIndex === index;
              return (
                <motion.button
                  key={item.title}
                  onClick={() => handleInteraction(index)}
                  initial={false}
                  animate={{
                    scale: isActive ? 1.02 : 1,
                    y: isActive ? -2 : 0,
                  }}
                  className={`w-full flex items-center text-left p-4 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-400 text-white shadow-lg shadow-emerald-500/15"
                      : "bg-gradient-to-br from-emerald-50 to-white hover:shadow-md hover:shadow-emerald-500/10 border border-emerald-100/50"
                  }`}
                >
                  <div
                    className={`p-2 rounded-xl ${
                      isActive ? "bg-white/20" : "bg-emerald-100/50"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isActive ? "text-white" : "text-emerald-600"
                      }`}
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="ml-4">
                    <span
                      className={`block font-medium text-sm tracking-wide ${
                        isActive ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`text-xs mt-0.5 block ${
                        isActive ? "text-emerald-50" : "text-slate-500"
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Content Display */}
          <div className=" max-h-[600px] lg:col-span-2 bg-gradient-to-br from-white to-slate-50/80 rounded-[2rem] shadow-xl overflow-hidden ring-1 ring-emerald-100/80">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className="grid grid-cols-1 md:grid-cols-2 items-center"
              >
                <div className="relative h-64 md:h-full min-h-[320px] md:min-h-[500px] overflow-hidden">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={selectedTab.image}
                    alt={selectedTab.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent mix-blend-overlay" />
                </div>
                <div className="p-10 md:p-14">
                  <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 mb-4">
                    {selectedTab.category}
                  </span>
                  <h3 className="text-3xl font-light text-slate-900 tracking-tight">
                    {selectedTab.title}
                  </h3>
                  <p className="mt-5 text-lg text-slate-600 leading-relaxed min-h-[8rem] font-light">
                    {selectedTab.description}
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3 text-[15px]">
                      <div className="p-2 rounded-lg bg-emerald-50">
                        <ChevronRight
                          className="w-5 h-5 text-emerald-500"
                          strokeWidth={2.5}
                        />
                      </div>
                      <p>
                        <span className="font-medium text-slate-900">
                          Key Benefit:
                        </span>{" "}
                        <span className="text-slate-600">
                          {selectedTab.benefit}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-[15px]">
                      <div className="p-2 rounded-lg bg-emerald-50">
                        <ChevronRight
                          className="w-5 h-5 text-emerald-500"
                          strokeWidth={2.5}
                        />
                      </div>
                      <p>
                        <span className="font-medium text-slate-900">
                          Technology:
                        </span>{" "}
                        <span className="text-slate-600">
                          {selectedTab.technology}
                        </span>
                      </p>
                    </div>
                  </div>
                  <Link
                    to={selectedTab.path}
                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-[15px] font-medium tracking-wide text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
