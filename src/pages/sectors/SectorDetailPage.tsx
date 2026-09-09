import { ArrowRight, MessageCircle, TrendingDown, TrendingUp } from 'lucide-react';
import Container from '../../../components/Container';

type ReportRow = {
  label: string;
  value: string;
  change: string;
  direction?: 'up' | 'down';
  width: string;
};

type Meaning = {
  metric: string;
  meaning: string;
  decision: string;
};

type Sector = {
  title: string;
  question: string;
  image: string;
  problems: string[];
  reportTitle: string;
  reportRows: ReportRow[];
  meanings: Meaning[];
  outputs: string[];
  message: string;
};

const commonOutputs = [
  'استلام وتنظيم المستندات المالية ومراجعتها',
  'تسجيل ومتابعة الإيرادات والمصروفات أولًا بأول',
  'إعداد ومتابعة القوائم والتقارير المالية',
  'متابعة العملاء والموردين والتحصيل والالتزامات',
  'متابعة الزكاة وضريبة القيمة المضافة والالتزامات ذات الصلة',
  'تنظيم البيانات المالية لتكون جاهزة للمراجعة واتخاذ القرار'
];

const commonProcess = [
  'تواصل معنا',
  'نحدد المشكلة',
  'نطلب البيانات والمستندات',
  'التقييم الأولي',
  'ربط النظام',
  'بدء التسجيل والمتابعة',
  'التقرير الأول',
  'متابعة يومية'
];

