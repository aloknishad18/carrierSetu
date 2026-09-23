import React, { useEffect } from 'react';
import { PortalTopHeader } from '../components/common/PortalTopHeader';
import { AdminPortal } from '../components/admin/AdminPortal';

export const GovernancePortalPage = () => {
  useEffect(() => {
    document.title = 'CareerSetu | Platform Governance Portal';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Application Header (Normal User Mode or SIH Demo Mode) */}
      <PortalTopHeader />

      {/* Dedicated Platform Governance Portal Layout */}
      <main style={{ flex: 1 }}>
        <AdminPortal />
      </main>
    </div>
  );
};
