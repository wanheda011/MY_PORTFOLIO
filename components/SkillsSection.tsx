'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { PORTFOLIO_DATA } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<Array<HTMLDivElement | null>>([]);

  // Debug logging
  console.log('SkillsSection: PORTFOLIO_DATA.skills =', PORTFOLIO_DATA.skills);

  useEffect(() => {
    if (!sectionRef.current || !skillsContainerRef.current) return;

    const ctx = gsap.context(() => {
      // Section fade in
      gsap.from('h2', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
        },
      });

      // Stagger skills cards
      const skillCards = skillsContainerRef.current?.querySelectorAll('.skill-card');
      if (skillCards && skillCards.length > 0) {
        gsap.from(skillCards, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: skillsContainerRef.current,
            start: 'top center+=100',
          },
        });
      }

      // Animate progress bars
      barsRef.current.forEach((bar) => {
        if (bar) {
          gsap.from(bar, {
            width: 0,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: skillsContainerRef.current,
              start: 'top center+=100',
              once: true,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Technologies and tools I&apos;m proficient with
        </p>

        <div ref={skillsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skills && PORTFOLIO_DATA.skills.length > 0 ? (
            PORTFOLIO_DATA.skills.map((skillCategory, idx) => (
              <div key={idx} className="skill-card glass rounded-xl p-8 hover:glass-dark transition-colors duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-green-500">
                    {skillCategory.category}
                  </h3>
                  <span className="text-sm font-bold text-accent-400">
                    {skillCategory.proficiency}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mb-6 bg-dark-700 h-2 rounded-full overflow-hidden">
                  <div
                    ref={(el) => {
                      barsRef.current[idx] = el;
                    }}
                    className="h-full bg-gradient-accent rounded-full"
                    style={{ width: `${skillCategory.proficiency}%` }}
                  ></div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-sm hover:bg-accent-400/20 hover:text-accent-400 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center text-gray-400">
              <p>No skills data available</p>
              <p className="text-xs mt-2">PORTFOLIO_DATA.skills = {JSON.stringify(PORTFOLIO_DATA.skills)}</p>
            </div>
          )}
        </div>

        {/* Additional skills section */}
        <div className="mt-16 bg-gradient-to-r from-accent-400/10 to-transparent rounded-xl p-8 border border-accent-400/20">
          <h3 className="text-2xl font-semibold text-white mb-6">Professional Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Git & GitHub',
              'VS Code',
              'Docker',
              'Kubernetes',
              'JIRA',
              'Postman',
              'Figma',
              'Terminal',
            ].map((tool, idx) => (
              <div
                key={idx}
                className="p-4 bg-dark-700 rounded-lg text-center text-gray-300 hover:text-accent-400 hover:bg-dark-600 transition-all duration-300 cursor-pointer"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
