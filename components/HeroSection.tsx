'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaArrowDown } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    // Text reveal animation
    if (headingRef.current) {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      });
    }

    // Subtitle fade in
    if (subtitleRef.current) {
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2,
      });
    }

    // Role typing effect
    const role = PORTFOLIO_DATA.personal.role;
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex <= role.length) {
        setTypedText(role.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    // CTA buttons animation
    if (ctaRef.current) {
      gsap.from(ctaRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1,
        delay: 0.4,
      });
    }

    // Image parallax
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'back.out',
        delay: 0.3,
      });

      // Floating animation
      gsap.to(imageRef.current, {
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'sine.inOut',
      });
    }

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section id="hero" className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1
                ref={headingRef}
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight"
              >
                Hi, I'm{' '}
                <span className="gradient-text">Ajaykumar</span>
              </h1>
              <p
                ref={subtitleRef}
                className="text-lg text-gray-400 max-w-lg"
              >
                {PORTFOLIO_DATA.personal.bio}
              </p>
            </div>

            {/* Role with typing effect */}
            <div
              ref={roleRef}
              className="flex items-center space-x-3"
            >
              <div className="w-2 h-2 bg-gradient-accent rounded-full animate-pulse"></div>
              <span className="text-xl font-semibold text-accent-400 h-8">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3 bg-gradient-accent text-dark-900 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                Hire Me
              </button>
              <button className="px-8 py-3 border-2 border-accent-400 text-accent-400 rounded-lg font-semibold hover:bg-accent-400 hover:text-dark-900 transition-all duration-300">
                Download Resume
              </button>
            </div>

            {/* Stats Preview */}
            <div className="flex gap-8 pt-8 border-t border-dark-700">
              {PORTFOLIO_DATA.stats.slice(0, 3).map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-2xl font-bold text-accent-400">
                    {stat.prefix}{stat.value}{stat.value < 10 ? '' : stat.label.includes('Years') ? '+' : ''}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Profile Image */}
          <div
            ref={imageRef}
            className="relative hidden md:flex items-center justify-center"
          >
            <div className="relative w-full h-96 md:h-full max-h-96">
              {/* Gradient circle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400/20 to-transparent rounded-full blur-3xl"></div>

              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-accent-400/30 glass">
                <div className="w-full h-full bg-gradient-to-b from-dark-700 to-dark-900 flex items-center justify-center">
                  {/* Placeholder for profile image - you can replace with img */}
                  <div className="text-center">
                    <div className="text-6xl mb-4"><img src="./images/Profile-1.png" alt="Profile" /></div>
                    <p className="text-gray-400">Profile Image</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -bottom-10 -left-10 glass rounded-xl p-4 space-y-2">
                <div className="text-sm font-semibold text-accent-400">Full Stack Dev</div>
                <div className="text-xs text-gray-400">Building amazing web apps</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FaArrowDown className="text-accent-400 text-2xl" />
      </div>
    </section>
  );
};
