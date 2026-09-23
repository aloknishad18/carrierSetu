import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Award, CheckCircle2, TrendingUp, Cpu, Users, Code } from 'lucide-react';

export const SkillProfileSection = () => {
  const { lang, theme } = useApp();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('skill-profile');
      if (el) {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) {
          setAnimated(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technicalSkills = [
    { name: 'React', val: 88, color: '#F97316' },
    { name: 'Python', val: 82, color: '#312E81' },
    { name: 'Git & Version Control', val: 91, color: '#22C55E' }
  ];

  const softSkills = [
    { name: 'Communication', val: 72, color: '#F59E0B' },
    { name: 'Problem Solving', val: 84, color: '#6366F1' },
    { name: 'Collaboration', val: 88, color: '#0D9488' }
  ];

  return (
    <section
      id="skill-profile"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        position: 'relative',
        transition: 'background-color 350ms ease'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px auto' }}>
          <span className="badge badge-saffron" style={{ marginBottom: '14px' }}>
            {lang === 'hi' ? 'कौशल प्रोफ़ाइल' : 'SKILL DNA'}
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
            {lang === 'hi' ? 'अपने कौशल को जानें। केवल अपनी डिग्री नहीं।' : 'Know your skills. Not just your degree.'}
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--muted-dark)', lineHeight: 1.68 }}>
            {lang === 'hi'
              ? 'CareerSetu सत्यापित योग्यता मैट्रिक्स के साथ आपके व्यावहारिक कौशल को पारदर्शी बनाता है।'
              : 'CareerSetu translates raw coursework and project experience into a verified competency DNA profile.'}
          </p>
        </div>

        {/* Skill DNA Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'stretch'
          }}
        >
          {/* Technical Skills Card */}
          <div
            className="card-glass"
            style={{
              padding: '36px 32px',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--saffron-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Code size={22} color="var(--saffron-primary)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                  {lang === 'hi' ? 'तकनीकी दक्षता' : 'Technical Skills'}
                </h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--muted-text)', fontWeight: 600 }}>
                  VERIFIED COMPETENCIES
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {technicalSkills.map((sk) => (
                <div key={sk.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                      {sk.name}
                    </span>
                    <span style={{ fontSize: '0.94rem', fontWeight: 800, color: sk.color }}>
                      {animated ? sk.val : 0}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: '10px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--light-border)',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: animated ? `${sk.val}%` : '0%',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: sk.color,
                        transition: 'width 1200ms cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills Card */}
          <div
            className="card-glass"
            style={{
              padding: '36px 32px',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(99, 102, 241, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Users size={22} color="var(--deep-indigo)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                  {lang === 'hi' ? 'सॉफ्ट स्किल्स' : 'Soft Skills & Mindset'}
                </h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--muted-text)', fontWeight: 600 }}>
                  BEHAVIORAL RATINGS
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {softSkills.map((sk) => (
                <div key={sk.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                      {sk.name}
                    </span>
                    <span style={{ fontSize: '0.94rem', fontWeight: 800, color: sk.color }}>
                      {animated ? sk.val : 0}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: '10px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--light-border)',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: animated ? `${sk.val}%` : '0%',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: sk.color,
                        transition: 'width 1200ms cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Alignment Summary Card */}
          <div
            className="card-glass"
            style={{
              padding: '36px 32px',
              borderRadius: 'var(--radius-xl)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'conic-gradient(#F97316 0% 79%, var(--light-border) 79% 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                boxShadow: 'var(--shadow-saffron)'
              }}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--pure-white)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--saffron-primary)' }}>
                  {animated ? 79 : 0}%
                </div>
                <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--muted-text)' }}>
                  ALIGNMENT
                </div>
              </div>
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '8px' }}>
              {lang === 'hi' ? 'उद्योग संरेखण' : 'Overall Industry Alignment'}
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--muted-dark)', lineHeight: 1.5, maxWidth: '280px' }}>
              {lang === 'hi'
                ? 'राष्ट्रीय रोजगार योग्य मापदंडों के आधार पर आपकी समग्र तत्परता स्कोर।'
                : 'Your benchmarked readiness rating for modern Indian technology positions.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
