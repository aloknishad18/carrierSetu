import React, { useEffect } from 'react';
import { PortalTopHeader } from '../components/common/PortalTopHeader';
import { InstitutionPortal } from '../components/institution/InstitutionPortal';

export const InstitutionPortalPage = () => {
  useEffect(() => {
    document.title = 'CareerSetu | Institution Admin Portal';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Application Header (Normal User Mode or SIH Demo Mode) */}
      <PortalTopHeader />

      {/* Dedicated Institution Admin Portal Layout */}
      <main style={{ flex: 1 }}>
        <InstitutionPortal />
      </main>
    </div>
  );
};
