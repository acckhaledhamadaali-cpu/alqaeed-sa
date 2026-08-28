import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import { TYPOGRAPHY } from '../src/lib/tokens';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "966511294383";
const HERO_WHATSAPP_MESSAGE = "السلام عليكم، اطلعت على موقع القائد للإدارة المالية وأرغب في مناقشة احتياج منشأتي من الخدمات المالية والمحاسبية.";
const HERO_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(HERO_WHATSAPP_MESSAGE)}`;

export default function HeroSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="hero-section-wrapper" variant="white" spacing="default" {...props}>
      <Container id="hero-container">
        {/* Responsive layout: Grid where Image is top on Mobile, right on Desktop */}
        <div id="hero-grid-layout" className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center">
          
          {/* Profile Image Area (Top on Mobile, Right on Desktop - 5 columns) */}
          <div id="hero-image-column" className="w-full md:col-span-5 flex justify-center order-1 md:order-2">
            <img 
              src="/images/khaled.webp"
              srcSet="/images/khaled-400.webp 400w, /images/khaled-800.webp 800w, /images/khaled.webp 1023w"
              sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1023px"
              alt="خالد القائد متخصص في الإدارة المالية المتكاملة عن بعد للمنشآت"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              referrerPolicy="no-referrer"
              width={600}
              height={900}
              className="w-[90%] max-w-[240px] sm:max-w-[280px] md:max-w-[90%] aspect-[9/16] object-cover object-center bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.01)]"
              id="hero-profile-image"
            />
          </div>

          {/* Text Area (Bottom on Mobile, Left on Desktop - 7 columns) */}
          <div 
            id="hero-text-column" 
            className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-right space-y-4 md:space-y-5 order-2 md:order-1"
          >
            
            <header id="hero-header" className="flex flex-col items-center md:items-start space-y-3.5 md:space-y-4 w-full text-center md:text-right">
              {/* Brand & Tagline Area */}
              <div id="hero-brand-area" className="flex flex-col items-center md:items-start space-y-1">
                <h1 id="hero-brand-name" className={`${TYPOGRAPHY.heading.h1} font-bold text-text-primary`}>
                  <span>القائد</span>
                  <span id="hero-brand-tagline" className={`block ${TYPOGRAPHY.body.large} text-secondary uppercase font-semibold mt-1`}>
                    الإدارة المالية المتكاملة عن بعد للمنشآت
                  </span>
                </h1>
              </div>

              {/* Description (Paragraph) */}
              <p 
                id="hero-description" 
                className={`${TYPOGRAPHY.body.large} max-w-xl`}
              >
                أتولى تنظيم الحسابات ومسك الدفاتر وإعداد القوائم المالية وتحليل الأداء المالي وإصدار التقارير الإدارية لتكون أرقام منشأتك واضحة أمامك في كل وقت
              </p>

              {/* Short Trust Line */}
              <p 
                id="hero-trust-line"
                className="text-xs md:text-sm text-text-secondary font-arabic font-normal leading-relaxed mt-1"
              >
                أكثر من 9 سنوات من الخبرة في المحاسبة والإدارة المالية والتحليل المالي للمنشآت داخل المملكة العربية السعودية.
              </p>

              {/* Hero Actions (CTA) */}
              <div id="hero-cta-actions" className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                <a 
                  href={HERO_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-primary-cta"
                  className="inline-flex items-center gap-x-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>تواصل معي عبر واتساب</span>
                </a>
                <a 
                  href="#services-section-wrapper"
                  id="hero-secondary-cta"
                  className="inline-flex items-center px-4 py-2.5 rounded-xl bg-surface-subtle border border-border-subtle hover:border-primary text-text-primary hover:text-primary text-xs sm:text-sm font-medium transition-all duration-200"
                >
                  استكشف الخدمات
                </a>
              </div>
            </header>

          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}


