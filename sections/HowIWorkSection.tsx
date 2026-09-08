import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import SectionDescription from '../components/SectionDescription';
import Timeline from '../components/Timeline';
import { ArrowLeft, Compass } from 'lucide-react';

export default function HowIWorkSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="how-i-work-section-wrapper" variant="white" spacing="default" className="border-t border-border" {...props}>
      <Container id="how-i-work-container">
        <div id="how-i-work-content" className="flex flex-col space-y-6 md:space-y-8 items-center">
          
          {/* Section Header Area */}
          <div id="how-i-work-header" className="flex flex-col space-y-2 md:space-y-3 text-center items-center max-w-3xl">
            <div 
              id="how-i-work-pill"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-arabic font-semibold"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>منهجية واضحة من اليوم الأول</span>
            </div>

            <SectionTitle id="how-i-work-title" level={2} className="font-bold text-xl sm:text-2xl md:text-3xl">
              رحلة العمل: كيف نبدأ معك؟
            </SectionTitle>

            <SectionDescription id="how-i-work-description" className="text-center text-sm md:text-base max-w-2xl">
              خطوات متسلسلة وقصيرة توضح لك بدقة ماذا سيحدث بعد الضغط على زر التواصل، لننقل حساباتك من العشوائية إلى التنظيم المالي المنهجي دون أي تعقيد.
            </SectionDescription>
          </div>

          {/* Timeline Container */}
          <Timeline id="how-i-work-timeline" className="w-full max-w-2xl" />

          {/* Direct CTA */}
          <div id="how-i-work-cta-wrap" className="pt-2 text-center">
            <a
              href="#consultation-section"
              id="how-i-work-cta-btn"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-light text-white font-arabic font-bold text-sm shadow-sm transition-colors"
            >
              <span>ابدأ خطوتك الأولى الآن</span>
              <ArrowLeft className="w-4 h-4 text-secondary" />
            </a>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}


