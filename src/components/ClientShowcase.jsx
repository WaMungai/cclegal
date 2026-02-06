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
  { name: "Glorious Fountain Academy", logo:gfalogo },
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
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

 
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      container.scrollBy({ left: 1, behavior: "smooth" });

      // Loop back to start
      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0;
      }
    }, 20); // smaller = smoother & faster

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 relative">
      <h2 className="text-4xl md:text-5xl font-bold text-[#101527]">
        Client Showcase
      </h2>

      {/* Scroll Arrows */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 items-center justify-center z-10 hover:bg-gray-100 transition"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 items-center justify-center z-10 hover:bg-gray-100 transition"
      >
        <FaChevronRight />
      </button>

      <div
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide flex space-x-6 md:space-x-8"
      >
        {clients.map((client) => (
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
                onError={(e) =>
                  (e.currentTarget.src = "/assets/placeholder.png")
                }
              />
            </div>
            <h3 className="font-semibold text-center">{client.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
