import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle } from 'lucide-react';
import PdfLeadMagnet from '../../components/PdfLeadMagnet';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة إدارة التدفقات النقدية وتخطيط السيولة لمنشأتي.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function CashFlowPage() {
  const name = "إدارة التدفقات النقدية";
  const slug = "cash-flow";
  const metaTitle = "إدارة التدفقات النقدية والسيولة للشركات | القائد";
  const metaDesc = "تنظيم توقع المقبوضات والمدفوعات والالتزامات ومتابعة السيولة، لتكوين رؤية زمنية تساعد الإدارة على التخطيط النقدي.";
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
              قد تسجل المنشأة ربحًا بينما يتأخر تحصيل فواتيرها أو تستحق عليها مدفوعات قبل دخول النقد. لذلك تُظهر متابعة التدفقات النقدية توقيت المقبوضات والمدفوعات، وتساعد على كشف الفترات التي قد تضغط على السيولة. وهي تختلف عن الربح المحاسبي وعن رصيد البنك في يوم واحد.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ما الذي تتضمنه متابعة التدفقات النقدية؟
            </h2>
            <p>
              تُبنى توقعات التدفق النقدي على رصيد البداية والمبالغ المتوقع تحصيلها ومواعيدها، والمدفوعات والالتزامات المعروفة. كلما كانت الافتراضات موثقة ومحدّثة كان التوقع أنفع؛ لكنه يظل تقديرًا يتغير عند تأخر عميل أو ظهور نفقة غير متوقعة.
            </p>

            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>حصر أرصدة النقد والحسابات البنكية في تاريخ البداية.</li>
              <li>تجميع المقبوضات المتوقعة مع تواريخها ومصدرها.</li>
              <li>إدراج الرواتب والموردين والإيجارات والالتزامات المعروفة.</li>
              <li>إعداد توقع نقدي للفترة المتفق عليها وتحديثه وفق المستجدات.</li>
              <li>مقارنة المتوقع بالفعلي وشرح أسباب الفروقات.</li>
              <li>متابعة الذمم والتحصيل والمدفوعات ضمن البيانات المتاحة.</li>
              <li>توضيح البنود غير المؤكدة والافتراضات التي بُني عليها التوقع.</li>
              <li>توضيح مصدر البيانات والافتراضات التي ينبغي مراعاتها عند قراءة النتائج.</li>
            </ul>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              لماذا تختلف السيولة عن الربح؟
            </h2>
            <p>
              تشمل المتابعة مقارنة التوقع بما حدث فعليًا، ومعرفة أسباب الفروقات، ومراجعة الذمم والتحصيل والمشتريات والالتزامات القادمة. هذا يساعد الإدارة على ترتيب الأولويات ومناقشة خياراتها، ولا يضمن منع العجز أو توفير تمويل.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ابدأ بتوقع احتياج منشأتك النقدي
            </h2>
            <p>
              للبدء، حدّد الأفق الزمني الذي تريد متابعته، وقدّم أرصدة النقد المتاحة وقائمة المستحقات والمصروفات المعروفة. بعد ذلك يتضح مستوى التفصيل الممكن ودورية تحديث التوقع.
            </p>
          </div>

          <PdfLeadMagnet 
            title="" 
            subtitle="" 
            reportName="تقرير تحليل السيولة والتدفقات النقدية" 
            whatsappUrl={WHATSAPP_URL}
            documentContent={
              <div className="flex flex-col h-full bg-white text-gray-800 text-[10px] md:text-xs font-sans">
                {/* PDF Header */}
                <div className="border-b-2 border-emerald-800 pb-3 mb-4 flex justify-between items-end">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 font-arabic mb-1">Statement of Cash Flows</h2>
                    <p className="text-gray-500">للفترة من 01-يناير إلى 31-ديسمبر 2024</p>
                  </div>
                  <div className="text-left text-[9px] md:text-[10px] text-gray-400">
                    <p>Financial Dept.</p>
                    <p>Currency: SAR</p>
                  </div>
                </div>

                {/* Table Content */}
                <div className="flex-grow">
                  <div className="overflow-x-auto">
                    <table className="w-full text-right mb-6 border-collapse min-w-[400px]">
                      <tbody className="divide-y divide-gray-100">
                        {/* Operating Activities */}
                        <tr className="bg-emerald-50/50">
                          <td colSpan={2} className="py-2 px-2 font-bold text-emerald-900">التدفقات النقدية من الأنشطة التشغيلية</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-800">صافي الدخل</td>
                          <td className="py-2 px-2 text-left">450,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-600 pr-6 text-[9px] md:text-[10px]">إهلاك الأصول الثابتة</td>
                          <td className="py-2 px-2 text-left">85,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-600 pr-6 text-[9px] md:text-[10px]">(الزيادة) في حسابات العملاء</td>
                          <td className="py-2 px-2 text-left text-red-600">(120,000)</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-600 pr-6 text-[9px] md:text-[10px]">الزيادة في حسابات الموردين</td>
                          <td className="py-2 px-2 text-left">45,000</td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="py-2 px-2 font-bold text-gray-900">صافي النقد من الأنشطة التشغيلية</td>
                          <td className="py-2 px-2 text-left font-bold text-emerald-700">460,000</td>
                        </tr>
                        
                        {/* Investing Activities */}
                        <tr className="bg-blue-50/50 mt-2">
                          <td colSpan={2} className="py-2 px-2 font-bold text-blue-900 pt-4">التدفقات النقدية من الأنشطة الاستثمارية</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-800">شراء معدات وآلات</td>
                          <td className="py-2 px-2 text-left text-red-600">(250,000)</td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="py-2 px-2 font-bold text-gray-900">صافي النقد المستخدم في الاستثمار</td>
                          <td className="py-2 px-2 text-left font-bold text-red-600">(250,000)</td>
                        </tr>

                        {/* Financing Activities */}
                        <tr className="bg-purple-50/50 mt-2">
                          <td colSpan={2} className="py-2 px-2 font-bold text-purple-900 pt-4">التدفقات النقدية من الأنشطة التمويلية</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-800">سداد قروض بنكية</td>
                          <td className="py-2 px-2 text-left text-red-600">(100,000)</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-800">توزيعات أرباح للملاك</td>
                          <td className="py-2 px-2 text-left text-red-600">(50,000)</td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="py-2 px-2 font-bold text-gray-900">صافي النقد المستخدم في التمويل</td>
                          <td className="py-2 px-2 text-left font-bold text-red-600">(150,000)</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="bg-gray-100 border-t-2 border-gray-800 font-bold mt-4">
                          <td className="py-3 px-2 text-gray-900">صافي الزيادة (النقص) في النقدية</td>
                          <td className="py-3 px-2 text-left text-emerald-700">60,000</td>
                        </tr>
                        <tr className="bg-gray-50 border-t border-gray-300">
                          <td className="py-2 px-2 text-gray-700">النقدية في بداية الفترة</td>
                          <td className="py-2 px-2 text-left text-gray-700">140,000</td>
                        </tr>
                        <tr className="bg-gray-200 border-t-2 border-emerald-800 font-bold text-sm">
                          <td className="py-3 px-2 text-emerald-900">النقدية وما في حكمها في نهاية الفترة</td>
                          <td className="py-3 px-2 text-left text-emerald-900">200,000</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            }
          />

          {/* Service CTA Card */}
          <div className="my-8 p-6 bg-surface-subtle/60 border border-border-subtle rounded-2xl text-center">
            <h3 className="text-base md:text-lg font-bold text-text-primary mb-2">
              هل تحتاج إلى ضبط ومتابعة التدفقات النقدية؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              ابنِ صورة زمنية للمقبوضات والمدفوعات قبل اتخاذ القرار.
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
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/cash-flow-management-avoid-financial-crisis/" className="text-primary font-bold hover:underline">إدارة التدفقات النقدية وتفادي الأزمات</a>
            </span>
            <a href="/blog/cash-flow-management-avoid-financial-crisis/" className="text-primary font-semibold hover:underline shrink-0">
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
                href="/services/budgeting/"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد الموازنات التقديرية</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/financial-statements/"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد القوائم المالية المعتمدة</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/virtual-cfo/"
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
