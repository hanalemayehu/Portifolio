import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Play} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group glass-card p-6 hover:border-cyan-400/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image/Video Container */}
      <div className="relative w-full h-48 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-xl mb-4 overflow-hidden border border-gray-200 dark:border-gray-800">
        {project.hasVideo && project.video ? (
          <>
            <video
              src={project.video}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay={isHovered}
            />
            <div className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}>
              <div className="w-14 h-14 rounded-full bg-cyan-400/90 flex items-center justify-center">
                <Play size={28} className="text-white ml-1" />
              </div>
            </div>
            <span className="absolute top-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded-full flex items-center gap-1">
              <Play size={12} /> Demo
            </span>
          </>
        ) : project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 dark:text-gray-600 font-mono text-sm">
              📸 Project Image
            </span>
          </div>
        )}
      </div>

      <h3 className="font-heading text-xl font-semibold text-black dark:text-white mb-1">
        {project.title}
      </h3>
      <p className="text-cyan-400 text-sm font-mono mb-3">
        {project.category}
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 4).map((tech) => (
          <span key={tech} className="text-xs text-gray-500 dark:text-gray-500 font-mono">
            #{tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs text-gray-400 dark:text-gray-600 font-mono">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-600 hover:text-cyan-400 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
          )}
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-600 hover:text-cyan-400 transition-all duration-300"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
        <a
          href={`/project/${project.slug}`}
          className="text-cyan-400 text-sm font-medium hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
        >
          View Case Study <ArrowRight size={16} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;