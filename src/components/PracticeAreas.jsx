// src/components/PracticeAreasCTA.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBuilding, 
  FaFileContract, 
  FaLaptopCode, 
  FaShieldAlt, 
  FaLightbulb, 
  FaHome, 
  FaGavel, 
  FaUserTie, 
  FaUsers, 
  FaCoins, 
  FaHandsHelping, 
  FaPlane, 
  FaBalanceScale 
} from "react-icons/fa";

// All 16 practice areas
const services = [
  {
    title: "Corporate Law",
    icon: <FaBuilding className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    items: [
      "Business incorporation and company registration",
      "Corporate structuring and reorganizations",
      "Shareholder agreements and founder arrangements",
      "Board advisory and corporate governance compliance",
      "Company secretarial services and statutory filings",
      "Joint ventures and strategic alliances",
      "Corporate due diligence and risk audits",
      "Private equity and venture investment structuring",
      "Regulatory approvals under Kenyan corporate law",
      "Business exits, restructuring, and insolvency advisory",
    ],
  },
  {
    title: "Commercial Law",
    icon: <FaFileContract className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    items: [
      "Drafting and negotiation of commercial contracts",
      "Distribution, agency, and franchise agreements",
      "Strategic partnerships and supplier arrangements",
      "Contract enforcement and dispute advisory",
      "Business-to-business transactions and trading terms",
      "Commercial debt recovery support",
      "Tendering and procurement advisory",
      "Cross-border trade and commercial compliance",
      "Consumer protection and business regulatory advice",
      "General commercial legal advisory for SMEs and corporates",
    ],
  },
  {
    title: "Mergers & Acquisitions (M&A)",
    icon: <FaCoins className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    items: [
      "Acquisition structuring and transaction advisory",
      "Legal due diligence for buyers and investors",
      "Share purchase and asset purchase agreements",
      "Regulatory approvals and competition compliance",
      "Post-merger integration legal support",
      "Corporate restructuring for investments",
      "Management buyouts and exits",
      "Negotiation support for high-value transactions",
      "Investment term sheets and deal documentation",
      "Cross-border M&A advisory",
    ],
  },
  {
    title: "Technology Law & Digital Business",
    icon: <FaLaptopCode className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    items: [
      "Technology contracts (SaaS, licensing, outsourcing)",
      "Fintech and platform regulatory compliance",
      "AI governance and emerging tech advisory",
      "Software development and IP ownership agreements",
      "E-commerce and digital business structuring",
      "Startup legal frameworks and scaling advisory",
      "ICT regulatory licensing in Kenya",
      "Digital consumer protection compliance",
      "Cyberlaw advisory and internet governance",
      "Cross-border technology transactions",
    ],
  },
  {
    title: "Data Protection & Privacy Law",
    icon: <FaShieldAlt className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    items: [
      "Data Protection Act (Kenya) compliance audits",
      "Drafting privacy policies and data notices",
      "Data processing agreements (DPAs)",
      "Cross-border data transfer advisory",
      "Data breach response and incident management",
      "Staff and customer data governance frameworks",
      "Call centre compliance advisory",
      "Consent management and marketing compliance",
      "Regulatory engagement with ODPC",
      "Privacy-by-design support for tech products",
    ],
  },
  {
    title: "Intellectual Property (IP)",
    icon: <FaLightbulb className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    items: [
      "Trademark registration and brand protection",
      "Copyright advisory and enforcement",
      "IP licensing and commercialization agreements",
      "Trade secret protection strategies",
      "Technology transfer and IP portfolio management",
      "IP assignments and ownership structuring",
      "Anti-counterfeit enforcement support",
      "IP due diligence for investments",
      "Entertainment, media, and creative industry IP",
      "Franchise and brand licensing structures",
    ],
  },
  {
    title: "Real Estate & Conveyancing",
    icon: <FaHome className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    items: [
      "Property sale and purchase transactions",
      "Land due diligence and title verification",
      "Lease drafting, structuring, and registration",
      "Property financing and lender security support",
      "Real estate development project advisory",
      "Construction contract support",
      "Landlord and tenant dispute advisory",
      "Transfers, subdivisions, and change of user",
      "Property joint ventures and structuring",
      "Conveyancing for diaspora and cross-border clients",
    ],
  },
  {
    title: "Construction Law",
    icon: <FaBuilding className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    items: [
      "Construction contract drafting and negotiation",
      "Contractor and consultant dispute advisory",
      "Project compliance and regulatory approvals",
      "Performance security and risk allocation",
      "Delay, variation, and termination claims",
      "Real estate project structuring",
      "Developer financing documentation support",
      "EPC and infrastructure project advisory",
      "Construction litigation support",
      "Arbitration for construction disputes",
    ],
  },
  {
    title: "Banking, Finance & Securities",
    icon: <FaCoins className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    items: [
      "Loan and facility agreement drafting",
      "Security documentation (charges, debentures, mortgages)",
      "Perfection and registration of securities",
      "Project and asset finance advisory",
      "Financial regulatory compliance (CBK frameworks)",
      "Investor and lender due diligence",
      "Microfinance and credit structuring",
      "Structured finance and securitization support",
      "Debt restructuring and recovery advisory",
      "Fintech lending compliance",
    ],
  },
  {
    title: "Dispute Resolution & Litigation",
    icon: <FaGavel className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    items: [
      "Commercial and contractual disputes",
      "Land and property litigation",
      "Employment and labour disputes",
      "Family and succession disputes",
      "Judicial review and regulatory litigation",
      "Arbitration and mediation representation",
      "Pre-litigation risk assessment",
      "Debt recovery litigation",
      "Injunctions and urgent court applications",
      "Enforcement of judgments and settlements",
    ],
  },
  {
    title: "Employment & Labour Law",
    icon: <FaUserTie className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    items: [
      "Employment contract drafting and HR policies",
      "Workplace disciplinary and termination advisory",
      "Redundancy and restructuring compliance",
      "Employee disputes and litigation",
      "Labour audits and statutory compliance",
      "NDAs and restraint of trade clauses",
      "Workplace investigations",
      "Pension and benefits advisory",
      "Union and collective bargaining support",
      "Employment compliance training for employers",
    ],
  },
  {
    title: "Family Law",
    icon: <FaUsers className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    items: [
      "Divorce and separation advisory",
      "Child custody and maintenance disputes",
      "Matrimonial property agreements",
      "Prenuptial and postnuptial arrangements",
      "Domestic violence protection applications",
      "Family mediation services",
      "Adoption and guardianship processes",
      "Spousal maintenance claims",
      "Family property settlement agreements",
      "Representation in family court",
    ],
  },
  {
    title: "Succession & Estate Planning",
    icon: <FaBalanceScale className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    items: [
      "Wills drafting and estate structuring",
      "Probate and letters of administration",
      "Succession disputes and litigation",
      "Estate administration advisory",
      "Trust creation and family wealth planning",
      "Succession planning for business owners",
      "Asset distribution agreements",
      "Court representation in succession causes",
      "Guardianship and inheritance advisory",
      "Estate compliance and tax guidance",
    ],
  },
  {
    title: "Nonprofit / NGO & Social Impact Law",
    icon: <FaHandsHelping className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    items: [
      "NGO registration and structuring",
      "Governance frameworks for boards and trustees",
      "Grant agreements and donor compliance",
      "Tax exemptions and regulatory advisory",
      "Social enterprise legal models",
      "Partnership and collaboration agreements",
      "NGO employment and HR compliance",
      "Funding and donor risk advisory",
      "Cross-border NGO operations support",
      "Impact investment structuring",
    ],
  },
  {
    title: "Immigration & Expat Advisory",
    icon: <FaPlane className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    items: [
      "Work permits and Class D applications",
      "Investor permits and business immigration",
      "Residency and citizenship advisory",
      "Expat employment compliance support",
      "Immigration appeals and regulatory engagement",
      "Special passes and entry permits",
      "Immigration advisory for NGOs and corporates",
      "Cross-border mobility structuring",
      "Dependants and family immigration support",
      "Advisory for foreign founders entering Kenya",
    ],
  },
  {
    title: "Tax & Regulatory Compliance",
    icon: <FaFileContract className="text-[#D4AF37] w-12 h-12 md:w-14 md:h-14" />,
    items: [
      "Business tax compliance support",
      "Withholding tax advisory",
      "VAT structuring for SMEs",
      "Tax risk audits for transactions",
      "KRA disputes and objection support",
      "Regulatory licensing advisory",
      "Compliance frameworks for startups and NGOs",
      "Anti-money laundering (AML) compliance support",
      "Beneficial ownership filings",
      "General business regulatory advisory",
    ],
  },
];

