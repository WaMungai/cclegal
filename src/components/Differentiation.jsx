// src/components/Differentiation.jsx
import React from "react";
import { motion } from "framer-motion";

const differentiators = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We leverage technology, creativity and forward-thinking legal strategies to solve complex challenges.",
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "We uphold the highest ethical standards, transparent, principled, and trustworthy in all that we do.",
  },
  {
    number: "03",
    title: "Client-Centered Service",
    description:
      "We tailor every solution around our clients’ goals, offering clear guidance, open communication, and fast responsive support.",
  },
  {
    number: "04",
    title: "Impact & Sustainability",
    description:
      "We pursue work that delivers long-term value, supports social responsibility, and advances sustainable development.",
  },
  {
    number: "05",
    title: "Excellence",
    description:
      "We strive to consistently deliver high-quality, professional, and effective legal solutions.",
  },
];

export const Differentiation = () => {
  return (
    <section id="why-us" className="px-6 md:px-20 py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#101527]">Why Choose Us</h2>
        <p className="mt-4 text-gray-700 text-lg md:text-xl">
          At C&C Advocates LLP, we distinguish ourselves through our values, approach, and commitment to client success.
        </p>

        {/* Grid of differentiators */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            // Center the last row if it's incomplete
            const isLast = index === differentiators.length - 1 && differentiators.length % 3 !== 0;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`bg-[#101527] text-white p-6 rounded-xl shadow hover:shadow-lg transition ${
                  isLast ? "md:col-start-2" : ""
                }`}
              >
                <div className="text-[#D4AF37] text-2xl font-bold">{item.number}</div>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-100 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
