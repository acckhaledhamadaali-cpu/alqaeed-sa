import { HTMLAttributes } from 'react';
import Container from '../components/Container';

const ITEMS = [
  "إعداد وتخصيص نظام أودو Odoo حسب نشاطك",
  "إعداد القوائم المالية والتقارير الزكوية والضريبية",
  "التسويات البنكية وتحليل الأداء وإدارة التدفقات النقدية",
  "سرية تامة للبيانات مع إمكانية توقيع اتفاقية عدم إفصاح قبل استلام المستندات"
];

export default function ExperienceBar(props: HTMLAttributes<HTMLElement>) {
  return (
    <section
      id="experience-bar-section"
      className="bg-surface-muted/30 border-y border-border-subtle py-3 md:py-4 overflow-hidden"
      {...props}
    >
      <Container id="experience-bar-container">
        <div className="w-full overflow-hidden" dir="rtl" aria-label="خدمات القائد المالية">
          <div
            id="experience-bar-items"
            className="flex w-max gap-0 animate-marquee hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center text-center text-xs md:text-sm font-medium tracking-wide font-sans text-text-secondary"
          >
            {[0, 1].map((set) => (
              <div
                key={set}
                className="flex shrink-0 items-center gap-0 whitespace-nowrap motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:whitespace-normal"
                aria-hidden={set === 1}
              >
                {[0, 1].flatMap((repeat) => ITEMS.map((item, index) => (
                  <div key={`${repeat}-${index}`} className="flex shrink-0 items-center gap-x-2 px-2 sm:gap-x-3 sm:px-3">
                    <span id={set === 0 && repeat === 0 ? `exp-item-${index}` : undefined} className="hover:text-text-primary transition-colors duration-150" dir="rtl">
                      {item}
                    </span>
                    <span
                      id={set === 0 && repeat === 0 ? `exp-divider-${index}` : undefined}
                      className="text-text-muted/40 select-none font-light text-xs sm:text-sm"
                      aria-hidden="true"
                    >
                      |
                    </span>
                  </div>
                )))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
