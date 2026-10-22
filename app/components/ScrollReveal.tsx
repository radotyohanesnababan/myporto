"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Avoid running in environments without window / IntersectionObserver
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    // Give Next.js a microtick to render DOM on page navigation
    const timeoutId = setTimeout(() => {
      // Find candidate elements across the page:
      // sections, articles, cards within grids/lists, and explicitly marked elements
      const candidates = document.querySelectorAll<HTMLElement>(
        "main section, main article, main [data-reveal], main .scroll-reveal, main .grid > div, main .grid > article"
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              // Unobserve once revealed so it remains visible and performant
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -40px 0px",
          threshold: 0.08,
        }
      );

      candidates.forEach((el, index) => {
        // Skip navbars, footers, docks, or explicitly excluded elements
        if (
          el.closest("aside") ||
          el.closest("nav") ||
          el.closest("footer") ||
          el.classList.contains("no-reveal") ||
          el.closest(".no-reveal")
        ) {
          return;
        }

        // Add the scroll-reveal base class
        if (!el.classList.contains("scroll-reveal")) {
          el.classList.add("scroll-reveal");
        }

        // If in viewport on initial load, reveal immediately or with soft stagger
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

        if (isInViewport) {
          // Soft initial entrance
          el.classList.add("is-revealed");
        } else {
          // Stagger cards slightly within grid columns if applicable
          if (el.parentElement?.classList.contains("grid")) {
            const staggerIndex = (index % 3) + 1;
            el.classList.add(`scroll-reveal-stagger-${staggerIndex}`);
          }
          observer.observe(el);
        }
      });

      return () => {
        observer.disconnect();
      };
    }, 40);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
