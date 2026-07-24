import { FaTiktok, FaInstagram, FaYoutube, FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = `السلام عليكم
أرغب في حجز استشارة لبحث سبل تطوير الأداء المالي لمنشأتي
اسم حضرتك الكريم  /
اسم المنشأة / نوع النشاط / عدد الفروع / هل يمكن تحديد موعد مناسب للبدء`;
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function SocialMedia() {
  const socials = [
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:alqaeed.sa@gmail.com',
      hoverClass: 'hover:text-[#EA4335] hover:shadow-[0_2px_8px_rgba(234,67,53,0.3)]',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: WHATSAPP_URL,
      hoverClass: 'hover:text-[#25D366] hover:shadow-[0_2px_8px_rgba(37,211,102,0.3)]',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/alqaeed-fin-acc-tax/',
      hoverClass: 'hover:text-[#0A66C2] hover:shadow-[0_2px_8px_rgba(10,102,194,0.3)]',
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/share/1E5ttqMGB8/',
      hoverClass: 'hover:text-[#1877F2] hover:shadow-[0_2px_8px_rgba(24,119,242,0.3)]',
    },
    {
      name: 'X',
      icon: SiX,
      url: 'https://x.com/alqaeed_sa',
      hoverClass: 'hover:text-[#000000] hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)]',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/alqaeed.sa',
      hoverClass: 'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:shadow-[0_2px_8px_rgba(188,24,136,0.3)]',
      isInsta: true
    },
    {
      name: 'TikTok',
      icon: FaTiktok,
      url: 'https://www.tiktok.com/@alqaeed.sa1',
      hoverClass: 'hover:text-[#000000] hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)]',
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: 'https://www.youtube.com/@alqaeed-fin-Acc-tax-sa',
      hoverClass: 'hover:text-[#FF0000] hover:shadow-[0_2px_8px_rgba(255,0,0,0.3)]',
    }
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
              className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-surface-primary border border-border-subtle text-text-secondary transition-all duration-300 ease-out hover:scale-105 ${social.hoverClass} group relative`}
            >
              {social.isInsta ? (
                <>
                  <Icon className="w-4 h-4 md:w-5 md:h-5 z-10 transition-colors duration-300 group-hover:fill-[url(#insta-grad)]" />
                  <svg width="0" height="0">
                    <linearGradient id="insta-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </svg>
                </>
              ) : (
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
