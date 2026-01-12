// src/components/PracticeAreasCTA.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBuilding, 
  FaLaptopCode, 
  FaMoneyBillWave, 
  FaHome, 
  FaHandsHelping, 
  FaGavel 
} from "react-icons/fa";

const services = [
  {
    title: "Corporate & Commercial Law",
    icon: <FaBuilding className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    description:
      "From formation and governance to operational structuring and transactions, we provide full corporate and commercial support.",
    items: [
      "Business formation and restructuring",
      "Mergers & acquisitions (M&A)",
      "Shareholder agreements and joint ventures",
      "Commercial contracts and strategic partnerships",
      "Corporate governance and compliance",
      "Regulatory licensing and approvals",
    ],
  },
  {
    title: "Technology, Data Protection & Intellectual Property",
    icon: <FaLaptopCode className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    description:
      "Protect your technology, ensure compliance, and unlock full value from your IP and data assets.",
    items: [
      "Technology contracts (SaaS, licensing)",
      "Data protection & privacy compliance",
      "Cybersecurity & breach response",
      "Platform, app & AI compliance reviews",
      "Trademark & copyright registration",
      "IP licensing, enforcement & commercialization",
      "Portfolio management & technology transfer",
      "Protection of trade secrets & proprietary assets",
      "Securitization and banking documentation for risk-aware, regulator-compliant transactions",
    ],
  },
  {
    title: "Banking, Finance & Securitization",
    icon: <FaMoneyBillWave className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    description:
      "We ensure risk-aware, regulator-compliant transactions across lending, securitization, and project finance.",
    items: [
      "Loan and facility agreements",
      "Securitization and perfection of securities",
      "Debentures, charges, mortgages",
      "Financial regulatory compliance",
      "Project and asset finance",
    ],
  },
  {
    title: "Real Estate, Construction & Conveyancing",
    icon: <FaHome className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    description:
      "Supporting developers, buyers, lenders, and landowners in clean, compliant, and enforceable real estate transactions.",
    items: [
      "Property acquisition and sales",
      "Land due diligence and title verification",
      "Lease structuring and registration",
      "Real estate project development",
      "Construction advisory and compliance",
    ],
  },
  {
    title: "Nonprofit, NGO & Social Impact",
    icon: <FaHandsHelping className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    description:
      "We help mission-driven organizations build strong, compliant, and sustainable structures to focus on impact.",
    items: [
      "NGO registration & structuring",
      "Legal & tax compliance",
      "Grant contracting and funding agreements",
      "Governance frameworks for boards & trustees",
      "Partnership & collaboration agreements",
      "Funding & grants advisory",
      "Social enterprise legal models",
    ],
  },
  {
    title: "Dispute Resolution & Litigation",
    icon: <FaGavel className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    description:
      "Pragmatic, results-driven representation in commercial, property, family, employment, and regulatory disputes.",
    items: [
      "Commercial and contractual disputes",
      "Employment litigation",
      "Family law & Succession",
      "Land and property disputes",
      "Alternative dispute resolution (ADR)",
      "Risk assessment and pre-litigation advisory",
    ],
  },
];

export const PracticeAreas = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="px-6 md:px-20 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#101527]">Practice Areas</h2>
        <p className="mt-4 text-gray-700 text-lg md:text-xl">
          We provide tailored legal support across a wide range of practice areas, focused on solving complex legal challenges and enabling sustainable, scalable growth.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow hover:shadow-xl hover:scale-[1.02] transition transform p-6 flex flex-col items-start gap-4 cursor-pointer"
            >
              <div>{service.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#101527]">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
              <button
                onClick={() => setSelectedService(service)}
                className="mt-auto text-[#D4AF37] font-semibold group-hover:underline"
              >
                View Services &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl max-w-lg w-full p-6 overflow-y-auto max-h-[90vh]"
            >
              <h3 className="text-2xl font-bold text-[#101527]">{selectedService.title}</h3>
              <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
                {selectedService.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedService(null)}
                className="mt-6 bg-[#D4AF37] text-[#101527] px-4 py-2 rounded font-semibold hover:bg-[#c29d2f] transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
