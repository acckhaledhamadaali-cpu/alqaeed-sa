const fs = require('fs');
const path = require('path');

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = `السلام عليكم
أرغب في حجز استشارة لبحث سبل تطوير الأداء المالي لمنشأتي
اسم حضرتك الكريم  /
اسم المنشأة / نوع النشاط / عدد الفروع / هل يمكن تحديد موعد مناسب للبدء`;
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const services = [
  {
    id: "bookkeeping",
    slug: "bookkeeping",
    name: "تنظيم الحسابات ومسك الدفاتر",
    metaTitle: "تنظيم الحسابات ومسك الدفاتر | القائد للإدارة المالية",
    metaDesc: "خدمات تنظيم الحسابات ومسك الدفاتر الاحترافية للمنشآت. نضمن دقة السجلات المالية وتوافقها مع المعايير لتعزيز نمو أعمالك واتخاذ قرارات صائبة.",
    intro: "تعتبر السجلات المالية الدقيقة والمنظمة الأساس المتين لأي منشأة ناجحة. خدمة تنظيم الحسابات ومسك الدفاتر لدينا تضمن لك تسجيل كافة العمليات المالية بدقة متناهية وفقاً لأحدث المعايير المحاسبية.",
    whyNeed: "تحتاج المنشآت إلى مسار واضح وموثق لجميع حركاتها المالية لتجنب العشوائية، وتفادي الأخطاء التي قد تؤدي إلى غرامات مالية أو خسائر، ولتسهيل عملية الرقابة المالية واتخاذ القرارات.",
    whatWeOffer: [
      "تسجيل وتوثيق كافة القيود المحاسبية اليومية بدقة.",
      "تنظيم وأرشفة الفواتير والمستندات المالية.",
      "تسويات البنوك والعهد وحسابات العملاء والموردين.",
      "تصميم شجرة حسابات تتناسب مع طبيعة ونشاط المنشأة."
    ],
    benefits: [
      "وضوح تام للموقف المالي اليومي للمنشأة.",
      "تقليل الأخطاء البشرية والمالية.",
      "توفير الوقت والجهد على ملاك الأعمال للتركيز على التشغيل.",
      "جاهزية السجلات المالية لأي فحص ضريبي أو تدقيق خارجي."
    ]
  },
  {
    id: "zakat-tax",
    slug: "zakat-tax",
    name: "الزكاة والضريبة",
    metaTitle: "خدمات الزكاة والضريبة | القائد للإدارة المالية",
    metaDesc: "إدارة متكاملة للإقرارات الزكوية والضريبية. نحميك من الغرامات ونضمن التزام منشأتك التام بأنظمة هيئة الزكاة والضريبة والجمارك بكل دقة واحترافية.",
    intro: "الامتثال للأنظمة الزكوية والضريبية يعد من أهم أولويات المنشآت في المملكة. نقدم خدمة متكاملة لضمان التزام منشأتك بمتطلبات هيئة الزكاة والضريبة والجمارك وتفادي أي غرامات.",
    whyNeed: "تتغير التشريعات الضريبية باستمرار، والخطأ في الإقرارات قد يعرض المنشأة لغرامات مالية كبيرة. أنت بحاجة إلى خبير يضمن صحة التوجيه الضريبي وسلامة موقفك النظامي.",
    whatWeOffer: [
      "إعداد ومراجعة الإقرارات الضريبية (ضريبة القيمة المضافة).",
      "تقديم الاستشارات الضريبية والزكوية المستمرة.",
      "تجهيز الإقرارات الزكوية السنوية ومتابعة الربط الزكوي.",
      "التأكد من التوافق التام مع متطلبات الفوترة الإلكترونية."
    ],
    benefits: [
      "تجنب الغرامات المالية والمخالفات النظامية.",
      "الاستفادة المثلى من الأنظمة الضريبية والزكوية المتاحة.",
      "راحة البال والثقة التامة في صحة الإقرارات المرفوعة.",
      "دعم احترافي في حال وجود أي استفسارات أو فحص من الهيئة."
    ]
  },
  {
    id: "financial-statements",
    slug: "financial-statements",
    name: "إعداد القوائم المالية",
    metaTitle: "إعداد القوائم المالية للمنشآت | القائد للإدارة المالية",
    metaDesc: "نقدم خدمة إعداد القوائم المالية بدقة وفق المعايير المعتمدة. احصل على صورة واضحة لمركزك المالي ونتائج أعمالك لدعم استثماراتك ونموك.",
    intro: "القوائم المالية هي المرآة التي تعكس حقيقة أداء منشأتك المالي. نقدم خدمة إعداد القوائم المالية باحترافية عالية لتوفر لك ولشركائك رؤية شفافة ودقيقة لنتائج الأعمال.",
    whyNeed: "تحتاج المنشأة للقوائم المالية لمعرفة ما لها وما عليها، ولتقديمها للجهات الحكومية، والبنوك عند طلب التمويل، وللمستثمرين، ولتقييم الأداء العام بنهاية كل فترة مالية.",
    whatWeOffer: [
      "إعداد قائمة المركز المالي (الميزانية العمومية).",
      "إعداد قائمة الدخل الشامل (حساب الأرباح والخسائر).",
      "إعداد قائمة التدفقات النقدية وقائمة التغيرات في حقوق الملكية.",
      "إعداد الإيضاحات المتممة للقوائم المالية وفق المعايير (IFRS)."
    ],
    benefits: [
      "فهم حقيقي ودقيق للمركز المالي وصافي الأرباح.",
      "جاهزية البيانات لتقديمها للبنوك وجهات التمويل.",
      "تعزيز الثقة مع المستثمرين والشركاء.",
      "تلبية المتطلبات النظامية بكل سهولة واحترافية."
    ]
  },
  {
    id: "financial-analysis",
    slug: "financial-analysis",
    name: "التحليل المالي",
    metaTitle: "خدمات التحليل المالي | القائد للإدارة المالية",
    metaDesc: "تحويل الأرقام إلى قرارات استراتيجية عبر خدمة التحليل المالي. اكتشف نقاط القوة والضعف في منشأتك وحسّن ربحيتك بأسس علمية دقيقة.",
    intro: "الأرقام المجردة لا تكفي لاتخاذ القرارات. خدمة التحليل المالي تعمل على قراءة ما وراء الأرقام لتحويل البيانات إلى استراتيجيات واضحة تعزز من كفاءة وربحية المنشأة.",
    whyNeed: "لمعرفة أسباب التراجع في الأرباح أو اكتشاف فرص النمو المخفية، تحتاج إلى تحليل مالي دقيق يقيس مؤشرات الأداء، والسيولة، والربحية، والكفاءة التشغيلية لمنشأتك.",
    whatWeOffer: [
      "تحليل المؤشرات المالية (السيولة، الربحية، المديونية).",
      "تحليل اتجاهات الإيرادات والمصروفات على مدار الفترات.",
      "مقارنة الأداء المالي مع معايير الصناعة والمنافسين.",
      "تقديم توصيات عملية وحلول تصحيحية مبنية على النتائج."
    ],
    benefits: [
      "اكتشاف الهدر المالي وفرص تقليل التكاليف.",
      "تحسين كفاءة استغلال أصول وموارد المنشأة.",
      "دعم الإدارة العليا في اتخاذ قرارات استراتيجية مبنية على أسس علمية.",
      "تعظيم الربحية وتحقيق الاستقرار المالي المستدام."
    ]
  },
  {
    id: "management-reports",
    slug: "management-reports",
    name: "التقارير الإدارية",
    metaTitle: "إعداد التقارير الإدارية | القائد للإدارة المالية",
    metaDesc: "احصل على تقارير إدارية دورية مخصصة تضعك في قلب الحدث. نساعد الإدارة العليا على متابعة أداء المنشأة واتخاذ القرارات السريعة بثقة تامة.",
    intro: "التوجيه السليم للمنشأة يتطلب معلومات حديثة ودقيقة. نصمم ونعد التقارير الإدارية الدورية التي تزود الإدارة العليا بنظرة شاملة ومبسطة عن سير العمل والأداء המالي.",
    whyNeed: "تتطلب الإدارة الناجحة متابعة دورية ومستمرة. التقارير السنوية غير كافية للتدخل السريع، لذا فإن التقارير الإدارية الدورية (شهرية أو ربع سنوية) تعتبر البوصلة التي توجه دفة العمل.",
    whatWeOffer: [
      "تصميم لوحات قياس الأداء (Dashboards) المالية المخصصة.",
      "إعداد تقارير الأداء المالي والتشغيلي الشهرية.",
      "تحليل انحرافات الأداء المالي وتقديم تفسيرات واضحة.",
      "تقارير مراكز التكلفة وربحية الفروع أو المنتجات."
    ],
    benefits: [
      "سرعة اكتشاف المشكلات ومعالجتها في وقت مبكر.",
      "توفير معلومات دقيقة تدعم القرارات التشغيلية السريعة.",
      "متابعة مستمرة لتحقيق الأهداف الاستراتيجية.",
      "تحسين مستوى الشفافية والرقابة الداخلية في المنشأة."
    ]
  },
  {
    id: "budgeting",
    slug: "budgeting",
    name: "إعداد الموازنات",
    metaTitle: "إعداد الموازنات التقديرية للمنشآت | القائد للإدارة المالية",
    metaDesc: "خطط لمستقبل منشأتك باحترافية عبر خدمة إعداد الموازنات. نساعدك على وضع أهداف مالية واضحة ومراقبة الأداء لضمان تحقيق رؤيتك بنجاح.",
    intro: "النجاح المالي لا يحدث صدفة، بل بالتخطيط السليم. خدمة إعداد الموازنات التقديرية تساعدك على رسم مسار مالي واضح لمنشأتك وتحديد الأهداف المستقبلية بدقة.",
    whyNeed: "العمل بدون موازنة تقديرية يعني العمل بلا أهداف مالية محددة. الموازنات تعتبر الأداة الأقوى لتخطيط الإيرادات، وضبط المصروفات، وقياس وتقييم أداء الإدارة.",
    whatWeOffer: [
      "إعداد الموازنات التقديرية التشغيلية (إيرادات ومصروفات).",
      "إعداد الموازنات الرأسمالية والمشاريع الجديدة.",
      "المتابعة الدورية ومقارنة الأداء الفعلي مع الموازنة.",
      "تحليل أسباب الانحرافات واقتراح الخطط التصحيحية."
    ],
    benefits: [
      "ضبط المصروفات وتجنب الإنفاق العشوائي.",
      "تحديد أهداف بيعية وتشغيلية واضحة لفريق العمل.",
      "أداة فعالة للرقابة وتقييم أداء الأقسام المختلفة.",
      "القدرة على توقع وتخطيط الاحتياجات النقدية المستقبلية."
    ]
  },
  {
    id: "cash-flow",
    slug: "cash-flow",
    name: "إدارة التدفقات النقدية",
    metaTitle: "إدارة التدفقات النقدية | القائد للإدارة المالية",
    metaDesc: "خدمة إدارة التدفقات النقدية لضمان سيولة منشأتك. نخطط وندير حركتك النقدية لتجنب الأزمات المالية وتلبية التزاماتك في الوقت المناسب.",
    intro: "النقد هو عصب الحياة لأي نشاط تجاري. نركز في خدمة إدارة التدفقات النقدية على ضمان توفر السيولة اللازمة لاستمرار أعمالك وتفادي أي أزمات خانقة تعرقل سير العمل.",
    whyNeed: "الشركات قد تحقق أرباحاً دفترية ولكنها تفشل بسبب نقص السيولة وعجزها عن سداد الرواتب أو الموردين. إدارة التدفق النقدي تحميك من هذه المخاطر بشكل استباقي.",
    whatWeOffer: [
      "إعداد توقعات التدفقات النقدية قصيرة وطويلة الأجل.",
      "تحليل دورة التحول النقدي (مخزون، عملاء، موردين).",
      "إدارة حسابات الذمم المدينة والدائنة بشكل فعال.",
      "اقتراح استراتيجيات لتحسين تحصيل النقدية وجدولة المدفوعات."
    ],
    benefits: [
      "تجنب المفاجآت المالية وعجز السيولة.",
      "الوفاء بالالتزامات المالية تجاه الموظفين والموردين في وقتها.",
      "القدرة على تمويل النمو والخطط التوسعية بثقة.",
      "تحسين العلاقة والثقة مع الموردين وجهات التمويل."
    ]
  },
  {
    id: "virtual-cfo",
    slug: "virtual-cfo",
    name: "المدير المالي عن بعد (Virtual CFO)",
    metaTitle: "المدير المالي عن بعد (Virtual CFO) | القائد للإدارة المالية",
    metaDesc: "احصل على خبرات مدير مالي محترف بتكلفة مرنة. خدمة المدير المالي عن بعد تدعم قراراتك الاستراتيجية وتقود منشأتك نحو النجاح المالي المستدام.",
    intro: "لا تحتاج المنشآت النامية بالضرورة لتوظيف مدير مالي بدوام كامل وتكلفة عالية. خدمة المدير المالي عن بعد (Virtual CFO) تمنحك خبرات القيادة المالية الاحترافية بمرونة وتكلفة تتناسب مع حجم عملك.",
    whyNeed: "تحتاج الشركات لقيادة مالية قادرة على رسم الاستراتيجيات، وبناء الأنظمة، والتفاوض مع البنوك، وتوجيه مسار النمو، وهو ما لا يوفره المحاسب العادي.",
    whatWeOffer: [
      "التخطيط المالي الاستراتيجي ووضع السياسات المالية.",
      "الإشراف الكامل على الفريق المحاسبي وتوجيه عمله.",
      "تمثيل المنشأة مالياً أمام البنوك والجهات الخارجية.",
      "تقديم الاستشارات المالية الفورية والمباشرة للإدارة العليا."
    ],
    benefits: [
      "الوصول لخبرات مالية متقدمة بتكلفة مرنة واقتصادية.",
      "رفع مستوى الاحترافية في اتخاذ القرارات الاستراتيجية.",
      "تطوير شامل للإدارة المالية وتحسين جودة مخرجاتها.",
      "شريك استراتيجي يساهم في تحقيق رؤية وأهداف المنشأة."
    ]
  }
];

