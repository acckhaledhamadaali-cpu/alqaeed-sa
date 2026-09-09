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
        <div id="about-content" className="w-full max-w-5xl mx-auto text-right">
          <div id="about-header" className="w-full text-center mb-5 md:mb-6">
            <SectionTitle id="about-title" level={2} className="font-bold">
              أنا خالد القائد، محاسب مالي
            </SectionTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-10 md:gap-y-6 items-start">
            <div id="about-intro" className="text-right">
              <p className="text-xs sm:text-sm md:text-base text-text-primary font-medium leading-relaxed font-arabic">
                أمتلك 9 سنوات من الخبرة العملية في المحاسبة والإدارة المالية، منها 6 سنوات داخل المملكة العربية السعودية. أعمل مع المنشآت عن بُعد في إدارة ومتابعة أعمالها المالية، من مراجعة المستندات وتسجيل العمليات والتسويات، إلى إعداد القوائم والتقارير والتحليل المالي ومتابعة السيولة والزكاة والضريبة.
              </p>
              <p className="mt-3 text-xs sm:text-sm md:text-base text-text-primary font-medium leading-relaxed font-arabic">
                هدفي ليس تسجيل الأرقام فقط، بل تحويل البيانات المالية إلى صورة واضحة تساعدك على فهم وضع منشأتك واتخاذ قرارات أفضل.
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
                <p className="mt-1 text-[11px] md:text-xs text-text-secondary leading-relaxed font-arabic">تحليل • تقارير • سيولة • زكاة وضريبة</p>
              </div>

              <div className="rounded-lg border border-border bg-surface p-3 md:p-4">
                <h3 className="text-xs md:text-sm font-bold text-text-primary font-arabic">أعمل معك عن بُعد</h3>
                <p className="mt-1 text-[11px] md:text-xs text-text-secondary leading-relaxed font-arabic">متابعة مالية منظمة دون الحاجة إلى تكوين إدارة مالية داخلية كاملة.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
