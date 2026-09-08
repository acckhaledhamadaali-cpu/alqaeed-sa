import { useState } from 'react';
import { 
  ClipboardCheck, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw, 
  MessageCircle, 
  ShieldAlert, 
  Calculator, 
  TrendingUp, 
  Briefcase, 
  FileCheck
} from 'lucide-react';

const WHATSAPP_PHONE = '966511294383';

interface AssessmentQuestion {
  id: number;
  title: string;
  subtitle?: string;
  options: {
    label: string;
    description?: string;
    value: string;
    points: {
      cleanup: number;
      reporting: number;
      cfo: number;
      compliance: number;
    };
  }[];
}

const QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    title: 'ما هو نوع أو قطاع نشاط منشأتك؟',
    subtitle: 'طبيعة النشاط تحدد الدورة المستندية ومراكز التكلفة الأنسب.',
    options: [
      { label: 'مطاعم أو مقاهي (F&B)', value: 'مطاعم ومقاهي', points: { cleanup: 1, reporting: 2, cfo: 1, compliance: 1 } },
      { label: 'تجارة تجزئة أو متاجر إلكترونية', value: 'تجزئة ومتاجر', points: { cleanup: 1, reporting: 2, cfo: 1, compliance: 1 } },
      { label: 'مقاولات أو تشييد وصيانة', value: 'مقاولات وتشييد', points: { cleanup: 2, reporting: 2, cfo: 2, compliance: 1 } },
      { label: 'خدمات، استشارات، أو تقنية', value: 'خدمات واستشارات', points: { cleanup: 1, reporting: 1, cfo: 2, compliance: 1 } },
      { label: 'تنظيم فعاليات ومناسبات', value: 'فعاليات ومناسبات', points: { cleanup: 1, reporting: 2, cfo: 1, compliance: 1 } },
      { label: 'تجارة عامة واستيراد وتوزيع', value: 'تجارة وتوزيع', points: { cleanup: 2, reporting: 2, cfo: 2, compliance: 1 } },
      { label: 'مشروع ناشئ (Startup)', value: 'مشروع ناشئ', points: { cleanup: 1, reporting: 1, cfo: 3, compliance: 1 } },
      { label: 'قطاع آخر', value: 'نشاط آخر', points: { cleanup: 1, reporting: 1, cfo: 1, compliance: 1 } },
    ]
  },
  {
    id: 2,
    title: 'ما هو حجم منشأتك الحالي؟',
    subtitle: 'يساعدنا في تقدير حجم العمليات ونطاق المتابعة الإدارية.',
    options: [
      { label: 'منشأة ناشئة أو متناهية الصغر (1 - 5 موظفين)', value: 'متناهية الصغر (1-5)', points: { cleanup: 2, reporting: 1, cfo: 0, compliance: 1 } },
      { label: 'منشأة صغيرة (6 - 25 موظفاً)', value: 'صغيرة (6-25)', points: { cleanup: 1, reporting: 2, cfo: 1, compliance: 1 } },
      { label: 'منشأة متوسطة (أكثر من 25 موظفاً أو فروع متعددة)', value: 'متوسطة (+25)', points: { cleanup: 1, reporting: 2, cfo: 3, compliance: 1 } },
    ]
  },
  {
    id: 3,
    title: 'هل تعتمد المنشأة على برنامج محاسبي إلكتروني؟',
    subtitle: 'الأنظمة السحابية المعتمدة هي حجر الأساس لأي رقابة مالية.',
    options: [
      { label: 'نعم، نستخدم برنامجاً سحابياً معتمداً (قيود، دفترة، Odoo، Zoho…)', value: 'نظام سحابي معتمد', points: { cleanup: 0, reporting: 2, cfo: 2, compliance: 1 } },
      { label: 'نعتمد على ملفات Excel أو فواتير متفرقة فقط', value: 'Excel وفواتير يدوية', points: { cleanup: 3, reporting: 0, cfo: 0, compliance: 1 } },
      { label: 'لا يوجد أي برنامج محاسبي حالياً', value: 'لا يوجد برنامج', points: { cleanup: 4, reporting: 0, cfo: 0, compliance: 2 } },
    ]
  },
  {
    id: 4,
    title: 'ما هو الوضع الفعلي لدفاتر وقيود حساباتك؟',
    subtitle: 'هل أرقامك الحالية تعكس الواقع التشغيلي بدقة؟',
    options: [
      { label: 'منظمة ومحدثة بانتظام وتُقفل التسويات شهرياً', value: 'منظمة ومحدثة', points: { cleanup: 0, reporting: 2, cfo: 3, compliance: 0 } },
      { label: 'متأخرة لشهور وتراكمت فيها الفواتير والمستندات', value: 'متأخرة وتحتاج تنظيم', points: { cleanup: 4, reporting: 0, cfo: 0, compliance: 2 } },
      { label: 'غير منظمة، ويصعب معرفة الأرصدة البنكية والالتزامات بدقة', value: 'غير منظمة', points: { cleanup: 5, reporting: 0, cfo: 0, compliance: 2 } },
    ]
  },
  {
    id: 5,
    title: 'هل تستلم تقارير مالية وتحليلية منتظمة كل شهر؟',
    subtitle: 'مثل قائمة الدخل، ميزان المراجعة، وموقف السيولة الفعلي.',
    options: [
      { label: 'نعم، نستلم تقارير شهرية واضحة وموثقة', value: 'نعم نستلم شهرياً', points: { cleanup: 0, reporting: 1, cfo: 3, compliance: 0 } },
      { label: 'بشكل غير منتظم، أو تقارير مقتضبة غير مفهومة', value: 'غير منتظمة', points: { cleanup: 1, reporting: 3, cfo: 1, compliance: 1 } },
      { label: 'لا، لا نستلم أي تقارير مالية شهرية', value: 'لا نستلم تقارير', points: { cleanup: 2, reporting: 4, cfo: 1, compliance: 1 } },
    ]
  },
  {
    id: 6,
    title: 'هل تعرف هامش الربح الحقيقي لكل منتج أو خدمة ونقطة التعادل؟',
    subtitle: 'معرفة المبيعات وحدها لا تعني بالضرورة تحقيق أرباح صافية.',
    options: [
      { label: 'نعم، أعرف هامش الربح ونقطة التعادل (Break-Even) بدقة', value: 'نعم أعرفها بدقة', points: { cleanup: 0, reporting: 1, cfo: 2, compliance: 0 } },
      { label: 'أعرف حجم المبيعات الإجمالي فقط، لكن الهامش الصافي غير واضح', value: 'الهامش الصافي غير واضح', points: { cleanup: 1, reporting: 3, cfo: 1, compliance: 0 } },
      { label: 'لا، لا أعرف ما إذا كانت المنتجات أو الخدمات رابحة فعلياً بعد التكاليف', value: 'لا أعرف الهامش الحقيقي', points: { cleanup: 2, reporting: 4, cfo: 2, compliance: 0 } },
    ]
  },
  {
    id: 7,
    title: 'هل تواجه منشأتك فجوات أو أزمات في السيولة والتدفق النقدي؟',
    subtitle: 'كصعوبة سداد التزامات الموردين أو الرواتب في موعدها رغم وجود مبيعات.',
    options: [
      { label: 'نعم، نواجه ضغوطاً متكررة في السيولة النقدية وتأخر التحصيل', value: 'نواجه ضغوط سيولة متكررة', points: { cleanup: 1, reporting: 3, cfo: 3, compliance: 0 } },
      { label: 'أحياناً في مواسم محددة أو مع تأخر صرف المستخلصات', value: 'أحياناً في بعض المواسم', points: { cleanup: 1, reporting: 2, cfo: 2, compliance: 0 } },
      { label: 'لا، تدفقاتنا النقدية مستقرة ومُدارة باحتياط كافٍ', value: 'السيولة مستقرة', points: { cleanup: 0, reporting: 1, cfo: 1, compliance: 0 } },
    ]
  },
  {
    id: 8,
    title: 'ما مدى حاجتك للدعم في ملفات الضريبة (VAT) والزكاة والفوترة؟',
    subtitle: 'الامتثال لهيئة الزكاة والضريبة والجمارك (ZATCA).',
    options: [
      { label: 'نحتاج مساندة وتدقيقاً لتجهيز الإقرارات والامتثال وتفادي الغرامات', value: 'نحتاج مساندة وإقرارات', points: { cleanup: 1, reporting: 0, cfo: 0, compliance: 4 } },
      { label: 'غير متأكد من سلامة الوضع ونحتاج مراجعة شاملة للسنوات السابقة', value: 'غير متأكد ونحتاج مراجعة', points: { cleanup: 2, reporting: 1, cfo: 0, compliance: 4 } },
      { label: 'ملفاتنا الضريبية والزكوية منضبطة ومقدمة في مواعيدها', value: 'منضبطة بالكامل', points: { cleanup: 0, reporting: 1, cfo: 1, compliance: 0 } },
    ]
  },
  {
    id: 9,
    title: 'هل تحتاج إشرافاً مالياً قيادياً (CFO) لقرارات التسعير والموازنات والتوسع؟',
    subtitle: 'دور استراتيجي لمرافقة الإدارة التنفيذية في القرارات المصيرية.',
    options: [
      { label: 'نعم، نحتاج شريكاً مالياً استراتيجياً لبناء خطط وموازنات التوسع والتمويل', value: 'نعم نحتاج CFO استراتيجي', points: { cleanup: 0, reporting: 1, cfo: 4, compliance: 0 } },
      { label: 'ربما في مرحلة لاحقة، تركيزنا الحالي على ضبط العمليات اليومية', value: 'ربما لاحقاً', points: { cleanup: 2, reporting: 2, cfo: 0, compliance: 1 } },
      { label: 'لا نحتاج حالياً سوى تسجيل الفواتير والقيود المحاسبية الدفترية', value: 'تسجيل قيود فقط', points: { cleanup: 2, reporting: 0, cfo: 0, compliance: 1 } },
    ]
  }
];

