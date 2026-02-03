import { MapPin, Phone, Mail } from "lucide-react";

const infoItems = [
  {
    icon: MapPin,
    title: "Clinic Address",
    content: "2ND Floor, Sai Aangan, 283/3, Porwal Rd, opposite 2M Medico, Kotwal Colony, Dhanori, Pune",
    href: "https://maps.app.goo.gl/hf7GZyREsrH8Yc3g9",
  },
  {
    icon: Phone,
    title: "Contact Number",
    content: "93736 19006",
    href: "tel:+919373619006",
  },
  {
    icon: Phone,
    title: "Emergency Contact",
    content: "98907 77456",
    href: "tel:+919890777456",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "kcareclinic777@gmail.com - K Care Clinic",
    href: "mailto:kcareclinic777@gmail.com",
  },
];

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full">
      {infoItems.map((item, index) => (
        <div key={index} className="flex items-start gap-3 sm:gap-4">
          <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-turquoise-100/70 rounded-lg sm:rounded-xl flex items-center justify-center">
            <item.icon className="w-5 sm:w-6 h-5 sm:h-6 text-turquoise-600" />
          </div>
          <div>
            <h3 className="font-medium text-stone-800 text-base sm:text-lg">{item.title}</h3>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base text-stone-600/90 font-light hover:text-turquoise-600 transition-colors duration-300 break-words"
            >
              {item.content}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
