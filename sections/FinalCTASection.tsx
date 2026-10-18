import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أود الاستفسار عن خدمة محاسبية أو مالية تناسب احتياج منشأتي. ما المعلومات التي تحتاجونها لبدء النقاش؟";

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
            احصل على إدارة مالية متقدمة بتكلفة مرنة تناسب حجم أعمالك
          </SectionTitle>
          <p className="text-xs sm:text-sm md:text-base text-text-primary font-medium leading-relaxed font-arabic">
            لا داعي لتحمل أعباء التوظيف الثابت والكامل وتكاليفه الباهظة. نوفر لمنشأتك إشرافاً مالياً واستراتيجياً منظماً عن بُعد. الأتعاب تُحدد بدقة وشفافية بعد معرفة حجم العمليات، وعدد الفروع، والخدمات المطلوبة لنشاطك.
          </p>

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
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              <span>💬 تواصل معي مباشرة عبر الواتساب على الرقم السعودي: 966511294383</span>
            </a>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
