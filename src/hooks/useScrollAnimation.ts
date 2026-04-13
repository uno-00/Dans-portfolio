import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const fadeItems = Array.from(document.querySelectorAll<HTMLElement>(".fade-up"));

    // Apply a per-section delay so content reveals one-by-one while scrolling.
    document.querySelectorAll("section").forEach((section) => {
      const sectionItems = Array.from(section.querySelectorAll<HTMLElement>(".fade-up"));
      sectionItems.forEach((item, index) => {
        const delay = Math.min(index * 0.12, 0.72);
        item.style.transitionDelay = `${delay}s`;
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    fadeItems.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
