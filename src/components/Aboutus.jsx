import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

export const AboutUs = () => {
  return (
    <section id="aboutus" className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12">
        
        {/* Left side - Who We Are */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#101527]">Who We Are</h2>
          <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed">
            Welcome to <strong>C&C Advocates LLP</strong>, where we’re building a <em>different kind of law firm</em>—one that understands the pulse of modern business, technology, and society. 
          </p>
          <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed">We pair deep legal knowledge with fresh perspective, ensuring solutions that work now and set you up for the future.</p>
          <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
            At C&C, we’re not just lawyers; we’re long-term partners committed to unlocking opportunity, reducing risk, and enabling success.
          </p>
          {/* Decorative line */}
          <div className="mt-8 w-24 h-1 bg-[#D4AF37] rounded-full"></div>
        </div>

        {/* Right side - Mission & Vision */}
        <div className="md:w-1/2 flex flex-col gap-8">
          
          {/* Mission */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
            <FaBullseye className="text-[#D4AF37] text-4xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#101527]">Our Mission</h3>
              <p className="mt-2 text-gray-700">
                Empower clients with innovative, strategic legal solutions grounded in integrity and excellence.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
            <FaEye className="text-[#D4AF37] text-4xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#101527]">Our Vision</h3>
              <p className="mt-2 text-gray-700">
                To be the leading boutique law firm in Kenya, renowned for expertise, client dedication, and transformative impact.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
