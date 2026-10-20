import { FaTiktok, FaInstagram, FaYoutube, FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const WHATSAPP_NUMBER = '966511294383';
const WHATSAPP_MESSAGE = `السلام عليكم
أود الاستفسار عن خدمات القائد للمحاسبة والإدارة المالية لمنشأتي. هل يمكنكم توضيح طريقة البدء؟`;
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function SocialMedia() {
  const socials = [
    {
      name: 'اتصال هاتفي',
      icon: FaPhone,
      url: 'tel:+966511294383',
      colorClass: 'text-primary hover:shadow-[0_2px_8px_rgba(37,99,235,0.25)]',
    },
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
      <div className="flex flex-row justify-center items-center gap-1.5 md:gap-2.5">
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
