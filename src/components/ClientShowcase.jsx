import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import achieversdrivingschool from "../assets/achieversdrivingschool.png";
import alchemyventures from "../assets/alchemyventures.png";
import beebeejump from "../assets/beebeejump.png";
import byob from "../assets/byob.jpg";
import citylighters from "../assets/citylighters.png";
import CSG from "../assets/CSG.png";
import dhamini from "../assets/dhamini.png";
import dookasonline from "../assets/dookasonline.jpg";
import eusmsorg from "../assets/eusmsorg.png";
import femmelogistics from "../assets/femmelogistics.jpg";
import gfalogo from "../assets/gfalogo.jpg";
import keypointpowerlimited from "../assets/keypointpowerlimited.png";
import MIG from "../assets/MIG.png";
import nsigroup from "../assets/nsigroup.jpg";
import penielacumen from "../assets/penielacumen.png";
import PGLLogo from "../assets/PGLLogo.png";
import royalmotors from "../assets/royalmotors.jpg";
import RycultureLogo from "../assets/RycultureLogo.png";
import uphillservices from "../assets/uphillservices.png";

const clients = [
  { name: "Achievers Driving School", logo: achieversdrivingschool },
  { name: "Alchemy Ventures", logo: alchemyventures },
  { name: "Bring Your Own Bible", logo: byob },
  { name: "Bee Bee Jump", logo: beebeejump },
  { name: "City Lighters Church", logo: citylighters },
  { name: "CSG", logo: CSG },
  { name: "Dhamini Sacco", logo: dhamini },
  { name: "Dookas Online", logo: dookasonline },
  { name: "EUSMS Organization", logo: eusmsorg },
  { name: "Femme Logistics", logo: femmelogistics },
  { name: "Glorious Fountain Academy", logo: gfalogo },
  { name: "Keypoint Power Limited", logo: keypointpowerlimited },
  { name: "MIG", logo: MIG },
  { name: "NSI Group", logo: nsigroup },
  { name: "PGL", logo: PGLLogo },
  { name: "Ryculture Limited", logo: RycultureLogo },
  { name: "Royal Max Motors", logo: royalmotors },
  { name: "Uphill Engineering Services", logo: uphillservices },
  { name: "The Peniel Acumen", logo: penielacumen },
];

export default function ClientShowcase() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    containerRef.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  // Auto-scroll with pause on hover
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let interval;

    const start = () => {
      interval = setInterval(() => {
        container.scrollBy({ left: 1 });
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }, 25);
    };

    const stop = () => clearInterval(interval);

    start();
    container.addEventListener("mouseenter", stop);
    container.addEventListener("mouseleave", start);

    return () => {
      stop();
      container.removeEventListener("mouseenter", stop);
      container.removeEventListener("mouseleave", start);
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#101527] mb-4">
          Client Showcase
        </h2>
        <p className="text-gray-600 max-w-2xl mb-12">
          Trusted by startups, SMEs, and growing enterprises across multiple
          industries.
        </p>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2
          bg-white/90 backdrop-blur shadow rounded-full w-10 h-10
          items-center justify-center hover:bg-gray-100 transition z-10"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2
          bg-white/90 backdrop-blur shadow rounded-full w-10 h-10
          items-center justify-center hover:bg-gray-100 transition z-10"
        >
          <FaChevronRight />
        </button>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6 md:space-x-8"
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="flex-shrink-0 w-48 md:w-56 bg-white rounded-xl
              border border-gray-100 p-5 shadow-sm hover:shadow-md
              flex flex-col items-center text-center"
            >
              <div className="w-full h-24 md:h-28 mb-4 bg-gray-50 rounded-md flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-700 leading-snug">
                {client.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Line */}
        <p className="mt-10 text-sm text-gray-500">
         Your Legal Edge In A Changing World
        </p>
      </div>
    </section>
  );
}
