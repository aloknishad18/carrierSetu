import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Eye, Award, Heart, Network } from 'lucide-react';

export const TrustSection = () => {
  const { lang, theme } = useApp();

  const principles = [
    {
      title: lang === 'hi' ? 'पारदर्शी' : 'Transparent',
      desc: lang === 'hi' ? 'कोई गुप्त एल्गोरिदम या अनिश्चित कटऑफ नहीं। स्पष्ट योग्यता स्कोर।' : 'No hidden scoring metrics or arbitrary Cutoffs. Clear competency mapping.',
      icon: Eye,
      color: '#F97316'
    },
    {
      title: lang === 'hi' ? 'कौशल आधारित' : 'Skill-based',
      desc: lang === 'hi' ? 'केवल डिग्री या कॉलेज ब्रांड पर निर्भर रहने के बजाय वास्तविक दक्षता।' : 'Focus on practical competencies, code quality, and hands-on projects.',
      icon: Award,
      color: '#6366F1'
    },
    {
      title: lang === 'hi' ? 'छात्र-केंद्रित' : 'Student-focused',
      desc: lang === 'hi' ? 'छात्रों के निरंतर विकास और मार्गदर्शन को सर्वोच्च प्राथमिकता।' : 'Built from the ground up to empower students with growth insights.',
      icon: Heart,
      color: '#22C55E'
    },
    {
      title: lang === 'hi' ? 'उद्योग से जुड़ा' : 'Industry-connected',
      desc: lang === 'hi' ? 'वास्तविक जॉब मार्केट मानकों और शीर्ष कंपनियों से सीधा संबंध।' : 'Direct integration with hiring standards across top Indian tech companies.',
      icon: Network,
      color: '#0D9488'
    }
  ];

  return (
    <section
      id="trust"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        position: 'relative',
        transition: 'background-color 350ms ease'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <span className="badge badge-saffron" style={{ marginBottom: '14px' }}>
            {lang === 'hi' ? 'सत्यनिष्ठा और विश्वास' : 'BUILT AROUND YOUR GROWTH'}
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 800,
              color: 'var(--govt-ink)',
              marginBottom: '14px',
              lineHeight: 1.18
            }}
          >
            {lang === 'hi' ? 'आपके विकास के आधार पर निर्मित।' : 'Built Around Your Growth.'}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted-dark)', lineHeight: 1.6 }}>
            {lang === 'hi'
              ? 'आपका डेटा केवल आपके करियर यात्रा को व्यक्तिगत और पारदर्शी बनाने में मदद करता है।'
              : 'Your data directly personalizes your career journey without selling or obscuring your potential.'}
          </p>
        </div>

        {/* 4 Trust Principles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px'
          }}
        >
          {principles.map((pr) => (
            <div
              key={pr.title}
              className="card-glass"
              style={{
                padding: '28px 24px',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  backgroundColor: `${pr.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}
              >
                {React.createElement(pr.icon, { size: 24, color: pr.color })}
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '8px' }}>
                {pr.title}
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--muted-dark)', lineHeight: 1.55 }}>
                {pr.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
