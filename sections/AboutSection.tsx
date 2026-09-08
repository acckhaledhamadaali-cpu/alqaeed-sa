import { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  BarChart3, 
  FileText, 
  Receipt, 
  Scale, 
  Layers, 
  Table2, 
  ClipboardCheck, 
  ShieldCheck, 
  GraduationCap, 
  Lock, 
  CheckCircle2, 
  Building2,
  UtensilsCrossed,
  Store,
  HardHat,
  Briefcase,
  Calendar,
  Rocket
} from 'lucide-react';

interface ExpertiseDomain {
  id: string;
  title: string;
  englishTitle: string;
  icon: typeof Calculator;
  practicalApplication: string;
  tangibleDeliverable: string;
  keyFramework: string;
}

interface SectorEvidence {
  id: string;
  name: string;
  icon: typeof UtensilsCrossed;
  practicalEvidence: string;
  keyMetric: string;
}

const EXPERTISE_DOMAINS: ExpertiseDomain[] = [
  {
    id: 'financial-accounting',
    title: 'المحاسبة المالية',
    englishTitle: 'Financial Accounting',
    icon: Calculator,
    practicalApplication: 'بناء وتحديث شجرة الحسابات بدقة، ضبط وتوثيق القيود اليومية، إجراء التسويات الجردية والبنكية شهرياً، ومطابقة الأرصدة الافتتاحية والختامية.',
    tangibleDeliverable: 'دفاتر محاسبية نظامية ومنتظمة تعكس حقيقة المعاملات المالية ومطابقة للمستندات الثبوتية المؤيدة.',
    keyFramework: 'معايير المحاسبة المعتمدة (SOCPA)'
  },
  {
    id: 'financial-analysis',
    title: 'التحليل المالي',
    englishTitle: 'Financial Analysis',
    icon: TrendingUp,
    practicalApplication: 'حساب وتحليل نقطة التعادل (Break-Even)، قياس هوامش الربح الإجمالية والتشغيلية، تحليل كفاءة رأس المال العامل، ومعدلات السيولة السريعة.',
    tangibleDeliverable: 'تقرير تحليلي يكشف مواضع الهدر، ويحدد مساهمة كل منتج أو خدمة في الأرباح، ويقدم توصيات معالجة فورية.',
    keyFramework: 'النسب المالية ومؤشرات الربحية'
  },
  {
    id: 'management-reporting',
    title: 'التقارير الإدارية',
    englishTitle: 'Management Reporting',
    icon: BarChart3,
    practicalApplication: 'ترجمة الأرقام المحاسبية المعقدة إلى ملخصات تنفيذية (Executive Summaries) يفهمها المدير غير المالي، ومقارنة الأداء الفعلي بالموازنة التقديرية.',
    tangibleDeliverable: 'لوحة قياس أداء شهرية تبرز الانحرافات الإيجابية والسلبية مع توصيات محددة تدعم قرارات التسعير والإنفاق.',
    keyFramework: 'مؤشرات الأداء المالي (Financial KPIs)'
  },
  {
    id: 'financial-statements',
    title: 'إعداد القوائم المالية',
    englishTitle: 'Financial Statements Preparation',
    icon: FileText,
    practicalApplication: 'إعداد حزمة القوائم المالية الأساسية: قائمة المركز المالي، قائمة الدخل، وقائمة التدفقات النقدية وفق المعايير المعتمدة للمنشآت الصغيرة والمتوسطة.',
    tangibleDeliverable: 'قوائم مالية ربع سنوية وسنوية دقيقة وجاهزة للملاك والشركاء والمراجعين الخارجيين والجهات التمويلية.',
    keyFramework: 'معايير IFRS for SMEs وSOCPA'
  },
  {
    id: 'vat',
    title: 'ضريبة القيمة المضافة',
    englishTitle: 'VAT Compliance',
    icon: Receipt,
    practicalApplication: 'مراجعة فواتير المبيعات والمشتريات الضريبية، التأكد من استيفاء الفوترة الإلكترونية، ومطابقة ضريبة المدخلات والمخرجات مع دفاتر الحسابات.',
    tangibleDeliverable: 'مسودة إقرار ضريبي ربع سنوي أو شهري مطابقة وموثقة لتقديمها عبر منصة هيئة الزكاة والضريبة والجمارك (ZATCA).',
    keyFramework: 'لوائح ZATCA والفوترة الإلكترونية'
  },
  {
    id: 'zakat',
    title: 'الزكاة الشرعية',
    englishTitle: 'Zakat Compliance',
    icon: Scale,
    practicalApplication: 'حصر وتصنيف عناصر الوعاء الزكوي (الأموال النامية، حقوق الملكية، صافي الأصول الثابتة، والالتزامات)، وتجهيز قيود التسوية الزكوية.',
    tangibleDeliverable: 'ملف زكوي متكامل يدعم إقرار المنشأة السنوي ويسهل إصدار شهادة الزكاة دون تعليق أو فروقات فحص.',
    keyFramework: 'اللائحة التنفيذية لجباية الزكاة'
  },
  {
    id: 'erp-systems',
    title: 'أنظمة ERP المحاسبية',
    englishTitle: 'ERP Systems',
    icon: Layers,
    practicalApplication: 'العمل المحاسبي الميداني على البرامج السحابية الشائعة للـ SMEs (قيود، دفترة، Odoo، Zoho Books، ERPNext، QuickBooks) دون فرض برامج جديدة.',
    tangibleDeliverable: 'تشغيل الدورة المستندية، نقاط البيع، وإدارة الفواتير والمخازن على نظامك الحالي مباشرة.',
    keyFramework: 'الأنظمة السحابية المعتمدة في السعودية'
  },
  {
    id: 'excel-modeling',
    title: 'النمذجة المالية بـ Excel',
    englishTitle: 'Advanced Financial Excel',
    icon: Table2,
    practicalApplication: 'بناء جداول التدفقات النقدية التوقعية (Cash Flow Forecast)، محاكاة سيناريوهات التسعير (What-If Analysis)، وتصميم قوالب التكاليف المخصصة.',
    tangibleDeliverable: 'نماذج مالية متقدمة وديناميكية تمكن الإدارة من تقييم أثر القرارات التشغيلية قبل الالتزام بها.',
    keyFramework: 'النمذجة والتحليل الحساس (Sensitivity Analysis)'
  },
  {
    id: 'financial-reporting',
    title: 'التقارير المالية والرقابة الدورية',
    englishTitle: 'Financial Reporting',
    icon: ClipboardCheck,
    practicalApplication: 'إصدار موازين المراجعة التفصيلية، إعداد تقارير أعمار الذمم المدينة والدائنة، ومطابقات أرصدة العملاء والموردين بشكل دوري.',
    tangibleDeliverable: 'تقرير رقابي دوري يمنع تآكل السيولة، ويحدد الديون المتأخرة، ويضمن سلامة مركز المنشأة المالي.',
    keyFramework: 'إدارة الذمم ورأس المال العامل'
  }
];

