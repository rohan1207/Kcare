import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { useAppointmentModal } from "../contexts/AppointmentModalContext";
import { useEnquiryModal } from "../contexts/EnquiryModalContext";
import { Link } from "react-router-dom";
import api from "../utils/api";

// Default/fallback slides in case backend fails
const defaultSlides = [
  {
    image: "/p1.jpg",
    feature: "PRECISION-DRIVEN ROBOTIC SURGERY",
    color: "#7dd3c0",
  },
  {
    image: "/p2.jpg",
    feature: "MINIMALLY INVASIVE • MAXIMUM CARE",
    color: "#ffd97d",
  },
  {
    image: "/p3.jpg",
    feature: "FASTER RECOVERY THROUGH MODERN LAPAROSCOPY",
    color: "#c5b3ff",
  },
  {
    image: "/p4.JPG",
    feature: "ADVANCED CARE • HUMAN TOUCH",
    color: "#7ce4a9",
  },
  {
    image: "/p5.jpg",
    feature: "ADVANCED CARE • HUMAN TOUCH",
    color: "#7ce4a9",
  },
];

// SVG path definitions (wavy lines)
// We reveal each path to a given progress via stroke-dashoffset
const PATHS = [
  // Refined to be smoother and closer in feel to paths 2 and 3
  "M0 150 C 300 145, 300 55, 460 120 C 640 170, 760 55, 900 90 C 1040 140, 1200 70, 1000 110",
  "M0 90 C 140 140, 300 40, 460 110 C 640 180, 760 40, 900 90 C 1040 140, 1180 60, 1190 110",
  "M0 120 C 200 40, 360 180, 540 80 C 720 0, 880 160, 950 100 C 1100 40, 1260 180, 1200 120",
  // Refined bottom wave: still lower, but with similar oscillation pattern
  "M0 135 C 180 80, 340 190, 520 105 C 700 50, 860 190, 1020 125 C 1140 90, 1300 190, 1180 140",
];

const COLORS = ["#45d6c3", "#ffc857", "#b59bff", "#7ce4a9"];
const INITIAL_PROGRESS = 0.29; // just left of center
const VIEWBOX_WIDTH = 1090; // must match the SVG viewBox width
const VIEWBOX_HEIGHT = 200; // must match the SVG viewBox height
// Desired fixed end progress for each wave (will be clamped to visible bounds)
// Mobile gets shorter extensions to prevent overflow
const TARGET_PROGRESS = [0.78, 0.7, 0.65, 0.65];
const TARGET_PROGRESS_MOBILE = [0.55, 0.5, 0.48, 0.48];

// Per-wave card content - will be updated from backend data
let WAVE_DATA = [];

