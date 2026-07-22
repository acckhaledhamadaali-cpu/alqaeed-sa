/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroSection from '../sections/HeroSection';
import ExperienceBar from '../sections/ExperienceBar';
import HowIWorkSection from '../sections/HowIWorkSection';
import ChallengesSection from '../sections/ChallengesSection';
import ServicesSection from '../sections/ServicesSection';
import AboutSection from '../sections/AboutSection';
import FinalCTASection from '../sections/FinalCTASection';
import FooterSection from '../sections/FooterSection';
import FloatingWhatsApp from '../sections/FloatingWhatsApp';

import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import CookiesPage from './pages/CookiesPage';

import BookkeepingPage from './pages/services/BookkeepingPage';
import ZakatTaxPage from './pages/services/ZakatTaxPage';
import FinancialStatementsPage from './pages/services/FinancialStatementsPage';
import FinancialAnalysisPage from './pages/services/FinancialAnalysisPage';
import ManagementReportsPage from './pages/services/ManagementReportsPage';
import BudgetingPage from './pages/services/BudgetingPage';
import CashFlowPage from './pages/services/CashFlowPage';
import VirtualCfoPage from './pages/services/VirtualCfoPage';

export default function App() {
  const path = window.location.pathname;

if (path === '/services/bookkeeping') {
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <BookkeepingPage />
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }

if (path === '/services/zakat-tax') {
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <ZakatTaxPage />
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }

if (path === '/services/financial-statements') {
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <FinancialStatementsPage />
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }

if (path === '/services/financial-analysis') {
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <FinancialAnalysisPage />
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }

if (path === '/services/management-reports') {
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <ManagementReportsPage />
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }

if (path === '/services/budgeting') {
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <BudgetingPage />
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }

if (path === '/services/cash-flow') {
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <CashFlowPage />
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }

if (path === '/services/virtual-cfo') {
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <VirtualCfoPage />
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }


  if (path === '/privacy-policy') {
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <PrivacyPolicyPage />
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (path === '/terms') {
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <TermsPage />
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (path === '/cookies') {
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <CookiesPage />
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10" dir="rtl">
      <main id="main-content">
        {/* Structural sections in order */}
        <HeroSection />
        <ExperienceBar />
        <ChallengesSection />
        <ServicesSection />
        <HowIWorkSection />
        <AboutSection />
        <FinalCTASection />
      </main>
      <FooterSection />
      
      {/* Floating elements */}
      <FloatingWhatsApp />
    </div>
  );
}
