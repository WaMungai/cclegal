import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/cclegallogo.png";

// Scroll helper
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    //{ name: "Home", href: "#home" },
    { name: "About Us", href: "#aboutus" },
    //{ name: "Why Us", href: "#whyus" },
    { name: "Practice Areas", href: "#practiceareas" },
    { name: "Team", href: "#partners" },
    { name: "Insights", href: "/blog" },
    { name: "Contact Us", href: "#footer" },
  ];

  // Sticky CTA on scroll
  useEffect(() => {
    const handleScroll = () => setShowStickyCTA(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  const renderLink = (link) => {
    const isSectionLink = link.href.startsWith("#");
    const baseClasses = "text-[#101527] font-medium whitespace-nowrap relative transition-all";
    const hoverUnderline = "hover:border-b-2 hover:border-[#D4AF37]";

    return isSectionLink ? (
      <button
        onClick={() => handleSectionClick(link.href.substring(1))}
        className={`${baseClasses} ${hoverUnderline} pb-1`}
      >
        {link.name}
      </button>
    ) : (
      <Link
        to={link.href}
        className={`${baseClasses} ${hoverUnderline} pb-1`}
        onClick={() => setIsOpen(false)}
      >
        {link.name}
      </Link>
    );
  };


  return (
    <>
      <nav className="fixed top-0 w-full bg-white text-[#101527] z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 md:px-24 h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center h-full flex-shrink-0">
            <img
              id="home"
              src={Logo}
              alt="Chege & Chege Advocates"
              className="h-[90%] w-auto max-w-[420px] object-contain"
            />
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-10 text-sm font-medium">
              {links.map((link) => (
                <li key={link.name}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex flex-shrink-0 ml-10">
            <a
              href="#contact"
              className="bg-[#D4AF37] text-[#101527] px-8 py-3 min-w-[190px] text-center rounded-md font-semibold shadow-md hover:bg-[#c29d2f] transition"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-[#101527]"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white"
        >
          <ul className="flex flex-col px-8 py-6 space-y-5 text-base">
            {links.map((link) => (
              <li key={link.name}>{renderLink(link)}</li>
            ))}
            <li>
              <a
                href="#contact"
                className="block bg-[#D4AF37] text-[#101527] px-6 py-3 rounded-md font-semibold text-center"
              >
                Book Consultation
              </a>
            </li>
          </ul>
        </motion.div>
      </nav>

      {/* Sticky mobile CTA */}
      {showStickyCTA && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
        >
          <a
            href="#contact"
            className="bg-[#D4AF37] text-[#101527] px-8 py-3 rounded-md font-semibold shadow-lg"
          >
            Book Consultation
          </a>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
