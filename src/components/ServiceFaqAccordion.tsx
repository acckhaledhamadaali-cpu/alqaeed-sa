import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFaqAccordionProps {
  faqs: FAQItem[];
  title?: string;
}

export default function ServiceFaqAccordion({ faqs, title = "الأسئلة الشائعة حول الخدمة" }: ServiceFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="my-8 pt-6 border-t border-border-subtle" id="service-faq-section">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-5 h-5 text-secondary" aria-hidden="true" />
        <h2 className="text-base md:text-lg font-bold text-text-primary font-arabic">
          {title}
        </h2>
      </div>
      <div className="space-y-3" role="region" aria-label="الأسئلة الشائعة">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-border-subtle rounded-xl overflow-hidden bg-surface-subtle/40 transition-colors hover:border-border"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between p-4 text-right font-bold text-xs sm:text-sm text-text-primary hover:text-primary transition-colors gap-3"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-text-muted shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-primary' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-xs md:text-sm text-text-secondary leading-relaxed border-t border-border-subtle/40 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
