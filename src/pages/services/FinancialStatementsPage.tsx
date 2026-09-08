import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle, CheckCircle2, AlertTriangle, Users, Briefcase, FileCheck, ArrowRight } from 'lucide-react';
import PdfLeadMagnet from '../../components/PdfLeadMagnet';
import ServiceFaqAccordion, { FAQItem } from '../../components/ServiceFaqAccordion';
import SupportedSystemsSection from '../../components/SupportedSystemsSection';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة احتياج منشأتي في مجال إعداد ومراجعة القوائم المالية.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function FinancialStatementsPage() {
  const name = "إعداد القوائم المالية";
  const slug = "financial-statements";
  const metaTitle = "إعداد القوائم المالية المعتمدة في السعودية وفق SOCPA | القائد";
  const metaDesc = "قوائم مالية مهنية متكاملة (مركز مالي، دخل، تدفقات نقدية) وفق معايير IFRS المعتمدة من SOCPA. تعزز جاهزية منشأتك للبنوك والشركاء والمراجع القانوني.";
  const url = "https://alqaeed-sa.pages.dev/services/" + slug;

  const faqs: FAQItem[] = [
    {
      question: "هل القوائم المالية التي تعدونها مطابقة للمعايير المحاسبية المعتمدة في السعودية؟",
      answer: "نعم، نعد القوائم المالية وفق المعيار الدولي للتقرير المالي للمنشآت الصغيرة والمتوسطة (IFRS for SMEs) المعتمد من الهيئة السعودية للمراجعين والمحاسبين (SOCPA)، مع كامل الإيضاحات المتممة."
    },
    {
      question: "ما الفرق بين مسك الدفاتر الشهري وإعداد القوائم المالية الختامية؟",
      answer: "مسك الدفاتر هو التسجيل اليومي والشهري للفواتير والمدفوعات والمقبوضات. أما القوائم المالية الختامية فهي النتيجة النهائية والتحويل الرسمي لتلك السجلات إلى وثائق معتمدة تظهر حجم أصولك، ديونك، صافي ربحك الحقيقي، وتدفقاتك النقدية بعد إجراء كافة التسويات الجردية والمخصصات."
    },
    {
      question: "هل تجهزون الملف لرفعه على منصة 'قوائم' (Qawaem) التابعة لوزارة التجارة؟",
      answer: "نعم، نقوم بتنظيم وإعداد كافة جداول القوائم والإيضاحات بصيغة معيارية لتكون جاهزة للمراجع القانوني والاعتماد الرسمي ورفعها بسلاسة على منصة قوائم."
    },
    {
      question: "كم من الوقت يستغرق إعداد القوائم المالية لمنشأتي؟",
      answer: "إذا كانت السجلات المحاسبية وميزان المراجعة منظماً، يستغرق إعداد القوائم والتسويات عادة من 3 إلى 7 أيام عمل. وإن كانت هناك قيود متراكمة أو حسابات غير مطابقة، نحدد خطة زمنية لتصحيحها أولاً ثم إقفال القوائم."
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
            إعداد القوائم المالية المعتمدة
          </h1>
          <p className="text-sm md:text-base text-text-secondary mb-6 leading-relaxed">
            وثائق مالية رسمية ودقيقة تعكس الأداء المالي الحقيقي لمنشأتك وتفتح لك أبواب التمويل البنكي وثقة الشركاء والمستثمرين.
          </p>
          <div className="w-16 h-1 bg-primary mb-8 rounded-full"></div>

          {/* 1. المشكلة التي يحلها الحل */}
          <div className="mb-8 p-5 sm:p-6 bg-amber-50/70 border border-amber-200/80 rounded-2xl">
            <div className="flex items-center gap-2 mb-3 text-amber-900">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold">
                المشكلة: غياب القوائم الموثقة يعطل التمويل ويثير خلافات الشركاء
              </h2>
            </div>
            <p className="text-xs md:text-sm text-amber-950 leading-relaxed mb-3">
              كثير من الشركات تعمل لسنوات بنجاح، لكن عندما يطلب البنك أو المستثمر أو الشركاء قوائم مالية معتمدة تظهر الأزمات التالية:
            </p>
            <ul className="space-y-1.5 text-xs md:text-sm text-amber-900 list-disc list-inside pr-1">
              <li>رفض طلبات التمويل البنكي أو برامج الدعم (مثل كفالة) لعدم وجود ميزانيات مدققة ومطابقة للمعايير.</li>
              <li>صعوبة تحديد صافي الأرباح القابلة للتوزيع بين الشركاء بدقة مما يخلق خلافات وشكوكاً إدارية.</li>
              <li>غياب التسويات الجردية (مثل إهلاك الأصول والمخصصات) مما يجعل المركز المالي للمنشأة مضللاً ومبالغاً فيه أو منقوصاً.</li>
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
              تخدم هذه الوثائق المالية كلاً من:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>الشركات والمؤسسات التي تطلب تسهيلات بنكية:</strong> لتقديم ملف مالي متكامل يلبي معايير إدارات الائتمان.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>الشركاء ومجالس الإدارة:</strong> لقياس العائد على الاستثمار واعتماد توزيعات الأرباح السنوية بثقة.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>المنشآت الملزمة برفع القوائم:</strong> للرفع السنوي عبر منصة قوائم (Qawaem) ولأغراض المحاسب القانوني.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>المنشآت المستعدة لجولات استثمارية:</strong> لعرض الموقف المالي بدقة أمام المستثمرين والصناديق.</span>
              </div>
            </div>
          </div>

          {/* 3. ماذا نقدم */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold text-text-primary">
                ماذا نقدم في إعداد القوائم المالية؟
              </h2>
            </div>
            <p className="text-xs md:text-sm text-text-secondary mb-4 leading-relaxed">
              إعداد مهني شامل للقوائم الأربع الأساسية مع الإيضاحات وفق معايير المحاسبة المعتمدة (IFRS / SOCPA):
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-text-secondary pr-2">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>قائمة المركز المالي (الميزانية العمومية):</strong> توضيح الأصول المتداولة وغير المتداولة، الالتزامات، وحقوق الملكية.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>قائمة الدخل الشامل (الأرباح والخسائر):</strong> بيان إجمالي الإيرادات وتكلفة المبيعات والمصروفات وصافي الربح التشغيلي والنهائي.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>قائمة التدفقات النقدية:</strong> تحليل السيولة الداخلة والخارجة من الأنشطة التشغيلية والاستثمارية والتمويلية.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>قائمة التغيرات في حقوق الملكية والإيضاحات:</strong> توثيق حركة رأس المال والأرباح المبقاة والسياسات المحاسبية المتبعة.</span>
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
                <strong>حزمة قوائم مالية رسمية:</strong> جاهزة للمحاسب القانوني وللرفع على منصة قوائم.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>جاهزية تمويلية عالية:</strong> مستندات تقنع البنوك وجهات التمويل والمستثمرين بقوة مركزك المالي.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>وضوح أرباح الشركاء:</strong> تقرير يفصل الأرباح الفعلية القابلة للتوزيع بوضوح رياضي ومحاسبي قاطع.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>أمان نظامي ومحاسبي:</strong> تطبيق كامل لمعايير SOCPA و IFRS يحميك من أي ملاحظات مهنية.
              </div>
            </div>
          </div>

          {/* 5. كيف نعمل */}
          <div className="mb-8">
            <h2 className="text-base md:text-lg font-bold text-text-primary mb-4">
              كيف نعمل؟ (3 خطوات لإعداد القوائم المالية)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs md:text-sm">
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">1</div>
                <h3 className="font-bold text-text-primary mb-1">تدقيق ميزان المراجعة والتسويات</h3>
                <p className="text-text-secondary leading-relaxed">تنفيذ قيود التسوية الجردية لمخصصات الديون، إهلاك الأصول، وتقييم بضاعة آخر المدة.</p>
              </div>
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">2</div>
                <h3 className="font-bold text-text-primary mb-1">صياغة القوائم والإيضاحات</h3>
                <p className="text-text-secondary leading-relaxed">بناء القوائم الأربع وكتابة السياسات المحاسبية والإيضاحات المتممة بدقة بالغة.</p>
              </div>
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">3</div>
                <h3 className="font-bold text-text-primary mb-1">المراجعة الختامية والاعتماد</h3>
                <p className="text-text-secondary leading-relaxed">مناقشة النتائج مع الإدارة وتجهيز النسخة للمراجع القانوني والاعتماد الرسمي.</p>
              </div>
            </div>
          </div>

          {/* 6. الأنظمة التي يمكن العمل عليها عند الحاجة */}
          <SupportedSystemsSection 
            subtitle="نستخرج موازين المراجعة وسجلات الأستاذ العام مباشرة من برنامجك المحاسبي (مثل قيود، دفترة، Odoo، Zoho Books، QuickBooks، ERPNext) لإعداد القوائم الختامية."
          />

          {/* نموذج قائمة دخل ومركز مالي استرشادي */}
          <PdfLeadMagnet 
            title="" 
            subtitle="" 
            reportName="قائمة المركز المالي والدخل (نموذج معتمد)" 
            whatsappUrl={WHATSAPP_URL}
            documentContent={
              <div className="flex flex-col h-full bg-white text-gray-800 text-[10px] md:text-xs font-sans">
                <div className="border-b-2 border-gray-900 pb-3 mb-4 flex justify-between items-end">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 font-arabic mb-1">قائمة المركز المالي (Balance Sheet)</h2>
                    <p className="text-gray-500 font-arabic">وفق معايير IFRS المعتمدة من SOCPA</p>
                  </div>
                  <div className="text-left text-[9px] md:text-[10px] text-gray-400">
                    <p>Currency: SAR</p>
                    <p>Audit Status: Ready</p>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="overflow-x-auto">
                    <table className="w-full text-right mb-6 border-collapse min-w-[400px]">
                      <thead>
                        <tr className="bg-gray-100 border-y border-gray-300">
                          <th className="py-2 px-2 md:px-3 font-semibold text-gray-700">البند المالي</th>
                          <th className="py-2 px-2 md:px-3 font-semibold text-gray-700 text-left">السنة الحالية (SAR)</th>
                          <th className="py-2 px-2 md:px-3 font-semibold text-gray-700 text-left">السنة السابقة (SAR)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 font-arabic">
                        <tr className="bg-gray-50/50 font-bold">
                          <td colSpan={3} className="py-1 px-2 text-primary">الأصول غير المتداولة (الممتلكات والمعدات)</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 px-2 text-gray-700 pr-4">الأصول الثابتة بالصافي بعد الإهلاك</td>
                          <td className="py-1.5 px-2 text-left font-mono">420,000.00</td>
                          <td className="py-1.5 px-2 text-left font-mono">380,000.00</td>
                        </tr>
                        <tr className="bg-gray-50/50 font-bold">
                          <td colSpan={3} className="py-1 px-2 text-primary">الأصول المتداولة</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 px-2 text-gray-700 pr-4">المخزون والعملاء والنقدية وما في حكمها</td>
                          <td className="py-1.5 px-2 text-left font-mono">619,200.00</td>
                          <td className="py-1.5 px-2 text-left font-mono">510,000.00</td>
                        </tr>
                        <tr className="bg-primary/5 font-bold border-t border-primary/20">
                          <td className="py-2 px-2 text-primary">إجمالي الأصول</td>
                          <td className="py-2 px-2 text-left font-mono text-primary">1,039,200.00</td>
                          <td className="py-2 px-2 text-left font-mono text-primary">890,000.00</td>
                        </tr>
                        <tr className="bg-gray-50/50 font-bold">
                          <td colSpan={3} className="py-1 px-2 text-secondary">الالتزامات وحقوق الملكية</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 px-2 text-gray-700 pr-4">الالتزامات المتداولة (الموردون والمصروفات المستحقة)</td>
                          <td className="py-1.5 px-2 text-left font-mono">239,200.00</td>
                          <td className="py-1.5 px-2 text-left font-mono">210,000.00</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 px-2 text-gray-700 pr-4">حقوق الملكية (رأس المال + الأرباح المبقاة)</td>
                          <td className="py-1.5 px-2 text-left font-mono">800,000.00</td>
                          <td className="py-1.5 px-2 text-left font-mono">680,000.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="bg-gray-100 border-t-2 border-gray-900 font-bold">
                          <td className="py-2 px-2 text-gray-900">إجمالي الالتزامات وحقوق الملكية (المطابقة)</td>
                          <td className="py-2 px-2 text-left font-mono text-green-700 text-xs">1,039,200.00</td>
                          <td className="py-2 px-2 text-left font-mono text-green-700 text-xs">890,000.00</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded text-[10px] md:text-[11px] text-blue-900 font-medium">
                    <p className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>
                      تم تطبيق كافة التسويات المحاسبية والإيضاحات المتممة، والميزانية متوازنة تماماً.
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
              هل تحتاج إلى إعداد قوائم مالية معتمدة لتقديمها للبنك أو للشركاء أو للمراجع؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              ناقش احتياج منشأتك واضمن الحصول على قوائم موثوقة ومطابقة للمعايير المحاسبية.
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
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/reading-financial-statements-business-decisions" className="text-primary font-bold hover:underline">كيف تقرأ القوائم المالية وتتخذ قرارات تجارية ذكية</a>
            </span>
            <a href="/blog/reading-financial-statements-business-decisions" className="text-primary font-semibold hover:underline shrink-0">
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
                href="/services/financial-analysis"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>التحليل المالي وهوامش الربحية</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
              <a
                href="/services/bookkeeping"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>تنظيم الحسابات ومسك الدفاتر</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
              <a
                href="/services/zakat-tax"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>خدمات الزكاة والضريبة</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
