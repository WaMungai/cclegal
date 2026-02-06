import {useRef } from "react";
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
  const containerRef = useRef(null);
  const topRefs = useRef([]);
  const bottomRefs = useRef([]);


 

  return (
    <section
      id="why-us"
      className="relative bg-white py-20 px-6 md:px-20"
    >
      <div
        ref={containerRef}
        className="relative max-w-6xl mx-auto"
      >
       

        {/* HEADER */}
        <div className="text-center mb-14 relative z-20">
          <h2 className="text-3xl font-bold text-[#101527]">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            At C&C Advocates LLP, we distinguish ourselves through our
            values, approach, and commitment to client success.
          </p>
        </div>

        {/* TOP ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center relative z-20">
          {differentiators.slice(0, 3).map((item, i) => (
            <motion.div
              key={item.number}
              ref={(el) => (topRefs.current[i] = el)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#101527] text-white p-6 rounded-xl shadow hover:shadow-lg transition
                         w-full max-w-[280px] min-h-[260px] flex flex-col"
            >
              <div className="text-[#D4AF37] text-4xl font-bold mb-3">
                {item.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-100 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM ROW — INCREASED GAP */}
        <div className="mt-16 flex justify-center gap-14 relative z-20">
          {differentiators.slice(3).map((item, i) => (
            <motion.div
              key={item.number}
              ref={(el) => (bottomRefs.current[i] = el)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#101527] text-white p-6 rounded-xl shadow hover:shadow-lg transition
                         w-full max-w-[280px] min-h-[260px] flex flex-col"
            >
              <div className="text-[#D4AF37] text-4xl font-bold mb-3">
                {item.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-100 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
