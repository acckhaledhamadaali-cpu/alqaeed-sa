import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة احتياج منشأتي لخدمة المدير المالي عن بعد (Virtual CFO).";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function VirtualCfoPage() {
  const name = "المدير المالي عن بعد";
  const slug = "virtual-cfo";
  const metaTitle = "المدير المالي عن بعد (Virtual CFO) | القائد للإدارة المالية";
  const metaDesc = "احصل على خبرات القيادة المالية الاستراتيجية بتكلفة مرنة. خدمة المدير المالي عن بعد تدعم نمو منشأتك وتوفر لك استشارات مالية متقدمة لقراراتك الحاسمة.";
  const url = "https://alqaeed-sa.pages.dev/services/" + slug;
  
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url + "/#webpage",
        "url": url,
        "name": metaTitle,
        "description": metaDesc,
        "primaryImageOfPage": {
          "@id": "https://alqaeed-sa.pages.dev/#logo"
        },
        "inLanguage": "ar-SA",
        "isPartOf": {
          "@id": "https://alqaeed-sa.pages.dev/#website"
        }
      },
      {
        "@type": "Service",
        "@id": url + "/#service",
        "name": metaTitle,
        "description": metaDesc,
        "provider": {
          "@id": "https://alqaeed-sa.pages.dev/#organization"
        },
        "areaServed": "Saudi Arabia"
      },
      {
        "@type": "BreadcrumbList",
        "@id": url + "/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "الرئيسية",
            "item": "https://alqaeed-sa.pages.dev/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": name,
            "item": url
          }
        ]
      }
    ]
  };

  useSEO({
    title: metaTitle,
    description: metaDesc,
    canonical: url,
    schema
  });

  const trackWhatsAppClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'service_cta_' + slug,
        link_url: WHATSAPP_URL
      });
    }
  };

  return (
    <SectionWrapper id={"service-" + slug + "-section"} variant="white" spacing="default">
      <Container>
        <div className="max-w-3xl mx-auto py-4 md:py-8 text-right font-arabic">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="مسار التنقل" className="mb-4 text-xs text-text-muted">
            <a href="/" className="hover:text-primary transition-colors">الرئيسية - القائد للإدارة المالية</a>
            <span className="mx-2 text-border-subtle">/</span>
            <span className="text-text-secondary">{name}</span>
          </nav>

          <h1 className={`${TYPOGRAPHY.heading.h1} font-bold text-text-primary mb-6 leading-tight`}>
            {name}
          </h1>
          <div className="w-16 h-1 bg-primary mb-6 rounded-full"></div>

          <div className="text-sm md:text-[15px] text-text-secondary leading-loose space-y-4">
            <p>
              تمنحك خدمة المدير المالي عن بعد (Virtual CFO) خبرة مدير مالي محترف دون الحاجة إلى تعيين مدير مالي بدوام كامل. تساعد هذه الخدمة أصحاب الشركات على تحسين الأداء المالي، وبناء خطط مالية واضحة، وتحليل النتائج، واتخاذ قرارات استراتيجية مبنية على بيانات دقيقة، مع الإشراف على جميع الجوانب المالية للمنشأة.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ماذا تتضمن خدمة المدير المالي عن بعد؟
            </h2>
            <p>
              أعمل معك كشريك مالي يساعدك على تطوير الأداء المالي لمنشأتك، وتشمل الخدمة:
            </p>

            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>إعداد الخطط والاستراتيجيات المالية (Financial Strategy).</li>
              <li>إعداد الموازنات التقديرية (Budgeting).</li>
              <li>تحليل الأداء المالي ومؤشرات الأداء (Financial Analysis & KPIs).</li>
              <li>إدارة التدفقات النقدية (Cash Flow Management).</li>
              <li>إعداد التقارير الإدارية (Management Reports).</li>
              <li>الإشراف على فريق المحاسبة ومراجعة أعماله.</li>
              <li>دعم الإدارة في اتخاذ القرارات المالية والاستثمارية.</li>
              <li>إعداد ملفات التمويل والتعامل مع البنوك والمستثمرين.</li>
              <li>متابعة الربحية وخطط النمو والتوسع.</li>
              <li>تقديم استشارات مالية دورية للإدارة العليا.</li>
            </ul>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              لماذا تحتاج منشأتك إلى مدير مالي؟
            </h2>
            <p>
              مع نمو الأعمال تصبح القرارات المالية أكثر تعقيدًا، ويصبح وجود مدير مالي ضرورة لضمان التخطيط السليم وإدارة المخاطر وتحسين الربحية. وتوفر خدمة Virtual CFO الخبرة المالية التي تحتاجها منشأتك دون تحمل تكلفة توظيف مدير مالي بدوام كامل، مما يجعلها خيارًا مناسبًا للشركات الصغيرة والمتوسطة والشركات في مرحلة النمو.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ابدأ ببناء إدارة مالية أكثر كفاءة
            </h2>
            <p>
              إذا كنت تبحث عن مدير مالي عن بعد (Virtual CFO) يساعدك في التخطيط المالي، وتحليل الأداء، وإدارة السيولة، ودعم قرارات الإدارة، فأنا جاهز للعمل معك كشريك مالي يساعدك على بناء نظام مالي قوي يدعم نمو منشأتك واستدامة أعمالها.
            </p>
          </div>

          {/* Service CTA Card */}
          <div className="my-8 p-6 bg-surface-subtle/60 border border-border-subtle rounded-2xl text-center">
            <h3 className="text-base md:text-lg font-bold text-text-primary mb-2">
              هل تحتاج إلى إدارة مالية استراتيجية دون توظيف مدير مالي بدوام كامل؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              استفد من خبرة المدير المالي عن بعد لبناء الاستراتيجيات المالية وتحسين الربحية بكفاءة وتكلفة مرنة.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs md:text-sm font-semibold rounded-xl transition-all shadow-sm duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>تواصل معي عبر واتساب</span>
            </a>
          </div>

          {/* Related Article Guide Link */}
          <div className="mb-8 p-4 bg-primary/5 border border-primary/15 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs md:text-sm">
            <span className="text-text-secondary font-medium">
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/what-is-virtual-cfo-and-when-needed" className="text-primary font-bold hover:underline">ما هو المدير المالي عن بعد Virtual CFO</a>
            </span>
            <a href="/blog/what-is-virtual-cfo-and-when-needed" className="text-primary font-semibold hover:underline shrink-0">
              قراءة الدليل ←
            </a>
          </div>

          {/* Related Services Internal Linking */}
          <div className="mt-6 pt-6 border-t border-border-subtle">
            <h2 className="text-base md:text-lg font-bold text-text-primary mb-4 font-arabic">
              خدمات مالية مرتبطة قد تحتاجها منشأتك
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="/services/budgeting"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد الموازنات التقديرية</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/cash-flow"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إدارة التدفقات النقدية والسيولة</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/financial-analysis"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>التحليل المالي وتقييم الأداء</span>
                <span className="text-secondary text-base">←</span>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
