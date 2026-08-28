import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import { TYPOGRAPHY } from '../src/lib/tokens';

interface ChallengeItem {
  problem: string;
  solution: string;
}

const CHALLENGES: ChallengeItem[] = [
  {
    problem: "عدم وضوح صافي الأرباح والأداء المالي الحقيقي",
    solution: "إعداد القوائم والتقارير الدورية التي توضح نتائج الأعمال بدقة."
  },
  {
    problem: "عدم انتظام الحسابات والبيانات المالية",
    solution: "تنظيم القيود المحاسبية وتجهيز متطلبات الامتثال والزكاة والضريبة."
  },
  {
    problem: "غياب التقارير المالية المفيدة لاتخاذ القرار",
    solution: "إصدار تقارير وتحليلات دورية تمنح الإدارة رؤية واضحة لأداء المنشأة."
  },
  {
    problem: "ضعف وضوح التدفقات النقدية والسيولة",
    solution: "متابعة حركة المقبوضات والمدفوعات لتأمين الالتزامات وتفادي أي فجوات نقدية."
  },
  {
    problem: "الحاجة لإدارة مالية متقدمة بتكلفة مرنة",
    solution: "إشراف مالي واستراتيجي عن بعد دون تحمل أعباء التوظيف الثابت الكامل."
  }
];

export default function ChallengesSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="challenges-section-wrapper" variant="white" spacing="dense" {...props}>
      <Container id="challenges-container">
        <div id="challenges-content" className="flex flex-col space-y-4 max-w-2xl mx-auto text-right">
          
          {/* Header */}
          <div id="challenges-header" className="text-right pb-1">
            <h2 id="challenges-title" className={`${TYPOGRAPHY.heading.h2} text-text-primary font-bold font-arabic`}>
              هل تواجه أحد هذه التحديات في منشأتك؟
            </h2>
          </div>

          {/* List of Challenges */}
          <div id="challenges-list" className="flex flex-col space-y-3.5">
            {CHALLENGES.map((item, index) => (
              <div 
                key={index} 
                id={`challenge-item-${index}`}
                className="pb-3.5 last:pb-0 border-b border-slate-100 last:border-b-0 flex flex-col space-y-1 text-right"
              >
                <div id={`challenge-prob-row-${index}`} className="flex items-start space-x-1.5 space-x-reverse">
                  <span id={`challenge-check-${index}`} className="text-secondary font-bold text-sm md:text-base select-none leading-none mt-0.5">✓</span>
                  <h3 id={`challenge-problem-${index}`} className="text-xs sm:text-sm md:text-base font-bold text-text-primary leading-relaxed">
                    {item.problem}
                  </h3>
                </div>
                <div id={`challenge-sol-row-${index}`} className="pr-4 sm:pr-5">
                  <p id={`challenge-solution-${index}`} className="text-[11px] sm:text-xs md:text-sm text-text-secondary leading-relaxed font-arabic">
                    <span id={`challenge-label-${index}`} className="text-secondary font-semibold ml-1">الحل:</span>
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
