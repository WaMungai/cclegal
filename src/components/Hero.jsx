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
          className="px-6 sm:px-8 md:px-24 max-w-2xl"
        >
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug sm:leading-tight text-white text-left">
            Your Legal Edge<br />
            In A Changing World
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 text-left">
            Practical, forward-thinking legal advice for businesses, innovators,
            and individuals navigating today’s legal landscape.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-start gap-4 w-full">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto text-center sm:text-left
                         bg-[#D4AF37] text-[#101527]
                         px-4 sm:px-6 py-2 sm:py-3 rounded-md
                         font-semibold text-sm sm:text-base
                         shadow-sm hover:shadow-md
                         transition"
            >
              Book a Consultation
            </motion.a>

            <motion.a
              href="#practiceareas"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto text-center sm:text-left
                         text-[#D4AF37]
                         border border-[#D4AF37]
                         px-4 sm:px-6 py-2 sm:py-3 rounded-md
                         font-semibold text-sm sm:text-base
                         hover:bg-[#D4AF37]
                         hover:text-[#101527]
                         shadow-sm hover:shadow-md
                         transition"
            >
              View Practice Areas
            </motion.a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};
