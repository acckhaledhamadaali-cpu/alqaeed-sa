import React from 'react';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import AccountingLogoMarquee from './AccountingLogoMarquee';

export default function SoftwareIntegrations() {
  return (
    <div className="py-12 border-t border-b border-border-subtle bg-surface-subtle/30 overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center px-4 mb-8">
        <h3 className="text-lg font-bold text-text-primary mb-2 font-arabic">
          أعمل على نظامك المحاسبي الحالي
        </h3>
        <p className="text-sm text-text-secondary">
          أتولى إدارة حساباتك عن بعد من خلال برنامجك المعتمد، لضمان استمرارية العمل دون الحاجة لتغيير الأنظمة أو تعطيل فريقك.
        </p>
      </div>

      <AccountingLogoMarquee />
    </div>
  );
}
