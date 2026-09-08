import { FormEvent, useState } from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import SectionDescription from '../components/SectionDescription';

const WHATSAPP_NUMBER = '966511294383';
const SERVICES = ['تنظيم الحسابات ومسك الدفاتر', 'الزكاة والضريبة', 'إعداد القوائم والتقارير المالية', 'التحليل المالي وإدارة التدفقات النقدية', 'المدير المالي عن بُعد', 'لست متأكدًا وأحتاج إلى توجيه'];

export default function ConsultationSection() {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [service, setService] = useState('');
  const [branchCount, setBranchCount] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      'السلام عليكم، أرغب في حجز استشارة لتطوير الإدارة المالية لمنشأتي.',
      `اسم المنشأة: ${businessName || 'لم يُذكر'}`,
      `نوع النشاط: ${businessType || 'لم يُذكر'}`,
      `الخدمة المطلوبة: ${service || 'لم تُحدد'}`,
      `عدد الفروع: ${branchCount || 'لم يُذكر'}`
    ].join('\n');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <SectionWrapper id="consultation-section" variant="white" spacing="dense">
      <Container id="consultation-container">
        <div className="max-w-3xl mx-auto rounded-2xl border border-border-subtle bg-surface-muted/30 p-5 sm:p-7 md:p-8">
          <div className="text-center mb-6">
            <SectionTitle id="consultation-title" level={2} className="font-bold">اطلب استشارة تناسب احتياج منشأتك</SectionTitle>
            <SectionDescription className="mt-2 max-w-2xl mx-auto text-center">أرسل نبذة مختصرة، وسنبدأ من احتياجك الفعلي بدلًا من عرض عام لا يناسب منشأتك.</SectionDescription>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="طلب استشارة مالية">
            <label className="flex flex-col gap-1.5 text-sm text-text-primary">اسم المنشأة
              <input value={businessName} onChange={(event) => setBusinessName(event.target.value)} required autoComplete="organization" placeholder="مثال: منشأة القمة التجارية" className="w-full rounded-xl border border-border-subtle bg-white px-3 py-2.5 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20" />
            </label>
            <label className="flex flex-col gap-1.5 text-sm text-text-primary">نوع النشاط
              <input value={businessType} onChange={(event) => setBusinessType(event.target.value)} required placeholder="تجارة، مطاعم، خدمات، مقاولات…" className="w-full rounded-xl border border-border-subtle bg-white px-3 py-2.5 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20" />
            </label>
            <label className="flex flex-col gap-1.5 text-sm text-text-primary">الخدمة المطلوبة
              <select value={service} onChange={(event) => setService(event.target.value)} required className="w-full rounded-xl border border-border-subtle bg-white px-3 py-2.5 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20">
                <option value="" disabled>اختر الخدمة</option>
                {SERVICES.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-sm text-text-primary">عدد الفروع <span className="text-text-muted font-normal">(اختياري)</span>
              <input value={branchCount} onChange={(event) => setBranchCount(event.target.value)} inputMode="numeric" placeholder="مثال: فرع واحد" className="w-full rounded-xl border border-border-subtle bg-white px-3 py-2.5 text-sm font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20" />
            </label>
            <div className="sm:col-span-2 flex flex-col items-center gap-3 pt-2">
              <button type="submit" className="inline-flex items-center justify-center gap-x-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:bg-[#20ba5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"><MessageCircle className="w-5 h-5" aria-hidden="true" />إرسال طلب الاستشارة عبر واتساب</button>
              <p className="flex items-center gap-1.5 text-center text-xs font-normal text-text-secondary"><ShieldCheck className="w-4 h-4 text-secondary" aria-hidden="true" />لا تُحفَظ هذه البيانات في الموقع؛ تُضاف فقط إلى رسالتك في واتساب.</p>
            </div>
          </form>
        </div>
      </Container>
    </SectionWrapper>
  );
}
