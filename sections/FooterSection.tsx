import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SocialMedia from '../components/SocialMedia';

export default function FooterSection(props: HTMLAttributes<HTMLElement>) {
  const currentYear = new Date().getFullYear();

  return (
    <SectionWrapper id="footer-section-wrapper" variant="white" spacing="none" as="footer" {...props}>
      <Container id="footer-container">
        <SocialMedia />
        <div id="footer-content" className="py-3 flex flex-col items-center justify-center text-center space-y-2 border-t border-border-subtle mt-1">
          <p id="footer-copyright" className={`text-xs md:text-sm font-normal leading-normal font-arabic text-text-secondary font-arabic`}>
            جميع الحقوق محفوظة &copy; {currentYear} القائد
          </p>
          <div id="footer-legal" className="mt-3 flex flex-wrap gap-x-4 gap-y-2 justify-center text-[10px] sm:text-xs text-text-muted font-arabic pt-2 border-t border-border-subtle w-full max-w-4xl">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
            <span className="text-border-subtle">|</span>
            <a href="/terms" className="hover:text-primary transition-colors">الشروط والأحكام</a>
            <span className="text-border-subtle">|</span>
            <a href="/cookies" className="hover:text-primary transition-colors">سياسة ملفات تعريف الارتباط</a>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

