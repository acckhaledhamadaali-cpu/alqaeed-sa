import { ArrowRight, CheckCircle2, MessageCircle, TrendingDown, TrendingUp } from 'lucide-react';
import Container from '../../../components/Container';
import SectionWrapper from '../../../components/SectionWrapper';

type KPI = {
  label: string;
  value: string;
  note: string;
  trend?: 'up' | 'down';
};

type Meaning = {
  number: string;
  title: string;
  text: string;
  decision: string;
};

type Sector = {
  slug: string;
  title: string;
  question: string;
  image: string;
  problems: string[];
  kpis: KPI[];
  meanings: Meaning[];
  outputs: string[];
  message: string;
};

const commonProcess = [
  'تواصل معنا',
  'نفهم المشكلة واحتياج المنشأة',
  'نطلب المستندات والبيانات اللازمة',
  'التقييم الأولي للوضع المالي',
  'ربط النظام والبيانات المطلوبة',
  'بدء التسجيل والتنظيم والمتابعة',
  'إصدار التقرير الأول بصورة واضحة',
  'متابعة يومية للأرقام والتغيرات',
];

const sectors: Record<string, Sector> = {
  'restaurants-cafes': {
    slug: 'restaurants-cafes',
    title: 'الإدارة المالية للمطاعم والكافيهات',
    question: 'هل مطعمك يحقق ربحًا فعليًا؟',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=3840&q=90',
    problems: [
      'المبيعات جيدة لكن صافي الربح أقل من المتوقع.',
      'تكلفة الطعام والهدر والمخزون تستهلك جزءًا كبيرًا من الربح.',
      'بعض الأصناف تحقق مبيعات عالية لكن هامش ربحها ضعيف.',
      'المصروفات ترتفع ولا توجد صورة واضحة عن أثرها على الربحية.',
      'صعوبة معرفة السيولة المتاحة وما يمكن إنفاقه أو استثماره.',
    ],
    kpis: [
      { label: 'المبيعات', value: '285,000 ر.س', note: 'مثال توضيحي' },
      { label: 'تكلفة المبيعات', value: '112,000 ر.س', note: 'مثال توضيحي', trend: 'up' },
      { label: 'هامش الربح', value: '39.3%', note: 'مثال توضيحي', trend: 'down' },
      { label: 'المصروفات', value: '84,000 ر.س', note: 'مثال توضيحي' },
      { label: 'صافي الربح', value: '89,000 ر.س', note: 'مثال توضيحي', trend: 'up' },
      { label: 'التدفق النقدي', value: '42,000 ر.س', note: 'مثال توضيحي' },
      { label: 'المخزون', value: '67,000 ر.س', note: 'مثال توضيحي' },
      { label: 'الهدر', value: '8,500 ر.س', note: 'مثال توضيحي', trend: 'up' },
    ],
    meanings: [
      { number: '39%', title: 'تكلفة الطعام', text: 'ارتفاع التكلفة قد يشير إلى مشكلة في أسعار الشراء أو الوصفات أو الحصص أو الهدر.', decision: 'نحدد سبب الارتفاع ونقيس أثر الإجراء على هامش الربح.' },
      { number: '67K', title: 'المخزون', text: 'المخزون ليس مجرد كمية؛ هو أموال مرتبطة بالنشاط وقد يكون جزء منه بطيء الحركة.', decision: 'نحدد الأصناف التي تحتاج إلى مراجعة ونربط الشراء بالحاجة الفعلية.' },
      { number: '42K', title: 'التدفق النقدي', text: 'وجود ربح محاسبي لا يعني بالضرورة توفر نفس المبلغ نقدًا.', decision: 'نراقب السيولة والتزامات المنشأة قبل اتخاذ قرارات الإنفاق.' },
    ],
    outputs: ['قائمة مالية واضحة ومفهومة', 'لوحة مؤشرات للمبيعات والتكلفة والربح والسيولة', 'تحليل تكلفة الطعام والهدر والمخزون', 'تحليل ربحية الأصناف والنشاط', 'تقارير تساعد على التسعير والشراء وضبط المصروفات', 'متابعة يومية للتغيرات والأرقام المهمة'],
    message: 'السلام عليكم، أريد معرفة الأرقام والمؤشرات التي يجب متابعتها في مطعمي أو الكافيه.',
  },
  contracting: {
    slug: 'contracting',
    title: 'الإدارة المالية لقطاع المقاولات',
    question: 'هل تعرف ربحية كل مشروع قبل أن تنتهي منه؟',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=3840&q=90',
    problems: ['المشروع يبدو مربحًا لكن التكلفة الفعلية غير واضحة.', 'المصاريف والتكاليف موزعة ولا يمكن معرفة تكلفة كل مشروع بدقة.', 'التدفقات النقدية لا تتوافق دائمًا مع حجم الأعمال المنفذة.', 'تأخر المستخلصات والتحصيل يضغط على السيولة.', 'صعوبة معرفة أثر أي تأخير أو زيادة تكلفة على ربحية المشروع.'],
    kpis: [
      { label: 'قيمة العقود', value: '1.80M ر.س', note: 'مثال توضيحي' },
      { label: 'تكلفة منفذة', value: '1.02M ر.س', note: 'مثال توضيحي' },
      { label: 'نسبة الإنجاز', value: '62%', note: 'مثال توضيحي' },
      { label: 'الربحية المتوقعة', value: '18.4%', note: 'مثال توضيحي' },
      { label: 'المستحق للتحصيل', value: '265K ر.س', note: 'مثال توضيحي', trend: 'up' },
      { label: 'التدفق النقدي', value: '118K ر.س', note: 'مثال توضيحي' },
      { label: 'التزامات قريبة', value: '174K ر.س', note: 'مثال توضيحي' },
      { label: 'انحراف التكلفة', value: '+7.2%', note: 'مثال توضيحي', trend: 'up' },
    ],
    meanings: [
      { number: '+7.2%', title: 'انحراف التكلفة', text: 'زيادة التكلفة عن الخطة قد تقلل هامش المشروع إذا لم يتم اكتشافها مبكرًا.', decision: 'نحدد مصدر الانحراف ونراجع أثره على الربحية المتوقعة.' },
      { number: '62%', title: 'نسبة الإنجاز', text: 'نسبة الإنجاز وحدها لا تكفي؛ يجب مقارنتها بالتكلفة والإيراد والتحصيل.', decision: 'نربط تقدم المشروع بالأرقام لنكشف مبكرًا عن أي ضغط مالي.' },
      { number: '265K', title: 'المستحق للتحصيل', text: 'المبلغ المستحق قد يكون سببًا رئيسيًا في ضغط السيولة حتى مع وجود ربح.', decision: 'نحدد الأولويات ونربط التحصيل بالتزامات المشروع.' },
    ],
    outputs: ['ربحية واضحة لكل مشروع', 'متابعة تكاليف المشروع مقابل الخطة', 'تحليل الإنجاز والتكلفة والربحية', 'متابعة المستخلصات والتحصيل والسيولة', 'تقارير تساعد الإدارة على اكتشاف الانحرافات مبكرًا', 'متابعة يومية للأرقام المؤثرة في القرار'],
    message: 'السلام عليكم، أريد معرفة كيفية متابعة ربحية مشاريعي وتكاليفها وسيولتها.',
  },
  'trade-retail': {
    slug: 'trade-retail',
    title: 'الإدارة المالية للتجارة والتجزئة',
    question: 'هل مبيعاتك المرتفعة تتحول فعلًا إلى ربح؟',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=3840&q=90',
    problems: ['ارتفاع المبيعات دون وضوح في هامش الربح الحقيقي.', 'المخزون يستهلك السيولة وقد يحتوي على أصناف بطيئة الحركة.', 'تغير أسعار الشراء يؤثر على الربحية دون ملاحظة سريعة.', 'صعوبة معرفة المنتجات أو الفروع الأكثر ربحية.', 'قرارات الشراء والتسعير تتم أحيانًا دون صورة مالية متكاملة.'],
    kpis: [
      { label: 'المبيعات', value: '420K ر.س', note: 'مثال توضيحي' },
      { label: 'تكلفة المبيعات', value: '276K ر.س', note: 'مثال توضيحي', trend: 'up' },
      { label: 'الهامش', value: '34.3%', note: 'مثال توضيحي' },
      { label: 'المخزون', value: '310K ر.س', note: 'مثال توضيحي' },
      { label: 'الأصناف البطيئة', value: '14%', note: 'مثال توضيحي', trend: 'up' },
      { label: 'المصروفات', value: '82K ر.س', note: 'مثال توضيحي' },
      { label: 'صافي الربح', value: '62K ر.س', note: 'مثال توضيحي', trend: 'up' },
      { label: 'السيولة', value: '95K ر.س', note: 'مثال توضيحي' },
    ],
    meanings: [
      { number: '34%', title: 'هامش الربح', text: 'المبيعات المرتفعة لا تعني بالضرورة ربحًا مرتفعًا إذا كانت تكلفة الشراء تستهلك الهامش.', decision: 'نحدد المنتجات التي تحتاج إلى إعادة تسعير أو مراجعة تكلفة.' },
      { number: '310K', title: 'المخزون', text: 'جزء من السيولة قد يكون مرتبطًا بمخزون لا يتحرك بالسرعة المطلوبة.', decision: 'نحدد المخزون البطيء ونربط قرارات الشراء بالدوران والطلب.' },
      { number: '14%', title: 'أصناف بطيئة الحركة', text: 'بطء الحركة قد يعني تجميد رأس المال وارتفاع مخاطر الخصم أو التلف.', decision: 'نحدد الأصناف التي تحتاج إلى تصرف بدل استمرار تجميد السيولة.' },
    ],
    outputs: ['تحليل المبيعات وتكلفة المبيعات', 'متابعة هامش الربح حسب المنتج أو النشاط', 'تحليل المخزون وسرعة الدوران', 'متابعة المصروفات والسيولة', 'تقارير تدعم قرارات الشراء والتسعير', 'مؤشرات مالية واضحة للمتابعة اليومية'],
    message: 'السلام عليكم، أريد معرفة هامش الربح والمخزون والسيولة في نشاطي التجاري.',
  },
  'pharmacies-health': {
    slug: 'pharmacies-health',
    title: 'الإدارة المالية للصيدليات والأنشطة الصحية',
    question: 'هل تعرف أين يذهب هامش ربح نشاطك الصحي؟',
    image: 'https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?auto=format&fit=crop&w=3840&q=90',
    problems: ['المبيعات لا تعكس وحدها الربحية الفعلية للنشاط.', 'المخزون قد يضم أصنافًا بطيئة الحركة أو يستهلك سيولة كبيرة.', 'ارتفاع المصروفات أو تكلفة المبيعات قد لا يظهر أثره سريعًا.', 'صعوبة متابعة ربحية النشاط مع كثرة العمليات اليومية.', 'الحاجة إلى مؤشرات مالية واضحة بدل الاعتماد على المبيعات فقط.'],
    kpis: [
      { label: 'المبيعات', value: '360K ر.س', note: 'مثال توضيحي' },
      { label: 'تكلفة المبيعات', value: '248K ر.س', note: 'مثال توضيحي', trend: 'up' },
      { label: 'الهامش', value: '31.1%', note: 'مثال توضيحي' },
      { label: 'المخزون', value: '185K ر.س', note: 'مثال توضيحي' },
      { label: 'بطيء الحركة', value: '11%', note: 'مثال توضيحي', trend: 'up' },
      { label: 'المصروفات', value: '61K ر.س', note: 'مثال توضيحي' },
      { label: 'صافي الربح', value: '51K ر.س', note: 'مثال توضيحي', trend: 'up' },
      { label: 'السيولة', value: '73K ر.س', note: 'مثال توضيحي' },
    ],
    meanings: [
      { number: '31%', title: 'هامش الربح', text: 'الهامش يحتاج إلى القراءة مع تكلفة المشتريات والمصروفات والمخزون.', decision: 'نحدد مصادر الضغط على الربحية ونقيس أثر أي تعديل.' },
      { number: '185K', title: 'المخزون', text: 'ارتفاع المخزون قد يعني أموالًا غير مستغلة بالشكل الأمثل.', decision: 'نراقب قيمة المخزون وحركته ونحدد نقاط المراجعة.' },
      { number: '11%', title: 'بطيء الحركة', text: 'الأصناف البطيئة قد تجمد السيولة وتؤثر على كفاءة رأس المال العامل.', decision: 'نحدد الأصناف التي تستحق قرارًا بدل تركها دون متابعة.' },
    ],
    outputs: ['متابعة المبيعات والتكلفة والهامش', 'تحليل المخزون وحركته', 'متابعة المصروفات والسيولة', 'تقارير مالية وإدارية مفهومة', 'مؤشرات تساعد على ضبط الربحية ورأس المال العامل', 'متابعة مستمرة للأرقام المهمة'],
    message: 'السلام عليكم، أريد معرفة أهم المؤشرات المالية التي يجب متابعتها في الصيدلية أو النشاط الصحي.',
  },
  'services-professions': {
    slug: 'services-professions',
    title: 'الإدارة المالية للخدمات والمهن',
    question: 'أي خدمة تحقق لك أعلى ربح؟ وأين تذهب إيراداتك؟',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=3840&q=90',
    problems: ['الإيرادات موجودة لكن ربحية كل خدمة غير واضحة.', 'تأخر التحصيل يضغط على السيولة.', 'المصروفات متفرقة ويصعب ربطها بالخدمات.', 'صعوبة معرفة تكلفة تقديم الخدمة وهامشها.', 'اتخاذ قرارات التسعير أو التوسع دون أرقام كافية.'],
    kpis: [
      { label: 'الإيرادات', value: '210K ر.س', note: 'مثال توضيحي' },
      { label: 'تكلفة الخدمات', value: '78K ر.س', note: 'مثال توضيحي', trend: 'up' },
      { label: 'هامش الربح', value: '62.9%', note: 'مثال توضيحي' },
      { label: 'المصروفات', value: '69K ر.س', note: 'مثال توضيحي' },
      { label: 'المستحق للتحصيل', value: '54K ر.س', note: 'مثال توضيحي', trend: 'up' },
      { label: 'صافي الربح', value: '63K ر.س', note: 'مثال توضيحي', trend: 'up' },
      { label: 'تكلفة الخدمة', value: '37%', note: 'مثال توضيحي' },
      { label: 'السيولة', value: '48K ر.س', note: 'مثال توضيحي' },
    ],
    meanings: [
      { number: '63%', title: 'هامش الربح', text: 'ارتفاع الهامش لا يعني أن جميع الخدمات متساوية في الربحية.', decision: 'نقارن ربحية الخدمات لمعرفة أين يستحق الوقت والموارد أن تذهب.' },
      { number: '54K', title: 'مستحق للتحصيل', text: 'الإيراد المسجل لا يصبح سيولة إلا بعد التحصيل.', decision: 'نحدد المبالغ التي تحتاج إلى متابعة ونربطها بالسيولة.' },
      { number: '37%', title: 'تكلفة الخدمة', text: 'معرفة تكلفة تقديم الخدمة تساعد على التسعير والتوسع بصورة أكثر أمانًا.', decision: 'نقيس التكلفة ونحدد ما إذا كان السعر الحالي يحقق العائد المطلوب.' },
    ],
    outputs: ['تحليل ربحية الخدمات', 'متابعة الإيرادات والتحصيل', 'تحليل المصروفات وتكلفة تقديم الخدمة', 'تقارير مالية وإدارية واضحة', 'مؤشرات تساعد على التسعير والتوسع', 'متابعة مستمرة للسيولة والربحية'],
    message: 'السلام عليكم، أريد معرفة ربحية خدماتي وتكلفة التشغيل والسيولة بشكل أوضح.',
  },
  'startups-growing': {
    slug: 'startups-growing',
    title: 'الإدارة المالية للشركات الناشئة والمتنامية',
    question: 'كم لديك من الوقت قبل أن تحتاج إلى تمويل أو خفض المصروفات؟',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=3840&q=90',
    problems: ['النمو سريع لكن الصورة المالية لا تتطور بنفس السرعة.', 'معدل حرق النقد غير واضح بشكل مستمر.', 'صعوبة معرفة مدة بقاء السيولة الحالية.', 'المصروفات ترتفع قبل معرفة أثرها على المدرج النقدي.', 'الحاجة إلى ميزانية وتوقعات تساعد الإدارة على التخطيط.'],
    kpis: [
      { label: 'الإيرادات الشهرية', value: '320K ر.س', note: 'مثال توضيحي', trend: 'up' },
      { label: 'المصروفات الشهرية', value: '410K ر.س', note: 'مثال توضيحي', trend: 'up' },
      { label: 'حرق النقد', value: '90K ر.س', note: 'مثال توضيحي', trend: 'up' },
      { label: 'السيولة', value: '1.08M ر.س', note: 'مثال توضيحي' },
      { label: 'المدرج النقدي', value: '12 شهرًا', note: 'مثال توضيحي' },
      { label: 'نمو الإيرادات', value: '18%', note: 'مثال توضيحي', trend: 'up' },
      { label: 'المصروفات الثابتة', value: '230K ر.س', note: 'مثال توضيحي' },
      { label: 'الربحية', value: '-90K ر.س', note: 'مثال توضيحي', trend: 'down' },
    ],
    meanings: [
      { number: '90K', title: 'حرق النقد الشهري', text: 'هذا الرقم يوضح سرعة استهلاك السيولة الحالية وليس مجرد حجم المصروفات.', decision: 'نراقب أسباب الحرق ونقيس أثر أي خفض أو استثمار جديد.' },
      { number: '12 شهرًا', title: 'المدرج النقدي', text: 'يعطي الإدارة تصورًا عن المدة المتاحة قبل الحاجة إلى تغيير الخطة أو التمويل.', decision: 'نستخدمه للتخطيط بدل انتظار ضغط السيولة.' },
      { number: '18%', title: 'نمو الإيرادات', text: 'النمو مهم، لكن يجب أن نعرف هل ينمو النشاط بطريقة صحية مقارنة بالتكلفة والسيولة.', decision: 'نقارن النمو بالمصروفات والحرق للوصول إلى صورة متوازنة.' },
    ],
    outputs: ['متابعة السيولة وحرق النقد', 'حساب المدرج النقدي والتوقعات', 'تقارير أداء مالية للإدارة', 'ميزانية وتخطيط مالي عملي', 'تحليل المصروفات والنمو والربحية', 'مؤشرات تساعد على قرارات التوسع والتمويل'],
    message: 'السلام عليكم، أريد معرفة معدل حرق النقد والمدرج النقدي وأهم المؤشرات المالية لشركتي.',
  },
};

