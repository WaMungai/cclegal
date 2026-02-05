import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from '../assets/cclegallogo.png';

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
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "#practiceareas" },
    { name: "Why Us", href: "#whyus" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Clients", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

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
    setIsOpen(false); // Close mobile menu if open
  };

  const renderLink = (link) => {
    const isSectionLink = link.href.startsWith("#");
    return isSectionLink ? (
      <button
        onClick={() => handleSectionClick(link.href.substring(1))}
        className="hover:text-[#D4AF37] transition font-medium whitespace-nowrap"
      >
        {link.name}
      </button>
    ) : (
      <Link
        to={link.href}
        className="hover:text-[#D4AF37] transition font-medium whitespace-nowrap"
        onClick={() => setIsOpen(false)}
      >
        {link.name}
      </Link>
    );
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-[#101527] text-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 md:px-24 h-20 flex items-center justify-between">

          {/* LEFT: LOGO */}
          <nav className="h-20 flex items-center px-4">
            <div className="flex items-center h-full flex-shrink-0">
              <img
                src={Logo}
                alt="Chege & Chege Advocates"
                className="
        h-[90%]
        w-auto
        max-w-[420px]
        object-contain
        block
      "
              />
            </div>
          </nav>



          {/* CENTER: LINKS */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-10 text-sm font-medium">
              {links.map((link) => (
                <li key={link.name}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT: CTA */}
          <div className="hidden md:flex flex-shrink-0 ml-10">
            <a
              href="#contact"
              className="bg-[#D4AF37] text-[#101527] 
                         px-8 py-3 min-w-[190px]
                         text-center rounded-md font-semibold
                         shadow-md hover:bg-[#c29d2f] transition"
            >
              Book Consultation
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-[#101527]"
        >
          <ul className="flex flex-col px-8 py-6 space-y-5 text-base">
            {links.map((link) => (
              <li key={link.name}>{renderLink(link)}</li>
            ))}
            <li>
              <a
                href="#contact"
                className="block bg-[#D4AF37] text-[#101527] 
                           px-6 py-3 rounded-md font-semibold text-center"
              >
                Book Consultation
              </a>
            </li>
          </ul>
        </motion.div>
      </nav>

      {/* STICKY MOBILE CTA */}
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
