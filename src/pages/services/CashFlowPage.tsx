import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = `السلام عليكم
أرغب في حجز استشارة لخدمة إدارة التدفقات النقدية
اسم حضرتك الكريم  /
اسم المنشأة / نوع النشاط / عدد الفروع / هل يمكن تحديد موعد مناسب للبدء`;
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function CashFlowPage() {
  const name = "إدارة التدفقات النقدية";
  const slug = "cash-flow";
  const metaTitle = "إدارة التدفقات النقدية للشركات | القائد للإدارة المالية";
  const metaDesc = "حافظ على سيولة منشأتك وتجنب الأزمات المالية. نقدم خدمات تخطيط وإدارة التدفقات النقدية لضمان وفائك بالتزاماتك وتمويل نمو أعمالك بأمان.";
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
              تعد إدارة التدفقات النقدية (Cash Flow Management) من أهم العوامل التي تساعد على استقرار أي منشأة، لأن توفر السيولة هو ما يضمن قدرتها على الوفاء بالالتزامات المالية في مواعيدها. وحتى المنشآت التي تحقق أرباحًا قد تواجه صعوبات إذا لم تتم إدارة التدفقات النقدية بطريقة صحيحة. لذلك يساعد التخطيط المالي السليم على متابعة حركة النقد، وتوقع الاحتياجات المستقبلية، والحفاظ على استقرار أعمالك.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ماذا تتضمن خدمة إدارة التدفقات النقدية؟
            </h2>
            <p>
              أساعدك على تنظيم وإدارة التدفقات النقدية بما يضمن توفر السيولة اللازمة لتشغيل منشأتك بكفاءة، وتشمل الخدمة:
            </p>

            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>إعداد قائمة التدفقات النقدية (Cash Flow Statement).</li>
              <li>إعداد توقعات التدفقات النقدية (Cash Flow Forecast).</li>
              <li>تحليل التدفقات النقدية الداخلة والخارجة.</li>
              <li>متابعة التحصيل وسداد الالتزامات المالية.</li>
              <li>تحسين دورة التحول النقدي (Cash Conversion Cycle - CCC).</li>
              <li>إدارة السيولة النقدية (Liquidity Management).</li>
              <li>إعداد تقارير دورية لمتابعة حركة النقد.</li>
              <li>تقديم توصيات لتحسين التدفقات النقدية وتقليل فجوات السيولة.</li>
            </ul>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              لماذا تعد إدارة التدفقات النقدية مهمة؟
            </h2>
            <p>
              الإدارة الفعالة للتدفقات النقدية تساعدك على معرفة احتياجات منشأتك من السيولة قبل حدوث أي عجز، كما تمكنك من التخطيط للمدفوعات، وتحسين عمليات التحصيل، ودعم قرارات التوسع والاستثمار بثقة. وجود خطة واضحة للتدفقات النقدية يقلل من المخاطر المالية، ويمنحك رؤية أفضل لإدارة أعمالك واستغلال الفرص في الوقت المناسب.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ابدأ بإدارة تدفقاتك النقدية
            </h2>
            <p>
              إذا كنت تبحث عن محاسب مالي يساعدك في إدارة التدفقات النقدية وتحليل السيولة وإعداد التوقعات المالية، فأنا جاهز لتقديم خدمة احترافية تساعدك على الحفاظ على استقرار منشأتك واتخاذ قرارات مالية مبنية على بيانات دقيقة.
            </p>
          </div>
          </div>
      </Container>
    </SectionWrapper>
  );
}
