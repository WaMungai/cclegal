// src/components/ClientShowcaseCarousel.jsx
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Example client data (add as many as needed)
const clients = [
  { name: "ABC Corporation", logo: "/assets/clients/abc-corp.png" },
  { name: "XYZ Tech Ltd", logo: "/assets/clients/xyz-tech.png" },
  { name: "Global NGO Initiative", logo: "/assets/clients/global-ngo.png" },
  { name: "Real Estate Ventures", logo: "/assets/clients/real-estate.png" },
  { name: "Finance Group", logo: "/assets/clients/finance-group.png" },
  { name: "Innovate Solutions", logo: "/assets/clients/innovate.png" },
  { name: "Bright Minds Ltd", logo: "/assets/clients/bright-minds.png" },
  { name: "Eco Sustainable", logo: "/assets/clients/eco.png" },
];

export default function ClientShowcase() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 relative">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Client Show Case & Testimonials
      </h2>

      {/* Scroll Arrows */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute top-1/2 left-0 transform -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 items-center justify-center z-10 hover:bg-gray-100 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 items-center justify-center z-10 hover:bg-gray-100 transition"
      >
        <FaChevronRight />
      </button>

      <div
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide flex space-x-6 md:space-x-8"
      >
        {clients.map((client, i) => (
          <motion.div
            key={client.name}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-shrink-0 w-48 md:w-56 bg-white rounded-lg p-6 shadow hover:shadow-lg cursor-pointer flex flex-col items-center"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 mb-4 flex items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-center">{client.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
