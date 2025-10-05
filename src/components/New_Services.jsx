import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  MinusCircle as FissureIcon
} from 'lucide-react';

const servicesData = [
  {
    category: "Proctology",
    icon: PilesIcon,
    title: "Piles Treatment",
    path: "/services/piles-treatment",
    description: "Comprehensive care for hemorrhoids, focusing on minimally invasive techniques for rapid relief and recovery.",
    benefit: "Pain-free procedures with same-day discharge.",
    technology: "Advanced laser and stapler techniques.",
    image: "/piles.jpg",
  },
  {
    category: "Proctology",
    icon: FissureIcon,
    title: "Laser Fissure Treatment",
    path: "/services/laser-fissure-treatment",
    description: "A modern, sphincter-saving laser procedure to heal anal fissures without the risks of traditional surgery.",
    benefit: "Quick healing with preservation of muscle function.",
    technology: "Precision laser ablation.",
    image: "/fissure.jpg",
  },
  {
    category: "Proctology",
    icon: FistulaIcon,
    title: "Fistula Treatment",
    path: "/services/fistula-treatment",
    description: "Advanced treatments for anal fistulas, including LIFT and VAAFT procedures, to ensure high success rates.",
    benefit: "High success rate with minimal recurrence.",
    technology: "VAAFT, LIFT, and laser procedures.",
    image: "/fistula.jpg",
  },
  {
    category: "Laparoscopic Surgery",
    icon: HerniaIcon,
    title: "Robotic Hernia Repair",
    path: "/services/robotic-hernia-repair",
    description: "Utilizing the da Vinci system for intricate hernia repairs, offering unmatched precision and faster recovery.",
    benefit: "Reduced pain and quicker return to normal activities.",
    technology: "da Vinci Xi Robotic System.",
    image: "/hernia.jpg",
  },
  {
    category: "Laparoscopic Surgery",
    icon: GallBladderIcon,
    title: "Gall Bladder Removal",
    path: "/services/gall-bladder-removal",
    description: "Minimally invasive cholecystectomy for gallstone disease, ensuring a safe and swift recovery process.",
    benefit: "Minimal scarring and short hospital stay.",
    technology: "High-definition laparoscopic equipment.",
    image: "/gall_bladder.jpg",
  },
  {
    category: "Laparoscopic Surgery",
    icon: AppendixIcon,
    title: "Laparoscopic Appendectomy",
    path: "/services/laparoscopic-appendectomy",
    description: "Emergency and elective laparoscopic removal of the appendix to treat and prevent appendicitis.",
    benefit: "Low risk of infection and fast recovery.",
    technology: "Advanced laparoscopic tools.",
    image: "/appendicitis.jpg",
  },
  {
    category: "General Surgery",
    icon: ThyroidIcon,
    title: "Advanced Thyroid Surgery",
    path: "/services/advanced-thyroid-surgery",
    description: "Specialized surgical care for thyroid disorders, including cancer and goiter, with a focus on nerve preservation.",
    benefit: "Excellent cosmetic outcomes and voice preservation.",
    technology: "Intraoperative nerve monitoring.",
    image: "/thyroid.jpg",
  },
  {
    category: "General Surgery",
    icon: BreastIcon,
    title: "Breast Surgery",
    path: "/services/breast-surgery",
    description: "A comprehensive approach to breast conditions, from benign lumps to breast cancer, including conservation surgery.",
    benefit: "Focus on oncological safety and aesthetic results.",
    technology: "Sentinel lymph node biopsy.",
    image: "/breast_cancer.jpg",
  },
  {
    category: "General Surgery",
    icon: DiabeticFootIcon,
    title: "Diabetic Foot Care",
    path: "/services/diabetic-foot-care",
    description: "Multidisciplinary care to manage and treat diabetic foot ulcers and prevent amputations.",
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
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
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
    <section ref={sectionRef} className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-sky-900">
            Advanced Surgical Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left: Service List */}
          <div 
            ref={tabsRef}
            className="lg:col-span-1 h-full lg:max-h-[450px] overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-sky-200 scrollbar-track-sky-50"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {servicesData.map((item, index) => {
              const { icon: Icon } = item;
              const isActive = selectedIndex === index;
              return (
                <button
                  key={item.title}
                  onClick={() => handleInteraction(index)}
                  className={`w-full flex items-center text-left p-3 rounded-lg transition-all duration-300 transform ${ 
                    isActive 
                      ? 'bg-sky-800 text-white shadow-md scale-105' 
                      : 'bg-sky-50/70 hover:bg-sky-100 hover:shadow-sm'
                  }`}
                >
                  <Icon className={`w-6 h-6 mr-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-teal-600'}`} />
                  <span className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-sky-900'}`}>{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Content Display */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-sky-100/80">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 items-center"
              >
                <div className="relative h-64 md:h-full min-h-[280px] md:min-h-[450px]">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={selectedTab.image}
                    alt={selectedTab.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-sky-900">{selectedTab.title}</h3>
                  <p className="mt-4 text-base text-sky-900/80 leading-relaxed min-h-[6rem]">{selectedTab.description}</p>
                  <div className="mt-6 space-y-3 text-sm">
                      <p><span className="font-semibold text-teal-700">Key Benefit:</span> <span className="text-sky-800/90">{selectedTab.benefit}</span></p>
                      <p><span className="font-semibold text-teal-700">Technology:</span> <span className="text-sky-800/90">{selectedTab.technology}</span></p>
                  </div>
                  <Link to={selectedTab.path} className="mt-8 inline-block rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-teal-700 transition-colors">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
