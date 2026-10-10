/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import HeroSection from '../sections/HeroSection';
import ExperienceBar from '../sections/ExperienceBar';
import SectorsSection from '../sections/SectorsSection';
import HowIWorkSection from '../sections/HowIWorkSection';
import ChallengesSection from '../sections/ChallengesSection';
import ServicesSection from '../sections/ServicesSection';
import AboutSection from '../sections/AboutSection';
import FinalCTASection from '../sections/FinalCTASection';
import FooterSection from '../sections/FooterSection';
import FloatingWhatsApp from '../sections/FloatingWhatsApp';
import SoftwareIntegrations from './components/SoftwareIntegrations';
import { trackMetaContact, trackMetaLead, trackMetaPageView } from './lib/metaPixel';

import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import CookiesPage from './pages/CookiesPage';
import BlogHubPage from './pages/BlogHubPage';
import ArticlePage from './pages/ArticlePage';
import SectorDetailPage from './pages/sectors/SectorDetailPage';

import BookkeepingPage from './pages/services/BookkeepingPage';
import ZakatTaxPage from './pages/services/ZakatTaxPage';
import FinancialStatementsPage from './pages/services/FinancialStatementsPage';
import FinancialAnalysisPage from './pages/services/FinancialAnalysisPage';
import ManagementReportsPage from './pages/services/ManagementReportsPage';
import BudgetingPage from './pages/services/BudgetingPage';
import CashFlowPage from './pages/services/CashFlowPage';
import VirtualCfoPage from './pages/services/VirtualCfoPage';

import ServicePricingNote from './components/ServicePricingNote';

import LogoAssetsPage from './pages/admin/LogoAssetsPage';

export default function App({ path: propPath }: { path?: string } = {}) {
  const currentPath = propPath || (typeof window !== 'undefined' ? window.location.pathname : '/');
  const path = (currentPath.endsWith('/') && currentPath.length > 1) ? currentPath.slice(0, -1) : currentPath;

  useEffect(() => {
    trackMetaPageView(path);

    const handleTrackedLinkClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest('a');

      if (!link) {
        return;
      }

      const href = link.getAttribute('href') || '';

      if (!href) {
        return;
      }

      if (href.startsWith('https://wa.me/') || href.includes('api.whatsapp.com')) {
        trackMetaLead('WhatsApp', href);
        return;
      }

      if (href.startsWith('mailto:') || href.startsWith('tel:')) {
        trackMetaContact('Direct contact', href);
      }
    };

    document.addEventListener('click', handleTrackedLinkClick);

    return () => {
      document.removeEventListener('click', handleTrackedLinkClick);
    };
  }, [path]);

  if (path === '/logo-assets') {
    return <LogoAssetsPage />;
  }

  if (path.startsWith('/sectors/')) {
    const slug = path.replace(/^\/sectors\//, '').replace(/\/$/, '');
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <SectorDetailPage slug={slug} />
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (path === '/services/bookkeeping') {
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <BookkeepingPage />
          <ServicePricingNote />
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
          <ServicePricingNote />
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
          <ServicePricingNote />
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
          <ServicePricingNote />
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
          <ServicePricingNote />
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
          <ServicePricingNote />
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
          <ServicePricingNote />
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
          <ServicePricingNote />
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

  if (path === '/blog') {
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <BlogHubPage />
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (path.startsWith('/blog/')) {
    const slug = path.replace(/^\/blog\//, '').replace(/\/$/, '');
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <ArticlePage slug={slug} />
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
        <SectorsSection />
        <ServicesSection />
        <HowIWorkSection />
        <AboutSection />
        <SoftwareIntegrations />
        <FinalCTASection />
      </main>
      <FooterSection />
      
      {/* Floating elements */}
      <FloatingWhatsApp />
    </div>
  );
}
