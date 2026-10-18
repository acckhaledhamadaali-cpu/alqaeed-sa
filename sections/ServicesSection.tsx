import { HTMLAttributes, useEffect, useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import SectionDescription from '../components/SectionDescription';

const SERVICES = [
  {
    title: "المحاسبة المالية ومسك الدفاتر",
    desc: "تسجيل القيود اليومية بانتظام وإجراء التسويات البنكية الدورية لضبط نقدية منشأتك.",
    link: "/services/bookkeeping/",
  },
  {
    title: "إعداد القوائم المالية",
    desc: "إعداد الميزانيات العمومية وقوائم الدخل الدورية والسنوية لبيان المركز المالي لأعمالك.",
    link: "/services/financial-statements/",
  },
  {
    title: "تهيئة أنظمة الـ ERP",
    desc: "تخصيص وإدارة وتثبيت نظام أودو (Odoo ERP) بالكامل وتكييفه ليناسب نشاطك الفعلي.",
    link: "/services/virtual-cfo/",
  },
  {
    title: "الزكاة والضريبة والجمارك",
    desc: "تحضير ومراجعة الإقرارات الضريبية والزكوية بامتثال كامل لتفادي المخالفات والغرامات مسبقاً.",
    link: "/services/zakat-tax/",
  },
  {
    title: "التحليل المالي وإدارة السيولة",
    desc: "تحليل هوامش الأرباح ومراقبة التدفقات النقدية والمقبوضات لتأمين التزاماتك وتفادي الفجوات.",
    link: "/services/financial-analysis/",
  },
  {
    title: "التقارير الإدارية",
    desc: "إصدار تقارير دورية تمنح الإدارة وأصحاب القرار رؤية واضحة وشاملة لأداء المنشأة.",
    link: "/services/management-reports/",
  },
  {
    title: "إعداد موازنات تقديرية",
    desc: "وضع الخطط المالية والموازنات التقديرية بدقة لضبط التكاليف والمصاريف المستقبلية.",
    link: "/services/budgeting/",
  },
  {
    title: "إدارة التدفقات النقدية",
    desc: "متابعة دقيقة لحركة المقبوضات والمدفوعات اليومية لضمان نمو واستقرار أعمالك المالي.",
    link: "/services/cash-flow/",
  },
];

export default function ServicesSection(props: HTMLAttributes<HTMLElement>) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveCardIndex((currentIndex) => (currentIndex + 1) % SERVICES.length);
    }, 1500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <SectionWrapper id="services-section-wrapper" variant="white" spacing="dense" {...props}>
      <Container id="services-container">
        <div id="services-content" className="flex flex-col space-y-5 md:max-w-full mx-auto text-center items-center w-full">
          {/* Section Header */}
          <div id="services-header" className="flex flex-col space-y-1.5 text-center items-center">
            <SectionTitle id="services-title" level={2} className="font-bold text-xl md:text-3xl">
              ماذا أتولى وأدير داخل منشأتك التجاريّة
            </SectionTitle>
            <SectionDescription id="services-description" className="text-center max-w-2xl text-text-secondary text-xs sm:text-sm">
              خدمات محاسبية ومالية عن بُعد تشمل تنظيم الحسابات، وإعداد القوائم المالية، وتهيئة الأنظمة المحاسبية، والإقرارات الضريبية والزكوية، وتحليل الأداء والسيولة.
            </SectionDescription>
            <p className="max-w-2xl text-center text-xs sm:text-sm text-text-secondary leading-6">
              تُحدَّد الأتعاب بعد معرفة حجم العمليات، وعدد الفروع، والخدمات المطلوبة.
            </p>
          </div>

          {/* Services list with sequential card glow */}
          <div
            id="services-list-container"
            className="w-full lg:max-w-full max-w-xl bg-surface-subtle/30 rounded-xl p-3 sm:p-4 border border-border-subtle"
          >
            <ul
              id="services-list"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-right w-full"
            >
              {SERVICES.map((service, index) => {
                const isActive = activeCardIndex === index;

                return (
                  <li key={service.title} id={`services-item-${index}`}>
                    <a
                      href={service.link}
                      className={[
                        "group flex h-full items-start justify-between gap-2 p-3 rounded-lg bg-white",
                        "border transition-all duration-500 ease-in-out text-xs md:text-sm font-arabic",
                        "shadow-[0_1px_2px_rgba(0,0,0,0.01)]",
                        isActive
                          ? "z-10 scale-[1.02] border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] opacity-100"
                          : "border-slate-200 opacity-85 hover:border-secondary/50 hover:bg-surface-muted/40",
                      ].join(" ")}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <div className="flex min-w-0 items-start gap-x-2">
                        <span
                          className={[
                            "mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full transition-colors",
                            isActive ? "bg-emerald-500" : "bg-secondary",
                          ].join(" ")}
                          aria-hidden="true"
                        />
                        <span className="min-w-0">
                          <span className="block text-secondary hover:text-secondary-dark font-bold transition-colors">
                            {service.title}
                          </span>
                          <span className="mt-1 block text-text-secondary text-xs font-normal leading-6">
                            {service.desc}
                          </span>
                        </span>
                      </div>
                      <span className="mt-1 shrink-0 text-secondary/70 group-hover:text-secondary group-hover:-translate-x-0.5 transition-all text-xs font-sans leading-none" aria-hidden="true">
                        ←
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Subtle link to Financial Library */}
          <div id="services-blog-link" className="pt-1">
            <a
              href="/blog/"
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
