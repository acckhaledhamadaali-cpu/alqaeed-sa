import { HTMLAttributes } from 'react';
import { MessageCircle } from 'lucide-react';
import { Z_INDEX } from '../src/lib/tokens';

export default function FloatingWhatsApp(props: HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a 
      href="https://wa.me/966511294383"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] left-[calc(1.5rem+env(safe-area-inset-left,0px))] md:bottom-10 md:left-10 ${Z_INDEX.floating} pointer-events-auto flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-105 active:scale-98 transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2`}
      aria-label="تواصل عبر واتساب"
      id="floating-whatsapp-btn"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

