import { HTMLAttributes } from 'react';
import Container from '../components/Container';

const ITEMS = [
  "+9 Years Experience",
  "MBA",
  "Financial Accounting",
  "Financial Analysis",
  "Virtual CFO",
  "IFRS",
  "ERP Systems"
];

export default function ExperienceBar(props: HTMLAttributes<HTMLElement>) {
  return (
    <section 
      id="experience-bar-section" 
      className="bg-surface-muted/30 border-y border-border-subtle py-3 md:py-4 overflow-hidden"
      {...props}
    >
      <Container id="experience-bar-container">
        <div 
          id="experience-bar-items"
          className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-2 text-center text-xs md:text-sm font-medium tracking-wide font-sans text-text-secondary"
        >
          {ITEMS.map((item, index) => (
            <div key={index} className="flex items-center gap-x-3 sm:gap-x-5">
              <span id={`exp-item-${index}`} className="hover:text-text-primary transition-colors duration-150">
                {item}
              </span>
              {index < ITEMS.length - 1 && (
                <span 
                  id={`exp-divider-${index}`} 
                  className="text-text-muted/40 select-none font-light text-xs sm:text-sm"
                  aria-hidden="true"
                >
                  |
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
