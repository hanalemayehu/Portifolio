import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/personalInfo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-black dark:text-white font-heading text-xl font-bold"
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
        >
          <span className="text-cyan-400">&lt;</span>
          {personalInfo.name.split(' ')[0]}
          <span className="text-cyan-400">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-all duration-300 font-body text-sm tracking-wide"
              onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400/10 transition-all duration-300 text-sm font-medium"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-6 py-6"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-all duration-300 font-body"
                onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400/10 transition-all duration-300 text-center"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;