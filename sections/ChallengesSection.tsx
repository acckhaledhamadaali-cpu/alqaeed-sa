import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import { TYPOGRAPHY } from '../src/lib/tokens';

const CHALLENGES = [
  { problem: "المبيعات نشطة لكن لا تعرف صافي ربحك الحقيقي", slug: "real-profit" },
  { problem: "صعوبة تسعير المنتجات أو الخدمات وتآكل الأرباح", slug: "product-pricing" },
  { problem: "التفكير في فتح فروع جديدة والخوف من نقص السيولة", slug: "business-expansion" },
  { problem: "العبء المالي والالتزامات الباهظة لتوظيف محاسب ثابت", slug: "remote-accountant" },
  { problem: "خطر إيقاف الخدمات الحكومية بسبب تأخر رفع ميزانية منشأتك", slug: "qawaem-financial-statements" },
  { problem: "مشاكل وغرامات إقرارات هيئة الزكاة والضريبة المعلقة", slug: "zatca-tax-returns" }
];

/**
 * Deterministic daily shuffle: every visitor sees the same order for a given UTC date.
 * The seeded pseudo-random generator avoids hydration differences and changes the order daily.
 */
function shuffleForDate(dateKey: string) {
  let seed = 2166136261;

  for (let i = 0; i < dateKey.length; i++) {
    seed ^= dateKey.charCodeAt(i);
    seed = Math.imul(seed, 16777619);
  }

  const random = () => {
    seed += 0x6D2B79F5;
    let value = seed;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };

  const shuffled = [...CHALLENGES];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getDailyChallenges() {
  const today = new Date();
  const todayKey = today.toISOString().slice(0, 10);
  const yesterday = new Date(today);
  yesterday.setUTCDate(yesterday.getUTCDate() - 1);
  const yesterdayKey = yesterday.toISOString().slice(0, 10);

  const todayOrder = shuffleForDate(todayKey);
  const yesterdayOrder = shuffleForDate(yesterdayKey);

  // Guarantee the order changes at UTC midnight, even if both seeded shuffles happen to match.
  if (todayOrder.every((item, index) => item.slug === yesterdayOrder[index].slug)) {
    todayOrder.push(todayOrder.shift()!);
  }

  return todayOrder;
}

export default function ChallengesSection(props: HTMLAttributes<HTMLElement>) {
  const dailyChallenges = getDailyChallenges();

  return (
    <SectionWrapper id="challenges-section-wrapper" variant="white" spacing="dense" {...props}>
      <Container id="challenges-container">
        <div id="challenges-content" className="flex flex-col space-y-4 max-w-2xl md:max-w-full mx-auto text-right">
          <div id="challenges-header" className="text-right pb-1">
            <h2 id="challenges-title" className={`${TYPOGRAPHY.heading.h2} text-text-primary font-bold font-arabic`}>
              هل تواجه أحد هذه التحديات في منشأتك؟
            </h2>
          </div>
          <div id="challenges-list" className="flex flex-col md:flex-row md:flex-wrap md:gap-x-8 gap-y-3.5">
            {dailyChallenges.map((item, index) => (
              <div
                key={item.slug}
                id={`challenge-item-${index}`}
                className="w-full md:w-[calc(50%-1rem)] pb-3.5 last:pb-0 border-b border-slate-100 last:border-b-0 text-right"
              >
                <a
                  id={`challenge-link-${index}`}
                  href={`/blog/${item.slug}/`}
                  className="flex items-start justify-between gap-3 text-sm sm:text-base md:text-lg font-bold text-text-primary leading-relaxed hover:text-secondary transition-colors"
                  aria-label={`${item.problem} — اقرأ الحل`}
                >
                  <span>{item.problem}</span>
                  <span className="shrink-0" aria-hidden="true">←</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
