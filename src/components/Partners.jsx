// src/components/Partners.jsx
import { useState, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import chegeb from "../assets/chegeb.jpeg";
import cheges from "../assets/cheges.jpeg";

/* =========================
   PARTNERS DATA
========================= */
const partners = [
  {
    name: "Brian Chege Kanyuku",
    role: "Founding Partner",
    title: "Advocate of the High Court of Kenya",
    email: "bchege@cclegal.co.ke",
    phone: "+254 708 032 595",
    image: chegeb,
    bio: "Brian specializes in banking, real estate, and construction law, with extensive experience in conveyancing, property development, banking law, and complex commercial transactions.",
    achievements: [
      "Secured KES 33 Million in bank financing for a school startup, including perfection of securities and registration at the Lands and Companies Registries.",
      "Represented developer in a KES 3B ($24 Million USD) residential project, handling offers, sale agreements, contract negotiations with purchasers and financiers, and registration of transfers.",
      "Registered and protected trademarks for leading brands in oil manufacturing, entertainment, and hospitality, including a KES 12 Million licensed mark.",
      "Advised on trademark licensing, assignments, joint ventures, research collaborations, and tech transfers, ensuring IP strategies aligned with business growth.",
      "Established Intellectual Property departments at two previous law firms,building structures that still serve clients today.",
      "Represented clients in commercial disputes, insurance claims, employment, and debt recovery, including securing dismissal of a KES 5 Million claim against an insurance company.",
    ],
  },
  {
    name: "Samuel Chege Mukui",
    role: "Founding Partner",
    title: "Advocate of the High Court of Kenya",
    email: "schege@cclegal.co.ke",
    phone: "+254 719 500 900",
    image: cheges,
    bio: "Samuel specializes in commercial and technology law, with deep expertise in data protection, intellectual property, regulatory compliance, and cross-border legal advisory.",
    achievements: [
      "Advised on a successful conveyancing transaction valued at $1.6 Million USD.",
      "Led the strategy and execution for debt recovery on multiple debts totaling over $1 Million USD.",
      "Conducted comprehensive due diligence for seed and pre-seed venture investments, using both equity and debt instruments, with each investment cycle valued at $300,000 USD.",
      "Actively contributed to the achievement of Go-To-Market (GTM) targets across multiple ventures driving revenue growth and market penetration.",
      "Developed a developer due diligence framework, improving risk assessment and increasing client confidence.",
      "Managed investment compliance, investor agreements, and risk mitigation strategies.",
      "Led legal due diligence and regulatory compliance for early-stage investments which included equity and debt financing agreements,investor readiness and investment structuring.",
      "Streamlined compliance processes for diverse projects by developing tracking mechanism and reducing turnaround time for requests, which optimized efficiency and reduced potential liabilities.",
      
    ],
  },
];


const formatAchievement = (text) => {
  const regex = /((?:KES|\$)?\s?\d[\d,.]*\s?(?:Million|B|USD)?)/gi;
  return text.split(regex).map((part, i) =>
    regex.test(part) ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
  );
};


function PartnerCard({ partner }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="border rounded-xl p-6 bg-white shadow-sm text-left flex flex-col h-full">
      
      {/* Image */}
      <div className="bg-gray-50 mb-4">
        <img
          src={partner.image}
          alt={partner.name}
          className="w-full h-64 object-contain"
        />
      </div>

      {/* Name */}
      <h3 className="text-xl font-semibold">
        {partner.name}
      </h3>

      {/* Bio */}
      <p className="text-sm text-gray-600 mt-2">
        {partner.bio}
      </p>

      {/* Role */}
      <p className="text-sm font-medium mt-3">
        {partner.role} · {partner.title}
      </p>

      {/* Contact */}
      <p className="text-sm mt-2">
        📧 {partner.email}<br />
        📞 {partner.phone}
      </p>

      {/* Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="mt-4 text-sm font-semibold text-[#D4AF37] hover:underline self-start"
      >
        {open ? "Hide Notable Achievements" : "View Notable Achievements"}
      </button>

      {/* Animated Accordion */}
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? contentRef.current?.scrollHeight : 0,
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <ul className="mt-4 space-y-2 text-sm text-gray-700 pl-0">
          {partner.achievements.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#D4AF37] flex-shrink-0 mt-[2px]" />
              <span>{formatAchievement(item)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section
      id="partners"
      className="max-w-7xl mx-auto px-6 py-20 text-left"
    >
      <h2 className="text-center text-3xl font-semibold mb-10">
        Meet The Partners
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        {partners.map((partner, index) => (
          <PartnerCard key={index} partner={partner} />
        ))}
      </div>
    </section>
  );
}
