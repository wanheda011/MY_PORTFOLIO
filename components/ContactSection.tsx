'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

      // Contact info cards
      const contactCards = sectionRef.current?.querySelectorAll('.contact-card');
      if (contactCards && contactCards.length > 0) {
        gsap.from(contactCards, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
          },
        });
      }

      // Form animation
      if (formRef.current) {
        gsap.from(formRef.current, {
          opacity: 0,
          x: 30,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate form submission
    try {
      // Here you would typically send data to a backend
      console.log('Form submitted:', formData);

      // Flash animation on success
      if (formRef.current) {
        gsap.to(formRef.current, {
          opacity: 0.5,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
        });
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-4 lg:px-8 bg-gradient-to-b from-dark-900 to-dark-800"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-5 max-w-3xl mx-auto">
          Have a question or want to work together? Let&apos;s connect!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="contact-card glass rounded-xl p-2 lg:p-8 hover:glass-dark transition-transform duration-300 hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                <FaEnvelope className="text-dark-900 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-gray-400 text-sm">{PORTFOLIO_DATA.personal.email}</p>
              </div>
            </div>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="text-accent-400 hover:text-accent-300 font-semibold transition-colors"
            >
              Send Email →
            </a>
          </div>

          <div className="contact-card glass rounded-xl p-8 hover:glass-dark transition-transform duration-300 hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                <FaPhone className="text-dark-900 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                <p className="text-gray-400 text-sm">{PORTFOLIO_DATA.personal.phone}</p>
              </div>
            </div>
            <a
              href={`tel:${PORTFOLIO_DATA.personal.phone}`}
              className="text-accent-400 hover:text-accent-300 font-semibold transition-colors"
            >
              Call Me →
            </a>
          </div>

          <div className="contact-card glass rounded-xl p-8 hover:glass-dark transition-transform duration-300 hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                <FaMapMarkerAlt className="text-dark-900 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Location</h3>
                <p className="text-gray-400 text-sm">{PORTFOLIO_DATA.personal.location}</p>
              </div>
            </div>
            <span className="text-gray-300">Available for remote work</span>
          </div>
        </div>

        {/* Contact Form and Social */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass rounded-xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="input w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="input w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={4}
                className="input w-full resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-accent text-dark-900 rounded-lg font-semibold hover:shadow-glow transition-all duration-300"
            >
              Send Message
            </button>

            {submitted && (
              <div className="p-4 bg-accent-400/20 border border-accent-400 rounded-lg text-accent-400 text-center font-semibold">
                ✓ Message sent successfully!
              </div>
            )}
          </form>

          {/* Social Links */}
          <div className="glass rounded-xl p-2 lg:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <p className="text-gray-400 mb-8">
                Feel free to reach out on any platform. I&apos;m always happy to discuss new projects and opportunities.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/wanheda011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-dark-700 transition-all duration-300 group"
                >
                  <FaGithub className="text-accent-400 text-2xl group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-white">GitHub</div>
                    <div className="text-gray-400 text-sm">https://github.com/wanheda011</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/ajaykumar-solanki-b57a3b25b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-dark-700 transition-all duration-300 group"
                >
                  <FaLinkedin className="text-accent-400 text-2xl group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-white">LinkedIn</div>
                    <div className="text-gray-400 text-sm">linkedin.com/in/ajaykumar-solanki-b57a3b25b/</div>
                  </div>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-dark-700 transition-all duration-300 group"
                >
                  <FaTwitter className="text-accent-400 text-2xl group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-white">Twitter</div>
                    <div className="text-gray-400 text-sm">@ajaykumar_dev</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Decorative element */}
            <div className="mt-8 p-6 bg-gradient-to-r from-accent-400/10 to-transparent rounded-lg border border-accent-400/20">
              <p className="text-sm text-gray-400">
                ✨ <span className="text-accent-400 font-semibold">Pro Tip:</span> The best time to reach out is anytime. I respond quickly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
