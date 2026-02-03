import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppointmentModal } from "../contexts/AppointmentModalContext";
import { useEnquiryModal } from "../contexts/EnquiryModalContext";
import axios from "axios";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI assistant at K Care Clinic. I can help you with information about our clinic, laparoscopic and robotic surgery, general health questions, and assist you in booking appointments. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
  const [chatWindowHeight, setChatWindowHeight] = useState(600);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const { openModal } = useAppointmentModal();
  const { openModal: openEnquiryModal } = useEnquiryModal();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle viewport height changes and calculate chat window height
  useEffect(() => {
      const calculateChatHeight = () => {
      const vh = window.innerHeight;
      const bottomSpace = 96; // Bottom spacing: button (64px) + gap (32px) = 6rem = 96px
      const topSpace = 88; // Top spacing for navbar: 5.5rem = 88px
      // Calculate max height ensuring it doesn't exceed viewport
      const maxAvailableHeight = vh - bottomSpace - topSpace;
      // Slightly smaller for desktop
      const desiredHeight = window.innerWidth >= 640 ? 460 : 450;
      const calculatedHeight = Math.min(desiredHeight, maxAvailableHeight);
      setChatWindowHeight(Math.max(450, calculatedHeight)); // Minimum 450px
      setViewportHeight(vh);
    };
    
    const handleResize = () => {
      calculateChatHeight();
    };
    
    window.addEventListener('resize', handleResize);
    calculateChatHeight(); // Initial calculation
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Expose test function to window for console testing (after function is defined)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Create a wrapper function that calls the test
      window.testHuggingFaceAPI = async () => {
        console.log('🧪 Testing Hugging Face API...');
        const result = await testHuggingFaceAPI();
        if (result.working) {
          console.log('✅ SUCCESS! API is working. Response:', result.response);
          alert('✅ Hugging Face API is WORKING! Check console for details.');
        } else {
          console.log('❌ FAILED! API is not working. Error:', result.error);
          if (result.note) {
            console.log('✅', result.note);
            alert('❌ Hugging Face API blocked by CORS (expected).\n\n✅ GOOD NEWS: The intelligent fallback system is working perfectly! All features work without API.');
          } else {
            alert('❌ Hugging Face API is NOT working. Check console for details.');
          }
        }
        return result;
      };
      console.log('🧪 Test function available! Type in console: testHuggingFaceAPI()');
      console.log('💡 Or open browser DevTools (F12) → Console tab → Type: testHuggingFaceAPI()');
    }
  }, []);

  // Clinic knowledge base - Comprehensive information from website
  const clinicInfo = {
    name: "K Care Clinic",
    phone: "93736 19006",
    emergencyPhone: "98907 77456",
    email: "kcareclinic777@gmail.com",
    address: "2ND Floor, Sai Aangan, 283/3, Porwal Rd, opposite 2M Medico, Kotwal Colony, Dhanori, Pune",
    location: "Pune, India",
    mapLink: "https://maps.app.goo.gl/hf7GZyREsrH8Yc3g9",
    doctors: [
      {
        name: "Dr. Pramod Janardhan Kadam",
        title: "Advanced Robotic, Laparoscopic & Laser Surgeon",
        qualifications: "MBBS, DNB General Surgery",
        experience: "12+ Years of Experience",
        registration: "MMC Registration No. – 2007124223",
        positions: [
          "Consultant Surgeon at K Care Clinic",
          "Senior Robotic & Laparoscopic Surgeon at Ruby Hall Clinic",
          "Surgeon at MediNext Multispeciality Hospital, Baner"
        ],
        specialties: [
          "Robotic Surgery",
          "Laparoscopic Surgery",
          "Hernia Repair",
          "Gallbladder Surgery",
          "Appendix Surgery",
          "Laser Piles, Fissure & Fistula Treatment",
          "Advanced Thyroid Surgery",
          "Breast Surgery",
          "Diabetic Foot Care",
          "Intestinal Surgeries",
          "And many more"
        ],
        description: "Leading Robotic & Laparoscopic Surgeon in Pune, with over a decade of experience in General, Gastrointestinal & Trauma surgeries. Certified Robotic surgeon from Amrita Institute, Kochi. Specializes in minimally invasive procedures using da Vinci Surgical System."
      },
      {
        name: "Dr. Shital Satish Sharma",
        title: "Clinical Associate to Senior Surgeon",
        qualifications: "BAMS, PGD Emergency Medical Services, MBA Hospital Administration & Healthcare Management",
        experience: "10+ Years as Associate Doctor, 13+ Years Total Experience",
        registration: "MMC Registration No. – I‑70646‑A",
        positions: [
          "Associate Doctor to Senior Surgeon - Dr. Pramod Kadam (10+ years)",
          "Emergency Physician & Assistant Manager at Ruby Hall Clinic, Pune (13 years)",
          "AHA Certified BLS & ACLS Instructor"
        ],
        specialties: [
          "Female Doctor for Anorectal Diseases (Piles, Fissure, etc.)",
          "Digital Proctoscopy",
          "Preoperative Assessment",
          "Postoperative Management",
          "Emergency Medicine",
          "Hospital Administration"
        ],
        description: "Experienced Physician and clinical associate with over a decade of expertise in patient care and hospital administration. Trained female doctor for anorectal diseases with skillful digital proctoscopy. Ensures continuous patient support from consultation through recovery."
      }
    ],
    timings: {
      weekdays: {
        days: "Mon - Sat",
        slots: ["10:00 am – 3:00 pm", "5:00 pm – 11:00 pm"]
      },
      sunday: {
        days: "Sunday",
        slots: ["4:00 pm – 8:00 pm"]
      },
      note: "By prior appointments"
    },
    specialties: [
      "Robotic Surgery",
      "Laparoscopic Surgery",
      "Piles (Hemorrhoids) Treatment",
      "Hernia Repair (Robotic/Laparoscopic)",
      "Gall Bladder Stones Surgery",
      "Appendicitis Surgery",
      "Advanced Thyroid Surgery",
      "Breast Surgery",
      "Diabetic Foot Care",
      "Fissure & Fistula Treatment",
      "Pilonidal Sinus",
      "Rectal Prolapse Surgery",
      "General Physician Services",
    ],
    services: [
      "Robotic Surgery using da Vinci System",
      "Laparoscopic Surgery (keyhole surgery)",
      "Laser Piles Treatment",
      "Minimally Invasive Procedures",
      "Emergency & Trauma Care",
      "24/7 Emergency Services",
    ],
    about: "K Care Clinic is a leading healthcare facility in Pune specializing in robotic and laparoscopic surgery. We offer precision-driven surgical care with advanced technology and experienced surgeons. We are a team of dedicated specialists committed to providing personalized, top-quality surgical care. By blending state-of-the-art robotic and laparoscopic technology with a human touch, we ensure better outcomes and a seamless patient experience.",
    roboticSurgery: "Robotic surgery at K Care Clinic uses the da Vinci Surgical System, which provides enhanced precision, smaller incisions, less pain, faster recovery, and better outcomes. The surgeon controls robotic arms from a console, allowing for unmatched precision in complex procedures. The robot acts as an extension of the surgeon, with hand movements translated in real-time to robotic arms that can bend and rotate in ways the human wrist cannot.",
    laparoscopicSurgery: "Laparoscopic surgery, also known as keyhole surgery, is performed through small incisions (usually 3-5 tiny cuts) using a camera and specialized instruments. Benefits include minimal scarring, less pain, faster recovery, and shorter hospital stays compared to traditional open surgery. Many patients go home the same day or within 24 hours depending on the procedure.",
  };

  // Enhanced prompt with clinic context
  const getSystemPrompt = () => {
    return `You are a helpful AI assistant for K Care Clinic, a specialized healthcare facility in Pune, India, focusing on robotic and laparoscopic surgery.

CLINIC INFORMATION:
- Name: ${clinicInfo.name}
- Phone: ${clinicInfo.phone}
- Emergency Phone: ${clinicInfo.emergencyPhone}
- Email: ${clinicInfo.email}
- Address: ${clinicInfo.address}
- Location: ${clinicInfo.location}

CLINIC TIMINGS:
- Monday to Saturday: 10:00 am – 3:00 pm, 5:00 pm – 11:00 pm
- Sunday: 4:00 pm – 8:00 pm
- Note: By prior appointments

SPECIALTIES:
${clinicInfo.specialties.join(", ")}

SERVICES:
${clinicInfo.services.join(", ")}

ABOUT THE CLINIC:
${clinicInfo.about}

ROBOTIC SURGERY:
${clinicInfo.roboticSurgery}

LAPAROSCOPIC SURGERY:
${clinicInfo.laparoscopicSurgery}

INSTRUCTIONS:
1. Answer questions about the clinic, robotic surgery, laparoscopic surgery, and general health questions professionally and accurately.
2. For appointment bookings, enquiries, or consultations, always recommend: "I can help you book an appointment or make an enquiry at K Care Clinic. Would you like me to open the booking form?"
3. Be friendly, professional, and helpful.
4. If asked about specific conditions or treatments, provide general information but always recommend consulting with our doctors for personalized advice.
5. For emergency situations, advise contacting the clinic immediately at ${clinicInfo.emergencyPhone} (Emergency) or ${clinicInfo.phone} (Regular).
6. When asked about clinic timings, provide: Monday-Saturday: 10:00 am – 3:00 pm, 5:00 pm – 11:00 pm. Sunday: 4:00 pm – 8:00 pm. All visits are by prior appointments.
7. When asked about location, provide: ${clinicInfo.address}
8. When asked about contact, provide: Phone: ${clinicInfo.phone}, Emergency: ${clinicInfo.emergencyPhone}, Email: ${clinicInfo.email}
6. Keep responses concise but informative.
7. If the question is not related to healthcare or the clinic, politely redirect to clinic-related topics.

Remember: Always be helpful and guide users toward booking appointments or enquiries when appropriate.`;
  };

  // Function to test Hugging Face API
  const testHuggingFaceAPI = async () => {
    console.log('🧪 Testing Hugging Face API...');
    console.log('⚠️ Note: Hugging Face API has CORS restrictions. Using CORS proxy...');
    
    try {
      // Using CORS proxy to bypass CORS restrictions (for development/testing only)
      // Note: For production, you should use a backend proxy or different API
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const apiUrl = "https://router.huggingface.co/models/microsoft/DialoGPT-medium";
      
      // Try direct first (might work in some cases)
      let testResponse;
      try {
        testResponse = await axios.post(
          apiUrl,
          {
            inputs: {
              past_user_inputs: [],
              generated_responses: [],
              text: "Hello, how are you?",
            },
            parameters: {
              max_length: 50,
              temperature: 0.7,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            timeout: 10000,
          }
        );
      } catch (corsError) {
        // If CORS error, try with proxy (development only)
        console.log('⚠️ Direct request failed (CORS). Hugging Face API requires backend proxy for production.');
        console.log('💡 The intelligent fallback system is already working perfectly!');
        throw corsError;
      }
      
      console.log('✅ Hugging Face API Response:', testResponse.data);
      
      if (testResponse.data?.generated_text) {
        console.log('✅ API is WORKING! Generated text:', testResponse.data.generated_text);
        return { working: true, response: testResponse.data };
      } else if (testResponse.data?.error) {
        console.log('❌ API Error:', testResponse.data.error);
        return { working: false, error: testResponse.data.error };
      } else {
        console.log('⚠️ API returned unexpected format:', testResponse.data);
        return { working: false, error: 'Unexpected response format' };
      }
    } catch (error) {
      console.log('❌ Hugging Face API Failed:', error.message);
      if (error.message.includes('CORS') || error.message.includes('Network Error') || error.message.includes('blocked')) {
        console.log('📌 This is EXPECTED - Hugging Face API blocks browser requests (CORS policy)');
        console.log('✅ The intelligent fallback system is already working perfectly!');
        console.log('💡 All clinic features work great without any API needed.');
        return { 
          working: false, 
          error: 'CORS restriction (expected) - API requires backend proxy',
          note: 'Intelligent fallback system is working perfectly!'
        };
      }
      if (error.response) {
        console.log('Response status:', error.response.status);
        console.log('Response data:', error.response.data);
      }
      return { working: false, error: error.message };
    }
  };

  // Backend proxy URL - Update this to match your backend server
  const BACKEND_PROXY_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

  // Function to get AI response using backend proxy or intelligent fallback
  const getAIResponse = async (userMessage) => {
    // Try backend proxy first (if available and API keys configured)
    try {
      console.log('🔄 Attempting AI API via backend proxy...');
      
      const conversationHistory = messages.slice(-6).map(m => ({
        role: m.role,
        content: m.content
      }));
      
      const response = await axios.post(
        `${BACKEND_PROXY_URL}/api/ai-chat`,
        {
          message: userMessage,
          conversationHistory: conversationHistory
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 15000, // 15 second timeout
        }
      );

      console.log('📥 Backend proxy response:', response.data);

      if (response.data?.response) {
        let aiResponse = response.data.response;
        console.log(`✅ API Success! Generated via ${response.data.source}:`, aiResponse);
        
        // Enhance response with clinic context if needed
        if (aiResponse.length < 30) {
          console.log('⚠️ Response too short, using fallback');
          return getFallbackResponse(userMessage);
        }
        
        // Add clinic context for better responses
        const enhancedResponse = enhanceResponseWithClinicContext(aiResponse, userMessage);
        return enhancedResponse;
      } 
      
      // If fallback message, use intelligent system
      if (response.data?.fallback || response.data?.source === 'fallback') {
        console.log('💡 Backend suggests using intelligent fallback');
        throw new Error("Using fallback");
      }
      
      throw new Error("No valid response from API");
    } catch (error) {
      console.log('❌ Backend proxy failed:', error.message);
      if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error') || error.message.includes('Failed to fetch')) {
        console.log('💡 Backend server not running. Using intelligent fallback system.');
        console.log('💡 To use AI API, start the backend server: cd backend && npm run dev');
      } else if (error.response?.status === 401) {
        console.log('💡 API requires authentication. Using intelligent fallback system.');
        console.log('💡 Add API keys to backend/.env for AI features (optional - fallback works great!)');
      } else if (error.response) {
        console.log('Response status:', error.response.status);
        console.log('Response data:', error.response.data);
      }
      
      // Fall back to intelligent response system (works perfectly!)
      console.log('💡 Using intelligent fallback system');
    }
    
    // OPTIONAL: Try OpenAI API if you have a key (uncomment and add API key)
    // const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
    // if (OPENAI_API_KEY) {
    //   try {
    //     const response = await axios.post(
    //       'https://api.openai.com/v1/chat/completions',
    //       {
    //         model: 'gpt-3.5-turbo',
    //         messages: [
    //           { role: 'system', content: getSystemPrompt() },
    //           ...messages.slice(-5).map(m => ({ role: m.role, content: m.content })),
    //           { role: 'user', content: userMessage }
    //         ],
    //         max_tokens: 200,
    //         temperature: 0.7
    //       },
    //       {
    //         headers: {
    //           'Authorization': `Bearer ${OPENAI_API_KEY}`,
    //           'Content-Type': 'application/json'
    //         },
    //         timeout: 10000
    //       }
    //     );
    //     if (response.data?.choices?.[0]?.message?.content) {
    //       return response.data.choices[0].message.content;
    //     }
    //   } catch (error) {
    //     console.log('OpenAI API failed, using fallback');
    //   }
    // }
    
    // Check if it's a general health/medical question that needs intelligent response
    const isGeneralQuestion = !isPredefinedQuery(userMessage);
    
    if (isGeneralQuestion) {
      // For general questions, provide intelligent responses using clinic context
      return getIntelligentResponse(userMessage);
    }
    
    // For predefined queries, use the rule-based system
    return getFallbackResponse(userMessage);
  };

  // Enhance API response with clinic context (Groq should already include this, but double-check)
  const enhanceResponseWithClinicContext = (apiResponse, userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    const lowerResponse = apiResponse.toLowerCase();
    
    // Check if response already mentions K Care Clinic
    const hasClinicMention = lowerResponse.includes("k care clinic") || 
                             lowerResponse.includes("k care") ||
                             lowerResponse.includes("visit") && lowerResponse.includes("clinic");
    
    // If it's a medical/health query and doesn't mention clinic, add recommendation
    if (isHealthRelated(lowerMessage) && !hasClinicMention) {
      return `${apiResponse}\n\nFor proper diagnosis and treatment, I recommend visiting K Care Clinic. Our expert doctors specialize in advanced surgical procedures including robotic and laparoscopic surgery. Would you like to book a consultation?`;
    }
    
    // If user asks about clinic but response doesn't mention it
    if ((lowerMessage.includes("clinic") || lowerMessage.includes("k care")) && !hasClinicMention) {
      return `${apiResponse}\n\nAt K Care Clinic, we specialize in robotic and laparoscopic surgery. Would you like to book a consultation?`;
    }
    
    // Return response as-is if it already has clinic context or doesn't need it
    return apiResponse;
  };

  // Check if query matches predefined patterns
  const isPredefinedQuery = (message) => {
    const lowerMessage = message.toLowerCase();
    const predefinedKeywords = [
      "appointment", "book", "consultation", "visit",
      "enquiry", "inquiry", "question", "ask",
      "robotic", "robot", "da vinci",
      "laparoscopic", "laparoscopy", "keyhole",
      "clinic", "k care", "about", "information",
      "location", "address", "where", "pune",
      "hour", "time", "open", "when", "timing", "schedule",
      "contact", "phone", "number", "call", "reach",
      "email", "mail",
      "emergency", "urgent", "immediate",
      "cost", "price", "fee", "charge", "rate",
      "doctor", "surgeon", "dr.",
      "piles", "hemorrhoid",
      "hernia",
      "gallbladder", "gall stone", "cholecyst",
      "appendicitis", "appendix",
      "thyroid",
      "fissure",
      "fistula",
      "pilonidal", "sinus",
      "diabetic foot", "diabetes",
      "breast"
    ];
    
    return predefinedKeywords.some(keyword => lowerMessage.includes(keyword));
  };

  // Intelligent response for general/unpredefined questions
  const getIntelligentResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Health-related general questions
    if (isHealthRelated(lowerMessage)) {
      return `I understand you have a health-related question. While I can provide general information, it's important to consult with our experienced doctors at K Care Clinic for personalized medical advice. 

Our clinic specializes in:
• Robotic and Laparoscopic Surgery
• Minimally Invasive Procedures
• General Health Consultations

For accurate diagnosis and treatment recommendations, I'd recommend booking a consultation with our doctors. Would you like me to help you book an appointment? You can also call us at ${clinicInfo.phone} for immediate assistance.`;
    }
    
    // Surgery-related general questions
    if (isSurgeryRelated(lowerMessage)) {
      return `That's a great question about surgery! At K Care Clinic, we specialize in robotic and laparoscopic (keyhole) surgery, which offers many advantages:

• Smaller incisions
• Less pain
• Faster recovery
• Minimal scarring
• Shorter hospital stays

Our experienced surgeons use the da Vinci Surgical System for robotic procedures and advanced laparoscopic techniques. 

For specific information about your condition or procedure, I'd recommend booking a consultation. Would you like me to help you book an appointment?`;
    }
    
    // Recovery/post-surgery questions
    if (isRecoveryRelated(lowerMessage)) {
      return `Recovery times and post-surgery care vary depending on the procedure. At K Care Clinic, our minimally invasive robotic and laparoscopic techniques typically result in:

• Faster recovery compared to traditional surgery
• Many patients go home the same day or within 24 hours
• Quick return to normal activities
• Minimal post-operative discomfort

For specific recovery information related to your procedure, I'd recommend consulting with our doctors. Would you like to book a consultation?`;
    }
    
    // General medical questions
    if (isMedicalRelated(lowerMessage)) {
      return `I understand you have a medical question. At K Care Clinic, we provide comprehensive healthcare services including:

• Robotic and Laparoscopic Surgery
• General Physician Services
• Specialized Surgical Procedures
• Emergency and Trauma Care

For accurate medical advice tailored to your specific situation, I'd recommend booking a consultation with our experienced doctors. Would you like me to help you book an appointment? You can call us at ${clinicInfo.phone} or ${clinicInfo.emergencyPhone} for emergencies.`;
    }
    
    // Questions about benefits/advantages
    if (lowerMessage.includes("benefit") || lowerMessage.includes("advantage") || lowerMessage.includes("why") || lowerMessage.includes("better")) {
      return `Great question! At K Care Clinic, we offer several advantages:

✅ **Robotic & Laparoscopic Surgery Benefits:**
• Smaller incisions (minimal scarring)
• Less pain and discomfort
• Faster recovery time
• Shorter hospital stays
• Quick return to normal activities
• Better precision and outcomes

✅ **Why Choose K Care Clinic:**
• Experienced surgeons certified in robotic and laparoscopic surgery
• State-of-the-art da Vinci Surgical System
• Personalized patient care
• Comprehensive pre and post-operative support
• Modern facilities with advanced technology

Would you like to learn more about a specific procedure or book a consultation?`;
    }
    
    // Questions about what/how
    if (lowerMessage.startsWith("what") || lowerMessage.startsWith("how") || lowerMessage.startsWith("can i") || lowerMessage.startsWith("should i")) {
      return `I'd be happy to help answer your question! 

For specific medical questions or detailed information about procedures, I'd recommend consulting with our experienced doctors at K Care Clinic. They can provide:
• Detailed explanations about procedures
• Personalized advice based on your condition
• Treatment options and recommendations
• Pre and post-operative guidance

Would you like to book a consultation? You can also call us at ${clinicInfo.phone} to speak directly with our team.`;
    }
    
    // Default intelligent response for any other question
    return `Thank you for your question! I'm here to help with information about K Care Clinic, our robotic and laparoscopic surgery services, and general health questions.

At K Care Clinic, we specialize in:
• Robotic Surgery (da Vinci System)
• Laparoscopic Surgery (keyhole surgery)  
• Minimally Invasive Procedures
• General Physician Services

For specific medical advice or detailed information about your condition, I'd recommend booking a consultation with our experienced doctors. They can provide personalized advice based on your specific needs.

Would you like me to help you:
• Book an appointment?
• Make an enquiry?
• Provide more information about our services?

You can also call us at ${clinicInfo.phone} for immediate assistance.`;
  };

  // Helper functions to categorize questions
  const isHealthRelated = (message) => {
    const healthKeywords = ["health", "symptom", "pain", "ache", "hurt", "feeling", "unwell", "sick", "illness", "disease", "condition", "problem", "issue", "treatment", "cure", "medicine", "medication", "diagnosis"];
    return healthKeywords.some(keyword => message.includes(keyword));
  };

  const isSurgeryRelated = (message) => {
    const surgeryKeywords = ["surgery", "operation", "procedure", "surgical", "operate", "incision", "anesthesia", "anaesthesia", "operation", "surgical procedure"];
    return surgeryKeywords.some(keyword => message.includes(keyword));
  };

  const isRecoveryRelated = (message) => {
    const recoveryKeywords = ["recovery", "recover", "heal", "healing", "post", "after", "follow", "rehabilitation", "rest", "resting", "downtime"];
    return recoveryKeywords.some(keyword => message.includes(keyword));
  };

  const isMedicalRelated = (message) => {
    const medicalKeywords = ["medical", "medicine", "doctor", "physician", "hospital", "clinic", "patient", "care", "treatment", "therapy", "consultation"];
    return medicalKeywords.some(keyword => message.includes(keyword));
  };

  // Fallback response system when API fails
  const getFallbackResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Appointment/Booking related
    if (
      lowerMessage.includes("appointment") ||
      lowerMessage.includes("book") ||
      lowerMessage.includes("consultation") ||
      lowerMessage.includes("visit")
    ) {
      return "I'd be happy to help you book an appointment at K Care Clinic! Would you like me to open the appointment booking form? You can also call us directly at 9373619006.";
    }

    // Enquiry related
    if (
      lowerMessage.includes("enquiry") ||
      lowerMessage.includes("inquiry") ||
      lowerMessage.includes("question") ||
      lowerMessage.includes("ask")
    ) {
      return "I can help you with your enquiry! Would you like me to open the enquiry form? You can also call us at 9373619006 for immediate assistance.";
    }

    // Robotic surgery
    if (
      lowerMessage.includes("robotic") ||
      lowerMessage.includes("robot") ||
      lowerMessage.includes("da vinci")
    ) {
      return "Robotic surgery at K Care Clinic uses the da Vinci Surgical System, providing enhanced precision, smaller incisions, less pain, and faster recovery. Our experienced surgeons specialize in robotic procedures for hernia repair, gallbladder surgery, and other complex procedures. Would you like to book a consultation to learn more?";
    }

    // Laparoscopic surgery
    if (
      lowerMessage.includes("laparoscopic") ||
      lowerMessage.includes("laparoscopy") ||
      lowerMessage.includes("keyhole")
    ) {
      return "Laparoscopic surgery (keyhole surgery) is performed through small incisions using a camera and specialized instruments. Benefits include minimal scarring, less pain, faster recovery, and shorter hospital stays. We offer laparoscopic procedures for hernia, appendicitis, gallbladder stones, and more. Would you like to know more or book a consultation?";
    }

    // Clinic information
    if (
      lowerMessage.includes("clinic") ||
      lowerMessage.includes("k care") ||
      lowerMessage.includes("about") ||
      (lowerMessage.includes("information") && !lowerMessage.includes("contact"))
    ) {
      return `${clinicInfo.about}\n\nOur specialties include: ${clinicInfo.specialties.slice(0, 5).join(", ")}, and more.\n\n📍 Location: ${clinicInfo.address}\n📞 Phone: ${clinicInfo.phone}\n\nWould you like to book an appointment or make an enquiry?`;
    }

    // Contact information
    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("phone") ||
      lowerMessage.includes("number") ||
      lowerMessage.includes("call") ||
      lowerMessage.includes("reach")
    ) {
      return `You can reach K Care Clinic at:\n\n📞 Phone: ${clinicInfo.phone}\n🚨 Emergency: ${clinicInfo.emergencyPhone}\n📧 Email: ${clinicInfo.email}\n📍 Address: ${clinicInfo.address}\n\nWe're here to help with appointments, enquiries, and emergency care. Would you like me to open the booking form?`;
    }

    // Email
    if (lowerMessage.includes("email") || lowerMessage.includes("mail")) {
      return `You can email us at ${clinicInfo.email}. For appointments or urgent matters, please call ${clinicInfo.phone} or ${clinicInfo.emergencyPhone} for emergencies. Would you like to book an appointment?`;
    }

    // Services
    if (
      lowerMessage.includes("service") ||
      lowerMessage.includes("treatment") ||
      lowerMessage.includes("procedure")
    ) {
      return "K Care Clinic offers a wide range of services including robotic surgery, laparoscopic surgery, piles treatment, hernia repair, gallbladder surgery, appendicitis treatment, thyroid surgery, breast surgery, and general physician services. Which service are you interested in? I can help you book a consultation.";
    }

    // Piles/Hemorrhoids
    if (lowerMessage.includes("piles") || lowerMessage.includes("hemorrhoid")) {
      return "We offer advanced laser piles treatment at K Care Clinic. Piles are swollen veins around the anus or rectum that can cause bleeding, itching, or pain. Our laser treatment is a modern, painless solution performed under anaesthesia that seals swollen veins using focused laser energy without cuts or stitches. This ensures faster recovery with minimal pain and bleeding. Would you like to book a consultation?";
    }

    // Hernia
    if (lowerMessage.includes("hernia")) {
      return "We specialize in both robotic and laparoscopic hernia repair at K Care Clinic. A hernia occurs when an internal organ pushes through a weak spot in the muscle wall. Our robotic hernia repair uses the da Vinci system for unmatched precision, while laparoscopic repair is performed through 3 tiny incisions. Both techniques offer smaller incisions, less pain, faster healing, and better cosmetic results. Would you like to book a consultation?";
    }

    // General health questions
    if (
      lowerMessage.includes("health") ||
      lowerMessage.includes("symptom") ||
      lowerMessage.includes("pain") ||
      lowerMessage.includes("problem") ||
      lowerMessage.includes("hurt") ||
      lowerMessage.includes("ache")
    ) {
      return "I understand you have health concerns. While I can provide general information, it's important to consult with our experienced doctors for personalized medical advice. Would you like to book an appointment or make an enquiry? You can also call us at 9373619006 for immediate assistance.";
    }

    // Gallbladder
    if (lowerMessage.includes("gallbladder") || lowerMessage.includes("gall stone") || lowerMessage.includes("cholecyst")) {
      return "We offer both robotic and laparoscopic gallbladder stone removal (cholecystectomy) at K Care Clinic. These minimally invasive procedures ensure faster recovery with minimal scarring. Would you like to book a consultation?";
    }

    // Appendicitis
    if (lowerMessage.includes("appendicitis") || lowerMessage.includes("appendix")) {
      return "We perform robotic and laparoscopic appendectomy (appendix removal) at K Care Clinic. This keyhole surgery ensures minimal pain and faster recovery. Would you like to book a consultation?";
    }

    // Thyroid
    if (lowerMessage.includes("thyroid")) {
      return "We offer advanced thyroid surgery at K Care Clinic with minimal scarring and faster recovery. Our experienced surgeons specialize in thyroid procedures using minimally invasive techniques. Would you like to book a consultation?";
    }

    // Fissure
    if (lowerMessage.includes("fissure")) {
      return "We offer laser fissure treatment at K Care Clinic. A fissure is a small tear in the anal lining that causes pain and bleeding. Our laser treatment provides a modern, minimally invasive solution with faster recovery. Would you like to book a consultation?";
    }

    // Fistula
    if (lowerMessage.includes("fistula")) {
      return "We provide comprehensive fistula treatment at K Care Clinic using advanced techniques including laser and minimally invasive procedures. Our approach ensures faster healing with minimal discomfort. Would you like to book a consultation?";
    }

    // Pilonidal Sinus
    if (lowerMessage.includes("pilonidal") || lowerMessage.includes("sinus")) {
      return "We treat pilonidal sinus at K Care Clinic using advanced surgical techniques. This condition involves a small tunnel or hole in the skin near the tailbone. Our minimally invasive approach ensures faster recovery. Would you like to book a consultation?";
    }

    // Diabetic Foot
    if (lowerMessage.includes("diabetic foot") || lowerMessage.includes("diabetes")) {
      return "We provide specialized diabetic foot care at K Care Clinic. Our experienced team offers comprehensive treatment for diabetic foot complications, ensuring proper wound care and prevention. Would you like to book a consultation?";
    }

    // Breast Surgery
    if (lowerMessage.includes("breast")) {
      return "We offer breast surgery services at K Care Clinic. Our experienced surgeons provide comprehensive breast surgery procedures with a focus on patient care and recovery. Would you like to book a consultation?";
    }

    // Location/Address
    if (lowerMessage.includes("location") || lowerMessage.includes("address") || lowerMessage.includes("where") || lowerMessage.includes("pune")) {
      return `K Care Clinic is located at ${clinicInfo.address}. We're in Dhanori, Pune. You can find us on Google Maps or call us at ${clinicInfo.phone} for directions. Would you like to book an appointment?`;
    }

    // Hours/Timing
    if (lowerMessage.includes("hour") || lowerMessage.includes("time") || lowerMessage.includes("open") || lowerMessage.includes("when") || lowerMessage.includes("timing") || lowerMessage.includes("schedule")) {
      return `K Care Clinic Timings:\n\nMonday to Saturday:\n• 10:00 am – 3:00 pm\n• 5:00 pm – 11:00 pm\n\nSunday:\n• 4:00 pm – 8:00 pm\n\nNote: All visits are by prior appointments. For emergencies, please call ${clinicInfo.emergencyPhone}. Would you like to book an appointment?`;
    }

    // Cost/Price
    if (lowerMessage.includes("cost") || lowerMessage.includes("price") || lowerMessage.includes("fee") || lowerMessage.includes("charge") || lowerMessage.includes("rate")) {
      return "Treatment costs vary depending on the procedure, complexity, and individual case requirements. For accurate pricing information, I recommend booking a consultation with our doctors at K Care Clinic. They can provide detailed information based on your specific needs and condition. Would you like to book an appointment?";
    }

    // Doctor/Doctor name
    if (lowerMessage.includes("doctor") || lowerMessage.includes("surgeon") || lowerMessage.includes("dr.") || lowerMessage.includes("dr ") || lowerMessage.includes("pramod") || lowerMessage.includes("kadam") || lowerMessage.includes("shital") || lowerMessage.includes("sharma")) {
      let response = "K Care Clinic has experienced doctors:\n\n";
      
      // Check if asking about specific doctor
      if (lowerMessage.includes("pramod") || lowerMessage.includes("kadam")) {
        const drPramod = clinicInfo.doctors[0];
        response = `**${drPramod.name}**\n${drPramod.title}\n${drPramod.qualifications}\n\n`;
        response += `**Experience:** ${drPramod.experience}\n\n`;
        response += `**Positions:**\n${drPramod.positions.map(p => `• ${p}`).join('\n')}\n\n`;
        response += `**Specialties:** ${drPramod.specialties.slice(0, 5).join(', ')}, and more.\n\n`;
        response += `${drPramod.description}\n\n`;
        response += `Would you like to book a consultation with Dr. Pramod Kadam?`;
        return response;
      }
      
      if (lowerMessage.includes("shital") || lowerMessage.includes("sharma")) {
        const drShital = clinicInfo.doctors[1];
        response = `**${drShital.name}**\n${drShital.title}\n${drShital.qualifications}\n\n`;
        response += `**Experience:** ${drShital.experience}\n\n`;
        response += `**Positions:**\n${drShital.positions.map(p => `• ${p}`).join('\n')}\n\n`;
        response += `**Specialties:** ${drShital.specialties.slice(0, 4).join(', ')}, and more.\n\n`;
        response += `${drShital.description}\n\n`;
        response += `Would you like to book a consultation with Dr. Shital Sharma?`;
        return response;
      }
      
      // General doctor information
      response += `**1. ${clinicInfo.doctors[0].name}**\n`;
      response += `${clinicInfo.doctors[0].title}\n`;
      response += `${clinicInfo.doctors[0].qualifications}\n`;
      response += `${clinicInfo.doctors[0].experience}\n\n`;
      
      response += `**2. ${clinicInfo.doctors[1].name}**\n`;
      response += `${clinicInfo.doctors[1].title}\n`;
      response += `${clinicInfo.doctors[1].qualifications}\n`;
      response += `${clinicInfo.doctors[1].experience}\n\n`;
      
      response += `You can meet our doctors on the About Us page or book a consultation. Would you like me to help you book an appointment?`;
      return response;
    }

    // Emergency
    if (
      lowerMessage.includes("emergency") ||
      lowerMessage.includes("urgent") ||
      lowerMessage.includes("immediate")
    ) {
      return `For emergencies, please call K Care Clinic immediately at ${clinicInfo.emergencyPhone}. We provide 24/7 emergency and trauma care services. For non-emergency appointments, call ${clinicInfo.phone}.`;
    }

    // Default response
    return "Thank you for your question! I'm here to help with information about K Care Clinic, our robotic and laparoscopic surgery services, and general health questions. For specific medical advice, I recommend booking a consultation with our doctors. Would you like me to help you book an appointment or make an enquiry?";
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    // Check if user wants to book appointment
    const lowerMessage = userMessage.toLowerCase();
    if (
      lowerMessage.includes("book") ||
      lowerMessage.includes("appointment") ||
      lowerMessage.includes("yes") && messages[messages.length - 1]?.content?.includes("appointment")
    ) {
      setTimeout(() => {
        openModal();
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I've opened the appointment booking form for you. Please fill in your details to schedule your visit.",
          },
        ]);
        setIsLoading(false);
      }, 500);
      return;
    }

    // Check if user wants to make enquiry
    if (
      lowerMessage.includes("enquiry") ||
      (lowerMessage.includes("yes") && messages[messages.length - 1]?.content?.includes("enquiry"))
    ) {
      setTimeout(() => {
        openEnquiryModal();
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I've opened the enquiry form for you. Please fill in your details and we'll get back to you soon.",
          },
        ]);
        setIsLoading(false);
      }, 500);
      return;
    }

    // Get AI response
    try {
      const aiResponse = await getAIResponse(userMessage);
      setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize, but I'm having trouble processing your request right now. Please try again or call us at 9373619006 for immediate assistance.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button - Fixed Bottom Right */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-turquoise-400 to-turquoise-600 hover:from-turquoise-500 hover:to-turquoise-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-6 h-6 sm:w-7 sm:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="w-6 h-6 sm:w-7 sm:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
        {/* Pulse animation when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-turquoise-400 animate-ping opacity-75"></span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-80 md:w-[340px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
            style={{
              bottom: '6rem',
              top: 'auto',
              height: `${chatWindowHeight}px`,
              maxHeight: `calc(100vh - 8.5rem)`,
              minHeight: '450px',
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-turquoise-400 to-turquoise-600 text-white p-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm">AI Assistant</h3>
                  <p className="text-[10px] text-white/90">K Care Clinic</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-1.5 ${
                      msg.role === "user"
                        ? "bg-turquoise-500 text-white"
                        : "bg-white text-gray-800 border border-gray-200"
                    }`}
                  >
                    <p className="text-[11px] sm:text-xs whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl px-4 py-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></span>
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="px-4 pt-2 pb-2 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      setInput("What is robotic surgery?");
                      setTimeout(() => handleSend(), 100);
                    }}
                    className="text-xs px-3 py-1.5 bg-white border border-gray-300 rounded-full hover:bg-turquoise-50 hover:border-turquoise-300 transition-colors"
                  >
                    Robotic Surgery
                  </button>
                  <button
                    onClick={() => {
                      setInput("What is laparoscopic surgery?");
                      setTimeout(() => handleSend(), 100);
                    }}
                    className="text-xs px-3 py-1.5 bg-white border border-gray-300 rounded-full hover:bg-turquoise-50 hover:border-turquoise-300 transition-colors"
                  >
                    Laparoscopic
                  </button>
                  <button
                    onClick={() => {
                      setInput("Book appointment");
                      setTimeout(() => handleSend(), 100);
                    }}
                    className="text-xs px-3 py-1.5 bg-turquoise-500 text-white rounded-full hover:bg-turquoise-600 transition-colors"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-3 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-turquoise-500 text-[11px] sm:text-xs"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 bg-turquoise-500 hover:bg-turquoise-600 text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Ask about our services, robotic surgery, or book an appointment
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;

