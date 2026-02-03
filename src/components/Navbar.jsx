import { useState, useEffect, Fragment } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import { ChevronDown, CheckCircle } from "lucide-react";
import servicesData from "../data/servicesData.json";

// Generate procedures from servicesData.json
const procedures = servicesData.map((service) => ({
  name: service.name,
  href: `/services/${service.slug}`,
}));

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#", children: procedures },
  { name: "About Us", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [proceduresMenuOpen, setProceduresMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
  const linkTheme = "text-stone-800 hover:text-turquoise-600";
  const underlineBase =
    "absolute bottom-1 left-0 right-0 h-[2px] origin-left transform transition-transform duration-300 ease-out";
  const underlineClass = `${underlineBase} scale-x-0 group-hover:scale-x-100 bg-turquoise-500`;
  const activeUnderlineClass = `${underlineBase} scale-x-100 bg-turquoise-500`;
  const ctaClasses =
    "text-white bg-turquoise-500 hover:bg-turquoise-600 rounded-full shadow-md shadow-turquoise-800/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-400/40";

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
        className={`bg-white border-b border-stone-200/50 rounded-b-3xl overflow-visible transition-colors duration-300 shadow-sm`}
        aria-label="Global"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="-m-1.5 p-1.5 flex items-center">
              <img
                src="/logo2.png"
                alt="Kcare"
                className="h-14 sm:h-12 lg:h-14  w-auto  scale-150"
              />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-stone-800 hover:text-turquoise-600"
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
                      key={item.name }
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
                        <div className="absolute -left-8 top-full z-[200] mt-5 w-screen max-w-md rounded-2xl bg-white backdrop-blur-md shadow-xl shadow-stone-800/10 ring-1 ring-stone-200/50 overflow-hidden">
                          {/* Fixed height container with scroll */}
                          <div className="max-h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-turquoise-400 scrollbar-track-stone-50/30">
                            <div className="p-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
                              {item.children.map((child) => (
                                <a
                                  key={child.name}
                                  href={child.href}
                                  onClick={() => setProceduresMenuOpen(false)}
                                  className="flex items-center gap-2 px-3 py-2 text-[13px] leading-tight font-medium text-stone-800 rounded-lg hover:bg-turquoise-50 hover:text-turquoise-700 transition-colors duration-150"
                                >
                                  <CheckCircle className="w-3.5 h-3.5 text-turquoise-500 flex-shrink-0" />
                                  <span>{child.name}</span>
                                </a>
                              ))}
                            </div>
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

          {/* Contact Number & CTA Button */}
          <div className="hidden lg:flex flex-shrink-0 items-center gap-4">
            <a
              href="tel:9373619006"
              className="flex items-center gap-2 text-stone-800 hover:text-turquoise-600 transition-colors group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-base font-bold tracking-wide">9373619006</span>
            </a>
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
        <div className="fixed inset-0 z-[150] bg-black/50 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-[160] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <a href="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <img
                src="/logo2.png"
                alt="Kcare"
                className="h-10 w-auto "
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-full p-2.5 text-stone-800 hover:bg-stone-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            {navigation.map((item) => {
              if (item.children) {
                // Services with expandable dropdown
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-stone-800 hover:bg-stone-50 rounded-xl transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    
                    {/* Expandable Services List */}
                    <Transition
                      show={mobileServicesOpen}
                      enter="transition-all duration-200 ease-out"
                      enterFrom="max-h-0 opacity-0"
                      enterTo="max-h-[400px] opacity-100"
                      leave="transition-all duration-150 ease-in"
                      leaveFrom="max-h-[400px] opacity-100"
                      leaveTo="max-h-0 opacity-0"
                    >
                      <div className="mt-2 mb-3 ml-2 overflow-hidden">
                        <div className="max-h-[400px] overflow-y-auto bg-stone-50 rounded-xl p-3 space-y-1 scrollbar-thin scrollbar-thumb-turquoise-400 scrollbar-track-stone-100">
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-stone-800 hover:text-turquoise-700 hover:bg-turquoise-50 rounded-lg transition-colors"
                            >
                              <CheckCircle className="w-4 h-4 text-turquoise-500 flex-shrink-0" />
                              <span>{child.name}</span>
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
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-stone-800 hover:bg-stone-50 rounded-xl transition-colors"
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-8 pt-6 border-t border-stone-200">
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center rounded-full px-6 py-3.5 text-base font-bold bg-turquoise-500 text-white hover:bg-turquoise-600 shadow-lg transition-all duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-stone-200 space-y-3">
            <a href="tel:9373619006" className="flex items-center gap-3 text-stone-800 hover:text-turquoise-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-bold text-base">9373619006</span>
            </a>
            <a href="tel:9890777456" className="flex items-center gap-3 text-stone-600 hover:text-stone-800 text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>98907 77456</span>
            </a>
            <a href="mailto:kcareclinic777@gmail.com" className="flex items-center gap-3 text-stone-600 hover:text-stone-800 text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs">kcareclinic777@gmail.com</span>
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
