import React from 'react';
import { motion } from 'framer-motion';

const timelineColors = {
  line: ['#3b82f6', '#f59e0b', '#ef4444', '#22d3ee', '#8b5cf6', '#22c55e'],
  circle: ['border-blue-500', 'border-yellow-500', 'border-red-500', 'border-cyan-400', 'border-purple-500', 'border-green-500'],
  text: ['text-blue-600', 'text-yellow-600', 'text-red-600', 'text-cyan-500', 'text-purple-600', 'text-green-600'],
};

const containerVariants = {
  onscreen: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const TimelineItem = ({ item, index }) => {
  const isUp = index % 2 !== 0;
  const colorIndex = index % timelineColors.text.length;

  return (
    <motion.div
      className="relative flex-1 flex flex-col items-center"
      variants={itemVariants}
    >
      {/* Dotted Line connecting to text */}
      <div className={`absolute w-px h-10 bg-gray-300 ${isUp ? 'bottom-full mb-6' : 'top-full mt-6'}`} />
      
      {/* Text Box */}
      <div className={`absolute w-56 text-center ${isUp ? 'bottom-full mb-16' : 'top-full mt-16'}`}>
        <h4 className={`font-bold text-lg ${timelineColors.text[colorIndex]}`}>{item.title}</h4>
        <p className="text-sm text-gray-600 leading-tight">{item.description}</p>
      </div>

      {/* Main Circle */}
      <div className={`relative z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 ${timelineColors.circle[colorIndex]}`}>
        <span className="text-lg font-bold text-gray-700">{String(index + 1).padStart(2, '0')}</span>
      </div>
    </motion.div>
  );
};

const ProcedureTimeline = ({ steps }) => {
  if (!steps || steps.length === 0) {
    return null;
  }

  const gradient = `linear-gradient(to right, ${timelineColors.line.slice(0, steps.length - 1).join(', ')})`;

  return (
    <div className="py-16 md:py-24 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-28 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-light text-stone-900">
            Your Journey to <span className="font-medium">Recovery</span>
          </h2>
          <p className="mt-4 text-lg text-stone-600/90 max-w-3xl mx-auto font-light">
            A step-by-step overview of your treatment process, from initial consultation to full recovery.
          </p>
        </div>

        {/* Horizontal Timeline for Desktop */}
        <motion.div 
          className="hidden md:flex relative items-center overflow-visible pt-28 md:pt-40 pb-20 min-h-[260px] md:min-h-[320px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          {/* Base gray line */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-1.5 bg-gray-200" />
          
          {/* Animated Color Line */}
          <motion.div 
            className="absolute top-1/2 -translate-y-1/2 left-0 h-1.5"
            style={{ background: gradient, width: `calc(100% - (100% / ${steps.length}))` }}
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1, transition: { duration: 1.5, ease: "circOut" } }}
            viewport={{ once: true }}
          />
          
          {steps.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
            />
          ))}
        </motion.div>

        {/* Vertical Timeline for Mobile */}
        <div className="md:hidden relative wrap overflow-hidden h-full">
          <div 
            className="absolute border-opacity-20 border-stone-300 h-full border-2"
            style={{ left: '23px' }}
          ></div>
          {steps.map((item, index) => (
            <div key={index} className="mb-8 flex items-center w-full">
              <div className={`z-20 flex items-center order-1 bg-white shadow-xl w-12 h-12 rounded-full border-2 ${timelineColors.circle[index % timelineColors.circle.length]}`}>
                 <span className="mx-auto font-bold text-lg text-gray-700">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="order-1 bg-white rounded-lg shadow-md w-full ml-6 px-4 py-3">
                <h4 className={`font-medium text-md ${timelineColors.text[index % timelineColors.text.length]}`}>{item.title}</h4>
                <p className="mt-1 text-sm text-stone-600/90 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProcedureTimeline;