export const PracticeAreas = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? services : services.slice(0, 9);

  return (
    <section id="practiceareas" className="px-6 md:px-20 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#101527]">Practice Areas & Services</h2>
        <p className="mt-4 text-gray-700 text-lg md:text-xl">
          We provide tailored legal support across a wide range of practice areas, focused on solving complex legal challenges and enabling sustainable, scalable growth.
        </p>

        {/* Grid of cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow hover:shadow-xl hover:scale-[1.02] transition transform p-6 flex flex-col items-start gap-4 cursor-pointer"
            >
              <div>{service.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#101527]">{service.title}</h3>
              <button
                onClick={() => setSelectedService(service)}
                className="mt-auto text-[#D4AF37] font-semibold group-hover:underline"
              >
                View Services &rarr;
              </button>
            </div>
          ))}
        </div>

        {/* View More / Show Less */}
        {services.length > 9 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-8 px-6 py-3 bg-[#D4AF37] text-[#101527] rounded font-semibold hover:bg-[#c29d2f] transition"
          >
            {showAll ? "Show Less" : "View More Practice Areas"}
          </button>
        )}
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
              className="bg-white rounded-xl max-w-3xl w-full p-6 overflow-y-auto max-h-[90vh]"
            >
              <h3 className="text-2xl font-bold text-[#101527]">{selectedService.title}</h3>
              <ul className="mt-4 list-disc list-inside text-gray-700 text-left space-y-1">
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
