'use client';

import * as React from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = React.useState<'up' | 'down' | null>(null);
  const scrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < scrollY.current) {
        setScrollDirection('up');
      }

      scrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollDirection;
};

export const useScrollTriggerAnimation = (
  ref: React.RefObject<HTMLElement>,
  animationCallback?: (trigger: any) => void
) => {
  React.useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    animationCallback?.(element);

    return () => {
      // Cleanup if needed
    };
  }, [ref, animationCallback]);
};
