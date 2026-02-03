import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Quote, X, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

const VIDEO_TESTIMONIALS = [
  {
    id: "video1",
    videoSrc: "/Testimonial1.mp4",
    name: "",
    procedure: "Laparoscopic Surgery",
  },
  {
    id: "video2",
    videoSrc: "/testimonial2.mp4",
    name: "Mary Johnson",
    procedure: "Robotic Surgery",
  },
];

const popUp = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  }),
};

function VideoThumbnail({ videoSrc, onClick }) {
  const videoRef = useRef(null);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0.1; // Set to first frame
      setThumbnailLoaded(true);
    }
  };

  return (
    <div 
      className="relative w-full pb-[56.25%] rounded-xl overflow-hidden bg-stone-100 cursor-pointer group"
      onClick={onClick}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        playsInline
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        style={{ display: thumbnailLoaded ? 'block' : 'none' }}
      />
      {!thumbnailLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-turquoise-100 to-sky-100 flex items-center justify-center">
          <div className="text-stone-400 text-sm">Loading video...</div>
        </div>
      )}
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors pointer-events-none">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play className="w-6 h-6 sm:w-8 sm:h-8 text-turquoise-600 ml-1" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}

function VideoModal({ video, onClose }) {
  const videoRef = useRef(null);

  if (!video) return null;

  const handleClose = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8"
        style={{ 
          top: 34, 
          left: 0, 
          right: 0, 
          bottom: 0,
          minHeight: '100vh',
          minWidth: '100vw'
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-black rounded-2xl sm:rounded-3xl shadow-2xl max-w-5xl w-full relative overflow-hidden"
          style={{ maxHeight: '90vh' }}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            type="button"
            className="absolute top-4 sm:top-6 right-4 sm:right-6 z-[100] bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-2.5 transition-colors cursor-pointer"
            aria-label="Close video"
          >
            <X className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
          </button>

          {/* Video header */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/70 to-transparent p-4 sm:p-6 pb-12 pointer-events-none">
            <div className="text-white">
              <div className="font-semibold text-lg sm:text-xl mb-1">
                {video.name}
              </div>
              <div className="text-sm text-white/80">
                {video.procedure}
              </div>
            </div>
          </div>

          {/* Video player */}
          <div className="relative w-full pb-[56.25%] bg-black">
            <video
              ref={videoRef}
              src={video.videoSrc}
              className="absolute top-0 left-0 w-full h-full"
              controls
              autoPlay
              playsInline
              onLoadedData={() => {
                if (videoRef.current) {
                  videoRef.current.play().catch(() => {
                    // Autoplay failed, user will need to click play
                  });
                }
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function TestimonialCard({ t, index, onReadMore }) {
  const base =
    "rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg ring-1 text-gray-700 leading-relaxed backdrop-blur-sm h-full flex flex-col";
  const tones = {
    lightBlue:
      "bg-white/90 backdrop-blur-sm ring-1 ring-turquoise-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
    white:
      "bg-gradient-to-br from-turquoise-50 to-blue-50/50 ring-1 ring-turquoise-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
    mint: "bg-white/90 backdrop-blur-sm ring-1 ring-stone-200/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
  };
  return (
    <motion.article
      variants={popUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className={`${base} ${tones[t.tone]}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <img
            src={t.avatar}
            alt={t.name}
            className="h-10 sm:h-12 w-10 sm:w-12 rounded-full object-cover ring-2 ring-white shadow-lg"
          />
          <div>
            <div className="font-semibold text-sm sm:text-base text-stone-900">{t.name}</div>
            <div className="text-xs sm:text-sm text-stone-600">{t.procedure}</div>
          </div>
        </div>
        <div className="flex gap-0.5 sm:gap-1">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
      <div className="mt-4 sm:mt-5 md:mt-6 relative flex-1">
        <Quote className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-6 sm:w-8 h-6 sm:h-8 text-turquoise-300/60" />
        <p className="text-stone-700 relative z-10 leading-relaxed font-light line-clamp-5 text-xs sm:text-sm md:text-base">
          {t.quote}
        </p>
        {t.quote.length > 350 && (
          <button
            onClick={() => onReadMore(t)}
            className="mt-2 sm:mt-3 text-turquoise-600 hover:text-turquoise-700 font-medium text-xs sm:text-sm inline-flex items-center gap-1 transition-colors"
          >
            Read more
            <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
          </button>
        )}
      </div>
      <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-stone-600 font-medium">{t.role}</div>
    </motion.article>
  );
}

function TestimonialModal({ testimonial, onClose }) {
  if (!testimonial) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 bg-stone-100 hover:bg-stone-200 rounded-full p-1.5 sm:p-2 transition-colors"
          >
            <X className="w-4 sm:w-5 h-4 sm:h-5 text-stone-700" />
          </button>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-10">
            {/* Header */}
            <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 rounded-full object-cover ring-4 ring-turquoise-50 shadow-lg"
              />
              <div className="flex-1">
                <div className="font-semibold text-lg sm:text-xl text-stone-900">
                  {testimonial.name}
                </div>
                <div className="text-xs sm:text-sm text-stone-600 mt-1">
                  {testimonial.procedure}
                </div>
                <div className="flex gap-0.5 sm:gap-1 mt-1.5 sm:mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial text */}
            <div className="relative">
              <Quote className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-8 sm:w-10 h-8 sm:h-10 text-turquoise-200/60" />
              <div className="relative z-10 text-stone-700 leading-relaxed text-sm sm:text-base font-light pl-4 sm:pl-6">
                {testimonial.quote}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-stone-100">
              <div className="text-xs sm:text-sm text-stone-600 font-medium">
                {testimonial.role}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await api.get('/api/testimonials/active');
      // Map testimonials to component format (take first 4)
      const tones = ["lightBlue", "white", "mint", "lightBlue"];
      const mappedTestimonials = response.data.slice(0, 4).map((testimonial, index) => ({
        name: testimonial.name,
        role: "Patient",
        avatar: testimonial.image || "/user.png",
        quote: testimonial.content,
        rating: testimonial.rating || 5,
        procedure: testimonial.designation || "Surgical Care",
        tone: tones[index % tones.length],
      }));
      setTestimonials(mappedTestimonials);
    } catch (err) {
      console.error('Error fetching testimonials:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReadMore = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const handleCloseModal = () => {
    setSelectedTestimonial(null);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseVideoModal = () => {
    setSelectedVideo(null);
  };

  // Use testimonials from API, fallback to empty array
  const TESTIMONIALS = testimonials.length > 0 ? testimonials : [];
  return (
    <section
      id="testimonials"
      className="relative isolate py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50/30 overflow-hidden"
    >
      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <TestimonialModal
          testimonial={selectedTestimonial}
          onClose={handleCloseModal}
        />
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={handleCloseVideoModal}
        />
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-br from-turquoise-50 to-sky-50/70 blur-3xl opacity-80" />
        <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-turquoise-50/70 blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-gradient-to-r from-turquoise-50/40 to-transparent blur-3xl opacity-60" />
      </div>

      {/* Header */}
      <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full bg-turquoise-50 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-medium text-turquoise-700 mb-4 sm:mb-5 md:mb-6 shadow-sm shadow-turquoise-100/50 ring-1 ring-turquoise-100">
            <span className="h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-turquoise-500"></span>
            Patient Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-stone-900 mb-4 sm:mb-5 md:mb-6">
            Trust in our <span className="font-medium">Expertise</span>
          </h2>
         
          <p className="text-lg text-stone-600/90 max-w-3xl mx-auto leading-relaxed font-light">
              Read real experiences from our patients who have trusted us with their surgical care
            </p>
            <a href="https://www.google.com/search?sca_esv=57cf8f5eed85b039&rlz=1C1MRUS_enIN1150IN1150&sxsrf=AE3TifOBh__8OMGrXrBUV5EMbL4dPV7ipA:1764323097562&kgmid=/g/11vxjvw9pt&q=K+CARE+CLINIC&shndl=30&shem=damc,lcuae,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=bed3b424902e1171&utm_source=damc,lcuae,uaasie,shrtsdl,sh/x/loc/uni/m1/1&zx=1764484314186&no_sw_cr=1" target="_blank" rel="noopener noreferrer" className="text-turquoise-500 hover:text-turquoise-600 font-medium inline-flex items-center gap-1.5 transition-colors">
              View All Testimonials on Google
              <ArrowRight className="w-4 h-4" />
            </a>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Top header and hero image */}
        <div className="grid gap-5 sm:gap-6 md:gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center justify-between text-gray-500 text-xs sm:text-sm">
              <span>Patient Stories</span>
            </div>
            <h2 className="mt-2 sm:mt-3 text-stone-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight">
              Patients Gave
              <br />
              <span className="font-medium">Lots of Love</span>
            </h2>

            {/* First row cards (visible as soon as section is in view) */}
            <div className="mt-5 sm:mt-6 md:mt-8 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 flex-1">
              {TESTIMONIALS[0] && <TestimonialCard t={TESTIMONIALS[0]} index={0} onReadMore={handleReadMore} />}
              {TESTIMONIALS[1] && <TestimonialCard t={TESTIMONIALS[1]} index={0.2} onReadMore={handleReadMore} />}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            viewport={{ once: true, amount: 0.4 }}
            className="lg:col-span-5 flex items-end"
          >
            <div className="w-full rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem] ring-1 ring-turquoise-100/80 shadow-xl overflow-hidden bg-white/90 backdrop-blur-sm flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="px-4 sm:px-5 md:px-6 pt-4 sm:pt-5 md:pt-6 pb-3 sm:pb-4 flex-shrink-0">
                <div className="text-base sm:text-lg font-semibold text-stone-900 mb-1">
                  {VIDEO_TESTIMONIALS[0].name}
                </div>
                <div className="text-xs sm:text-sm text-stone-600">
                  {VIDEO_TESTIMONIALS[0].procedure}
                </div>
              </div>
              <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                <VideoThumbnail 
                  videoSrc={VIDEO_TESTIMONIALS[0].videoSrc} 
                  onClick={() => handleVideoClick(VIDEO_TESTIMONIALS[0])}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second wave on scroll: pop up from below */}
        <div className="mt-5 sm:mt-6 md:mt-8 grid gap-4 sm:gap-5 md:gap-6 lg:grid-cols-12">
          {TESTIMONIALS[3] && (
            <div className="lg:col-span-7">
              <TestimonialCard t={TESTIMONIALS[3]} index={0.15} onReadMore={handleReadMore} />
            </div>
          )}

          {TESTIMONIALS[2] && (
            <div className="lg:col-span-5">
              <TestimonialCard t={TESTIMONIALS[2]} index={0.15} onReadMore={handleReadMore} />
            </div>
          )}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          className="mt-6 sm:mt-8 md:mt-10 flex justify-center"
        >
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-turquoise-400 hover:bg-turquoise-300 text-stone-900 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold shadow-md shadow-turquoise-900/10 transition-colors"
          >
            View all testimonials <ArrowRight className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
