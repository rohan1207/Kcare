import { motion } from "framer-motion";

// Decorative background elements
const Blur = () => (
  <>
    <div className="absolute top-0 right-0 -z-10 h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-gradient-to-br from-turquoise-50 to-sky-50/70 blur-3xl opacity-80" />
    <div className="absolute bottom-0 left-0 -z-10 h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-turquoise-50/70 blur-3xl opacity-60" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] sm:h-[800px] w-[600px] sm:w-[800px] rounded-full bg-gradient-to-r from-turquoise-50/40 to-transparent blur-3xl opacity-60" />
  </>
);

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.4,
    },
  },
};

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50/30 overflow-hidden">
      <Blur />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Top header row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-12 items-center mb-8 sm:mb-10 md:mb-12"
        >
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full bg-turquoise-50 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-medium text-turquoise-700 mb-4 sm:mb-6 md:mb-8 shadow-sm shadow-turquoise-100/50 ring-1 ring-turquoise-100">
              <span className="h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-turquoise-500"></span>
              Advanced Surgical Care
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-light leading-[1.05] tracking-tight text-stone-900">
              Advanced Surgery
              <br />
              With <span className="font-medium">Precision</span>
              <br />
              <span className="font-serif italic">& Care</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-stone-600/90 leading-relaxed font-light">
            We combine cutting-edge robotic and laparoscopic technology with expert surgical care. Our team of specialized surgeons and qualified medical professionals are committed to delivering minimally invasive procedures with maximum precision, ensuring faster recovery and better outcomes for every patient.
            </p>
          </div>
        </motion.div>

        {/* Middle row: left card + right large image */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 lg:grid-cols-12 mb-4 sm:mb-5 md:mb-6">
          {/* Left card */}
          <motion.div
            className="lg:col-span-5 flex"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem] bg-gradient-to-br from-turquoise-600 via-turquoise-700 to-turquoise-900 text-white p-6 sm:p-8 md:p-10 shadow-xl shadow-turquoise-900/20 w-full flex flex-col justify-center relative overflow-hidden backdrop-blur-sm">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-turquoise-400/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-turquoise-500/10 rounded-full blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-turquoise-600/10 to-transparent mix-blend-overlay" />

              <h3 className="text-xl sm:text-2xl md:text-3xl font-light leading-tight relative z-10">
                Robotic & Laparoscopic
                <br />
                <span className="font-medium">Excellence</span>
              </h3>
              <p className="mt-4 sm:mt-5 md:mt-6 text-white/90 leading-relaxed text-sm sm:text-base md:text-lg font-light relative z-10">
                State-of-the-art robotic systems and advanced laparoscopic
                techniques enable us to perform complex procedures with minimal
                incisions, reducing pain and accelerating your recovery time.
              </p>
              
            </div>
          </motion.div>

          {/* Right large image */}
          <motion.div
            className="lg:col-span-7 flex"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem] overflow-hidden shadow-xl shadow-turquoise-900/20 w-full relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-turquoise-500/20 to-transparent mix-blend-overlay z-10" />
              <video
                src="/AS_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-h-[420px] object-cover min-h-[280px] sm:min-h-[350px] md:min-h-[420px]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20" />
            </div>
          </motion.div>
        </div>

        {/* Bottom row: three equal cards */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-3">
          {/* Expert Surgeons */}
          <motion.div
            className="flex"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem] bg-white/90 backdrop-blur-sm p-6 sm:p-8 md:p-10 shadow-xl ring-1 ring-turquoise-100/80 w-full flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-turquoise-50 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 ring-1 ring-turquoise-100">
                  <svg
                    className="w-6 sm:w-7 h-6 sm:h-7 text-turquoise-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-light text-stone-900 leading-tight">
                  Expert
                  <br />
                  <span className="font-medium">Surgeons</span>
                </h4>
                <p className="mt-3 sm:mt-4 md:mt-5 text-stone-600/90 leading-relaxed font-light text-sm sm:text-base md:text-lg">
                Our team consist of highly qualified medical professionals and surgeons with extensive experience in advanced Robotic, Laparoscopic and Laser Surgeries, ensuring world-class surgical care for every patient
                </p>
              </div>
            </div>
          </motion.div>

          {/* Patient Care Image */}
          <motion.div
            className="flex"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem] overflow-hidden shadow-xl shadow-turquoise-900/20 w-full relative bg-gradient-to-br from-turquoise-600 via-turquoise-700 to-turquoise-900 p-6 sm:p-8 md:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-turquoise-600/10 to-transparent mix-blend-overlay" />
              <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-turquoise-400/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-turquoise-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-turquoise-400/20 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 ring-1 ring-turquoise-400/30">
                  <svg
                    className="w-6 sm:w-7 h-6 sm:h-7 text-turquoise-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-light text-white leading-tight">
                  Modern
                  <br />
                  <span className="font-medium">Facilities</span>
                </h4>
                <p className="mt-3 sm:mt-4 md:mt-5 text-white/90 leading-relaxed font-light text-sm sm:text-base md:text-lg">
                  State-of-the-art operating rooms equipped with the latest
                  surgical technology, ensuring the highest standards of care
                  and safety for our patients.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Comfort & Safety */}
          <motion.div
            className="flex"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem] p-6 sm:p-8 md:p-10 bg-gradient-to-br from-turquoise-50 to-blue-50/50 text-stone-900 shadow-xl w-full flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
              <div>
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-turquoise-50 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 ring-1 ring-turquoise-100">
                  <svg
                    className="w-6 sm:w-7 h-6 sm:h-7 text-turquoise-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-light leading-tight">
                  Comfort &
                  <br />
                  <span className="font-medium">Safety First</span>
                </h4>
                <p className="mt-3 sm:mt-4 md:mt-5 text-stone-600/90 leading-relaxed font-light text-sm sm:text-base md:text-lg">
                  From consultation to recovery, we prioritize your comfort and
                  safety with personalized care plans, modern facilities, and
                  comprehensive post-operative support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
