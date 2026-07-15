import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import { TYPOGRAPHY } from '../src/lib/tokens';
import khaledProfile from '../src/assets/images/khaled.png';

export default function HeroSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="hero-section-wrapper" variant="white" spacing="default" {...props}>
      <Container id="hero-container">
        {/* Responsive layout: Grid where Image is top on Mobile, right on Desktop */}
        <div id="hero-grid-layout" className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Profile Image Area (Top on Mobile, Right on Desktop - 5 columns) */}
          <div id="hero-image-column" className="w-full md:col-span-5 flex justify-center order-1 md:order-2">
            <img 
              src={khaledProfile}
              alt="خالد القائد محاسب ومحلل مالي"
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
              width={600}
              height={900}
              className="w-[90%] max-w-[280px] sm:max-w-[320px] md:max-w-[90%] aspect-[9/16] object-cover object-center bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.01)]"
              id="hero-profile-image"
            />
          </div>

          {/* Text Area (Bottom on Mobile, Left on Desktop - 7 columns) */}
          <div 
            id="hero-text-column" 
            className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-right space-y-6 md:space-y-8 order-2 md:order-1"
          >
            
            <header id="hero-header" className="flex flex-col items-center md:items-start space-y-6 md:space-y-8 w-full text-center md:text-right">
              {/* Brand & Tagline Area */}
              <div id="hero-brand-area" className="flex flex-col items-center md:items-start space-y-1">
                <span id="hero-brand-name" className={`${TYPOGRAPHY.body.small} font-semibold text-text-primary`}>
                  إدارة مالية متكاملة عن بعد
                </span>
                <span id="hero-brand-tagline" className={`${TYPOGRAPHY.caption} text-secondary`}>
                  نمو مستدام وأرباح مضاعفة
                </span>
              </div>

              {/* Description (Paragraph) */}
              <p 
                id="hero-description" 
                className={`${TYPOGRAPHY.body.large} max-w-xl`}
              >
                حوّل الفوضى المالية إلى وضوح تام نساعدك في بناء نظام مالي قوي يمنحك السيطرة الكاملة على إيراداتك ومصروفاتك لتبني قراراتك على بيانات دقيقة وتضاعف أرباحك دون الحاجة لتأسيس قسم مالي مكلف
              </p>
            </header>



          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}