const whatsappNumber = '966511294383';

function TrendIcon({ trend }: { trend?: KPI['trend'] }) {
  if (!trend) return null;
  const Icon = trend === 'up' ? TrendingUp : TrendingDown;
  return <Icon className="h-4 w-4" aria-hidden="true" />;
}

export default function SectorDetailPage({ slug }: { slug: string }) {
  const sector = sectors[slug];

  if (!sector) {
    return (
      <SectionWrapper variant="white" spacing="large">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold text-text-primary">القطاع غير موجود</h1>
            <a href="/#sectors-section-wrapper" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white">
              العودة إلى القطاعات <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </SectionWrapper>
    );
  }

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(sector.message)}`;

  return (
    <div className="bg-white" dir="rtl">
      <SectionWrapper variant="white" spacing="default">
        <Container>
          <a href="/#sectors-section-wrapper" className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-primary">
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
            العودة إلى القطاعات
          </a>

          <div className="overflow-hidden rounded-3xl border border-border-subtle bg-white shadow-sm">
            <div className="relative aspect-[16/7] min-h-[230px] overflow-hidden bg-surface-subtle md:min-h-[360px]">
              <img
                src={sector.image}
                srcSet={`${sector.image.replace('w=3840', 'w=768')} 768w, ${sector.image.replace('w=3840', 'w=1280')} 1280w, ${sector.image.replace('w=3840', 'w=1920')} 1920w, ${sector.image} 3840w`}
                sizes="100vw"
                alt={sector.title}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 md:p-10">
                <p className="mb-2 text-sm font-semibold text-white/85">القائد | الإدارة المالية المتكاملة عن بعد</p>
                <h1 className="max-w-4xl text-2xl font-bold leading-tight text-white sm:text-3xl md:text-5xl">{sector.question}</h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/90 sm:text-base">{sector.title}</p>
              </div>
            </div>

            <section className="p-5 sm:p-8 md:p-10">
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-sm font-bold text-primary">أولًا: هل تواجه هذه المشاكل؟</p>
                <h2 className="mt-2 text-2xl font-bold text-text-primary sm:text-3xl">مشاكل تظهر في الأرقام قبل أن تظهر في النشاط</h2>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {sector.problems.map((item) => (
                  <div key={item} className="rounded-2xl border border-border-subtle bg-surface-subtle p-4 text-sm leading-6 text-text-primary">
                    <CheckCircle2 className="mb-2 h-5 w-5 text-primary" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="border-y border-border-subtle bg-surface-subtle p-5 sm:p-8 md:p-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold text-primary">لوحة أرقام</p>
                  <h2 className="mt-1 text-2xl font-bold text-text-primary">الأرقام التي تحتاج أن تراها</h2>
                </div>
                <span className="text-xs font-medium text-text-secondary">أمثلة توضيحية وليست بيانات منشأة فعلية</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                {sector.kpis.map((kpi) => (
                  <div key={kpi.label} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                    <div className="flex items-center justify-between gap-2 text-xs font-semibold text-text-secondary">
                      <span>{kpi.label}</span>
                      <span className="text-primary"><TrendIcon trend={kpi.trend} /></span>
                    </div>
                    <div className="mt-2 text-lg font-extrabold tracking-tight text-text-primary sm:text-xl">{kpi.value}</div>
                    <div className="mt-1 text-[11px] text-text-secondary">{kpi.note}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-5 sm:p-8 md:p-10">
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-sm font-bold text-primary">من الرقم إلى القرار</p>
                <h2 className="mt-2 text-2xl font-bold text-text-primary sm:text-3xl">ماذا تعني الأرقام؟</h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-text-secondary">الهدف ليس جمع أرقام أكثر؛ الهدف أن تعرف ما الذي يحدث في منشأتك وما الخطوة التي تستحق أن تتخذها.</p>
              </div>
              <div className="mt-7 grid gap-4 lg:grid-cols-3">
                {sector.meanings.map((item) => (
                  <article key={item.number} className="rounded-2xl border border-border-subtle p-5">
                    <div className="text-3xl font-extrabold text-primary">{item.number}</div>
                    <h3 className="mt-2 text-lg font-bold text-text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{item.text}</p>
                    <div className="mt-4 rounded-xl bg-surface-subtle p-3 text-sm font-semibold leading-6 text-text-primary">
                      <span className="text-primary">القرار المحتمل:</span> {item.decision}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="border-t border-border-subtle bg-surface-subtle p-5 sm:p-8 md:p-10">
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-sm font-bold text-primary">مخرجات العمل</p>
                <h2 className="mt-2 text-2xl font-bold text-text-primary sm:text-3xl">ماذا ستحصل عليه؟</h2>
              </div>
              <div className="mx-auto mt-7 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {sector.outputs.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm font-semibold leading-6 text-text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-5 sm:p-8 md:p-10">
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-sm font-bold text-primary">طريقة العمل</p>
                <h2 className="mt-2 text-2xl font-bold text-text-primary sm:text-3xl">كيف نعمل؟</h2>
              </div>
              <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {commonProcess.map((step, index) => (
                  <div key={step} className="relative rounded-2xl border border-border-subtle bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white">{index + 1}</span>
                      <span className="text-sm font-bold leading-6 text-text-primary">{step}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-border-subtle bg-surface-subtle p-5 sm:p-8 md:p-10">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-bold text-primary">لماذا القائد؟</p>
                <h2 className="mt-2 text-2xl font-bold text-text-primary sm:text-3xl">لأنك لا تحتاج أرقامًا أكثر... تحتاج أن تعرف ماذا تفعل بها.</h2>
                <div className="mt-6 grid gap-3 text-right sm:grid-cols-2">
                  {['نفهم طبيعة النشاط ونركز على أرقامه المهمة.', 'نحوّل البيانات إلى تقارير ومؤشرات مفهومة.', 'المتابعة مستمرة وليست مجرد إصدار تقرير.', 'الهدف النهائي قرارات أوضح مبنية على أرقام واضحة.'].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-sm font-semibold leading-6 text-text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-primary p-6 text-center sm:p-10">
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">هل تريد أن تعرف الوضع المالي الحقيقي لمنشأتك؟</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/90">ناقشنا احتياج منشأتك، وسنحدد معك الأرقام والمؤشرات التي تستحق المتابعة.</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary shadow-sm transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                ابدأ النقاش عبر واتساب
              </a>
            </section>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
}
