import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

const OPENING_PARAGRAPH = "لأن أصحاب المنشآت يبحثون عن شريك مالي موثوق يساعدهم على قراءة الأرقام واتخاذ قرارات تدعم استقرار ونمو أعمالهم:";

const BULLETS = [
  "خبرة عملية لأكثر من 9 سنوات في قطاعات تجارية وصناعية وخدمية داخل المملكة مع ماجستير إدارة الأعمال (MBA).",
  "رؤية مالية متكاملة تتجاوز التسجيل الروتيني إلى التحليل المالي وإدارة السيولة وإصدار التقارير الإدارية لدعم القرار.",
  "نموذج عمل مرن عن بعد (Virtual CFO) يمنح المنشأة إشرافاً مالياً واستراتيجياً متقدماً دون أعباء التوظيف الثابت الكامل."
];

export default function AboutSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="about-section-wrapper" variant="white" spacing="dense" itemScope itemType="https://schema.org/Person" {...props}>
      <Container id="about-container">
        <div id="about-content" className="flex flex-col space-y-4 md:space-y-5 text-right max-w-3xl mx-auto">
          
          {/* Section Title */}
          <div id="about-header" className="w-full text-center">
            <SectionTitle id="about-title" level={2} className="font-bold">
              لماذا يختارني أصحاب المنشآت
            </SectionTitle>
          </div>

          {/* Opening Paragraph */}
          <div id="about-opening" className="text-right">
            <p className="text-xs sm:text-sm md:text-base text-text-primary font-medium leading-relaxed font-arabic">
              {OPENING_PARAGRAPH}
            </p>
          </div>

          {/* Bullet List */}
          <div id="about-bullets-container" className="text-right py-1">
            <ul className="flex flex-col space-y-3">
              {BULLETS.map((bullet, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-x-3 text-xs md:text-sm text-text-secondary leading-relaxed"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2.5" aria-hidden="true" />
                  <span className="font-arabic">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
