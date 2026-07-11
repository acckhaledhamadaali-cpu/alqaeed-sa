/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroSection from '../sections/HeroSection';
import ProblemsSection from '../sections/ProblemsSection';
import HowIWorkSection from '../sections/HowIWorkSection';
import ResultsSection from '../sections/ResultsSection';
import AboutSection from '../sections/AboutSection';
import FinalCTASection from '../sections/FinalCTASection';
import FooterSection from '../sections/FooterSection';
import FloatingWhatsApp from '../sections/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-light text-text-primary antialiased selection:bg-secondary/10" dir="rtl">
      {/* Structural sections in order */}
      <HeroSection />
      <ProblemsSection />
      <HowIWorkSection />
      <ResultsSection />
      <AboutSection />
      <FinalCTASection />
      <FooterSection />
      
      {/* Floating elements */}
      <FloatingWhatsApp />
    </div>
  );
}
