import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Phone, Mail, FileText, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICES = [
  "Laparoscopic Gallbladder Surgery",
  "Laparoscopic Appendectomy",
  "Robotic Hernia Repair",
  "Hydrocele Surgery",
  "Diabetic Foot Care",
  "Breast Surgery",
  "Advanced Thyroid Surgery",
  "Pilonidal Sinus Care",
  "Rectal Prolapse Surgery",
  "Phimosis Treatment",
  "Abscess Drainage",
  "Cyst Removal",
  "Anal Fissure Treatment",
  "Piles Treatment",
  "Fistula Treatment",
  "Other (please specify)",
];

export default function BookAppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    otherService: "",
    date: "",
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, "")))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.service) newErrors.service = "Please select a service";
    if (formData.service === "Other (please specify)" && !formData.otherService.trim())
      newErrors.otherService = "Please specify the service";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const serviceID = "service_habzvn7"; // Replace with your EmailJS service ID
      const templateID = "template_ydeuhrx"; // Replace with your EmailJS template ID
      const publicKey = "fy809dMTqWWHb3HwU"; // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        service:
          formData.service === "Other (please specify)"
            ? formData.otherService
            : formData.service,
        date: formData.date,
        time: formData.time,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        otherService: "",
        date: "",
        time: "",
        message: "",
      });

      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split("T")[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 "
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none overflow-y-auto mt-14"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8 pointer-events-auto">
              {/* Header */}
              <div className="bg-gradient-to-r from-turquoise-500 to-turquoise-600 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Book Appointment</h2>
                  <p className="text-turquoise-50 text-xs mt-0.5">
                    Schedule your consultation with our experts
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors flex-shrink-0"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-5 space-y-4 max-h-[calc(90vh-120px)] overflow-y-auto">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-1.5">
                    <User className="h-4 w-4 text-turquoise-600" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-3.5 py-2.5 rounded-lg border ${
                      errors.name
                        ? "border-red-300 focus:ring-red-500"
                        : "border-stone-300 focus:ring-turquoise-500"
                    } focus:outline-none focus:ring-2 transition-all text-sm`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-1.5">
                      <Phone className="h-4 w-4 text-turquoise-600" />
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      className={`w-full px-3.5 py-2.5 rounded-lg border ${
                        errors.phone
                          ? "border-red-300 focus:ring-red-500"
                          : "border-stone-300 focus:ring-turquoise-500"
                      } focus:outline-none focus:ring-2 transition-all text-sm`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-1.5">
                      <Mail className="h-4 w-4 text-turquoise-600" />
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg border ${
                        errors.email
                          ? "border-red-300 focus:ring-red-500"
                          : "border-stone-300 focus:ring-turquoise-500"
                      } focus:outline-none focus:ring-2 transition-all text-sm`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-1.5">
                    <FileText className="h-4 w-4 text-turquoise-600" />
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 rounded-lg border ${
                      errors.service
                        ? "border-red-300 focus:ring-red-500"
                        : "border-stone-300 focus:ring-turquoise-500"
                    } focus:outline-none focus:ring-2 transition-all bg-white text-sm h-11 appearance-none cursor-pointer
                    bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27m6 8 4 4 4-4%27/%3e%3c/svg%3e')] 
                    bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-10`}
                    size="1"
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-xs mt-1">{errors.service}</p>
                  )}
                </div>

                {/* Other Service Input (conditional) */}
                {formData.service === "Other (please specify)" && (
                  <div>
                    <label className="text-sm font-medium text-stone-700 mb-1.5 block">
                      Please specify the service <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="otherService"
                      value={formData.otherService}
                      onChange={handleChange}
                      placeholder="Type your service requirement"
                      className={`w-full px-3.5 py-2.5 rounded-lg border ${
                        errors.otherService
                          ? "border-red-300 focus:ring-red-500"
                          : "border-stone-300 focus:ring-turquoise-500"
                      } focus:outline-none focus:ring-2 transition-all text-sm`}
                    />
                    {errors.otherService && (
                      <p className="text-red-500 text-xs mt-1">{errors.otherService}</p>
                    )}
                  </div>
                )}

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-1.5">
                      <Calendar className="h-4 w-4 text-turquoise-600" />
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      className={`w-full px-3.5 py-2.5 rounded-lg border ${
                        errors.date
                          ? "border-red-300 focus:ring-red-500"
                          : "border-stone-300 focus:ring-turquoise-500"
                      } focus:outline-none focus:ring-2 transition-all text-sm cursor-pointer
                      [&::-webkit-calendar-picker-indicator]:cursor-pointer
                      [&::-webkit-calendar-picker-indicator]:opacity-70
                      [&::-webkit-calendar-picker-indicator]:hover:opacity-100`}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-stone-700 mb-1.5">
                      <Clock className="h-4 w-4 text-turquoise-600" />
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg border ${
                        errors.time
                          ? "border-red-300 focus:ring-red-500"
                          : "border-stone-300 focus:ring-turquoise-500"
                      } focus:outline-none focus:ring-2 transition-all text-sm cursor-pointer
                      [&::-webkit-calendar-picker-indicator]:cursor-pointer
                      [&::-webkit-calendar-picker-indicator]:opacity-70
                      [&::-webkit-calendar-picker-indicator]:hover:opacity-100`}
                    />
                    {errors.time && (
                      <p className="text-red-500 text-xs mt-1">{errors.time}</p>
                    )}
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="text-sm font-medium text-stone-700 mb-1.5 block">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Any specific concerns or questions..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:ring-turquoise-500 focus:outline-none focus:ring-2 transition-all resize-none text-sm"
                  />
                </div>

                {/* Submit Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2.5 rounded-lg text-sm">
                    ✓ Appointment request sent successfully! We'll contact you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2.5 rounded-lg text-sm">
                    ✗ Failed to send request. Please try again or call us directly.
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-5 py-2.5 rounded-lg border-2 border-stone-300 text-stone-700 font-semibold hover:bg-stone-50 transition-colors text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-5 py-2.5 rounded-lg bg-gradient-to-r from-turquoise-500 to-turquoise-600 hover:from-turquoise-600 hover:to-turquoise-700 text-white font-semibold shadow-lg shadow-turquoise-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Book Appointment
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
