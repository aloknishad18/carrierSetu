import React from 'react';
import { useApp } from '../../context/AppContext';
import { Globe, Shield, Sun, Moon } from 'lucide-react';

export const Footer = () => {
  const { lang, setLang, theme, toggleTheme } = useApp();

  return (
    <footer
      style={{
        backgroundColor: theme === 'dark' ? '#0B0B0D' : '#181716',
        color: 'rgba(255, 255, 255, 0.82)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '64px',
        paddingBottom: '40px',
        transition: 'background-color 350ms ease'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '36px',
            marginBottom: '48px'
          }}
        >
          {/* Brand Col */}
          <div style={{ maxWidth: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #F97316 0%, #312E81 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 18L12 6L20 18" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="13" r="2" fill="#F59E0B" />
                </svg>
              </div>
              <span style={{ fontSize: '1.35rem', fontWeight: 900, color: '#FFFFFF' }}>
                Career<span style={{ color: '#F97316' }}>Setu</span>
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.7)', marginBottom: '16px' }}>
              {lang === 'hi'
                ? 'कौशल से अवसर तक — उच्च शिक्षा और आधुनिक उद्योग के बीच पारदर्शी कौशल मानचित्रण का राष्ट्रीय मंच।'
                : 'Bridging Skills with Opportunities. Modern Indian career intelligence platform connecting students, academia, and industry.'}
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', backgroundColor: 'rgba(249, 115, 22, 0.15)', borderRadius: '6px', border: '1px solid rgba(249, 115, 22, 0.35)' }}>
              <Shield size={14} color="#F97316" />
              <span style={{ fontSize: '0.76rem', fontWeight: 800, color: '#FDBA74' }}>
                SIH26044 • Smart India Hackathon
              </span>
            </div>
          </div>

          {/* Section: Platform */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.92rem', fontWeight: 800, marginBottom: '14px' }}>
              Platform
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <li><a href="#hero" style={{ color: 'inherit' }}>Home</a></li>
              <li><a href="#how-it-works" style={{ color: 'inherit' }}>How It Works</a></li>
              <li><a href="#skill-profile" style={{ color: 'inherit' }}>Skill Mapping</a></li>
              <li><a href="#skill-gap" style={{ color: 'inherit' }}>Skill Gap Analysis</a></li>
              <li><a href="#smart-match" style={{ color: 'inherit' }}>Career Intelligence</a></li>
            </ul>
          </div>

          {/* Section: Stakeholders */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.92rem', fontWeight: 800, marginBottom: '14px' }}>
              Stakeholders
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <li><a href="#for-students" style={{ color: 'inherit' }}>For Students</a></li>
              <li><a href="#collaboration" style={{ color: 'inherit' }}>For Industry</a></li>
              <li><a href="#collaboration" style={{ color: 'inherit' }}>For Academia</a></li>
              <li><a href="#collaboration" style={{ color: 'inherit' }}>For Institutions</a></li>
            </ul>
          </div>

          {/* Section: Resources & Legal */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.92rem', fontWeight: 800, marginBottom: '14px' }}>
              Resources & Legal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <li><span style={{ cursor: 'pointer' }}>Resources</span></li>
              <li><span style={{ cursor: 'pointer' }}>Privacy Policy</span></li>
              <li><span style={{ cursor: 'pointer' }}>Terms of Service</span></li>
              <li><span style={{ cursor: 'pointer' }}>Accessibility</span></li>
            </ul>
          </div>

          {/* Preferences Col */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.92rem', fontWeight: 800, marginBottom: '14px' }}>
              Preferences
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Language Selector */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Globe size={14} color="#F97316" />
                <button
                  onClick={() => setLang('en')}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: lang === 'en' ? 800 : 500,
                    color: lang === 'en' ? '#F97316' : 'rgba(255,255,255,0.7)',
                    cursor: 'pointer'
                  }}
                >
                  English
                </button>
                <span style={{ opacity: 0.3 }}>|</span>
                <button
                  onClick={() => setLang('hi')}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: lang === 'hi' ? 800 : 500,
                    color: lang === 'hi' ? '#F97316' : 'rgba(255,255,255,0.7)',
                    cursor: 'pointer'
                  }}
                >
                  हिन्दी
                </button>
              </div>

              {/* Theme Selector */}
              <button
                onClick={toggleTheme}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  color: '#FFFFFF',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  width: 'fit-content'
                }}
              >
                {theme === 'dark' ? <Sun size={14} color="#F97316" /> : <Moon size={14} color="#6366F1" />}
                <span>{theme === 'dark' ? '☀ Light Mode' : '☾ Dark Mode'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.82rem',
            color: 'rgba(255, 255, 255, 0.5)'
          }}
        >
          <div>
            © 2026 CareerSetu (SIH26044). Smart India Hackathon 2026 Project.
          </div>
          <div>
            Bridging Skills with Opportunities • कौशल से अवसर तक।
          </div>
        </div>
      </div>
    </footer>
  );
};
