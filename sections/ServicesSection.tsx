import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import SectionDescription from '../components/SectionDescription';

const SERVICES = [
  "تنظيم الحسابات",
  "مسك الدفاتر",
  "إعداد القوائم المالية",
  "التحليل المالي",
  "التقارير الإدارية",
  "إعداد الموازنات",
  "إدارة التدفقات النقدية",
  "المدير المالي عن بعد Virtual CFO"
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
            className="w-full max-w-xl bg-surface-subtle/30 rounded-xl p-4 sm:p-5 border border-border-subtle"
          >
            <ul 
              id="services-list" 
              className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-y-2 gap-x-4 text-right w-full"
            >
              {SERVICES.map((service, index) => (
                <li 
                  key={index} 
                  id={`services-item-${index}`}
                  className="flex items-center gap-x-2 text-text-primary text-xs md:text-sm font-medium font-arabic w-full sm:w-[47%]"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
