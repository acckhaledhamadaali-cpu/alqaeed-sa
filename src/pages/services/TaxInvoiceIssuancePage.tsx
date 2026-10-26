import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { MessageCircle, FileText, ShieldCheck, ClipboardList } from 'lucide-react';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في معرفة تفاصيل خدمة إصدار الفواتير الضريبية لمنشأتي.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function TaxInvoiceIssuancePage() {
  const title = "إصدار الفواتير الضريبية والإلكترونية للمنشآت";
  const description = "خدمة مساندة للمنشآت في تجهيز وإصدار الفواتير الضريبية والإلكترونية وفق بيانات العمليات ومتطلبات الفوترة المطبقة، مع تنظيم بيانات العملاء والمبيعات.";
  useSEO({
    title: "إصدار فواتير ضريبية وإلكترونية للشركات | القائد",
    description,
    canonical: "https://alqaeed-sa.pages.dev/services/tax-invoice-issuance/"
  });

  return (
    <div className="bg-white">
      <SectionWrapper>
        <Container>
          <div className="max-w-4xl mx-auto py-8 md:py-14 text-right" dir="rtl">
            <nav aria-label="مسار التنقل" className="text-sm text-text-secondary mb-5">
              <a href="/" className="hover:underline">الرئيسية</a>
              <span className="mx-2">/</span>
              <span>إصدار الفواتير الضريبية</span>
            </nav>
            <p className="text-sm font-semibold text-secondary mb-3">خدمة محاسبية عن بُعد للمنشآت في السعودية</p>
            <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-5">{title}</h1>
            <p className="text-base md:text-lg leading-8 text-text-secondary mb-7">
              هل تتعامل منشأتك مع عدد كبير من الطلبات أو العملاء وتحتاج إلى تنظيم إصدار الفواتير؟ تساعدك خدمة إصدار الفواتير الضريبية على ترتيب بيانات المبيعات وتجهيز الفواتير وفق المعلومات التي تقدمها منشأتك، بما يدعم انتظام العمل وسهولة الرجوع إلى المستندات.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:opacity-90">
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              استفسر عن خدمة إصدار الفواتير
            </a>

            <div className="grid md:grid-cols-3 gap-4 my-10">
              <div className="border border-border-subtle rounded-xl p-5">
                <FileText className="w-6 h-6 text-secondary mb-3" aria-hidden="true" />
                <h2 className="font-bold text-primary mb-2">تنظيم بيانات الفاتورة</h2>
                <p className="text-sm leading-7 text-text-secondary">ترتيب بيانات العميل والمنتجات أو الخدمات والكميات والأسعار والخصومات والضريبة بحسب المستندات المعتمدة.</p>
              </div>
              <div className="border border-border-subtle rounded-xl p-5">
                <ClipboardList className="w-6 h-6 text-secondary mb-3" aria-hidden="true" />
                <h2 className="font-bold text-primary mb-2">مساندة في إصدار الفواتير</h2>
                <p className="text-sm leading-7 text-text-secondary">تحديد آلية العمل بحسب نظام المنشأة وصلاحيات المستخدم والبيانات المتاحة، مع توثيق النواقص قبل الإتمام.</p>
              </div>
              <div className="border border-border-subtle rounded-xl p-5">
                <ShieldCheck className="w-6 h-6 text-secondary mb-3" aria-hidden="true" />
                <h2 className="font-bold text-primary mb-2">اهتمام بمتطلبات الامتثال</h2>
                <p className="text-sm leading-7 text-text-secondary">مراعاة متطلبات الفوترة الإلكترونية المنطبقة على المنشأة، دون اعتبار الخدمة ضمانًا لقبول الفواتير أو الإعفاء من الالتزامات النظامية.</p>
              </div>
            </div>

            <section className="mb-9">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">ما المقصود بخدمة إصدار الفواتير الضريبية؟</h2>
              <p className="leading-8 text-text-secondary mb-3">هي خدمة تشغيلية ومحاسبية لمساندة المنشآت في إعداد بيانات الفواتير الضريبية وإصدارها بناءً على عمليات بيع أو تقديم خدمات حقيقية ومستندات معتمدة. تُحدد مسؤوليات التنفيذ وطريقته مسبقًا: فقد يتم العمل داخل النظام المحاسبي أو نظام الفوترة الإلكتروني التابع للمنشأة بصلاحيات مفوضة، أو تجهيز بيانات الفواتير لتُراجع وتُصدر وفق آلية معتمدة لدى العميل.</p>
              <p className="leading-8 text-text-secondary">تُصدر الفواتير باسم المنشأة صاحبة العملية وببياناتها النظامية والضريبية الصحيحة، ولا تُستخدم بيانات أو رقم تسجيل ضريبي لمنشأة أخرى. كما لا تُنشأ فواتير لعمليات غير حقيقية أو بقيم لا تعكس المعاملة الفعلية.</p>
            </section>

            <section className="mb-9">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">متى تحتاج المنشأة إلى مساعدة في إصدار الفواتير الإلكترونية؟</h2>
              <ul className="list-disc pr-5 space-y-2 leading-8 text-text-secondary">
                <li>عند وجود عدد متكرر من فواتير المبيعات التي تستغرق وقتًا لإعدادها.</li>
                <li>عندما يحتاج فريق العمل إلى تنظيم بيانات العملاء والأصناف والأسعار قبل إصدار الفاتورة.</li>
                <li>عند الرغبة في تقليل أخطاء الإدخال ومراجعة البيانات الأساسية قبل الإصدار.</li>
                <li>عندما تحتاج الإدارة إلى ترتيب المستندات وربط الفواتير بسجلات المبيعات والحسابات.</li>
                <li>عند الحاجة إلى دعم محاسبي مرن دون توظيف محاسب بدوام كامل لهذه المهمة وحدها.</li>
              </ul>
            </section>

            <section className="mb-9">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">ما البيانات المطلوبة لإصدار الفاتورة؟</h2>
              <p className="leading-8 text-text-secondary mb-3">تختلف البيانات حسب نوع الفاتورة وطبيعة المعاملة ومتطلبات المنشأة. عادةً ما يلزم توفير بيانات البائع والعميل عند انطباقها، ووصف السلعة أو الخدمة، والكمية والسعر، وتاريخ العملية، وأي خصومات أو مبالغ إضافية، والمعالجة الضريبية الصحيحة، إلى جانب المستندات المؤيدة للعملية.</p>
              <p className="leading-8 text-text-secondary">قبل بدء العمل، تُراجع طريقة استلام البيانات وصلاحيات الوصول ومسؤولية اعتماد الفاتورة وإصدارها وحفظها. ويظل صاحب المنشأة مسؤولًا عن صحة بيانات معاملاته والتزاماته، وفق الترتيبات النظامية والتعاقدية المنطبقة.</p>
            </section>

            <section className="mb-9">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">الفواتير الضريبية والفوترة الإلكترونية في السعودية</h2>
              <p className="leading-8 text-text-secondary mb-3">تخضع الفوترة الإلكترونية في المملكة لمتطلبات هيئة الزكاة والضريبة والجمارك، ويعتمد التطبيق العملي على نوع المكلف والمرحلة والمتطلبات المنطبقة عليه. لذلك ينبغي استخدام نظام وطريقة إصدار متوافقين مع وضع المنشأة، والتحقق من متطلبات الربط والتكامل عند انطباقها، وعدم الاكتفاء بملف أو نموذج غير مستوفٍ للمتطلبات.</p>
              <p className="leading-8 text-text-secondary">هذه الصفحة للتعريف بالخدمة المحاسبية وليست فتوى ضريبية أو تأكيدًا بأن كل منشأة تخضع للمتطلبات نفسها. تُحدد التفاصيل بعد معرفة نشاط المنشأة وحالتها الضريبية ونظام الفوترة المستخدم، مع الرجوع إلى تعليمات الهيئة الرسمية عند الحاجة.</p>
              <p className="mt-3 text-sm leading-7 text-text-secondary">للاطلاع على المتطلبات الرسمية، راجع موقع <a className="text-primary font-semibold underline" href="https://zatca.gov.sa/ar/E-Invoicing/Pages/default.aspx" target="_blank" rel="noopener noreferrer">هيئة الزكاة والضريبة والجمارك – الفوترة الإلكترونية</a>.</p>
            </section>

            <section className="mb-9">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">أسئلة شائعة عن إصدار الفواتير الضريبية</h2>
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-primary mb-1">هل يمكن تقديم الخدمة عن بُعد؟</h3>
                  <p className="leading-8 text-text-secondary">نعم، يمكن الاتفاق على آلية عن بُعد بحسب النظام المستخدم لدى المنشأة، وطريقة مشاركة المستندات، والصلاحيات المتاحة، وإجراءات المراجعة والاعتماد.</p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">هل تصدر الفواتير باسم القائد؟</h3>
                  <p className="leading-8 text-text-secondary">لا. الفاتورة تخص المنشأة التي نفذت عملية البيع أو تقديم الخدمة، ويجب أن تحمل بياناتها الصحيحة وفق المتطلبات المنطبقة. دور مقدم الخدمة يقتصر على النطاق المتفق عليه مع العميل.</p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">هل الخدمة مناسبة لكل المنشآت؟</h3>
                  <p className="leading-8 text-text-secondary">تُقيّم الملاءمة بعد معرفة عدد الفواتير وطبيعة النشاط والنظام المستخدم وحالة المنشأة الضريبية، ثم يُحدد نطاق العمل والأتعاب قبل البدء.</p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">هل تضمن الخدمة عدم فرض غرامات؟</h3>
                  <p className="leading-8 text-text-secondary">لا يمكن ضمان ذلك؛ فالامتثال يعتمد على صحة العمليات والبيانات والنظام والإجراءات والتزامات المنشأة. تهدف الخدمة إلى دعم التنظيم والمراجعة ضمن النطاق المتفق عليه.</p>
                </div>
              </div>
            </section>

            <div className="border-t border-border-subtle pt-6">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">ناقش احتياج منشأتك</h2>
              <p className="leading-8 text-text-secondary mb-5">أرسل نبذة عن نشاط المنشأة وعدد الفواتير التقريبي والنظام المستخدم، وسنناقش نطاق الخدمة وطريقة العمل المناسبة قبل الاتفاق.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:opacity-90">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                تواصل عبر واتساب
              </a>
              <div className="mt-6 text-sm leading-7 text-text-secondary">
                خدمات ذات صلة: <a href="/services/bookkeeping/" className="text-primary underline">مسك الدفاتر وتنظيم الحسابات</a>، <a href="/services/zakat-tax/" className="text-primary underline">الزكاة وضريبة القيمة المضافة</a>، <a href="/services/financial-statements/" className="text-primary underline">إعداد القوائم المالية</a>.
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
}
