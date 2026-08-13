import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { personalInfo } from "../data/personalInfo";

const Home = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <main>
      <Hero />
      <About />
      <Skills />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 font-mono text-sm">03.</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of the projects I've built
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12"
        >
          <span className="text-cyan-400 font-mono text-sm">04.</span>
          <h2 className="section-title text-center">Let's Connect</h2>
          <p className="section-subtitle text-center">
            Have a project in mind? Let's work together!
          </p>

          {/* Main Contact Options */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Telegram - Primary Contact */}
            <a
              href={personalInfo.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaTelegramPlane size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Me on Telegram</h3>
                <p className="text-blue-100 mb-4">Quickest way to reach me</p>
                <span className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 rounded-full text-sm font-medium group-hover:bg-white/30 transition-all duration-300">
                  @{personalInfo.social.telegram.split('/').pop()} <Send size={16} />
                </span>
              </div>
            </a>

            {/* WhatsApp - Secondary Contact */}
            <a
              href={personalInfo.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-8 text-white hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaWhatsapp size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message on WhatsApp</h3>
                <p className="text-green-100 mb-4">Available on WhatsApp too</p>
                <span className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 rounded-full text-sm font-medium group-hover:bg-white/30 transition-all duration-300">
                  WhatsApp <Send size={16} />
                </span>
              </div>
            </a>
          </div>

          {/* Other Contact Methods */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-gray-600 dark:text-gray-400"
            >
              <FaGithub size={18} /> GitHub
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-gray-600 dark:text-gray-400"
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-gray-600 dark:text-gray-400"
            >
              <Mail size={18} /> Email
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-cyan-400/10">
                <MapPin size={18} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="text-sm text-black dark:text-white font-medium">
                  {personalInfo.contact.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-purple-500/10">
                <Phone size={18} className="text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                <p className="text-sm text-black dark:text-white font-medium">
                  {personalInfo.contact.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-blue-500/10">
                <FaTelegramPlane size={18} className="text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Telegram</p>
                <a 
                  href={personalInfo.social.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-black dark:text-white font-medium hover:text-cyan-400 transition-colors"
                >
                  @{personalInfo.social.telegram.split('/').pop()}
                </a>
              </div>
            </div>
          </div>

          {/* Note */}
          <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-6">
            📱 I respond faster on Telegram and WhatsApp
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;