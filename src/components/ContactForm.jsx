import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactForm({ formType = "appointment" }) {
  const [isWhatsApp, setIsWhatsApp] = useState(false);
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
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    // Appointment-specific validation
    if (formType === "appointment" && !formData.timeSlot) {
      newErrors.timeSlot = "Time slot is required";
    }
    
    // Enquiry-specific validation
    if (formType === "enquiry" && !formData.condition.trim()) {
      newErrors.condition = "Condition is required";
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

    let formattedMessage = "";
    if (formType === "appointment") {
      formattedMessage = `*New Appointment Request*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Time Slot:* ${formData.timeSlot}\n\n*Message:*\n${formData.message || "N/A"}`;
    } else {
      formattedMessage = `*New Enquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Condition:* ${formData.condition}\n\n*Message:*\n${formData.message || "N/A"}`;
    }
    
    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919890777456&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setStatus("Redirecting to WhatsApp...");
  };

  const inputClass = (field) =>
    `w-full p-3.5 bg-slate-50/70 border border-stone-200/80 rounded-lg text-sm font-light text-stone-800 placeholder-stone-500/90 focus:ring-1 focus:ring-turquoise-400 focus:border-turquoise-400 transition-colors duration-300 ${
      errors[field] ? "border-red-400" : ""
    }`;

  return (
    <div className="w-full">
      {/* Toggle */}
      <div className="flex items-center justify-center gap-2 mb-6 bg-slate-100/80 p-1.5 rounded-full">
        <button
          onClick={() => setIsWhatsApp(true)}
          className={`w-1/2 py-2.5 text-sm font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
            isWhatsApp ? "bg-white text-turquoise-700 shadow-sm" : "text-stone-600"
          }`}
        >
          <FaWhatsapp className="w-4 h-4" />
          Via WhatsApp
        </button>
        <button
          onClick={() => setIsWhatsApp(false)}
          className={`w-1/2 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
            !isWhatsApp ? "bg-white text-turquoise-700 shadow-sm" : "text-stone-600"
          }`}
        >
          Via Email
        </button>
      </div>

      <form
        onSubmit={isWhatsApp ? (e) => e.preventDefault() : handleSubmit}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} className={inputClass("name")} />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <input type="tel" name="phone" placeholder="Contact Number *" value={formData.phone} onChange={handleChange} className={inputClass("phone")} />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>
        <div>
          <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} className={inputClass("email")} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {formType === "appointment" ? (
          <div>
            <select 
              name="timeSlot" 
              value={formData.timeSlot} 
              onChange={handleChange} 
              className={inputClass("timeSlot")}
            >
              <option value="">Select Time Slot *</option>
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
            {errors.timeSlot && <p className="text-red-500 text-xs mt-1">{errors.timeSlot}</p>}
          </div>
        ) : (
          <div>
            <input type="text" name="condition" placeholder="Condition *" value={formData.condition} onChange={handleChange} className={inputClass("condition")} />
            {errors.condition && <p className="text-red-500 text-xs mt-1">{errors.condition}</p>}
          </div>
        )}

        <div>
          <textarea name="message" placeholder="Your Message (Optional)" value={formData.message} onChange={handleChange} className={`${inputClass("message")} h-28`}></textarea>
        </div>

        {isWhatsApp ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={sendToWhatsapp}
            className="w-full flex items-center justify-center gap-2 bg-turquoise-500 text-white py-3.5 rounded-lg hover:bg-turquoise-600 transition-all font-semibold shadow-lg shadow-turquoise-500/20"
          >
            <MessageSquare className="w-5 h-5" />
            {formType === "appointment" ? "Book via WhatsApp" : "Send via WhatsApp"}
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-turquoise-500 text-white py-3.5 rounded-lg hover:bg-turquoise-600 transition-all font-semibold shadow-lg shadow-turquoise-500/20"
          >
            <Send className="w-5 h-5" />
            {formType === "appointment" ? "Book Appointment" : "Send Enquiry"}
          </motion.button>
        )}
      </form>

      {status && <p className="mt-4 text-center text-sm text-turquoise-700">{status}</p>}
    </div>
  );
}
