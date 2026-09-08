import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle, CheckCircle2, AlertTriangle, Users, Briefcase, FileCheck, ArrowRight } from 'lucide-react';
import PdfLeadMagnet from '../../components/PdfLeadMagnet';
import ServiceFaqAccordion, { FAQItem } from '../../components/ServiceFaqAccordion';
import SupportedSystemsSection from '../../components/SupportedSystemsSection';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة احتياج منشأتي في مجال الزكاة والضريبة (VAT) والفوترة الإلكترونية.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function ZakatTaxPage() {
  const name = "الزكاة والضريبة";
  const slug = "zakat-tax";
  const metaTitle = "خدمات الزكاة والضريبة وإقرارات VAT في السعودية | القائد";
  const metaDesc = "احمِ منشأتك من غرامات ZATCA. خدمات إعداد ورفع إقرارات ضريبة القيمة المضافة (VAT) وحساب الزكاة الشرعية بدقة واحترافية وفق الأنظمة واللوائح السعودية.";
  const url = "https://alqaeed-sa.pages.dev/services/" + slug;

  const faqs: FAQItem[] = [
    {
      question: "ما الفرق بين إقرار ضريبة القيمة المضافة (VAT) والإقرار الزكوي السنوي؟",
      answer: "ضريبة القيمة المضافة (VAT) هي ضريبة غير مباشرة بنسبة 15% تُحسب على توريدات المبيعات وتُخصم منها مشترياتك المؤيدة بفواتير ضريبية، وتقدم شهرياً أو ربع سنوي بحسب حجم إيراداتك. أما الزكاة فهي فريضة شرعية بنسبة 2.5% تُحسب سنوياً على الوعاء الزكوي للمنشأة وتحدد استحقاق شهادة الزكاة اللازمة لتجديد السجلات وتسيير الأعمال."
    },
    {
      question: "ماذا لو كانت هناك أخطاء أو مبالغ غير مسجلة في إقرارات سابقة؟",
      answer: "نقوم بعمل مراجعة تصحيحية للدفاتر، وتحديد الفروقات بدقة، ومن ثم تقديم إقرار تعديلي نظامي عبر منصة ZATCA لتفادي أي غرامات تفتيش مفاجئة أو احتساب تقديري عشوائي."
    },
    {
      question: "هل تساعدون في التأكد من امتثال فواتيرنا لاشتراطات الفوترة الإلكترونية؟",
      answer: "نعم، نراجع توافق صيغ الفواتير، رموز الاستجابة السريعة (QR Code)، وأرقام التسجيل الضريبي، والتأكد من مطابقة النظام المحاسبي لاشتراطات هيئة الزكاة والضريبة والجمارك (المرحلة الأولى ومرحلة الربط والتكامل)."
    },
    {
      question: "كيف نضمن الاستفادة القصوى من خصم ضريبة المدخلات (Input VAT)؟",
      answer: "ندقق كافة فواتير المشتريات والمصروفات التشغيلية للتأكد من استيفائها للشروط الضريبية النظامية واحتوائها على الرقم الضريبي للمورد، مما يوفر على منشأتك مبالغ طائلة كانت ستُهدر لعدم المطالبة بخصمها."
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
            خدمات الزكاة والضريبة (VAT & Zakat)
          </h1>
          <p className="text-sm md:text-base text-text-secondary mb-6 leading-relaxed">
            امتثال مالي ونظامي كامل يضمن سداد المستحق العادل فقط، ويحمي منشأتك من الغرامات والمخالفات المفاجئة لدى هيئة الزكاة والضريبة والجمارك (ZATCA).
          </p>
          <div className="w-16 h-1 bg-primary mb-8 rounded-full"></div>

          {/* 1. المشكلة التي يحلها الحل */}
          <div className="mb-8 p-5 sm:p-6 bg-amber-50/70 border border-amber-200/80 rounded-2xl">
            <div className="flex items-center gap-2 mb-3 text-amber-900">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold">
                المشكلة: غرامات التأخير وأخطاء الإقرارات وتوقف شهادة الزكاة
              </h2>
            </div>
            <p className="text-xs md:text-sm text-amber-950 leading-relaxed mb-3">
              التعامل العشوائي مع الالتزامات الزكوية والضريبية يضع المنشأة في مواجهة مخاطر مكلفة تشمل:
            </p>
            <ul className="space-y-1.5 text-xs md:text-sm text-amber-900 list-disc list-inside pr-1">
              <li>غرامات عدم تقديم الإقرار أو التأخر في السداد التي قد تصل إلى نسب مضاعفة من أصل الضريبة.</li>
              <li>ضياع مبالغ ضريبة المدخلات بسبب فواتير غير مطابقة أو عدم إدراجها في مواعيدها النظامية.</li>
              <li>تعثر إصدار شهادة الزكاة مما يؤدي لتجميد التعاملات البنكية، تجميد رخص العمل، وفقدان المناقصات والعقود.</li>
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
              نوفر الدعم لجميع الكيانات والمنشآت المسجلة في المملكة العربية السعودية:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>المنشآت المسجلة في ضريبة القيمة المضافة (VAT):</strong> لرفع الإقرارات الشهرية أو الربع سنوية بانتظام.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>الشركات والمؤسسات الفردية:</strong> لحساب الوعاء الزكوي السنوي وتجديد شهادة الزكاة (ZATCA).</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>الأنشطة التجارية والخدمية والمطاعم:</strong> لمراجعة فواتير نقاط البيع والفوترة الإلكترونية وتفادي مخالفات التفتيش.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>المنشآت التي تواجه فحصاً أو فروقات سابقة:</strong> لتقديم اعتراضات نظامية أو إقرارات تصحيحية مدروسة.</span>
              </div>
            </div>
          </div>

          {/* 3. ماذا نقدم */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold text-text-primary">
                ماذا نقدم في خدمات الزكاة والضريبة؟
              </h2>
            </div>
            <p className="text-xs md:text-sm text-text-secondary mb-4 leading-relaxed">
              إشراف دقيق وشامل يغطي كافة متطلبات هيئة الزكاة والضريبة والجمارك (ZATCA):
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-text-secondary pr-2">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>إعداد وتدقيق إقرارات ضريبة القيمة المضافة (VAT):</strong> مطابقة المبيعات والمشتريات واحتساب الصافي المستحق بدقة.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>إعداد ملف الزكاة الشرعية السنوي:</strong> احتساب الوعاء الزكوي وفق اللائحة التنفيذية وتحميله على البوابة.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>مراجعة وتدقيق الفوترة الإلكترونية:</strong> التأكد من سلامة القيود والبيانات الإلزامية في فواتير المنشأة.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>إدارة الفحص والرد على استفسارات ZATCA:</strong> صياغة وتجهيز المستندات المؤيدة للاعتراضات أو التوضيحات.</span>
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
                <strong>حماية كاملة من الغرامات:</strong> إقرارات مرفوعة قبل المواعيد النهائية دون تأخير.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>أقصى استرداد ضريبي نظامي:</strong> حصر كل ريال دفعته في مدخلات ومصاريف منشأتك وخصمه قانونياً.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>شهادة زكاة سارية دون تعطيل:</strong> استمرار كافة أعمالك وتجديد تراخيصك الحكومية بسلاسة.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>ملف ضريبي مؤرشف:</strong> مستندات مؤيدة جاهزة لأي استفسار أو فحص ميداني بكل ثقة.
              </div>
            </div>
          </div>

          {/* 5. كيف نعمل */}
          <div className="mb-8">
            <h2 className="text-base md:text-lg font-bold text-text-primary mb-4">
              كيف نعمل؟ (3 خطوات للالتزام الضريبي السلس)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs md:text-sm">
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">1</div>
                <h3 className="font-bold text-text-primary mb-1">جمع ومراجعة الفواتير</h3>
                <p className="text-text-secondary leading-relaxed">استخراج مبيعات ومشتريات الفترة من النظام ومطابقة الفواتير الضريبية والإشعارات.</p>
              </div>
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">2</div>
                <h3 className="font-bold text-text-primary mb-1">احتساب الضريبة وإعداد المسودة</h3>
                <p className="text-text-secondary leading-relaxed">إعداد مسودة الإقرار ومشاركتها معك للموافقة على الأرقام قبل أي رفع رسمي.</p>
              </div>
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">3</div>
                <h3 className="font-bold text-text-primary mb-1">الرفع على البوابة وإصدار السداد</h3>
                <p className="text-text-secondary leading-relaxed">رفع الإقرار على منصة ZATCA، تزويدك برقم سداد (سداد)، وأرشفة إشعار الاستلام.</p>
              </div>
            </div>
          </div>

          {/* 6. الأنظمة التي يمكن العمل عليها عند الحاجة */}
          <SupportedSystemsSection 
            subtitle="نطابق بيانات فواتيرك عبر العمل المباشر على نظامك المحاسبي (مثل قيود، دفترة، Odoo، Zoho Books، QuickBooks، ERPNext) ونربط المخرجات مع متطلبات هيئة ZATCA."
          />

          {/* نموذج إقرار ضريبي استرشادي */}
          <PdfLeadMagnet 
            title="" 
            subtitle="" 
            reportName="إقرار ضريبة القيمة المضافة (VAT Return Sample)" 
            whatsappUrl={WHATSAPP_URL}
            documentContent={
              <div className="flex flex-col h-full bg-white text-gray-800 text-[10px] md:text-xs font-sans">
                <div className="border-b-2 border-emerald-700 pb-3 mb-4 flex justify-between items-end">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 font-arabic mb-1">إقرار ضريبة القيمة المضافة (VAT)</h2>
                    <p className="text-gray-500 font-arabic">الربع المالي - نموذج استرشادي معتمد</p>
                  </div>
                  <div className="text-left text-[9px] md:text-[10px] text-gray-400">
                    <p>ZATCA Reg: Confirmed</p>
                    <p>Rate: 15% Standard</p>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="overflow-x-auto">
                    <table className="w-full text-right mb-6 border-collapse min-w-[400px]">
                      <thead>
                        <tr className="bg-gray-100 border-y border-gray-300">
                          <th className="py-2 px-2 md:px-3 font-semibold text-gray-700">البند الضريبي</th>
                          <th className="py-2 px-2 md:px-3 font-semibold text-gray-700 text-left">المبلغ الخاضع (SAR)</th>
                          <th className="py-2 px-2 md:px-3 font-semibold text-gray-700 text-left">مبلغ الضريبة (15%)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 font-arabic">
                        <tr>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">إجمالي المبيعات الخاضعة للنسبة الأساسية</td>
                          <td className="py-2 px-2 md:px-3 text-left font-mono">450,000.00</td>
                          <td className="py-2 px-2 md:px-3 text-left font-mono text-emerald-800 font-bold">67,500.00</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">إجمالي المشتريات الخاضعة للضريبة (المدخلات)</td>
                          <td className="py-2 px-2 md:px-3 text-left font-mono">220,000.00</td>
                          <td className="py-2 px-2 md:px-3 text-left font-mono text-blue-800 font-bold">33,000.00</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">المصروفات التشغيلية المؤيدة بفواتير ضريبية</td>
                          <td className="py-2 px-2 md:px-3 text-left font-mono">50,000.00</td>
                          <td className="py-2 px-2 md:px-3 text-left font-mono text-blue-800 font-bold">7,500.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="bg-emerald-50 border-t-2 border-emerald-700 font-bold">
                          <td className="py-2 px-2 md:px-3 text-emerald-950">صافي الضريبة المستحقة للسداد للهيئة</td>
                          <td className="py-2 px-2 md:px-3 text-left text-gray-600 font-normal text-[10px]">المخرجات - المدخلات</td>
                          <td className="py-2 px-2 md:px-3 text-left text-emerald-700 text-sm">27,000.00 SAR</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  
                  <div className="bg-emerald-50 border border-emerald-200 p-3 rounded text-[10px] md:text-[11px] text-emerald-900 font-medium">
                    <p className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
                      تم التحقق من كافة الفواتير وتوليد فاتورة سداد رسمية عبر بوابة ZATCA بنجاح.
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
              هل اقترب موعد إقرارك الضريبي أو تريد التأكد من سلامة موقف منشأتك مع ZATCA؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              ناقش احتياج منشأتك واضمن التقديم الدقيق وتفادي الغرامات التأخيرية.
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
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/vat-audit-preparation-saudi-arabia" className="text-primary font-bold hover:underline">كيف تستعد للفحص الضريبي وتتجنب الغرامات في السعودية</a>
            </span>
            <a href="/blog/vat-audit-preparation-saudi-arabia" className="text-primary font-semibold hover:underline shrink-0">
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
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
              <a
                href="/services/financial-statements"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد القوائم المالية المعتمدة</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
              <a
                href="/services/management-reports"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>التقارير المالية الدورية</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
