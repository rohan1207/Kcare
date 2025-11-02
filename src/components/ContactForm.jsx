import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [isWhatsApp, setIsWhatsApp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

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
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`.trim();
    const mailtoLink = `mailto:contact@kcare.com?subject=${encodeURIComponent(`New Contact Form Submission from ${formData.name}`)}&body=${encodeURIComponent(emailBody)}&cc=${encodeURIComponent(formData.email)}`;
    
    window.location.href = mailtoLink;
    setStatus("Opening your email client...");
  };

  const sendToWhatsapp = () => {
    if (!validateForm()) return;

    const formattedMessage = `*New Appointment Request*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n\n*Message:*\n${formData.message}`;
    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919876543210&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setStatus("Redirecting to WhatsApp...");
  };

  const inputClass = (field) =>
    `w-full p-3.5 bg-slate-50/70 border border-stone-200/80 rounded-lg text-sm font-light text-stone-800 placeholder-stone-500/90 focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-colors duration-300 ${
      errors[field] ? "border-red-400" : ""
    }`;

  return (
    <div className="w-full">
      {/* Toggle */}
      <div className="flex items-center justify-center gap-2 mb-6 bg-slate-100/80 p-1.5 rounded-full">
        <button
          onClick={() => setIsWhatsApp(false)}
          className={`w-1/2 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
            !isWhatsApp ? "bg-white text-emerald-700 shadow-sm" : "text-stone-600"
          }`}
        >
          Via Email
        </button>
        <button
          onClick={() => setIsWhatsApp(true)}
          className={`w-1/2 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
            isWhatsApp ? "bg-white text-emerald-700 shadow-sm" : "text-stone-600"
          }`}
        >
          Via WhatsApp
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
            <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} className={inputClass("email")} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>
        <div>
          <input type="tel" name="phone" placeholder="Contact Number *" value={formData.phone} onChange={handleChange} className={inputClass("phone")} />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <textarea name="message" placeholder="Your Message... *" value={formData.message} onChange={handleChange} className={`${inputClass("message")} h-28`}></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        {isWhatsApp ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={sendToWhatsapp}
            className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-white py-3.5 rounded-lg hover:bg-emerald-600 transition-all font-semibold shadow-lg shadow-emerald-500/20"
          >
            <MessageSquare className="w-5 h-5" />
            Book via WhatsApp
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-white py-3.5 rounded-lg hover:bg-emerald-600 transition-all font-semibold shadow-lg shadow-emerald-500/20"
          >
            <Send className="w-5 h-5" />
            Book Appointment
          </motion.button>
        )}
      </form>

      {status && <p className="mt-4 text-center text-sm text-emerald-700">{status}</p>}
    </div>
  );
}
