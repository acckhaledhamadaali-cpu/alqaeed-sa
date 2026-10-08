import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import SectionDescription from '../components/SectionDescription';
import { MessageCircle } from 'lucide-react';

const SERVICES = [
  { name: "تنظيم الحسابات ومسك الدفاتر", link: "/services/bookkeeping/" },
  { name: "الزكاة والضريبة", link: "/services/zakat-tax/" },
  { name: "إعداد القوائم المالية", link: "/services/financial-statements/" },
  { name: "التحليل المالي", link: "/services/financial-analysis/" },
  { name: "التقارير الإدارية", link: "/services/management-reports/" },
  { name: "إعداد الموازنات", link: "/services/budgeting/" },
  { name: "إدارة التدفقات النقدية", link: "/services/cash-flow/" },
  { name: "مدير مالي افتراضي", link: "/services/virtual-cfo/" },
];

const QUICK_START = [
  { need: 'أبي أرتب الحسابات والفواتير', service: 'مسك الدفاتر', link: '/services/bookkeeping/' },
  { need: 'أحتاج أجهز إقرار الزكاة أو الضريبة', service: 'الزكاة والضريبة', link: '/services/zakat-tax/' },
  { need: 'أبي أفهم الربحية والسيولة', service: 'التحليل المالي', link: '/services/financial-analysis/' },
  { need: 'أحتاج قوائم وتقارير واضحة', service: 'القوائم والتقارير المالية', link: '/services/financial-statements/' },
];

const WHATSAPP_URL = `https://wa.me/966511294383?text=${encodeURIComponent(
  'السلام عليكم، نشاط منشأتي [نوع النشاط]، وعدد فروعها [العدد]. أحتاج [الخدمة أو التحدي]. أرجو توضيح نطاق الخدمة والمعلومات الأولية المطلوبة وطريقة تحديد الأتعاب.'
)}`;

export default function ServicesSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="services-section-wrapper" variant="white" spacing="dense" {...props}>
      <Container id="services-container">
        <div id="services-content" className="flex flex-col space-y-5 md:max-w-full mx-auto text-center items-center w-full">
          
          {/* Section Header */}
          <div id="services-header" className="flex flex-col space-y-1.5 text-center items-center">
            <SectionTitle id="services-title" level={2} className="font-bold">
              ماذا أتولى داخل منشأتك
            </SectionTitle>
            <SectionDescription id="services-description" className="text-center max-w-2xl text-text-secondary text-xs sm:text-sm">
              أتولى إدارة وتنظيم الجوانب المالية التي تحتاجها المنشآت لتصبح الحسابات واضحة والتقارير دقيقة والقرارات مبنية على أرقام فعلية.
            </SectionDescription>
            <p className="max-w-2xl text-center text-xs sm:text-sm text-text-secondary leading-6">
              تُحدَّد الأتعاب بعد معرفة حجم العمليات، وعدد الفروع، والخدمات المطلوبة.
            </p>
          </div>

          <div id="quick-service-guide" className="w-full rounded-2xl border border-border-subtle bg-surface-subtle/30 p-4 text-right sm:p-5">
            <div className="mb-3">
              <h3 className="text-base font-bold text-text-primary sm:text-lg">اعرف من وين تبدأ خلال دقيقة</h3>
              <p className="mt-1 text-xs leading-6 text-text-secondary sm:text-sm">اختر أقرب احتياج لك، وافتح تفاصيل الخدمة قبل ما تتواصل.</p>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {QUICK_START.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  className="rounded-xl border border-border-subtle bg-white p-3 transition-colors hover:border-secondary/50 hover:bg-emerald-50/40 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                >
                  <span className="block text-xs leading-5 text-text-secondary">{item.need}</span>
                  <span className="mt-1 block text-sm font-bold text-primary">{item.service} ←</span>
                </a>
              ))}
            </div>
            <div className="mt-3 flex flex-col items-start justify-between gap-3 border-t border-border-subtle pt-3 sm:flex-row sm:items-center">
              <p className="max-w-2xl text-xs leading-6 text-text-secondary sm:text-sm">
                لتسريع تحديد النطاق، اذكر نوع النشاط وعدد الفروع والخدمة المطلوبة. لا ترسل مستندات حساسة في أول رسالة؛ نتفق معك على وسيلة مناسبة لتبادلها.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#20ba5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:text-sm"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                أرسل استفسارك على واتساب
              </a>
            </div>
          </div>

          {/* Simple, lightweight list */}
          <div 
            id="services-list-container" 
            className="w-full lg:max-w-full max-w-xl bg-surface-subtle/30 rounded-xl p-3 sm:p-4 border border-border-subtle"
          >
            <ul 
              id="services-list" 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-right w-full"
            >
              {SERVICES.map((service, index) => (
                <li key={index} id={`services-item-${index}`}>
                  <a 
                    href={service.link}
                    className="group flex items-center justify-between p-2.5 rounded-lg bg-white border border-border-subtle hover:border-secondary/50 hover:bg-surface-muted/40 transition-all duration-150 text-xs md:text-sm font-medium font-arabic shadow-[0_1px_2px_rgba(0,0,0,0.01)]"
                  >
                    <div className="flex items-center gap-x-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary group-hover:scale-125 transition-transform" aria-hidden="true" />
                      <span className="text-secondary hover:text-secondary-dark font-medium transition-colors">
                        {service.name}
                      </span>
                    </div>
                    <span className="text-secondary/70 group-hover:text-secondary group-hover:-translate-x-0.5 transition-all text-xs font-sans leading-none" aria-hidden="true">
                      ←
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subtle link to Financial Library */}
          <div id="services-blog-link" className="pt-1">
            <a 
              href="/blog/" 
              className="inline-flex items-center gap-x-1.5 text-xs sm:text-sm text-text-secondary hover:text-primary font-arabic font-medium transition-colors"
            >
              <span>استكشف المكتبة المالية — أدلة عملية لأصحاب المنشآت</span>
              <span className="text-secondary text-base leading-none">←</span>
            </a>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
