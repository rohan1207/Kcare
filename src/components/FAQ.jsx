// import { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/outline";

// const QA = [
//   {
//     q: "What conditions can robotic surgery treat?",
//     a: "Robotic techniques are used across general surgery, urology, gynecology, colorectal, hernia repair, and more—especially for patients seeking smaller incisions, less pain, and faster recovery.",
//   },
//   {
//     q: "How does robotic surgery actually work?",
//     a: "Your surgeon controls robotic arms from a console. The system translates precise hand movements into micro‑motions, offering magnified 3D vision and sub‑millimeter accuracy.",
//   },
//   {
//     q: "Is robotic surgery safe?",
//     a: "Yes. It is surgeon‑led, FDA‑cleared, and supported by extensive clinical evidence. The technology enhances dexterity and control while maintaining strict safety checks.",
//   },
//   {
//     q: "How many sessions or visits will I need?",
//     a: "Most procedures are a single operation with pre‑op and post‑op visits. Many patients go home the same day or within 24 hours depending on the procedure.",
//   },
//   {
//     q: "Will I be conscious during surgery?",
//     a: "No. Procedures are typically performed under anesthesia. You’ll be monitored continuously and wake up in recovery with a care plan for comfort and mobility.",
//   },
//   {
//     q: "How quickly can I return to normal activities?",
//     a: "Because incisions are small, many patients experience less pain and resume light activities in days, with full recovery guided by your surgeon’s instructions.",
//   },
// ];

// export default function FAQ() {
//   const [open, setOpen] = useState(0); // first expanded

//   return (
//     <section className="relative isolate py-20 md:py-28 bg-slate-900">
//       <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 lg:grid-cols-2 lg:px-8">
//         {/* Left: heading + buttons */}
//         <div>
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-cyan-400/10 mb-6">
//             <span className="text-cyan-200 text-sm font-light tracking-wide">Common Questions</span>
//           </div>
//           <h2 className="font-display text-4xl leading-tight text-white/90 sm:text-5xl">
//             Your Questions,
//             <br /> Answered
//           </h2>
//           <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 font-light">
//             Find answers to common questions about robotic surgery, recovery, and our patient-centric approach to care.
//           </p>
//           <div className="mt-10 flex flex-wrap gap-4">
//             <a
//               href="/book"
//               className="rounded-full bg-cyan-600/90 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-cyan-700/90"
//             >
//               Schedule a Consultation
//             </a>
//           </div>
//         </div>

//         {/* Right: accordion list */}
//         <div className="divide-y divide-white/10">
//           {QA.map((item, i) => {
//             const isOpen = i === open;
//             return (
//               <div key={i} className="py-6">
//                 <button
//                   className="flex w-full items-start justify-between gap-6 text-left"
//                   onClick={() => setOpen(isOpen ? -1 : i)}
//                   aria-expanded={isOpen}
//                 >
//                   <span className="text-lg font-light leading-snug text-white/90">
//                     {item.q}
//                   </span>
//                   <ChevronDownIcon
//                     className={`mt-1 h-6 w-6 flex-shrink-0 text-cyan-300 transition-transform ${
//                       isOpen ? "rotate-180" : "rotate-0"
//                     }`}
//                   />
//                 </button>
//                 {isOpen && (
//                   <p className="mt-4 max-w-3xl text-gray-300 font-light">{item.a}</p>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
