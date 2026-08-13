import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "../data/personalInfo";
import { MapPin, Phone, Mail } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* <span className="text-accent-cyan font-mono text-sm">01.</span> */}
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          {/* Left - About Text */}
          <div>
            <div className="glass-card p-8">
              <h3 className="font-heading text-xl font-semibold text-light-headline dark:text-dark-headline mb-4">
                Who I Am
              </h3>
              <p className="text-light-primary/70 dark:text-dark-primary/70 leading-relaxed whitespace-pre-line">
                {personalInfo.about}
              </p>

              {/* Personal Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-accent-cyan" />
                  <span className="text-light-primary/70 dark:text-dark-primary/70">
                    {personalInfo.contact.location}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-accent-cyan" />
                  <span className="text-light-primary/70 dark:text-dark-primary/70">
                    {personalInfo.contact.email}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-accent-cyan" />
                  <span className="text-light-primary/70 dark:text-dark-primary/70">
                    {personalInfo.contact.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Quick Info */}
          <div className="space-y-6">
            {/* Experience */}
            <div className="glass-card p-8">
              <h3 className="font-heading text-xl font-semibold text-light-headline dark:text-dark-headline mb-4">
                Experience
              </h3>
              {personalInfo.experience.map((exp, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h4 className="font-semibold text-light-headline dark:text-dark-headline">
                    {exp.title}
                  </h4>
                  <p className="text-accent-cyan text-sm font-mono">{exp.company}</p>
                  <p className="text-light-primary/50 dark:text-dark-primary/50 text-sm">
                    {exp.period}
                  </p>
                  <p className="text-light-primary/60 dark:text-dark-primary/60 text-sm mt-1">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="glass-card p-8">
              <h3 className="font-heading text-xl font-semibold text-light-headline dark:text-dark-headline mb-4">
                Education
              </h3>
              {personalInfo.education.map((edu, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-light-headline dark:text-dark-headline">
                    {edu.degree}
                  </h4>
                  <p className="text-accent-cyan text-sm font-mono">{edu.field}</p>
                  <p className="text-light-primary/50 dark:text-dark-primary/50 text-sm">
                    {edu.school} • {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;