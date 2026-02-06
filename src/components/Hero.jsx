// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroimage from "../assets/heroimage.png";

export const Hero = () => {
  return (
    <header
      id="home"
      className="relative w-full min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="pl-6 md:pl-24 max-w-2xl"
        >
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Your Legal Edge
            In A Changing World
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-lg sm:text-xl text-white/90">
            Practical, forward-thinking legal advice for businesses, innovators,
            and individuals navigating today’s legal landscape.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex justify-center items-center
                         bg-[#D4AF37] text-[#101527]
                         px-6 py-3 rounded-md
                         font-semibold
                         shadow-sm
                         hover:bg-[#c29d2f]
                         transition"
            >
              Book a Consultation
            </a>

            <a
              href="#practiceareas"
              className="inline-flex justify-center items-center
                         text-[#D4AF37]
                         border border-[#D4AF37]
                         px-6 py-3 rounded-md
                         font-semibold
                         hover:bg-[#D4AF37]
                         hover:text-[#101527]
                         transition"
            >
              View Practice Areas
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};
