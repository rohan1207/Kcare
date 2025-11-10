import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  Home,
  Calendar,
  Clock,
  Eye,
  Heart,
  Shield,
  Activity,
  Users,
  UserCheck,
  MapPin,
  Award,
  CheckCircle,
} from "react-feather";
import OurTeam from "../components/OurTeam";
import MainFounder from "../components/MainFounder";
import CoFounder from "../components/CoFounder";
import GalleryPage from "./Gallery";
const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState("founder");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((elem) => {
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const specialties = [
    "Piles (Haemorrhoids)",
    "Hernia",
    "Gallbladder Stones",
    "Appendix",
    "Thyroid",
    "Breast",
    "Diabetic Foot",
    "Gastrointestinal Surgeries",
    "Burn Injuries",
    "Fissure",
    "Fistula",
    "Pilonidal Sinus",
    "Rectal Prolapse",
    "Phimosis",
    "Hydrocele",
    "Cyst",
    "Abscess",
    "Wart Treatment",
    "Ingrown Toe Nail Infection and Removal",
    "Testicle or Ovarian Torsion",
    "Trauma Surgery (Abdomen Trauma)",
    "Lymph Nodes Excision",
    "Cellulitis",
  ];

  const facilities = [
    {
      icon: Activity,
      title: "Advanced Robotic Surgery Suite",
      desc: "Utilizing the latest in robotic technology for precision and minimally invasive procedures.",
    },
    {
      icon: Eye,
      title: "State-of-the-art Laparoscopic Equipment",
      desc: "High-definition imaging and instruments for complex laparoscopic surgeries.",
    },
    {
      icon: Home,
      title: "Modern Operation Theaters",
      desc: "Equipped with advanced technology to handle a wide range of surgical procedures.",
    },
    {
      icon: Users,
      title: "Comprehensive Diagnostic Lab",
      desc: "In-house laboratory for fast and accurate diagnostic results.",
    },
    {
      icon: Shield,
      title: "24/7 Emergency & Trauma Care",
      desc: "Dedicated team and infrastructure for immediate response to emergencies.",
    },
    {
      icon: Heart,
      title: "Comfortable Recovery Rooms",
      desc: "Patient-centric rooms to ensure a comfortable and speedy recovery.",
    },
  ];

  const stats = [
    { number: "12+", label: "Years of Experience", icon: Calendar },
    { number: "20k+", label: "Successful Surgeries", icon: Users },
    { number: "24/7", label: "Emergency Care", icon: Clock },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Decorative background elements
  const Blur = () => (
    <>
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-turquoise-50 to-sky-50/70 blur-3xl opacity-80" />
      <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-turquoise-50/70 blur-3xl opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-turquoise-50/40 to-transparent blur-3xl opacity-60" />
    </>
  );

  return (
    <div className=" bg-gradient-to-b from-white to-slate-50/30 overflow-hidden relative -mt-10">
      <Blur />
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-br from-turquoise-600 via-turquoise-700 to-turquoise-900  text-white overflow-hidden "
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-turquoise-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-turquoise-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-turquoise-600/10 to-transparent mix-blend-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className=" -mt-5 inline-flex items-center gap-2.5 rounded-full bg-turquoise-50 px-5 py-2.5 text-sm font-medium text-turquoise-700 mb-6 shadow-sm shadow-turquoise-100/50 ring-1 ring-turquoise-100"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-turquoise-500"></span>
              Advanced Surgical Care
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-[64px] font-light leading-[1.05] tracking-tight mb-4"
            >
              About <span className="font-medium">Kcare Clinic</span>
              <br />
              <span className="font-serif italic text-turquoise-400">Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light text-white/90 mt-6"
            >
              Pioneering the future of surgical care with robotic and laparoscopic expertise, delivering precision and compassion in every procedure.
            </motion.p>
          </div>
        </div>

      </motion.div>

      {/* Stats Section */}
      <div className="relative -mt-10 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white/90 backdrop-blur-sm rounded-[2rem] p-6 shadow-xl shadow-turquoise-900/20 ring-1 ring-turquoise-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-turquoise-600 mb-3" />
              <div className="text-3xl sm:text-4xl font-light text-stone-900 mb-1">
                {stat.number}
              </div>
              <div className="text-stone-600/90 text-sm sm:text-base font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {[
              { id: "founder", label: "Founder" },
              { id: "overview", label: "Overview" },
              { id: "vision", label: "Vision & Mission" },
              { id: "facilities", label: "Facilities" },
              { id: "gallery", label: "Gallery" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === tab.id
                    ? "bg-[#019e9e] text-white shadow-lg shadow-turquoise-900/20"
                    : "bg-turquoise-50/70 text-turquoise-700 hover:bg-turquoise-100/80 ring-1 ring-turquoise-100/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch h-full"
            >
              {" "}
              <div className="flex flex-col h-full">
                <h2 className="text-3xl sm:text-4xl font-light leading-tight tracking-tight text-stone-900 mb-8">
                  About <span className="font-medium">Kcare Clinic</span>
                  <br />
                  <span className="font-serif italic text-turquoise-600">Excellence</span>
                </h2>
                <div className="flex-grow space-y-6 text-stone-600/90 leading-relaxed">
                  <p className="text-lg font-light">
                    Kcare Clinic is a premier surgical facility in Pune,
                    specializing in advanced robotic and laparoscopic
                    surgeries. Our commitment is to provide patient-centric
                    care using cutting-edge technology, ensuring better
                    outcomes and faster recovery.
                  </p>
                </div>
                <div className="mt-8 grid sm:grid-cols-1 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="bg-turquoise-50/50 rounded-[2rem] p-6 ring-1 ring-turquoise-100/50 flex flex-col items-center sm:items-start text-center sm:text-left backdrop-blur-sm"
                  >
                    <div className="bg-turquoise-50 rounded-2xl p-3 mb-3 ring-1 ring-turquoise-100">
                      <MapPin className="w-6 h-6 text-turquoise-600" />
                    </div>
                    <h3 className="font-medium text-stone-900 mb-2">
                      Location
                    </h3>
                    <p className="text-stone-600/90 font-light">Pune, Maharashtra</p>
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <div className="bg-[#019e9e] rounded-[2rem] p-8 text-white h-full flex flex-col relative overflow-hidden shadow-xl shadow-turquoise-900/20">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-turquoise-400/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-turquoise-500/10 rounded-full blur-3xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-turquoise-600/10 to-transparent mix-blend-overlay" />
                  
                  <div className="relative z-10 flex-grow">
                    <h3 className="text-2xl font-light mb-6 leading-tight">
                      Why Choose
                      <br /><span className="font-medium">Us</span>
                    </h3>
                    <ul className="space-y-4">
                      {[
                        {
                          title: "Expertise in Advanced Laparoscopic & Robotic Techniques",
                          desc: "Skilled in performing a wide range of procedures with precision and safety."
                        },
                        {
                          title: "Patient-Centered Care",
                          desc: "We ensure every patient feels heard, informed, and confident about their treatment."
                        },
                        {
                          title: "Faster Recovery, Better Outcomes",
                          desc: "Our minimally invasive approach reduces pain, scarring, and downtime."
                        },
                        {
                          title: "State-of-the-Art Technology",
                          desc: "Equipped with the latest surgical systems and diagnostic facilities."
                        },
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-turquoise-400 flex-shrink-0" />
                          <div>
                            <span className="text-sm font-medium text-white block mb-1">{item.title}</span>
                            <span className="text-sm font-light text-white/80">{item.desc}</span>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
          {/* Vision & Mission Tab */}
          {activeTab === "vision" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-[#019e9e] rounded-[2rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-xl shadow-turquoise-900/20"
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-turquoise-400/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-turquoise-500/10 rounded-full blur-3xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-turquoise-600/10 to-transparent mix-blend-overlay" />
                  <div className="relative z-10">
                    <div className="bg-turquoise-400/20 rounded-2xl w-16 h-16 flex items-center justify-center mb-8 ring-1 ring-turquoise-400/30">
                      <Eye className="w-8 h-8 text-turquoise-400" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-light leading-tight mb-6">
                      Our <span className="font-medium">Vision</span>
                    </h2>
                    <p className="text-lg sm:text-xl leading-relaxed text-white/90 font-light">
                      To be a leading center of excellence in surgical care,
                      renowned for our expertise in robotic and laparoscopic
                      procedures, and our unwavering commitment to patient
                      well-being.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 sm:p-12 shadow-xl shadow-turquoise-900/20 ring-1 ring-turquoise-100/80 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-turquoise-50/50 to-blue-50/50"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-turquoise-200/20 rounded-full -translate-y-16 translate-x-16 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-turquoise-200/30 rounded-full translate-y-12 -translate-x-12 blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="bg-turquoise-50 rounded-2xl w-16 h-16 flex items-center justify-center mb-8 ring-1 ring-turquoise-100">
                      <Heart className="w-8 h-8 text-turquoise-600" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-light leading-tight mb-6 text-stone-900">
                      Our Mission &
                      <br /><span className="font-medium">Objectives</span>
                    </h2>
                    <p className="text-lg sm:text-xl leading-relaxed text-stone-600/90 font-light">
                      Our mission is to provide accessible, affordable, and
                      high-quality surgical care. We aim to leverage advanced
                      technology to minimize patient discomfort, reduce
                      recovery time, and achieve the best possible clinical
                      outcomes, always adhering to the highest ethical
                      standards.
                    </p>
                  </div>
                </motion.div>
              </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/90 backdrop-blur-sm rounded-[2rem] shadow-xl shadow-turquoise-900/20 ring-1 ring-turquoise-100/80 overflow-hidden"
                >
                  <div className="relative p-8 sm:p-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-turquoise-50/80 to-white"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-light text-stone-900 mb-8 text-center">
                      Our Core <span className="font-medium">Values</span>
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          icon: Heart,
                          title: "Compassion",
                          desc: "Caring with empathy",
                          gradient: "from-turquoise-600 to-turquoise-500",
                          bg: "from-turquoise-50/50 to-turquoise-100/50",
                        },
                        {
                          icon: Shield,
                          title: "Safety",
                          desc: "Ensuring patient safety",
                          gradient: "from-turquoise-600 to-turquoise-500",
                          bg: "from-turquoise-50/50 to-turquoise-100/50",
                        },
                        {
                          icon: Award,
                          title: "Excellence",
                          desc: "Striving for the best",
                          gradient: "from-turquoise-600 to-turquoise-500",
                          bg: "from-turquoise-50/50 to-turquoise-100/50",
                        },
                        {
                          icon: Users,
                          title: "Respect",
                          desc: "Treating all with dignity",
                          gradient: "from-turquoise-600 to-turquoise-500",
                          bg: "from-turquoise-50/50 to-turquoise-100/50",
                        },
                      ].map((value, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                          whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.2 },
                          }}
                          className="group relative rounded-2xl p-6 transition-all duration-300"
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${value.bg} rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                          ></div>
                          <div className="relative">
                            <div
                              className={`bg-gradient-to-br ${value.gradient} rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300`}
                            >
                              <value.icon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="font-medium text-stone-900 mb-2 text-center">
                              {value.title}
                            </h4>
                            <p className="text-sm text-stone-600/90 text-center font-light">
                              {value.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
          {/* Facilities Tab */}
          {activeTab === "facilities" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-light leading-tight tracking-tight text-stone-900 mb-4">
                  World-Class
                  <br />
                  <span className="font-medium">Facilities</span> & <span className="font-serif italic text-turquoise-600">Services</span>
                </h2>
                <p className="text-lg text-stone-600/90 max-w-3xl mx-auto font-light">
                  State-of-the-art infrastructure and advanced medical equipment
                  to provide the best possible care
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-light text-stone-900 mb-6">
                    Key <span className="font-medium">Facilities</span>
                  </h3>
                  {facilities.map((facility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start space-x-4 bg-white/90 backdrop-blur-sm p-6 rounded-[2rem] shadow-xl shadow-turquoise-900/20 ring-1 ring-turquoise-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="bg-turquoise-50 p-3 rounded-2xl ring-1 ring-turquoise-100">
                        <facility.icon className="w-6 h-6 text-turquoise-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-stone-900 mb-1">
                          {facility.title}
                        </h4>
                        <p className="text-stone-600/90 text-sm font-light">
                          {facility.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-light text-stone-900 mb-6">
                    Our <span className="font-medium">Specialties</span>
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-turquoise-50/70 to-turquoise-100/70 rounded-[2rem] p-8 shadow-xl shadow-turquoise-900/20 ring-1 ring-turquoise-100/50 backdrop-blur-sm"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {specialties.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-turquoise-600 flex-shrink-0" />
                          <span className="text-stone-900 text-sm sm:text-base font-light">
                            {service}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
          {/* Founder & Team Tab */}
          {(activeTab === "founder") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto"
            >
              <div className="space-y-10">
                <MainFounder />
                <CoFounder />
              </div>
            </motion.div>
          )}
          {(activeTab === "team") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-light leading-tight tracking-tight text-stone-900 mb-4">
                  Our Expert
                  <br />
                  <span className="font-medium">Team</span>
                </h2>
                <p className="text-lg text-stone-600/90 max-w-3xl mx-auto font-light">
                  Led by our founder, our team is composed of dedicated professionals committed to excellence in surgical care.
                </p>
              </div>
              <OurTeam />
            </motion.div>
          )}
          {(activeTab === "gallery") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto"
            >
              <GalleryPage />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Contact Strip */}
      <div className="mt-16 sm:mt-24 bg-gradient-to-r from-turquoise-50/70 to-blue-50/70 rounded-[2rem] p-6 sm:p-8 relative overflow-hidden shadow-xl shadow-turquoise-900/20 ring-1 ring-turquoise-100/50 backdrop-blur-sm">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-stone-900 mb-3 sm:mb-4">
            Have any questions or need a
            <br />
            <span className="font-medium">consultation?</span>
          </h3>
          <p className="text-stone-600/90 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg font-light">
            Our medical experts are here to help. Get in touch with us for any
            medical queries or appointment scheduling.
          </p>

          <Link
            to="/contact"
            href="#"
            className="inline-flex items-center gap-2 bg-turquoise-400 hover:bg-turquoise-300 text-stone-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
