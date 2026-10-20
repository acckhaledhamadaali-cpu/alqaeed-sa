export const SITE_URL = 'https://alqaeed-sa.pages.dev';

export interface SaudiCity {
  slug: string;
  name: string;
  region: string;
  context: string;
}

export interface LocalSeoService {
  slug: string;
  shortName: string;
  titlePrefix: string;
  description: string;
  focus: string[];
  deliverables: string[];
}

export interface LocalSeoPage {
  path: string;
  city: SaudiCity;
  service: LocalSeoService;
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  schema: object;
}

export const SAUDI_CITIES: SaudiCity[] = [
  { slug: 'riyadh', name: 'الرياض', region: 'منطقة الرياض', context: 'الشركات الخدمية والتجارية والمقرات الإدارية' },
  { slug: 'jeddah', name: 'جدة', region: 'منطقة مكة المكرمة', context: 'التجارة والتوزيع والخدمات والأنشطة المرتبطة بالميناء' },
  { slug: 'makkah', name: 'مكة المكرمة', region: 'منطقة مكة المكرمة', context: 'الخدمات والتجارة والأنشطة الموسمية' },
  { slug: 'madinah', name: 'المدينة المنورة', region: 'منطقة المدينة المنورة', context: 'التجارة والضيافة والخدمات' },
  { slug: 'dammam', name: 'الدمام', region: 'المنطقة الشرقية', context: 'التجارة والخدمات والأنشطة الصناعية' },
  { slug: 'khobar', name: 'الخبر', region: 'المنطقة الشرقية', context: 'الخدمات المهنية والشركات والمقاولات' },
  { slug: 'dhahran', name: 'الظهران', region: 'المنطقة الشرقية', context: 'الخدمات المهنية والأنشطة المرتبطة بقطاع الطاقة' },
  { slug: 'jubail', name: 'الجبيل', region: 'المنطقة الشرقية', context: 'الصناعة والمقاولات والتوريد والخدمات المساندة' },
  { slug: 'al-ahsa', name: 'الأحساء', region: 'المنطقة الشرقية', context: 'التجارة والأنشطة الزراعية والخدمات' },
  { slug: 'hofuf', name: 'الهفوف', region: 'المنطقة الشرقية', context: 'التجارة والخدمات والأنشطة العائلية' },
  { slug: 'taif', name: 'الطائف', region: 'منطقة مكة المكرمة', context: 'التجارة والضيافة والخدمات المحلية' },
  { slug: 'tabuk', name: 'تبوك', region: 'منطقة تبوك', context: 'المقاولات والتجارة والخدمات' },
  { slug: 'hail', name: 'حائل', region: 'منطقة حائل', context: 'التجارة والمقاولات والخدمات للمنشآت المتنامية' },
  { slug: 'buraydah', name: 'بريدة', region: 'منطقة القصيم', context: 'التجارة والتوزيع والأنشطة الغذائية والزراعية' },
  { slug: 'unaizah', name: 'عنيزة', region: 'منطقة القصيم', context: 'التجارة والخدمات والمنشآت العائلية' },
  { slug: 'yanbu', name: 'ينبع', region: 'منطقة المدينة المنورة', context: 'الصناعة والتوريد والخدمات' },
  { slug: 'jazan', name: 'جازان', region: 'منطقة جازان', context: 'التجارة والخدمات والأنشطة الصناعية' },
  { slug: 'najran', name: 'نجران', region: 'منطقة نجران', context: 'التجارة والمقاولات والخدمات' },
  { slug: 'abha', name: 'أبها', region: 'منطقة عسير', context: 'الخدمات والضيافة والتجارة' },
  { slug: 'khamis-mushait', name: 'خميس مشيط', region: 'منطقة عسير', context: 'التجارة والتوزيع والمقاولات' },
  { slug: 'al-bahah', name: 'الباحة', region: 'منطقة الباحة', context: 'الخدمات والتجارة والضيافة' },
  { slug: 'sakaka', name: 'سكاكا', region: 'منطقة الجوف', context: 'التجارة والخدمات والأنشطة الزراعية' },
  { slug: 'arar', name: 'عرعر', region: 'منطقة الحدود الشمالية', context: 'التجارة والخدمات والمقاولات' },
  { slug: 'hafr-al-batin', name: 'حفر الباطن', region: 'المنطقة الشرقية', context: 'التجارة والنقل والمقاولات والخدمات' },
  { slug: 'al-kharj', name: 'الخرج', region: 'منطقة الرياض', context: 'الصناعة والتجارة والأنشطة الزراعية' },
  { slug: 'qatif', name: 'القطيف', region: 'المنطقة الشرقية', context: 'التجارة والخدمات والأنشطة المحلية' },
  { slug: 'ras-tanura', name: 'رأس تنورة', region: 'المنطقة الشرقية', context: 'الخدمات والمقاولات والأنشطة الصناعية' },
  { slug: 'rabigh', name: 'رابغ', region: 'منطقة مكة المكرمة', context: 'الصناعة والتوريد والمقاولات' },
  { slug: 'al-ula', name: 'العلا', region: 'منطقة المدينة المنورة', context: 'الضيافة والسياحة والخدمات' },
  { slug: 'bisha', name: 'بيشة', region: 'منطقة عسير', context: 'التجارة والخدمات والأنشطة الزراعية' },
  { slug: 'al-qurayyat', name: 'القريات', region: 'منطقة الجوف', context: 'التجارة والخدمات والأنشطة الزراعية' },
  { slug: 'al-dawadmi', name: 'الدوادمي', region: 'منطقة الرياض', context: 'التجارة والمقاولات والخدمات' },
  { slug: 'zulfi', name: 'الزلفي', region: 'منطقة الرياض', context: 'التجارة والخدمات والمنشآت العائلية' },
  { slug: 'shaqra', name: 'شقراء', region: 'منطقة الرياض', context: 'التجارة والخدمات المحلية' },
  { slug: 'wadi-al-dawasir', name: 'وادي الدواسر', region: 'منطقة الرياض', context: 'الأنشطة الزراعية والتجارة والخدمات' },
  { slug: 'muhayil-asir', name: 'محايل عسير', region: 'منطقة عسير', context: 'التجارة والخدمات والمقاولات' },
  { slug: 'al-lith', name: 'الليث', region: 'منطقة مكة المكرمة', context: 'التجارة والخدمات والأنشطة الساحلية' },
  { slug: 'khulais', name: 'خليص', region: 'منطقة مكة المكرمة', context: 'التجارة والخدمات والمقاولات' },
  { slug: 'tarout', name: 'تاروت', region: 'المنطقة الشرقية', context: 'التجارة والخدمات والأنشطة المحلية' },
  { slug: 'safwa', name: 'صفوى', region: 'المنطقة الشرقية', context: 'التجارة والخدمات والمنشآت الصغيرة' },
];

