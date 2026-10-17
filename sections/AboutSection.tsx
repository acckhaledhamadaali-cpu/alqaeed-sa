import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

export default function AboutSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper
      id="about-section-wrapper"
      variant="white"
      spacing="dense"
      itemScope
      itemType="https://schema.org/Person"
      {...props}
    >
      <Container id="about-container">
        <div id="about-content" className="w-full md:max-w-full mx-auto text-right">
          <div id="about-header" className="w-full text-center mb-4 md:mb-5">
            <SectionTitle id="about-title" level={2} className="font-bold">
              أنا خالد القائد، محاسب مالي
            </SectionTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-10 md:gap-y-6 items-start">
            <div id="about-intro" className="text-right">
              <p className="text-xs sm:text-sm md:text-base text-text-primary font-medium leading-relaxed font-arabic">
                أمتلك 9 سنوات من الخبرة العملية في المحاسبة والإدارة المالية، منها 6 سنوات داخل المملكة العربية السعودية. أتولى أعمال المحاسب المالي الداخلي عن بُعد، بما يشمل تنظيم الحسابات ومسك الدفاتر والتسويات وتأسيس الدورة المستندية والأنظمة المحاسبية للمنشآت الجديدة. كما أجهّز القوائم المالية ومتابعة رفعها عبر منصة قوائم وفق المتطلبات والصلاحيات المتاحة، وأهيئ وأدير نظام أودو Odoo ERP حسب نشاط المنشأة، وأعدّ الإقرارات الضريبية والزكوية وفق متطلبات هيئة الزكاة والضريبة والجمارك السعودية. وتشمل الخدمات التحليل المالي المتقدم وتقارير الأداء الإداري والسيولة والتدفقات النقدية.
              </p>
              <p className="mt-3 text-xs sm:text-sm md:text-base text-text-primary font-medium leading-relaxed font-arabic">
                هدفي ليس تسجيل الأرقام فقط، بل تحويل البيانات المالية إلى صورة واضحة تساعدك على فهم وضع منشأتك واتخاذ قرارات أفضل. تُعامل البيانات بسرية، ويمكن الاتفاق على توقيع اتفاقية عدم إفصاح (NDA) قبل تبادل المستندات؛ وتُتخذ إجراءات مناسبة لحماية المعلومات ضمن وسائل العمل المتاحة.
              </p>
            </div>

            <div id="about-trust-indicators" className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-right">
              <div className="rounded-lg border border-border bg-surface p-3 md:p-4">
                <h3 className="text-xs md:text-sm font-bold text-text-primary font-arabic">9 سنوات خبرة عملية</h3>
                <p className="mt-1 text-[11px] md:text-xs text-text-secondary leading-relaxed font-arabic">منها 6 سنوات داخل السعودية</p>
              </div>

              <div className="rounded-lg border border-border bg-surface p-3 md:p-4">
                <h3 className="text-xs md:text-sm font-bold text-text-primary font-arabic">بكالوريوس تجارة – محاسبة | MBA</h3>
              </div>

              <div className="rounded-lg border border-border bg-surface p-3 md:p-4">
                <h3 className="text-xs md:text-sm font-bold text-text-primary font-arabic">محاسبة وإدارة مالية متكاملة</h3>
                <p className="mt-1 text-[11px] md:text-xs text-text-secondary leading-relaxed font-arabic">تحليل • تقارير • أودو ERP • زكاة وضريبة</p>
              </div>

              <div className="rounded-lg border border-border bg-surface p-3 md:p-4">
                <h3 className="text-xs md:text-sm font-bold text-text-primary font-arabic">أعمل معك عن بُعد</h3>
                <p className="mt-1 text-[11px] md:text-xs text-text-secondary leading-relaxed font-arabic">متابعة مالية منظمة عن بُعد مع مراعاة سرية البيانات واتفاقية NDA عند الاتفاق.</p>
              </div>
            </div>
          </div>

          <section id="financial-report-preview" className="mt-6 border-t border-border-subtle pt-5 text-right">
            <div className="mb-3 text-center">
              <h3 className="text-sm sm:text-base font-bold text-text-primary font-arabic">شاهد ما الذي توضحه تقارير منشأتك</h3>
              <p className="mt-1 text-xs sm:text-sm text-text-secondary font-arabic">أمثلة على المعلومات التي يمكن تنظيمها وعرضها بحسب البيانات المتاحة ونطاق الخدمة.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-lg border border-border bg-surface p-3">
                <h4 className="text-xs sm:text-sm font-bold text-text-primary font-arabic">الأداء والربحية</h4>
                <p className="mt-1 text-[11px] sm:text-xs text-text-secondary leading-relaxed font-arabic">الإيرادات والمصروفات وصافي نتيجة الفترة ومقارنتها بالفترات السابقة عند توفر البيانات.</p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-3">
                <h4 className="text-xs sm:text-sm font-bold text-text-primary font-arabic">السيولة والتدفقات النقدية</h4>
                <p className="mt-1 text-[11px] sm:text-xs text-text-secondary leading-relaxed font-arabic">متابعة المقبوضات والمدفوعات والالتزامات المتوقعة لدعم التخطيط النقدي.</p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-3">
                <h4 className="text-xs sm:text-sm font-bold text-text-primary font-arabic">المؤشرات المالية</h4>
                <p className="mt-1 text-[11px] sm:text-xs text-text-secondary leading-relaxed font-arabic">مؤشرات مختارة تساعد على فهم الأداء واتخاذ القرار، وفق طبيعة النشاط وجودة البيانات.</p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </SectionWrapper>
  );
}
