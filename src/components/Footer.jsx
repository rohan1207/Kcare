export default function Footer() {
  return (
    <footer className="relative mt-24 bg-gradient-to-br from-turquoise-600 via-turquoise-700 to-turquoise-900 text-white overflow-hidden">
      {/* Decorative elements */}
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 rounded-full bg-gradient-to-tr from-turquoise-50/10 to-transparent blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 rounded-full bg-gradient-to-tl from-sky-50/10 to-transparent blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-turquoise-600/10 to-transparent mix-blend-overlay" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Brand + short mission */}
          <div className="lg:w-1/3">
            <a href="/" className="inline-flex items-center gap-3">
              <img src="/logo4.png" alt="K Care" className="h-12 w-auto" />
              <span className="font-display text-2xl font-semibold tracking-tight text-white">
                K Care Clinic
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm text-white/80 leading-relaxed">
              Advanced robotic & laparoscopic surgery — faster recovery, minimal
              scarring, and care you can trust.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-turquoise-400 text-stone-900 px-5 py-2.5 text-sm font-semibold shadow-md shadow-turquoise-900/20 hover:bg-turquoise-300 transition-colors"
              >
                Book an appointment
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-turquoise-400/30 px-3 py-2 text-xs font-medium text-turquoise-300 bg-turquoise-400/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-turquoise-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 016 6v1h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v1a6 6 0 11-12 0v-1H3a1 1 0 01-1-1V10a1 1 0 011-1h1V9a6 6 0 016-6z" />
                </svg>
                Expert care 24/7
              </span>
            </div>
          </div>

          {/* Links grid */}
          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Quick links
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-300 transition-colors"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-300 transition-colors"
                    href="/about"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-300 transition-colors"
                    href="/blogs"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-300 transition-colors"
                    href="/gallery"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-300 transition-colors"
                    href="/testimonials"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-300 transition-colors"
                    href="/recognition"
                  >
                    Recognitions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Popular services
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-300 transition-colors"
                    href="/services/piles-treatment"
                  >
                    Piles treatment
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-300 transition-colors"
                    href="/services/robotic-hernia-repair"
                  >
                    Robotic hernia
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-300 transition-colors"
                    href="/services/fistula-treatment"
                  >
                    Fistula treatment
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-300 transition-colors"
                    href="/services/laparoscopic-appendectomy"
                  >
                    Laparoscopic appendectomy
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-300 transition-colors"
                    href="/services/advanced-thyroid-surgery"
                  >
                    Thyroid surgery
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-300 transition-colors"
                    href="/services/breast-surgery"
                  >
                    Breast surgery
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Contact us
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-300 transition-colors flex items-start gap-2"
                    href="https://maps.app.goo.gl/yRiS3JvhrWyccoNJ7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mt-0.5">📍</span>
                    <span>Porwal Rd, Dhanori, Pune 411047</span>
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-300 transition-colors flex items-center gap-2"
                    href="tel:+9373619006"
                  >
                    <span>📞</span>
                    <span>93736 19006</span>
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-300 transition-colors flex items-center gap-2"
                    href="mailto:kcareclinic777@gmail.com"
                  >
                    <span>✉️</span>
                    <span>kcareclinic777@gmail.com</span>
                  </a>
                </li>
                <li className="pt-2">
                  <div className="text-white/70 text-xs">
                    <p className="font-medium text-white/80">Clinic timings:</p>
                    <p>Mon-Sat: 10am-3pm, 5pm-11pm</p>
                    <p>Sunday: 4pm-8pm</p>
                    <p>By prior appointment</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/60 font-light">
            © {new Date().getFullYear()} K Care Clinic. All rights reserved.
          </div>
          <div className="text-sm text-white/60 font-light">
            Designed & Developed by TheSocialKollab
          </div>
        </div>
      </div>
    </footer>
  );
}
