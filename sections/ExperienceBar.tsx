import { HTMLAttributes } from 'react';
import Container from '../components/Container';

const ITEMS = [
  "ماجستير إدارة الأعمال (MBA)",
  "محاسبة مالية وإدارة سيولة",
  "تحليل مالي وتقارير إدارية",
  "إدارة مالية ومتابعة سيولة عن بعد",
  "أنظمة المحاسبة وERP"
];

export default function ExperienceBar(props: HTMLAttributes<HTMLElement>) {
  return (
    <section 
      id="experience-bar-section" 
      className="bg-surface-muted/30 border-y border-border-subtle py-3 md:py-4 overflow-hidden"
      {...props}
    >
      <Container id="experience-bar-container">
        <div className="w-full overflow-hidden" dir="ltr" aria-label="المؤهلات والخبرات">
          <div
            id="experience-bar-items"
            className="flex w-max animate-marquee [animation-direction:reverse] hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center text-center text-xs md:text-sm font-medium tracking-wide font-sans text-text-secondary"
          >
            {[0, 1].map((set) => (
              <div
                key={set}
                className="flex shrink-0 items-center whitespace-nowrap motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:whitespace-normal"
                aria-hidden={set === 1}
              >
                {ITEMS.map((item, index) => (
                  <div key={index} className="flex items-center gap-x-3 px-3 sm:gap-x-5 sm:px-5">
                    <span id={set === 0 ? `exp-item-${index}` : undefined} className="hover:text-text-primary transition-colors duration-150">
                      {item}
                    </span>
                    <span
                      id={set === 0 ? `exp-divider-${index}` : undefined}
                      className="text-text-muted/40 select-none font-light text-xs sm:text-sm"
                      aria-hidden="true"
                    >
                      |
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
