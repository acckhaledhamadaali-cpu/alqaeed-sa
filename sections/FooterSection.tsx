import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import { TYPOGRAPHY } from '../src/lib/tokens';

export default function FooterSection(props: HTMLAttributes<HTMLElement>) {
  const currentYear = new Date().getFullYear();
  return (
    <SectionWrapper id="footer-section-wrapper" variant="white" spacing="none" as="footer" {...props}>
      <Container id="footer-container">
        <div id="footer-content" className="py-8 md:py-12 flex flex-col items-center justify-center text-center space-y-2 border-t border-border-subtle">
          <p id="footer-copyright" className={`${TYPOGRAPHY.body.small} text-text-secondary font-arabic`}>
            جميع الحقوق محفوظة &copy; {currentYear} خالد القائد.
          </p>
          <p id="footer-subtitle" className={`${TYPOGRAPHY.caption} text-text-muted font-arabic`}>
            محاسب ومحلل مالي - المملكة العربية السعودية
          </p>
          <div id="footer-contact" className={`${TYPOGRAPHY.caption} text-text-secondary font-arabic mt-2 flex flex-wrap gap-x-4 gap-y-1 justify-center items-center`}>
            <span>البريد الإلكتروني: <a href="mailto:alqaeed.sa@gmail.com" className="hover:text-primary transition-colors underline font-sans">alqaeed.sa@gmail.com</a></span>
            <span className="hidden sm:inline text-border-subtle">|</span>
            <span>الواتساب: <a href="https://wa.me/966511294383" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline font-sans">0511294383</a></span>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

