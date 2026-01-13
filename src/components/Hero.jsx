// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroimage from "../assets/heroimage.png";

export const Hero = () => {
  return (
    <header
      id="home"
      className="relative bg-[#101527] text-white px-6 md:px-20 py-36 md:py-48 flex items-center"
      style={{
        backgroundImage: `url(${heroimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Your Legal Edge In A Changing World
        </h1>
        <p className="mt-4 text-[#FFFFFFCC] text-lg md:text-xl">
          We provide practical, results-driven legal advice to help you navigate
          complex legal challenges with confidence and integrity.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#consultation"
            className="bg-[#D4AF37] text-[#101527] px-6 py-3 rounded font-semibold shadow hover:bg-[#c29d2f] transition"
          >
            Book a Consultation
          </a>
          <a
            href="#services"
            className="border-2 border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded font-semibold hover:bg-[#D4AF37] hover:text-[#101527] transition"
          >
            Explore Practice Areas
          </a>
        </div>
      </motion.div>
    </header>
  );
};
