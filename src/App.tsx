/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useEffect } from 'react';
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

// Route-level code splitting: only the requested secondary page is downloaded.
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const CookiesPage = lazy(() => import('./pages/CookiesPage'));
const BlogHubPage = lazy(() => import('./pages/BlogHubPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const SectorDetailPage = lazy(() => import('./pages/sectors/SectorDetailPage'));

const BookkeepingPage = lazy(() => import('./pages/services/BookkeepingPage'));
const TaxInvoiceIssuancePage = lazy(() => import('./pages/services/TaxInvoiceIssuancePage'));
const ZakatTaxPage = lazy(() => import('./pages/services/ZakatTaxPage'));
const FinancialStatementsPage = lazy(() => import('./pages/services/FinancialStatementsPage'));
const FinancialAnalysisPage = lazy(() => import('./pages/services/FinancialAnalysisPage'));
const ManagementReportsPage = lazy(() => import('./pages/services/ManagementReportsPage'));
const BudgetingPage = lazy(() => import('./pages/services/BudgetingPage'));
const CashFlowPage = lazy(() => import('./pages/services/CashFlowPage'));
const VirtualCfoPage = lazy(() => import('./pages/services/VirtualCfoPage'));
const LocalServiceCityPage = lazy(() => import('./pages/services/LocalServiceCityPage'));

import ServicePricingNote from './components/ServicePricingNote';

function RouteSuspense({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-[40vh]" role="status" aria-label="جارٍ تحميل الصفحة" />}>
      {children}
    </Suspense>
  );
}

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

  if (/^\/services\/[^/]+\/(tax-services|financial-statements|accounting-services)$/.test(path)) {
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <RouteSuspense><LocalServiceCityPage path={path} /></RouteSuspense>
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (path.startsWith('/sectors/')) {
    const slug = path.replace(/^\/sectors\//, '').replace(/\/$/, '');
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <RouteSuspense><SectorDetailPage slug={slug} /></RouteSuspense>
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (path === '/services/tax-invoice-issuance') {
    return (
      <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10 flex flex-col" dir="rtl">
        <main id="main-content" className="flex-grow">
          <RouteSuspense><TaxInvoiceIssuancePage /></RouteSuspense>
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
          <RouteSuspense><BookkeepingPage /></RouteSuspense>
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
          <RouteSuspense><ZakatTaxPage /></RouteSuspense>
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
          <RouteSuspense><FinancialStatementsPage /></RouteSuspense>
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
          <RouteSuspense><FinancialAnalysisPage /></RouteSuspense>
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
          <RouteSuspense><ManagementReportsPage /></RouteSuspense>
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
          <RouteSuspense><BudgetingPage /></RouteSuspense>
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
          <RouteSuspense><CashFlowPage /></RouteSuspense>
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
          <RouteSuspense><VirtualCfoPage /></RouteSuspense>
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
          <RouteSuspense><PrivacyPolicyPage /></RouteSuspense>
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
          <RouteSuspense><TermsPage /></RouteSuspense>
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
          <RouteSuspense><CookiesPage /></RouteSuspense>
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
          <RouteSuspense><BlogHubPage /></RouteSuspense>
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
          <RouteSuspense><ArticlePage slug={slug} /></RouteSuspense>
        </main>
        <FooterSection />
        <FloatingWhatsApp />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-text-primary antialiased selection:bg-secondary/10" dir="rtl">
      <main id="main-content">
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
      <FloatingWhatsApp />
    </div>
  );
}
