import React, { useEffect } from 'react';
import { Navbar } from '../components/common/Navbar';
import { LandingPage } from '../components/landing/LandingPage';
import { Footer } from '../components/common/Footer';

export const PublicSitePage = () => {
  useEffect(() => {
    document.title = 'CareerSetu | कौशल से अवसर तक - Smart India Hackathon 2026';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Public Sticky Glassmorphic Navbar (No stakeholder switcher) */}
      <Navbar />

      {/* 2. Public Marketing Website Content */}
      <main style={{ flex: 1 }}>
        <LandingPage />
      </main>

      {/* 3. Public Footer */}
      <Footer />
    </div>
  );
};
