import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const createScrollTrigger = (
  element: HTMLElement | string,
  animation: gsap.core.Timeline | gsap.core.Tween,
  options: ScrollTrigger.Vars = {}
) => {
  return ScrollTrigger.create({
    trigger: element,
    animation,
    ...options,
  });
};

export const fadeInUp = (element: HTMLElement | string, delay = 0) => {
  const tl = gsap.timeline();
  tl.from(element, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out',
    delay,
  });
  return tl;
};

export const fadeInDown = (element: HTMLElement | string, delay = 0) => {
  const tl = gsap.timeline();
  tl.from(element, {
    opacity: 0,
    y: -50,
    duration: 0.8,
    ease: 'power2.out',
    delay,
  });
  return tl;
};

export const slideInLeft = (element: HTMLElement | string, delay = 0) => {
  const tl = gsap.timeline();
  tl.from(element, {
    opacity: 0,
    x: -100,
    duration: 0.8,
    ease: 'power2.out',
    delay,
  });
  return tl;
};

export const slideInRight = (element: HTMLElement | string, delay = 0) => {
  const tl = gsap.timeline();
  tl.from(element, {
    opacity: 0,
    x: 100,
    duration: 0.8,
    ease: 'power2.out',
    delay,
  });
  return tl;
};

export const scaleIn = (element: HTMLElement | string, delay = 0) => {
  const tl = gsap.timeline();
  tl.from(element, {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: 'back.out',
    delay,
  });
  return tl;
};

export const staggerElements = (
  elements: HTMLElement[] | string,
  animationType: 'fadeInUp' | 'fadeInDown' | 'slideInLeft' | 'slideInRight' | 'scaleIn' = 'fadeInUp',
  staggerDelay = 0.1
) => {
  const tl = gsap.timeline();
  const animationMap = {
    fadeInUp: () => gsap.from(elements, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out',
      stagger: staggerDelay,
    }),
    fadeInDown: () => gsap.from(elements, {
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: 'power2.out',
      stagger: staggerDelay,
    }),
    slideInLeft: () => gsap.from(elements, {
      opacity: 0,
      x: -100,
      duration: 0.8,
      ease: 'power2.out',
      stagger: staggerDelay,
    }),
    slideInRight: () => gsap.from(elements, {
      opacity: 0,
      x: 100,
      duration: 0.8,
      ease: 'power2.out',
      stagger: staggerDelay,
    }),
    scaleIn: () => gsap.from(elements, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: 'back.out',
      stagger: staggerDelay,
    }),
  };

  tl.add(animationMap[animationType]());
  return tl;
};

export const textReveal = (element: HTMLElement | string) => {
  const tl = gsap.timeline();
  tl.from(element, {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: 'power2.out',
  });
  return tl;
};

export const parallaxImage = (element: HTMLElement | string, speed = 0.5) => {
  gsap.to(element, {
    y: () => window.innerHeight * speed,
    scrollTrigger: {
      trigger: element,
      scrub: 1,
      start: 'top center',
      end: 'bottom center',
    },
  });
};

export const animateCounter = (
  element: HTMLElement | string,
  endValue: number,
  duration = 2,
  prefix = ''
) => {
  const tl = gsap.timeline();
  const counter = { value: 0 };

  tl.to(counter, {
    value: endValue,
    duration,
    ease: 'power2.inOut',
    onUpdate() {
      const el = typeof element === 'string' ? document.querySelector(element) : element;
      if (el) {
        el.textContent = prefix + Math.floor(counter.value);
      }
    },
  });

  return tl;
};

export const pinSection = (
  trigger: HTMLElement | string,
  animation: gsap.core.Timeline | gsap.core.Tween,
  duration = 3
) => {
  return ScrollTrigger.create({
    trigger,
    animation,
    pin: true,
    scrub: 1,
    markers: false,
  });
};

export const horizontalScroll = (
  container: HTMLElement | string,
  animation?: gsap.core.Timeline | gsap.core.Tween
) => {
  return ScrollTrigger.create({
    trigger: container,
    pin: true,
    scrub: 1,
    animation,
    horizontal: true,
  });
};

export const setupSmoothScroll = () => {
  // Disable default scrollbars
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';

  gsap.set('body, html', {
    height: '100%',
    overflow: 'hidden',
  });
};

export const cleanupScrollAnimations = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
