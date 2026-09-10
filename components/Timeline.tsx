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
    title: "الاجتماع وتوقيع اتفاقية السرية (NDA)",
    description: "دراسة نشاطك، فهم احتياجاتك المالية، وتوقيع اتفاقية عدم الإفصاح لضمان السرية التامة لبيانات منشأتك."
  },
  {
    number: "2",
    title: "الربط مع نظامك المحاسبي (Integration)",
    description: "الاندماج مع برنامجك الحالي، سحب البيانات بأمان، وتقييم جودة وصحة الإدخالات المحاسبية."
  },
  {
    number: "3",
    title: "تسليم ومناقشة التقرير الأول",
    description: "إصدار أول تقرير مالي وإداري، وعقد جلسة تحليل لمناقشة النتائج وتقديم التوصيات الاستراتيجية."
  }
];

export default function Timeline({ className = '', ...props }: TimelineProps) {
  return (
    <div 
      id="timeline-container" 
      className={`flex flex-col md:flex-row md:gap-6 ${className}`} 
      role="list"
      aria-label="خطوات ومنهجية العمل المحاسبي والمالي المشترك"
      {...props}
    >
      {STEPS.map((step, index) => (
        <div 
          key={index} 
          id={`timeline-step-${index}`} 
          className="flex gap-4 md:flex-col md:gap-3 items-stretch md:items-start md:flex-1"
          role="listitem"
        >
          {/* Vertical line and step number container */}
          <div className="flex flex-col md:flex-row items-center md:items-center flex-shrink-0 md:w-full">
            {/* Step Number Circle */}
            <div 
              id={`timeline-step-circle-${index}`} 
              className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary text-white flex items-center justify-center font-bold text-[8px] md:text-[10px] select-none z-10"
            >
              {step.number}
            </div>
            {/* Thin vertical line connecting steps */}
            {index < STEPS.length - 1 && (
              <div 
                id={`timeline-step-line-${index}`} 
                className="w-[1.5px] md:w-full md:h-[1.5px] md:min-h-[1.5px] md:min-w-[16px] bg-border-subtle flex-1 my-1 md:my-0 md:mx-3 min-h-[16px]" 
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