fs.mkdirSync(path.join(__dirname, 'src/pages/services'), { recursive: true });

const templateCode = `
import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';

interface ServicePageProps {
  name: string;
  slug: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  whyNeed: string;
  whatWeOffer: string[];
  benefits: string[];
}

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = \`السلام عليكم
أرغب في حجز استشارة لبحث سبل تطوير الأداء المالي لمنشأتي
اسم حضرتك الكريم  /
اسم المنشأة / نوع النشاط / عدد الفروع / هل يمكن تحديد موعد مناسب للبدء\`;
const WHATSAPP_URL = \`https://wa.me/\${WHATSAPP_NUMBER}?text=\${encodeURIComponent(WHATSAPP_MESSAGE)}\`;

export default function ServicePageTemplate({
  name,
  slug,
  metaTitle,
  metaDesc,
  intro,
  whyNeed,
  whatWeOffer,
  benefits
}: ServicePageProps) {
  const url = \`https://alqaeed-sa.netlify.app/services/\${slug}\`;
  
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": \`\${url}/#webpage\`,
        "url": url,
        "name": metaTitle,
        "description": metaDesc,
        "isPartOf": {
          "@id": "https://alqaeed-sa.netlify.app/#website"
        }
      },
      {
        "@type": "Service",
        "@id": \`\${url}/#service\`,
        "name": name,
        "description": metaDesc,
        "provider": {
          "@id": "https://alqaeed-sa.netlify.app/#organization"
        },
        "areaServed": "SA"
      },
      {
        "@type": "BreadcrumbList",
        "@id": \`\${url}/#breadcrumb\`,
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
    <SectionWrapper id={\`service-\${slug}-section\`} variant="white" spacing="default">
      <Container>
        <div className="max-w-4xl mx-auto py-8 md:py-16 space-y-12 text-right">
          
          <div className="text-center space-y-4">
            <h1 className={\`\${TYPOGRAPHY.heading.h1} font-bold text-text-primary\`}>
              {name}
            </h1>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-text-secondary font-arabic leading-relaxed mt-6">
              {intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">
            <div className="bg-surface-secondary/30 p-6 md:p-8 rounded-2xl border border-border-subtle">
              <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">؟</span>
                لماذا تحتاج هذه الخدمة؟
              </h2>
              <p className="text-text-secondary leading-relaxed font-arabic">
                {whyNeed}
              </p>
            </div>

            <div className="bg-surface-secondary/30 p-6 md:p-8 rounded-2xl border border-border-subtle">
              <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">✓</span>
                لماذا تختار "القائد"؟
              </h2>
              <p className="text-text-secondary leading-relaxed font-arabic">
                أقدم التزاماً شخصياً ومهنياً بأعلى معايير الجودة والسرية. نعتمد على خبرة واسعة في السوق السعودي وأنظمته لتقديم حلول مالية دقيقة، مرنة، ومصممة خصيصاً لتناسب طبيعة عملك وتدعم استقراره ونموه.
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-12">
            <h2 className="text-2xl font-bold text-text-primary border-b border-border-subtle pb-4">
              ماذا نقدم في هذه الخدمة؟
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatWeOffer.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-text-secondary font-arabic leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 mt-12">
            <h2 className="text-2xl font-bold text-text-primary border-b border-border-subtle pb-4">
              الفوائد التي يحصل عليها العميل
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-text-secondary font-arabic leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-12 text-center">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-sm text-lg font-arabic"
            >
              اطلب الخدمة الآن عبر واتساب
            </a>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'src/pages/services/ServicePageTemplate.tsx'), templateCode.trim());

const appImports = [];
const appRoutes = [];

services.forEach(s => {
  const componentName = s.slug.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('') + 'Page';
  
  appImports.push(`import ${componentName} from './pages/services/${componentName}';`);
  
  appRoutes.push(`
  if (path === '/services/${s.slug}') {
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <${componentName} />
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }
  `.trim());

  const pageCode = `
