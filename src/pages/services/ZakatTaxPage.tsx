import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة خدمة الزكاة والضريبة وإعداد الإقرارات لمنشأتي.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function ZakatTaxPage() {
  const name = "الزكاة والضريبة";
  const slug = "zakat-tax";
  const metaTitle = "خدمات الزكاة والضريبة للشركات | القائد للإدارة المالية";
  const metaDesc = "احمِ شركتك من المخالفات الضريبية. نقدم خدمات احترافية في إعداد ورفع الإقرارات الزكوية والضريبية بدقة واحترافية وفق متطلبات هيئة الزكاة والضريبة والجمارك.";
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
              تُعد الزكاة والضريبة من الالتزامات التنظيمية الأساسية على المنشآت والشركات في المملكة العربية السعودية. ويساعد الالتزام الصحيح بمتطلبات هيئة الزكاة والضريبة والجمارك (ZATCA) والتدقيق المستمر للسجلات المحاسبية على الحد من مخاطر المخالفات والغرامات، وتوفير وضوح مالي يساعدك على إدارة أعمالك باطمئنان وتجنب أي تعثر إداري أو مالي.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              كيف أساعدك في إدارة الزكاة والضريبة؟
            </h2>
            <p>
              أقدم خدمات تنظيم ومراجعة البيانات المالية وإعداد الإقرارات الزكوية والضريبية وفق الأنظمة واللوائح المعمول بها في المملكة العربية السعودية، مع التدقيق المحاسبي للقيود والفواتير للحد من أي تعارضات أو أخطاء محتملة. وتشمل الخدمة:
            </p>

            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>تسجيل المنشأة وتحديث بياناتها في ضريبة القيمة المضافة.</li>
              <li>إعداد ومراجعة إقرارات ضريبة القيمة المضافة (VAT Returns).</li>
              <li>احتساب الوعاء الزكوي وإعداد الإقرارات الزكوية السنوية.</li>
              <li>مراجعة الفواتير والقيود المحاسبية للتأكد من اكتمالها ومطابقتها.</li>
              <li>متابعة المواعيد النظامية للالتزامات الزكوية والضريبية.</li>
              <li>المساعدة في معالجة الاستفسارات وتجهيز المستندات المطلوبة للهيئة.</li>
              <li>تقديم التوجيه المحاسبي لدعم الالتزام بالأنظمة وتجنب الغرامات المالية.</li>
            </ul>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              لماذا تعد هذه الخدمة مهمة لمنشأتك؟
            </h2>
            <p>
              الإدارة الصحيحة للزكاة والضريبة لا تقتصر على مجرد تقديم الإقرارات في مواعيدها، بل تسهم في رفع جودة السجلات المحاسبية، وتفادي الفروقات المالية غير المبررة، وحماية السجل النظامي لأعمالك أمام البنوك والجهات الرسمية، مما يمنحك الاستقرار وراحة البال.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ابدأ بتنظيم ملفك الزكوي والضريبي
            </h2>
            <p>
              إذا كنت تبحث عن محاسب مالي يساعدك في إدارة الزكاة والضريبة وإعداد الإقرارات ومراجعة حسابات منشأتك بدقة وموثوقية، فأنا جاهز لتقديم خدمة احترافية تمنحك الاطمئنان والدقة في كافة تعاملاتك النظامية.
            </p>
          </div>

          {/* Service CTA Card */}
          <div className="my-8 p-6 bg-surface-subtle/60 border border-border-subtle rounded-2xl text-center">
            <h3 className="text-base md:text-lg font-bold text-text-primary mb-2">
              هل تحتاج إلى تجهيز بياناتك المالية للزكاة والضريبة؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              أساعدك في مراجعة القيود والفواتير وإعداد الإقرارات بما يتوافق مع متطلبات هيئة الزكاة والضريبة والجمارك (ZATCA).
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
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/zakat-tax-financial-data-organization" className="text-primary font-bold hover:underline">تنظيم البيانات المالية للزكاة والضريبة</a>
            </span>
            <a href="/blog/zakat-tax-financial-data-organization" className="text-primary font-semibold hover:underline shrink-0">
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
                href="/services/bookkeeping"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>تنظيم الحسابات ومسك الدفاتر</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/financial-statements"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد القوائم المالية المعتمدة</span>
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
