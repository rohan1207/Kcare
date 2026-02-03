import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Mail, FileText, Send, MessageSquare } from "lucide-react";

const CONDITIONS = [
  "Piles (Hemorrhoids)",
  "Hernia",
  "Gallbladder Stones",
  "Appendicitis",
  "Fissure",
  "Fistula",
  "Pilonidal Sinus",
  "Rectal Prolapse",
  "Phimosis",
  "Hydrocele",
  "Diabetic Foot",
  "Thyroid Surgery",
  "Breast Surgery",
  "Intestinal Surgeries",
  "Burn Injuries",
  "Cyst Removal",
  "Abscess Drainage",
  "Other (please specify)",
];

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    condition: "",
    otherCondition: "",
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Format WhatsApp message - ensure proper formatting
      const conditionText = formData.condition === "Other (please specify)"
        ? formData.otherCondition || "Not specified"
        : formData.condition || "Not specified";
      
      const emailText = formData.email || "Not provided";
      const messageText = formData.message || "No additional message";

      // Build WhatsApp message with proper formatting
      const whatsappMessage = `*New Enquiry*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${emailText}
*Condition:* ${conditionText}

*Message:*
${messageText}`;

      // Phone number with country code (India: 91)
      const phoneNumber = "919373619006";
      
      // Properly encode the message - handle special characters
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Detect platform
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      const isIOS = /iphone|ipad|ipod/i.test(userAgent.toLowerCase());
      const isAndroid = /android/i.test(userAgent.toLowerCase());
      
      let whatsappUrl;
      
      if (isMobile) {
        // Mobile devices - use native app protocol
        if (isIOS) {
          // iOS: Use whatsapp:// protocol
          whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
        } else if (isAndroid) {
          // Android: Use whatsapp:// protocol
          whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
        } else {
          // Other mobile - use web API
          whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        }
      } else {
        // Desktop/Web - use web.whatsapp.com
        whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
      }

      // Open WhatsApp with message
      if (isMobile && (isIOS || isAndroid)) {
        // For mobile native apps, try direct navigation first
        try {
          window.location.href = whatsappUrl;
          // Fallback to web version after a delay if native doesn't open
          setTimeout(() => {
            const webFallback = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
            window.open(webFallback, '_blank');
          }, 2000);
        } catch (err) {
          // If native fails, use web version
          window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
        }
      } else {
        // Desktop or web - open in new tab/window
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }

      setSubmitStatus("success");
      
      // Reset form after a short delay
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          condition: "",
          otherCondition: "",
          message: "",
        });
      }, 1000);
      
    } catch (error) {
      console.error("WhatsApp Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none overflow-y-auto mt-10"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] my-auto pointer-events-auto flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-turquoise-500 to-turquoise-600 text-white px-5 py-3.5 rounded-t-2xl flex items-center justify-between flex-shrink-0">
                <div>
                  <h2 className="text-lg font-semibold">Send Enquiry</h2>
                  <p className="text-turquoise-50 text-xs mt-0.5">
                    Get in touch with us for any questions or concerns
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:bg-white/20 rounded-full p-1.5 transition-colors flex-shrink-0"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-5 space-y-3.5 overflow-y-auto flex-1">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-medium text-stone-700 mb-1">
                    <User className="h-3.5 w-3.5 text-turquoise-600" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-3 py-2 rounded-lg border ${
                      errors.name
                        ? "border-red-300 focus:ring-red-500"
                        : "border-stone-300 focus:ring-turquoise-500"
                    } focus:outline-none focus:ring-1 transition-all text-sm`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-0.5">{errors.name}</p>
                  )}
                </div>

                {/* Phone & Email */}
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-medium text-stone-700 mb-1">
                      <Phone className="h-3.5 w-3.5 text-turquoise-600" />
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      className={`w-full px-3 py-2 rounded-lg border ${
                        errors.phone
                          ? "border-red-300 focus:ring-red-500"
                          : "border-stone-300 focus:ring-turquoise-500"
                      } focus:outline-none focus:ring-1 transition-all text-sm`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-0.5">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-medium text-stone-700 mb-1">
                      <Mail className="h-3.5 w-3.5 text-turquoise-600" />
                      Email ID (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-turquoise-500 focus:outline-none focus:ring-1 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Condition Selection */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-medium text-stone-700 mb-1">
                    <FileText className="h-3.5 w-3.5 text-turquoise-600" />
                    Condition (Optional)
                  </label>
                  <select
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-turquoise-500 focus:outline-none focus:ring-1 transition-all bg-white text-sm h-10 appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27m6 8 4 4 4-4%27/%3e%3c/svg%3e')] bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-10"
                    size="1"
                  >
                    <option value="">Select a condition (optional)</option>
                    {CONDITIONS.map((condition) => (
                      <option key={condition} value={condition}>
                        {condition}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Other Condition Input (conditional) */}
                {formData.condition === "Other (please specify)" && (
                  <div>
                    <label className="text-xs font-medium text-stone-700 mb-1 block">
                      Please specify the condition <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="otherCondition"
                      value={formData.otherCondition}
                      onChange={handleChange}
                      placeholder="Type your condition"
                      className={`w-full px-3 py-2 rounded-lg border ${
                        errors.otherCondition
                          ? "border-red-300 focus:ring-red-500"
                          : "border-stone-300 focus:ring-turquoise-500"
                      } focus:outline-none focus:ring-1 transition-all text-sm`}
                    />
                    {errors.otherCondition && (
                      <p className="text-red-500 text-xs mt-0.5">{errors.otherCondition}</p>
                    )}
                  </div>
                )}

                {/* Your Message */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-medium text-stone-700 mb-1">
                    <MessageSquare className="h-3.5 w-3.5 text-turquoise-600" />
                    Your Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Tell us more about your enquiry..."
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-turquoise-500 focus:outline-none focus:ring-1 transition-all resize-none text-sm"
                  />
                </div>

                {/* Submit Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded-lg text-xs">
                    ✓ Enquiry sent successfully! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-xs">
                    ✗ Failed to send enquiry. Please try again or call us directly.
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 py-2 rounded-lg border-2 border-stone-300 text-stone-700 font-semibold hover:bg-stone-50 transition-colors text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-turquoise-500 to-turquoise-600 hover:from-turquoise-600 hover:to-turquoise-700 text-white font-semibold shadow-lg shadow-turquoise-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Enquiry
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
