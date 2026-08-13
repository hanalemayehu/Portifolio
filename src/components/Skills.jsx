import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "../data/personalInfo";
import { Code, Palette, Server, Wifi, Rocket } from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Frontend",
      skills: personalInfo.skills.frontend,
      color: "text-accent-cyan",
    },
    {
      icon: <Server size={24} />,
      title: "Backend",
      skills: personalInfo.skills.backend,
      color: "text-accent-green",
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      skills: personalInfo.skills.design,
      color: "text-accent-pink",
    },
    {
      icon: <Wifi size={24} />,
      title: "Networking",
      skills: personalInfo.skills.networking,
      color: "text-accent-purple",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="text-accent-cyan font-mono text-sm">02.</span>
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 hover:border-accent-cyan/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={category.color}>{category.icon}</span>
                <h3 className="font-heading text-lg font-semibold text-light-headline dark:text-dark-headline">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-full text-light-primary/70 dark:text-dark-primary/70 hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={itemVariants}
          className="mt-8 glass-card p-8 text-center"
        >
          <Rocket className="text-accent-cyan mx-auto mb-3" size={32} />
          <h3 className="font-heading text-lg font-semibold text-light-headline dark:text-dark-headline mb-2">
            Always Learning
          </h3>
          {/* <p className="text-light-primary/60 dark:text-dark-primary/60">
            Currently exploring: TypeScript, GraphQL, Docker, and Cloud Computing
          </p> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;