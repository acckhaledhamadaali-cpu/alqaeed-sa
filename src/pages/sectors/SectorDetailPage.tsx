import { ArrowRight, MessageCircle, TrendingDown, TrendingUp } from 'lucide-react';
import Container from '../../../components/Container';

type ReportRow = { label:string; value:string; change:string; direction?:'up'|'down'; width:string };
type Meaning = { metric:string; meaning:string; decision:string };
type FocusArea = { title:string; text:string };
type Sector = {
  title:string; question:string; image:string; focusTitle:string; focusIntro:string;
  focusAreas:FocusArea[]; problems:string[]; reportTitle:string; reportRows:ReportRow[];
  meanings:Meaning[]; outputs:string[]; controlText:string; message:string;
};

const commonOutputs = [
  'استلام وتنظيم المستندات المالية ومراجعتها',
  'تسجيل ومتابعة الإيرادات والمصروفات أولًا بأول',
  'إعداد ومتابعة القوائم والتقارير المالية',
  'متابعة العملاء والموردين والتحصيل والالتزامات',
  'متابعة الزكاة وضريبة القيمة المضافة والالتزامات ذات الصلة',
  'تنظيم البيانات المالية لتكون جاهزة للمراجعة واتخاذ القرار'
];
const commonProcess = ['تواصل معنا','نحدد المشكلة','نطلب البيانات والمستندات','التقييم الأولي','ربط النظام','بدء التسجيل والمتابعة','التقرير الأول','متابعة يومية'];

