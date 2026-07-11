import { HTMLAttributes } from 'react';
import { TYPOGRAPHY } from '../src/lib/tokens';

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  // Prop declarations if any
}

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "1",
    title: "تنظيم الحسابات",
    description: "أرتب حسابات منشأتك وأبني نظاماً مالياً واضحاً يناسب طبيعة نشاطك."
  },
  {
    number: "2",
    title: "المتابعة المالية",
    description: "أتابع الإيرادات والمصروفات والعملاء والموردين والتدفقات النقدية بشكل مستمر."
  },
  {
    number: "3",
    title: "التقارير المالية",
    description: "أعد تقارير مالية واضحة وبسيطة توضح الأداء الحقيقي لمنشأتك."
  },
  {
    number: "4",
    title: "التحليل المالي",
    description: "أحلل النتائج وأوضح نقاط القوة والضعف وفرص تحسين الأداء."
  },
  {
    number: "5",
    title: "التوصيات",
    description: "أقدم توصيات عملية تساعدك على اتخاذ قرارات أفضل وتحقيق نمو مستدام."
  }
];

export default function Timeline({ className = '', ...props }: TimelineProps) {
  return (
    <div id="timeline-container" className={`flex flex-col ${className}`} {...props}>
      {STEPS.map((step, index) => (
        <div 
          key={index} 
          id={`timeline-step-${index}`} 
          className="flex gap-4 md:gap-6 items-stretch"
        >
          {/* Vertical line and step number container */}
          <div className="flex flex-col items-center flex-shrink-0">
            {/* Step Number Circle */}
            <div 
              id={`timeline-step-circle-${index}`} 
              className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs md:text-sm select-none z-10"
            >
              {step.number}
            </div>
            {/* Thin vertical line connecting steps */}
            {index < STEPS.length - 1 && (
              <div 
                id={`timeline-step-line-${index}`} 
                className="w-[1.5px] bg-border-subtle flex-1 my-1 min-h-[16px] md:min-h-[24px]" 
              />
            )}
          </div>
          
          {/* Step content */}
          <div className="pb-4 md:pb-7 flex-1 pt-0.5">
            {/* Step Title */}
            <h3 
              id={`timeline-step-title-${index}`} 
              className={`${TYPOGRAPHY.heading.h3} text-text-primary mb-1 md:mb-1.5 font-semibold`}
            >
              {step.title}
            </h3>
            
            {/* Step Description */}
            <p 
              id={`timeline-step-description-${index}`} 
              className={`${TYPOGRAPHY.body.normal} text-text-secondary leading-normal md:leading-relaxed`}
            >
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

