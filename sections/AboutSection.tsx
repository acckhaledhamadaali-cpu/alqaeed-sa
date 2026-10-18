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
              شريكك المالي الافتراضي: خبرة ممتدة في بيئة الأعمال السعودية
            </SectionTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-10 md:gap-y-6 items-start">
            <div id="about-intro" className="text-right">
              <p className="text-xs sm:text-sm md:text-base text-text-primary font-medium leading-relaxed font-arabic">
                أنا خالد القائد، محاسب مالي أمتلك 9 سنوات من الخبرة العملية في المحاسبة والإدارة المالية، منها 6 سنوات كاملة داخل المملكة العربية السعودية. حصلت على ماجستير إدارة الأعمال (MBA)، وتخصصت في تحويل البيانات المالية المعقدة إلى تقارير إدارية واضحة تساعد الإدارة والشركات المتنامية على فهم أداء منشآتهم واتخاذ قرارات أفضل وصحيحة.
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
            <div className="mb-4 text-center">
              <h3 className="text-sm font-bold text-text-primary sm:text-base">هذا ما ستراه في تقريرك</h3>
              <p className="mt-1 text-xs text-text-secondary sm:text-sm">نموذج توضيحي ببيانات افتراضية، يختلف حسب نشاطك وجودة بياناتك.</p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-surface p-4">
                <p className="text-xs text-text-secondary">صافي الربح</p>
                <p className="mt-2 text-2xl font-extrabold text-text-primary">+12.4%</p>
                <div className="mt-3 h-2 rounded-full bg-slate-100"><div className="h-2 w-3/4 rounded-full bg-emerald-500" /></div>
                <p className="mt-2 text-[11px] text-text-muted">مقارنة بالفترة السابقة</p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-4">
                <p className="text-xs text-text-secondary">السيولة المتوقعة</p>
                <p className="mt-2 text-2xl font-extrabold text-text-primary">13 أسبوعًا</p>
                <div className="mt-3 flex h-8 items-end gap-1"><span className="h-3 w-1/6 rounded-sm bg-emerald-200" /><span className="h-5 w-1/6 rounded-sm bg-emerald-300" /><span className="h-4 w-1/6 rounded-sm bg-emerald-400" /><span className="h-7 w-1/6 rounded-sm bg-emerald-500" /><span className="h-6 w-1/6 rounded-sm bg-emerald-400" /><span className="h-8 w-1/6 rounded-sm bg-emerald-600" /></div>
                <p className="mt-2 text-[11px] text-text-muted">توقع المقبوضات والمدفوعات</p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-4">
                <p className="text-xs text-text-secondary">أولوية تحتاج قرارًا</p>
                <p className="mt-2 text-lg font-extrabold text-text-primary">ذمم متأخرة</p>
                <div className="mt-3 flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-amber-400" /><span className="text-xs font-bold text-amber-700">مراجعة التحصيل</span></div>
                <p className="mt-2 text-[11px] text-text-muted">نحوّل الرقم إلى خطوة عملية</p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </SectionWrapper>
  );
}