const sectors:Record<string,Sector> = {
  'restaurants-cafes': {
    title:'الإدارة المالية للمطاعم والكافيهات', question:'هل تعرف أين يذهب ربح مطعمك؟', image:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=85',
    focusTitle:'ما الذي يهمك كصاحب مطعم؟', focusIntro:'الربح لا يتحدد بالمبيعات وحدها. نربط حركة البيع بالتكلفة والمخزون والهدر والسيولة حتى تعرف أين يزداد الربح وأين يتسرب.',
    focusAreas:[
      {title:'المبيعات والفروع',text:'مبيعات الفروع وقنوات الطلب ومقارنتها بالفترات السابقة لمعرفة أين ينمو النشاط.'},
      {title:'تكلفة الطعام والهدر',text:'تكلفة المواد والوصفات والحصص والهدر والعمولات وتأثيرها على هامش كل منتج أو فرع.'},
      {title:'المخزون والمشتريات',text:'المشتريات والاستهلاك والرصيد والأصناف البطيئة وربطها بالنقد المتاح.'},
      {title:'الربح والسيولة',text:'صافي الربح والتدفق النقدي والمصروفات والالتزامات حتى لا تختلط الربحية بالنقد.'}
    ],
    problems:['أشعر أن المبيعات جيدة، لكن المبلغ الذي يتبقى لي في نهاية الشهر أقل مما أتوقع.','لا أستطيع معرفة هل ارتفاع تكلفة الطعام والهدر يأكل من هامش الربح أم لا.','جزء كبير من أموالي موجود في المخزون ولا أعرف ما الذي يتحرك وما الذي يتعطل.','أحتاج أن أعرف ربحية الأصناف أو الفروع بدلًا من النظر إلى إجمالي المبيعات فقط.'],
    reportTitle:'تقرير مالي مختصر للمطعم — مثال توضيحي',
    reportRows:[{label:'المبيعات',value:'285,000 ر.س',change:'+8.4%',direction:'up',width:'86%'},{label:'تكلفة الطعام',value:'112,000 ر.س',change:'39.3%',direction:'down',width:'63%'},{label:'المصروفات التشغيلية',value:'84,000 ر.س',change:'+4.1%',direction:'up',width:'47%'},{label:'صافي الربح',value:'89,000 ر.س',change:'31.2%',direction:'up',width:'58%'},{label:'التدفق النقدي',value:'42,000 ر.س',change:'متاح',width:'34%'},{label:'المخزون',value:'67,000 ر.س',change:'يحتاج متابعة',direction:'down',width:'42%'}],
    meanings:[{metric:'تكلفة الطعام 39.3%',meaning:'هذه النسبة توضح كم تستهلك تكلفة المواد من المبيعات.',decision:'مراجعة الشراء والوصفات والحصص والهدر والتسعير.'},{metric:'المخزون 67K',meaning:'جزء من رأس المال موجود في مخزون وليس نقدًا متاحًا.',decision:'ضبط دورة الشراء ومتابعة الأصناف البطيئة.'},{metric:'التدفق 42K',meaning:'الربح المحاسبي لا يعني أن النقد المتاح يساويه.',decision:'ترتيب المصروفات والالتزامات حسب السيولة الفعلية.'}],
    outputs:['تحليل تكلفة الطعام والهدر','تحليل ربحية الأصناف والفروع','تقرير السيولة والمخزون'].concat(commonOutputs),
    controlText:'نراجع ربط المشتريات والمصروفات بالمستندات، ومطابقة المبيعات والتحصيل والمخزون، حتى يظهر أثر كل عملية في الصورة المالية الصحيحة.',
    message:'السلام عليكم، أريد معرفة الوضع المالي الحقيقي لمطعمي والمؤشرات التي يجب متابعتها.'
  },
  contracting: {
    title:'الإدارة المالية لقطاع المقاولات', question:'هل تعرف ربحية مشروعك قبل أن ينتهي؟', image:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=85',
    focusTitle:'المشروع هو نقطة البداية', focusIntro:'نربط الإيراد والتكلفة والإنجاز والمستخلصات والتحصيل والالتزامات بالمشروع نفسه، بدل النظر إلى أرقام إجمالية لا توضح أين الربح وأين المشكلة.',
    focusAreas:[
      {title:'تكلفة المشروع',text:'مواد، عمالة، مقاولون، معدات ومصاريف مباشرة وغير مباشرة، مع مقارنة الفعلي بالميزانية.'},
      {title:'الإنجاز والربحية',text:'نسبة الإنجاز والتكلفة حتى تاريخه والربح المتوقع والانحراف عن الخطة.'},
      {title:'المستخلصات والتحصيل',text:'المعتمد، المحصل، المحتجز، الدفعات المقدمة والمبالغ المستحقة لدى العملاء.'},
      {title:'السيولة والالتزامات',text:'ما لديك نقدًا، ما لك، ما عليك، وما تحتاجه المشاريع خلال الفترة القادمة.'}
    ],
    problems:['أريد أن أعرف تكلفة كل مشروع فعلية، وليس مجرد إجمالي المصروفات.','أخشى أن تزيد تكلفة مشروع قبل أن أكتشف أنها قللت هامش الربح.','المستخلصات والتحصيل والالتزامات تجعلني غير متأكد من السيولة المتاحة.','أحتاج أن أعرف هل نسبة الإنجاز الحالية متناسبة مع ما صُرف وما تم تحصيله.'],
    reportTitle:'تقرير المشروع المالي — مثال توضيحي',
    reportRows:[{label:'قيمة العقد',value:'4.80M ر.س',change:'إجمالي',width:'92%'},{label:'نسبة الإنجاز',value:'68%',change:'مقابل التكلفة',width:'68%'},{label:'التكلفة حتى تاريخه',value:'2.90M ر.س',change:'60.4%',direction:'up',width:'60%'},{label:'الهامش الحالي',value:'12%',change:'تحت المتابعة',direction:'down',width:'38%'},{label:'المستحق لدى العميل',value:'620K ر.س',change:'سيولة',direction:'down',width:'42%'},{label:'انحراف التكلفة',value:'+7.2%',change:'يحتاج تدخلًا',direction:'up',width:'28%'}],
    meanings:[{metric:'انحراف التكلفة +7.2%',meaning:'التكلفة ترتفع أسرع من الخطة، وهذا قد يخفض هامش المشروع.',decision:'تحديد مصدر الانحراف وإعادة تقدير الربحية.'},{metric:'إنجاز 68%',meaning:'نسبة الإنجاز وحدها لا تكفي دون ربطها بالتكلفة والإيراد.',decision:'مقارنة الإنجاز بالتكلفة والمستخلصات والتحصيل.'},{metric:'تحصيل 620K',meaning:'المشروع قد يكون مربحًا على الورق لكن السيولة متأخرة.',decision:'ترتيب التحصيل والالتزامات حسب الأولوية.'}],
    outputs:['ربحية كل مشروع','تقرير تكلفة مقابل الإنجاز','متابعة المستخلصات والتحصيل','كشف مبكر لانحرافات التكلفة'].concat(commonOutputs),
    controlText:'نركز على تحميل كل تكلفة للمشروع الصحيح، ومتابعة المشتريات وصرف المواد والمصروفات والموردين والمقاولين والمعدات، مع كشف الانحرافات قبل أن تتسع.',
    message:'السلام عليكم، أريد معرفة ربحية مشاريعي والتكاليف والسيولة بشكل واضح.'
  },
  'trade-retail': {
    title:'الإدارة المالية للتجارة والتجزئة', question:'هل المبيعات المرتفعة تتحول فعلًا إلى ربح؟', image:'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2400&q=85',
    focusTitle:'المبيعات ليست هي الربح', focusIntro:'المهم أن تعرف هامش كل منتج أو فرع، وما الذي يحدث للمخزون والسيولة عندما تتغير أسعار الشراء أو حجم المبيعات.',
    focusAreas:[
      {title:'المبيعات والهامش',text:'ربط المبيعات بتكلفة البضاعة والمصروفات لمعرفة الهامش الحقيقي.'},
      {title:'المخزون والدوران',text:'قيمة المخزون، حركة الأصناف، البطيء، والمال المتجمد في البضاعة.'},
      {title:'الشراء والتسعير',text:'متابعة تغير تكلفة الشراء وأثره على التسعير والهامش والربحية.'},
      {title:'الفروع والسيولة',text:'مقارنة الفروع أو قنوات البيع وربط الربحية بالتحصيل والنقد المتاح.'}
    ],
    problems:['أرى مبيعات مرتفعة، لكنني لا أعرف الهامش الحقيقي بعد تكلفة الشراء والمصروفات.','أموال كثيرة مرتبطة في المخزون وأحتاج أن أعرف أين تتجمد السيولة.','تغير أسعار الشراء يضغط على الربح وأحتاج رؤية ذلك بسرعة.','أريد معرفة المنتجات أو الفروع التي تحقق لي ربحًا حقيقيًا.'],
    reportTitle:'تقرير المبيعات والربحية — مثال توضيحي',
    reportRows:[{label:'المبيعات',value:'420K ر.س',change:'+12.5%',direction:'up',width:'90%'},{label:'تكلفة المبيعات',value:'276K ر.س',change:'65.7%',direction:'down',width:'66%'},{label:'هامش الربح',value:'34.3%',change:'تحت المتابعة',width:'43%'},{label:'المخزون',value:'310K ر.س',change:'مرتفع',direction:'down',width:'72%'},{label:'أصناف بطيئة',value:'14%',change:'تحتاج قرارًا',direction:'down',width:'28%'},{label:'صافي الربح',value:'62K ر.س',change:'14.8%',direction:'up',width:'34%'}],
    meanings:[{metric:'الهامش 34.3%',meaning:'المبيعات وحدها لا تكشف جودة الربح.',decision:'مراجعة تسعير المنتجات وتكلفة الشراء.'},{metric:'المخزون 310K',meaning:'رأس مال كبير مرتبط ببضاعة لم تتحول بعد إلى نقد.',decision:'تحديد البطيء وربط الشراء بالدوران.'},{metric:'أصناف بطيئة 14%',meaning:'السيولة معرضة للتجميد أو الخصم أو التلف.',decision:'تحديد الأصناف التي تحتاج تصرفًا سريعًا.'}],
    outputs:['تحليل هامش المنتجات والفروع','تقرير المخزون والدوران','مؤشرات تدعم قرارات الشراء والتسعير'].concat(commonOutputs),
    controlText:'نراجع دورة المشتريات والمبيعات والمخزون والتحصيل والموردين، ونربط الحركة بالمستندات والحسابات حتى لا يظهر الربح بصورة مضللة.',
    message:'السلام عليكم، أريد تحليل مبيعاتي ومخزوني وهامش الربح لاتخاذ قرارات أفضل.'
  },
  'pharmacies-health': {
    title:'الإدارة المالية للصيدليات والمنشآت الصحية', question:'هل تعرف أي جزء من نشاطك يحقق الربح فعلًا؟', image:'https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?auto=format&fit=crop&w=2400&q=85',
    focusTitle:'في النشاط الصحي، التفاصيل الصغيرة تؤثر على الربح', focusIntro:'نربط المبيعات بتكلفة المنتجات والمخزون والمصروفات والتحصيل، لتعرف أين يتكون الربح وأين تستهلك السيولة.',
    focusAreas:[
      {title:'المبيعات وربحية الأصناف',text:'معرفة أثر تكلفة الشراء والخصومات وتنوع المنتجات على الهامش.'},
      {title:'المخزون والحركة',text:'متابعة قيمة المخزون والأصناف البطيئة وحركة الشراء والاستهلاك.'},
      {title:'المصروفات التشغيلية',text:'قياس أثر الرواتب والإيجارات والتشغيل وغيرها على ربحية النشاط.'},
      {title:'السيولة والتحصيل',text:'ربط الإيراد بالتحصيل والنقد الفعلي والالتزامات القادمة.'}
    ],
    problems:['المبيعات موجودة، لكنني أحتاج أن أعرف ما يتبقى لي فعلًا بعد تكلفة المنتجات والمصروفات.','المخزون والأصناف بطيئة الحركة تربط جزءًا من السيولة.','الخصومات وتغير تكلفة الشراء قد تضغط على هامش الربح.','أحتاج أن أعرف أثر المصروفات على ربحية النشاط بوضوح.'],
    reportTitle:'تقرير مالي للنشاط الصحي — مثال توضيحي',
    reportRows:[{label:'المبيعات',value:'360K ر.س',change:'+6.8%',direction:'up',width:'82%'},{label:'تكلفة المبيعات',value:'258K ر.س',change:'71.7%',direction:'down',width:'72%'},{label:'الهامش',value:'28.3%',change:'تحت المتابعة',width:'37%'},{label:'المخزون',value:'195K ر.س',change:'مرتفع',direction:'down',width:'61%'},{label:'مصروفات التشغيل',value:'54K ر.س',change:'+3.2%',direction:'up',width:'31%'},{label:'صافي الربح',value:'48K ر.س',change:'13.3%',direction:'up',width:'27%'}],
    meanings:[{metric:'الهامش 28.3%',meaning:'ارتفاع المبيعات مع انخفاض الهامش قد لا يحسن الربح.',decision:'تحليل تكلفة الشراء والخصومات وربحية الأصناف.'},{metric:'المخزون 195K',meaning:'السيولة قد تكون مرتبطة بأصناف لا تتحرك بالسرعة المطلوبة.',decision:'متابعة الدوران والأصناف البطيئة.'},{metric:'المصروفات 54K',meaning:'زيادة المصروفات تقلل ما يتبقى من الهامش.',decision:'مقارنة المصروفات بالعائد والأثر على الربحية.'}],
    outputs:['تحليل الهامش والتكلفة','تقرير المخزون والدوران','مؤشرات تساعد على ضبط التسعير والشراء'].concat(commonOutputs),
    controlText:'نرتب المستندات والمشتريات والمبيعات والمخزون والمصروفات والتحصيل، ونربطها بالحسابات والتقارير حتى تكون الصورة المالية قابلة للمراجعة.',
    message:'السلام عليكم، أريد معرفة ربحية نشاطي الصحي ومؤشرات المخزون والسيولة.'
  },
  'services-professions': {
    title:'الإدارة المالية للخدمات والمهن', question:'هل تعرف تكلفة الخدمة التي تقدمها وربحيتها؟', image:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=85',
    focusTitle:'الإيراد وحده لا يخبرك أي خدمة تستحق النمو', focusIntro:'نربط الإيراد بتكلفة تقديم الخدمة والمصروفات والتحصيل حتى تعرف الخدمات والعملاء الأكثر ربحية، وليس فقط حجم المبيعات.',
    focusAreas:[
      {title:'الإيرادات',text:'متابعة الإيرادات حسب الخدمة أو العميل أو الفترة لمعرفة مصدر النمو.'},
      {title:'تكلفة الخدمة',text:'قياس تكلفة تقديم الخدمة والموارد المستخدمة وأثرها على الهامش.'},
      {title:'ربحية العملاء',text:'معرفة أثر التسعير وتكلفة الخدمة والتحصيل على ربحية العميل.'},
      {title:'التحصيل والسيولة',text:'متابعة المستحقات والمصروفات والتدفق النقدي بدل الخلط بين الإيراد والنقد.'}
    ],
    problems:['الإيرادات موجودة لكن تكلفة تقديم الخدمة غير واضحة لي.','المصروفات الثابتة والمتغيرة تقلل الربحية وأحتاج متابعة أثرها.','أريد معرفة الخدمات أو العملاء الأكثر ربحية.','التحصيل قد يتأخر رغم تسجيل الإيراد، وهذا يؤثر على السيولة.'],
    reportTitle:'تقرير ربحية الخدمات — مثال توضيحي',
    reportRows:[{label:'الإيرادات',value:'240K ر.س',change:'+10.2%',direction:'up',width:'78%'},{label:'تكلفة تقديم الخدمة',value:'92K ر.س',change:'38.3%',direction:'down',width:'39%'},{label:'المصروفات',value:'71K ر.س',change:'+5.6%',direction:'up',width:'30%'},{label:'هامش التشغيل',value:'32.1%',change:'تحت المتابعة',width:'45%'},{label:'المستحق للتحصيل',value:'58K ر.س',change:'متأخر',direction:'down',width:'24%'},{label:'صافي الربح',value:'77K ر.س',change:'32.1%',direction:'up',width:'31%'}],
    meanings:[{metric:'تكلفة الخدمة 38.3%',meaning:'ارتفاع التكلفة قد يعني أن بعض الخدمات لا تحقق الهامش المتوقع.',decision:'حساب ربحية كل خدمة ومراجعة التسعير والتكلفة.'},{metric:'تحصيل 58K',meaning:'الإيراد المسجل لا يعني بالضرورة نقدية متاحة.',decision:'ترتيب التحصيل وربطه بالالتزامات.'},{metric:'هامش التشغيل 32.1%',meaning:'المهم ليس حجم الإيراد فقط بل ما يتبقى بعد تكلفة التشغيل.',decision:'تركيز النمو على الخدمات والعملاء الأكثر ربحية.'}],
    outputs:['تحليل ربحية الخدمات','تقرير الإيرادات والتحصيل','مؤشرات تساعد على التسعير'].concat(commonOutputs),
    controlText:'نراجع المستندات والإيرادات والمصروفات والمستحقات والتحصيل، وننظمها بحيث تستطيع قراءة ربحية الخدمة والعميل والسيولة بوضوح.',
    message:'السلام عليكم، أريد معرفة ربحية خدماتي وتكلفة التشغيل والتحصيل.'
  },
  'startups-growing': {
    title:'الإدارة المالية للشركات الناشئة والمتنامية', question:'كم لديك من الوقت قبل أن تحتاج إلى تمويل جديد؟', image:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=85',
    focusTitle:'النمو يحتاج إلى رؤية نقدية قبل أن يحتاج إلى سرعة أكبر', focusIntro:'نحوّل الإيرادات والمصروفات والسيولة إلى مؤشرات تساعدك على معرفة معدل الحرق، مدة بقاء النقد، نقطة التعادل، وأثر قرارات النمو.',
    focusAreas:[
      {title:'التدفق النقدي',text:'ما يدخل وما يخرج ومتى تحتاج الشركة إلى نقد إضافي.'},
      {title:'معدل الحرق والمدى النقدي',text:'متابعة استهلاك السيولة ومدة استمرارها وفق الوضع الحالي.'},
      {title:'الإيرادات والتكلفة',text:'ربط النمو بالمصروفات والهامش ونقطة التعادل بدل قياس النجاح بالإيراد فقط.'},
      {title:'قرارات التوسع',text:'تهيئة أرقام تساعد على تقييم التوظيف والتوسع والتمويل قبل الالتزام بها.'}
    ],
    problems:['النمو يحدث لكن الصورة المالية لا تواكب سرعة قراراتي.','المصروفات ترتفع ولا أملك رؤية واضحة لمعدل الحرق.','أحتاج أن أعرف مدة بقاء السيولة المتاحة.','قرارات التوسع والتوظيف والتمويل تحتاج أرقامًا أدق.'],
    reportTitle:'تقرير السيولة والنمو — مثال توضيحي',
    reportRows:[{label:'الإيرادات الشهرية',value:'180K ر.س',change:'+18.6%',direction:'up',width:'72%'},{label:'المصروفات الشهرية',value:'145K ر.س',change:'+11.4%',direction:'up',width:'58%'},{label:'صافي التدفق',value:'+35K ر.س',change:'موجب',direction:'up',width:'36%'},{label:'السيولة المتاحة',value:'620K ر.س',change:'مثال',width:'82%'},{label:'معدل الحرق',value:'0 ر.س',change:'بحسب المثال',width:'18%'},{label:'نقطة التعادل',value:'≈ 150K',change:'إيراد شهري',width:'51%'}],
    meanings:[{metric:'الإيرادات 180K',meaning:'النمو يصبح أكثر أمانًا عندما تعرف تكلفته وأثره على النقدية.',decision:'ربط النمو بالمصروفات والهامش والتدفق النقدي.'},{metric:'المصروفات 145K',meaning:'زيادة الإنفاق قبل فهم أثره قد تسرع استهلاك السيولة.',decision:'تحديد المصروفات التي تدعم النمو وتلك التي يمكن ضبطها.'},{metric:'نقطة التعادل 150K',meaning:'رقم واضح لما يجب تحقيقه شهريًا لتغطية التكاليف.',decision:'متابعة الاقتراب من التعادل قبل قرارات التوسع.'}],
    outputs:['تقرير التدفق النقدي','متابعة المصروفات ومعدل الحرق','نقطة التعادل ومؤشرات النمو'].concat(commonOutputs),
    controlText:'نرتب البيانات والمستندات والإيرادات والمصروفات والمستحقات، ونبني تقارير مالية تساعد الإدارة على معرفة وضع السيولة قبل اتخاذ قرارات النمو.',
    message:'السلام عليكم، أريد معرفة وضع السيولة والنمو ومعدل الحرق ونقطة التعادل لشركتي.'
  }
};

