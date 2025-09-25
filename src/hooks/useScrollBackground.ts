import { useEffect } from 'react';

export const useScrollBackground = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('[data-background-color]');
    const body = document.body;

    // Set initial background color based on the first section
    if (sections.length > 0) {
      const firstSection = sections[0] as HTMLElement;
      const initialColor = firstSection.dataset.backgroundColor;
      if (initialColor) {
        body.style.backgroundColor = initialColor;
      }
    }

    const changeBackground = () => {
      let currentSectionColor = '';

      sections.forEach(section => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop;
        const sectionBottom = sectionTop + htmlSection.clientHeight;
        // Buffer to trigger color change when 1/3 of the section is visible
        const buffer = window.innerHeight / 3;

        if (window.scrollY + window.innerHeight - buffer > sectionTop && 
            window.scrollY + buffer < sectionBottom) {
          currentSectionColor = htmlSection.dataset.backgroundColor || '';
        }
      });

      if (currentSectionColor && body.style.backgroundColor !== currentSectionColor) {
        body.style.backgroundColor = currentSectionColor;
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', changeBackground);
    // Run on initial load
    changeBackground();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);
};