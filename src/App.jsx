import { BrowserRouter, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import BookAppointmentModal from "./components/BookAppointmentModal";
import EnquiryModal from "./components/EnquiryModal";
import AIAssistant from "./components/AIAssistant";
import {
  AppointmentModalProvider,
  useAppointmentModal,
} from "./contexts/AppointmentModalContext";
import {
  EnquiryModalProvider,
  useEnquiryModal,
} from "./contexts/EnquiryModalContext";

import ContactUs from "./pages/ContactUs";
import BookAppointment from "./pages/BookAppointment";
import AboutUs from "./pages/AboutUs";
import BlogsPage from "./pages/Blogs";
import BlogDetailPage from "./pages/BlogDetailPage";
import GalleryPage from "./pages/Gallery";
import FounderDetail from "./pages/FounderDetail";
import TestimonialsPage from "./pages/TestimonialsPage";

// DYNAMIC SERVICE TEMPLATE - One template for all 23 services!
import ServiceDetailPage from "./pages/ServiceDetailPage";
import SharmaDetail from "./pages/ShitalSharmaDetail";
import GeneralPhysicianPage from "./pages/GeneralPhysician";

export default function App() {
  return (
    <AppointmentModalProvider>
      <EnquiryModalProvider>
        <div className="min-h-screen overflow-x-hidden bg-white text-stone-900">
          <BrowserRouter>
            <AppInner />
          </BrowserRouter>
        </div>
      </EnquiryModalProvider>
    </AppointmentModalProvider>
  );
}

function AppInner() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { isOpen, closeModal } = useAppointmentModal();
  const { isOpen: isEnquiryOpen, closeModal: closeEnquiryModal } = useEnquiryModal();

  // Scroll to top whenever the route (pathname) changes, or scroll to hash if present
  useEffect(() => {
    if (location.hash) {
      // If there's a hash, scroll to that element
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      // Otherwise scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar />
      <main className={isHome ? "" : "pt-24 lg:pt-28"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/book" element={<BookAppointment />} />

          {/* 🎯 DYNAMIC SERVICE TEMPLATE - Handles ALL 23 services from servicesData.json */}
          {/* Click "Learn More" on Services.jsx → Routes to /services/:slug → ServiceDetailPage loads data from JSON → ServicePageLayout renders template with Timeline */}
          <Route path="/services/:slug" element={<ServiceDetailPage />} />

          {/* Blog Routes */}
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:blogId" element={<BlogDetailPage />} />

          {/* Redirect Routes */}
          <Route path="/recognition" element={<Navigate to="/founders/pramod-kadam#recognitions" replace />} />
          <Route path="/services" element={<Navigate to="/#services" replace />} />

          {/* Other Pages */}
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/founders/:slug" element={<FounderDetail />} />
          <Route path="/shital-sharma" element={<SharmaDetail />} />
          <Route path="/general-physician" element={<GeneralPhysicianPage />} />
        </Routes>
      </main>
      <Footer />
    
      <BookAppointmentModal isOpen={isOpen} onClose={closeModal} />
      <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiryModal} />
      <AIAssistant />
    </>
  );
}