import ServicePageTemplate from './ServicePageTemplate';

export default function ${componentName}() {
  return (
    <ServicePageTemplate
      name="${s.name}"
      slug="${s.slug}"
      metaTitle="${s.metaTitle}"
      metaDesc="${s.metaDesc}"
      intro="${s.intro}"
      whyNeed="${s.whyNeed}"
      whatWeOffer={${JSON.stringify(s.whatWeOffer, null, 2)}}
      benefits={${JSON.stringify(s.benefits, null, 2)}}
    />
  );
}
`;
  fs.writeFileSync(path.join(__dirname, `src/pages/services/${componentName}.tsx`), pageCode.trim());
});

// Update App.tsx
let appCode = fs.readFileSync(path.join(__dirname, 'src/App.tsx'), 'utf8');

// Inject imports
appCode = appCode.replace('export default function App() {', appImports.join('\n') + '\n\nexport default function App() {');

// Inject routes
const routesStr = appRoutes.join('\n\n');
appCode = appCode.replace('const path = window.location.pathname;', 'const path = window.location.pathname;\n\n' + routesStr + '\n');

fs.writeFileSync(path.join(__dirname, 'src/App.tsx'), appCode);
console.log('App.tsx updated');

// Update sitemap.xml
let sitemap = fs.readFileSync(path.join(__dirname, 'public/sitemap.xml'), 'utf8');
const sitemapUrls = services.map(s => `
  <url>
    <loc>https://alqaeed-sa.netlify.app/services/${s.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`.trim()).join('\n');

sitemap = sitemap.replace('</urlset>', sitemapUrls + '\n</urlset>');
fs.writeFileSync(path.join(__dirname, 'public/sitemap.xml'), sitemap);
console.log('sitemap.xml updated');
