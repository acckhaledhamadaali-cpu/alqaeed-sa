/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroSection from '../sections/HeroSection';
import ProblemsSection from '../sections/ProblemsSection';
import HowIWorkSection from '../sections/HowIWorkSection';
import ServicesSection from '../sections/ServicesSection';
import ResultsSection from '../sections/ResultsSection';
import AboutSection from '../sections/AboutSection';
import FinalCTASection from '../sections/FinalCTASection';
import FooterSection from '../sections/FooterSection';
import FloatingWhatsApp from '../sections/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10" dir="rtl">
      <main id="main-content">
        {/* Structural sections in order */}
        <HeroSection />
        <ProblemsSection />
        <HowIWorkSection />
        <ServicesSection />
        <ResultsSection />
        <AboutSection />
        <FinalCTASection />
      </main>
      <FooterSection />
      
      {/* Floating elements */}
      <FloatingWhatsApp />
    </div>
  );
}
