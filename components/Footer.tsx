'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(footerRef.current?.querySelectorAll('.grid > div, .border-t') || [], {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={footerRef} className="bg-dark-950 border-t border-dark-700">
      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <span className="text-dark-900 font-bold text-lg">AS</span>
                </div>
                <span className="text-xl font-bold text-white">Ajaykumar</span>
              </div>
              <p className="text-gray-400 text-sm">
                Crafting beautiful, high-performance web experiences with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Navigation</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Home', href: '#hero' },
                  { label: 'About', href: '#about' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Projects', href: '#projects' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-2">
                {[
                  'Web Development',
                  'Full Stack Apps',
                  'Consulting',
                  'Mentoring',
                ].map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Social</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/wanheda011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-accent-400 hover:text-dark-900 transition-colors duration-300 transform hover:scale-110"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajaykumar-solanki-b57a3b25b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-accent-400 hover:text-dark-900 transition-all duration-300 transform hover:scale-110"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-accent-400 hover:text-dark-900 transition-all duration-300 transform hover:scale-110"
                >
                  <FaTwitter size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dark-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {currentYear} Ajaykumar Solanki. All rights reserved.
              </p>

              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-6 py-2 bg-dark-800 hover:bg-accent-400 hover:text-dark-900 text-gray-300 rounded-lg transition-all duration-300 group"
              >
                <span>Back to Top</span>
                <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Decorative line */}
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-accent-400/20 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
};
