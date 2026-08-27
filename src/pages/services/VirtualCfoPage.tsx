import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = `السلام عليكم
أرغب في حجز استشارة لخدمة المدير المالي عن بعد
اسم حضرتك الكريم  /
اسم المنشأة / نوع النشاط / عدد الفروع / هل يمكن تحديد موعد مناسب للبدء`;
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function VirtualCfoPage() {
  const name = "المدير المالي عن بعد";
  const slug = "virtual-cfo";
  const metaTitle = "المدير المالي عن بعد (Virtual CFO) | القائد للإدارة المالية";
  const metaDesc = "احصل على خبرات القيادة المالية الاستراتيجية بتكلفة مرنة. خدمة المدير المالي عن بعد تدعم نمو منشأتك وتوفر لك استشارات مالية متقدمة لقراراتك الحاسمة.";
  const url = "https://alqaeed-sa.netlify.app/services/" + slug;
  
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
          "@id": "https://alqaeed-sa.netlify.app/#logo"
        },
        "inLanguage": "ar-SA",
        "isPartOf": {
          "@id": "https://alqaeed-sa.netlify.app/#website"
        }
      },
      {
        "@type": "Service",
        "@id": url + "/#service",
        "name": metaTitle,
        "description": metaDesc,
        "provider": {
          "@id": "https://alqaeed-sa.netlify.app/#organization"
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
            "item": "https://alqaeed-sa.netlify.app/"
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

          {/* Related Services Internal Linking */}
          <div className="mt-10 pt-6 border-t border-border-subtle">
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
