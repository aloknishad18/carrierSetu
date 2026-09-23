import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Network, User, GraduationCap, Briefcase, Building2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutEcosystemSection = () => {
  const { t, lang, setCurrentView, setStudentTab } = useApp();
  const [activeNode, setActiveNode] = useState(null);

  const nodeInfo = {
    student: {
      title: lang === 'hi' ? 'छात्र (Students)' : 'Students',
      desc: lang === 'hi'
        ? 'कौशल मानचित्रण, स्वचालित अंतर पहचान और व्यक्तिगत रोडमैप के माध्यम से करियर तैयारी में वृद्धि।'
        : 'Continuous skill mapping, gap identification, and personalized roadmap execution.',
      link: () => {
        setCurrentView('student');
        setStudentTab('overview');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    academia: {
      title: lang === 'hi' ? 'शिक्षाविद (Academia)' : 'Academia & Faculty',
      desc: lang === 'hi'
        ? 'उद्योग प्रायोजित संकाय विकास (FDP), संयुक्त अनुसंधान अनुदान और लाइव प्रोजेक्ट समन्वय।'
        : 'Faculty development programs (FDPs), industry research collaboration, and capstone mentorship.',
      link: () => {
        setCurrentView('academician');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    industry: {
      title: lang === 'hi' ? 'उद्योग (Industry)' : 'Industry & Recruiters',
      desc: lang === 'hi'
        ? 'वास्तविक कौशल रूब्रिक्स का प्रकाशन, प्री-स्क्रीन किए गए छात्रों की खोज और त्वरित कैंपस हायरिंग।'
        : 'Publishing precise competency rubrics, discovering pre-vetted students, and fast-track hiring.',
      link: () => {
        setCurrentView('industry');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    institution: {
      title: lang === 'hi' ? 'संस्थान (Institutions)' : 'Educational Institutions',
      desc: lang === 'hi'
        ? 'कैंपस करियर तैयारी डैशबोर्ड, एनआईआरएफ और नैक मान्यता रिपोर्टिंग और पाठ्यक्रम आधुनिकीकरण।'
        : 'Campus career readiness analytics, NAAC/NIRF accreditation metrics, and curriculum modernization.',
      link: () => {
        setCurrentView('institution');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="about"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: 'var(--warm-ivory)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px auto' }}>
          <span className="badge badge-saffron" style={{ marginBottom: '14px' }}>
            {t.about.eyebrow}
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
            {t.about.headline}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted-dark)', lineHeight: 1.65 }}>
            {t.about.subtext}
          </p>
        </div>

        {/* Visual Ecosystem Interactive Hub Diagram */}
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            backgroundColor: 'var(--pure-white)',
            borderRadius: 'var(--radius-xl)',
            padding: '44px 32px',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-xl)',
            position: 'relative'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(3, auto)',
              gap: '24px',
              alignItems: 'center',
              justifyItems: 'center'
            }}
            className="ecosystem-grid"
          >
            {/* Top Center: Student */}
            <div
              onMouseEnter={() => setActiveNode('student')}
              onClick={() => nodeInfo.student.link()}
              style={{
                gridColumn: 2,
                gridRow: 1,
                padding: '18px 24px',
                borderRadius: '16px',
                backgroundColor: activeNode === 'student' ? 'var(--saffron-primary)' : 'var(--saffron-light)',
                color: activeNode === 'student' ? 'var(--pure-white)' : 'var(--govt-ink)',
                border: '2px solid var(--saffron-primary)',
                textAlign: 'center',
                boxShadow: activeNode === 'student' ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                width: '210px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                transform: activeNode === 'student' ? 'scale(1.04)' : 'none'
              }}
            >
              <User size={26} color={activeNode === 'student' ? '#FFFFFF' : 'var(--saffron-primary)'} style={{ margin: '0 auto 6px auto' }} />
              <div style={{ fontWeight: 900, fontSize: '1.05rem' }}>STUDENTS</div>
              <div style={{ fontSize: '0.74rem', fontWeight: 600, opacity: 0.9 }}>Skills & Ambition</div>
            </div>

            {/* Middle Left: Academia */}
            <div
              onMouseEnter={() => setActiveNode('academia')}
              onClick={() => nodeInfo.academia.link()}
              style={{
                gridColumn: 1,
                gridRow: 2,
                padding: '18px 24px',
                borderRadius: '16px',
                backgroundColor: activeNode === 'academia' ? 'var(--deep-indigo)' : 'var(--indigo-surface)',
                color: activeNode === 'academia' ? 'var(--pure-white)' : 'var(--govt-ink)',
                border: '2px solid var(--deep-indigo)',
                textAlign: 'center',
                boxShadow: activeNode === 'academia' ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                width: '210px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                transform: activeNode === 'academia' ? 'scale(1.04)' : 'none'
              }}
            >
              <GraduationCap size={26} color={activeNode === 'academia' ? '#FFFFFF' : 'var(--deep-indigo)'} style={{ margin: '0 auto 6px auto' }} />
              <div style={{ fontWeight: 900, fontSize: '1.05rem' }}>ACADEMIA</div>
              <div style={{ fontSize: '0.74rem', fontWeight: 600, opacity: 0.9 }}>Pedagogy & Research</div>
            </div>

            {/* Center: CAREERSETU PLATFORM INTELLIGENCE LAYER */}
            <div
              style={{
                gridColumn: 2,
                gridRow: 2,
                padding: '28px 24px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #1C1B1A 0%, #312E81 100%)',
                color: 'var(--pure-white)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-xl)',
                border: '3px solid var(--saffron-primary)',
                zIndex: 2,
                width: '240px',
                position: 'relative'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--saffron-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 10px auto',
                  boxShadow: '0 4px 14px rgba(232, 117, 22, 0.4)'
                }}
              >
                <Network size={24} color="#FFFFFF" />
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
                CAREER<span style={{ color: 'var(--saffron-primary)' }}>SETU</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#FDBA74', marginTop: '2px', fontWeight: 700 }}>
                Platform Intelligence Layer
              </div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '4px' }}>
                SIH26044 National Engine
              </div>
            </div>

            {/* Middle Right: Industry */}
            <div
              onMouseEnter={() => setActiveNode('industry')}
              onClick={() => nodeInfo.industry.link()}
              style={{
                gridColumn: 3,
                gridRow: 2,
                padding: '18px 24px',
                borderRadius: '16px',
                backgroundColor: activeNode === 'industry' ? '#B45309' : 'var(--warm-orange-light)',
                color: activeNode === 'industry' ? 'var(--pure-white)' : 'var(--govt-ink)',
                border: '2px solid var(--warm-orange)',
                textAlign: 'center',
                boxShadow: activeNode === 'industry' ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                width: '210px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                transform: activeNode === 'industry' ? 'scale(1.04)' : 'none'
              }}
            >
              <Briefcase size={26} color={activeNode === 'industry' ? '#FFFFFF' : '#B45309'} style={{ margin: '0 auto 6px auto' }} />
              <div style={{ fontWeight: 900, fontSize: '1.05rem' }}>INDUSTRY</div>
              <div style={{ fontSize: '0.74rem', fontWeight: 600, opacity: 0.9 }}>Jobs & Skill Rubrics</div>
            </div>

            {/* Bottom Center: Institutions */}
            <div
              onMouseEnter={() => setActiveNode('institution')}
              onClick={() => nodeInfo.institution.link()}
              style={{
                gridColumn: 2,
                gridRow: 3,
                padding: '18px 24px',
                borderRadius: '16px',
                backgroundColor: activeNode === 'institution' ? 'var(--success-green)' : 'var(--success-light)',
                color: activeNode === 'institution' ? 'var(--pure-white)' : 'var(--govt-ink)',
                border: '2px solid var(--success-green)',
                textAlign: 'center',
                boxShadow: activeNode === 'institution' ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                width: '210px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                transform: activeNode === 'institution' ? 'scale(1.04)' : 'none'
              }}
            >
              <Building2 size={26} color={activeNode === 'institution' ? '#FFFFFF' : 'var(--success-green)'} style={{ margin: '0 auto 6px auto' }} />
              <div style={{ fontWeight: 900, fontSize: '1.05rem' }}>INSTITUTIONS</div>
              <div style={{ fontSize: '0.74rem', fontWeight: 600, opacity: 0.9 }}>Governance & Outcomes</div>
            </div>
          </div>

          {/* Stakeholder Interactive Information Bar */}
          {activeNode && (
            <div
              className="fade-in"
              style={{
                marginTop: '32px',
                padding: '16px 20px',
                borderRadius: '12px',
                backgroundColor: 'var(--warm-ivory)',
                border: '1px solid var(--light-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                  {nodeInfo[activeNode].title}:
                </span>{' '}
                <span style={{ fontSize: '0.86rem', color: 'var(--muted-dark)' }}>
                  {nodeInfo[activeNode].desc}
                </span>
              </div>
              <button
                onClick={nodeInfo[activeNode].link}
                className="btn-secondary"
                style={{ padding: '6px 14px', fontSize: '0.8rem' }}
              >
                Open Portal →
              </button>
            </div>
          )}

          {/* Core Journey Bottom Summary */}
          <div
            style={{
              marginTop: '32px',
              paddingTop: '20px',
              borderTop: '1px solid var(--light-border)',
              textAlign: 'center',
              fontSize: '0.96rem',
              fontWeight: 800,
              color: 'var(--govt-ink)'
            }}
          >
            {t.about.coreJourney}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .ecosystem-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
