import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = `السلام عليكم
أرغب في حجز استشارة لخدمة إعداد الموازنات
اسم حضرتك الكريم  /
اسم المنشأة / نوع النشاط / عدد الفروع / هل يمكن تحديد موعد مناسب للبدء`;
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function BudgetingPage() {
  const name = "إعداد الموازنات";
  const slug = "budgeting";
  const metaTitle = "إعداد الموازنات التقديرية والتخطيط المالي | القائد للإدارة المالية";
  const metaDesc = "خطط لنجاحك المالي بثقة. خدمة إعداد الموازنات التقديرية تساعدك على وضع أهداف مالية واضحة ومراقبة الانحرافات لضمان تحقيق رؤية منشأتك.";
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
              تساعد الموازنات التقديرية (Budgeting) الشركات على التخطيط المالي وتحديد الإيرادات والمصروفات المتوقعة قبل بداية الفترة المالية. ومن خلال إعداد موازنة دقيقة، تستطيع متابعة أداء منشأتك، وإدارة مواردها بكفاءة، ومقارنة النتائج الفعلية بالمستهدف، مما يساعد على اتخاذ قرارات مالية أكثر دقة وتحقيق أهداف النمو.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ماذا تتضمن خدمة إعداد الموازنات؟
            </h2>
            <p>
              أقوم بإعداد موازنات مالية تتناسب مع طبيعة نشاط منشأتك، مع الاعتماد على بياناتك المالية وخططك المستقبلية، وتشمل الخدمة:
            </p>

            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>إعداد الموازنة التشغيلية (Operating Budget).</li>
              <li>إعداد الموازنة النقدية (Cash Budget).</li>
              <li>إعداد موازنة الإيرادات والمصروفات.</li>
              <li>إعداد موازنة التدفقات النقدية (Cash Flow Forecast).</li>
              <li>إعداد الموازنة الرأسمالية (Capital Budget).</li>
              <li>مقارنة الأداء الفعلي بالموازنة (Budget vs Actual Analysis).</li>
              <li>تحليل الانحرافات (Variance Analysis).</li>
              <li>تقديم تقارير تساعد على متابعة تنفيذ الموازنة واتخاذ القرارات.</li>
            </ul>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              لماذا تعد الموازنة مهمة لمنشأتك؟
            </h2>
            <p>
              الموازنة ليست مجرد توقع للأرقام، بل هي أداة تساعدك على التخطيط للمستقبل، والتحكم في المصروفات، وإدارة السيولة، وتحديد الأهداف المالية بشكل واقعي. كما تمنحك القدرة على اكتشاف الانحرافات مبكرًا، واتخاذ الإجراءات المناسبة قبل أن تؤثر على نتائج أعمالك.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ابدأ بالتخطيط المالي لمنشأتك
            </h2>
            <p>
              إذا كنت تبحث عن محاسب مالي يساعدك في إعداد الموازنات التقديرية وتحليل الأداء المالي ومتابعة تنفيذ الخطط، فأنا جاهز لتقديم خدمة احترافية تساعدك على إدارة موارد منشأتك بكفاءة واتخاذ قرارات مبنية على بيانات مالية دقيقة.
            </p>
          </div>
          </div>
      </Container>
    </SectionWrapper>
  );
}
