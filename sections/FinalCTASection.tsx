import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import SectionDescription from '../components/SectionDescription';
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

export default function FinalCTASection(props: HTMLAttributes<HTMLElement>) {
  const trackWhatsAppClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'cta_whatsapp',
        link_url: WHATSAPP_URL
      });
    }
  };

  return (
    <SectionWrapper id="final-cta-section-wrapper" variant="white" spacing="dense" {...props}>
      <Container id="final-cta-container">
        <div id="final-cta-content" className="flex flex-col space-y-4 max-w-2xl mx-auto text-center items-center py-4">
          
          {/* Title */}
          <SectionTitle id="final-cta-title" level={2} className="font-bold text-center max-w-xl text-sm sm:text-base md:text-lg font-arabic leading-relaxed">
            إذا كنت تبحث عن تنظيم حسابات منشأتك وبناء نظام مالي يساعدك على اتخاذ قرارات أفضل فتواصل معي وسنناقش احتياج منشأتك
          </SectionTitle>

          {/* Button - WhatsApp style */}
          <div id="final-cta-action" className="pt-1.5">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="inline-flex items-center gap-x-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
              id="final-cta-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>تواصل معي عبر واتساب</span>
            </a>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
