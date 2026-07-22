import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = `السلام عليكم
أرغب في حجز استشارة لخدمة التقارير الإدارية
اسم حضرتك الكريم  /
اسم المنشأة / نوع النشاط / عدد الفروع / هل يمكن تحديد موعد مناسب للبدء`;
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function ManagementReportsPage() {
  const name = "التقارير الإدارية";
  const slug = "management-reports";
  const metaTitle = "إعداد التقارير الإدارية المالية للشركات | القائد للإدارة المالية";
  const metaDesc = "ابقَ على اطلاع دائم بأداء منشأتك عبر تقارير إدارية ولوحات قياس دقيقة تصمم خصيصاً لتمنح الإدارة العليا القدرة على اتخاذ قرارات سريعة وصائبة.";
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
          </div>
      </Container>
    </SectionWrapper>
  );
}
