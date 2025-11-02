import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { useAppointmentModal } from "../contexts/AppointmentModalContext";
import { Link } from "react-router-dom";

// Background slides & feature labels that will appear at the head of the extending line
const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    feature: "PRECISION-DRIVEN ROBOTIC SURGERY",
    color: "#7dd3c0",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    feature: "MINIMALLY INVASIVE • MAXIMUM CARE",
    color: "#ffd97d",
  },
  {
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop",
    feature: "FASTER RECOVERY THROUGH MODERN LAPAROSCOPY",
    color: "#c5b3ff",
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
const TARGET_PROGRESS = [0.78, 0.7, 0.65, 0.65];

// Per-wave card content
const WAVE_DATA = [
  { image: slides[0].image, feature: slides[0].feature, color: COLORS[0] },
  { image: slides[1].image, feature: slides[1].feature, color: COLORS[1] },
  { image: slides[2].image, feature: slides[2].feature, color: COLORS[2] },
  {
    image:
      "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=2080&auto=format&fit=crop",
    feature: "ADVANCED CARE • HUMAN TOUCH",
    color: COLORS[3],
  },
];

// We'll progressively extend one line per slide; once a line finishes extending we reveal the pill at its head.
const Hero = () => {
  const { openModal } = useAppointmentModal();
  const [index, setIndex] = useState(0);
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

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // 6s cycle
    return () => clearInterval(interval);
  }, []);

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
    const maxP = maxProgressWithinRightBound(i, 28);
    const minP = Math.max(0.56, INITIAL_PROGRESS + 0.08);
    const desired = TARGET_PROGRESS[i % TARGET_PROGRESS.length] ?? 0.8;
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

  return (
    <div
      ref={containerRef}
      className="relative h-screen bg-gray-900 text-white overflow-hidden select-none"
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
            backgroundImage: `url(${slides[index].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-[#041f1c]/30 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-24">
        <motion.h1
          key={index + "title"}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-[64px] font-light leading-[1.05] tracking-tight max-w-3xl"
        >
          <span className="font-medium">Redefining</span> surgery with
          technology and <span className="italic font-serif">trust</span>
        </motion.h1>
        <motion.p
          key={index + "sub"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-2xl text-white/90 max-w-xl"
        >
          Delivering precision-driven care with compassion and excellence.
        </motion.p>
        <div className="mt-10 flex gap-4">
          <button 
            onClick={openModal}
            className="cursor-pointer bg-turquoise-400 hover:bg-turquoise-300 text-stone-900 font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Book appointment
          </button>
          <Link to="/contact">
            <button className="cursor-pointer border bg-turquoise-400/30 border-turquoise-400/90 text-turquoise-300 hover:bg-white hover:text-stone-900 font-semibold px-8 py-3 rounded-full transition-colors backdrop-blur-sm">
              Enquiry
            </button>
          </Link>
        </div>
      </div>

      {/* Progressive Wavy Lines Layer (interactive) */}
      <div
        ref={wavesRef}
        className="pointer-events-auto absolute bottom-0 left-0 right-0 h-56 md:h-64 z-10"
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
        {/* Image-Text Card tied to active wave head */}
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
                <div className="flex flex-col w-56">
                  <div
                    className="w-full h-[300px] overflow-hidden ring-1 ring-white/20"
                    style={{ backgroundColor: "#000" }}
                  >
                    <img
                      src={(WAVE_DATA[activeWave] || WAVE_DATA[0]).image}
                      alt="feature"
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                  <div className="p-3 pb-4">
                    <div className="text-xs md:text-sm tracking-wide">
                      <span className="font-medium leading-relaxed">
                        {(WAVE_DATA[activeWave] || WAVE_DATA[0]).feature}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="h-1"
                  style={{
                    background: (WAVE_DATA[activeWave] || WAVE_DATA[0]).color,
                  }}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
