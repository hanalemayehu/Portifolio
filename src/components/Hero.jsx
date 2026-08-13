import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { personalInfo } from "../data/personalInfo";
import hanaImage from "../assets/hana.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight mb-4">
              Hi, I'm <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-body mb-6">
              {personalInfo.title}
            </p>

            <p className="text-gray-500 dark:text-gray-500 mb-8 max-w-lg">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["React", "Next.js", "Node.js", "Tailwind", "PostgreSQL"].map((tech) => (
                <span key={tech} className="tech-badge">#{tech.toLowerCase()}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                Let's Connect
              </a>
            </div>

            <div className="flex gap-6 mt-8">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-600 hover:text-cyan-400 transition-all duration-300">
                <FaGithub size={24} />
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-600 hover:text-cyan-400 transition-all duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href={personalInfo.social.telegram} target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-600 hover:text-blue-400 transition-all duration-300">
                <FaTelegramPlane size={24} />
              </a>
              <a href={personalInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-600 hover:text-green-400 transition-all duration-300">
                <FaWhatsapp size={24} />
              </a>
              <a href={`mailto:${personalInfo.contact.email}`} className="text-gray-400 dark:text-gray-600 hover:text-cyan-400 transition-all duration-300">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-white dark:bg-black overflow-hidden flex items-center justify-center">
                  <img 
                    src={hanaImage} 
                    alt={personalInfo.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mt-12"
        >
          <ArrowDown className="text-gray-400 dark:text-gray-600" size={28} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;