export const LOCAL_SEO_SERVICES: LocalSeoService[] = [
  {
    slug: 'tax-services',
    shortName: 'الزكاة والضرائب',
    titlePrefix: 'خدمات الزكاة والضرائب',
    description: 'تنظيم بيانات الزكاة وضريبة القيمة المضافة ومراجعة المستندات وتجهيز بيانات الإقرار وفق حالة المنشأة والفترة والمتطلبات المنطبقة.',
    focus: ['تنظيم بيانات المبيعات والمشتريات والمصروفات ذات الصلة', 'مراجعة المستندات والفروقات الظاهرة قبل تجهيز الإقرار', 'تحديد البيانات الناقصة والأسئلة التي تحتاج إلى حسم قبل الاعتماد'],
    deliverables: ['قائمة بالمستندات والبيانات المطلوبة', 'تنظيم بيانات الفترة ومراجعة اتساقها', 'مسودة أو ملف بيانات للمراجعة بحسب نطاق العمل المتفق عليه'],
  },
  {
    slug: 'financial-statements',
    shortName: 'القوائم المالية',
    titlePrefix: 'إعداد القوائم المالية',
    description: 'تجميع الأرصدة ومراجعة اتساق السجلات المتاحة وإعداد القوائم والإيضاحات ضمن نطاق واضح، مع بيان البنود التي تحتاج إلى استكمال.',
    focus: ['تجميع الأرصدة وربطها بميزان المراجعة والمستندات المتاحة', 'مراجعة التصنيفات والتسويات الظاهرة قبل إعداد القوائم', 'توضيح الفرق بين إعداد القوائم والتدقيق أو المراجعة المستقلة'],
    deliverables: ['قوائم مالية بحسب النطاق والإطار المحاسبي المنطبق', 'إيضاحات وملاحظات على البيانات التي تحتاج إلى استكمال', 'قائمة بالأرصدة والتسويات التي تستلزم تأكيدًا من الإدارة'],
  },
  {
    slug: 'accounting-services',
    shortName: 'الخدمات المحاسبية',
    titlePrefix: 'خدمات محاسبية وتنظيم الحسابات',
    description: 'تنظيم الدورة المستندية والقيود ومسك الدفاتر ومطابقة الحسابات وإعداد تقارير دورية تساعد الإدارة على متابعة الأداء المالي.',
    focus: ['تنظيم المبيعات والمشتريات والمصروفات والمستندات', 'مطابقة الحسابات البنكية والعملاء والموردين عند توفر البيانات', 'إعداد تقارير للإيرادات والمصروفات والأرصدة والتدفقات النقدية'],
    deliverables: ['تنظيم دليل الحسابات والقيود بحسب الحاجة', 'ميزان مراجعة وأرصدة أكثر وضوحًا', 'تقارير دورية بحسب البيانات والفترة المتفق عليها'],
  },
];