const SECTORS_EVIDENCE: SectorEvidence[] = [
  {
    id: 'fnb',
    name: 'المطاعم والمقاهي',
    icon: UtensilsCrossed,
    practicalEvidence: 'حساب تكلفة الأغذية والمشروبات (Food Cost) المستهدفة والفعلية، مطابقة مبيعات الكاش وتطبيقات التوصيل اليومية، وتحديد هوامش أصناف القائمة.',
    keyMetric: 'ضبط Food Cost ومطابقات الكاشير وتطبيقات التوصيل'
  },
  {
    id: 'retail',
    name: 'التجزئة والمتاجر',
    icon: Store,
    practicalEvidence: 'حساب تكلفة البضاعة المباعة (COGS) بدقة، تسوية مقبوضات بوابات الدفع الإلكتروني ونقاط البيع، وتحديد الأصناف بطيئة الحركة والراكدة.',
    keyMetric: 'دوران المخزون وهوامش أصناف التجزئة'
  },
  {
    id: 'contracting',
    name: 'المقاولات والتشييد',
    icon: HardHat,
    practicalEvidence: 'محاسبة مراكز التكلفة لكل مشروع ومستخلص، وتتبع تكاليف المواد والعمالة ومقاولي الباطن، وإدارة فجوة السيولة بين الإنجاز والتحصيل.',
    keyMetric: 'تكلفة المشروع ونسب الإنجاز والمستخلصات'
  },
  {
    id: 'services',
    name: 'الشركات الخدمية',
    icon: Briefcase,
    practicalEvidence: 'تحليل ربحية عقود العملاء مقابل ساعات العمل المباشرة، متابعة إصدار الفواتير في مواعيدها التعاقدية، وتتبع أعمار الذمم المدينة للتحصيل.',
    keyMetric: 'ربحية العقود وسرعة تحصيل الفواتير'
  },
  {
    id: 'events',
    name: 'تنظيم وتجهيز الفعاليات',
    icon: Calendar,
    practicalEvidence: 'عزل تكلفة كل فعالية بمركز تكلفة مستقل، مطابقة دفعات الموردين وتجهيزات الموقع مع الدفعات المستلمة من العميل، وضبط سيولة المواسم.',
    keyMetric: 'هامش ربح الفعالية وإدارة سيولة الموردين'
  },
  {
    id: 'startups',
    name: 'المشاريع والشركات الناشئة',
    icon: Rocket,
    practicalEvidence: 'متابعة معدل حرق السيولة الشهري (Burn Rate)، وتحديد مدرج السيولة المتبقي (Cash Runway)، وإعداد تقارير مالية شفافة للمؤسسين والشركاء.',
    keyMetric: 'إدارة الـ Runway وضبط الموازنة التشغيلية'
  }
];

