import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = `السلام عليكم
أرغب في حجز استشارة لخدمة تنظيم الحسابات ومسك الدفاتر
اسم حضرتك الكريم  /
اسم المنشأة / نوع النشاط / عدد الفروع / هل يمكن تحديد موعد مناسب للبدء`;
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function BookkeepingPage() {
  const name = "تنظيم الحسابات ومسك الدفاتر";
  const slug = "bookkeeping";
  const metaTitle = "خدمات مسك الدفاتر المحاسبية للشركات | القائد للإدارة المالية";
  const metaDesc = "نقدم خدمات تنظيم الحسابات ومسك الدفاتر الاحترافية. احصل على تقارير مالية دقيقة تساند نمو أعمالك وتضمن دقة قراراتك عبر أفضل البرامج المحاسبية.";
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
            تنظيم الحسابات ومسك الدفاتر
          </h1>
          <div className="w-16 h-1 bg-primary mb-6 rounded-full"></div>

          <div className="text-sm md:text-[15px] text-text-secondary leading-loose space-y-4">
            <p>
              تنظيم الحسابات ومسك الدفاتر هو الأساس الذي تعتمد عليه أي منشأة لإدارة أعمالها بطريقة صحيحة. فكل عملية بيع أو شراء أو مصروف أو إيراد يجب أن تُسجل بدقة حتى تتمكن من معرفة الوضع المالي الحقيقي لمنشأتك. وعندما تكون الحسابات منظمة، يصبح إعداد القوائم المالية ومتابعة التدفقات النقدية والالتزام بالمتطلبات الزكوية والضريبية أكثر سهولة، مما يساعدك على اتخاذ قرارات مبنية على بيانات دقيقة بدلاً من التخمين.
            </p>
            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              كيف أساعدك في تنظيم حسابات منشأتك؟
            </h2>
            <p>
              أقدم خدمة تنظيم الحسابات ومسك الدفاتر بما يتناسب مع طبيعة نشاط منشأتك، مع الحرص على تسجيل جميع العمليات المالية بطريقة صحيحة ومنظمة، وتشمل الخدمة:
            </p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>تصميم وتنظيم شجرة الحسابات.</li>
              <li>تسجيل القيود اليومية وفق الأصول المحاسبية.</li>
              <li>متابعة الإيرادات والمصروفات.</li>
              <li>مطابقة الحسابات البنكية والصندوق.</li>
              <li>إدارة حسابات العملاء والموردين.</li>
              <li>إعداد ميزان المراجعة بشكل دوري.</li>
              <li>تنظيم وأرشفة المستندات المالية.</li>
              <li>تجهيز البيانات اللازمة لإعداد القوائم المالية والزكاة والضريبة.</li>
            </ul>
            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ما الذي ستستفيده من تنظيم الحسابات؟
            </h2>
            <p>
              وجود نظام محاسبي منظم يساعدك على متابعة أداء منشأتك بشكل مستمر، ومعرفة أرباحك ومصروفاتك بدقة، وتقليل الأخطاء المحاسبية، والاستعداد لأي مراجعة مالية أو ضريبية بثقة. كما يمنحك معلومات مالية واضحة تساعدك على التخطيط للنمو واتخاذ قرارات صحيحة في الوقت المناسب.
            </p>
            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ابدأ بتنظيم حسابات منشأتك
            </h2>
            <p>
              إذا كنت تبحث عن محاسب مالي يساعدك على تنظيم الحسابات ومسك الدفاتر بطريقة احترافية، فأنا جاهز لتقديم خدمة تناسب طبيعة نشاطك وتوفر لك بيانات مالية دقيقة تساعدك على إدارة أعمالك بثقة.
            </p>
          </div>
          </div>
      </Container>
    </SectionWrapper>
  );
}
