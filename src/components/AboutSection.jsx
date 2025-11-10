import { ArrowRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Decorative elements
const Blur = () => (
  <>
    <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-turquoise-50 to-sky-50/70 blur-3xl opacity-80" />
    <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-turquoise-50/70 blur-3xl opacity-60" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-turquoise-50/40 to-transparent blur-3xl opacity-60" />
  </>
);

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 bg-gradient-to-br from-turquoise-600 via-turquoise-700 to-turquoise-900 overflow-hidden">
      <Blur />
      <div className="absolute inset-0 bg-gradient-to-br from-turquoise-600/10 to-transparent mix-blend-overlay" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 50,
            damping: 15,
          }}
          className="rounded-[2.5rem] bg-gradient-to-br from-white to-slate-50/80 ring-1 ring-turquoise-100/80 shadow-xl p-12 lg:p-14 backdrop-blur-sm"
        >
          <div className="grid gap-8 lg:gap-12 md:grid-cols-2 items-center">
            {/* Left copy */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2.5 rounded-full bg-turquoise-50 px-5 py-2.5 text-sm font-medium text-turquoise-700 mb-8 shadow-sm shadow-turquoise-100/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-turquoise-500"></span>
                  About Our Clinic
                </span>
              </motion.div>

              {/* Avatars */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center mb-8"
              >
                <div className="flex -space-x-4">
                  <img
                    src="/pramod_kadam2.jpg"
                    alt="Dr. Pramod Kadam"
                    className="h-12 w-12 rounded-full ring-4 ring-white object-cover"
                  />
                  <img
                    src="/sharma.jpg"
                    alt="Dr. Shital Satish Sharma"
                    className="h-12 w-12 rounded-full ring-4 ring-white object-cover"
                  />
                </div>
                <div className="ml-4 pl-2">
                  <div className="flex items-center">
                    <Plus className="w-4 h-4 text-turquoise-500 mr-2" />
                    <span className="text-lg text-slate-600 font-light">
                      Expert Team
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
               

                <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed font-light">
                  We are a team of dedicated specialists committed to providing
                  personalized, top-quality surgical care. By blending
                  state-of-the-art robotic and laparoscopic technology with a
                  human touch, we ensure better outcomes and a seamless patient
                  experience.
                </p>

                {/* CTA Button */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/about"
                    className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-turquoise-400 to-turquoise-600 hover:from-turquoise-500 hover:to-turquoise-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-turquoise-500/30 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                type: "spring",
                stiffness: 50,
              }}
            >
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-turquoise-100 to-turquoise-50 rounded-full blur-2xl opacity-80" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-sky-100 to-sky-50 rounded-full blur-2xl opacity-80" />

                {/* Main image with overlay */}
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-turquoise-900/10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-turquoise-500/10 to-transparent mix-blend-overlay" />
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop"
                    alt="Surgical team in operating room"
                    className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                </div>

                {/* Stats overlay */}
                <div className="absolute -right-5 -bottom-5 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl ring-1 ring-turquoise-100/80">
                  <div className="flex gap-4">
                    <div>
                      <div className="text-3xl font-medium text-turquoise-600">
                        10+
                      </div>
                      <div className="text-sm text-slate-600 mt-1">
                        Years of Excellence
                      </div>
                    </div>
                    <div className="w-px bg-turquoise-100" />
                    <div>
                      <div className="text-3xl font-medium text-turquoise-600">
                        2K+
                      </div>
                      <div className="text-sm text-slate-600 mt-1">
                        Successful Surgeries
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
