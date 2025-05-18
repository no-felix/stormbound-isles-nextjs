import { useEffect } from 'react';

/**
 * useScrollSnapSection
 * Adds scroll snapping and magnetic auto-scroll to sections.
 * @param sectionIds Array of section IDs to snap to (in order)
 * @param offsetPx Optional offset in px (e.g. navbar height)
 */
export function useScrollSnapSection(sectionIds: string[], offsetPx: number = 0) {
  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;
    let timeout: number | null = null;

    function getSectionRects() {
      return sectionIds.map(id => {
        const el = document.getElementById(id);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = rect.bottom + window.scrollY;
        return { id, el, top, bottom };
      }).filter(Boolean) as { id: string, el: HTMLElement, top: number, bottom: number }[];
    }

    function findClosestSection(scrollY: number) {
      const sections = getSectionRects();
      let minDist = Infinity;
      let closest: { id: string, el: HTMLElement, top: number, bottom: number } | null = null;
      for (const s of sections) {
        const dist = Math.abs(s.top - offsetPx - scrollY);
        if (dist < minDist) {
          minDist = dist;
          closest = s;
        }
      }
      return closest;
    }

    function onScroll() {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (timeout) window.clearTimeout(timeout);
          timeout = window.setTimeout(() => {
            const closest = findClosestSection(window.scrollY);
            if (!closest) return;
            const sectionTop = closest.top - offsetPx;
            // Only snap if within 120px of a section
            if (Math.abs(window.scrollY - sectionTop) < 120) {
              window.scrollTo({ top: sectionTop, behavior: 'smooth' });
            }
          }, 60);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timeout) window.clearTimeout(timeout);
    };
  }, [sectionIds, offsetPx]);
}
