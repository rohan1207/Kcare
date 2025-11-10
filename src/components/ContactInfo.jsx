import { MapPin, Phone, Mail } from "lucide-react";

const infoItems = [
  {
    icon: MapPin,
    title: "Clinic Address",
    content: "Porwal Rd, opposite 2M MEDICO, Kutwal Colony, Dhanori, Pune, Maharashtra 411047",
    href: "https://maps.app.goo.gl/yRiS3JvhrWyccoNJ7",
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
    content: "kcareclinic777@gmail.com",
    href: "mailto:kcareclinic777@gmail.com",
  },
];

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {infoItems.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-turquoise-100/70 rounded-xl flex items-center justify-center">
            <item.icon className="w-6 h-6 text-turquoise-600" />
          </div>
          <div>
            <h3 className="font-medium text-stone-800 text-lg">{item.title}</h3>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600/90 font-light hover:text-turquoise-600 transition-colors duration-300"
            >
              {item.content}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
