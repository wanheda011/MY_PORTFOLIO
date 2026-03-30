'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
  details: string;
}

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Section title animation
    gsap.from(sectionRef.current.querySelector('h2'), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center+=100',
      },
    });

    // Projects card animation
    if (projectsContainerRef.current) {
      const cards = projectsContainerRef.current.querySelectorAll('.project-card');
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: projectsContainerRef.current,
          start: 'top center+=100',
        },
      });
    }
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    if (modalRef.current) {
      gsap.from(modalRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        ease: 'back.out',
      });
    }
  };

  const handleCloseModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        ease: 'back.in',
        onComplete: () => setSelectedProject(null),
      });
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Showcase of my best work and recent projects
        </p>

        <div
          ref={projectsContainerRef}
          className="grid md:grid-cols-2 gap-8"
        >
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="project-card group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden rounded-xl mb-4 h-64">
                {/* Image */}
                <div className="w-full h-full bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent-400 text-dark-900 rounded-full hover:scale-110 transition-transform duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent-400 text-dark-900 rounded-full hover:scale-110 transition-transform duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="glass rounded-xl p-6 hover:glass-dark transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-dark-800 text-accent-400 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div
            ref={modalRef}
            className="bg-dark-800 rounded-2xl max-w-2xl w-full max-h-96 overflow-y-auto border border-dark-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="sticky top-0 p-6 border-b border-dark-700 flex justify-between items-start">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-accent-400 transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Modal body */}
            <div className="p-6 space-y-6">
              <p className="text-gray-300 text-lg">{selectedProject.details}</p>

              <div>
                <h4 className="text-lg font-semibold text-accent-400 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-dark-700 text-accent-400 rounded-lg font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-dark-700">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gradient-accent text-dark-900 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaGithub size={20} />
                  View Code
                </a>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 border-2 border-accent-400 text-accent-400 rounded-lg font-semibold hover:bg-accent-400 hover:text-dark-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaExternalLinkAlt size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
