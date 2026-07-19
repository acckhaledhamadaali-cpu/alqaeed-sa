import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import { TYPOGRAPHY } from '../src/lib/tokens';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = `السلام عليكم
أرغب في حجز استشارة لبحث سبل تطوير الأداء المالي لمنشأتي
اسم حضرتك الكريم  /
اسم المنشأة / 
نوع النشاط / 
عدد الفروع / 
هل يمكن تحديد موعد مناسب للبدء`;
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function HeroSection(props: HTMLAttributes<HTMLElement>) {
  const trackWhatsAppClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'hero_whatsapp',
        link_url: WHATSAPP_URL
      });
    }
  };

  return (
    <SectionWrapper id="hero-section-wrapper" variant="white" spacing="default" {...props}>
      <Container id="hero-container">
        {/* Responsive layout: Grid where Image is top on Mobile, right on Desktop */}
        <div id="hero-grid-layout" className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center">
          
          {/* Profile Image Area (Top on Mobile, Right on Desktop - 5 columns) */}
          <div id="hero-image-column" className="w-full md:col-span-5 flex justify-center order-1 md:order-2">
            <img 
              src="/images/khaled.png?v=3"
              alt="خالد القائد متخصص في الإدارة المالية المتكاملة عن بعد للمنشآت"
              loading="eager"
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
                <span id="hero-brand-name" className={`${TYPOGRAPHY.heading.h1} font-bold text-text-primary`}>
                  القائد
                </span>
                <span id="hero-brand-tagline" className={`${TYPOGRAPHY.body.large} text-secondary uppercase font-semibold`}>
                  الإدارة المالية المتكاملة عن بعد للمنشآت
                </span>
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
            </header>

          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}


