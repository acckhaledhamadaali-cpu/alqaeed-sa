import { ArrowRight, MessageCircle, TrendingDown, TrendingUp } from 'lucide-react';
import Container from '../../../components/Container';

type ReportRow = { label: string; value: string; change: string; direction?: 'up' | 'down'; width: string };
type Meaning = { metric: string; meaning: string; decision: string };
type Sector = { title: string; question: string; image: string; problems: string[]; reportTitle: string; reportRows: ReportRow[]; meanings: Meaning[]; outputs: string[]; message: string };

const commonProcess = ['تواصل معنا','نحدد المشكلة','نطلب البيانات والمستندات','التقييم الأولي','ربط النظام','بدء التسجيل والمتابعة','التقرير الأول','متابعة يومية'];

const sectors: Record<string, Sector> = {
  'restaurants-cafes': {
    title:'الإدارة المالية للمطاعم والكافيهات', question:'هل تعرف أين يذهب ربح مطعمك؟',
    image:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=85',
    problems:['المبيعات جيدة لكن الربح الفعلي أقل من المتوقع.','تكلفة الطعام والهدر ترتفع دون معرفة السبب.','المخزون يستهلك السيولة وبعض الأصناف بطيئة الحركة.','لا توجد صورة واضحة عن ربحية الأصناف أو الفروع.'],
    reportTitle:'تقرير مالي مختصر — مثال توضيحي',
    reportRows:[['المبيعات','285,000 ر.س','+8.4%','up','86%'],['تكلفة الطعام','112,000 ر.س','39.3%','down','63%'],['المصروفات التشغيلية','84,000 ر.س','+4.1%','up','47%'],['صافي الربح','89,000 ر.س','31.2%','up','58%'],['التدفق النقدي','42,000 ر.س','متاح',undefined,'34%'],['المخزون','67,000 ر.س','يحتاج متابعة','down','42%']].map(([label,value,change,direction,width])=>({label,value,change,direction:direction as 'up'|'down'|undefined,width})),
    meanings:[
      {metric:'تكلفة الطعام 39.3%',meaning:'كل ارتفاع بسيط في التكلفة يؤثر مباشرة في هامش الربح.',decision:'مراجعة الشراء والوصفات والحصص والهدر.'},
      {metric:'المخزون 67K',meaning:'جزء من رأس المال موجود داخل المخزون وليس نقدًا.',decision:'تحديد الأصناف البطيئة وضبط دورة الشراء.'},
      {metric:'التدفق 42K',meaning:'الربح المحاسبي لا يعني أن النقدية المتاحة بنفس القيمة.',decision:'ترتيب الإنفاق والالتزامات وفق السيولة الفعلية.'}
    ],
    outputs:['قائمة دخل واضحة','تقرير تكلفة الطعام والهدر','تحليل ربحية الأصناف والفروع','تقرير السيولة والمخزون','مؤشرات تساعدك على التسعير والشراء وضبط المصروفات'],
    message:'السلام عليكم، أريد معرفة الوضع المالي الحقيقي لمطعمي والمؤشرات التي يجب متابعتها.'
  },
  contracting: {
    title:'الإدارة المالية لقطاع المقاولات', question:'هل تعرف ربحية مشروعك قبل أن ينتهي؟',
    image:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=85',
    problems:['تكلفة المشروع الفعلية لا تظهر بوضوح.','زيادة التكاليف قد تمر قبل اكتشاف أثرها على الربح.','المستخلصات والتحصيل تضغط على السيولة.','صعوبة مقارنة نسبة الإنجاز بالتكلفة والربحية المتوقعة.'],
    reportTitle:'تقرير المشروع المالي — مثال توضيحي',
    reportRows:[['قيمة العقود','1.80M ر.س','إجمالي',undefined,'92%'],['التكلفة المنفذة','1.02M ر.س','56.7%','up','57%'],['نسبة الإنجاز','62%','مقابل التكلفة',undefined,'62%'],['الربحية المتوقعة','18.4%','مستهدف','up','49%'],['المستحق للتحصيل','265K ر.س','ضغط سيولة','down','39%'],['انحراف التكلفة','+7.2%','تحذير','up','28%']].map(([label,value,change,direction,width])=>({label,value,change,direction:direction as 'up'|'down'|undefined,width})),
    meanings:[
      {metric:'انحراف التكلفة +7.2%',meaning:'الزيادة قد تقلل هامش المشروع إذا استمرت.',decision:'تحديد مصدر الانحراف وإعادة تقدير ربحية المشروع.'},
      {metric:'إنجاز 62%',meaning:'لا يكفي معرفة الإنجاز دون ربطه بالتكلفة والتحصيل.',decision:'مقارنة الإنجاز بالتكلفة والإيراد والمستخلصات.'},
      {metric:'تحصيل 265K',meaning:'الأرباح لا تحل مشكلة السيولة إذا تأخر التحصيل.',decision:'ترتيب التحصيل والالتزامات حسب الأولوية.'}
    ],
    outputs:['ربحية كل مشروع','تقرير تكلفة مقابل الإنجاز','متابعة المستخلصات والتحصيل','توقع التدفق النقدي','كشف مبكر لانحرافات التكلفة'],
    message:'السلام عليكم، أريد معرفة ربحية مشاريعي والتكاليف والسيولة بشكل واضح.'
  },
  'trade-retail': {
    title:'الإدارة المالية للتجارة والتجزئة', question:'هل المبيعات المرتفعة تتحول فعلًا إلى ربح؟',
    image:'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2400&q=85',
    problems:['ارتفاع المبيعات دون وضوح في الهامش الحقيقي.','المخزون يجمّد جزءًا كبيرًا من رأس المال.','تغير تكلفة الشراء يؤثر على الربح بسرعة.','صعوبة معرفة المنتجات أو الفروع الأكثر ربحية.'],
    reportTitle:'تقرير المبيعات والربحية — مثال توضيحي',
    reportRows:[['المبيعات','420K ر.س','+12.5%','up','90%'],['تكلفة المبيعات','276K ر.س','65.7%','down','66%'],['هامش الربح','34.3%','تحت المتابعة',undefined,'43%'],['المخزون','310K ر.س','مرتفع','down','72%'],['أصناف بطيئة','14%','تحتاج قرار','down','28%'],['صافي الربح','62K ر.س','14.8%','up','34%']].map(([label,value,change,direction,width])=>({label,value,change,direction:direction as 'up'|'down'|undefined,width})),
    meanings:[
      {metric:'الهامش 34.3%',meaning:'المبيعات وحدها لا تكشف جودة الربح.',decision:'مراجعة تسعير المنتجات وتكلفة الشراء.'},
      {metric:'المخزون 310K',meaning:'رأس مال كبير مرتبط ببضاعة لم تتحول بعد إلى نقد.',decision:'تحديد البطيء وربط الشراء بالدوران.'},
      {metric:'أصناف بطيئة 14%',meaning:'السيولة معرضة للتجميد أو الخصم أو التلف.',decision:'تحديد الأصناف التي تحتاج تصرفًا سريعًا.'}
    ],
    outputs:['قائمة دخل مختصرة','تحليل هامش المنتجات والفروع','تقرير المخزون والدوران','تحليل المصروفات والسيولة','مؤشرات تدعم قرارات الشراء والتسعير'],
    message:'السلام عليكم، أريد تحليل مبيعاتي ومخزوني وهامش الربح لاتخاذ قرارات أفضل.'
  },
  'pharmacies-health': {
    title:'الإدارة المالية للصيدليات والمنشآت الصحية', question:'هل تعرف أي جزء من نشاطك يحقق الربح فعلًا؟',
    image:'https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?auto=format&fit=crop&w=2400&q=85',
    problems:['المبيعات لا تعكس وحدها الربحية الحقيقية.','المخزون والأصناف بطيئة الحركة تربط السيولة.','الخصومات وتغير تكلفة الشراء تضغط على الهامش.','صعوبة معرفة أثر المصروفات على ربحية النشاط.'],
    reportTitle:'تقرير مالي للنشاط الصحي — مثال توضيحي',
    reportRows:[['المبيعات','360K ر.س','+6.8%','up','82%'],['تكلفة المبيعات','258K ر.س','71.7%','down','72%'],['الهامش','28.3%','تحت المتابعة',undefined,'37%'],['المخزون','195K ر.س','مرتفع','down','61%'],['مصروفات التشغيل','54K ر.س','+3.2%','up','31%'],['صافي الربح','48K ر.س','13.3%','up','27%']].map(([label,value,change,direction,width])=>({label,value,change,direction:direction as 'up'|'down'|undefined,width})),
    meanings:[
      {metric:'الهامش 28.3%',meaning:'ارتفاع المبيعات مع انخفاض الهامش قد لا يحسن الربح.',decision:'تحليل تكلفة الشراء والخصومات وربحية الأصناف.'},
      {metric:'المخزون 195K',meaning:'السيولة قد تكون مرتبطة بأصناف لا تتحرك بالسرعة المطلوبة.',decision:'متابعة الدوران والأصناف البطيئة.'},
      {metric:'المصروفات 54K',meaning:'زيادة المصروفات تقلل ما يتبقى من الهامش.',decision:'مقارنة المصروفات بالعائد والأثر على الربحية.'}
    ],
    outputs:['قائمة دخل واضحة','تحليل الهامش والتكلفة','تقرير المخزون والدوران','متابعة المصروفات والسيولة','مؤشرات تساعد على ضبط التسعير والشراء'],
    message:'السلام عليكم، أريد معرفة ربحية نشاطي الصحي ومؤشرات المخزون والسيولة.'
  },
  'services-professions': {
    title:'الإدارة المالية للخدمات والمهن', question:'هل تعرف تكلفة الخدمة التي تقدمها وربحيتها؟',
    image:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=85',
    problems:['الإيرادات موجودة لكن تكلفة تقديم الخدمة غير واضحة.','المصروفات الثابتة والمتغيرة تقلل الربحية دون متابعة.','صعوبة معرفة الخدمات أو العملاء الأكثر ربحية.','التحصيل قد يتأخر رغم تسجيل الإيراد.'],
    reportTitle:'تقرير ربحية الخدمات — مثال توضيحي',
    reportRows:[['الإيرادات','240K ر.س','+10.2%','up','78%'],['تكلفة تقديم الخدمة','92K ر.س','38.3%','down','39%'],['المصروفات','71K ر.س','+5.6%','up','30%'],['هامش التشغيل','32.1%','تحت المتابعة',undefined,'45%'],['المستحق للتحصيل','58K ر.س','متأخر','down','24%'],['صافي الربح','77K ر.س','32.1%','up','31%']].map(([label,value,change,direction,width])=>({label,value,change,direction:direction as 'up'|'down'|undefined,width})),
    meanings:[
      {metric:'تكلفة الخدمة 38.3%',meaning:'ارتفاع التكلفة قد يعني أن بعض الخدمات لا تحقق الهامش المتوقع.',decision:'حساب ربحية كل خدمة ومراجعة التسعير والتكلفة.'},
      {metric:'تحصيل 58K',meaning:'الإيراد المسجل لا يعني بالضرورة نقدية متاحة.',decision:'ترتيب التحصيل وربطه بالالتزامات.'},
      {metric:'هامش التشغيل 32.1%',meaning:'المهم ليس حجم الإيراد فقط بل ما يتبقى بعد تكلفة التشغيل.',decision:'تركيز النمو على الخدمات والعملاء الأكثر ربحية.'}
    ],
    outputs:['تحليل ربحية الخدمات','تقرير الإيرادات والتحصيل','متابعة المصروفات','مؤشرات تساعد على التسعير','صورة واضحة عن السيولة والربحية'],
    message:'السلام عليكم، أريد معرفة ربحية خدماتي وتكلفة التشغيل والتحصيل.'
  },
  'startups-growing': {
    title:'الإدارة المالية للشركات الناشئة والمتنامية', question:'كم لديك من الوقت قبل أن تحتاج إلى تمويل جديد؟',
    image:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=85',
    problems:['النمو يحدث لكن الصورة المالية لا تواكب سرعة القرارات.','المصروفات ترتفع ولا توجد رؤية واضحة لمعدل الحرق.','صعوبة تقدير مدة بقاء السيولة المتاحة.','القرارات الاستثمارية والتوظيفية تحتاج إلى أرقام أدق.'],
    reportTitle:'تقرير السيولة والنمو — مثال توضيحي',
    reportRows:[['الإيرادات الشهرية','180K ر.س','+18.6%','up','72%'],['المصروفات الشهرية','145K ر.س','+11.4%','up','58%'],['صافي التدفق','+35K ر.س','موجب','up','36%'],['السيولة المتاحة','620K ر.س','مثال',undefined,'82%'],['معدل الحرق','0 ر.س','بحسب المثال',undefined,'18%'],['نقطة التعادل','≈ 150K','إيراد شهري',undefined,'51%']].map(([label,value,change,direction,width])=>({label,value,change,direction:direction as 'up'|'down'|undefined,width})),
    meanings:[
      {metric:'الإيرادات 180K',meaning:'النمو يصبح أكثر أمانًا عندما تعرف تكلفته وأثره على النقدية.',decision:'ربط النمو بالمصروفات والهامش والتدفق النقدي.'},
      {metric:'المصروفات 145K',meaning:'زيادة الإنفاق قبل فهم أثره قد تسرع استهلاك السيولة.',decision:'تحديد المصروفات التي تدعم النمو وتلك التي يمكن ضبطها.'},
      {metric:'نقطة التعادل 150K',meaning:'رقم واضح لما يجب تحقيقه شهريًا لتغطية التكاليف.',decision:'متابعة الاقتراب من التعادل قبل قرارات التوسع.'}
    ],
    outputs:['قائمة دخل مختصرة','تقرير التدفق النقدي','متابعة المصروفات ومعدل الحرق','نقطة التعادل ومؤشرات النمو','تقارير تساعد على قرارات التوسع والتمويل'],
    message:'السلام عليكم، أريد معرفة وضع السيولة والنمو ومعدل الحرق ونقطة التعادل لشركتي.'
  }
};

