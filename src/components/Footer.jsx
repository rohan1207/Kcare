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
              <img src="/logo4.png" alt="Kcare" className="h-12 w-auto" />
              <span className="font-display text-2xl font-semibold tracking-tight text-white">
                Kcare Clinic
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm text-white/80 leading-relaxed">
              Advanced robotic & laparoscopic surgery — faster recovery, minimal
              scarring, and care you can trust.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-full bg-turquoise-400 text-stone-900 px-5 py-2.5 text-sm font-semibold shadow-md shadow-turquoise-900/20 hover:bg-turquoise-300 transition-colors"
              >
                Book an Appointment
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-turquoise-400/30 px-3 py-2 text-xs font-medium text-turquoise-300 bg-turquoise-400/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-turquoise-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 016 6v1h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v1a6 6 0 11-12 0v-1H3a1 1 0 01-1-1V10a1 1 0 011-1h1V9a6 6 0 016-6z" />
                </svg>
                Board-certified care
              </span>
            </div>
          </div>

          {/* Links grid */}
          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Explore
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-400 transition-colors"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-400 transition-colors"
                    href="#services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-400 transition-colors"
                    href="/technology"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-400 transition-colors"
                    href="#pricing"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Patients
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-400 transition-colors"
                    href="#testimonials"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-400 transition-colors"
                    href="#faq"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-400 transition-colors"
                    href="/book"
                  >
                    Book consultation
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-400 transition-colors"
                    href="#learn"
                  >
                    Learn more
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Contact
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-400 transition-colors"
                    href="#contact"
                  >
                    Get in touch
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-400 transition-colors"
                    href="#portal"
                  >
                    Patient portal
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-400 transition-colors"
                    href="#location"
                  >
                    Find us
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 hover:text-turquoise-400 transition-colors"
                    href="tel:+1234567890"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/60 font-light">
            © {new Date().getFullYear()} Kcare Clinic. All rights reserved.
          </div>
          <div className="text-sm text-white/60 font-light">
            Designed & Developed by TheSocialKollab
          </div>
        </div>
      </div>
    </footer>
  );
}
