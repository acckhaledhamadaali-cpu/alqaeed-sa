import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import SectionDescription from '../components/SectionDescription';
import { TYPOGRAPHY, RADIUS, TRANSITIONS } from '../src/lib/tokens';

interface ServiceItem {
  title: string;
  items: string[];
}

const SERVICES: ServiceItem[] = [
  {
    title: "الرقابة والمحاسبة المالية",
    items: [
      "تأسيس الدورة المستندية",
      "إعداد القيود والإقفالات الدورية",
      "إصدار القوائم المالية الدقيقة",
      "مطابقة التسويات البنكية",
      "بناء التقارير المحاسبية"
    ]
  },
  {
    title: "التحليل الاستراتيجي",
    items: [
      "تقييم الأداء المالي",
      "تحليل هوامش الربحية",
      "إدارة التدفقات النقدية",
      "تخطيط وإعداد الموازنات",
      "قياس مؤشرات الأداء KPIs"
    ]
  },
  {
    title: "الامتثال الضريبي والزكوي",
    items: [
      "إدارة ضريبة القيمة المضافة VAT",
      "احتساب الإقرارات الزكوية",
      "تطبيق الفاتورة الإلكترونية",
      "مراجعة الالتزام وتجنب الغرامات"
    ]
  },
  {
    title: "القيادة المالية (CFO)",
    items: [
      "إدارة مالية خارجية Virtual CFO",
      "الاستشارات المالية المخصصة",
      "التخطيط المالي للمستقبل",
      "تطوير الأنظمة والإجراءات",
      "دعم القرارات الاستراتيجية"
    ]
  }
];

export default function ServicesSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="services-section-wrapper" variant="white" spacing="default" {...props}>
      <Container id="services-container">
        <div id="services-content" className="flex flex-col space-y-12 md:space-y-16 items-center">
          
          {/* Header */}
          <div id="services-header" className="flex flex-col space-y-4 text-center items-center max-w-3xl">
            <SectionTitle id="services-title" level={2} className="font-bold">
              حلول مالية متكاملة لتمكين أعمالك
            </SectionTitle>

            <SectionDescription id="services-description" className="text-center">
              صممنا باقة من الخدمات المالية المترابطة التي تغطي كافة احتياجات منشأتك لتضمن لك الامتثال المالي وتعظم أرباحك بطريقة منهجية ومدروسة
            </SectionDescription>
          </div>

          {/* Cards Grid: 4 columns on large screens, 2 columns on medium, 1 column on mobile */}
          <div 
            id="services-grid" 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch"
            role="list"
            aria-label="خدمات الإدارة المالية المتكاملة"
          >
            {SERVICES.map((service, index) => (
              <div 
                key={index}
                id={`service-card-${index}`}
                className={`bg-white border border-white p-6 sm:p-8 ${RADIUS.large} ${TRANSITIONS.fast} hover:border-secondary/30 flex flex-col space-y-4 text-right h-full shadow-[0_2px_8px_rgba(0,0,0,0.01)]`}
                role="listitem"
              >
                <h3 
                  id={`service-card-title-${index}`}
                  className={`${TYPOGRAPHY.heading.h2} text-text-primary font-bold border-b border-white pb-3`}
                >
                  {service.title}
                </h3>
                <ul id={`service-card-list-${index}`} className="space-y-3 pt-2">
                  {service.items.map((item, itemIdx) => (
                    <li 
                      key={itemIdx} 
                      id={`service-card-item-${index}-${itemIdx}`}
                      className={`${TYPOGRAPHY.body.normal} flex items-center space-x-2 space-x-reverse font-bold`}
                    >
                      <span className="text-secondary font-bold text-sm select-none">•</span>
                      <span className="text-text-secondary font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
