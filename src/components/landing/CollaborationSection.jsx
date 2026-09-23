import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UserCheck, GraduationCap, Building2, Landmark, CheckCircle2, Zap } from 'lucide-react';

export const CollaborationSection = () => {
  const { lang, theme } = useApp();
  const [activeStakeholder, setActiveStakeholder] = useState('student');

  const stakeholders = [
    {
      id: 'student',
      title: lang === 'hi' ? 'छात्र (STUDENT)' : 'STUDENT',
      icon: UserCheck,
      color: '#F97316',
      features: [
        lang === 'hi' ? 'सत्यापित कौशल मैपिंग (Skill Mapping)' : 'Skill Mapping & Matrix',
        lang === 'hi' ? 'व्यक्तिगत करियर रोडमैप (Career Roadmap)' : 'Personalized Career Roadmap',
        lang === 'hi' ? 'रिज्यूमे इंटेलिजेंस (Resume Intelligence)' : 'Resume Intelligence Audit'
      ]
    },
    {
      id: 'industry',
      title: lang === 'hi' ? 'उद्योग (INDUSTRY)' : 'INDUSTRY',
      icon: Building2,
      color: '#6366F1',
      features: [
        lang === 'hi' ? 'प्रतिभा खोज (Talent Discovery)' : 'Targeted Talent Discovery',
        lang === 'hi' ? 'कौशल मिलान (Skill Matching)' : 'Competency Skill Matching',
        lang === 'hi' ? 'सीधा भर्ती (Recruitment)' : 'Direct Recruitment Pipeline'
      ]
    },
    {
      id: 'academia',
      title: lang === 'hi' ? 'शिक्षाविद (ACADEMIA)' : 'ACADEMIA',
      icon: GraduationCap,
      color: '#0D9488',
      features: [
        lang === 'hi' ? 'छात्र अंतर्दृष्टि (Student Insights)' : 'Student Skill Insights',
        lang === 'hi' ? 'मार्गदर्शन (Mentorship)' : 'Curriculum Mentorship',
        lang === 'hi' ? 'उद्योग सहयोग (Industry Collaboration)' : 'Industry Project Collaboration'
      ]
    },
    {
      id: 'institution',
      title: lang === 'hi' ? 'संस्थान (INSTITUTION)' : 'INSTITUTION',
      icon: Landmark,
      color: '#15803D',
      features: [
        lang === 'hi' ? 'कौशल एनालिटिक्स (Skill Analytics)' : 'Institutional Skill Analytics',
        lang === 'hi' ? 'प्लेसमेंट तैयारी (Placement Readiness)' : 'Cohort Placement Readiness',
        lang === 'hi' ? 'उद्योग भागीदारी (Industry Partnerships)' : 'Strategic Industry Partnerships'
      ]
    }
  ];

  const current = stakeholders.find((s) => s.id === activeStakeholder) || stakeholders[0];

  return (
    <section
      id="collaboration"
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
            {lang === 'hi' ? 'इकोसिस्टम नेटवर्क' : 'STAKEHOLDER ECOSYSTEM'}
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
            {lang === 'hi' ? 'चारों हितधारकों को एक साथ जोड़ना।' : 'Connecting Four Pillars of Career Growth.'}
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--muted-dark)', lineHeight: 1.68 }}>
            {lang === 'hi'
              ? 'CareerSetu छात्रों, शिक्षाविदों, संस्थानों और उद्योग के बीच एक पारदर्शी डिजिटल सेतु है।'
              : 'CareerSetu unifies students, faculty, institutional leadership, and hiring organizations into one ecosystem.'}
          </p>
        </div>

        {/* 4 Stakeholder Selector Buttons */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginBottom: '40px'
          }}
        >
          {stakeholders.map((stk) => {
            const isActive = activeStakeholder === stk.id;
            return (
              <button
                key={stk.id}
                onClick={() => setActiveStakeholder(stk.id)}
                onMouseEnter={() => setActiveStakeholder(stk.id)}
                style={{
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: isActive ? 'var(--pure-white)' : 'transparent',
                  border: isActive ? `2px solid ${stk.color}` : '1px solid var(--light-border)',
                  boxShadow: isActive ? 'var(--shadow-md)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'all 200ms ease'
                }}
              >
                {React.createElement(stk.icon, {
                  size: 22,
                  color: isActive ? stk.color : 'var(--muted-text)'
                })}
                <span
                  style={{
                    fontSize: '0.94rem',
                    fontWeight: 800,
                    color: isActive ? 'var(--govt-ink)' : 'var(--muted-dark)'
                  }}
                >
                  {stk.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Central Stage Ecosystem Capability Detail */}
        <div
          className="card-glass"
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: '44px 36px',
            borderRadius: 'var(--radius-xl)',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '20px',
              backgroundColor: `${current.color}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}
          >
            {React.createElement(current.icon, { size: 36, color: current.color })}
          </div>

          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '8px' }}>
            {current.title} CAPABILITIES
          </h3>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: current.color, marginBottom: '28px' }}>
            POWERED BY CAREERSETU INTELLIGENCE
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px'
            }}
          >
            {current.features.map((feat) => (
              <div
                key={feat}
                style={{
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--warm-ivory)',
                  border: '1px solid var(--light-border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  textAlign: 'left'
                }}
              >
                <CheckCircle2 size={18} color={current.color} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--govt-ink)' }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
