import { MessageCircle, ArrowLeft, CheckCircle2, FileText, Calculator, Building2 } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';
import { getLocalSeoPage, LOCAL_SEO_SERVICES, SAUDI_CITIES } from '../../data/localSeo';

const WHATSAPP_NUMBER = '966511294383';

export default function LocalServiceCityPage({ path }: { path: string }) {
  const page = getLocalSeoPage(path);

  const fallback = {
    title: 'الخدمة غير متاحة | القائد للإدارة المالية',
    description: 'خدمات محاسبية عن بُعد للمنشآت الصغيرة والمتوسطة في السعودية.',
    canonical: 'https://alqaeed-sa.pages.dev/services/bookkeeping/',
    schema: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'الخدمات المحاسبية' },
  };
  useSEO({
    title: page?.title ?? fallback.title,
    description: page?.description ?? fallback.description,
    canonical: page?.canonical ?? fallback.canonical,
    schema: page?.schema ?? fallback.schema,
  });

  if (!page) {
    return (
      <main dir="rtl" className="mx-auto max-w-3xl px-4 py-20 text-right font-arabic">
        <h1 className="text-2xl font-bold text-slate-900">الصفحة غير متاحة</h1>
        <p className="mt-3 text-slate-600">تحقق من رابط الخدمة أو انتقل إلى صفحة الخدمات.</p>
        <a className="mt-5 inline-flex text-emerald-700 underline" href="/services/bookkeeping/">عرض الخدمات المحاسبية</a>
      </main>
    );
  }

  const { city, service, title, description, canonical } = page;

  const message = `السلام عليكم، أحتاج الاستفسار عن ${service.shortName} لمنشأتي في ${city.name}. أرجو توضيح البيانات المطلوبة ونطاق الخدمة.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const otherServices = LOCAL_SEO_SERVICES.filter((item) => item.slug !== service.slug);
  const relatedCities = SAUDI_CITIES.filter((item) => item.slug !== city.slug).slice(0, 6);

  return (
    <div dir="rtl" className="min-h-screen bg-white text-slate-900 antialiased">
      <main id="main-content" className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <nav aria-label="مسار التنقل" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <a href="/" className="hover:text-emerald-700">الرئيسية</a>
          <span aria-hidden="true">/</span>
          <a href="/services/bookkeeping/" className="hover:text-emerald-700">الخدمات المحاسبية</a>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">{city.name}</span>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">{service.shortName}</span>
        </nav>

        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
          <p className="mb-3 text-sm font-semibold text-emerald-700">خدمة عن بُعد للمنشآت الصغيرة والمتوسطة · {city.region}</p>
          <h1 className="max-w-4xl text-2xl font-bold leading-relaxed sm:text-3xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            نساعد المنشآت في {city.name} على تنظيم البيانات المالية وتجهيز المخرجات المحاسبية المناسبة لاحتياجها. ونراعي عند تحديد نطاق العمل طبيعة النشاط، وحجم العمليات، والفترة المطلوب العمل عليها، ومدى اكتمال المستندات المتاحة.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            وبالنظر إلى طبيعة الأعمال في {city.name} وما يرتبط بها من {city.context}، يبدأ العمل بفهم دورة المستندات والبيانات الفعلية للمنشأة، دون افتراض وجود فرع محلي أو تقديم خدمة ميدانية داخل المدينة.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800">
              <MessageCircle size={18} /> ناقش احتياج منشأتك
            </a>
            <a href="/services/bookkeeping/" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:border-slate-500">
              جميع الخدمات <ArrowLeft size={17} />
            </a>
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-xl font-bold sm:text-2xl">ماذا تشمل {service.shortName} في {city.name}؟</h2>
          <p className="mt-3 max-w-3xl leading-8 text-slate-600">{service.description}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {service.focus.map((item, index) => (
              <article key={item} className="rounded-xl border border-slate-200 p-5">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  {index === 0 ? <Calculator size={20} /> : index === 1 ? <FileText size={20} /> : <Building2 size={20} />}
                </span>
                <h3 className="font-bold"> {['تنظيم البيانات', 'المراجعة الأولية', 'مخرجات واضحة'][index]}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-slate-50 p-6 sm:p-8">
          <h2 className="text-xl font-bold">آلية العمل</h2>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['فهم النشاط', 'تحديد طبيعة المنشأة والفترة والخدمة المطلوبة.'],
              ['استلام البيانات', 'حصر السجلات والمستندات المتاحة وتحديد النواقص.'],
              ['تحديد النطاق', 'الاتفاق على المخرجات والمدة والأتعاب قبل البدء.'],
              ['التنفيذ والمراجعة', 'إعداد المخرجات المتفق عليها وشرح الملاحظات للإدارة.'],
            ].map(([heading, text], index) => (
              <li key={heading} className="rounded-xl bg-white p-4">
                <span className="text-xs font-bold text-emerald-700">الخطوة {index + 1}</span>
                <h3 className="mt-2 font-bold">{heading}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="py-10">
          <h2 className="text-xl font-bold">المخرجات التي يمكن الاتفاق عليها</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 p-4 leading-7">
                <CheckCircle2 size={19} className="mt-1 shrink-0 text-emerald-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            تختلف المخرجات حسب نشاط المنشأة والبيانات المتاحة والنطاق المتفق عليه. إعداد القوائم أو تجهيز بيانات الإقرارات لا يعني تلقائيًا تقديم تدقيق قانوني مستقل أو ضمان قبول لدى جهة رسمية؛ ويُحدد أي اعتماد أو إجراء رسمي وفق المتطلبات والصلاحيات المنطبقة.
          </p>
        </section>

        <section className="border-t border-slate-200 py-8">
          <h2 className="text-xl font-bold">خدمات أخرى للمنشآت في {city.name}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {otherServices.map((item) => (
              <a key={item.slug} href={`/services/${city.slug}/${item.slug}/`} className="group flex items-center justify-between rounded-lg border border-slate-200 p-4 hover:border-emerald-700">
                <span>
                  <strong className="block">{item.titlePrefix} في {city.name}</strong>
                  <span className="mt-1 block text-sm text-slate-500">{item.shortName}</span>
                </span>
                <ArrowLeft size={18} className="text-emerald-700 transition group-hover:-translate-x-1" />
              </a>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 py-8">
          <h2 className="text-xl font-bold">نخدم المنشآت في مدن سعودية أخرى عن بُعد</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {relatedCities.map((item) => (
              <a key={item.slug} href={`/services/${item.slug}/${service.slug}/`} className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:border-emerald-700 hover:text-emerald-800">
                {service.shortName} في {item.name}
              </a>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
          <h2 className="text-xl font-bold">هل تحتاج إلى {service.shortName} لمنشأتك في {city.name}؟</h2>
          <p className="mt-3 max-w-3xl leading-8 text-slate-300">أرسل وصفًا مختصرًا لنشاط المنشأة والفترة المطلوبة، وسنحدد المعلومات اللازمة لمناقشة نطاق العمل قبل الاتفاق على التنفيذ.</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-500">
            <MessageCircle size={18} /> تواصل عبر واتساب
          </a>
        </section>
      </main>
    </div>
  );
}
