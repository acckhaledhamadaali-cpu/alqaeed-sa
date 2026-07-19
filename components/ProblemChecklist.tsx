import { HTMLAttributes } from 'react';
import { TYPOGRAPHY, RADIUS } from '../src/lib/tokens';

export interface ProblemChecklistProps extends HTMLAttributes<HTMLDivElement> {
  // Prop declarations if any
}

const QUESTIONS = [
  'تحقق مبيعات مرتفعة ولكن تجد صعوبة في تحديد صافي الربح الحقيقي',
  'تواجه تحديات في التحكم في المصروفات وإدارة السيولة النقدية',
  'تعاني من نقص السيولة المفاجئ رغم تحقيق مبيعات جيدة',
  'تجد صعوبة في اتخاذ القرارات لغياب التقارير المالية الدقيقة',
  'تستنزف التفاصيل المحاسبية وقتك بدلاً من التركيز على الإدارة والتوجيه',
  'تواجه صعوبات في التخطيط والامتثال للالتزامات الضريبية والزكوية'
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

