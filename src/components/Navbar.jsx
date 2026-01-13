// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "#practiceareas" },
    { name: "Why Us", href: "#whyus" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setShowStickyCTA(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Decide whether to render a Router Link or a plain anchor
  const renderLink = (link, onClick = () => {}) =>
    link.href.startsWith("/") ? (
      <Link to={link.href} className="hover:text-[#D4AF37] transition font-medium" onClick={onClick}>
        {link.name}
      </Link>
    ) : (
      <a href={link.href} className="hover:text-[#D4AF37] transition font-medium" onClick={onClick}>
        {link.name}
      </a>
    );

  return (
    <>
      <nav className="fixed top-0 w-full bg-[#101527] text-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-[#D4AF37] z-50">
            Chege & Chege Advocates
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {links.map((link) => (
              <li key={link.name}>{renderLink(link)}</li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-[#D4AF37] text-[#101527] px-6 py-2 rounded font-semibold shadow hover:bg-[#c29d2f] transition"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden z-50">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-[#101527]"
        >
          <ul className="flex flex-col px-6 py-4 space-y-4">
            {links.map((link) => (
              <li key={link.name}>{renderLink(link, () => setIsOpen(false))}</li>
            ))}
            <li>
              <a
                href="#contact"
                className="block mt-2 bg-[#D4AF37] text-[#101527] px-6 py-2 rounded font-semibold shadow hover:bg-[#c29d2f] transition text-center"
              >
                Book Consultation
              </a>
            </li>
          </ul>
        </motion.div>
      </nav>

      {/* Sticky CTA for mobile */}
      {showStickyCTA && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
        >
          <a
            href="#contact"
            className="bg-[#D4AF37] text-[#101527] px-6 py-3 rounded font-semibold shadow-lg"
          >
            Book Consultation
          </a>
        </motion.div>
      )}
    </>
  );
};
