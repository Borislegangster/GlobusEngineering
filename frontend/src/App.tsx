import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { HelpCenterPage } from './pages/HelpCenterPage';
import { LegalNoticePage } from './pages/LegalNoticePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { LoginPage } from './pages/LoginPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage';
import { CookieBanner } from './components/CookieBanner';
import { ClientLayout } from './components/client/ClientLayout';
import { ClientDashboard } from './pages/client/ClientDashboard';
import { ClientChantier } from './pages/client/ClientChantier';
import { ClientFinances } from './pages/client/ClientFinances';
import { ClientDocuments } from './pages/client/ClientDocuments';
import { ClientMessages } from './pages/client/ClientMessages';
import { ClientAccount } from './pages/client/ClientAccount';
import { ClientSAV } from './pages/client/ClientSAV';
import { ErpLayout } from './components/erp/ErpLayout';
import { ErpDashboard } from './pages/erp/ErpDashboard';
import { ErpRH } from './pages/erp/ErpRH';
import { ErpFinances } from './pages/erp/ErpFinances';
import { ErpAchats } from './pages/erp/ErpAchats';
import { ErpPlanification } from './pages/erp/ErpPlanification';
import { ErpQHSE } from './pages/erp/ErpQHSE';
import { ErpMateriel } from './pages/erp/ErpMateriel';
import { ErpCRM } from './pages/erp/ErpCRM';
import { ErpDocuments } from './pages/erp/ErpDocuments';
import { ErpGED } from './pages/erp/ErpGED';
import { ErpSousTraitants } from './pages/erp/ErpSousTraitants';
import { ErpChantiers } from './pages/erp/ErpChantiers';
import { ErpNotifications } from './pages/erp/ErpNotifications';
import { ErpParametres } from './pages/erp/ErpParametres';
import { ErpRapports } from './pages/erp/ErpRapports';
import { ErpAgenda } from './pages/erp/ErpAgenda';
import { ErpLoginPage } from './pages/ErpLoginPage';
import { ErpCMS } from './pages/erp/ErpCMS';
import { ErpSAV } from './pages/erp/ErpSAV';
import { ClientPlanning } from './pages/client/ClientPlanning';
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