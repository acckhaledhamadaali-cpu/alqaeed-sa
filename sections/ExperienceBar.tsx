import { HTMLAttributes } from 'react';
import Container from '../components/Container';

const ITEMS = [
  "إعداد وتخصيص نظام أودو Odoo حسب نشاطك",
  "إعداد القوائم المالية والتقارير الزكوية والضريبية",
  "التسويات البنكية وتحليل الأداء وإدارة التدفقات النقدية",
  "سرية تامة للبيانات مع إمكانية توقيع اتفاقية عدم إفصاح قبل استلام المستندات"
];

// Repeat the full sequence so each track is wider than the visible strip.
const LOOP_ITEMS = [...ITEMS, ...ITEMS, ...ITEMS];

export default function ExperienceBar(props: HTMLAttributes<HTMLElement>) {
  return (
    <section
      id="experience-bar-section"
      className="overflow-hidden py-3 md:py-4"
      {...props}
    >
      <Container id="experience-bar-container">
        <div className="w-full overflow-hidden" dir="ltr" aria-label="خدمات القائد المالية">
          <div
            id="experience-bar-items"
            className="flex w-max gap-0 will-change-transform animate-marquee text-center text-xs md:text-sm font-medium tracking-wide font-sans text-text-secondary"
          >
            {[0, 1].map((set) => (
              <div
                key={set}
                className="flex shrink-0 items-center gap-0 whitespace-nowrap"
                dir="rtl"
                aria-hidden={set === 1}
              >
                {LOOP_ITEMS.map((item, index) => (
                  <div key={index} className="flex shrink-0 items-center gap-x-2 px-2 sm:gap-x-3 sm:px-3">
                    <span
                      id={set === 0 && index < ITEMS.length ? `exp-item-${index}` : undefined}
                      className="hover:text-text-primary transition-colors duration-150"
                      dir="rtl"
                    >
                      {item}
                    </span>
                    <span
                      id={set === 0 && index < ITEMS.length ? `exp-divider-${index}` : undefined}
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
