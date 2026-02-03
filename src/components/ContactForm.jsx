import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import servicesData from "../data/servicesData.json";

export default function ContactForm({ formType = "appointment" }) {
  const [isWhatsApp, setIsWhatsApp] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    timeSlot: "",
    condition: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const timeSlots = {
    morning: [
      "10:00 AM - 11:00 AM",
      "11:00 AM - 12:00 PM",
      "12:00 PM - 01:00 PM",
      "01:00 PM - 02:00 PM",
      "02:00 PM - 03:00 PM",
    ],
    evening: [
      "05:00 PM - 07:00 PM",
      "07:00 PM - 09:00 PM",
      "09:00 PM - 11:00 PM",
    ],
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    
    // Email validation only if provided (optional)
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    let emailBody = "";
    if (formType === "appointment") {
      emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nTime Slot: ${formData.timeSlot}\n\nMessage:\n${formData.message || "N/A"}`.trim();
    } else {
      emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCondition: ${formData.condition}\n\nMessage:\n${formData.message || "N/A"}`.trim();
    }
    
    const mailtoLink = `mailto:kcareclinic777@gmail.com?subject=${encodeURIComponent(`New ${formType === "appointment" ? "Appointment" : "Enquiry"} from ${formData.name}`)}&body=${encodeURIComponent(emailBody)}&cc=${encodeURIComponent(formData.email)}`;
    
    window.location.href = mailtoLink;
    setStatus("Opening your email client...");
  };

  const sendToWhatsapp = () => {
    if (!validateForm()) return;

    // Phone number with country code (India: 91)
    const phoneNumber = "919373619006";
    
    let whatsappMessage = "";
    if (formType === "appointment") {
      const timeSlotText = formData.timeSlot || "Not specified";
      const emailText = formData.email || "Not provided";
      const messageText = formData.message || "No additional message";
      
      whatsappMessage = `*New Appointment Request*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${emailText}
*Time Slot:* ${timeSlotText}

*Additional Message:*
${messageText}`;
    } else {
      const conditionText = formData.condition || "Not specified";
      const emailText = formData.email || "Not provided";
      const messageText = formData.message || "No additional message";
      
      whatsappMessage = `*New Enquiry*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${emailText}
*Condition:* ${conditionText}

*Message:*
${messageText}`;
    }
    
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

    setStatus("Redirecting to WhatsApp...");
  };

  const inputClass = (field) =>
    `w-full p-3 sm:p-3.5 bg-slate-50/70 border border-stone-200/80 rounded-lg text-xs sm:text-sm font-light text-stone-800 placeholder-stone-500/90 focus:ring-1 focus:ring-turquoise-400 focus:border-turquoise-400 transition-colors duration-300 ${
      errors[field] ? "border-red-400" : ""
    }`;

  return (
    <div className="w-full">
      {/* Toggle */}
      <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 bg-slate-100/80 p-1.5 rounded-full">
        <button
          onClick={() => setIsWhatsApp(true)}
          className={`w-1/2 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 ${
            isWhatsApp ? "bg-white text-turquoise-700 shadow-sm" : "text-stone-600"
          }`}
        >
          <FaWhatsapp className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
          Via WhatsApp
        </button>
        <button
          onClick={() => setIsWhatsApp(false)}
          className={`w-1/2 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${
            !isWhatsApp ? "bg-white text-turquoise-700 shadow-sm" : "text-stone-600"
          }`}
        >
          Via Email
        </button>
      </div>

      <form
        onSubmit={isWhatsApp ? (e) => e.preventDefault() : handleSubmit}
        className="space-y-3 sm:space-y-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} className={inputClass("name")} />
            {errors.name && <p className="text-red-500 text-[10px] sm:text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <input type="tel" name="phone" placeholder="Contact Number *" value={formData.phone} onChange={handleChange} className={inputClass("phone")} />
            {errors.phone && <p className="text-red-500 text-[10px] sm:text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>
        <div>
          <input type="email" name="email" placeholder="Email Address (Optional)" value={formData.email} onChange={handleChange} className={inputClass("email")} />
          {errors.email && <p className="text-red-500 text-[10px] sm:text-xs mt-1">{errors.email}</p>}
        </div>

        {formType === "appointment" ? (
          <div>
            <select 
              name="timeSlot" 
              value={formData.timeSlot} 
              onChange={handleChange} 
              className={inputClass("timeSlot")}
            >
              <option value="">Select Time Slot (Optional)</option>
              <optgroup label="Morning">
                {timeSlots.morning.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </optgroup>
              <optgroup label="Evening">
                {timeSlots.evening.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </optgroup>
            </select>
            {errors.timeSlot && <p className="text-red-500 text-[10px] sm:text-xs mt-1">{errors.timeSlot}</p>}
          </div>
        ) : (
          <div>
            <select 
              name="condition" 
              value={formData.condition} 
              onChange={handleChange} 
              className={inputClass("condition")}
            >
              <option value="">Select Condition / Service (Optional)</option>
              {servicesData.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
            {errors.condition && <p className="text-red-500 text-[10px] sm:text-xs mt-1">{errors.condition}</p>}
          </div>
        )}

        <div>
          <textarea name="message" placeholder="Your Message (Optional)" value={formData.message} onChange={handleChange} className={`${inputClass("message")} h-24 sm:h-28`}></textarea>
        </div>

        {isWhatsApp ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={sendToWhatsapp}
            className="w-full flex items-center justify-center gap-1.5 sm:gap-2 bg-turquoise-500 text-white py-2.5 sm:py-3 md:py-3.5 rounded-lg hover:bg-turquoise-600 transition-all font-semibold text-xs sm:text-sm md:text-base shadow-lg shadow-turquoise-500/20"
          >
            <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5" />
            {formType === "appointment" ? "Book via WhatsApp" : "Send via WhatsApp"}
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex items-center justify-center gap-1.5 sm:gap-2 bg-turquoise-500 text-white py-2.5 sm:py-3 md:py-3.5 rounded-lg hover:bg-turquoise-600 transition-all font-semibold text-xs sm:text-sm md:text-base shadow-lg shadow-turquoise-500/20"
          >
            <Send className="w-4 sm:w-5 h-4 sm:h-5" />
            {formType === "appointment" ? "Book Appointment" : "Send Enquiry"}
          </motion.button>
        )}
      </form>

      {status && <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-turquoise-700">{status}</p>}
    </div>
  );
}
