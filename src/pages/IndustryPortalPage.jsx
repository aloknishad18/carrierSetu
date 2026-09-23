import React, { useEffect } from 'react';
import { PortalTopHeader } from '../components/common/PortalTopHeader';
import { IndustryPortal } from '../components/industry/IndustryPortal';

export const IndustryPortalPage = () => {
  useEffect(() => {
    document.title = 'CareerSetu | Industry & Recruiter Portal';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Application Header (Normal User Mode or SIH Demo Mode) */}
      <PortalTopHeader />

      {/* Dedicated Industry & Recruiter Portal Layout */}
      <main style={{ flex: 1 }}>
        <IndustryPortal />
      </main>
    </div>
  );
};
