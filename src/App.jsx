import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { ToastContainer } from './components/common/Toast';
import { OpportunityModal } from './components/common/OpportunityModal';
import { CandidateModal } from './components/common/CandidateModal';
import { PostOpportunityModal } from './components/common/PostOpportunityModal';

// Dedicated Page Components
import { PublicSitePage } from './pages/PublicSitePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { StudentPortalPage } from './pages/StudentPortalPage';
import { IndustryPortalPage } from './pages/IndustryPortalPage';
import { AcademiaPortalPage } from './pages/AcademiaPortalPage';
import { InstitutionPortalPage } from './pages/InstitutionPortalPage';
import { GovernancePortalPage } from './pages/GovernancePortalPage';
import { SettingsPage } from './pages/SettingsPage';
import { SupportPage } from './pages/SupportPage';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="portal-page-transition" style={{ minHeight: '100vh' }}>
      <Routes>
        {/* ====================================================
            1. PUBLIC WEBSITE LAYER (No Login Required)
           ==================================================== */}
        <Route path="/" element={<PublicSitePage />} />
        <Route path="/support" element={<SupportPage />} />

        {/* ====================================================
            2. AUTHENTICATION FLOW
           ==================================================== */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* ====================================================
            3. PROTECTED ROLE-BASED PORTALS (Access Control)
           ==================================================== */}
        {/* Student Portal: Protected for role='student' */}
        <Route
          path="/portal/student/dashboard"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentPortalPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/student/*"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentPortalPage />
            </ProtectedRoute>
          }
        />

        {/* Industry & Recruiter Portal: Protected for role='industry' */}
        <Route
          path="/portal/industry/dashboard"
          element={
            <ProtectedRoute allowedRoles={['industry']}>
              <IndustryPortalPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/industry/*"
          element={
            <ProtectedRoute allowedRoles={['industry']}>
              <IndustryPortalPage />
            </ProtectedRoute>
          }
        />

        {/* Academia & Faculty Portal: Protected for role='academia' */}
        <Route
          path="/portal/academia/dashboard"
          element={
            <ProtectedRoute allowedRoles={['academia', 'academician']}>
              <AcademiaPortalPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/academia/*"
          element={
            <ProtectedRoute allowedRoles={['academia', 'academician']}>
              <AcademiaPortalPage />
            </ProtectedRoute>
          }
        />

        {/* Institution Admin Portal: Protected for role='institution' */}
        <Route
          path="/portal/institution/dashboard"
          element={
            <ProtectedRoute allowedRoles={['institution']}>
              <InstitutionPortalPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/institution/*"
          element={
            <ProtectedRoute allowedRoles={['institution']}>
              <InstitutionPortalPage />
            </ProtectedRoute>
          }
        />

        {/* Platform Governance Portal: Protected for role='governance' */}
        <Route
          path="/portal/governance/dashboard"
          element={
            <ProtectedRoute allowedRoles={['governance', 'admin']}>
              <GovernancePortalPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/governance/*"
          element={
            <ProtectedRoute allowedRoles={['governance', 'admin']}>
              <GovernancePortalPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/settings"
          element={
            <ProtectedRoute allowedRoles={['student', 'industry', 'academia', 'academician', 'institution', 'governance', 'admin']}>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/student/settings"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/support"
          element={
            <ProtectedRoute allowedRoles={['student', 'industry', 'academia', 'academician', 'institution', 'governance', 'admin']}>
              <SupportPage />
            </ProtectedRoute>
          }
        />

        {/* ====================================================
            4. LEGACY SHORTCUT & DIRECT ROUTE REDIRECTS
           ==================================================== */}
        <Route path="/student/*" element={<Navigate to="/portal/student/dashboard" replace />} />
        <Route path="/student" element={<Navigate to="/portal/student/dashboard" replace />} />
        <Route path="/industry/*" element={<Navigate to="/portal/industry/dashboard" replace />} />
        <Route path="/industry" element={<Navigate to="/portal/industry/dashboard" replace />} />
        <Route path="/academia/*" element={<Navigate to="/portal/academia/dashboard" replace />} />
        <Route path="/academia" element={<Navigate to="/portal/academia/dashboard" replace />} />
        <Route path="/institution/*" element={<Navigate to="/portal/institution/dashboard" replace />} />
        <Route path="/institution" element={<Navigate to="/portal/institution/dashboard" replace />} />
        <Route path="/governance/*" element={<Navigate to="/portal/governance/dashboard" replace />} />
        <Route path="/governance" element={<Navigate to="/portal/governance/dashboard" replace />} />
        <Route path="/admin/*" element={<Navigate to="/portal/governance/dashboard" replace />} />
        <Route path="/admin" element={<Navigate to="/portal/governance/dashboard" replace />} />

        {/* Fallback to Public Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default function App() {
  const baseName = (import.meta.env.BASE_URL || '/carrierSetu').replace(/\/$/, '');
  return (
    <BrowserRouter basename={baseName}>
      <AppProvider>
        <AppRoutes />
        {/* Global Modals & Notifications */}
        <OpportunityModal />
        <CandidateModal />
        <PostOpportunityModal />
        <ToastContainer />
      </AppProvider>
    </BrowserRouter>
  );
}
