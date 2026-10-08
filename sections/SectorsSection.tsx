import { ArrowLeft, BarChart3, BriefcaseBusiness, Building2, HeartPulse, ShoppingCart, Utensils } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';

const sectors = [
  {
    slug: 'restaurants-cafes',
    title: 'المطاعم والكافيهات',
    imageAlt: 'المطاعم والكافيهات',
    icon: Utensils,
    question: 'هل تعرف ربحك الحقيقي بعد تكلفة المواد والمخزون والمصروفات؟',
  },
  {
    slug: 'contracting',
    title: 'المقاولات',
    imageAlt: 'قطاع المقاولات والمشاريع',
    icon: Building2,
    question: 'هل تعرف ربحية مشاريعك وهل التكاليف والتدفقات النقدية تحت السيطرة؟',
  },
  {
    slug: 'trade-retail',
    title: 'التجارة والتجزئة',
    imageAlt: 'التجارة والتجزئة',
    icon: ShoppingCart,
    question: 'هل تعرف هامش ربح كل منتج وهل المخزون يستهلك سيولتك؟',
  },
  {
    slug: 'pharmacies-health',
    title: 'الصيدليات والأنشطة الصحية',
    imageAlt: 'الصيدليات والأنشطة الصحية',
    icon: HeartPulse,
    question: 'هل تعرف ربحية نشاطك بعد تكلفة المبيعات والمخزون والمصروفات؟',
  },
  {
    slug: 'services-professions',
    title: 'الخدمات والمهن',
    imageAlt: 'الخدمات والمهن',
    icon: BriefcaseBusiness,
    question: 'أي خدمة تحقق لك أكبر ربح وهل التحصيل والمصروفات تحت السيطرة؟',
  },
  {
    slug: 'startups-growing',
    title: 'الشركات الناشئة والمتنامية',
    imageAlt: 'الشركات الناشئة والمنشآت المتنامية',
    icon: BarChart3,
    question: 'كم تحرق الشركة شهريًا وكم يكفيها النقد وهل النمو يسير بطريقة صحية؟',
  },
];

export default function SectorsSection() {
  return (
    <SectionWrapper id="sectors-section-wrapper" variant="subtle" spacing="dense">
      <Container id="sectors-container">
        <div className="mx-auto max-w-3xl text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            نفهم طبيعة نشاطك وندعم نموه
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-7 text-text-secondary">
            كل قطاع له تحدياته المالية الخاصة، لذلك نبدأ من واقع منشأتك ونقدم لك حلولًا عملية تناسب نشاطك.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <article
                key={sector.slug}
                className="group overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/7] overflow-hidden bg-surface-subtle">
                  <img
                    src={`/images/sectors/${sector.slug}-640.webp`}
                    srcSet={`/images/sectors/${sector.slug}-320.webp 320w, /images/sectors/${sector.slug}-640.webp 640w`}
                    sizes="(max-width: 639px) 48vw, (max-width: 1023px) 48vw, 31vw"
                    alt={sector.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-primary shadow-md backdrop-blur-sm sm:bottom-3 sm:right-3 sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </div>
                </div>

                <div className="p-3 sm:p-5">
                  <h3 className="text-sm sm:text-lg font-bold leading-6 text-text-primary">
                    {sector.title}
                  </h3>
                  <p className="mt-2 min-h-[3.5rem] text-[11px] sm:text-sm leading-5 sm:leading-6 text-text-secondary">
                    {sector.question}
                  </p>
                  <a
                    href={`/sectors/${sector.slug}/`}
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-[#f8f6ef] px-3 py-2.5 text-[11px] font-bold text-slate-800 transition hover:bg-[#f1eee3] focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 sm:text-sm"
                  >
                    <span>تفاصيل القطاع</span>
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
