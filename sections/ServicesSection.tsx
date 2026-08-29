import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import SectionDescription from '../components/SectionDescription';

const SERVICES = [
  { name: "تنظيم الحسابات ومسك الدفاتر", link: "/services/bookkeeping" },
  { name: "الزكاة والضريبة", link: "/services/zakat-tax" },
  { name: "إعداد القوائم المالية", link: "/services/financial-statements" },
  { name: "التحليل المالي", link: "/services/financial-analysis" },
  { name: "التقارير الإدارية", link: "/services/management-reports" },
  { name: "إعداد الموازنات", link: "/services/budgeting" },
  { name: "إدارة التدفقات النقدية", link: "/services/cash-flow" },
  { name: "المدير المالي عن بعد Virtual CFO", link: "/services/virtual-cfo" }
];

export default function ServicesSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="services-section-wrapper" variant="white" spacing="dense" {...props}>
      <Container id="services-container">
        <div id="services-content" className="flex flex-col space-y-5 max-w-3xl mx-auto text-center items-center">
          
          {/* Section Header */}
          <div id="services-header" className="flex flex-col space-y-1.5 text-center items-center">
            <SectionTitle id="services-title" level={2} className="font-bold">
              ماذا أتولى داخل منشأتك
            </SectionTitle>
            <SectionDescription id="services-description" className="text-center max-w-2xl text-text-secondary text-xs sm:text-sm">
              أتولى إدارة وتنظيم الجوانب المالية التي تحتاجها المنشآت لتصبح الحسابات واضحة والتقارير دقيقة والقرارات مبنية على أرقام فعلية.
            </SectionDescription>
          </div>

          {/* Simple, lightweight list */}
          <div 
            id="services-list-container" 
            className="w-full max-w-xl bg-surface-subtle/30 rounded-xl p-3 sm:p-4 border border-border-subtle"
          >
            <ul 
              id="services-list" 
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-right w-full"
            >
              {SERVICES.map((service, index) => (
                <li key={index} id={`services-item-${index}`}>
                  <a 
                    href={service.link}
                    className="group flex items-center justify-between p-2.5 rounded-lg bg-white border border-border-subtle hover:border-secondary/50 hover:bg-surface-muted/40 transition-all duration-150 text-xs md:text-sm font-medium font-arabic shadow-[0_1px_2px_rgba(0,0,0,0.01)]"
                  >
                    <div className="flex items-center gap-x-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary group-hover:scale-125 transition-transform" aria-hidden="true" />
                      <span className="text-secondary hover:text-secondary-dark font-medium transition-colors">
                        {service.name}
                      </span>
                    </div>
                    <span className="text-secondary/70 group-hover:text-secondary group-hover:-translate-x-0.5 transition-all text-xs font-sans leading-none" aria-hidden="true">
                      ←
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subtle link to Financial Library */}
          <div id="services-blog-link" className="pt-1">
            <a 
              href="/blog" 
              className="inline-flex items-center gap-x-1.5 text-xs sm:text-sm text-text-secondary hover:text-primary font-arabic font-medium transition-colors"
            >
              <span>استكشف المكتبة المالية — أدلة عملية لأصحاب المنشآت</span>
              <span className="text-secondary text-base leading-none">←</span>
            </a>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
