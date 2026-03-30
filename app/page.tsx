'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import {
  Header,
  HeroSection,
  StatsSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  WorkshopsSection,
  ContactSection,
  Footer,
} from '@/components';

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  useEffect(() => {
    // Enable smooth scroll with CSS
    document.documentElement.style.scrollBehavior = 'smooth';

    // Page load animation
    const pageContent = document.querySelector('main');
    if (pageContent) {
      gsap.from(pageContent, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    }

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Header />
      <main className="relative">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <WorkshopsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
