import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = `السلام عليكم
أرغب في حجز استشارة لخدمة التحليل المالي
اسم حضرتك الكريم  /
اسم المنشأة / نوع النشاط / عدد الفروع / هل يمكن تحديد موعد مناسب للبدء`;
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function FinancialAnalysisPage() {
  const name = "التحليل المالي";
  const slug = "financial-analysis";
  const metaTitle = "التحليل المالي للشركات وتقييم الأداء | القائد للإدارة المالية";
  const metaDesc = "حول الأرقام الصامتة إلى استراتيجيات ناجحة. خدمات التحليل المالي الاحترافية لمساعدتك في فهم مؤشرات السيولة والربحية واكتشاف فرص النمو لمنشأتك.";
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
          </div>
      </Container>
    </SectionWrapper>
  );
}
