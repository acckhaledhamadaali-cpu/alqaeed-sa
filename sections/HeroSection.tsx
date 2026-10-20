import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import { TYPOGRAPHY } from '../src/lib/tokens';
import { FaPhone } from 'react-icons/fa';

const WHATSAPP_NUMBER = "966511294383";
const HERO_WHATSAPP_MESSAGE = "السلام عليكم، أرغب في طلب فحص مجاني لحسابات منشأتي عن آخر شهرين. أرجو توضيح المستندات المطلوبة وطريقة البدء.";
const HERO_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(HERO_WHATSAPP_MESSAGE)}`;

export default function HeroSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="hero" variant="white" spacing="default" {...props}>
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
            
            <header
              id="hero-header"
              className="flex flex-col items-center md:items-start space-y-3.5 md:space-y-4 w-full text-center md:text-right"
            >
              <div
                id="hero-brand-area"
                className="flex flex-col items-center md:items-start space-y-2"
              >
                <p className="text-sm md:text-base font-semibold text-text-secondary">
                  خالد القائد | محاسب مالي
                </p>

                <h1
                  id="hero-title"
                  className={`${TYPOGRAPHY.heading.h1} font-bold text-text-primary`}
                >
                  محاسب مالي متكامل لمنشأتك في السعودية.. عن بُعد
                </h1>

                <p
                  id="hero-subtitle"
                  className={`${TYPOGRAPHY.body.large} text-secondary font-semibold mt-1`}
                >
                  أدير حساباتك بمرونة كاملة من التنظيم اليومي إلى الامتثال الضريبي والزكوي، وبكفاءة الـ Virtual CFO التي تحمي منشأتك من الغرامات.
                </p>

                <p
                  id="hero-description"
                  className="text-sm md:text-base text-text-secondary leading-7 mt-2 max-w-2xl"
                >
                  أتولى تهيئة أنظمة الـ ERP وتخصيص نظام أودو، وإعداد القوائم المالية السنوية وتقديمها عبر منصة قوائم، وإدارة الإقرارات الضريبية والزكوية بامتثال كامل لمتطلبات هيئة الزكاة والضريبة والجمارك لحماية منشأتك من غرامات التأخير.
                </p>
              </div>

              <div
                id="hero-cta-actions"
                className="flex flex-nowrap items-stretch justify-center md:justify-start gap-1 sm:gap-2 pt-2 w-full md:w-auto"
              >
                <a
                  href={HERO_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-primary-cta"
                  className="inline-flex flex-[1.15_1_0%] min-w-0 items-center justify-center px-1.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-[9px] min-[360px]:text-[10px] sm:text-xs md:text-sm text-center font-semibold leading-tight shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 whitespace-normal break-words"
                >
                  اطلب فحصاً مجانياً لحساباتك (آخر شهرين)
                </a>

                <details id="hero-call-menu" className="relative inline-flex flex-none self-stretch">
                  <summary
                    id="hero-call-cta"
                    aria-label="اختر رقم الاتصال"
                    title="اختر رقم الاتصال"
                    className="list-none inline-flex cursor-pointer self-stretch items-center justify-center w-9 sm:w-11 min-h-9 sm:min-h-10 px-0 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 [&::-webkit-details-marker]:hidden"
                  >
                    <FaPhone className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  </summary>
                  <div className="absolute right-0 top-full z-50 mt-2 min-w-52 rounded-xl border border-border-subtle bg-white p-2 text-right shadow-lg">
                    <p className="px-3 py-2 text-xs font-semibold text-text-secondary">اختر رقم الاتصال</p>
                    <a href="tel:+966511294383" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-text-primary hover:bg-surface-subtle focus:outline-none focus:ring-2 focus:ring-primary">
                      الرقم الأساسي: 0511294383
                    </a>
                    <a href="tel:+966548482979" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-text-primary hover:bg-surface-subtle focus:outline-none focus:ring-2 focus:ring-primary">
                      الرقم البديل: 0548482979
                    </a>
                  </div>
                </details>

                <a
                  href="#services"
                  id="hero-secondary-cta"
                  className="inline-flex flex-[1_1_0%] min-w-0 items-center justify-center px-1.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-surface-subtle border border-border-subtle hover:border-primary text-text-primary hover:text-primary text-[9px] min-[360px]:text-[10px] sm:text-xs md:text-sm text-center font-medium leading-tight transition-all duration-200 whitespace-normal break-words"
                >
                  استكشف الخدمات والامتثال المالي
                </a>
              </div>
            </header>

          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
