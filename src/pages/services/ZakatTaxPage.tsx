import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';

const WHATSAPP_NUMBER = '966511294383';
const WHATSAPP_MESSAGE = 'السلام عليكم، أحتاج استفسارًا عن إعداد إقرار الزكاة أو ضريبة القيمة المضافة لمنشأتي. ما المعلومات المطلوبة لتحديد الإقرار والفترة؟';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const VAT_SERVICE_URL = 'https://zatca.gov.sa/ar/eServices/Pages/eServices-009.aspx';
const VAT_GUIDE_URL = 'https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/Simplified_VAT_Filing_Guidelines.pdf';
const VAT_REGULATIONS_URL = 'https://zatca.gov.sa/ar/RulesRegulations/VAT/Pages/default.aspx';
const ZAKAT_SERVICE_URL = 'https://zatca.gov.sa/ar/eServices/Pages/eServices-051.aspx';
const ZAKAT_REGULATION_URL = 'https://zatca.gov.sa/ar/RulesRegulations/Taxes/Pages/ZakatRegulations.aspx';
const ZAKAT_FAQ_URL = "https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/FAQ's-For-ZAKAT-Regulations1445H.pdf";
const RETURNS_CALENDAR_URL = 'https://zatca.gov.sa/en/MediaCenter/Publications/Documents/Zakat%20Declaration%20and%20Tax%20Returns%20Calendar%20(EN).pdf';

function OfficialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-secondary"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function ZakatTaxPage() {
  const name = 'الإقرار الزكوي وإقرار ضريبة القيمة المضافة';
  const slug = 'zakat-tax';
  const metaTitle = 'إقرار الزكاة وضريبة القيمة المضافة | القائد';
  const metaDesc = 'إعداد ومراجعة الإقرار الزكوي وضريبة القيمة المضافة للمنشآت السعودية عن بُعد. شرح مبسط للمستندات المطلوبة وفترة التقديم وما تجهزه قبل اعتماد الإقرار.';
  const url = `https://alqaeed-sa.pages.dev/services/${slug}/`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: metaTitle,
        description: metaDesc,
        primaryImageOfPage: { '@id': 'https://alqaeed-sa.pages.dev/#logo' },
        inLanguage: 'ar-SA',
        isPartOf: { '@id': 'https://alqaeed-sa.pages.dev/#website' },
      },
      {
        '@type': 'Service',
        '@id': `${url}#vat-service`,
        name: 'إعداد ومراجعة إقرار ضريبة القيمة المضافة',
        description: 'إعداد أو مراجعة بيانات إقرار ضريبة القيمة المضافة للمنشآت المسجلة، بحسب مستندات الفترة وقواعد الهيئة.',
        provider: { '@id': 'https://alqaeed-sa.pages.dev/#organization' },
        areaServed: 'Saudi Arabia',
      },
      {
        '@type': 'Service',
        '@id': `${url}#zakat-service`,
        name: 'إعداد ومراجعة الإقرار الزكوي',
        description: 'إعداد أو مراجعة بيانات الإقرار الزكوي بحسب صفة المكلف ونوع الإقرار والفترة والمستندات ذات الصلة.',
        provider: { '@id': 'https://alqaeed-sa.pages.dev/#organization' },
        areaServed: 'Saudi Arabia',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://alqaeed-sa.pages.dev/' },
          { '@type': 'ListItem', position: 2, name, item: url },
        ],
      },
    ],
  };

  useSEO({ title: metaTitle, description: metaDesc, canonical: url, schema });

  return (
    <SectionWrapper id={`service-${slug}-section`} variant="white" spacing="default">
      <Container>
        <div className="mx-auto max-w-5xl py-3 text-right font-arabic md:py-6">
          <nav aria-label="مسار التنقل" className="mb-4 text-xs text-text-muted">
            <a href="/" className="transition-colors hover:text-primary">الرئيسية - القائد للإدارة المالية</a>
            <span className="mx-2 text-border-subtle">/</span>
            <span className="text-text-secondary">{name}</span>
          </nav>

          <header className="grid gap-4 py-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8">
            <div>
              <p className="mb-2 text-xs text-secondary sm:text-sm">للمنشآت الصغيرة والمتوسطة في المملكة</p>
              <h1 className={`${TYPOGRAPHY.heading.h1} leading-tight text-text-primary`}>
                الإقرار الزكوي وإقرار ضريبة القيمة المضافة
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-text-secondary md:text-[15px]">
                الزكاة وضريبة القيمة المضافة التزامان مختلفان، ولكل منهما طريقة حساب وفترة ومستندات خاصة. أراجع بيانات منشأتك وأجهز مسودة الإقرار المناسب، ثم أوضح لك ما يحتاج إلى استكمال قبل اعتمادك.
              </p>
              <p className="mt-2 text-xs leading-6 text-text-muted">
                خدمة عن بُعد في جميع مناطق المملكة · خالد القائد، محاسب مالي
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              data-track-whatsapp="cta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#25D366] px-5 py-2.5 text-xs text-white transition-colors hover:bg-[#20ba5a] sm:text-sm md:min-w-56"
            >
              استفسر عن الإقرار المناسب عبر واتساب
            </a>
          </header>

          <nav aria-label="انتقل إلى تفاصيل الإقرار" className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm">
            <span className="text-text-muted">انتقل إلى:</span>
            <a href="#vat-return" className="text-primary underline underline-offset-4 hover:text-secondary">ضريبة القيمة المضافة</a>
            <a href="#zakat-return" className="text-primary underline underline-offset-4 hover:text-secondary">الإقرار الزكوي</a>
          </nav>

          <section id="vat-return" aria-labelledby="vat-return-heading" className="mt-8 scroll-mt-24">
            <p className="mb-1 text-xs text-secondary">أولًا · ضريبة القيمة المضافة</p>
            <h2 id="vat-return-heading" className="text-lg text-text-primary md:text-xl">
              إقرار ضريبة القيمة المضافة
            </h2>
            <p className="mt-2 max-w-4xl text-sm leading-7 text-text-secondary">
              يقدّم الإقرار كل شخص مسجل في ضريبة القيمة المضافة عن الفترة الظاهرة في حسابه لدى الهيئة. يوضح الإقرار ضريبة المخرجات على المبيعات الخاضعة، وضريبة المدخلات على مشتريات المنشأة. لا تُخصم ضريبة كل فاتورة تلقائيًا؛ يجب أن يرتبط الشراء بالنشاط وأن تستوفي الفاتورة وبقية المستندات شروط الخصم.
            </p>
            <p className="mt-2 max-w-4xl text-sm leading-7 text-text-secondary">
              بعد مراجعة الأرقام، يبيّن الإقرار صافي الضريبة المستحقة أو الرصيد الدائن وفق المعالجة النظامية. لذلك لا يكفي جمع إجمالي الفواتير؛ المهم تصنيف كل عملية بحسب طبيعتها والفترة التي تخصها.
            </p>

            <div className="mt-4">
              <h3 className="text-base text-text-primary">ما فترة الإقرار ومتى موعده؟</h3>
              <p className="mt-1 max-w-4xl text-sm leading-7 text-text-secondary">
                تُحسب الفترة بحسب قيمة المبيعات الخاضعة للضريبة، أو «التوريدات» بحسب تسمية الهيئة. تكون شهرية إذا تجاوزت هذه القيمة 40 مليون ريال خلال الاثني عشر شهرًا السابقة، وربع سنوية في الحالات الأخرى. ويمكن لمنشأة لا تتجاوز الحد طلب الفترة الشهرية وفق ضوابط الهيئة. موعد التقديم المعتاد آخر يوم من الشهر التالي للفترة؛ اعتمد التاريخ المحدد في حسابك وتقويم ZATCA.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-base text-text-primary">ما الذي أراجعه؟</h3>
              <ul className="mt-1 list-disc space-y-1 pr-5 text-sm leading-7 text-text-secondary">
                <li><strong className="text-primary">المبيعات:</strong> مطابقة إجماليات الفترة بالفواتير ومراجعة تاريخ كل عملية وتصنيفها.</li>
                <li><strong className="text-primary">المشتريات:</strong> مطابقة المصروفات بالفواتير والتحقق من ارتباطها بالنشاط وأهلية ضريبتها للخصم.</li>
                <li><strong className="text-primary">التسويات:</strong> مراجعة إشعارات تخفيض الفاتورة أو زيادتها، ومستندات الاستيراد عند وجودها.</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-base text-text-primary">ما المستندات التي أجهزها؟</h3>
              <p className="mt-1 max-w-4xl text-sm leading-7 text-text-secondary">
                تقرير المبيعات والمشتريات للفترة، والفواتير والإشعارات المرتبطة بها، ومستندات الاستيراد إن وجدت. وإذا كانت المراجعة لتصحيح إقرار سابق أو متابعة رصيد مرحّل، أرفق الإقرار السابق والمستندات المتعلقة به.
              </p>
            </div>

            <p className="mt-3 text-xs leading-6 text-text-muted">
              مصادر الهيئة:{' '}
              <OfficialLink href={VAT_SERVICE_URL}>خدمة تقديم الإقرار</OfficialLink>
              {' · '}
              <OfficialLink href={VAT_GUIDE_URL}>دليل رفع الإقرار</OfficialLink>
              {' · '}
              <OfficialLink href={VAT_REGULATIONS_URL}>الأنظمة واللوائح</OfficialLink>
            </p>
          </section>

          <section id="zakat-return" aria-labelledby="zakat-return-heading" className="mt-9 scroll-mt-24">
            <p className="mb-1 text-xs text-secondary">ثانيًا · الزكاة</p>
            <h2 id="zakat-return-heading" className="text-lg text-text-primary md:text-xl">
              الإقرار الزكوي للمنشآت
            </h2>
            <p className="mt-2 max-w-4xl text-sm leading-7 text-text-secondary">
                الإقرار الزكوي منفصل عن إقرار ضريبة القيمة المضافة؛ تقديم أحدهما لا يغني عن الآخر إذا كان كلاهما مطلوبًا من المنشأة. ويعتمد تحديد خضوع المنشأة وطريقة إعداد الإقرار على شكلها القانوني وملكية الشركاء وما هو مسجل لدى الهيئة؛ لذلك لا يكفي اسم النشاط أو رقم المبيعات وحده لمعرفة الالتزام.
            </p>
            <p className="mt-2 max-w-4xl text-sm leading-7 text-text-secondary">
              الوعاء الزكوي هو المبلغ الذي تُحسب الزكاة على أساسه وفق اللائحة. وهو لا يساوي صافي الربح بالضرورة؛ إذ قد تؤثر فيه بنود من القوائم المالية والسجلات وطريقة تصنيفها. لهذا تتم مطابقة الأرقام مع ميزان المراجعة ودفتر الأستاذ والمستندات، لا الاكتفاء بصافي الربح.
            </p>
            <p className="mt-2 max-w-4xl text-sm leading-7 text-text-secondary">
              الموعد النظامي لتقديم الإقرار الزكوي هو خلال 120 يومًا من نهاية السنة المالية، بحسب التقويم المالي للمنشأة. تحقّق من تاريخ الاستحقاق المسجل في حساب المنشأة لدى ZATCA.
            </p>

            <div className="mt-4">
              <h3 className="text-base text-text-primary">ما الذي أراجعه؟</h3>
              <ul className="mt-1 list-disc space-y-1 pr-5 text-sm leading-7 text-text-secondary">
                <li>صفة المكلف والفترة المالية ونوع الإقرار الظاهر في حساب المنشأة.</li>
                <li>القوائم المالية وميزان المراجعة ودفتر الأستاذ العام، ومطابقة الأرقام بالسجلات المؤيدة.</li>
                <li>المستندات والإفصاحات الإضافية التي يطلبها نوع الإقرار، ومنها متطلبات تسعير المعاملات إذا انطبقت.</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-base text-text-primary">هل القوائم المالية المدققة مطلوبة؟</h3>
              <p className="mt-1 max-w-4xl text-sm leading-7 text-text-secondary">
                إذا كان النظام يلزم منشأتك بمسك دفاتر محاسبية، فالأصل إرفاق قوائم مالية مدققة ومعتمدة من محاسب قانوني مرخص، مع وجود استثناءات لحالات محددة. لذلك لا نفترض أن التدقيق مطلوب من كل منشأة أو غير مطلوب منها؛ نتحقق من وضع المنشأة ومتطلبات حسابها لدى الهيئة.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-base text-text-primary">ما المستندات التي أجهزها؟</h3>
              <p className="mt-1 max-w-4xl text-sm leading-7 text-text-secondary">
                جهّز بيانات التسجيل والفترة المالية، والقوائم المالية وميزان المراجعة ودفتر الأستاذ العام المتاح، ومستندات البنود التي تحتاج إلى تفسير أو مطابقة. وتُطلب القوائم المدققة أو النماذج الإضافية عندما تنطبق على صفة المكلف.
              </p>
            </div>

            <p className="mt-3 text-xs leading-6 text-text-muted">
              مصادر الهيئة:{' '}
              <OfficialLink href={ZAKAT_SERVICE_URL}>خدمة الإقرار الزكوي</OfficialLink>
              {' · '}
              <OfficialLink href={ZAKAT_REGULATION_URL}>اللائحة التنفيذية</OfficialLink>
              {' · '}
              <OfficialLink href={ZAKAT_FAQ_URL}>الأسئلة الشائعة</OfficialLink>
              {' · '}
              <OfficialLink href={RETURNS_CALENDAR_URL}>تقويم المواعيد</OfficialLink>
            </p>
          </section>

          <section id="service-scope" aria-labelledby="service-scope-heading" className="mt-9 scroll-mt-24">
            <h2 id="service-scope-heading" className="text-base text-text-primary">كيف تسير الخدمة؟</h2>
            <ol className="mt-2 list-decimal space-y-1 pr-5 text-sm leading-7 text-text-secondary">
              <li>نحدد نوع الإقرار والفترة وما يظهر في حساب المنشأة لدى الهيئة.</li>
              <li>أراجع السجلات والمستندات، وأجهز مسودة الإقرار مع توضيح النواقص أو الأرقام التي تحتاج إلى مراجعة.</li>
              <li>تراجع المسودة وتعتمدها. ولا يتم التقديم نيابة عنك إلا بعد موافقتك واستكمال التفويض الرسمي.</li>
            </ol>
            <p className="mt-2 max-w-4xl text-xs leading-6 text-text-muted">
              الخدمة إعداد ومراجعة، وليست تدقيقًا للقوائم المالية أو ضمانًا لقبول الإقرار من الهيئة. لا ترسل كلمة مرور حسابك أو مستنداتك المالية في أول رسالة؛ يكفي ذكر نوع الإقرار والفترة، ثم نتفق على طريقة مناسبة لتبادل الملفات عند بدء العمل.
            </p>
          </section>

          <section id="common-questions" aria-labelledby="common-questions-heading" className="mt-9 scroll-mt-24">
            <h2 id="common-questions-heading" className="text-lg text-text-primary md:text-xl">أسئلة قد تهمك</h2>
            <div className="mt-3 space-y-4">
              <article>
                <h3 className="text-base text-text-primary">هل الزكاة وضريبة القيمة المضافة إقرار واحد؟</h3>
                <p className="mt-1 text-sm leading-7 text-text-secondary">
                  لا. لكل منهما أساس حساب وفترة ومتطلبات مختلفة. إذا كانت منشأتك مطالبة بهما، فيجب إعداد كل إقرار على حدة.
                </p>
              </article>
              <article>
                <h3 className="text-base text-text-primary">إذا لم يكن لدي مبيعات في فترة VAT، هل أتجاهل الإقرار؟</h3>
                <p className="mt-1 text-sm leading-7 text-text-secondary">
                  لا تفترض أن عدم وجود مبيعات يلغي الإقرار. افحص الفترة والطلب الظاهرين في حساب المنشأة لدى الهيئة، وقدّم الإقرار المطلوب حتى لو كانت بيانات الفترة صفرية.
                </p>
              </article>
              <article>
                <h3 className="text-base text-text-primary">هل أحتاج إلى إرسال ملفاتي أو كلمة المرور عند بدء التواصل؟</h3>
                <p className="mt-1 text-sm leading-7 text-text-secondary">
                  لا. ابدأ بذكر نوع النشاط ونوع الإقرار والفترة فقط. لا تشارك بيانات الدخول، ولا ترسل ملفات مالية قبل الاتفاق على طريقة تبادلها.
                </p>
              </article>
            </div>
          </section>

          <p className="mt-6 text-sm leading-7 text-text-secondary">
            إذا أردت الاطلاع على قائمة أوسع من الأسئلة والمستندات، اقرأ{' '}
            <a href="/blog/zakat-vat-return-guide-saudi-businesses/" className="text-primary underline underline-offset-4 hover:text-secondary">دليل إقرار الزكاة وضريبة القيمة المضافة للمنشآت السعودية</a>.
            {' '}وإذا كانت سجلاتك بحاجة إلى تنظيم، تعرّف على{' '}
            <a href="/services/bookkeeping/" className="text-primary underline underline-offset-4 hover:text-secondary">خدمة تنظيم الحسابات ومسك الدفاتر</a>.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
