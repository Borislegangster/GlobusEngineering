import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { CookieBanner } from './components/CookieBanner';
import { ClientLayout } from './components/client/ClientLayout';
import { ErpLayout } from './components/erp/ErpLayout';

// ============================================
// PHASE 1 : SITE PUBLIC
// ============================================
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage').then(m => ({ default: m.BlogDetailPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const FAQPage = lazy(() => import('./pages/FAQPage').then(m => ({ default: m.FAQPage })));
const HelpCenterPage = lazy(() => import('./pages/HelpCenterPage').then(m => ({ default: m.HelpCenterPage })));
const LegalNoticePage = lazy(() => import('./pages/LegalNoticePage').then(m => ({ default: m.LegalNoticePage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage').then(m => ({ default: m.CookiePolicyPage })));
const LoginPage = lazy(() => import('./pages/LoginPage').then(m => ({ default: m.LoginPage })));
const RegisterPage = lazy(() => import('./pages/RegisterPage').then(m => ({ default: m.RegisterPage })));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage').then(m => ({ default: m.ForgotPasswordPage })));
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage').then(m => ({ default: m.ResetPasswordPage })));
const ErpLoginPage = lazy(() => import('./pages/ErpLoginPage').then(m => ({ default: m.ErpLoginPage })));

// ============================================
// PHASE 2 : ESPACE CLIENT
// ============================================
const ClientDashboard = lazy(() => import('./pages/client/ClientDashboard').then(m => ({ default: m.ClientDashboard })));
const ClientChantier = lazy(() => import('./pages/client/ClientChantier').then(m => ({ default: m.ClientChantier })));
const ClientFinances = lazy(() => import('./pages/client/ClientFinances').then(m => ({ default: m.ClientFinances })));
const ClientDocuments = lazy(() => import('./pages/client/ClientDocuments').then(m => ({ default: m.ClientDocuments })));
const ClientMessages = lazy(() => import('./pages/client/ClientMessages').then(m => ({ default: m.ClientMessages })));
const ClientAccount = lazy(() => import('./pages/client/ClientAccount').then(m => ({ default: m.ClientAccount })));
const ClientSAV = lazy(() => import('./pages/client/ClientSAV').then(m => ({ default: m.ClientSAV })));
const ClientPlanning = lazy(() => import('./pages/client/ClientPlanning').then(m => ({ default: m.ClientPlanning })));

// ============================================
// PHASE 3 : ERP & HUB
// ============================================
const ErpDashboard = lazy(() => import('./pages/erp/ErpDashboard').then(m => ({ default: m.ErpDashboard })));
const ErpRH = lazy(() => import('./pages/erp/ErpRH').then(m => ({ default: m.ErpRH })));
const ErpFinances = lazy(() => import('./pages/erp/ErpFinances').then(m => ({ default: m.ErpFinances })));
const ErpAchats = lazy(() => import('./pages/erp/ErpAchats').then(m => ({ default: m.ErpAchats })));
const ErpPlanification = lazy(() => import('./pages/erp/ErpPlanification').then(m => ({ default: m.ErpPlanification })));
const ErpQHSE = lazy(() => import('./pages/erp/ErpQHSE').then(m => ({ default: m.ErpQHSE })));
const ErpMateriel = lazy(() => import('./pages/erp/ErpMateriel').then(m => ({ default: m.ErpMateriel })));
const ErpCRM = lazy(() => import('./pages/erp/ErpCRM').then(m => ({ default: m.ErpCRM })));
const ErpDocuments = lazy(() => import('./pages/erp/ErpDocuments').then(m => ({ default: m.ErpDocuments })));
const ErpGED = lazy(() => import('./pages/erp/ErpGED').then(m => ({ default: m.ErpGED })));
const ErpSousTraitants = lazy(() => import('./pages/erp/ErpSousTraitants').then(m => ({ default: m.ErpSousTraitants })));
const ErpChantiers = lazy(() => import('./pages/erp/ErpChantiers').then(m => ({ default: m.ErpChantiers })));
const ErpNotifications = lazy(() => import('./pages/erp/ErpNotifications').then(m => ({ default: m.ErpNotifications })));
const ErpParametres = lazy(() => import('./pages/erp/ErpParametres').then(m => ({ default: m.ErpParametres })));
const ErpRapports = lazy(() => import('./pages/erp/ErpRapports').then(m => ({ default: m.ErpRapports })));
const ErpAgenda = lazy(() => import('./pages/erp/ErpAgenda').then(m => ({ default: m.ErpAgenda })));
const ErpCMS = lazy(() => import('./pages/erp/ErpCMS').then(m => ({ default: m.ErpCMS })));
const ErpSAV = lazy(() => import('./pages/erp/ErpSAV').then(m => ({ default: m.ErpSAV })));
function AppContent() {
  const location = useLocation();
  const isClientPortal = location.pathname.startsWith('/espace-client');
  const isErp = location.pathname.startsWith('/erp');
  const isPortal = isClientPortal || isErp;
  return (
    <div
      className={`font-opensans text-globus-gray bg-white w-full min-h-screen flex flex-col ${isPortal ? 'h-screen overflow-hidden' : ''}`}>
      
      {!isPortal && <Header />}
      <main className={isPortal ? 'flex-1 h-full' : 'flex-grow'}>
        <Suspense fallback={
          <div className="flex w-full h-full items-center justify-center min-h-[50vh]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 rounded-full border-4 border-globus-blue border-t-transparent animate-spin"></div>
              <p className="font-montserrat font-bold text-globus-blue animate-pulse w-full text-center">Chargement en cours...</p>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/projets" element={<ProjectsPage />} />
          <Route path="/projets/:slug" element={<ProjectDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/aide" element={<HelpCenterPage />} />
          <Route path="/mentions-legales" element={<LegalNoticePage />} />
          <Route
            path="/politique-de-confidentialite"
            element={<PrivacyPolicyPage />} />
          
          <Route path="/termes-et-conditions" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/inscription" element={<RegisterPage />} />
          <Route path="/mot-de-passe-oublie" element={<ForgotPasswordPage />} />
          <Route path="/reset-mot-de-passe" element={<ResetPasswordPage />} />
          <Route path="/erp-login" element={<ErpLoginPage />} />

          <Route path="/espace-client" element={<ClientLayout />}>
            <Route index element={<ClientDashboard />} />
            <Route path="chantier" element={<ClientChantier />} />
            <Route path="planning" element={<ClientPlanning />} />
            <Route path="finances" element={<ClientFinances />} />
            <Route path="documents" element={<ClientDocuments />} />
            <Route path="messagerie" element={<ClientMessages />} />
            <Route path="compte" element={<ClientAccount />} />
            <Route path="sav" element={<ClientSAV />} />
          </Route>

          <Route path="/erp" element={<ErpLayout />}>
            <Route index element={<ErpDashboard />} />
            <Route path="chantiers" element={<ErpChantiers />} />
            <Route path="rh" element={<ErpRH />} />
            <Route path="finances" element={<ErpFinances />} />
            <Route path="achats" element={<ErpAchats />} />
            <Route path="planification" element={<ErpPlanification />} />
            <Route path="qhse" element={<ErpQHSE />} />
            <Route path="materiel" element={<ErpMateriel />} />
            <Route path="crm" element={<ErpCRM />} />
            <Route path="documents" element={<ErpDocuments />} />
            <Route path="ged" element={<ErpGED />} />
            <Route path="sous-traitants" element={<ErpSousTraitants />} />
            <Route path="rapports" element={<ErpRapports />} />
            <Route path="agenda" element={<ErpAgenda />} />
            <Route path="cms" element={<ErpCMS />} />
            <Route path="sav" element={<ErpSAV />} />
            <Route path="notifications" element={<ErpNotifications />} />
            <Route path="parametres" element={<ErpParametres />} />
          </Route>
        </Routes>
        </Suspense>
      </main>
      {!isPortal &&
      <>
          <Footer />
          <FloatingWidgets />
          <CookieBanner />
        </>
      }
    </div>);

}
export function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>);

}