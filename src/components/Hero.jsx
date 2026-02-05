// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroimage from "../assets/heroimage.png";

export const Hero = () => {
  return (
    <header
      id="home"
      className="relative bg-[#101527] text-white px-6 md:px-12 py-28 md:py-36"
      style={{
        backgroundImage: `url(${heroimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-12 items-center">

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Your Legal Edge <br className="hidden sm:block" />
            In A Changing World
          </h1>

       

         
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
           
            <a
              href="#contact"
              className="
                inline-flex justify-center items-center
                bg-[#D4AF37] text-[#101527]
                px-6 py-3 rounded-md
                font-semibold
                shadow-sm
                hover:bg-[#c29d2f]
                transition
              "
            >
              Book a Consultation
            </a>

            <a
              href="#practiceareas"
              className="
                inline-flex justify-center items-center
                text-[#D4AF37]
                border border-[#D4AF37]
                px-6 py-3 rounded-md
                font-semibold
                hover:bg-[#D4AF37]
                hover:text-[#101527]
                transition
              "
            >
              View Practice Areas
            </a>
          </div>

       
        </motion.div>

        {/* About card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            bg-white/5 backdrop-blur-sm
            border border-white/10
            rounded-xl
            p-6 sm:p-8
            w-full
          "
        >
          <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
            About C&amp;C Advocates LLP
          </span>

          <div className="mt-4 space-y-4 text-[#FFFFFFCC] text-sm sm:text-base leading-relaxed">
            <p>
              Welcome to{" "}
              <span className="text-white font-medium">
                C&amp;C Advocates LLP
              </span>
              , a modern law firm attuned to the realities of business,
              technology, and society.
            </p>

            <p>
              We combine deep legal knowledge with a fresh, commercial
              perspective to deliver solutions that work today — and prepare
              you for tomorrow.
            </p>

            <p>
              By cutting through legal clutter, we help our clients move
              faster, with clarity and confidence.
            </p>
            <p>
              At C&C, we’re not just lawyers; we’re long-term partners committed to
              unlocking opportunity, reducing risk, and enabling success.
            </p>
          </div>


        </motion.div>

      </div>
    </header>
  );
};
