import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExpertiseCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Laparoscopic",
      subtitle: "Surgery",
      description:
        "Modern, minimally invasive surgery that ensures faster recovery, smaller scars, and less post-operative pain — the gold standard for advanced surgical care.",
      image:"/ls.webp",     
       color: "cyan"
    },
    {
      id: 2,
      title: "Robotic",
      subtitle: "Surgery",
      description:
        "Cutting-edge, precision-driven robotic procedures that enhance surgical accuracy, reduce complications, and accelerate healing — redefining surgical excellence.",
      image:"/rs.jpg",
      color: "purple"
    },
    {
      id: 3,
      title: "Laser",
      subtitle: "Surgery",
      description:
        "Painless, blood-free, and scar-free surgeries using advanced laser technology — delivering comfort, safety, and rapid recovery for every patient.",
      image:
        "/las.png",
      color: "yellow"
    },
    {
      id: 4,
      title: "Gastro-Intestinal",
      subtitle: "Surgery",
      description:
        "Comprehensive care for hernia, appendix, and gallbladder diseases with precision laparoscopic and open surgical techniques for the best outcomes.",
      image:
        "/gs.jpg",
      color: "emerald"
    },
    {
      id: 5,
      title: "Video",
      subtitle: "Proctoscopy",
      description:
        "A safe and precise diagnostic procedure to examine the rectum and anal canal for conditions like hemorrhoids, fissures, and other rectal disorders.",
      image:
        "/vp.jpeg",
      color: "teal"
    }
  ];

  const getCardWidth = (index) => {
    if (hoveredIndex === null) return "20%";
    if (hoveredIndex === index) return "52%";
    return "12%";
  };

  return (
    <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-turquoise-600 via-turquoise-700 to-turquoise-900 relative overflow-hidden px-4 sm:px-6 md:px-8" style={{ position: 'relative', zIndex: 1 }}>
      {/* Decorative background elements matching ModernDentistrySection */}
      <div className="absolute top-0 right-0 -z-10 h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-gradient-to-br from-turquoise-400/20 to-sky-400/10 blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-gradient-to-tr from-turquoise-500/15 to-cyan-400/10 blur-3xl opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-br from-turquoise-600/10 to-transparent mix-blend-overlay" />

      <div className="w-full max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="w-full mb-6 sm:mb-8 text-center">
          <h2 className="mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">
            Our <span className="font-medium">Expertise</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/90 max-w-3xl mx-auto px-4">
            Minimally invasive, precision-driven procedures for hernia, gallbladder, proctology, and diabetic foot care—aimed at faster recovery, less pain, and superior outcomes.
          </p>
        </div>

        {/* Mobile & Tablet: Stacked/Grid Layout */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-turquoise-900/20 h-[380px] sm:h-[420px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041f1c]/70 via-[#041f1c]/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-turquoise-600/10 to-transparent mix-blend-overlay" />
                </div>

                {/* Colored Indicator Dot */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-turquoise-400 shadow-lg ring-2 ring-turquoise-400/30" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-5 sm:p-6 md:p-8">
                  <div>
                    <h3 className="text-white text-2xl sm:text-3xl font-light leading-tight mb-0.5 sm:mb-1">
                      {card.title}
                    </h3>
                    {card.subtitle && (
                      <h3 className="text-white text-2xl sm:text-3xl font-medium leading-tight mb-3 sm:mb-4">
                        {card.subtitle}
                      </h3>
                    )}

                    {/* Description - Always visible on mobile/tablet */}
                    <p className="text-white/90 text-sm sm:text-base font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Horizontal Expanding Layout */}
        <div className="hidden lg:flex w-full h-[600px] gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative rounded-[2rem] overflow-hidden cursor-pointer shadow-xl shadow-turquoise-900/20"
              style={{
                width: getCardWidth(index)
              }}
              animate={{
                width: getCardWidth(index)
              }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1
                }}
                transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041f1c]/50 via-[#041f1c]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-turquoise-600/10 to-transparent mix-blend-overlay" />
              </motion.div>

              {/* Colored Indicator Dot */}
              <motion.div
                className="absolute top-6 left-6 w-3 h-3 rounded-full bg-turquoise-400 shadow-lg ring-2 ring-turquoise-400/30"
                animate={{
                  scale: hoveredIndex === index ? 1.3 : 1
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <motion.div
                  initial={false}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white text-3xl font-light leading-tight mb-1">
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <h3 className="text-white text-3xl font-medium leading-tight mb-6">
                      {card.subtitle}
                    </h3>
                  )}

                  {/* Description - Fade only, reserve space to avoid bounce */}
                  <div className="relative min-h-[140px]">
                    <AnimatePresence mode="wait">
                      {hoveredIndex === index && (
                        <motion.div
                          key="desc"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="absolute inset-0"
                        >
                          <p className="text-white/90 text-lg font-light leading-relaxed mb-6 max-w-md">
                            {card.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCards;
