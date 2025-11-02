import { useState, useEffect, Fragment } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const procedures = [
  { name: "Diabetic Foot Care", href: "/services/diabetic-foot-care" },
  { name: "Breast Surgery", href: "/services/breast-surgery" },
  {
    name: "Advanced Thyroid Surgery",
    href: "/services/advanced-thyroid-surgery",
  },
  {
    name: "Laser Fissure Treatment",
    href: "/services/laser-fissure-treatment",
  },
  { name: "Piles (Hemorrhoids)", href: "/services/piles-treatment" },
  { name: "Fistula Treatment", href: "/services/fistula-treatment" },
  {
    name: "Laparoscopic Appendectomy",
    href: "/services/laparoscopic-appendectomy",
  },
  { name: "Robotic Hernia Repair", href: "/services/robotic-hernia-repair" },
  { name: "Gall Bladder Removal", href: "/services/gall-bladder-removal" },
  { name: "Hydrocele Surgery", href: "/services/hydrocele-surgery" },
  { name: "Pilonidal Sinus Care", href: "/services/pilonidal-sinus-care" },
  {
    name: "Rectal Prolapse Surgery",
    href: "/services/rectal-prolapse-surgery",
  },
  { name: "Phimosis Treatment", href: "/services/phimosis-treatment" },
  { name: "Abscess Drainage", href: "/services/abscess-drainage" },
  { name: "Cyst Removal", href: "/services/cyst-removal" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#", children: procedures },
  { name: "About Us", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Recognitions", href: "/recognition" },
  
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [proceduresMenuOpen, setProceduresMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;
  const linkBase =
    "relative text-[15px] font-medium px-3 py-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-400/40 group";
  const linkTheme = "text-white hover:text-black";
  const underlineBase =
    "absolute bottom-1 left-0 right-0 h-[2px] origin-left transform transition-transform duration-300 ease-out";
  const underlineClass = `${underlineBase} scale-x-0 group-hover:scale-x-100 bg-turquoise-400`;
  const activeUnderlineClass = `${underlineBase} scale-x-100 bg-turquoise-400`;
  const ctaClasses =
    "text-white bg-turquoise-400 hover:bg-turquoise-300 rounded-full shadow-md shadow-turquoise-800/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-400/40";

  // Active link detection based on current route/hash (only one active at a time)
  const isServices = location.pathname.startsWith("/services");
  const hasHash = !!location.hash;
  const isItemActive = (item) => {
    if (hasHash) {
      // When a hash is present, only the matching hash link is active
      return item.href === location.hash;
    }
    if (item.children) return isServices;
    if (item.href.startsWith("/")) return location.pathname === item.href;
    if (item.href.startsWith("#")) return false;
    return false;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[120]">
      <nav
        className={`bg-gradient-to-br from-turquoise-600 via-turquoise-700 to-turquoise-900 border-b border-turquoise-200/20 rounded-b-3xl overflow-visible transition-colors duration-300`}
        aria-label="Global"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 lg:py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <img
                src="/logo_white.png"
                alt="Kcare"
                className={`h-14 sm:h-14 md:h-14 w-auto object-contain ${
                  transparent ? "drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]" : ""
                }`}
              />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Nav - Centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="flex items-center gap-x-8">
              {navigation.map((item, idx) => {
                const isActive = isItemActive(item);

                if (item.children) {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setProceduresMenuOpen(true)}
                      onMouseLeave={() => setProceduresMenuOpen(false)}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setProceduresMenuOpen(!proceduresMenuOpen);
                        }}
                        className={`${linkBase} ${linkTheme} group inline-flex items-center gap-1`}
                      >
                        <span>{item.name}</span>
                        <span
                          className={
                            proceduresMenuOpen || isActive
                              ? activeUnderlineClass
                              : underlineClass
                          }
                        />
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            proceduresMenuOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </a>
                      <Transition
                        as={Fragment}
                        show={proceduresMenuOpen}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <div className="absolute -left-8 top-full z-[200] mt-5 w-screen max-w-md overflow-hidden rounded-2xl bg-white/90 backdrop-blur-md shadow-xl shadow-turquoise-800/10 ring-1 ring-turquoise-200/30">
                          <div className="p-4 grid grid-cols-2 gap-x-6 gap-y-2">
                            {item.children.map((child) => (
                              <a
                                key={child.name}
                                href={child.href}
                                onClick={() => setProceduresMenuOpen(false)}
                                className="block p-2 text-sm font-medium text-stone-800 rounded-lg hover:bg-turquoise-50/70 hover:text-black"
                              >
                                {child.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </Transition>
                    </div>
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${linkBase} ${linkTheme}`}
                  >
                    {item.name}
                    <span
                      className={
                        isActive ? activeUnderlineClass : underlineClass
                      }
                    />
                  </a>
                );
              })}
            </nav>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex flex-shrink-0">
            <a
              href="/contact"
              className={`text-sm font-semibold leading-6 px-5 py-2.5 transition-colors ${ctaClasses}`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-white/95 to-[#F9FAFB]/90 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-turquoise-200/30">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <img
                src="/logo4.png"
                alt="Kcare"
                className="h-9 w-auto object-contain"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-full px-4 py-2.5 text-base font-semibold leading-7 text-white hover:bg-turquoise-50 hover:text-turquoise-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="block text-center rounded-full px-5 py-2.5 text-base font-semibold leading-7 text-white bg-turquoise-400 hover:bg-turquoise-300 shadow-md shadow-turquoise-800/10"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
