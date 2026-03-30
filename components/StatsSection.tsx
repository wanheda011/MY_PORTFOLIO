'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { PORTFOLIO_DATA } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!sectionRef.current || !statsRef.current) return;

    // Section fade in
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center+=100',
      },
    });

    // Animate counters
    PORTFOLIO_DATA.stats.forEach((stat, index) => {
      if (countersRef.current[index]) {
        gsap.from(countersRef.current[index], {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power2.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top center+=100',
          },
        });

        // Counter animation
        const counter = { value: 0 };
        gsap.to(counter, {
          value: stat.value,
          duration: 2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top center+=100',
            once: true,
          },
          onUpdate() {
            if (countersRef.current[index]) {
              countersRef.current[index]!.textContent = 
                `${stat.prefix}${Math.floor(counter.value)}${index === 2 ? '+' : ''}`;
            }
          },
        });
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-900 to-dark-800"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {PORTFOLIO_DATA.stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-xl glass hover:glass-dark transition-all duration-300"
            >
              <div
                ref={(el) => {
                  countersRef.current[index] = el;
                }}
                className="text-3xl md:text-4xl font-bold gradient-text mb-3"
              >
                {stat.prefix}{Math.floor(stat.value)}
              </div>
              <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