const sectors: Record<string, Sector> = {
  'restaurants-cafes': {
    title: 'الإدارة المالية للمطاعم والكافيهات',
    question: 'هل تعرف أين يذهب ربح مطعمك؟',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=85',
    problems: [
      'أشعر أن المبيعات جيدة، لكن المبلغ الذي يتبقى لي في نهاية الشهر أقل مما أتوقع.',
      'لا أستطيع معرفة هل ارتفاع تكلفة الطعام والهدر يأكل من هامش الربح أم لا.',
      'جزء كبير من أموالي موجود في المخزون ولا أعرف ما الذي يتحرك وما الذي يتعطل.',
      'أحتاج أن أعرف ربحية الأصناف أو الفروع بدلًا من النظر إلى إجمالي المبيعات فقط.'
    ],
    reportTitle: 'تقرير مالي مختصر — مثال توضيحي',
    reportRows: [
      { label: 'المبيعات', value: '285,000 ر.س', change: '+8.4%', direction: 'up', width: '86%' },
      { label: 'تكلفة الطعام', value: '112,000 ر.س', change: '39.3%', direction: 'down', width: '63%' },
      { label: 'المصروفات التشغيلية', value: '84,000 ر.س', change: '+4.1%', direction: 'up', width: '47%' },
      { label: 'صافي الربح', value: '89,000 ر.س', change: '31.2%', direction: 'up', width: '58%' },
      { label: 'التدفق النقدي', value: '42,000 ر.س', change: 'متاح', width: '34%' },
      { label: 'المخزون', value: '67,000 ر.س', change: 'يحتاج متابعة', direction: 'down', width: '42%' }
    ],
    meanings: [
      { metric: 'تكلفة الطعام 39.3%', meaning: 'هذه النسبة تخبرنا كم تستهلك تكلفة المواد من المبيعات.', decision: 'مراجعة الشراء والوصفات والحصص والهدر والتسعير.' },
      { metric: 'المخزون 67K', meaning: 'جزء من رأس المال موجود في مخزون وليس نقدًا متاحًا.', decision: 'ضبط دورة الشراء ومتابعة الأصناف البطيئة.' },
      { metric: 'التدفق 42K', meaning: 'الربح المحاسبي لا يعني أن النقد المتاح يساويه.', decision: 'ترتيب المصروفات والالتزامات حسب السيولة الفعلية.' }
    ],
    outputs: ['قائمة دخل واضحة للمطعم', 'تحليل تكلفة الطعام والهدر', 'تحليل ربحية الأصناف والفروع', 'تقرير السيولة والمخزون', 'مؤشرات تساعدك على التسعير والشراء وضبط المصروفات'],
    message: 'السلام عليكم، أريد معرفة الوضع المالي الحقيقي لمطعمي والمؤشرات التي يجب متابعتها.'
  },
  contracting: {
    title: 'الإدارة المالية لقطاع المقاولات',
    question: 'هل تعرف ربحية مشروعك قبل أن ينتهي؟',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=85',
    problems: [
      'أريد أن أعرف تكلفة كل مشروع فعلية، وليس مجرد إجمالي المصروفات.',
      'أخشى أن تزيد تكلفة مشروع قبل أن أكتشف أنها قللت هامش الربح.',
      'المستخلصات والتحصيل والالتزامات تجعلني غير متأكد من السيولة المتاحة.',
      'أحتاج أن أعرف هل نسبة الإنجاز الحالية متناسبة مع ما صُرف وما تم تحصيله.'
    ],
    reportTitle: 'تقرير المشروع المالي — مثال توضيحي',
    reportRows: [
      { label: 'قيمة العقود', value: '1.80M ر.س', change: 'إجمالي', width: '92%' },
      { label: 'التكلفة المنفذة', value: '1.02M ر.س', change: '56.7%', direction: 'up', width: '57%' },
      { label: 'نسبة الإنجاز', value: '62%', change: 'مقابل التكلفة', width: '62%' },
      { label: 'الربحية المتوقعة', value: '18.4%', change: 'مستهدف', direction: 'up', width: '49%' },
      { label: 'المستحق للتحصيل', value: '265K ر.س', change: 'ضغط سيولة', direction: 'down', width: '39%' },
      { label: 'انحراف التكلفة', value: '+7.2%', change: 'يحتاج تدخلًا', direction: 'up', width: '28%' }
    ],
    meanings: [
      { metric: 'انحراف التكلفة +7.2%', meaning: 'التكلفة ترتفع أسرع من الخطة، وهذا قد يخفض هامش المشروع.', decision: 'تحديد مصدر الانحراف وإعادة تقدير الربحية قبل فوات الأوان.' },
      { metric: 'إنجاز 62%', meaning: 'نسبة الإنجاز وحدها لا تكفي دون ربطها بالتكلفة والإيراد.', decision: 'مقارنة الإنجاز بالتكلفة والمستخلصات والتحصيل.' },
      { metric: 'تحصيل 265K', meaning: 'المشروع قد يكون مربحًا على الورق لكن السيولة متأخرة.', decision: 'ترتيب التحصيل والالتزامات حسب الأولوية.' }
    ],
    outputs: ['ربحية كل مشروع', 'تقرير تكلفة مقابل الإنجاز', 'متابعة المستخلصات والتحصيل', 'توقع التدفق النقدي', 'كشف مبكر لانحرافات التكلفة'],
    message: 'السلام عليكم، أريد معرفة ربحية مشاريعي والتكاليف والسيولة بشكل واضح.'
  },
  'trade-retail': {
    title: 'الإدارة المالية للتجارة والتجزئة',
    question: 'هل المبيعات المرتفعة تتحول فعلًا إلى ربح؟',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2400&q=85',
    problems: [
      'أرى مبيعات مرتفعة، لكنني لا أعرف الهامش الحقيقي بعد تكلفة الشراء والمصروفات.',
      'أموال كثيرة مرتبطة في المخزون وأحتاج أن أعرف أين تتجمد السيولة.',
      'تغير أسعار الشراء يضغط على الربح وأحتاج رؤية ذلك بسرعة.',
      'أريد معرفة المنتجات أو الفروع التي تحقق لي ربحًا حقيقيًا.'
    ],
    reportTitle: 'تقرير المبيعات والربحية — مثال توضيحي',
    reportRows: [
      { label: 'المبيعات', value: '420K ر.س', change: '+12.5%', direction: 'up', width: '90%' },
      { label: 'تكلفة المبيعات', value: '276K ر.س', change: '65.7%', direction: 'down', width: '66%' },
      { label: 'هامش الربح', value: '34.3%', change: 'تحت المتابعة', width: '43%' },
      { label: 'المخزون', value: '310K ر.س', change: 'مرتفع', direction: 'down', width: '72%' },
      { label: 'أصناف بطيئة', value: '14%', change: 'تحتاج قرارًا', direction: 'down', width: '28%' },
      { label: 'صافي الربح', value: '62K ر.س', change: '14.8%', direction: 'up', width: '34%' }
    ],
    meanings: [
      { metric: 'الهامش 34.3%', meaning: 'المبيعات وحدها لا تكشف جودة الربح.', decision: 'مراجعة تسعير المنتجات وتكلفة الشراء.' },
      { metric: 'المخزون 310K', meaning: 'رأس مال كبير مرتبط ببضاعة لم تتحول بعد إلى نقد.', decision: 'تحديد البطيء وربط الشراء بالدوران.' },
      { metric: 'أصناف بطيئة 14%', meaning: 'السيولة معرضة للتجميد أو الخصم أو التلف.', decision: 'تحديد الأصناف التي تحتاج تصرفًا سريعًا.' }
    ],
    outputs: ['قائمة دخل واضحة', 'تحليل هامش المنتجات والفروع', 'تقرير المخزون والدوران', 'تحليل المصروفات والسيولة', 'مؤشرات تدعم قرارات الشراء والتسعير'],
    message: 'السلام عليكم، أريد تحليل مبيعاتي ومخزوني وهامش الربح لاتخاذ قرارات أفضل.'
  },
  'pharmacies-health': {
    title: 'الإدارة المالية للصيدليات والمنشآت الصحية',
    question: 'هل تعرف أي جزء من نشاطك يحقق الربح فعلًا؟',
    image: 'https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?auto=format&fit=crop&w=2400&q=85',
    problems: [
      'المبيعات موجودة، لكنني أحتاج أن أعرف ما يتبقى لي فعلًا بعد تكلفة المنتجات والمصروفات.',
      'جزء من السيولة موجود في المخزون والأصناف بطيئة الحركة.',
      'الخصومات وتغير تكلفة الشراء قد تخفض الهامش دون أن يظهر ذلك من المبيعات فقط.',
      'أحتاج صورة واضحة عن أثر المصروفات على ربحية المنشأة.'
    ],
    reportTitle: 'تقرير مالي للنشاط الصحي — مثال توضيحي',
    reportRows: [
      { label: 'المبيعات', value: '360K ر.س', change: '+6.8%', direction: 'up', width: '82%' },
      { label: 'تكلفة المبيعات', value: '258K ر.س', change: '71.7%', direction: 'down', width: '72%' },
      { label: 'الهامش', value: '28.3%', change: 'تحت المتابعة', width: '37%' },
      { label: 'المخزون', value: '195K ر.س', change: 'مرتفع', direction: 'down', width: '61%' },
      { label: 'مصروفات التشغيل', value: '54K ر.س', change: '+3.2%', direction: 'up', width: '31%' },
      { label: 'صافي الربح', value: '48K ر.س', change: '13.3%', direction: 'up', width: '27%' }
    ],
    meanings: [
      { metric: 'الهامش 28.3%', meaning: 'ارتفاع المبيعات مع انخفاض الهامش قد لا يحسن الربح.', decision: 'تحليل تكلفة الشراء والخصومات وربحية الأصناف.' },
      { metric: 'المخزون 195K', meaning: 'السيولة قد تكون مرتبطة بأصناف لا تتحرك بالسرعة المطلوبة.', decision: 'متابعة الدوران والأصناف البطيئة.' },
      { metric: 'المصروفات 54K', meaning: 'زيادة المصروفات تقلل ما يتبقى من الهامش.', decision: 'مقارنة المصروفات بالعائد وأثرها على الربحية.' }
    ],
    outputs: ['قائمة دخل واضحة', 'تحليل الهامش والتكلفة', 'تقرير المخزون والدوران', 'متابعة المصروفات والسيولة', 'مؤشرات تساعد على ضبط التسعير والشراء'],
    message: 'السلام عليكم، أريد معرفة ربحية نشاطي الصحي ومؤشرات المخزون والسيولة.'
  },
  'services-professions': {
    title: 'الإدارة المالية للخدمات والمهن',
    question: 'هل تعرف تكلفة الخدمة التي تقدمها وربحيتها؟',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=85',
    problems: [
      'الإيرادات موجودة، لكنني لا أعرف تكلفة تقديم كل خدمة وما يتبقى منها.',
      'المصروفات الثابتة والمتغيرة تقلل الربحية وأحتاج أن أراها بوضوح.',
      'أريد معرفة الخدمات والعملاء الأكثر ربحية بدل الاعتماد على إجمالي الإيراد.',
      'التحصيل المتأخر يجعلني غير متأكد من النقد المتاح رغم وجود مبيعات.'
    ],
    reportTitle: 'تقرير ربحية الخدمات — مثال توضيحي',
    reportRows: [
      { label: 'إيرادات الخدمات', value: '240K ر.س', change: '+10.2%', direction: 'up', width: '78%' },
      { label: 'تكلفة تقديم الخدمة', value: '96K ر.س', change: '40%', direction: 'down', width: '52%' },
      { label: 'هامش الخدمات', value: '60%', change: 'قوي', direction: 'up', width: '74%' },
      { label: 'المصروفات', value: '71K ر.س', change: '+5.6%', direction: 'up', width: '45%' },
      { label: 'المبالغ غير المحصلة', value: '58K ر.س', change: 'تحتاج متابعة', direction: 'down', width: '39%' },
      { label: 'صافي الربح', value: '73K ر.س', change: '30.4%', direction: 'up', width: '61%' }
    ],
    meanings: [
      { metric: 'هامش الخدمات 60%', meaning: 'هذا هو الهامش المتاح لتغطية المصروفات وتحقيق الربح.', decision: 'تسعير الخدمات بناءً على تكلفتها الفعلية.' },
      { metric: 'غير محصل 58K', meaning: 'الإيراد المسجل لا يعني أن النقد دخل الحساب.', decision: 'متابعة التحصيل وأعمار الذمم.' },
      { metric: 'صافي الربح 30.4%', meaning: 'الصورة النهائية بعد تكلفة الخدمة والمصروفات.', decision: 'تحديد الخدمات التي تستحق التوسع والاستثمار.' }
    ],
    outputs: ['قائمة دخل للخدمات', 'تحليل تكلفة وربحية كل خدمة', 'متابعة العملاء والتحصيل', 'تحليل المصروفات والسيولة', 'مؤشرات تدعم التسعير والتوسع'],
    message: 'السلام عليكم، أريد معرفة تكلفة خدماتي وربحيتها ومتابعة التحصيل والسيولة.'
  },
  'startups-growing': {
    title: 'الإدارة المالية للشركات الناشئة والمتنامية',
    question: 'هل تعرف كم لديك من وقت قبل أن تحتاج إلى تمويل جديد؟',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=85',
    problems: [
      'الشركة تنمو، لكنني لا أملك صورة يومية واضحة عن النقد المتاح.',
      'أريد أن أعرف معدل الحرق ومدة استمرار السيولة الحالية.',
      'الإيرادات تنمو لكن المصروفات قد تنمو أسرع منها.',
      'أحتاج أرقامًا منظمة تساعدني في قرارات التوظيف والتوسع والتمويل.'
    ],
    reportTitle: 'تقرير السيولة والنمو — مثال توضيحي',
    reportRows: [
      { label: 'الإيرادات الشهرية', value: '310K ر.س', change: '+18.6%', direction: 'up', width: '88%' },
      { label: 'المصروفات الشهرية', value: '245K ر.س', change: '+14.2%', direction: 'up', width: '70%' },
      { label: 'صافي التدفق', value: '65K ر.س', change: 'موجب', direction: 'up', width: '43%' },
      { label: 'الرصيد النقدي', value: '780K ر.س', change: 'متاح', width: '76%' },
      { label: 'معدل الحرق', value: '180K ر.س', change: 'شهري', direction: 'down', width: '54%' },
      { label: 'المدى النقدي', value: '4.3 أشهر', change: 'تحت المتابعة', direction: 'down', width: '35%' }
    ],
    meanings: [
      { metric: 'معدل الحرق 180K', meaning: 'يوضح مقدار النقد الذي تستهلكه الشركة خلال الفترة.', decision: 'ضبط المصروفات وربط الإنفاق بخطة النمو.' },
      { metric: 'مدى نقدي 4.3 أشهر', meaning: 'هذا تقدير للمدة التي يمكن أن تستمر فيها السيولة وفق الفرضيات الحالية.', decision: 'التخطيط للتمويل أو خفض التكلفة مبكرًا.' },
      { metric: 'الإيرادات +18.6%', meaning: 'النمو جيد، لكن المهم هل يتحول إلى تدفق وربحية.', decision: 'مقارنة النمو بتكلفة اكتساب العميل والمصروفات والسيولة.' }
    ],
    outputs: ['تقارير مالية دورية', 'متابعة التدفق النقدي ومعدل الحرق', 'تحليل الإيرادات والمصروفات', 'تقارير تساعد في التخطيط للتمويل', 'مؤشرات للنمو والربحية والسيولة'],
    message: 'السلام عليكم، أريد تنظيم الإدارة المالية لشركتي ومتابعة السيولة والنمو بشكل واضح.'
  }
};

