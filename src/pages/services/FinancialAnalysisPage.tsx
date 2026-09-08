import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle, CheckCircle2, AlertTriangle, Users, Briefcase, FileCheck, ArrowRight } from 'lucide-react';
import PdfLeadMagnet from '../../components/PdfLeadMagnet';
import ServiceFaqAccordion, { FAQItem } from '../../components/ServiceFaqAccordion';
import SupportedSystemsSection from '../../components/SupportedSystemsSection';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة احتياج منشأتي في مجال التحليل المالي وهوامش الربحية.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function FinancialAnalysisPage() {
  const name = "التحليل المالي";
  const slug = "financial-analysis";
  const metaTitle = "التحليل المالي وهوامش الربحية للشركات في السعودية | القائد";
  const metaDesc = "اكتشف أين تذهب أموال منشأتك. خدمة تحليل مالي احترافية تكشف هوامش الربح الحقيقية، نقاط التعادل، وتسرب التكاليف لمساعدتك على اتخاذ قرارات تسعير وتوسع رابحة.";
  const url = "https://alqaeed-sa.pages.dev/services/" + slug;

  const faqs: FAQItem[] = [
    {
      question: "كيف يفيدني التحليل المالي إذا كانت مبيعات منشأتي مرتفعة بالفعل؟",
      answer: "ارتفاع المبيعات لا يعني بالضرورة زيادة الأرباح؛ فقد تنمو المبيعات بينما تتآكل السيولة بسبب ارتفاع تكلفة البضاعة المباعة أو التكاليف التشغيلية الخفية أو البيع الآجل غير المحصل. التحليل المالي يوضح لك هامش الربح الصافي الفعلي لكل منتج ومستوى كفاءة إنفاقك."
    },
    {
      question: "هل يوضح التحليل المالي المنتجات أو الخدمات التي تسبب خسائر للمنشأة؟",
      answer: "نعم تماماً. نقوم بتحليل ربحية المنتجات والخدمات (Unit Economics) لنحدد لك بدقة الأصناف 'النجمية' التي تدر الأرباح، والأصناف التي تستهلك رأس المال بمردود ضعيف أو سالب لتعديل تسعيرها أو استبعادها."
    },
    {
      question: "ما هي نقطة التعادل (Break-even Point) ولماذا هي حرجة لصاحب المنشأة؟",
      answer: "نقطة التعادل هي حجم المبيعات بالريال أو بالوحدات الذي يغطي كافة تكاليفك الثابتة والمتغيرة دون ربح أو خسارة. معرفتها تحميك من التوسع غير المدروس، وتحدد مستهدف المبيعات الأدنى الذي يجب تحقيقه شهرياً للبقاء في المنطقة الآمنة."
    },
    {
      question: "هل يتضمن تقرير التحليل توصيات عملية أم مجرد معادلات ونسب صامتة؟",
      answer: "التقرير يصاغ بلغة تنفيذية واضحة ومباشرة تخاطب صانع القرار، مع خطة توصيات إجرائية محددة (مثل: إعادة تسعير، تخفيض بند مصروفات معين، أو تسريع دورة تحصيل الذمم)."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url + "/#webpage",
        "url": url,
        "name": metaTitle,
        "description": metaDesc,
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
        "@type": "FAQPage",
        "@id": url + "/#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
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

          <h1 className={`${TYPOGRAPHY.heading.h1} font-bold text-text-primary mb-3 leading-tight`}>
            التحليل المالي ومؤشرات الربحية
          </h1>
          <p className="text-sm md:text-base text-text-secondary mb-6 leading-relaxed">
            حوّل جداول الحسابات الصامتة إلى بوصلة استراتيجية توضح أين تذهب أرباحك، وأين تتسرب التكاليف، وكيف تسعّر منتجاتك لتحقيق أقصى عائد.
          </p>
          <div className="w-16 h-1 bg-primary mb-8 rounded-full"></div>

          {/* 1. المشكلة التي يحلها الحل */}
          <div className="mb-8 p-5 sm:p-6 bg-amber-50/70 border border-amber-200/80 rounded-2xl">
            <div className="flex items-center gap-2 mb-3 text-amber-900">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold">
                المشكلة: مبيعات ممتازة في الدفاتر.. ورصيد ضعيف في البنك!
              </h2>
            </div>
            <p className="text-xs md:text-sm text-amber-950 leading-relaxed mb-3">
              يعاني الكثير من المديرين التنفيذيين وأصحاب الأعمال من مفارقة مزعجة تتكرر شهرياً:
            </p>
            <ul className="space-y-1.5 text-xs md:text-sm text-amber-900 list-disc list-inside pr-1">
              <li>النشاط يعمل بكامل طاقته وحجم الفواتير كبير، ومع ذلك يظل فائض السيولة الصافي غير ملموس.</li>
              <li>البيع بأسعار قديمة أو غير مدروسة دون احتساب التضخم في تكلفة المواد الخام والمصاريف التشغيلية.</li>
              <li>عدم معرفة ما إذا كان أحد الفروع أو خطوط الإنتاج يحقق أرباحاً تغطي الفروع الخاسرة الأخرى دون أن تدري الإدارة.</li>
            </ul>
          </div>

          {/* 2. لمن هذه الخدمة */}
          <div className="mb-8 p-5 sm:p-6 bg-surface-subtle/50 border border-border-subtle rounded-2xl">
            <div className="flex items-center gap-2 mb-3 text-text-primary">
              <Users className="w-5 h-5 text-secondary shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold">
                لمن هذه الخدمة؟
              </h2>
            </div>
            <p className="text-xs md:text-sm text-text-secondary mb-4 leading-relaxed">
              تحتاجها كل منشأة تسعى لحماية هوامش أرباحها وتوسيع نشاطها بثقة:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>المطاعم والمقاهي:</strong> تحليل تكلفة الوجبات (Food Cost)، نسب الهدر، ونقاط التعادل لكل فرع.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>التجزئة والمتاجر:</strong> تحليل هوامش ربحية الأصناف ومعدلات دوران المخزون السريع والراكد.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>المقاولات والخدمات:</strong> قياس ربحية كل مشروع على حدة واكتشاف تجاوزات الموازنة مبكراً.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>الشركات الراغبة في التوسع:</strong> لحساب الجدوى المالية قبل فتح فروع جديدة أو ضخ رأس مال إضافي.</span>
              </div>
            </div>
          </div>

          {/* 3. ماذا نقدم */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold text-text-primary">
                ماذا نقدم في خدمة التحليل المالي؟
              </h2>
            </div>
            <p className="text-xs md:text-sm text-text-secondary mb-4 leading-relaxed">
              تشريح مالي متعمق لقوائمك وحساباتك لكشف المؤشرات الجوهرية:
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-text-secondary pr-2">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>تحليل هوامش الربحية (Margin Analysis):</strong> قياس هامش مجمل الربح، الهامش التشغيلي، وصافي العائد على المبيعات.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>تحليل نقطة التعادل (Break-even):</strong> تحديد المبيعات الدنيا المطلوبة لتغطية النفقات الثابتة والبدء بجني الأرباح.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>تحليل هيكل التكاليف وترشيد الإنفاق:</strong> تصنيف التكاليف (ثابتة ومتغيرة) واكتشاف بنود الهدر غير المبررة.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>تحليل دورة رأس المال العامل والسيولة:</strong> حساب متوسط أيام التحصيل وسداد الموردين ومعدل دوران المخزون.</span>
              </li>
            </ul>
          </div>

          {/* 4. ماذا يحصل العميل */}
          <div className="mb-8 p-5 sm:p-6 bg-emerald-50/60 border border-emerald-200/80 rounded-2xl">
            <div className="flex items-center gap-2 mb-3 text-emerald-900">
              <FileCheck className="w-5 h-5 text-emerald-700 shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold">
                ماذا يحصل صاحب المنشأة؟ (المخرجات الملموسة)
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-emerald-950">
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>معرفة المنتجات الأكثر ربحية:</strong> التوقف عن دعم الأصناف الخاسرة والتركيز على مكامن الربح الفعلي.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>تسعير علمي مدروس:</strong> سياسات تسعير تحمي هامش ربحك وتضمن امتصاص زيادات تكلفة المواد.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>أرقام واضحة لنقطة التعادل:</strong> هدف مبيعات محدد لفريقك التجاري يضمن تحقيق الأرباح.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>توصيات إدارية عملية:</strong> تقرير تنفيذي موجز يحدد القرارات التي ترفع الأرباح فوراً.
              </div>
            </div>
          </div>

          {/* 5. كيف نعمل */}
          <div className="mb-8">
            <h2 className="text-base md:text-lg font-bold text-text-primary mb-4">
              كيف نعمل؟ (3 خطوات للتحليل المالي العملي)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs md:text-sm">
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">1</div>
                <h3 className="font-bold text-text-primary mb-1">حصر واستخراج البيانات</h3>
                <p className="text-text-secondary leading-relaxed">تجميع بيانات القوائم ومبيعات المنتجات والمصروفات من نظامك المحاسبي.</p>
              </div>
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">2</div>
                <h3 className="font-bold text-text-primary mb-1">النمذجة وحساب المؤشرات</h3>
                <p className="text-text-secondary leading-relaxed">تطبيق معادلات النسب المالية، حساب نقطة التعادل، ومقارنة التكاليف بالإيرادات.</p>
              </div>
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">3</div>
                <h3 className="font-bold text-text-primary mb-1">جلسة المناقشة والتوصيات</h3>
                <p className="text-text-secondary leading-relaxed">تسليم التقرير التنفيذي وشرح الخطوات العملية لتحسين الربحية والسيولة.</p>
              </div>
            </div>
          </div>

          {/* 6. الأنظمة التي يمكن العمل عليها عند الحاجة */}
          <SupportedSystemsSection 
            subtitle="نحلل تقارير المبيعات وتكلفة البضاعة المباعة مباشرة عبر العمل على نظامك القائم (مثل قيود، دفترة، Odoo، Zoho Books، QuickBooks، ERPNext)."
          />

          {/* نموذج لوحة تحليل مالي استرشادي */}
          <PdfLeadMagnet 
            title="" 
            subtitle="" 
            reportName="تقرير التحليل المالي ومؤشرات الربحية (Financial KPI Analysis)" 
            whatsappUrl={WHATSAPP_URL}
            documentContent={
              <div className="flex flex-col h-full bg-white text-gray-800 text-[10px] md:text-xs font-sans">
                <div className="border-b-2 border-primary pb-3 mb-4 flex justify-between items-end">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 font-arabic mb-1">لوحة التحليل المالي والربحية</h2>
                    <p className="text-gray-500 font-arabic">Financial Ratio & Margin Analysis</p>
                  </div>
                  <div className="text-left text-[9px] md:text-[10px] text-gray-400">
                    <p>KPI Dashboard</p>
                    <p>Benchmark: SME Sector</p>
                  </div>
                </div>

                <div className="flex-grow space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 bg-blue-50/70 border border-blue-100 rounded-lg text-center">
                      <p className="text-gray-500 text-[9px] font-arabic">هامش مجمل الربح</p>
                      <p className="text-base md:text-lg font-bold text-blue-900 font-mono">40.0%</p>
                      <span className="text-[8px] text-green-700 font-medium">أعلى من المتوسط (35%)</span>
                    </div>
                    <div className="p-2.5 bg-emerald-50/70 border border-emerald-100 rounded-lg text-center">
                      <p className="text-gray-500 text-[9px] font-arabic">هامش صافي الربح</p>
                      <p className="text-base md:text-lg font-bold text-emerald-900 font-mono">14.2%</p>
                      <span className="text-[8px] text-emerald-700 font-medium">مؤشر نمو صحي</span>
                    </div>
                    <div className="p-2.5 bg-amber-50/70 border border-amber-100 rounded-lg text-center">
                      <p className="text-gray-500 text-[9px] font-arabic">نقطة التعادل الشهرية</p>
                      <p className="text-base md:text-lg font-bold text-amber-900 font-mono">180K SAR</p>
                      <span className="text-[8px] text-amber-800 font-medium">تغطية النفقات الثابتة</span>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-right border-collapse min-w-[400px]">
                      <thead>
                        <tr className="bg-gray-100 border-y border-gray-300">
                          <th className="py-2 px-2 font-semibold text-gray-700">المؤشر المالي</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 text-left">القيمة المحققة</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 text-left">المعدل المستهدف</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 text-left">التقييم والتوجيه</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 font-arabic">
                        <tr>
                          <td className="py-2 px-2 text-gray-800">نسبة التداول (السيولة السريعة)</td>
                          <td className="py-2 px-2 text-left font-mono font-bold text-emerald-700">2.1x</td>
                          <td className="py-2 px-2 text-left font-mono">1.5x</td>
                          <td className="py-2 px-2 text-left text-[10px] text-emerald-700">سيولة ممتازة لتغطية الالتزامات</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 text-gray-800">متوسط فترة تحصيل العملاء (DSO)</td>
                          <td className="py-2 px-2 text-left font-mono font-bold text-amber-700">62 يوماً</td>
                          <td className="py-2 px-2 text-left font-mono">45 يوماً</td>
                          <td className="py-2 px-2 text-left text-[10px] text-amber-700">تنبيه: يلزم تشديد سياسة التحصيل</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 text-gray-800">معدل دوران المخزون السنوي</td>
                          <td className="py-2 px-2 text-left font-mono font-bold text-blue-700">5.8 مرات</td>
                          <td className="py-2 px-2 text-left font-mono">5.0 مرات</td>
                          <td className="py-2 px-2 text-left text-[10px] text-blue-700">كفاءة عالية في إدارة المستودع</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-2.5 bg-gray-50 border border-gray-200 rounded text-[10px] text-gray-700 leading-relaxed">
                    <strong>توصية المستشار المالي:</strong> إعادة تسعير الصنفين (ب) و (ج) سيوفر زيادة بنسبة 3.5% في صافي الهامش، مع ضرورة تقليص فترة ائتمان العملاء إلى 45 يوماً لحماية التدفق النقدي.
                  </div>
                </div>
              </div>
            }
          />

          {/* 7. FAQ */}
          <ServiceFaqAccordion faqs={faqs} />

          {/* 8. CTA واضح */}
          <div className="my-8 p-6 bg-surface-subtle/60 border border-border-subtle rounded-2xl text-center">
            <h3 className="text-base md:text-lg font-bold text-text-primary mb-2">
              هل تريد معرفة مكامن تسرب التكاليف الحقيقية ورفع هامش ربحك؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              ناقش احتياج منشأتك واكتشف التوصيات المالية التي تحدث فرقاً ملموساً في أرباحك الصافية.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="inline-flex items-center gap-x-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs md:text-sm font-semibold rounded-xl transition-all shadow-sm duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>ناقش احتياج منشأتك</span>
            </a>
          </div>

          {/* Related Article Guide Link */}
          <div className="mb-8 p-4 bg-primary/5 border border-primary/15 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs md:text-sm">
            <span className="text-text-secondary font-medium">
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/pricing-strategies-small-businesses-profitability" className="text-primary font-bold hover:underline">استراتيجيات التسعير ورفع هوامش الربحية للمنشآت</a>
            </span>
            <a href="/blog/pricing-strategies-small-businesses-profitability" className="text-primary font-semibold hover:underline shrink-0">
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
                <span>التقارير المالية الدورية</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
              <a
                href="/services/budgeting"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد الموازنات التقديرية</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
              <a
                href="/services/financial-statements"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد القوائم المالية المعتمدة</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
