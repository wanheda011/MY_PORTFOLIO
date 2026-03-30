'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { PORTFOLIO_DATA } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Content slide in from left
    if (contentRef.current) {
      gsap.from(contentRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
        },
      });
    }

    // Image slide in from right
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
        },
      });

      // Parallax effect on image
      gsap.to(imageRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 1,
          start: 'top center',
          end: 'bottom center',
        },
      });
    }
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Get to know more about my journey, experience, and what drives me as a developer
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-accent-400 mb-2">📍 Location</h3>
                <p className="text-gray-400">{PORTFOLIO_DATA.personal.location}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-accent-400 mb-2">📧 Contact</h3>
                <p className="text-gray-400">{PORTFOLIO_DATA.personal.email}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-accent-400 mb-2">🎓 Certification</h3>
                <p className="text-gray-400">
                  {PORTFOLIO_DATA.certifications[0].title}
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <button className="px-6 py-2 bg-gradient-accent text-dark-900 rounded-lg font-semibold hover:shadow-glow transition-all duration-300">
                View Experience
              </button>
              <button className="px-6 py-2 border-2 border-accent-400 text-accent-400 rounded-lg font-semibold hover:bg-accent-400 hover:text-dark-900 transition-all duration-300">
                Download CV
              </button>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative hidden md:flex items-center justify-center">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-accent-400/30 glass">
              <div className="w-full h-full bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">💻</div>
                  <p className="text-gray-400">Full Stack Developer</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-accent opacity-20 rounded-full blur-xl"></div>
              <div className="absolute bottom-8 left-4 w-16 h-16 bg-accent-400 opacity-10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
