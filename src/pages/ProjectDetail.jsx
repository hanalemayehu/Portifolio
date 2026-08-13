import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft, ExternalLink, Play, Pause } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-6 max-w-4xl mx-auto">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-cyan-400 hover:underline mb-8"
      >
        <ArrowLeft size={18} /> Back to projects
      </Link>

      <h1 className="font-heading text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">
        {project.title}
      </h1>
      <p className="text-cyan-400 font-mono text-sm mb-6">
        {project.category}
      </p>

      {/* Video or Image Section */}
      {project.hasVideo && project.video ? (
        <div className="relative w-full rounded-xl overflow-hidden mb-8 bg-black border border-gray-200 dark:border-gray-800">
          <video
            src={project.video}
            className="w-full"
            controls
            poster={project.image || undefined}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button
                onClick={() => {
                  const video = document.querySelector('video');
                  if (video) {
                    video.play();
                    setIsPlaying(true);
                  }
                }}
                className="w-20 h-20 rounded-full bg-cyan-400/90 hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center"
              >
                <Play size={40} className="text-white ml-2" />
              </button>
            </div>
          )}
        </div>
      ) : project.image ? (
        <div className="w-full rounded-xl overflow-hidden mb-8 border border-gray-200 dark:border-gray-800">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-auto"
          />
        </div>
      ) : (
        <div className="w-full h-64 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-xl mb-8 flex items-center justify-center border border-gray-200 dark:border-gray-800">
          <span className="text-gray-400 dark:text-gray-600 font-mono">
            🖼️ Project Screenshot
          </span>
        </div>
      )}

      <div className="glass-card p-6 md:p-8 mb-8">
        <h2 className="font-heading text-xl font-semibold text-black dark:text-white mb-4">
          The Problem
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.caseStudy.problem}
        </p>
      </div>

      <div className="glass-card p-6 md:p-8 mb-8">
        <h2 className="font-heading text-xl font-semibold text-black dark:text-white mb-4">
          The Process
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.caseStudy.process}
        </p>
      </div>

      <div className="glass-card p-6 md:p-8 mb-8">
        <h2 className="font-heading text-xl font-semibold text-black dark:text-white mb-4">
          The Solution
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.caseStudy.solution}
        </p>
      </div>

      <div className="glass-card p-6 md:p-8 mb-8">
        <h2 className="font-heading text-xl font-semibold text-black dark:text-white mb-4">
          Outcome
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.caseStudy.outcome}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-12">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-badge">
            #{tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 pb-20">
        {project.github && project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 dark:border-gray-800 rounded-full hover:border-cyan-400 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-cyan-400"
          >
            <FaGithub size={18} /> View Code
          </a>
        )}
        {project.live && project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
        )}
        {project.hasVideo && project.video && (
          <a
            href={project.video}
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 dark:border-gray-800 rounded-full hover:border-cyan-400 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-cyan-400"
          >
            📥 Download Demo Video
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;