export function getLocalSeoRoutes(): string[] {
  return SAUDI_CITIES.flatMap((city) =>
    LOCAL_SEO_SERVICES.map((service) => `/services/${city.slug}/${service.slug}`),
  );
}

export function getLocalSeoPage(path: string): LocalSeoPage | undefined {
  const normalized = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
  const match = normalized.match(/^\/services\/([^/]+)\/([^/]+)$/);
  if (!match) return undefined;

  const city = SAUDI_CITIES.find((item) => item.slug === match[1]);
  const service = LOCAL_SEO_SERVICES.find((item) => item.slug === match[2]);
  if (!city || !service) return undefined;

  const title = `${service.titlePrefix} في ${city.name} للمنشآت | القائد`;
  const description = `${service.description} خدمة عن بُعد للمنشآت الصغيرة والمتوسطة في ${city.name}، ${city.region}. يُحدد نطاق العمل بعد مراجعة احتياج المنشأة والبيانات المتاحة.`;
  const canonical = `${SITE_URL}/services/${city.slug}/${service.slug}/`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        inLanguage: 'ar-SA',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'Service',
        '@id': `${canonical}#service`,
        name: `${service.shortName} للمنشآت في ${city.name}`,
        description,
        serviceType: service.shortName,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: {
          '@type': 'City',
          name: city.name,
          containedInPlace: { '@type': 'AdministrativeArea', name: city.region },
        },
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: canonical,
          serviceLocation: { '@type': 'Country', name: 'Saudi Arabia' },
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'الخدمات', item: `${SITE_URL}/services/bookkeeping/` },
          { '@type': 'ListItem', position: 3, name: city.name, item: `${SITE_URL}/services/${city.slug}/` },
          { '@type': 'ListItem', position: 4, name: service.shortName, item: canonical },
        ],
      },
    ],
  };

  return {
    path: normalized,
    city,
    service,
    title,
    description,
    canonical,
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
    schema,
  };
}
