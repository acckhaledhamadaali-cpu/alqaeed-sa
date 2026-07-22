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
    problem: "لا تعرف صافي أرباح منشأتك",
    solution: "أعد لك القوائم المالية والتقارير الدورية التي توضح الأرباح الحقيقية بدقة ووضوح."
  },
  {
    problem: "الحسابات غير منظمة",
    solution: "أنظم حساباتك وأبني نظاماً مالياً واضحاً يسهل عليك متابعته دون أي تعقيد."
  },
  {
    problem: "لا توجد تقارير مالية تساعدك على اتخاذ القرار",
    solution: "أصدر لك تقارير مالية وإدارية دورية توضح لك أداء منشأتك وتساعدك على اتخاذ القرارات الصحيحة بثقة."
  },
  {
    problem: "التدفقات النقدية غير واضحة",
    solution: "أتابع حركة المقبوضات والمدفوعات بدقة لضمان توفر السيولة وتفادي أي عجز نقدي مفاجئ."
  },
  {
    problem: "تحتاج إلى خبرة مالية دون تكلفة إدارة مالية كاملة",
    solution: "أتولى تنظيم الحسابات وإعداد القوائم المالية والتقارير المالية بما يمنحك رؤية واضحة دون الحاجة إلى إدارة مالية داخلية."
  },
  {
    problem: "أحتاج إلى مدير مالي لكن تكلفة توظيفه مرتفعة.",
    solution: "أتولى دور المدير المالي عن بعد Virtual CFO لتستفيد من الخبرة المالية والإدارية دون تحمل تكلفة التوظيف الكامل."
  },
  {
    problem: "الزكاة والضرائب تستغرق وقتاً وجهداً",
    solution: "أتولى إعداد وتقديم الإقرارات الزكوية والضريبية لضمان الامتثال التام وتجنب الغرامات."
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

          {/* Elegant Conclusion */}
          <div id="challenges-conclusion" className="pt-4 mt-2 border-t border-slate-100 text-right">
            <p id="challenges-conclusion-text" className="text-xs sm:text-sm text-text-secondary leading-relaxed font-arabic font-medium">
              إذا كانت هذه التحديات تشبه واقع منشأتك فأنا أساعدك على بناء نظام مالي واضح يدعم اتخاذ القرار ويمنحك رؤية دقيقة لأداء أعمالك.
            </p>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
