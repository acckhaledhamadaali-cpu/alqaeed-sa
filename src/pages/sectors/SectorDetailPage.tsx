import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import Container from '../../../components/Container';
import SectionWrapper from '../../../components/SectionWrapper';

type Sector = {
  slug: string;
  title: string;
  image: string;
  challenge: string[];
  solution: string;
  outputs: string[];
  message: string;
};

const sectors: Record<string, Sector> = {
  'restaurants-cafes': {
    slug: 'restaurants-cafes',
    title: 'الإدارة المالية للمطاعم والكافيهات',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=3840&q=90',
    challenge: ['الربح الحقيقي غير واضح بعد تكلفة المواد والمخزون والمصروفات', 'صعوبة متابعة تكلفة الطعام والهدر والمخزون', 'الحاجة إلى صورة أوضح عن السيولة والأداء'],
    solution: 'ننظم الحسابات ونحلل المبيعات والتكاليف والمخزون والسيولة لتعرف أين يتحقق الربح وأين تحتاج منشأتك إلى تحسين.',
    outputs: ['قوائم مالية واضحة', 'تحليل الربحية والتكاليف', 'متابعة المخزون والهدر', 'تقارير إدارية ومؤشرات أداء', 'ملاحظات وتوصيات عملية'],
    message: 'السلام عليكم، أريد مناقشة احتياج مطعمي أو الكافيه من الإدارة المالية.',
  },
  contracting: {
    slug: 'contracting',
    title: 'الإدارة المالية لقطاع المقاولات',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=3840&q=90',
    challenge: ['عدم وضوح ربحية كل مشروع', 'صعوبة متابعة تكاليف المشاريع والتدفقات النقدية', 'الحاجة إلى تقارير تساعد على اتخاذ القرار'],
    solution: 'نرتب البيانات المالية ونربطها بالمشاريع لمتابعة التكاليف والربحية والسيولة بصورة تساعدك على معرفة وضع كل مشروع.',
    outputs: ['تحليل ربحية كل مشروع', 'متابعة تكاليف المشاريع', 'تقارير مالية وإدارية', 'متابعة التدفقات النقدية', 'مؤشرات تساعد على القرار'],
    message: 'السلام عليكم، أريد مناقشة احتياج شركة المقاولات من الإدارة المالية.',
  },
  'trade-retail': {
    slug: 'trade-retail',
    title: 'الإدارة المالية للتجارة والتجزئة',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=3840&q=90',
    challenge: ['عدم وضوح هامش ربح المنتجات', 'المخزون يستهلك جزءًا من السيولة', 'صعوبة قراءة المبيعات والتكاليف بصورة متكاملة'],
    solution: 'نرتب الحسابات ونحلل المبيعات وتكلفة المبيعات والمخزون وهوامش الربح لتصبح قرارات الشراء والتسعير والسيولة أوضح.',
    outputs: ['تحليل المبيعات والمخزون', 'حساب هوامش الربح', 'تقارير دورية لاتخاذ القرار', 'متابعة السيولة', 'تحليل أداء النشاط'],
    message: 'السلام عليكم، أريد مناقشة احتياج منشأتي التجارية من الإدارة المالية.',
  },
  'pharmacies-health': {
    slug: 'pharmacies-health',
    title: 'الإدارة المالية للصيدليات والأنشطة الصحية',
    image: 'https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?auto=format&fit=crop&w=3840&q=90',
    challenge: ['صعوبة معرفة الربحية بعد تكلفة المبيعات والمخزون', 'الحاجة إلى متابعة المصروفات والتكاليف', 'عدم وضوح مؤشرات الأداء والسيولة'],
    solution: 'نحلل المبيعات والمخزون والتكاليف والمصروفات ونحول البيانات إلى تقارير مالية تساعدك على متابعة ربحية النشاط.',
    outputs: ['تحليل المبيعات والمخزون', 'متابعة المصروفات والتكاليف', 'تقارير مالية دورية', 'تحليل الربحية', 'مؤشرات أداء واضحة'],
    message: 'السلام عليكم، أريد مناقشة احتياج الصيدلية أو النشاط الصحي من الإدارة المالية.',
  },
  'services-professions': {
    slug: 'services-professions',
    title: 'الإدارة المالية للخدمات والمهن',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=3840&q=90',
    challenge: ['عدم وضوح ربحية الخدمات المختلفة', 'تأخر التحصيل أو تشتت المصروفات', 'صعوبة معرفة مؤشرات الأداء المالي للنشاط'],
    solution: 'ننظم الإيرادات والمصروفات والتحصيل ونحلل ربحية الخدمات لنوضح لك أين تحقق منشأتك أفضل عائد وما الذي يحتاج إلى تحسين.',
    outputs: ['تحليل ربحية الخدمات', 'متابعة التحصيل والمصروفات', 'تقارير مالية وإدارية', 'تحليل السيولة', 'مؤشرات أداء للنشاط'],
    message: 'السلام عليكم، أريد مناقشة احتياج نشاطي الخدمي من الإدارة المالية.',
  },
  'startups-growing': {
    slug: 'startups-growing',
    title: 'الإدارة المالية للشركات الناشئة والمتنامية',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=3840&q=90',
    challenge: ['عدم وضوح معدل حرق النقد والسيولة المتاحة', 'النمو يحدث دون صورة مالية منتظمة', 'الحاجة إلى ميزانية وتوقعات تساعد على التخطيط'],
    solution: 'نبني لك صورة مالية عملية عن السيولة والتدفقات والميزانية ومؤشرات الأداء حتى تنمو الشركة بقرارات أكثر وضوحًا.',
    outputs: ['متابعة السيولة والتدفقات النقدية', 'تحليل الأداء المالي', 'الميزانية والتخطيط', 'مؤشرات أداء للإدارة', 'تقارير تساعد على النمو'],
    message: 'السلام عليكم، أريد مناقشة احتياج شركتي الناشئة من الإدارة المالية.',
  },
};

const whatsappNumber = '966511294383';

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
          <a href="/#sectors-section-wrapper" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-primary">
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
            العودة إلى القطاعات
          </a>

          <div className="overflow-hidden rounded-3xl border border-border-subtle bg-white shadow-sm">
            <div className="relative aspect-[16/6] min-h-[190px] overflow-hidden bg-surface-subtle md:min-h-[320px]">
              <img
                src={sector.image}
                srcSet={`${sector.image.replace('w=3840', 'w=768')} 768w, ${sector.image.replace('w=3840', 'w=1280')} 1280w, ${sector.image.replace('w=3840', 'w=1920')} 1920w, ${sector.image} 3840w`}
                sizes="100vw"
                alt={sector.title}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                <h1 className="max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">{sector.title}</h1>
              </div>
            </div>

            <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
              <section>
                <h2 className="text-xl font-bold text-text-primary">ما المشكلة التي نساعدك فيها؟</h2>
                <ul className="mt-4 space-y-3">
                  {sector.challenge.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-text-secondary">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-text-primary">ما الحل؟</h2>
                <p className="mt-4 text-sm leading-7 text-text-secondary">{sector.solution}</p>
              </section>
            </div>

            <div className="border-t border-border-subtle bg-surface-subtle p-5 sm:p-8">
              <h2 className="text-xl font-bold text-text-primary">ماذا ستحصل عليه؟</h2>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {sector.outputs.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium text-text-primary shadow-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#20ba5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  ناقش احتياج منشأتك عبر واتساب
                </a>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
}
