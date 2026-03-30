# 🎬 GSAP Animation Customization Guide

This guide covers how to customize and extend GSAP animations in your portfolio.

## Table of Contents
1. [Animation Basics](#animation-basics)
2. [Available Animations](#available-animations)
3. [ScrollTrigger Setup](#scrolltrigger-setup)
4. [Creating Custom Animations](#creating-custom-animations)
5. [Performance Tips](#performance-tips)
6. [Common Patterns](#common-patterns)

## Animation Basics

### Understanding GSAP Timeline

GSAP uses timelines to sequence animations:

```typescript
const tl = gsap.timeline();

tl.from(element1, { opacity: 0, duration: 0.5 })
  .from(element2, { opacity: 0, duration: 0.5 }, '<0.2') // 0.2s after previous
  .to(element3, { opacity: 1, duration: 0.5 }); // Runs at the same time as element2
```

### Common Properties

```typescript
gsap.to(element, {
  // Motion properties
  x: 100,           // Move 100px right
  y: 50,            // Move 50px down
  rotation: 360,    // Rotate 360 degrees
  scale: 1.2,       // Scale to 120%
  opacity: 0.5,     // Fade to 50% opacity
  
  // Timing
  duration: 1,      // 1 second
  delay: 0.5,       // Wait 0.5s before start
  repeat: -1,       // Repeat infinitely
  yoyo: true,       // Reverse animation
  
  // Easing
  ease: 'power2.out', // Easing function
  
  // Callbacks
  onStart: () => {},
  onComplete: () => {},
});
```

## Available Animations

All pre-built animations are in `lib/gsap-utils.ts`:

### 1. Fade In Animations

```typescript
import { fadeInUp, fadeInDown } from '@/lib/gsap-utils';

// Fade in from bottom to top
fadeInUp(element, delay);

// Fade in from top to bottom
fadeInDown(element, delay);
```

### 2. Slide In Animations

```typescript
import { slideInLeft, slideInRight } from '@/lib/gsap-utils';

// Slide in from left
slideInLeft(element, delay);

// Slide in from right
slideInRight(element, delay);
```

### 3. Scale Animation

```typescript
import { scaleIn } from '@/lib/gsap-utils';

// Scale from 0.8 to 1
scaleIn(element, delay);
```

### 4. Stagger Animation

```typescript
import { staggerElements } from '@/lib/gsap-utils';

// Stagger multiple elements
staggerElements(elements, 'fadeInUp', 0.1); // 0.1s between each
```

### 5. Text Reveal

```typescript
import { textReveal } from '@/lib/gsap-utils';

textReveal(element);
```

### 6. Parallax Effect

```typescript
import { parallaxImage } from '@/lib/gsap-utils';

// Speed: 0.5 = half as fast as scroll
parallaxImage(imageElement, 0.5);
```

### 7. Counter Animation

```typescript
import { animateCounter } from '@/lib/gsap-utils';

animateCounter(element, 100, 2, '+'); // Count to 100 in 2s with '+' prefix
```

## ScrollTrigger Setup

### Basic ScrollTrigger Animation

```typescript
useEffect(() => {
  if (!sectionRef.current) return;

  gsap.from(sectionRef.current, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top center', // When top of element hits center of viewport
      end: 'bottom center', // Animation end point
      markers: true, // Helpful for debugging
    },
  });
}, []);
```

### ScrollTrigger Markers

For debugging, use `markers: true`:

```typescript
scrollTrigger: {
  trigger: element,
  start: 'top center',
  markers: true, // Shows animation boundaries
}
```

### Common Start/End Positions

```typescript
// Trigger when element enters viewport
start: 'top bottom'

// Trigger when element is centered
start: 'top center'

// Trigger when element is halfway visible
start: 'top 80%'

// With offset
start: 'top center+=100' // 100px below center
start: 'top center-=50'  // 50px above center
```

## Creating Custom Animations

### Add New Animation to GSAP Utils

Edit `lib/gsap-utils.ts`:

```typescript
export const customAnimation = (element: HTMLElement | string, delay = 0) => {
  const tl = gsap.timeline();
  tl.from(element, {
    opacity: 0,
    y: 30,
    rotation: -10,
    scale: 0.9,
    duration: 1,
    ease: 'elastic.out',
    delay,
  });
  return tl;
};
```

### Use Custom Animation in Component

```typescript
import { customAnimation } from '@/lib/gsap-utils';

export const MyComponent = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    customAnimation(elementRef.current, 0.2);
  }, []);

  return <div ref={elementRef}>Custom Animation</div>;
};
```

### Complex Timeline Animation

```typescript
useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top center',
    },
  });

  // Sequence multiple animations
  tl.from('.title', { opacity: 0, y: 20, duration: 0.5 })
    .from('.subtitle', { opacity: 0, y: 20, duration: 0.5 }, '<0.2')
    .from('.content', { opacity: 0, x: 30, duration: 0.6 }, '<0.2')
    .from('.button', { opacity: 0, scale: 0.8, duration: 0.4 }, '<0.2');
}, []);
```

## Performance Tips

### 1. Use `once: true` for One-Time Animations

```typescript
scrollTrigger: {
  trigger: element,
  start: 'top center',
  once: true, // Animation runs only once
}
```

### 2. Debounce Scroll Events

```typescript
useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      gsap.ticker.add(() => {
        // Animation code
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### 3. Avoid Nested Timelines

Instead of creating timelines inside timelines, flatten the structure:

```typescript
// ❌ Avoid this
const tl1 = gsap.timeline();
const tl2 = gsap.timeline();
tl1.add(tl2);

// ✅ Do this
const tl = gsap.timeline();
tl.from(el1, {...}, 0)
  .from(el2, {...}, 0.2);
```

### 4. Kill Animations on Cleanup

```typescript
useEffect(() => {
  const animation = gsap.to(element, { duration: 1, x: 100 });

  return () => {
    animation.kill(); // Clean up animation
  };
}, []);
```

## Common Patterns

### Hover Animation

```typescript
useEffect(() => {
  const element = elementRef.current;
  if (!element) return;

  element.addEventListener('mouseenter', () => {
    gsap.to(element, { scale: 1.1, duration: 0.3 });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, { scale: 1, duration: 0.3 });
  });
}, []);
```

### Click Animation

```typescript
const handleClick = () => {
  gsap.timeline()
    .to(element, { scale: 0.95, duration: 0.1 })
    .to(element, { scale: 1, duration: 0.2 });
};
```

### Loading Animation

```typescript
useEffect(() => {
  if (loading) {
    gsap.to('.loader', {
      rotation: 360,
      repeat: -1,
      duration: 1,
      ease: 'none',
    });
  } else {
    gsap.killTweensOf('.loader');
  }
}, [loading]);
```

### Stagger List Animation

```typescript
useEffect(() => {
  const items = document.querySelectorAll('.list-item');
  gsap.from(items, {
    opacity: 0,
    y: 20,
    stagger: 0.1, // 0.1s between each item
    duration: 0.5,
    scrollTrigger: {
      trigger: listRef.current,
      start: 'top center',
    },
  });
}, []);
```

### Scroll Progress Bar

```typescript
useEffect(() => {
  gsap.to('.progress-bar', {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      scrub: 1, // Smooth scrub
      start: 'top top',
      end: 'bottom bottom',
      markers: false,
    },
  });
}, []);
```

## Advanced: Custom Hook for ScrollTrigger

Create `hooks/useScrollAnimation.ts`:

```typescript
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  start?: string;
  end?: string;
  scrub?: number | boolean;
  markers?: boolean;
  once?: boolean;
}

export const useScrollAnimation = (
  callback: (tl: gsap.core.Timeline) => void,
  options: ScrollAnimationOptions = {}
) => {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: options.start || 'top center+=100',
        end: options.end,
        scrub: options.scrub,
        markers: options.markers,
        once: options.once,
      },
    });

    callback(tl);

    return () => {
      tl.kill();
    };
  }, [callback, options]);

  return triggerRef;
};
```

Usage:

```typescript
const triggerRef = useScrollAnimation((tl) => {
  tl.from(elementRef.current, { opacity: 0, y: 50, duration: 0.8 });
}, { once: true });

return <div ref={triggerRef}>Content</div>;
```

## Useful Resources

- [GSAP Docs](https://gsap.com/docs/v3/)
- [ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [Easing Functions](https://gsap.com/docs/v3/Eases)
- [GSAP Examples](https://codepen.io/collection/DPvnZq)

## Common Easing Functions

```typescript
ease: 'linear'              // Constant speed
ease: 'power1.in'           // Slow start
ease: 'power1.out'          // Slow end
ease: 'power1.inOut'        // Slow start and end
ease: 'power2.out'          // Faster end deceleration
ease: 'back.out'            // Overshoot effect
ease: 'elastic.out'         // Spring effect
ease: 'bounce.out'          // Bounce effect
ease: 'circ.out'            // Circular
ease: 'sine.inOut'          // Smooth sine wave
```

---

**Happy Animating!** 🎨

For more examples, check the component files in `components/` folder.
