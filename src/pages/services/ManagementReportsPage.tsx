import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة إعداد التقارير المالية والإدارية لمنشأتي.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function ManagementReportsPage() {
  const name = "التقارير الإدارية";
  const slug = "management-reports";
  const metaTitle = "إعداد التقارير الإدارية المالية للشركات | القائد للإدارة المالية";
  const metaDesc = "ابقَ على اطلاع دائم بأداء منشأتك عبر تقارير إدارية ولوحات قياس دقيقة تصمم خصيصاً لتمنح الإدارة العليا القدرة على اتخاذ قرارات سريعة وصائبة.";
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
              تساعد التقارير الإدارية (Management Reports) أصحاب الشركات والإدارات التنفيذية على متابعة أداء المنشأة بشكل مستمر واتخاذ القرارات بناءً على بيانات دقيقة بدلاً من التوقعات. فمن خلال عرض أهم المؤشرات المالية والتشغيلية بصورة واضحة، يمكنك معرفة أداء منشأتك، ومتابعة الأرباح والمصروفات، واكتشاف أي انحرافات قبل أن تؤثر على نتائج أعمالك.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ماذا تتضمن خدمة التقارير الإدارية؟
            </h2>
            <p>
              أقوم بإعداد تقارير إدارية مخصصة تتناسب مع طبيعة نشاط منشأتك، وتساعدك على متابعة الأداء المالي والتشغيلي بسهولة، وتشمل الخدمة:
            </p>

            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>إعداد التقارير الإدارية الدورية (Management Reports).</li>
              <li>تصميم لوحات مؤشرات الأداء (Dashboards).</li>
              <li>قياس مؤشرات الأداء الرئيسية (KPIs).</li>
              <li>مقارنة الأداء الفعلي بالموازنة (Budget vs Actual Analysis).</li>
              <li>تحليل الإيرادات والمصروفات.</li>
              <li>متابعة الأرباح والتدفقات النقدية.</li>
              <li>إعداد تقارير مخصصة للإدارة العليا وفق احتياجات المنشأة.</li>
              <li>تقديم ملخصات مالية تدعم اتخاذ القرار.</li>
            </ul>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              لماذا تعد التقارير الإدارية مهمة؟
            </h2>
            <p>
              التقارير الإدارية تمنحك رؤية واضحة عن أداء منشأتك دون الحاجة إلى مراجعة جميع البيانات المحاسبية. فهي تساعد على متابعة النتائج بشكل دوري، واكتشاف نقاط القوة والضعف، وتقييم أداء الإدارات، واتخاذ قرارات أسرع وأكثر دقة اعتمادًا على معلومات مالية محدثة وموثوقة.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ابدأ بمتابعة أداء منشأتك
            </h2>
            <p>
              إذا كنت تبحث عن محاسب مالي يساعدك في إعداد التقارير الإدارية وتصميم لوحات مؤشرات الأداء (Dashboards) التي تدعم قراراتك، فأنا جاهز لتقديم تقارير احترافية تمنحك رؤية واضحة تساعدك على إدارة أعمالك بثقة.
            </p>
          </div>

          {/* Service CTA Card */}
          <div className="my-8 p-6 bg-surface-subtle/60 border border-border-subtle rounded-2xl text-center">
            <h3 className="text-base md:text-lg font-bold text-text-primary mb-2">
              هل تحتاج إلى تقارير مالية تساعدك في متابعة أداء منشأتك؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              تقارير إدارية ولوحات مؤشرات دورية مصممة خصيصاً لمساعدة الإدارة التنفيذية على اتخاذ القرارات اليومية.
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
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/7-signs-company-needs-remote-financial-management" className="text-primary font-bold hover:underline">7 علامات لحاجة شركتك لإدارة مالية عن بعد</a>
            </span>
            <a href="/blog/7-signs-company-needs-remote-financial-management" className="text-primary font-semibold hover:underline shrink-0">
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
                href="/services/financial-analysis"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>التحليل المالي وتقييم الأداء</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/budgeting"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد الموازنات التقديرية</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/virtual-cfo"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>المدير المالي عن بعد (Virtual CFO)</span>
                <span className="text-secondary text-base">←</span>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