const whatsappUrl = (message: string) => `https://wa.me/966511294383?text=${encodeURIComponent(message)}`;

export default function SectorDetailPage({ slug }: { slug: string }) {
  const sector = sectors[slug];
  if (!sector) return <main dir="rtl" className="min-h-screen py-16 text-center"><Container><h1 className="text-2xl font-bold">القطاع غير موجود</h1><a href="/" className="mt-4 inline-flex items-center gap-2 text-emerald-700"><ArrowRight className="h-4 w-4" /> العودة للرئيسية</a></Container></main>;

  return <main dir="rtl" className="bg-white text-slate-900">
    <section className="bg-slate-950 text-white">
      <Container className="py-6 md:py-8">
        <a href="/#sectors-section-wrapper" className="mb-3 inline-flex items-center gap-2 text-xs text-slate-300"><ArrowRight className="h-4 w-4" /> العودة إلى القطاعات</a>
        <div className="grid items-center gap-5 lg:grid-cols-[1fr_300px]">
          <div><p className="mb-1 text-xs text-emerald-300">الإدارة المالية حسب نشاطك</p><h1 className="text-2xl font-extrabold leading-tight md:text-4xl">{sector.question}</h1><p className="mt-1 text-sm text-slate-300">{sector.title}</p></div>
          <img src={sector.image} alt={sector.title} className="h-32 w-full rounded-lg object-cover" />
        </div>
      </Container>
    </section>

    <Container className="py-6 md:py-8">
      <section className="border-b border-slate-200 pb-6">
        <h2 className="text-lg font-bold md:text-xl">المشاكل التي قد تواجه نشاطك</h2>
        <div className="mt-3 grid gap-x-8 gap-y-1 md:grid-cols-2">{sector.problems.map(p=><p key={p} className="text-sm leading-6 text-slate-600">{p}</p>)}</div>
      </section>

      <section className="border-b border-slate-200 py-6">
        <div className="flex flex-wrap items-end justify-between gap-2"><div><h2 className="text-lg font-bold md:text-xl">{sector.reportTitle}</h2><p className="mt-1 text-[11px] text-slate-500">الأرقام نموذج بصري وليست بيانات منشأة فعلية.</p></div><span className="text-[11px] text-slate-400">المبيعات · التكلفة · الربحية · السيولة</span></div>
        <div className="mt-4 overflow-hidden border-y border-slate-200">
          <div className="grid grid-cols-[1.35fr_1fr_90px] bg-slate-50 px-3 py-2 text-[11px] font-semibold text-slate-500"><span>المؤشر</span><span>المستوى</span><span>التغير</span></div>
          {sector.reportRows.map((row,i)=><div key={row.label} className={`grid grid-cols-[1.35fr_1fr_90px] items-center gap-3 px-3 py-2.5 ${i<sector.reportRows.length-1?'border-b border-slate-100':''}`}>
            <span className="text-sm font-medium text-slate-700">{row.label}</span>
            <div className="flex items-center justify-between gap-2"><strong className="text-sm text-slate-950">{row.value}</strong><span className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-100"><span className="block h-full rounded-full bg-emerald-500" style={{width:row.width}} /></span></div>
            <span className={`flex items-center gap-1 text-[11px] ${row.direction==='down'?'text-amber-600':row.direction==='up'?'text-emerald-700':'text-slate-500'}`}>{row.direction==='down'?<TrendingDown className="h-3.5 w-3.5" />:row.direction==='up'?<TrendingUp className="h-3.5 w-3.5" />:null}{row.change}</span>
          </div>)}
        </div>
      </section>

      <section className="border-b border-slate-200 py-6">
        <h2 className="text-lg font-bold md:text-xl">ماذا تعني الأرقام لرب المال؟</h2>
        <div className="mt-3 divide-y divide-slate-200 border-y border-slate-200">{sector.meanings.map(item=><div key={item.metric} className="grid gap-1.5 py-3.5 md:grid-cols-[210px_1fr_1fr] md:gap-5"><strong className="text-sm">{item.metric}</strong><p className="text-sm leading-6 text-slate-600">{item.meaning}</p><p className="text-sm font-semibold leading-6 text-emerald-800">القرار: {item.decision}</p></div>)}</div>
      </section>

      <section className="border-b border-slate-200 py-6"><div className="grid gap-4 md:grid-cols-[1fr_2fr]"><div><h2 className="text-lg font-bold md:text-xl">ماذا ستحصل عليه؟</h2><p className="mt-1 text-sm leading-6 text-slate-500">تقارير مالية مختصرة تساعدك على رؤية الوضع واتخاذ الخطوة التالية.</p></div><div className="grid gap-x-8 gap-y-1 md:grid-cols-2">{sector.outputs.map(o=><p key={o} className="text-sm leading-6 text-slate-700">{o}</p>)}</div></div></section>

      <section className="border-b border-slate-200 py-6"><h2 className="text-lg font-bold md:text-xl">كيف نعمل؟</h2><div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-2 md:grid-cols-4">{commonProcess.map((step,i)=><div key={step} className="flex items-start gap-2"><span className="text-xs font-bold text-emerald-700">{String(i+1).padStart(2,'0')}</span><span className="text-sm text-slate-600">{step}</span></div>)}</div></section>

      <section className="py-6"><div className="flex flex-col items-start justify-between gap-4 rounded-xl bg-slate-950 px-5 py-5 text-white md:flex-row md:items-center"><div><p className="text-xs text-emerald-300">لماذا القائد؟</p><h2 className="mt-1 text-lg font-bold">الأرقام ليست للتسجيل فقط — هي أساس القرار.</h2><p className="mt-1 text-sm text-slate-300">تنظيم الأرقام وتحويلها إلى تقارير واضحة تساعد رب المال على معرفة وضع منشأته.</p></div><a href={whatsappUrl(sector.message)} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-400"><MessageCircle className="h-4 w-4" /> ناقش وضع منشأتك</a></div></section>
    </Container>
  </main>;
}
