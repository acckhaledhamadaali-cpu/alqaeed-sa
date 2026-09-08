import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle, CheckCircle2, AlertTriangle, Users, Briefcase, FileCheck, ArrowRight } from 'lucide-react';
import PdfLeadMagnet from '../../components/PdfLeadMagnet';
import ServiceFaqAccordion, { FAQItem } from '../../components/ServiceFaqAccordion';
import SupportedSystemsSection from '../../components/SupportedSystemsSection';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة احتياج منشأتي في مجال تنظيم الحسابات ومسك الدفاتر.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function BookkeepingPage() {
  const name = "تنظيم الحسابات ومسك الدفاتر";
  const slug = "bookkeeping";
  const metaTitle = "خدمات مسك الدفاتر وتنظيم الحسابات للمنشآت في السعودية | القائد";
  const metaDesc = "تخلص من فوضى الفواتير وتأخر القيود. خدمة مسك دفاتر وتنظيم حسابات احترافية للشركات الصغيرة والمتوسطة وفق معايير المحاسبة ومتطلبات ZATCA.";
  const url = "https://alqaeed-sa.pages.dev/services/" + slug;

  const faqs: FAQItem[] = [
    {
      question: "هل يلزم أن أكون مشتركاً في برنامج محاسبي معين للبدء؟",
      answer: "لا، نحن نعمل مباشرة على نظامك المحاسبي الحالي أياً كان (مثل قيود، دفترة، Odoo، Zoho Books، QuickBooks، أو ERPNext). وإن لم تكن تملك برنامجاً بعد، نرشدك للنظام الأنسب لحجم نشاطك وميزانيتك."
    },
    {
      question: "كيف أرسل الفواتير والمستندات المالية دون أن يعطل ذلك عملي اليومي؟",
      answer: "نوفر آلية مرنة جداً؛ يمكنك رفع الفواتير عبر مجلد سحابي آمن، أو عبر البريد الإلكتروني، أو إدخالها مباشرة من نقاط البيع والفروع، ونحن نتولى المراجعة والترحيل والتدقيق."
    },
    {
      question: "هل تساعدنا الخدمة في تجنب غرامات هيئة الزكاة والضريبة والجمارك (ZATCA)؟",
      answer: "نعم تماماً. يتم تسجيل كافة الفواتير والمصروفات وفق اشتراطات الفوترة الإلكترونية وضريبة القيمة المضافة (VAT)، مما يضمن جهوزية أرقام إقرارك الضريبي في موعده دون تأخير أو أخطاء حسابية."
    },
    {
      question: "هل تقدمون الخدمة عن بعد للمنشآت في مختلف مدن المملكة؟",
      answer: "نعم، نقدم الخدمة عن بعد للمنشآت في الرياض، جدة، الدمام، وكافة مناطق المملكة عبر الربط السحابي، مع عقد اجتماعات دورية وتواصل دائم عبر واتساب والاتصال."
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
            تنظيم الحسابات ومسك الدفاتر
          </h1>
          <p className="text-sm md:text-base text-text-secondary mb-6 leading-relaxed">
            حوّل الفواتير المبعثرة والسجلات المتأخرة إلى نظام مالي منظم ومطابق يمنحك راحة البال ومعرفة دقيقة بوضع منشأتك في أي وقت.
          </p>
          <div className="w-16 h-1 bg-primary mb-8 rounded-full"></div>

          {/* 1. المشكلة التي يحلها الحل */}
          <div className="mb-8 p-5 sm:p-6 bg-amber-50/70 border border-amber-200/80 rounded-2xl">
            <div className="flex items-center gap-2 mb-3 text-amber-900">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold">
                المشكلة: عندما تصبح الفواتير عبئاً والبيانات المالية غير واضحة
              </h2>
            </div>
            <p className="text-xs md:text-sm text-amber-950 leading-relaxed mb-3">
              كثير من أصحاب المنشآت يجدون أنفسهم غارقين بين مستندات يومية متراكمة، فواتير مشتريات غير مقيدة، وحسابات بنكية لا تتطابق مع الدفاتر. النتيجة المعتادة:
            </p>
            <ul className="space-y-1.5 text-xs md:text-sm text-amber-900 list-disc list-inside pr-1">
              <li>عدم معرفة الرصيد الفعلي المتاح وحجم الأرباح الصافية الحقيقية في نهاية كل شهر.</li>
              <li>ضياع مبالغ مستحقة لدى العملاء وتراكم مستحقات للموردين دون متابعة واضحة.</li>
              <li>التوتر والقلق مع اقتراب مواعيد إقرار ضريبة القيمة المضافة (VAT) أو متطلبات الفحص الزكوي.</li>
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
              صُممت هذه الخدمة خصيصاً للشركات الصغيرة والمتوسطة والأنشطة التجارية في السوق السعودي:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>المطاعم والمقاهي:</strong> ضبط تكاليف المواد الخام وحسابات نقاط البيع (POS) وتوريد الكاش.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>التجارة والتجزئة:</strong> متابعة حركة المبيعات والمخزون وحسابات الموردين والخصومات.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>المقاولات والخدمات:</strong> تسجيل تكاليف كل مشروع ومتابعة مستخلصات العملاء وفواتير العقود.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>المنشآت النامية:</strong> التي تحتاج محاسباً مالياً متخصصاً دون تكلفة توظيف قسم مالي كامل بدوام كامل.</span>
              </div>
            </div>
          </div>

          {/* 3. ماذا نقدم */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold text-text-primary">
                ماذا نقدم في خدمة مسك الدفاتر؟
              </h2>
            </div>
            <p className="text-xs md:text-sm text-text-secondary mb-4 leading-relaxed">
              نتولى دور الإدارة المالية التشغيلية لمنشأتك بدقة وانتظام:
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-text-secondary pr-2">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>بناء شجرة حسابات ملائمة:</strong> مهيكلة وفق طبيعة نشاطك ومعايير المحاسبة المعتمدة (SOCPA).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>تسجيل العمليات اليومية:</strong> إدخال وترحيل فواتير المبيعات، المشتريات، والمصروفات أولاً بأول.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>التسويات البنكية ومطابقة العهد:</strong> مطابقة الحسابات البنكية شهرياً لضمان عدم وجود أي ريال مفقود.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>إدارة الذمم المدينة والدائنة:</strong> كشوف حساب واضحة لمتابعة تحصيل مستحقاتك وسداد التزاماتك.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>إعداد ميزان المراجعة الدوري:</strong> التحقق من توازن الحسابات وجهوزيتها للتقارير الختامية.</span>
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
                <strong>دفاتر محاسبية متطابقة:</strong> لا فروقات غامضة بين الكشوفات البنكية وسجلات المنشأة.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>جاهزية تامة للزكاة والضريبة:</strong> ملفات منظمة تمنع الغرامات وتسهل تقديم إقرار الـ VAT.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>وضوح مالي شهري:</strong> ملخص دوري لأداء الإيرادات والمصروفات لاتخاذ قرارات تجارية سليمة.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>توفير الوقت والتكلفة:</strong> تفرغ لتطوير أعمالك ومبيعاتك ودع الأرقام في أيدٍ خبيرة.
              </div>
            </div>
          </div>

          {/* 5. كيف نعمل */}
          <div className="mb-8">
            <h2 className="text-base md:text-lg font-bold text-text-primary mb-4">
              كيف نعمل؟ (3 خطوات بسيطة ومباشرة)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs md:text-sm">
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">1</div>
                <h3 className="font-bold text-text-primary mb-1">فهم الواقع وحصر المستندات</h3>
                <p className="text-text-secondary leading-relaxed">جلسة مراجعة سريعة لمعرفة النظام المستخدم، حجم المعاملات، والمستندات المتراكمة.</p>
              </div>
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">2</div>
                <h3 className="font-bold text-text-primary mb-1">التنظيم والترحيل والمطابقة</h3>
                <p className="text-text-secondary leading-relaxed">إدخال القيود على النظام، مطابقة حسابات البنوك، وتسوية حسابات العملاء والموردين.</p>
              </div>
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">3</div>
                <h3 className="font-bold text-text-primary mb-1">الإقفال الدوري والتقارير</h3>
                <p className="text-text-secondary leading-relaxed">إصدار ميزان المراجعة وملخص الأداء، وتقديم الدعم المالي المستمر لمنشأتك.</p>
              </div>
            </div>
          </div>

          {/* 6. الأنظمة التي يمكن العمل عليها عند الحاجة */}
          <SupportedSystemsSection 
            subtitle="نعمل مباشرة على برنامجك المحاسبي السحابي المعتمد (مثل قيود، دفترة، Odoo، Zoho Books، QuickBooks، ERPNext) دون الحاجة لتغيير نظامك الحالي."
          />

          {/* نموذج تطبيقي / استرشادي */}
          <PdfLeadMagnet 
            title="" 
            subtitle="" 
            reportName="ميزان المراجعة (نموذج استرشادي متوازن)" 
            whatsappUrl={WHATSAPP_URL}
            documentContent={
              <div className="flex flex-col h-full bg-white text-gray-800 text-[10px] md:text-xs font-sans">
                <div className="border-b-2 border-gray-800 pb-3 mb-4 flex justify-between items-end">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 font-arabic mb-1">ميزان المراجعة (Trial Balance)</h2>
                    <p className="text-gray-500 font-arabic">الفترة المالية المنتهية - نموذج عملي</p>
                  </div>
                  <div className="text-left text-[9px] md:text-[10px] text-gray-400">
                    <p>Status: Reconciled</p>
                    <p>Standard: SOCPA / IFRS</p>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="overflow-x-auto">
                    <table className="w-full text-right mb-6 border-collapse min-w-[400px]">
                      <thead>
                        <tr className="bg-gray-100 border-y border-gray-300">
                          <th className="py-2 px-2 md:px-3 font-semibold text-gray-700 w-16">رقم الحساب</th>
                          <th className="py-2 px-2 md:px-3 font-semibold text-gray-700">اسم الحساب</th>
                          <th className="py-2 px-2 md:px-3 font-semibold text-gray-700 w-24 text-left">مدين (SAR)</th>
                          <th className="py-2 px-2 md:px-3 font-semibold text-gray-700 w-24 text-left">دائن (SAR)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 font-arabic">
                        <tr>
                          <td className="py-2 px-2 md:px-3 text-gray-500 font-mono">1101</td>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">النقدية وما في حكمها</td>
                          <td className="py-2 px-2 md:px-3 text-left">325,500.00</td>
                          <td className="py-2 px-2 md:px-3 text-left">-</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 md:px-3 text-gray-500 font-mono">1201</td>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">العملاء (الذمم المدينة)</td>
                          <td className="py-2 px-2 md:px-3 text-left">142,000.00</td>
                          <td className="py-2 px-2 md:px-3 text-left">-</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 md:px-3 text-gray-500 font-mono">2101</td>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">الموردون (الذمم الدائنة)</td>
                          <td className="py-2 px-2 md:px-3 text-left">-</td>
                          <td className="py-2 px-2 md:px-3 text-left">89,200.00</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 md:px-3 text-gray-500 font-mono">3101</td>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">حقوق الملكية ورأس المال</td>
                          <td className="py-2 px-2 md:px-3 text-left">-</td>
                          <td className="py-2 px-2 md:px-3 text-left">500,000.00</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 md:px-3 text-gray-500 font-mono">4101</td>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">إيرادات المبيعات</td>
                          <td className="py-2 px-2 md:px-3 text-left">-</td>
                          <td className="py-2 px-2 md:px-3 text-left">450,000.00</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 md:px-3 text-gray-500 font-mono">5101</td>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">تكلفة الإيرادات والمشتريات</td>
                          <td className="py-2 px-2 md:px-3 text-left">270,000.00</td>
                          <td className="py-2 px-2 md:px-3 text-left">-</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 md:px-3 text-gray-500 font-mono">5201</td>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">المصروفات العمومية والتشغيلية</td>
                          <td className="py-2 px-2 md:px-3 text-left">301,700.00</td>
                          <td className="py-2 px-2 md:px-3 text-left">-</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="bg-gray-50 border-t-2 border-gray-800 font-bold">
                          <td colSpan={2} className="py-2 px-2 md:px-3 text-gray-900">الإجمالي المطابق</td>
                          <td className="py-2 px-2 md:px-3 text-left text-green-700">1,039,200.00</td>
                          <td className="py-2 px-2 md:px-3 text-left text-green-700">1,039,200.00</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-100 p-3 rounded text-[10px] md:text-[11px] text-blue-800 font-medium">
                    <p className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
                      الحسابات متطابقة مع كشف الحساب البنكي. كافة القيود مسجلة ومؤيدة بالمستندات.
                    </p>
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
              هل تريد ترتيب حسابات منشأتك والتخلص من عبء الفواتير المتراكمة؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              ناقش وضع حساباتك الحالية مباشرة لتحديد خطة العمل المناسبة لنشاطك، وتأكد من سلامة أرقامك المالية.
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
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/bookkeeping-importance-organized-accounting" className="text-primary font-bold hover:underline">مسك الدفاتر المنظم كأساس للإدارة المالية</a>
            </span>
            <a href="/blog/bookkeeping-importance-organized-accounting" className="text-primary font-semibold hover:underline shrink-0">
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
                href="/services/financial-statements"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد القوائم المالية المعتمدة</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
              <a
                href="/services/zakat-tax"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>خدمات الزكاة والضريبة</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
              <a
                href="/services/management-reports"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد التقارير الإدارية</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
