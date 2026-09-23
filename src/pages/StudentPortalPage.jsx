import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { DemoSwitcherRibbon } from '../components/common/DemoSwitcherRibbon';
import { StudentPortal } from '../components/student/StudentPortal';

export const StudentPortalPage = () => {
  const { isDemoMode } = useApp();

  useEffect(() => {
    document.title = 'CareerSetu | Student Portal (SIH26044)';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* SIH26044 Demo Mode Banner - Only appears in SIH Demo Mode */}
      {isDemoMode && <DemoSwitcherRibbon />}

      {/* Dedicated Student Portal Layout (with StudentAppHeader) */}
      <main style={{ flex: 1 }}>
        <StudentPortal />
      </main>
    </div>
  );
};