export default function AboutSection() {
  const [activeSectorTab, setActiveSectorTab] = useState<string>('fnb');

  return (
    <section 
      id="credibility-about-section" 
      className="border-t border-border-subtle bg-white py-14 sm:py-18 md:py-24"
      aria-labelledby="credibility-title"
      itemScope 
      itemType="https://schema.org/Person"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header - High Authority & Anti-Slop */}
        <div id="credibility-header" className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div 
            id="credibility-badge"
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-arabic font-semibold mb-3.5"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>منهجية قائمة على الأدلة والممارسة المهنية</span>
          </div>

          <h2 id="credibility-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary font-arabic mb-4 tracking-tight">
            مجالات الخبرة المحاسبية والمالية المطبقة عملياً
          </h2>
          
          <p id="credibility-subtitle" className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto">
            المصداقية لا تُبنى على الأرقام الترويجية المجردة أو الشهادات غير الموثقة؛ بل على ما نتقنه وننجزه فعلياً لمنشأتك وفق معايير المحاسبة والامتثال والأنظمة المالية في المملكة العربية السعودية.
          </p>
        </div>

        {/* 9 Core Practical Expertise Domains Grid */}
        <div 
          id="expertise-domains-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
        >
          {EXPERTISE_DOMAINS.map((domain) => {
            const Icon = domain.icon;
            return (
              <div 
                key={domain.id}
                id={`expertise-card-${domain.id}`}
                className="flex flex-col justify-between rounded-2xl border border-border bg-surface-subtle/30 p-5 sm:p-6 shadow-xs hover:border-secondary/30 hover:bg-white transition-all duration-200"
              >
                <div>
                  {/* Domain Header */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-text-primary font-arabic leading-tight">
                          {domain.title}
                        </h3>
                        <span className="text-[11px] text-text-muted font-sans block">
                          {domain.englishTitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Practical Application */}
                  <div className="mb-3.5">
                    <p className="text-[11px] font-bold text-text-primary mb-1 font-arabic flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-secondary shrink-0" />
                      <span>الممارسة والتطبيق العملي:</span>
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {domain.practicalApplication}
                    </p>
                  </div>

                  {/* Tangible Deliverable */}
                  <div className="rounded-xl bg-white border border-border-subtle p-3 mb-3">
                    <p className="text-[11px] font-bold text-secondary mb-1 font-arabic">
                      المخرج الملموس لإدارتك:
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {domain.tangibleDeliverable}
                    </p>
                  </div>
                </div>

                {/* Key Framework / Standard */}
                <div className="pt-2.5 border-t border-border-subtle/60 flex items-center justify-between text-[11px] text-text-muted">
                  <span>المرجعية المهنية:</span>
                  <span className="font-semibold text-text-primary text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded-md">
                    {domain.keyFramework}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sector-Specific Practical Evidence Section */}
        <div id="sector-evidence-container" className="mb-14 rounded-2xl border border-border bg-surface-subtle/20 p-6 sm:p-8">
          <div className="max-w-2xl mx-auto text-center mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>تطبيقات الخبرة حسب القطاعات</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-text-primary font-arabic mb-2">
              كيف نترجم المعرفة المحاسبية إلى واقع ملموس في قطاع منشأتك؟
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary">
              تطبيق عملي مثبت لكل نشاط داخل المملكة لمعالجة التحديات التشغيلية الخاصة بنموذج عملك.
            </p>
          </div>

          {/* Sector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {SECTORS_EVIDENCE.map((sector) => (
              <button
                key={sector.id}
                type="button"
                id={`sector-tab-${sector.id}`}
                onClick={() => setActiveSectorTab(sector.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-arabic font-semibold transition-all duration-150 ${
                  activeSectorTab === sector.id
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-white border border-border text-text-secondary hover:text-text-primary hover:border-secondary/40'
                }`}
              >
                <span>{sector.name}</span>
              </button>
            ))}
          </div>

          {/* Active Sector Card */}
          {(() => {
            const current = SECTORS_EVIDENCE.find(s => s.id === activeSectorTab) || SECTORS_EVIDENCE[0];
            const CurrentIcon = current.icon;
            return (
              <div 
                id="active-sector-detail-card"
                className="max-w-2xl mx-auto bg-white rounded-2xl border border-secondary/20 p-5 sm:p-6 shadow-xs"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-text-primary font-arabic">
                        التطبيق المالي في قطاع {current.name}
                      </h4>
                      <span className="text-[11px] font-medium text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full">
                        {current.keyMetric}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {current.practicalEvidence}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* 4 Strict Principles of Credibility (Zero Fluff / Zero Invented Claims) */}
        <div 
          id="credibility-principles-card"
          className="rounded-2xl border border-secondary/20 bg-secondary/[0.03] p-6 sm:p-8"
        >
          <div className="max-w-3xl mb-6">
            <h3 className="text-base sm:text-lg font-bold text-text-primary font-arabic mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <span>ركائز الحوكمة والنزاهة المهنية مع منشأتك</span>
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              لا نعتمد على شهادات عملاء مجهولة أو نسب نجاح تسويقية غير مثبتة. مصداقيتنا مبنية على أسس نظامية ومهنية واضحة تحمي عملك منذ اليوم الأول:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl border border-border-subtle p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-primary font-bold text-xs font-arabic">
                <Lock className="w-4 h-4 text-secondary" />
                <span>اتفاقية سرية ملزمة (NDA)</span>
              </div>
              <p className="text-[11px] text-text-secondary leading-relaxed">
                توقيع اتفاقية حظر إفشاء وحماية سرية البيانات قبل الاطلاع على أي مستند مالي لضمان الأمان التام.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-border-subtle p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-primary font-bold text-xs font-arabic">
                <GraduationCap className="w-4 h-4 text-secondary" />
                <span>تأهيل أكاديمي ومهني</span>
              </div>
              <p className="text-[11px] text-text-secondary leading-relaxed">
                ماجستير في إدارة الأعمال (MBA) مع ممارسة تطبيقية مستمرة في بيئة الأعمال والأنظمة السعودية.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-border-subtle p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-primary font-bold text-xs font-arabic">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>المعايير والأنظمة السعودية</span>
              </div>
              <p className="text-[11px] text-text-secondary leading-relaxed">
                التوافق الدقيق مع معايير الهيئة السعودية للمراجعين والمحاسبين (SOCPA) ولوائح الفوترة والزكاة.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-border-subtle p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-primary font-bold text-xs font-arabic">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>بياناتك بحوزتك وتحت سيطرتك</span>
              </div>
              <p className="text-[11px] text-text-secondary leading-relaxed">
                العمل بصلاحيات محاسبية محددة على برنامجك الحالي دون احتجاز للبيانات أو قيود نقل أو تكاليف خفية.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