const whatsappUrl=(message:string)=>`https://wa.me/966511294383?text=${encodeURIComponent(message)}`;

function ReportVisual({sector}:{sector:Sector}) {
  return <section className="border-b border-slate-200 py-5 md:py-8">
    <div className="flex flex-wrap items-end justify-between gap-2">
      <div><p className="text-xs font-bold text-emerald-700 md:text-sm">مثال بصري</p><h2 className="mt-1 text-xl font-extrabold md:text-3xl">{sector.reportTitle}</h2><p className="mt-1 text-[11px] text-slate-500 md:text-sm">الأرقام نموذج بصري وليست بيانات منشأة فعلية.</p></div>
      <span className="text-[10px] text-slate-400 md:text-sm">إيراد · تكلفة · ربحية · سيولة</span>
    </div>
    <div className="mt-4 overflow-hidden border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-2 gap-px bg-slate-200 md:grid-cols-3 lg:grid-cols-6">
        {sector.reportRows.map((row,i)=><div key={row.label} className="bg-white p-3 md:p-4">
          <span className="text-[11px] font-medium text-slate-500 md:text-xs">{row.label}</span>
          <strong className="mt-1 block text-base font-extrabold text-slate-950 md:text-xl">{row.value}</strong>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100"><span className={`block h-full rounded-full ${i%3===1?'bg-amber-400':'bg-emerald-500'}`} style={{width:row.width}} /></div>
          <span className={`mt-1.5 flex items-center gap-1 text-[10px] font-semibold md:text-xs ${row.direction==='down'?'text-amber-700':row.direction==='up'?'text-emerald-700':'text-slate-500'}`}>{row.direction==='down'?<TrendingDown className="h-3 w-3"/>:row.direction==='up'?<TrendingUp className="h-3 w-3"/>:null}{row.change}</span>
        </div>)}
      </div>
      <div className="grid gap-px border-t border-slate-200 bg-slate-200 md:grid-cols-3">
        <div className="bg-emerald-50 p-3 md:p-4"><span className="text-[10px] font-semibold text-emerald-800 md:text-xs">الصورة المالية</span><p className="mt-1 text-xs font-bold text-slate-800 md:text-sm">إيراد + تكلفة + ربح + نقد</p></div>
        <div className="bg-white p-3 md:p-4"><span className="text-[10px] font-semibold text-slate-500 md:text-xs">مؤشر يحتاج متابعة</span><p className="mt-1 text-xs font-bold text-slate-800 md:text-sm">الرقم الذي يتغير أسرع من الخطة</p></div>
        <div className="bg-amber-50 p-3 md:p-4"><span className="text-[10px] font-semibold text-amber-800 md:text-xs">الهدف</span><p className="mt-1 text-xs font-bold text-slate-800 md:text-sm">معرفة ما يحتاج قرارًا الآن</p></div>
      </div>
    </div>
  </section>;
}

