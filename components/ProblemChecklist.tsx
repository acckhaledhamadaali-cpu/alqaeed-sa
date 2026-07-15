import { HTMLAttributes } from 'react';
import { TYPOGRAPHY, RADIUS } from '../src/lib/tokens';

export interface ProblemChecklistProps extends HTMLAttributes<HTMLDivElement> {
  // Prop declarations if any
}

const QUESTIONS = [
  'تبيع كثيراً ولكن لا تعرف أين تذهب الأرباح الحقيقية',
  'تتسرب السيولة النقدية في مصروفات غير مبررة ولا تستطيع إيقافها',
  'تعاني من نقص السيولة المفاجئ رغم تحقيق مبيعات جيدة',
  'تتخذ قراراتك الاستراتيجية بناءً على الحدس لغياب التقارير',
  'تغرق في التفاصيل المحاسبية بدلاً من التفرغ لقيادة فريقك',
  'تتفاجأ بالالتزامات الضريبية والزكوية بسبب غياب التخطيط المالي'
];

export default function ProblemChecklist({ className = '', ...props }: ProblemChecklistProps) {
  return (
    <div 
      id="problem-checklist-container" 
      className={className} 
      role="list"
      aria-label="قائمة الأسئلة والتحديات المالية الشائعة في المنشآت"
      {...props}
    >
      {QUESTIONS.map((question, index) => (
        <div 
          key={index} 
          id={`problem-checklist-row-${index}`} 
          className="flex items-start space-x-3 space-x-reverse"
          role="listitem"
        >
          {/* Simple custom visual checkbox, relying on tokens, no animations */}
          <div 
            id={`problem-checkbox-visual-${index}`} 
            className={`w-5 h-5 mt-1 flex-shrink-0 border border-border flex items-center justify-center text-secondary bg-white ${RADIUS.small}`}
          >
            <span className="text-[8px] font-bold select-none">✓</span>
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

