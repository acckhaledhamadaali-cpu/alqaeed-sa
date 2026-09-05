import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة خدمة التحليل المالي والنسب المالية لمنشأتي.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function FinancialAnalysisPage() {
  const name = "التحليل المالي";
  const slug = "financial-analysis";
  const metaTitle = "التحليل المالي للشركات وتقييم الأداء | القائد للإدارة المالية";
  const metaDesc = "حول الأرقام الصامتة إلى استراتيجيات ناجحة. خدمات التحليل المالي الاحترافية لمساعدتك في فهم مؤشرات السيولة والربحية واكتشاف فرص النمو لمنشأتك.";
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
              التحليل المالي (Financial Analysis) يساعدك على فهم الأرقام الموجودة في القوائم المالية وتحويلها إلى معلومات تدعم اتخاذ القرار. فمن خلال تحليل الإيرادات والمصروفات والربحية (Profitability) والسيولة (Liquidity)، يمكنك تقييم أداء منشأتك، واكتشاف نقاط القوة والضعف، ومعرفة الفرص التي تساعد على تحسين النتائج المالية وتقليل المخاطر.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ماذا تتضمن خدمة التحليل المالي؟
            </h2>
            <p>
              أقدم تحليلًا ماليًا يعتمد على بيانات منشأتك بهدف تقديم صورة واضحة عن أدائها المالي، وتشمل الخدمة:
            </p>

            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>تحليل الربحية (Profitability Analysis).</li>
              <li>تحليل الإيرادات والمصروفات (Revenue & Expense Analysis).</li>
              <li>تحليل السيولة والتدفقات النقدية (Liquidity & Cash Flow Analysis).</li>
              <li>تحليل المركز المالي (Financial Position Analysis).</li>
              <li>قياس النسب والمؤشرات المالية (Financial Ratios & KPIs).</li>
              <li>مقارنة الأداء بين الفترات المالية (Period-over-Period Analysis).</li>
              <li>إعداد تقارير مالية تدعم اتخاذ القرار (Management Reports).</li>
              <li>تقديم توصيات عملية لتحسين الأداء المالي وزيادة الكفاءة.</li>
            </ul>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              لماذا يعد التحليل المالي مهمًا؟
            </h2>
            <p>
              يساعدك التحليل المالي على فهم الأداء الحقيقي لمنشأتك، واكتشاف أسباب ارتفاع التكاليف أو انخفاض الأرباح، وقياس كفاءة التشغيل، وتقييم السيولة والربحية. كما يوفر مؤشرات مالية واضحة تساعدك على اتخاذ قرارات مبنية على بيانات دقيقة، سواء كنت تخطط للتوسع، أو خفض التكاليف، أو تحسين العائد على الاستثمار (ROI - Return on Investment).
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ابدأ بتحليل أداء منشأتك
            </h2>
            <p>
              إذا كنت تبحث عن محلل مالي (Financial Analyst) يساعدك على قراءة القوائم المالية، وتحليل مؤشرات الأداء (KPIs)، وتقديم تقارير مالية تدعم قراراتك، فأنا جاهز لتقديم تحليل مالي احترافي يمنحك رؤية أوضح تساعدك على تطوير أعمالك وتحقيق أهدافك.
            </p>
          </div>

          {/* Service CTA Card */}
          <div className="my-8 p-6 bg-surface-subtle/60 border border-border-subtle rounded-2xl text-center">
            <h3 className="text-base md:text-lg font-bold text-text-primary mb-2">
              هل تريد قراءة أوضح لأداء منشأتك المالي؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              تحليل معمق للنسب المالية والربحية والسيولة لمساعدتك على توجيه استثماراتك وخفض التكاليف.
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
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/financial-analysis-key-ratios-business-owners" className="text-primary font-bold hover:underline">التحليل المالي وأهم النسب لأصحاب المنشآت</a>
            </span>
            <a href="/blog/financial-analysis-key-ratios-business-owners" className="text-primary font-semibold hover:underline shrink-0">
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
                href="/services/management-reports"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد التقارير الإدارية</span>
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
                href="/services/financial-statements"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد القوائم المالية المعتمدة</span>
                <span className="text-secondary text-base">←</span>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
