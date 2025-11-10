import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollStatsOverlay = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const statsContentRef = useRef(null);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const stats = statsRef.current;
    const statsContent = statsContentRef.current;

    // Move image with stats overlay (parallax effect)
    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(image, {
          y: progress * -100,
          duration: 0.3,
          ease: 'none'
        });
      }
    });

    // Animate stats overlay
    gsap.fromTo(
      stats,
      { y: '100%' },
      {
        y: '0%',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'center top',
          scrub: 1,
        },
      }
    );

    // Trigger number animation when stats are in view
    ScrollTrigger.create({
      trigger: statsContent,
      start: 'top 80%',
      onEnter: () => {
        if (!hasAnimated) {
          animateNumbers();
          setHasAnimated(true);
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [hasAnimated]);

  const animateNumbers = () => {
    const finalValues = [99, 95, 90, 95];
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedValues(finalValues.map(val => Math.floor(val * progress)));
      
      if (currentStep >= steps) {
        setAnimatedValues(finalValues);
        clearInterval(interval);
      }
    }, stepDuration);
  };

  const statItems = [
    {
      percentage: '99%',
      value: 99,
      description: 'Successful outcomes in robotic and laparoscopic procedures',
      gradient: ['#10b981', '#14b8a6'], // emerald to teal
    },
    {
      percentage: '95%',
      value: 95,
      description: 'Faster recovery compared to traditional open surgery',
      gradient: ['#60a5fa', '#3b82f6'], // blue
    },
    {
      percentage: '90%',
      value: 90,
      description: 'Reduction in post-surgery pain and complications',
      gradient: ['#059669', '#0f766e'], // emerald to teal dark
    },
    {
      percentage: '95%',
      value: 95,
      description: 'Shorter hospital stays due to minimally invasive techniques',
      gradient: ['#06b6d4', '#2563eb'], // cyan to blue
    },
  ];
  

  return (
    <div className="bg-white">
      {/* Main scroll component */}
      <div ref={containerRef} className="relative h-[110vh]">
        {/* Fixed background image */}
        <div ref={imageRef} className="absolute inset-0 w-full h-screen">
          <img
            src="/stats2.png"
            alt="Family moment"
            className="w-full h-full object-cover"
          />
          
        </div>

        {/* Stats overlay that scrolls over image */}
        <div
          ref={statsRef}
          className="absolute inset-0 w-full h-screen flex items-center justify-center mb-20"
        >
          <div
            ref={statsContentRef}
            className="bg-white rounded-t-[3rem] w-full min-h-screen flex flex-col items-center justify-center py-16 px-8"
          >
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl">
              <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-4">
                Transforming Surgery with
              </h2>
              <h2 className="text-5xl md:text-6xl italic font-light text-gray-700 mb-8">
                Precision & innovation
              </h2>
              <p className="text-md text-gray-600 leading-relaxed">
                Our advanced robotic and laparoscopic systems enable surgeons to perform
                complex procedures with minimal incisions, ensuring faster recovery,
                
                reduced pain, and exceptional surgical accuracy.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
              {statItems.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Circular progress indicator */}
                  <div className="relative w-48 h-48 mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 192 192">
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="#e5e7eb"
                        strokeWidth="10"
                        fill="none"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={`${(animatedValues[index] / 100) * 552} 552`}
                        strokeLinecap="round"
                        className="transition-all duration-75 ease-out"
                        style={{
                          filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))'
                        }}
                      />
                      <defs>
                        <linearGradient
                          id={`gradient-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor={stat.gradient[0]}
                          />
                          <stop
                            offset="100%"
                            stopColor={stat.gradient[1]}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-bold text-gray-800 tabular-nums">
                        {animatedValues[index]}%
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-center text-sm text-gray-600 leading-relaxed max-w-[180px] min-h-[44px]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default ScrollStatsOverlay;