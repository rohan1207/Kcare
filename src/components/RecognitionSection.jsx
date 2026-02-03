import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Award, 
  ArrowRight, 
  FileText,
  Radio
} from "lucide-react";

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

const featuredRecognitions = [
  {
    id: 1,
    type: "Article Publication",
    title: "Preventive Measures to Promote Healthy Gut in 2024",
    source: "India TV",
    date: "2024",
    icon: FileText,
  },
  {
    id: 5,
    type: "Radio Program",
    title: "Stomach Pain & Digestive Health",
    source: "Hello Doctor Radio",
    date: "2024",
    icon: Radio,
  },
];

export default function RecognitionSection() {
  return (
    <section className="relative pt-0 pb-8 sm:pb-10 md:pb-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-turquoise-100/50 overflow-hidden"
        >
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 p-6 sm:p-8 md:p-10">
            
            {/* Left Content */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-turquoise-500 to-turquoise-600 rounded-xl text-white flex-shrink-0">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="flex-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-turquoise-50 px-3 py-1 text-xs font-medium text-turquoise-700 mb-2">
                    Media Features
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-light text-stone-900 mb-2">
                    Recognitions <span className="font-medium">& Publications</span>
                  </h2>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
                    Our expertise and insights featured in leading publications and media platforms.
                  </p>
                </div>
              </div>

              {/* Featured Recognitions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {featuredRecognitions.map((item, idx) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-2.5 p-3 bg-turquoise-50/50 rounded-lg border border-turquoise-100/50"
                  >
                    <div className="p-1.5 bg-turquoise-100 rounded-md flex-shrink-0">
                      <item.icon className="h-3.5 w-3.5 text-turquoise-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-stone-700 mb-0.5 line-clamp-1">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-stone-500">
                        {item.source} • {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual & CTA */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div className="relative rounded-xl bg-gradient-to-br from-turquoise-500 via-turquoise-600 to-sky-600 p-6 text-white overflow-hidden mb-4">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">Featured Publications</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/90"></div>
                      <span className="text-white/90">India TV Articles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/90"></div>
                      <span className="text-white/90">HealthSite.com Features</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/90"></div>
                      <span className="text-white/90">Radio Programs</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Link
                  to="/recognition"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-turquoise-500 to-turquoise-600 text-white px-5 py-3 rounded-full text-sm font-semibold hover:from-turquoise-600 hover:to-turquoise-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-auto"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


