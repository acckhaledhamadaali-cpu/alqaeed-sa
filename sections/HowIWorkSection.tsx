import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import SectionDescription from '../components/SectionDescription';
import Timeline from '../components/Timeline';

export default function HowIWorkSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="how-i-work-section-wrapper" variant="white" spacing="dense" {...props}>
      <Container id="how-i-work-container">
        <div id="how-i-work-content" className="flex flex-col space-y-8 md:space-y-12 items-center">
          
          {/* Section Header Area */}
          <div id="how-i-work-header" className="flex flex-col space-y-4 text-center items-center max-w-3xl">
            <SectionTitle id="how-i-work-title" level={2} className="font-bold">
              كيف نحول الفوضى إلى سيطرة مالية تامة؟
            </SectionTitle>

            <SectionDescription id="how-i-work-description" className="text-center">
              منهجية عمل واضحة تضمن لك الانتقال من الإدارة العشوائية إلى القيادة الممنهجة والمبنية على البيانات
            </SectionDescription>
          </div>

          {/* Timeline Container */}
          <Timeline id="how-i-work-timeline" className="w-full max-w-2xl" />

        </div>
      </Container>
    </SectionWrapper>
  );
}

