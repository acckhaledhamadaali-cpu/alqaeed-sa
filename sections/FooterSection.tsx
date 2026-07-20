import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = `السلام عليكم
أرغب في حجز استشارة لبحث سبل تطوير الأداء المالي لمنشأتي
اسم حضرتك الكريم  /
اسم المنشأة / نوع النشاط / عدد الفروع / هل يمكن تحديد موعد مناسب للبدء`;
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function FooterSection(props: HTMLAttributes<HTMLElement>) {
  const currentYear = new Date().getFullYear();

  const trackWhatsAppClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'footer_whatsapp',
        link_url: WHATSAPP_URL
      });
    }
  };

  const trackEmailClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'email_click', {
        event_category: 'engagement',
        event_label: 'footer_email',
        link_url: 'mailto:alqaeed.sa@gmail.com'
      });
    }
  };

  return (
    <SectionWrapper id="footer-section-wrapper" variant="white" spacing="none" as="footer" {...props}>
      <Container id="footer-container">
        <div id="footer-content" className="py-4 md:py-5 flex flex-col items-center justify-center text-center space-y-1.5 border-t border-white">
          <p id="footer-service-desc" className="text-[10px] sm:text-xs text-text-muted font-arabic font-normal leading-relaxed">
            أقدم خدمات المحاسبة والإدارة المالية عن بعد للمنشآت داخل المملكة العربية السعودية.
          </p>
          <p id="footer-copyright" className={`text-sm font-normal leading-normal font-arabic text-text-secondary font-arabic`}>
            جميع الحقوق محفوظة &copy; {currentYear} القائد
          </p>
          <p id="footer-subtitle" className={`text-xs font-medium tracking-wider font-arabic uppercase text-text-muted font-arabic`}>
            الإدارة المالية المتكاملة عن بعد للمنشآت
          </p>
          <div id="footer-contact" className={`text-xs font-medium tracking-wider font-arabic uppercase text-text-secondary font-arabic mt-1.5 flex flex-wrap gap-x-4 gap-y-1 justify-center items-center`}>
            <span>البريد الإلكتروني <a onClick={trackEmailClick} href="mailto:alqaeed.sa@gmail.com" className="hover:text-primary transition-colors font-sans">alqaeed.sa@gmail.com</a></span>
            <span className="hidden sm:inline text-border-subtle">|</span>
            <span>الواتساب <a onClick={trackWhatsAppClick} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-sans">0511294383</a></span>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

