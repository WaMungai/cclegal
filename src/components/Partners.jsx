import { useState } from "react";
import chegeb from "../assets/chegeb.jpeg";
import cheges from "../assets/cheges.jpeg";

const partners = [
  {
    name: "Brian Chege Kanyuku",
    role: "Founding Partner",
    title: "Advocate of the High Court of Kenya",
    email: "bchege@cclegal.co.ke",
    phone: "+254 708 032 595",
    image: chegeb,
    bio: `Brian specializes in banking, real estate, and construction law, with extensive experience in conveyancing, property development, banking law, and complex commercial transactions.`,
    achievements: [
      "Secured KES 33M in bank financing for a school startup",
      "Represented a developer in a KES 3B residential project",
      "Registered and licensed trademarks valued at over KES 12M",
      "Established Intellectual Property departments at two previous law firms",
      "Successfully defended a KES 5M insurance claim against an insurance company",
    ],
  },
  {
    name: "Samuel Chege Mukui",
    role: "Founding Partner",
    title: "Advocate of the High Court of Kenya",
    email: "schege@cclegal.co.ke",
    phone: "+254 719 500 900",
    image: cheges,
    bio: `Samuel specializes in commercial and technology law, with deep expertise in data protection, intellectual property, regulatory compliance, and cross-border legal advisory.`,
    achievements: [
      "Advised on a USD 1.6M conveyancing transaction",
      "Led debt recovery strategies totaling over USD 1M",
      "Conducted legal due diligence for seed and pre-seed venture investments",
      "Developed compliance and risk mitigation frameworks for investors",
      "Led GTM-aligned legal strategies supporting early-stage venture growth",
    ],
  },
];

function PartnerCard({ partner }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl p-6 bg-white shadow-sm">
      <div className="bg-gray-50 mb-4">
        <img src={partner.image} alt={partner.name} className="w-full h-64 object-contain" />
      </div>
      <h3 className="text-xl font-semibold">{partner.name}</h3>
      <p className="text-sm text-gray-600 mt-2">{partner.bio}</p>
      <p className="text-sm font-medium mt-3">{partner.role} · {partner.title}</p>
      <p className="text-sm mt-2">📧 {partner.email} <br /> 📞 {partner.phone}</p>
      <button onClick={() => setOpen(!open)} className="mt-4 text-sm font-semibold text-[#D4AF37]">
        {open ? "Hide Notable Achievements" : "View Notable Achievements"}
      </button>
      {open && (
        <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
          {partner.achievements.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      )}
    </div>
  );
}

export default function Partners() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-10">Partners</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {partners.map((p, i) => <PartnerCard key={i} partner={p} />)}
      </div>
    </section>
  );
}