interface DiagnosisResult {
  category: string;
  badge: string;
  headline: string;
  description: string;
  recommendedPackage: string;
  practicalSteps: string[];
  icon: typeof Calculator;
}

export default function FinancialAssessmentSection() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState<boolean>(false);

  const totalQuestions = QUESTIONS.length;
  const currentQuestion = QUESTIONS[currentStep];

  const handleSelectOption = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  };

  // Calculate diagnostic result
  const calculateDiagnosis = (): DiagnosisResult => {
    let cleanupScore = 0;
    let reportingScore = 0;
    let cfoScore = 0;
    let complianceScore = 0;

    QUESTIONS.forEach((q) => {
      const selectedValue = answers[q.id];
      if (selectedValue) {
        const option = q.options.find((o) => o.value === selectedValue);
        if (option) {
          cleanupScore += option.points.cleanup;
          reportingScore += option.points.reporting;
          cfoScore += option.points.cfo;
          complianceScore += option.points.compliance;
        }
      }
    });

    // Determine leading priority
    if (cleanupScore >= 6) {
      return {
        category: 'تنظيم وتأسيس المحاسبة أولًا',
        badge: 'المرحلة الأساسية: ضبط الدفاتر والقيود',
        headline: 'يبدو أن منشأتك تحتاج إلى تنظيم وتأسيس المحاسبة أولًا',
        description: 'لا يمكن بناء تقارير مالية موثوقة أو اتخاذ قرارات تسعير وتوسع سليمة ما دامت الدفاتر غير محدثة أو الأرصدة البنكية غير مطابقة. أول خطوة عملية ومجدية لمنشأتك هي تصفية التراكمات السابقة، وضبط شجرة الحسابات على نظام سحابي معتمد، وتوثيق القيود اليومية بانتظام.',
        recommendedPackage: 'باقة المحاسبة والالتزام (Accounting & Compliance)',
        practicalSteps: [
          'تنظيم المستندات وتصفية قيود الفترات المتأخرة وضبط الأرصدة الافتتاحية.',
          'تأسيس شجرة حسابات ملائمة لنشاطك على برنامج محاسبي سحابي معتمد في السعودية.',
          'مطابقة كشوف الحسابات البنكية شهرياً وتجهيز مسودة الإقرار الضريبي.'
        ],
        icon: Calculator
      };
    }

    if (cfoScore >= 7) {
      return {
        category: 'خدمة المدير المالي عن بعد (Virtual CFO)',
        badge: 'المرحلة القيادية: الإشراف الاستراتيجي',
        headline: 'قد تستفيد منشأتك من خدمة المدير المالي عن بعد (Virtual CFO)',
        description: 'دفاترك الأساسية تسير في مسارها الصحيح، ولكن منشأتك بلغت مرحلة نمو تستدعي وجود عقل مالي استراتيجي يقود قرارات التسعير، وإدارة السيولة المستقبلية، وبناء الموازنات التقديرية، ومتابعة ربحية التوسع دون تحمل تكاليف توظيف مدير مالي تنفيذي بدوام كامل.',
        recommendedPackage: 'باقة المدير المالي عن بعد (Virtual CFO)',
        practicalSteps: [
          'إعداد توقعات التدفق النقدي لـ 12 شهراً لتأمين سيولة التوسع وسداد الالتزامات.',
          'تحليل استراتيجيات التسعير وهوامش ربحية الخدمات والمنتجات الرئيسية.',
          'جلسات دورية مع الإدارة لمراجعة الموازنات والانحرافات واتخاذ القرارات الاستثمارية.'
        ],
        icon: Briefcase
      };
    }

    if (complianceScore >= 6 && reportingScore < 6) {
      return {
        category: 'ضبط الامتثال والزكاة والضريبة',
        badge: 'أولوية فورية: حماية المنشأة من الغرامات',
        headline: 'يبدو أن أولوية منشأتك الحالية هي ضبط الامتثال الضريبي والزكوي',
        description: 'تواجه المنشأة فجوة في جاهزية ملفات هيئة الزكاة والضريبة والجمارك (ZATCA) أو متطلبات الفوترة الإلكترونية. الحاجة الماسة الآن هي تدقيق فواتير المبيعات والمشتريات وتجهيز مسودات الإقرارات بدقة نظامية تحمي منشأتك من أي التزامات مفاجئة.',
        recommendedPackage: 'خدمة مراجعة الامتثال الضريبي ومسودة إقرار الزكاة',
        practicalSteps: [
          'مطابقة مبيعات الفوترة الإلكترونية مع الإقرارات الضريبية المقدمة.',
          'حصر وتصنيف أوعية الزكاة وإعداد التسويات المحاسبية المعتمدة.',
          'تصحيح قيود المدخلات والمخرجات قبل تقديم الإقرارات الرسمية.'
        ],
        icon: FileCheck
      };
    }

    // Default to Reporting & Financial Management
    return {
      category: 'تقارير وتحليل مالي وإدارة السيولة',
      badge: 'مرحلة الرقابة: اتخاذ القرار بالبيانات',
      headline: 'يبدو أن منشأتك تحتاج إلى تقارير وتحليل مالي منتظم',
      description: 'تمتلك منشأتك مبيعات ونشاطاً تشغيلياً قائماً، ولكن غياب التقارير الشهرية التحليلية وغموض هوامش الربح ونقطة التعادل يعرض السيولة للمخاطر. تحتاج منشأتك إلى لوحة مؤشرات دورية توضح أين تذهب الأموال وكيف تحمي هوامش ربحك.',
      recommendedPackage: 'باقة الإدارة المالية والمتابعة (Financial Management)',
      practicalSteps: [
        'إصدار تقرير شهري تحليلي يكشف هوامش الربح الحقيقية ومصادر الهدر المالي.',
        'حساب نقطة التعادل (Break-Even) بدقة لضبط مصاريف التشغيل والمبيعات المستهدفة.',
        'متابعة دورية لتحصيل الذمم وأعمار الديون لتفادي اختناقات السيولة النقدية.'
      ],
      icon: TrendingUp
    };
  };

  const diagnosis = calculateDiagnosis();

  // Pre-filled WhatsApp message
  const generateWhatsAppMessage = () => {
    const activity = answers[1] || 'غير محدد';
    const size = answers[2] || 'غير محدد';
    const system = answers[3] || 'غير محدد';
    const booksStatus = answers[4] || 'غير محدد';
    const reports = answers[5] || 'غير محدد';
    const liquidity = answers[7] || 'غير محدد';

    const text = [
      'السلام عليكم أ. خالد، قمت بإجراء التقييم المالي السريع لمنشأتي على موقع القائد:',
      `• نوع النشاط: ${activity}`,
      `• حجم المنشأة: ${size}`,
      `• النظام المحاسبي: ${system}`,
      `• وضع الحسابات: ${booksStatus}`,
      `• التقارير الشهرية: ${reports}`,
      `• حالة السيولة: ${liquidity}`,
      '',
      `• النتيجة المقترحة: ${diagnosis.headline}`,
      `• الباقة الملائمة: ${diagnosis.recommendedPackage}`,
      '',
      'أرغب في مناقشة هذا التقييم وخطة العمل المناسبة لمنشأتي.'
    ].join('\n');

    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  };

  const isCurrentAnswered = Boolean(answers[currentQuestion?.id]);
  const progressPercent = Math.round(((currentStep + 1) / totalQuestions) * 100);

  return (
    <section 
      id="financial-assessment" 
      className="border-t border-border-subtle bg-surface-subtle/30 py-14 sm:py-18 md:py-24"
      aria-labelledby="assessment-title"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div id="assessment-header" className="mx-auto mb-10 max-w-2xl text-center">
          <div 
            id="assessment-badge"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-arabic font-semibold mb-3"
          >
            <ClipboardCheck className="w-3.5 h-3.5" />
            <span>أداة التقييم المالي السريع (Funnel)</span>
          </div>

          <h2 id="assessment-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary font-arabic mb-3 tracking-tight">
            قيّم احتياج منشأتك المالي في 60 ثانية
          </h2>

          <p id="assessment-description" className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed max-w-xl mx-auto">
            أجب عن 9 أسئلة تشخيصية سريعة لتعرف فوراً ما إذا كانت منشأتك تحتاج لتنظيم الحسابات أولاً، أو تقارير وتحليل مالي، أو إشراف مدير مالي عن بعد.
          </p>
        </div>

        {/* Funnel Card Container */}
        <div 
          id="assessment-card-container"
          className="bg-white rounded-2xl sm:rounded-3xl border border-border shadow-xs p-5 sm:p-8 md:p-10 transition-all duration-200"
        >
          {!showResult ? (
            <div>
              {/* Progress & Step Info */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs text-text-muted font-arabic mb-2">
                  <span className="font-semibold text-text-primary">
                    السؤال {currentStep + 1} من {totalQuestions}
                  </span>
                  <span>{progressPercent}% مكتمل</span>
                </div>
                <div className="w-full h-2 bg-surface-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-secondary transition-all duration-300 ease-out rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Question Box */}
              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-text-primary font-arabic mb-1.5 leading-snug">
                  {currentQuestion.title}
                </h3>
                {currentQuestion.subtitle && (
                  <p className="text-xs sm:text-sm text-text-secondary font-arabic">
                    {currentQuestion.subtitle}
                  </p>
                )}
              </div>

              {/* Options List (Mobile-First Touch Friendly >= 48px) */}
              <div className="space-y-3 mb-8" role="radiogroup" aria-label={currentQuestion.title}>
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = answers[currentQuestion.id] === option.value;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(option.value)}
                      className={`w-full text-right p-4 sm:p-4.5 rounded-xl border transition-all duration-150 flex items-start justify-between gap-3 min-h-[52px] ${
                        isSelected 
                          ? 'border-secondary bg-secondary/[0.04] ring-1 ring-secondary/30' 
                          : 'border-border-subtle bg-white hover:border-secondary/30 hover:bg-surface-subtle/40'
                      }`}
                      role="radio"
                      aria-checked={isSelected}
                    >
                      <div className="flex-1">
                        <span className={`text-xs sm:text-sm font-arabic block font-semibold ${isSelected ? 'text-primary' : 'text-text-primary'}`}>
                          {option.label}
                        </span>
                        {option.description && (
                          <span className="text-[11px] text-text-muted mt-0.5 block leading-normal">
                            {option.description}
                          </span>
                        )}
                      </div>

                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border shrink-0 mt-0.5 transition-colors ${
                        isSelected 
                          ? 'border-secondary bg-secondary text-white' 
                          : 'border-border-subtle bg-white'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-arabic font-medium transition-all ${
                    currentStep === 0
                      ? 'text-text-muted opacity-40 cursor-not-allowed'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-subtle'
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>السابق</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isCurrentAnswered}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-arabic font-semibold transition-all shadow-xs ${
                    isCurrentAnswered
                      ? 'bg-primary text-white hover:bg-primary/95 hover:shadow-sm'
                      : 'bg-surface-muted text-text-muted cursor-not-allowed opacity-60'
                  }`}
                >
                  <span>{currentStep === totalQuestions - 1 ? 'عرض النتيجة والتشخيص' : 'التالي'}</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Result View */
            <div id="assessment-result-view" className="space-y-6">
              
              {/* Diagnostic Top Banner */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-border-subtle">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <diagnosis.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-md inline-block mb-1">
                      {diagnosis.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary font-arabic">
                      {diagnosis.headline}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary bg-surface-subtle border border-border-subtle px-3 py-1.5 rounded-lg transition-colors shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>إعادة التقييم</span>
                </button>
              </div>

              {/* Detailed Diagnostic Reasoning */}
              <div className="rounded-2xl bg-surface-subtle/30 border border-border-subtle p-5 sm:p-6 space-y-4">
                <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide font-arabic">
                  تحليل واقع منشأتك التشغيلي:
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {diagnosis.description}
                </p>

                {/* Recommended Package Box */}
                <div className="bg-white rounded-xl border border-secondary/20 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-text-muted block">الحل والمسار المقترح:</span>
                    <strong className="text-sm sm:text-base text-text-primary font-arabic">
                      {diagnosis.recommendedPackage}
                    </strong>
                  </div>
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full shrink-0 self-start sm:self-auto">
                    الأكثر ملاءمة لمرحلتك
                  </span>
                </div>

                {/* Practical Steps Checklist */}
                <div>
                  <h5 className="text-xs font-bold text-text-primary mb-2.5 font-arabic">
                    أول 3 خطوات عملية ننصحك بالبدء بها:
                  </h5>
                  <ul className="space-y-2">
                    {diagnosis.practicalSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Answers Summary Pill Strip */}
              <div className="rounded-xl border border-border-subtle bg-white p-4">
                <h5 className="text-[11px] font-bold text-text-muted mb-2 font-arabic">
                  ملخص إجاباتك المدخلة:
                </h5>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  <span className="bg-surface-subtle px-2.5 py-1 rounded-md text-text-secondary">
                    النشاط: <strong className="text-text-primary">{answers[1]}</strong>
                  </span>
                  <span className="bg-surface-subtle px-2.5 py-1 rounded-md text-text-secondary">
                    الحجم: <strong className="text-text-primary">{answers[2]}</strong>
                  </span>
                  <span className="bg-surface-subtle px-2.5 py-1 rounded-md text-text-secondary">
                    النظام: <strong className="text-text-primary">{answers[3]}</strong>
                  </span>
                  <span className="bg-surface-subtle px-2.5 py-1 rounded-md text-text-secondary">
                    الدفاتر: <strong className="text-text-primary">{answers[4]}</strong>
                  </span>
                </div>
              </div>

              {/* MANDATORY LEGAL/TAX DISCLAIMER (Strict Anti-Hallucination) */}
              <div 
                id="assessment-disclaimer"
                className="rounded-xl bg-amber-500/[0.06] border border-amber-500/20 p-3.5 sm:p-4 text-amber-950 flex items-start gap-3"
              >
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-xs font-bold font-arabic block text-amber-900">
                    إخلاء مسؤولية مهني ونظامي:
                  </strong>
                  <p className="text-[11px] text-amber-900/90 leading-relaxed">
                    نتيجة هذا التقييم هي مؤشر استكشافي مبدئي لتحديد المسار المحاسبي والمالي المناسب لمنشأتك، ولا تُعد بأي حال استشارة قانونية أو ضريبية أو مراجعة حسابات نهائية ملزمة. يتم اعتماد خطة العمل الرسمية بعد فحص المستندات والدورة المستندية الفعلية.
                  </p>
                </div>
              </div>

              {/* Primary Call-to-Action to WhatsApp */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="assessment-whatsapp-cta"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-semibold shadow-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] text-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>مناقشة نتيجة التقييم عبر واتساب</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-surface-subtle border border-border hover:border-secondary/40 text-text-primary text-xs sm:text-sm font-medium transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>إعادة ملء التقييم</span>
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
