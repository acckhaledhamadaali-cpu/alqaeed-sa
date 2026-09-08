import { HTMLAttributes } from 'react';

const ITEMS = [
  "ماجستير إدارة الأعمال (MBA)",
  "محاسبة مالية وإدارة سيولة",
  "تحليل مالي وتقارير إدارية",
  "إدارة مالية عن بعد (Virtual CFO)",
  "أنظمة المحاسبة وERP"
];

// Duplicate items to ensure continuous scrolling
const SCROLL_ITEMS = [...ITEMS, ...ITEMS, ...ITEMS];

export default function ExperienceBar(props: HTMLAttributes<HTMLElement>) {
  return (
    <section 
      id="experience-bar-section" 
      className="bg-surface-muted/30 border-y border-border-subtle py-3 md:py-4 overflow-hidden relative w-full flex items-center"
      {...props}
    >
      <div 
        id="experience-bar-track"
        className="flex whitespace-nowrap animate-marquee w-max items-center text-xs md:text-sm font-medium tracking-wide font-sans text-text-secondary"
      >
        {SCROLL_ITEMS.map((item, index) => (
          <div key={index} className="flex items-center mx-4 sm:mx-6">
            <span id={`exp-item-${index}`} className="hover:text-text-primary transition-colors duration-150">
              {item}
            </span>
            <span 
              id={`exp-divider-${index}`} 
              className="text-text-muted/40 select-none font-light text-xs sm:text-sm mr-8 sm:mr-12"
              aria-hidden="true"
            >
              |
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
