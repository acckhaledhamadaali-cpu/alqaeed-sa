import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = `السلام عليكم
أرغب في حجز استشارة لخدمة إعداد القوائم المالية
اسم حضرتك الكريم  /
اسم المنشأة / نوع النشاط / عدد الفروع / هل يمكن تحديد موعد مناسب للبدء`;
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function FinancialStatementsPage() {
  const name = "إعداد القوائم المالية";
  const slug = "financial-statements";
  const metaTitle = "إعداد القوائم المالية المعتمدة للشركات | القائد للإدارة المالية";
  const metaDesc = "احصل على قوائم مالية دقيقة وشفافة تعكس الأداء الحقيقي لمنشأتك. نساعدك في إعداد ميزانيات احترافية تدعم قراراتك وتزيد ثقة البنوك والمستثمرين.";
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
        "isPartOf": {
          "@id": "https://alqaeed-sa.netlify.app/#website"
        }
      },
      {
        "@type": "Service",
        "@id": url + "/#service",
        "name": name,
        "description": metaDesc,
        "provider": {
          "@id": "https://alqaeed-sa.netlify.app/#organization"
        },
        "areaServed": "SA"
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
              تعد القوائم المالية (Financial Statements) من أهم التقارير التي تعتمد عليها الشركات لتقييم أدائها المالي واتخاذ القرارات الاستراتيجية. كما أنها المرجع الرئيسي للجهات الخارجية مثل البنوك، والمستثمرين، وهيئة الزكاة والضريبة والجمارك. فإعداد القوائم المالية بدقة ووفق المعايير المحاسبية المعتمدة يوفر صورة واضحة وموثوقة عن المركز المالي لمنشأتك ونتائج أعمالها.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ماذا تتضمن خدمة إعداد القوائم المالية؟
            </h2>
            <p>
              أقوم بإعداد القوائم المالية وفق المعايير المحاسبية المعتمدة في المملكة العربية السعودية، مع مراجعة البيانات المالية لضمان دقتها واكتمالها. وتشمل الخدمة:
            </p>

            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>إعداد قائمة المركز المالي (Balance Sheet).</li>
              <li>إعداد قائمة الدخل (Income Statement / Profit & Loss).</li>
              <li>إعداد قائمة التدفقات النقدية (Cash Flow Statement).</li>
              <li>إعداد قائمة التغيرات في حقوق الملكية (Statement of Changes in Equity).</li>
              <li>إعداد الإيضاحات المتممة للقوائم المالية (Notes to Financial Statements).</li>
              <li>مراجعة وتدقيق الحسابات قبل إصدار القوائم المالية.</li>
              <li>تجهيز القوائم المالية للجهات التمويلية والبنوك والمستثمرين.</li>
            </ul>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              لماذا تعد القوائم المالية مهمة لمنشأتك؟
            </h2>
            <p>
              القوائم المالية ليست مجرد متطلب نظامي، بل هي أداة أساسية تساعدك على معرفة الأداء الحقيقي لمنشأتك، وقياس الربحية، ومتابعة السيولة والالتزامات. كما تسهل عليك الحصول على التمويل أو جذب المستثمرين، وتدعم القرارات الإدارية المبنية على أرقام دقيقة وموثوقة.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ابدأ بإعداد قوائمك المالية بدقة
            </h2>
            <p>
              إذا كنت تبحث عن محاسب مالي يساعدك في إعداد القوائم المالية بأسلوب احترافي وبما يتوافق مع المعايير المحاسبية، فأنا جاهز لتقديم خدمة تضمن لك دقة البيانات ووضوح الرؤية المالية لمنشأتك.
            </p>
          </div>
          </div>
      </Container>
    </SectionWrapper>
  );
}
