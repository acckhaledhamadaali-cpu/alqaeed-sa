import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = `السلام عليكم
أرغب في حجز استشارة لخدمة الزكاة والضريبة
اسم حضرتك الكريم  /
اسم المنشأة / نوع النشاط / عدد الفروع / هل يمكن تحديد موعد مناسب للبدء`;
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function ZakatTaxPage() {
  const name = "الزكاة والضريبة";
  const slug = "zakat-tax";
  const metaTitle = "خدمات الزكاة والضريبة للشركات | القائد للإدارة المالية";
  const metaDesc = "احمِ شركتك من المخالفات الضريبية. نقدم خدمات احترافية في إعداد ورفع الإقرارات الزكوية والضريبية بدقة واحترافية وفق متطلبات هيئة الزكاة والضريبة والجمارك.";
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
              تُعد الزكاة والضريبة من الالتزامات الأساسية على الشركات والمؤسسات في المملكة العربية السعودية، ويضمن الالتزام بها تجنب الغرامات والمخالفات والوفاء بمتطلبات هيئة الزكاة والضريبة والجمارك. كما تساعد مراجعة البيانات المالية وإعداد الإقرارات بدقة على تنظيم أعمال منشأتك واتخاذ قرارات مالية أكثر وضوحًا.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              كيف أساعدك في إدارة الزكاة والضريبة؟
            </h2>
            <p>
              أقدم خدمات الزكاة والضريبة بما يتوافق مع الأنظمة المعمول بها في المملكة العربية السعودية، مع مراجعة بياناتك المالية قبل تقديم الإقرارات لضمان دقتها. وتشمل الخدمة:
            </p>

            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>تسجيل المنشأة في ضريبة القيمة المضافة.</li>
              <li>إعداد وتقديم إقرارات ضريبة القيمة المضافة.</li>
              <li>احتساب الزكاة وفق الأنظمة المعتمدة.</li>
              <li>مراجعة الفواتير والقيود المحاسبية.</li>
              <li>متابعة الالتزامات الزكوية والضريبية.</li>
              <li>دعم المنشأة عند طلب بيانات أو مستندات من الهيئة.</li>
              <li>تقديم الاستشارات المتعلقة بالزكاة والضريبة.</li>
            </ul>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              لماذا تعد هذه الخدمة مهمة لمنشأتك؟
            </h2>
            <p>
              الإدارة الصحيحة للزكاة والضريبة لا تقتصر على تقديم الإقرارات في موعدها، بل تساعد على رفع جودة السجلات المحاسبية، وتقليل الأخطاء، وتعزيز التزام منشأتك بالأنظمة، مما يمنحك الثقة في إدارة أعمالك ويجنبك المشكلات المستقبلية.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ابدأ اليوم
            </h2>
            <p>
              إذا كنت تبحث عن محاسب مالي يساعدك في إدارة الزكاة والضريبة وإعداد الإقرارات الضريبية ومراجعة حسابات منشأتك، فأنا جاهز لتقديم خدمة احترافية تناسب طبيعة نشاطك وتساعدك على الالتزام بالأنظمة بثقة.
            </p>
          </div>
          </div>
      </Container>
    </SectionWrapper>
  );
}
