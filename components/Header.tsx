'use client';

import React, { useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import gsap from 'gsap';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileOpen && mobileNavRef.current) {
      gsap.to(mobileNavRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else if (mobileNavRef.current) {
      gsap.to(mobileNavRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-lg border-b border-dark-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-dark-900 font-bold text-lg">AS</span>
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline">Ajaykumar</span>
          </div>

          {/* Desktop Navigation */}
          <div
            ref={navRef}
            className="hidden md:flex items-center space-x-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-accent-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <button className="ml-4 px-4 py-2 bg-gradient-accent text-dark-900 rounded-lg font-semibold text-sm hover:shadow-glow transition-all duration-300">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-300 hover:text-accent-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={mobileNavRef}
          className="md:hidden overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="pt-4 pb-3 space-y-2 border-t border-dark-700 mt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-accent-400 hover:bg-dark-800 rounded transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-dark-700 flex items-center justify-between px-3">
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} className="text-gray-400 hover:text-accent-400" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={20} className="text-gray-400 hover:text-accent-400" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={20} className="text-gray-400 hover:text-accent-400" />
                </a>
              </div>
              <button className="px-4 py-2 bg-gradient-accent text-dark-900 rounded-lg font-semibold text-sm hover:shadow-glow">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
