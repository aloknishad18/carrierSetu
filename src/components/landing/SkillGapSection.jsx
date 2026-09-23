import React from 'react';
import { useApp } from '../../context/AppContext';
import { Target, ArrowRight, Zap, CheckCircle2, AlertTriangle } from 'lucide-react';

export const SkillGapSection = () => {
  const { lang, theme } = useApp();

  const currentSkills = ['React', 'Git & Version Control', 'Problem Solving'];
  const targetRole = 'Software Developer';
  const priorityGaps = [
    { title: 'Advanced DSA', urgency: 'High Priority', color: '#EF4444' },
    { title: 'Backend Architecture', urgency: 'Medium Priority', color: '#F59E0B' },
    { title: 'System Design Fundamentals', urgency: 'Medium Priority', color: '#6366F1' }
  ];

  const scrollToSkills = () => {
    const el = document.querySelector('#skill-profile');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="skill-gap"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        position: 'relative',
        transition: 'background-color 350ms ease'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
          <span className="badge badge-saffron" style={{ marginBottom: '14px' }}>
            {lang === 'hi' ? 'कौशल अंतर विश्लेषण' : 'SKILL GAP ANALYSIS'}
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
              fontWeight: 800,
              color: 'var(--govt-ink)',
              marginBottom: '16px',
              lineHeight: 1.18
            }}
          >
            {lang === 'hi' ? 'अपनी कमियों को समझें। लक्ष्य तक पहुंचे।' : 'Pinpoint Your Skill Gaps. Bridge to Opportunity.'}
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--muted-dark)', lineHeight: 1.68 }}>
            {lang === 'hi'
              ? 'देखें कि आपकी वर्तमान स्थिति और आपके लक्षित पद के बीच कौन से कौशल आवश्यक हैं।'
              : 'Compare your existing verified skills directly against real-world target job roles.'}
          </p>
        </div>

        {/* Transformation Pipeline Visual */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'center',
            marginBottom: '48px'
          }}
        >
          {/* LEFT: Current Student Profile */}
          <div
            className="card-glass"
            style={{
              padding: '32px 28px',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--saffron-primary)', marginBottom: '8px' }}>
              CURRENT PROFILE
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '18px' }}>
              {lang === 'hi' ? 'वर्तमान छात्र कौशल' : 'Verified Student Skills'}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {currentSkills.map((sk) => (
                <div
                  key={sk}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--saffron-light)'
                  }}
                >
                  <CheckCircle2 size={18} color="var(--saffron-primary)" />
                  <span style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--govt-ink)' }}>{sk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE: Setu AI Intelligence Hub */}
          <div
            style={{
              textAlign: 'center',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #F97316 0%, #312E81 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: 'var(--shadow-saffron)',
                marginBottom: '12px'
              }}
              className="animate-node-pulse"
            >
              <Zap size={30} />
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              CAREERSETU INTELLIGENCE
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--muted-text)', fontWeight: 600 }}>
              Real-time Skill Gap Engine
            </div>
          </div>

          {/* RIGHT: Target Career Role & Priority Gaps */}
          <div
            className="card-glass"
            style={{
              padding: '32px 28px',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--deep-indigo)', marginBottom: '8px' }}>
              TARGET ROLE
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '18px' }}>
              {targetRole}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {priorityGaps.map((gp) => (
                <div
                  key={gp.title}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(239, 68, 68, 0.08)',
                    border: `1px solid ${gp.color}40`
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <AlertTriangle size={18} color={gp.color} />
                    <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--govt-ink)' }}>{gp.title}</span>
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: gp.color }}>{gp.urgency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={scrollToSkills}
            className="btn-primary"
            style={{
              padding: '14px 28px',
              fontSize: '1rem',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            <span>{lang === 'hi' ? 'अपना कौशल अंतर समझें →' : 'Understand Your Skill Gap →'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
