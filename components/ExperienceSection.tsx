'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

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

    // Timeline items animation
    itemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.from(item, {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          duration: 0.6,
          ease: 'power2.out',
          delay: index * 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top center+=100',
          },
        });
      }
    });

    // Timeline line animation
    const timelineLine = timelineRef.current?.querySelector('.timeline-line');
    if (timelineLine) {
      gsap.from(timelineLine, {
        height: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top center+=100',
        },
      });
    }
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-900 to-dark-800"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          My professional journey and key roles
        </p>

        <div ref={timelineRef} className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-400/0 via-accent-400 to-accent-400/0 transform -translate-x-1/2">
            <div className="timeline-line absolute inset-0 bg-gradient-to-b from-transparent via-accent-400 to-transparent"></div>
          </div>

          {/* Timeline items */}
          <div className="space-y-12">
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => {
                  itemsRef.current[index] = el || null;
                }}
                className={`grid md:grid-cols-2 gap-8 items-center relative ${
                  index % 2 === 0 ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                  <div className="w-4 h-4 bg-accent-400 rounded-full ring-4 ring-dark-900 z-10"></div>
                </div>

                {/* Content */}
                <div
                  className={`glass rounded-xl p-8 hover:glass-dark transition-all duration-300 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <FaBriefcase className="text-accent-400 text-2xl flex-shrink-0" />
                    <div className={index % 2 === 0 ? 'md:text-right w-full' : 'w-full'}>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-accent-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaCalendarAlt size={14} />
                      <span>
                        {exp.period} • {exp.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-accent-400 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            <span className="gradient-text">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass rounded-xl p-6 hover:glass-dark transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-dark-900 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                    <p className="text-accent-400 text-sm">{cert.issuer}</p>
                    <p className="text-gray-400 text-xs mt-1">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
