import { HTMLAttributes } from 'react';
import { TYPOGRAPHY, RADIUS } from '../src/lib/tokens';

export interface ProblemChecklistProps extends HTMLAttributes<HTMLDivElement> {
  // Prop declarations if any
}

const QUESTIONS = [
  'هل تحقق منشأتك مبيعات جيدة لكن لا تعرف أرباحك الحقيقية',
  'هل تعتمد على رصيد البنك لمعرفة وضع منشأتك المالي',
  'هل تزداد المصروفات كل شهر دون أن تعرف السبب',
  'هل تعرف أين تذهب أموال منشأتك',
  'هل تعرف تكلفة المنتج أو الخدمة بعد احتساب جميع المصروفات',
  'هل تقلق من الزكاة أو الضرائب أو الفاتورة الإلكترونية',
  'هل تمتلك تقارير مالية واضحة تساعدك على اتخاذ القرار',
  'هل تكتشف الأخطاء والخسائر بعد فوات الأوان',
  'هل تقضي وقتا طويلا في متابعة الحسابات بدلا من تطوير منشأتك',
  'هل تشعر براحة واطمئنان تجاه الوضع المالي لمنشأتك'
];

export default function ProblemChecklist({ className = '', ...props }: ProblemChecklistProps) {
  return (
    <div 
      id="problem-checklist-container" 
      className={className} 
      {...props}
    >
      {QUESTIONS.map((question, index) => (
        <div 
          key={index} 
          id={`problem-checklist-row-${index}`} 
          className="flex items-start space-x-3 space-x-reverse"
        >
          {/* Simple custom visual checkbox, relying on tokens, no animations */}
          <div 
            id={`problem-checkbox-visual-${index}`} 
            className={`w-5 h-5 mt-1 flex-shrink-0 border border-border flex items-center justify-center text-secondary bg-white ${RADIUS.small}`}
          >
            <span className="text-xs font-bold select-none">✓</span>
          </div>
          <span 
            id={`problem-checklist-text-${index}`} 
            className={`${TYPOGRAPHY.body.normal} flex-1`}
          >
            {question}
          </span>
        </div>
      ))}
    </div>
  );
}

