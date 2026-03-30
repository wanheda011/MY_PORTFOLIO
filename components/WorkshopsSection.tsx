'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaUsers, FaCalendarAlt, FaTrophy } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export const WorkshopsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const workshopsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section title animation
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

      // Workshops cards animation
      const cards = workshopsContainerRef.current?.querySelectorAll('.workshop-card');
      if (cards && cards.length > 0) {
        gsap.from(cards, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: workshopsContainerRef.current,
            start: 'top center+=100',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="workshops"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Workshops & <span className="gradient-text">Achievements</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Training sessions, workshops conducted and notable achievements
        </p>

        <div
          ref={workshopsContainerRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {PORTFOLIO_DATA.workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="workshop-card group glass rounded-xl overflow-hidden hover:glass-dark transition-transform duration-300 hover:scale-105 transform"
            >
              {/* Header with gradient */}
              <div className="h-24 bg-gradient-to-r from-accent-400/20 to-transparent relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaTrophy className="text-dark-900" size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-accent-400 transition-colors">
                  {workshop.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {workshop.description}
                </p>

                {/* Stats */}
                <div className="space-y-3 border-t border-dark-700 pt-4">
                  <div className="flex items-center gap-3 text-sm">
                    <FaCalendarAlt className="text-accent-400 flex-shrink-0" size={14} />
                    <span className="text-gray-400">{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FaUsers className="text-accent-400 flex-shrink-0" size={14} />
                    <span className="text-gray-400">{workshop.attendees}+ Attendees</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements summary */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { icon: '🎓', label: 'Workshops', value: PORTFOLIO_DATA.workshops.length },
            { icon: '👥', label: 'Students Trained', value: '200+' },
            { icon: '🏆', label: 'Projects Led', value: '15+' },
            { icon: '⭐', label: 'Client Rating', value: '4.9/5' },
          ].map((achievement, idx) => (
            <div
              key={idx}
              className="glass rounded-xl p-6 text-center hover:glass-dark transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3">{achievement.icon}</div>
              <div className="text-3xl font-bold text-accent-400 mb-2">
                {achievement.value}
              </div>
              <p className="text-gray-400 font-semibold">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
