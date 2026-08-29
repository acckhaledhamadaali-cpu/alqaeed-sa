import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

const OPENING_PARAGRAPH = "لأن الإدارة المالية الجيدة لا تتوقف عند تسجيل الأرقام، بل تحولها إلى صورة واضحة تساعدك على إدارة منشأتك واتخاذ قرارات أفضل.";

const BULLETS = [
  {
    title: "وضوح مالي أكبر",
    text: "تنظيم البيانات والتقارير لتكوين صورة واضحة عن الأداء، الالتزامات والسيولة."
  },
  {
    title: "رؤية تتجاوز المحاسبة",
    text: "تحليل الأرقام وربطها بأداء المنشأة لمساعدة الإدارة على فهم الوضع المالي وتحديد ما يحتاج إلى متابعة."
  },
  {
    title: "خبرة مالية عند الحاجة",
    text: "دعم مالي واستشاري عن بُعد وفق احتياج المنشأة، دون الحاجة إلى توظيف مدير مالي بدوام كامل."
  }
];

export default function AboutSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="about-section-wrapper" variant="white" spacing="dense" itemScope itemType="https://schema.org/Person" {...props}>
      <Container id="about-container">
        <div id="about-content" className="flex flex-col space-y-4 md:space-y-5 text-right max-w-3xl mx-auto">
          
          {/* Section Title */}
          <div id="about-header" className="w-full text-center">
            <SectionTitle id="about-title" level={2} className="font-bold">
              لماذا يختارني أصحاب المنشآت؟
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
            <ul className="flex flex-col space-y-3.5">
              {BULLETS.map((bullet, index) => (
                <li 
                  key={index}
                  className="flex flex-col space-y-1 text-xs md:text-sm leading-relaxed"
                >
                  <div className="flex items-center gap-x-2 font-bold text-text-primary font-arabic">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                    <span>{bullet.title}</span>
                  </div>
                  <p className="text-text-secondary pr-3.5 font-arabic">
                    {bullet.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
