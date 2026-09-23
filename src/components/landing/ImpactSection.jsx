import React from 'react';
import { useApp } from '../../context/AppContext';
import { Users, Building, Briefcase, TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';

export const ImpactSection = () => {
  const { t, lang } = useApp();

  const stats = [
    { num: '10,000+', label: t.impact.label1, sub: 'Across 48 Campuses', icon: Users, color: '#E87516' },
    { num: '500+', label: t.impact.label2, sub: 'Startups & MNCs', icon: Building, color: '#312E81' },
    { num: '2,000+', label: t.impact.label3, sub: 'Verified Postings', icon: Briefcase, color: '#15803D' },
    { num: '85%', label: t.impact.label4, sub: 'Post-Assessment Growth', icon: TrendingUp, color: '#F59E0B' }
  ];

  return (
    <section
      id="impact"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: 'var(--pure-white)',
        borderTop: '1px solid var(--light-border)',
        borderBottom: '1px solid var(--light-border)',
        position: 'relative'
      }}
      className="bharat-mandala-pattern"
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
          <span className="badge badge-saffron" style={{ marginBottom: '14px' }}>
            {t.impact.eyebrow}
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 800,
              color: 'var(--govt-ink)',
              marginBottom: '16px',
              lineHeight: 1.2
            }}
          >
            {t.impact.headline}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted-dark)', lineHeight: 1.65 }}>
            {t.impact.subtext}
          </p>
        </div>

        {/* 4 Large Metric Stat Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}
        >
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="interactive-card"
                style={{
                  padding: '36px 24px',
                  borderRadius: 'var(--radius-xl)',
                  backgroundColor: 'var(--pure-white)',
                  border: '1px solid var(--light-border)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}
                >
                  <Icon size={28} />
                </div>
                <div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--govt-ink)', lineHeight: 1 }}>
                  {item.num}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--govt-ink)', marginTop: '8px' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted-text)', marginTop: '4px', fontWeight: 600 }}>
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>

        {/* The National Impact Cascade Formula */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '24px 28px',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--indigo-surface)',
            border: '1px solid rgba(49, 46, 129, 0.18)',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--deep-indigo)', letterSpacing: '0.04em', marginBottom: '12px' }}>
            NATIONAL IMPACT CASCADE • VIKSIT BHARAT 2047
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              fontSize: '1.15rem',
              fontWeight: 900,
              color: 'var(--govt-ink)'
            }}
          >
            <span style={{ color: 'var(--saffron-primary)' }}>Verified Skills</span>
            <span style={{ color: 'var(--muted-text)' }}>→</span>
            <span style={{ color: 'var(--deep-indigo)' }}>Career Readiness</span>
            <span style={{ color: 'var(--muted-text)' }}>→</span>
            <span style={{ color: 'var(--warm-orange)' }}>Smart Opportunity Match</span>
            <span style={{ color: 'var(--muted-text)' }}>→</span>
            <span style={{ color: 'var(--success-green)' }}>Economic Growth</span>
          </div>

          {/* Explicit Demonstration Data Disclaimer */}
          <div
            style={{
              marginTop: '16px',
              paddingTop: '12px',
              borderTop: '1px solid rgba(49, 46, 129, 0.12)',
              fontSize: '0.78rem',
              color: 'var(--muted-dark)',
              fontWeight: 600
            }}
          >
            * <strong>Notice:</strong> Demonstration data presented for Smart India Hackathon evaluation.
          </div>
        </div>

      </div>
    </section>
  );
};
