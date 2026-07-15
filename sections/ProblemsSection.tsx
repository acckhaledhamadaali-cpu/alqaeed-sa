import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import SectionDescription from '../components/SectionDescription';
import ProblemChecklist from '../components/ProblemChecklist';
import { TYPOGRAPHY } from '../src/lib/tokens';

export default function ProblemsSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="problems-section-wrapper" variant="subtle" spacing="default" {...props}>
      <Container id="problems-container">
        <div id="problems-content-layout" className="flex flex-col space-y-12 md:space-y-16 items-center">
          
          {/* Section Header Area (Centered, spacious) */}
          <div id="problems-header" className="flex flex-col space-y-4 text-center items-center max-w-3xl">
            <SectionTitle id="problems-title" level={2} className="font-bold">
              هل تستنزف هذه التحديات أرباحك ووقتك؟
            </SectionTitle>
          </div>

          {/* Problem Checklist: 1 column on Mobile, 2 columns on Tablet & Desktop */}
          <ProblemChecklist 
            id="problems-checklist" 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8 w-full" 
          />

          {/* Closing Statement: simple container, distinguished only by white space and font size, no card, border, or shadow */}
          <div id="problems-closing-container" className="pt-8 md:pt-12 text-center max-w-3xl">
            <p 
              id="problems-closing-statement" 
              className={`${TYPOGRAPHY.body.large} font-medium text-text-primary`}
            >
              غياب الرؤية المالية الواضحة يجعلك تدور في حلقة مفرغة من المشاكل اليومية التي تعيق نمو أعمالك نحن هنا لنكسر هذه الحلقة
            </p>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
