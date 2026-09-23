import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, LifeBuoy } from 'lucide-react';

export const StudentAppFooter = () => {
  const { lang, showToast } = useApp();

  return (
    <footer
      style={{
        backgroundColor: 'var(--pure-white)',
        borderTop: '1px solid var(--light-border)',
        padding: '16px 0',
        marginTop: 'auto',
        fontSize: '0.8rem',
        color: 'var(--muted-dark)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontWeight: 800, color: 'var(--govt-ink)' }}>
            Career<span style={{ color: 'var(--saffron-primary)' }}>Setu</span>
          </span>
          <span style={{ color: 'var(--light-border)' }}>•</span>
          <span>© 2026 SIH26044</span>
          <span style={{ color: 'var(--light-border)' }}>•</span>
          <span style={{ color: 'var(--muted-text)' }}>
            {lang === 'hi' ? 'स्मार्ट इंडिया हैकथॉन प्रोजेक्ट' : 'Smart India Hackathon'}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => showToast(lang === 'hi' ? 'गोपनीयता नीति: डीपीडीपी अनुपालन 2023' : 'Privacy Policy: DPDP Act 2023 compliant', 'info')}
            style={{ color: 'var(--muted-dark)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem' }}
          >
            {lang === 'hi' ? 'गोपनीयता' : 'Privacy'}
          </button>
          <button
            onClick={() => showToast(lang === 'hi' ? 'सहायता केंद्र: helpdesk@careersetu.gov.in' : 'Help & Support: helpdesk@careersetu.gov.in', 'info')}
            style={{ color: 'var(--muted-dark)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem' }}
          >
            {lang === 'hi' ? 'सहायता' : 'Support'}
          </button>
          <button
            onClick={() => showToast(lang === 'hi' ? 'पहुंच क्षमता: डब्ल्यूसीएजी 2.1 अनुपालन' : 'Accessibility: WCAG 2.1 AA certified', 'info')}
            style={{ color: 'var(--muted-dark)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem' }}
          >
            {lang === 'hi' ? 'सुलभता' : 'Accessibility'}
          </button>
          <span className="badge badge-green" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
            <ShieldCheck size={11} /> National Portal Active
          </span>
        </div>
      </div>
    </footer>
  );
};
