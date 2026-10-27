import { FaTiktok, FaInstagram, FaYoutube, FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const WHATSAPP_NUMBER = '966511294383';
const WHATSAPP_MESSAGE = `السلام عليكم
أود الاستفسار عن خدمات القائد للمحاسبة والإدارة المالية لمنشأتي. هل يمكنكم توضيح طريقة البدء؟`;
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function SocialMedia() {
  const socials = [
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:alqaeed.sa@gmail.com',
      colorClass: 'text-[#EA4335] hover:shadow-[0_2px_8px_rgba(234,67,53,0.25)]',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: WHATSAPP_URL,
      colorClass: 'text-[#25D366] hover:shadow-[0_2px_8px_rgba(37,211,102,0.25)]',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/alqaeed-fin-acc-tax/',
      colorClass: 'text-[#0A66C2] hover:shadow-[0_2px_8px_rgba(10,102,194,0.25)]',
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/share/1E5ttqMGB8/',
      colorClass: 'text-[#1877F2] hover:shadow-[0_2px_8px_rgba(24,119,242,0.25)]',
    },
    {
      name: 'X',
      icon: SiX,
      url: 'https://x.com/alqaeed_sa',
      colorClass: 'text-[#000000] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)]',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/alqaeed.sa',
      colorClass: 'text-[#E1306C] hover:shadow-[0_2px_8px_rgba(225,48,108,0.25)]',
    },
    {
      name: 'TikTok',
      icon: FaTiktok,
      url: 'https://www.tiktok.com/@alqaeed.sa1',
      colorClass: 'text-[#111111] hover:shadow-[0_2px_8px_rgba(37,244,238,0.3)]',
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: 'https://www.youtube.com/@alqaeed-fin-Acc-tax-sa',
      colorClass: 'text-[#FF0000] hover:shadow-[0_2px_8px_rgba(255,0,0,0.25)]',
    },
  ];

  return (
    <div className="w-full flex flex-col items-center pt-2 pb-4">
      <h3 className="text-xs md:text-sm font-bold text-primary mb-3 font-arabic">تواصل معنا وتابعنا على مواقع التواصل</h3>

      <div className="mt-4 w-full max-w-xl rounded-xl border border-[#D4AF37]/60 bg-[#FFFEFA] px-4 py-3 sm:px-5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
        <div className="text-center sm:text-right">
          <p className="text-sm font-bold text-[#111111] font-arabic">رأيك يصنع فرقًا</p>
          <p className="text-xs text-[#333333] font-arabic mt-1">شارك تجربتك أو اطّلع على حضور القائد على Google</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://g.page/r/CbiFH7EXtOhYEBI/review"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="اكتب تقييمك على Google"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-3 py-2 text-xs font-bold text-[#111111] hover:bg-[#e4c45c] transition-colors"
          >
            <span aria-hidden="true" className="font-bold text-sm">G</span>
            اكتب تقييمك
          </a>
          <a
            href="https://www.google.com/search?q=%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D8%AF+%D9%84%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9+%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ابحث عن القائد على Google لمشاهدة الملف والتقييمات"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#0F172A]/25 px-3 py-2 text-xs font-semibold text-[#111111] hover:bg-[#F5F1E6] transition-colors"
          >
            <span aria-hidden="true">مشاهدة التقييمات</span>
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-1.5 md:gap-2.5">
        <details className="relative">
          <summary
            aria-label="اتصال هاتفي"
            title="اتصال هاتفي"
            className="list-none cursor-pointer flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-surface-primary border border-border-subtle text-primary hover:shadow-[0_2px_8px_rgba(37,99,235,0.25)] transition-all duration-300 ease-out hover:scale-105"
          >
            <FaPhone aria-hidden="true" className="w-4 h-4 md:w-5 md:h-5" />
          </summary>
          <div className="absolute bottom-full right-0 z-50 mb-2 min-w-max rounded-xl border border-border-subtle bg-white p-2 shadow-lg">
            <p className="px-2 py-1 text-xs font-semibold text-primary font-arabic">اختر رقم الاتصال</p>
            <a href="tel:+966511294383" className="block rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100" dir="ltr">0511294383</a>
            <a href="tel:+966548482979" className="block rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100" dir="ltr">0548482979</a>
          </div>
        </details>
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-surface-primary border border-border-subtle ${social.colorClass} transition-all duration-300 ease-out hover:scale-105 group relative`}
            >
              <Icon title={social.name} aria-label={social.name} className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
