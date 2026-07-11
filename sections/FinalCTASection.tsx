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
  title: "هل تريد أن تعرف إذا كانت منشأتك تحتاج إلى متابعة مالية",
  description: "إذا كنت غير متأكد من وضع منشأتك المالي أو تشعر أن الأرقام غير واضحة أو تريد التأكد من أن أعمالك تسير في الاتجاه الصحيح فأبدأ بتقييم مجاني وسأساعدك في معرفة أهم النقاط التي تحتاج إلى تحسين",
  closing: "التقييم مجاني ولا يلزمك بأي رسوم والقرار دائما بيدك"
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

