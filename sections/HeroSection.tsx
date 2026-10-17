import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import { TYPOGRAPHY } from '../src/lib/tokens';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "966511294383";
const HERO_WHATSAPP_MESSAGE = "السلام عليكم، أرغب في الاستفسار عن خدمات القائد المحاسبية والمالية للمنشآت. أرجو إرشادي إلى نطاق الخدمة والمعلومات اللازمة للبدء.";
const HERO_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(HERO_WHATSAPP_MESSAGE)}`;

export default function HeroSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="hero-section-wrapper" variant="white" spacing="default" {...props}>
      <Container id="hero-container">
        {/* Responsive layout: Message first on mobile; profile image remains on the right on desktop. */}
        <div id="hero-grid-layout" className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center">
          
          {/* Profile Image Area (After the message on mobile, right on desktop - 5 columns) */}
          <div id="hero-image-column" className="w-full md:col-span-5 flex justify-center order-2 md:order-2">
            <img 
              src="/images/khaled.webp"
              srcSet="/images/khaled-400.webp 400w, /images/khaled-800.webp 800w, /images/khaled.webp 1023w"
              sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1023px"
              alt="خالد القائد، محاسب مالي في القائد للإدارة المالية"
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

          {/* Text Area (First on mobile, left on desktop - 7 columns) */}
          <div 
            id="hero-text-column" 
            className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-right space-y-4 md:space-y-5 order-1 md:order-1"
          >
            
            <header id="hero-header" className="flex flex-col items-center md:items-start space-y-3.5 md:space-y-4 w-full text-center md:text-right">
              {/* Brand & Tagline Area */}
              <div id="hero-brand-area" className="flex flex-col items-center md:items-start space-y-1">
                <p className="text-sm md:text-base font-semibold text-text-secondary">خالد القائد | محاسب مالي</p>
                <h1 id="hero-brand-name" className={`${TYPOGRAPHY.heading.h1} font-bold text-text-primary`}>
                  محاسب مالي عن بعد للمنشآت في السعودية | من التنظيم اليومي إلى الامتثال الحكومي
                </h1>
                <p id="hero-brand-tagline" className={`${TYPOGRAPHY.body.large} text-secondary font-semibold mt-1`}>
                  أدير أعمال الإدارة المالية للحسابات بمرونة كاملة، وأتولى تهيئة نظام أودو المحاسبي، وإعداد القوائم المالية لمتابعة رفعها عبر منصة قوائم، مع تحضير الإقرارات الضريبية والزكوية بدقة تامة تحميك من الغرامات وكأنني متواجد داخل منشأتك تماماً.
                </p>
              </div>

              {/* Description (Paragraph) */}
              <p 
                id="hero-description" 
                className={`${TYPOGRAPHY.body.large} max-w-xl`}
              >
                أتولى أعمال المحاسب المالي الداخلي عن بُعد، من تأسيس الدورة المستندية والأنظمة المحاسبية إلى مسك الدفاتر والتسويات والتقارير. تشمل الخدمات تجهيز القوائم المالية ومتابعة رفعها عبر منصة قوائم وفق المتطلبات والصلاحيات، وتهيئة وإدارة وتخصيص نظام أودو Odoo ERP بالكامل حسب نشاط المنشأة، وتحضير الإقرارات الضريبية والزكوية، والتحليل المالي وتقارير الأداء والسيولة والتدفقات النقدية. تُحدد تفاصيل الخدمة وفق احتياج المنشأة ونطاق العمل.
              </p>

              {/* Short Trust Line */}
              <p 
                id="hero-trust-line"
                className="text-xs md:text-sm text-text-secondary font-arabic font-normal leading-relaxed mt-1"
              >
                🔒 نلتزم بالسرية التامة لبياناتك مع إمكانية توقيع اتفاقية عدم إفصاح (NDA) قبل مشاركة المستندات
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
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>اطلب فحصاً مجانياً لحساباتك لآخر شهرين واستلم تقرير الفجوات عبر الواتساب</span>
                </a>
                <a 
                  href="#services-section-wrapper"
                  id="hero-secondary-cta"
                  className="inline-flex items-center px-4 py-2.5 rounded-xl bg-surface-subtle border border-border-subtle hover:border-primary text-text-primary hover:text-primary text-xs sm:text-sm font-medium transition-all duration-200"
                >
                  استكشف خدمات الامتثال والإدارة المالية
                </a>
              </div>
            </header>

          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