// We'll progressively extend one line per slide; once a line finishes extending we reveal the pill at its head.
const Hero = () => {
  const { openModal } = useAppointmentModal();
  const { openModal: openEnquiryModal } = useEnquiryModal();
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState(defaultSlides);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const pathRefs = useRef([]); // path elements
  const headRefs = useRef([]); // interactive heads (g)
  const animRefs = useRef([]); // per-wave tweens
  const revertTimerRef = useRef(null);
  const cardRef = useRef(null);
  const wavesRef = useRef(null);
  const svgRef = useRef(null);

  const [activeWave, setActiveWave] = useState(null);
  const [cardPos, setCardPos] = useState({ x: 0, y: 0 });
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isHeadHovered, setIsHeadHovered] = useState(false);
  const switchingRef = useRef(false); // prevents multiple simultaneous activations
  const [flipLeft, setFlipLeft] = useState(false); // flip card horizontally if overflowing to the right
  const [waveData, setWaveData] = useState([]);

  // Fetch hero sections from backend
  useEffect(() => {
    const fetchHeroSections = async () => {
      try {
        const response = await api.get('/api/hero-section/active');
        if (response.data && response.data.length > 0) {
          // Map backend data to slides format
          const colors = ["#7dd3c0", "#ffd97d", "#c5b3ff", "#7ce4a9", "#7ce4a9"];
          const mappedSlides = response.data.map((hero, idx) => ({
            image: hero.image,
            feature: hero.description || hero.subtitle || hero.title,
            color: colors[idx % colors.length],
            title: hero.title,
            subtitle: hero.subtitle,
            ctaText: hero.ctaText,
            ctaLink: hero.ctaLink
          }));
          setSlides(mappedSlides);
          
          // Update waveData for interactive cards
          const newWaveData = mappedSlides.slice(0, 4).map((slide, idx) => ({
            image: slide.image,
            feature: slide.feature,
            color: colors[idx % colors.length]
          }));
          setWaveData(newWaveData);
        } else {
          // Use default slides if no data
          setSlides(defaultSlides);
          const newWaveData = defaultSlides.slice(0, 4).map((slide, idx) => ({
            image: slide.image,
            feature: slide.feature,
            color: COLORS[idx % COLORS.length]
          }));
          setWaveData(newWaveData);
        }
      } catch (error) {
        console.error('Error fetching hero sections:', error);
        // Use default slides if fetch fails
        setSlides(defaultSlides);
        const newWaveData = defaultSlides.slice(0, 4).map((slide, idx) => ({
          image: slide.image,
          feature: slide.feature,
          color: COLORS[idx % COLORS.length]
        }));
        setWaveData(newWaveData);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroSections();
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // 6s cycle
    return () => clearInterval(interval);
  }, [slides.length]);

  // Initialize lines at a fixed progress and place heads
  useEffect(() => {
    if (!containerRef.current) return;
    PATHS.forEach((_, i) => {
      const pathEl = pathRefs.current[i];
      const headEl = headRefs.current[i];
      if (!pathEl || !headEl) return;
      const length = pathEl.getTotalLength();
      gsap.set(pathEl, {
        strokeDasharray: length,
        strokeDashoffset: length * (1 - INITIAL_PROGRESS),
        opacity: 0.6,
      });
      const pt = pathEl.getPointAtLength(length * INITIAL_PROGRESS);
      gsap.set(headEl, { x: pt.x, y: pt.y, opacity: 1 });
    });

    return () => {
      animRefs.current.forEach((t) => t && t.kill && t.kill());
      if (revertTimerRef.current) clearTimeout(revertTimerRef.current);
    };
  }, []);

  // Helpers
  const moveWaveTo = (
    i,
    targetProgress,
    { duration = 1.6, ease = "sine.inOut", onComplete } = {}
  ) => {
    const pathEl = pathRefs.current[i];
    const headEl = headRefs.current[i];
    if (!pathEl || !headEl) return;
    const length = pathEl.getTotalLength();
    if (animRefs.current[i]) animRefs.current[i].kill();
    animRefs.current[i] = gsap.to(pathEl, {
      strokeDashoffset: length * (1 - targetProgress),
      duration,
      ease,
      onUpdate: () => {
        const progress =
          1 - gsap.getProperty(pathEl, "strokeDashoffset") / length;
        const pt = pathEl.getPointAtLength(length * progress);
        gsap.set(headEl, { x: pt.x, y: pt.y });
      },
      onComplete,
    });
  };

  // Find the max progress that keeps the head within right bound of the viewBox
  const maxProgressWithinRightBound = (i, margin = 24) => {
    const pathEl = pathRefs.current[i];
    if (!pathEl) return 0.92;
    const length = pathEl.getTotalLength();
    const boundX = VIEWBOX_WIDTH - margin;
    // binary search along the path length
    let lo = 0,
      hi = length;
    for (let k = 0; k < 18; k++) {
      const mid = (lo + hi) / 2;
      const pt = pathEl.getPointAtLength(mid);
      if (pt.x <= boundX) lo = mid;
      else hi = mid;
    }
    const progress = lo / length;
    return Math.max(progress, INITIAL_PROGRESS);
  };

  // Collapse any other waves to their initial state quickly
  const collapseOthers = (keepIndex) => {
    PATHS.forEach((_, j) => {
      if (j === keepIndex) return;
      const p = pathRefs.current[j];
      const h = headRefs.current[j];
      if (!p || !h) return;
      const length = p.getTotalLength();
      if (animRefs.current[j]) animRefs.current[j].kill();
      gsap.to(p, {
        strokeDashoffset: length * (1 - INITIAL_PROGRESS),
        duration: 0.3,
        ease: "power1.out",
        onUpdate: () => {
          const prog = 1 - gsap.getProperty(p, "strokeDashoffset") / length;
          const pt = p.getPointAtLength(length * prog);
          gsap.set(h, { x: pt.x, y: pt.y });
        },
      });
    });
  };

  const showCardAt = (i) => {
    if (!wavesRef.current || !svgRef.current || !pathRefs.current[i]) return;
    const svgRect = svgRef.current.getBoundingClientRect();
    const ptCalc = () => {
      const pathEl = pathRefs.current[i];
      const length = pathEl.getTotalLength();
      const sd = parseFloat(gsap.getProperty(pathEl, "strokeDashoffset")) || 0;
      const prog = 1 - sd / length;
      const pt = pathEl.getPointAtLength(length * prog);
      const cx = (pt.x / VIEWBOX_WIDTH) * svgRect.width;
      const cy = (pt.y / VIEWBOX_HEIGHT) * svgRect.height;
      return { cx, cy };
    };
    const { cx, cy } = ptCalc();
    // Anchor base position at the head; wrapper will translate to keep bottom-left at the point
    setCardPos({ x: cx, y: cy });
    setActiveWave(i);
    setIsCardVisible(true);
  };

  // After card mounts, nudge position to keep it on-screen but still close to the head
  useEffect(() => {
    if (!isCardVisible || activeWave === null) return;
    const id = requestAnimationFrame(() => {
      if (
        !wavesRef.current ||
        !svgRef.current ||
        !pathRefs.current[activeWave] ||
        !cardRef.current
      )
        return;
      const layerRect = wavesRef.current.getBoundingClientRect();
      const svgRect = svgRef.current.getBoundingClientRect();
      const pathEl = pathRefs.current[activeWave];
      const length = pathEl.getTotalLength();
      const sd = parseFloat(gsap.getProperty(pathEl, "strokeDashoffset")) || 0;
      const prog = 1 - sd / length;
      const pt = pathEl.getPointAtLength(length * prog);
      const cx = (pt.x / VIEWBOX_WIDTH) * svgRect.width;
      const cy = (pt.y / VIEWBOX_HEIGHT) * svgRect.height;
      const cardRect = cardRef.current.getBoundingClientRect();
      const margin = 12;
      // Base anchor at head
      let x = cx;
      let y = cy;
      // Determine horizontal flip only if needed and feasible
      const wouldOverflowRight = x + cardRect.width + margin > layerRect.width;
      const canFlipLeft = x - cardRect.width >= margin;
      setFlipLeft(wouldOverflowRight && canFlipLeft);
      // Keep the anchor at the head point; wrapper will handle translate to keep bottom-left at the point
      setCardPos({ x, y });
    });
    return () => cancelAnimationFrame(id);
  }, [isCardVisible, activeWave]);

  const hideCard = () => {
    setIsCardVisible(false);
    setActiveWave(null);
  };

  const scheduleRevert = (i, delay = 3000) => {
    if (revertTimerRef.current) clearTimeout(revertTimerRef.current);
    revertTimerRef.current = setTimeout(() => {
      if (!isCardHovered && !isHeadHovered) {
        hideCard();
        moveWaveTo(i, INITIAL_PROGRESS, { duration: 1.2, ease: "power2.out" });
      }
    }, delay);
  };

  const handleActivate = (i) => {
    // Clamp a fixed target per wave to ensure it stays within the right bound
    const isMobile = window.innerWidth < 768;
    const maxP = maxProgressWithinRightBound(i, isMobile ? 40 : 28);
    const minP = Math.max(0.56, INITIAL_PROGRESS + 0.08);
    const progressArray = isMobile ? TARGET_PROGRESS_MOBILE : TARGET_PROGRESS;
    const desired = progressArray[i % progressArray.length] ?? (isMobile ? 0.5 : 0.8);
    const target = Math.max(minP, Math.min(maxP, desired));
    moveWaveTo(i, target, {
      duration: 1.8,
      ease: "power2.inOut",
      onComplete: () => {
        showCardAt(i);
        scheduleRevert(i, 3000);
        switchingRef.current = false;
      },
    });
  };

  // Hover/click handlers for the glowing heads
  const handleHeadEnter = (i) => {
    setIsHeadHovered(true);
    if (revertTimerRef.current) clearTimeout(revertTimerRef.current);
    if (switchingRef.current) return; // avoid re-entrancy while switching
    // If a different wave is active, revert it first then open the new one
    if (activeWave !== null && activeWave !== i) {
      switchingRef.current = true;
      const prev = activeWave;
      setActiveWave(i); // mark next as intended active immediately
      if (animRefs.current[prev]) animRefs.current[prev].kill();
      hideCard();
      moveWaveTo(prev, INITIAL_PROGRESS, {
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          collapseOthers(i);
          handleActivate(i);
        },
      });
    } else if (activeWave !== i) {
      setActiveWave(i);
      collapseOthers(i);
      handleActivate(i);
    } else {
      // keep current open while hovering
      if (revertTimerRef.current) clearTimeout(revertTimerRef.current);
    }
  };

  const handleHeadLeave = (i) => {
    setIsHeadHovered(false);
    if (activeWave === i) scheduleRevert(i, 1500);
  };

  if (loading || slides.length === 0) {
    return (
      <div className="relative h-screen min-h-[600px] bg-gray-900 text-white overflow-hidden flex items-center justify-center">
        <div className="text-white/70">Loading...</div>
      </div>
    );
  }

  const currentSlide = slides[index] || slides[0];

  return (
    <div
      ref={containerRef}
      className="relative h-screen min-h-[600px] bg-gray-900 text-white overflow-hidden select-none"
    >
      {/* Background image crossfade */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          style={{
            backgroundImage: `url(${currentSlide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-[#041f1c]/30 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-30 flex flex-col justify-center h-full px-4 sm:px-6 md:px-12 lg:px-24 pointer-events-none">
        {/* Clinic Name */}
        <motion.h2
          key={index + "clinic"}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-5"
        >
          <span className="bg-gradient-to-r from-turquoise-300 via-turquoise-400 to-turquoise-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(125,211,192,0.5)]">
            {currentSlide.title || "K Care Clinic"}
          </span>
        </motion.h2>
        {/* Tagline */}
        <motion.p
          key={index + "tagline"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-light tracking-wide mb-6 sm:mb-8 md:mb-10"
        >
          {currentSlide.subtitle || "Precision Care, Trusted Hands"}
        </motion.p>
        <motion.h1
          key={index + "title"}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] md:leading-[1.15] tracking-wide max-w-3xl text-white/95"
        >
          <span className="font-normal">Redefining</span> surgery with
          technology and <span className="italic font-serif font-light">trust</span>
        </motion.h1>
        <motion.p
          key={index + "sub"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-white/90 max-w-xl font-light tracking-wide"
        >
          Robotic and Laparoscopic Surgery
        </motion.p>
        {/* CTA Buttons Row with Call Now */}
        <div className="mt-4 sm:mt-4 lg:mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 pointer-events-auto max-w-4xl">
          <button 
            onClick={openModal}
            className="cursor-pointer bg-turquoise-400 hover:bg-turquoise-300 text-stone-900 font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-colors text-sm sm:text-base shadow-lg"
          >
            Book appointment
          </button>
          <button 
            onClick={openEnquiryModal}
            className="w-full sm:w-auto cursor-pointer border bg-turquoise-400/30 border-turquoise-400/90 text-turquoise-300 hover:bg-white hover:text-stone-900 font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-colors backdrop-blur-sm text-sm sm:text-base"
          >
            Enquiry
          </button>
          
          {/* Call Now - Prominent Contact Number */}
          <motion.a
            href="tel:+919373619006"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full sm:w-auto cursor-pointer flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white hover:bg-turquoise-50 text-stone-900 font-bold transition-all duration-300 shadow-lg hover:shadow-xl group active:scale-95"
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 text-turquoise-500 group-hover:text-turquoise-600 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="flex flex-col items-start">
             
              <span className="text-sm sm:text-base md:text-lg font-bold text-stone-900 tracking-wide leading-tight mt-0.5">9373619006</span>
            </div>
          </motion.a>
        </div>
      </div>

      {/* Progressive Wavy Lines Layer (interactive) */}
      <div
        ref={wavesRef}
        className="pointer-events-auto absolute bottom-[-20px] sm:bottom-[-24px] md:bottom-[-28px] lg:bottom-[-32px] left-0 right-0 h-40 sm:h-48 md:h-56 lg:h-64 z-20"
      >
        <svg
          ref={svgRef}
          className="w-full h-full"
          viewBox="0 0 1080 200"
          preserveAspectRatio="none"
        >
          {PATHS.map((d, i) => (
            <g key={i}>
              <path
                ref={(el) => (pathRefs.current[i] = el)}
                d={d}
                fill="none"
                strokeWidth={2}
                strokeLinecap="round"
                stroke={COLORS[i % COLORS.length]}
                filter="url(#wave-shadow)"
                style={{ opacity: 1, pointerEvents: "none" }}
              />
              {/* glowing, pulsing interactive head */}
              <g
                ref={(el) => (headRefs.current[i] = el)}
                onMouseEnter={() => handleHeadEnter(i)}
                onMouseLeave={() => handleHeadLeave(i)}
                onClick={() => handleHeadEnter(i)}
                onTouchStart={() => handleHeadEnter(i)}
                style={{ pointerEvents: "auto", cursor: "pointer" }}
              >
                <motion.circle
                  r={11}
                  fill={COLORS[i % COLORS.length]}
                  initial={{ scale: 0.9, opacity: 0.35 }}
                  animate={{ scale: [0.9, 1.6, 0.9], opacity: [0.45, 0, 0.45] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <circle
                  r={5}
                  fill={COLORS[i % COLORS.length]}
                  filter="url(#glow)"
                />
              </g>
            </g>
          ))}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter
              id="wave-shadow"
              x="-10%"
              y="-10%"
              width="120%"
              height="120%"
            >
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" result="shadow" />
              <feFlood flood-color="#000000" flood-opacity="0.3" />
              <feComposite operator="in" in2="shadow" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
        {/* Image-Text Card tied to active wave head
        <AnimatePresence>
          {isCardVisible && activeWave !== null && (
            <div
              className="absolute"
              style={{
                left: cardPos.x,
                bottom: cardPos.y,
                // Position wrapper exactly at the head; card inside will translate to bottom-left origin
                pointerEvents: "none",
              }}
            >
              <motion.div
                ref={cardRef}
                key="wave-card"
                className="pointer-events-auto rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-xl"
                style={{
                  transformOrigin: flipLeft ? "right bottom" : "left bottom",
                  transform: flipLeft
                    ? "translate(-100%, -100%)"
                    : "translate(0, -100%)",
                }}
                initial={{ opacity: 0, y: 0, scaleY: 0.92, scaleX: 0.98 }}
                animate={{ opacity: 1, y: 0, scaleY: 1, scaleX: 1 }}
                exit={{ opacity: 0, y: 0, scaleY: 0.96, scaleX: 0.99 }}
                transition={{ duration: 0.25 }}
                onMouseEnter={() => {
                  setIsCardHovered(true);
                  if (revertTimerRef.current)
                    clearTimeout(revertTimerRef.current);
                }}
                onMouseLeave={() => {
                  setIsCardHovered(false);
                  if (activeWave !== null) scheduleRevert(activeWave, 1500);
                }}
              >
                <div className="flex flex-col w-32 sm:w-40 md:w-48 lg:w-56">
                  <div
                    className="w-full h-[140px] sm:h-[180px] md:h-[220px] lg:h-[280px] overflow-hidden ring-1 ring-white/20"
                    style={{ backgroundColor: "#000" }}
                  >
                    <img
                      src={(waveData[activeWave] || waveData[0] || {}).image}
                      alt="feature"
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                  <div className="p-1.5 sm:p-2 md:p-3 pb-2 sm:pb-3 md:pb-4">
                    <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm tracking-wide">
                      <span className="font-medium leading-relaxed">
                        {(waveData[activeWave] || waveData[0] || {}).feature}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="h-1"
                  style={{
                    background: (waveData[activeWave] || waveData[0] || {}).color || COLORS[0],
                  }}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence> */}
      </div>
    </div>
  );
};

export default Hero;
