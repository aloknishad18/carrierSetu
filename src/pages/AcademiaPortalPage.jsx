import React, { useEffect } from 'react';
import { PortalTopHeader } from '../components/common/PortalTopHeader';
import { AcademicianPortal } from '../components/academician/AcademicianPortal';

export const AcademiaPortalPage = () => {
  useEffect(() => {
    document.title = 'CareerSetu | Academician & Faculty Portal';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Application Header (Normal User Mode or SIH Demo Mode) */}
      <PortalTopHeader />

      {/* Dedicated Academician & Faculty Portal Layout */}
      <main style={{ flex: 1 }}>
        <AcademicianPortal />
      </main>
    </div>
  );
};
