import { HTMLAttributes } from 'react';
import { MessageCircle } from 'lucide-react';
import { Z_INDEX } from '../src/lib/tokens';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = `السلام عليكم
أرغب في حجز استشارة لبحث سبل تطوير الأداء المالي لمنشأتي
اسم حضرتك الكريم  /
اسم المنشأة / 
نوع النشاط / 
عدد الفروع / 
هل يمكن تحديد موعد مناسب للبدء`;

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function FloatingWhatsApp(props: HTMLAttributes<HTMLAnchorElement>) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'floating_whatsapp',
        link_url: WHATSAPP_URL
      });
    }
  };

  return (
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] left-[calc(1.5rem+env(safe-area-inset-left,0px))] md:bottom-10 md:left-10 ${Z_INDEX.floating} pointer-events-auto flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-105 active:scale-98 transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2`}
      aria-label="تواصل عبر واتساب"
      id="floating-whatsapp-btn"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