export default function SectorDetailPage({slug}:{slug:string}) {
  const sector=sectors[slug];
  if(!sector) return <main dir="rtl" className="min-h-screen bg-white py-12 text-center"><Container><h1 className="text-2xl font-bold">القطاع غير موجود</h1><a href="/" className="mt-3 inline-flex items-center gap-2 text-emerald-700"><ArrowRight className="h-4 w-4"/> العودة للرئيسية</a></Container></main>;

  return <main dir="rtl" className="bg-white text-slate-900">
    <section className="border-b border-slate-200 bg-white"><Container className="py-4 md:py-7 lg:py-9">
      <a href="/#sectors-section-wrapper" className="mb-3 inline-flex items-center gap-2 text-[11px] font-medium text-slate-500 md:text-sm"><ArrowRight className="h-4 w-4"/> العودة إلى القطاعات</a>
      <div className="grid items-center gap-5 lg:grid-cols-[1.25fr_0.75fr]">
        <div><p className="text-xs font-bold text-emerald-700 md:text-sm">{sector.title}</p><h1 className="mt-1 text-2xl font-extrabold leading-tight md:text-4xl lg:text-5xl">{sector.question}</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 md:text-lg md:leading-8">{sector.focusIntro}</p></div>
        <img src={sector.image} alt={sector.title} className="h-36 w-full rounded-xl object-cover md:h-52 lg:h-64"/>
      </div>
    </Container></section>

    <Container className="py-4 md:py-7 lg:py-9">
      <section className="border-b border-slate-200 pb-5 md:pb-8">
        <div className="flex items-end justify-between gap-5"><div><p className="text-xs font-bold text-emerald-700 md:text-sm">من زاوية صاحب النشاط</p><h2 className="mt-1 text-xl font-extrabold md:text-3xl">{sector.focusTitle}</h2></div><p className="hidden max-w-2xl text-left text-sm leading-7 text-slate-500 md:block">نركز على الأرقام التي تساعدك على فهم وضع النشاط واتخاذ قرار، وليس على عرض خدمات محاسبية عامة فقط.</p></div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{sector.focusAreas.map(area=><div key={area.title} className="border-r-2 border-emerald-500 pr-3"><h3 className="text-sm font-bold md:text-base">{area.title}</h3><p className="mt-1 text-xs leading-5 text-slate-600 md:text-sm md:leading-6">{area.text}</p></div>)}</div>
      </section>

      <section className="border-b border-slate-200 py-5 md:py-8"><h2 className="text-xl font-extrabold md:text-3xl">المشاكل التي قد تواجه نشاطك</h2><div className="mt-3 grid gap-x-8 gap-y-2 md:grid-cols-2">{sector.problems.map(p=><p key={p} className="text-sm leading-6 text-slate-600 md:text-base md:leading-7">{p}</p>)}</div></section>

      <ReportVisual sector={sector}/>

      <section className="border-b border-slate-200 py-5 md:py-8"><div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-xs font-bold text-emerald-700 md:text-sm">من الرقم إلى القرار</p><h2 className="mt-1 text-xl font-extrabold md:text-3xl">ماذا تعني الأرقام لك؟</h2><p className="mt-2 text-sm leading-6 text-slate-600 md:text-base md:leading-7">التقرير لا يكتفي بإظهار الرقم؛ المهم أن تعرف معناه وأثره وما الذي يستحق المتابعة.</p></div><div className="divide-y divide-slate-200 border-y border-slate-200">{sector.meanings.map(item=><div key={item.metric} className="grid gap-1 py-3 md:grid-cols-[170px_1fr_1fr] md:gap-5"><strong className="text-sm md:text-base">{item.metric}</strong><p className="text-xs leading-5 text-slate-600 md:text-sm md:leading-6">{item.meaning}</p><p className="text-xs font-bold leading-5 text-emerald-800 md:text-sm md:leading-6">القرار: {item.decision}</p></div>)}</div></div></section>

      <section className="border-b border-slate-200 py-5 md:py-8"><div className="grid gap-4 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="text-xs font-bold text-emerald-700 md:text-sm">المحاسبة التي يعتمد عليها القرار</p><h2 className="mt-1 text-xl font-extrabold md:text-3xl">من المستند إلى القوائم المالية</h2><p className="mt-2 text-sm leading-6 text-slate-600 md:text-base md:leading-7">الجزء المشترك بين كل القطاعات، مع تخصيص التحليل حسب طبيعة نشاطك.</p></div><div className="grid grid-cols-2 gap-x-5 gap-y-4 md:grid-cols-3">{commonOutputs.map(o=><div key={o}><h3 className="text-xs font-bold md:text-sm">{o}</h3></div>)}</div></div></section>

      <section className="border-b border-slate-200 py-5 md:py-8"><div className="grid gap-5 md:grid-cols-2"><div><p className="text-xs font-bold text-emerald-700 md:text-sm">الرقابة والتحليل</p><h2 className="mt-1 text-xl font-extrabold md:text-3xl">لا نريد رقمًا صحيحًا فقط، بل رقمًا مفهومًا</h2><p className="mt-2 text-sm leading-6 text-slate-600 md:text-base md:leading-7">{sector.controlText}</p></div><div className="border-r-2 border-emerald-500 pr-4"><p className="text-sm font-bold md:text-base">أسئلة التحليل</p><p className="mt-2 text-sm leading-6 text-slate-600 md:text-base md:leading-7">لماذا ارتفعت التكلفة؟ لماذا انخفض الهامش؟ لماذا تأخر التحصيل؟ أين تتجمد السيولة؟ وما الذي يحتاج إلى إجراء قبل أن تتحول المشكلة إلى خسارة؟</p></div></div></section>

      <section className="border-b border-slate-200 py-5 md:py-8"><div className="flex items-end justify-between gap-5"><div><p className="text-xs font-bold text-emerald-700 md:text-sm">ماذا ستحصل عليه؟</p><h2 className="mt-1 text-xl font-extrabold md:text-3xl">صورة مالية قابلة للاستخدام</h2></div><p className="hidden max-w-xl text-sm leading-6 text-slate-500 md:block">تقارير وبيانات منظمة تساعدك على رؤية الوضع وفهمه واتخاذ الخطوة التالية.</p></div><div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">{sector.outputs.slice(0,10).map(o=><div key={o} className="bg-slate-50 p-3 md:p-4"><p className="text-xs font-bold leading-5 text-slate-800 md:text-sm md:leading-6">{o}</p></div>)}</div></section>

      <section className="border-b border-slate-200 py-5 md:py-8"><div className="grid gap-4 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="text-xs font-bold text-emerald-700 md:text-sm">كيف نعمل؟</p><h2 className="mt-1 text-xl font-extrabold md:text-3xl">خطوات واضحة من أول تواصل</h2><p className="mt-2 text-sm leading-6 text-slate-600 md:text-base md:leading-7">وسوف نحدد لاحقًا الطريقة التي تناسب نشاطك وحجم العمل والمستندات والأنظمة المتاحة.</p></div><div className="grid grid-cols-2 gap-x-5 gap-y-3 md:grid-cols-4">{commonProcess.map((step,i)=><div key={step}><span className="text-[10px] font-bold text-emerald-700 md:text-xs">{String(i+1).padStart(2,'0')}</span><p className="mt-0.5 text-xs font-medium text-slate-700 md:text-sm">{step}</p></div>)}</div></div></section>

      <section className="py-5 md:py-8"><div className="flex flex-col items-start justify-between gap-4 border-t-2 border-slate-900 pt-4 md:flex-row md:items-center md:gap-8"><div><p className="text-xs font-bold text-emerald-700 md:text-sm">لماذا القائد؟</p><h2 className="mt-1 text-xl font-extrabold md:text-3xl">الأرقام ليست للتسجيل فقط — هي أساس القرار.</h2><p className="mt-1 text-sm leading-6 text-slate-600 md:text-base">تنظيم الأرقام وتحويلها إلى صورة مالية واضحة تساعدك على معرفة وضع منشأتك واتخاذ القرار المناسب.</p><p className="mt-2 text-xs leading-5 text-slate-500 md:text-sm">نتعامل مع مستندات وبيانات النشاط ضمن نطاق العمل المتفق عليه، مع تنظيمها وحفظها بطريقة تسهّل الرجوع إليها.</p></div><a href={whatsappUrl(sector.message)} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700 md:text-base"><MessageCircle className="h-4 w-4"/> ناقش وضع منشأتك</a></div></section>
    </Container>
  </main>;
}