function FinancialReport({ sector }: { sector: Sector }) {
  return (
    <div className="mt-5 overflow-hidden border-y border-slate-200 bg-white shadow-sm">
      <div className="flex items-end justify-between gap-4 border-b border-slate-200 bg-slate-50 px-4 py-4 sm:px-6">
        <div>
          <p className="text-xs font-semibold tracking-wider text-slate-500">FINANCIAL REPORT · DEMO</p>
          <h3 className="mt-1 text-lg font-bold text-slate-950 sm:text-xl">{sector.reportTitle}</h3>
          <p className="mt-1 text-xs text-slate-500">الأرقام للعرض البصري فقط وليست بيانات حقيقية لنشاط محدد.</p>
        </div>
        <div className="hidden text-left text-xs text-slate-400 sm:block">القائد للإدارة المالية</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_.65fr]">
        <div className="divide-y divide-slate-100">
          <div className="grid grid-cols-[1.1fr_.9fr_.7fr] gap-3 bg-slate-50 px-4 py-2 text-[11px] font-bold text-slate-500 sm:grid-cols-[1.1fr_.9fr_.7fr] sm:px-6">
            <span>المؤشر</span><span>القيمة</span><span>التغير / الحالة</span>
          </div>
          {sector.reportRows.map((row) => (
            <div key={row.label} className="grid grid-cols-[1.1fr_.9fr_.7fr] items-center gap-3 px-4 py-3 sm:px-6">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-800">{row.label}</p>
                <div className="mt-2 h-1.5 w-full max-w-[170px] overflow-hidden bg-slate-100">
                  <div className="h-full bg-emerald-500" style={{ width: row.width }} />
                </div>
              </div>
              <p className="text-sm font-bold text-slate-950 sm:text-base">{row.value}</p>
              <div className="flex items-center gap-1 text-xs font-semibold text-slate-600">
                {row.direction === 'up' && <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />}
                {row.direction === 'down' && <TrendingDown className="h-3.5 w-3.5 text-amber-600" />}
                <span>{row.change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 bg-slate-950 p-4 text-white lg:border-l lg:border-t-0 sm:p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">اتجاه الأداء</span>
            <span className="text-xs font-semibold text-emerald-300">MONTHLY VIEW</span>
          </div>
          <div className="mt-5 h-28">
            <svg viewBox="0 0 320 110" className="h-full w-full" role="img" aria-label="رسم بياني توضيحي لاتجاه الأداء">
              <path d="M0 92 L45 78 L90 83 L135 54 L180 64 L225 36 L270 44 L320 18" fill="none" stroke="currentColor" strokeWidth="4" className="text-emerald-400" />
              <path d="M0 92 L45 78 L90 83 L135 54 L180 64 L225 36 L270 44 L320 18 L320 110 L0 110 Z" fill="currentColor" opacity=".08" className="text-emerald-300" />
              {[45,90,135,180,225,270].map((x) => <line key={x} x1={x} y1="0" x2={x} y2="110" stroke="currentColor" strokeWidth="1" className="text-slate-800" />)}
            </svg>
          </div>
          <div className="mt-3 flex justify-between text-[10px] text-slate-500"><span>بداية الفترة</span><span>آخر الفترة</span></div>
          <div className="mt-6 border-t border-slate-800 pt-4">
            <p className="text-xs text-slate-400">قراءة سريعة</p>
            <p className="mt-1 text-sm leading-6 text-slate-200">الرسم يوضح الاتجاه، ثم نربط كل تغير بسبب مالي وقرار عملي.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SectorDetailPage() {
  const slug = typeof window !== 'undefined' ? window.location.pathname.split('/').filter(Boolean).pop() || '' : '';
  const sector = sectors[slug] || sectors['restaurants-cafes'];
  const whatsappUrl = `https://wa.me/966511294383?text=${encodeURIComponent(sector.message)}`;

  return (
    <main dir="rtl" className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <Container>
          <div className="grid items-center gap-6 py-7 md:grid-cols-[1fr_360px] md:py-9">
            <div>
              <a href="/" className="mb-4 inline-flex items-center gap-2 text-xs text-slate-400 transition hover:text-white">
                <ArrowRight className="h-4 w-4" /> العودة للرئيسية
              </a>
              <p className="text-xs font-semibold tracking-wider text-emerald-400">الإدارة المالية حسب النشاط</p>
              <h1 className="mt-2 text-2xl font-black leading-tight sm:text-3xl md:text-4xl">{sector.title}</h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{sector.question}</p>
            </div>
            <img src={sector.image} alt="" className="h-36 w-full object-cover shadow-xl md:h-40" loading="eager" />
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 py-7 sm:py-9">
        <Container>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-emerald-700">من وجهة نظرك</p>
              <h2 className="mt-1 text-xl font-black sm:text-2xl">المشاكل التي قد تواجه نشاطك</h2>
            </div>
            <span className="hidden text-xs text-slate-400 sm:block">ما الذي يزعجك كصاحب نشاط؟</span>
          </div>
          <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
            {sector.problems.map((problem, index) => (
              <div key={problem} className="flex gap-3 border-b border-slate-100 pb-4 text-sm leading-7 text-slate-700 last:border-0">
                <span className="mt-1 text-xs font-black text-emerald-600">0{index + 1}</span>
                <p>{problem}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-7 sm:py-9">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-bold text-emerald-700">من وجهة نظر المدير المالي</p>
            <h2 className="mt-1 text-xl font-black sm:text-2xl">ماذا يقول التقرير المالي؟</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">لا نكتفي بعرض رقم؛ نقرأ الاتجاه، نبحث عن سببه، ونحوّله إلى نقطة واضحة يمكن للإدارة أن تتصرف بناءً عليها.</p>
          </div>
          <FinancialReport sector={sector} />
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-7 sm:py-9">
        <Container>
          <div className="mb-5">
            <p className="text-xs font-bold text-emerald-700">من وجهة نظر المحاسب</p>
            <h2 className="mt-1 text-xl font-black sm:text-2xl">ماذا تعني الأرقام لرب المال؟</h2>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white">
            {sector.meanings.map((item, index) => (
              <div key={item.metric} className="grid gap-3 px-4 py-4 md:grid-cols-[.8fr_1.2fr_1.1fr] md:px-6">
                <div className="font-bold text-slate-900"><span className="ml-2 text-xs text-emerald-600">0{index + 1}</span>{item.metric}</div>
                <p className="text-sm leading-6 text-slate-600">{item.meaning}</p>
                <p className="text-sm font-semibold leading-6 text-slate-800"><span className="text-emerald-700">القرار المحتمل:</span> {item.decision}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-7 sm:py-9">
        <Container>
          <div className="mb-5">
            <p className="text-xs font-bold text-emerald-700">من وجهة نظرك كعميل</p>
            <h2 className="mt-1 text-xl font-black sm:text-2xl">ماذا ستحصل عليه؟</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">أشياء ملموسة تساعدك على معرفة وضع نشاطك بدل أن تبقى الأرقام متفرقة بين ملفات وفواتير وحسابات.</p>
          </div>

          <div className="grid gap-x-10 gap-y-3 border-y border-slate-200 py-1 md:grid-cols-2">
            {[...commonOutputs, ...sector.outputs].map((output, index) => (
              <div key={`${output}-${index}`} className="flex gap-3 border-b border-slate-100 py-3 text-sm leading-6 text-slate-700 last:border-0">
                <span className="font-bold text-emerald-700">{String(index + 1).padStart(2, '0')}</span>
                <span>{output}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-7 sm:py-9">
        <Container>
          <div className="mb-5 max-w-3xl">
            <p className="text-xs font-bold text-emerald-700">العمل معًا</p>
            <h2 className="mt-1 text-xl font-black sm:text-2xl">كيف نعمل؟</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">وسوف نحدد لاحقًا الطريقة التي تناسبنا معًا حسب نشاطك، حجم العمل، الأنظمة والمستندات المتاحة.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4">
            {commonProcess.map((step, index) => (
              <div key={step} className="border-b border-slate-200 pb-3">
                <p className="text-xs font-black text-emerald-700">{String(index + 1).padStart(2, '0')}</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-7 text-white sm:py-9">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold text-emerald-400">لماذا القائد؟</p>
              <h2 className="mt-1 text-xl font-black sm:text-2xl">لأن هدفنا أن تتحول أرقام نشاطك إلى صورة مفهومة وقرار أفضل.</h2>
              <p className="mt-2 text-sm leading-7 text-slate-300">نبدأ من المستندات والتسجيل والمتابعة، ثم نصل إلى التقارير والقوائم والمؤشرات التي يحتاجها صاحب النشاط فعلًا.</p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400">
              <MessageCircle className="h-5 w-5" /> تحدث معنا عن نشاطك
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
