export default function ServicePricingNote() {
  return (
    <section
      dir="rtl"
      aria-labelledby="service-pricing-heading"
      className="border-t border-border-subtle bg-surface-subtle/40"
    >
      <div className="mx-auto max-w-3xl px-4 py-5 md:py-7">
        <h2
          id="service-pricing-heading"
          className="text-base md:text-lg font-bold text-text-primary"
        >
          كيف تُحدَّد الأتعاب؟
        </h2>
        <p className="mt-2 text-sm leading-7 text-text-secondary">
          تُحدَّد الأتعاب بعد معرفة حجم العمليات، وعدد الفروع، والخدمات المطلوبة.
        </p>
      </div>
    </section>
  );
}
