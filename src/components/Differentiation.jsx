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
    <section id="why-us" className="px-6 md:px-20 py-20 bg-white relative">
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-3xl font-bold text-[#101527]">Why Choose Us</h2>
        <p className="mt-4 text-gray-700 text-lg md:text-xl">
          At C&C Advocates LLP, we distinguish ourselves through our values, approach, and commitment to client success.
        </p>

        {/* Top row: 01-03 */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center relative">
          {differentiators.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-[#101527] text-white p-6 rounded-xl shadow hover:shadow-lg hover:scale-[1.03] transition
                         w-full sm:w-72 md:w-72 flex flex-col justify-between relative"
            >
              <div>
                <div className="text-[#D4AF37] text-3xl md:text-4xl font-bold mb-2">{item.number}</div>
                <h3 className="mt-2 text-xl md:text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-100 text-sm md:text-base">{item.description}</p>
              </div>

              {/* Horizontal connecting line */}
              {index < 2 && (
                <div className="hidden md:block absolute top-10 right-[-50%] w-1/2 h-1 bg-[#D4AF37]"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom row: 04-05 centered */}
        <div className="mt-6 md:mt-12 flex justify-center gap-8 flex-wrap relative">
          {differentiators.slice(3).map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#101527] text-white p-6 rounded-xl shadow hover:shadow-lg hover:scale-[1.03] transition
                         w-full sm:w-72 md:w-72 flex flex-col justify-between relative"
            >
              <div>
                <div className="text-[#D4AF37] text-3xl md:text-4xl font-bold mb-2">{item.number}</div>
                <h3 className="mt-2 text-xl md:text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-100 text-sm md:text-base">{item.description}</p>
              </div>

              {/* Diagonal connecting line to top row */}
              <div
                className={`hidden md:block absolute -top-6 w-1/2 h-1 bg-[#D4AF37] ${
                  index === 0 ? "left-[-25%] rotate-[25deg]" : "right-[-25%] -rotate-[25deg]"
                }`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
