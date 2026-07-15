import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import SectionDescription from '../components/SectionDescription';
import { TYPOGRAPHY } from '../src/lib/tokens';

interface CTAContent {
  title: string;
  description: string;
  closing: string;
}

const CTA_CONTENT: CTAContent = {
  title: "هل أنت مستعد لمضاعفة أرباحك وتنمية أعمالك؟",
  description: "لا تترك نجاح منشأتك للصدفة تواصل معنا اليوم لتحصل على تقييم شامل لوضعك المالي وتبدأ رحلة النمو المستدام المبني على أرقام دقيقة",
  closing: "التقييم مجاني ولا يلزمك بأي التزامات القرار المالي الصحيح يبدأ من هنا"
};

export default function FinalCTASection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="final-cta-section-wrapper" variant="subtle" spacing="default" {...props}>
      <Container id="final-cta-container">
        <div id="final-cta-content" className="flex flex-col items-center justify-center text-center space-y-6 md:space-y-8 max-w-3xl mx-auto">
          
          <header id="final-cta-header" className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
            <SectionTitle id="final-cta-title" level={1} className="font-bold text-center">
              {CTA_CONTENT.title}
            </SectionTitle>
            
            <SectionDescription id="final-cta-description" size="large" className="text-center mx-auto max-w-2xl leading-relaxed">
              {CTA_CONTENT.description}
            </SectionDescription>
          </header>

          <p 
            id="final-cta-closing" 
            className={`${TYPOGRAPHY.body.small} text-text-secondary font-arabic text-center max-w-xl font-bold`}
          >
            {CTA_CONTENT.closing}
          </p>

        </div>
      </Container>
    </SectionWrapper>
  );
}

