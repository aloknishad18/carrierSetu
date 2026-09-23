import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Briefcase,
  Award,
  AlertCircle,
  Zap,
  Target,
  FileText,
  UserCheck,
  ChevronDown
} from 'lucide-react';

export const HeroSection = () => {
  const { t, lang, theme } = useApp();
  const heroRef = useRef(null);
  
  // Mouse position offset for parallax effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const scrollToJourney = () => {
    const el = document.querySelector('#how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    const el = document.querySelector('#skill-profile');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        paddingTop: '64px',
        paddingBottom: '96px',
        overflow: 'hidden',
        transition: 'background-color 350ms ease'
      }}
    >
      {/* Radial Ambient Glows (Responsive to Theme) */}
      <div
        className={theme === 'dark' ? 'hero-glow-dark' : 'hero-glow-light'}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '56px'
          }}
        >
          {/* Left Column: Headline & Action CTAs */}
          <div
            style={{
              maxWidth: '620px',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 600ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* SIH26044 Trust Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--pure-white)',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                boxShadow: 'var(--shadow-xs)',
                marginBottom: '24px'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--saffron-primary)'
                }}
                className="animate-node-pulse"
              />
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: 'var(--saffron-primary)',
                  letterSpacing: '0.04em'
                }}
              >
                SIH26044
              </span>
              <span style={{ color: 'var(--muted-text)', opacity: 0.4 }}>•</span>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                {lang === 'hi' ? 'शिक्षाविद × उद्योग × कौशल' : 'Academia × Industry × Skills'}
              </span>
            </div>

            {/* Immersive Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                color: 'var(--govt-ink)',
                marginBottom: '20px'
              }}
            >
              {lang === 'hi' ? (
                <>
                  आपके कौशल को मिलनी चाहिए <br />
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #F97316 0%, #F59E0B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block'
                    }}
                  >
                    सही अवसर।
                  </span>
                </>
              ) : (
                <>
                  Your Skills Deserve the{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #F97316 0%, #F59E0B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block'
                    }}
                  >
                    Right Opportunities.
                  </span>
                </>
              )}
            </h1>

            {/* Supporting Text */}
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.68,
                color: 'var(--muted-dark)',
                marginBottom: '36px',
                fontWeight: 450
              }}
            >
              {lang === 'hi'
                ? 'CareerSetu कौशल मैपिंग, करियर इंटेलिजेंस, इंटर्नशिप और प्लेसमेंट अवसरों के माध्यम से छात्रों, शिक्षाविदों, संस्थानों और उद्योग को जोड़ता है।'
                : 'CareerSetu connects students, academia, institutions and industry through skill mapping, career intelligence, internships and placement opportunities.'}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '44px' }}>
              <button
                onClick={scrollToSkills}
                className="btn-primary"
                style={{
                  padding: '14px 28px',
                  fontSize: '1rem',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-saffron)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <span>{lang === 'hi' ? 'अपना करियर मार्ग खोजें →' : 'Explore Your Career Path →'}</span>
              </button>

              <button
                onClick={scrollToJourney}
                style={{
                  padding: '14px 24px',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--light-border)',
                  backgroundColor: 'var(--pure-white)',
                  color: 'var(--govt-ink)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <span>{lang === 'hi' ? 'देखें यह कैसे काम करता है ↓' : 'See How It Works ↓'}</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px solid var(--light-border)'
              }}
            >
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--saffron-primary)' }}>10k+</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted-text)', fontWeight: 600 }}>
                  {lang === 'hi' ? 'छात्र मैप किए गए' : 'Students Mapped'}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--deep-indigo)' }}>500+</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted-text)', fontWeight: 600 }}>
                  {lang === 'hi' ? 'उद्योग भागीदार' : 'Industry Partners'}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--success-green)' }}>85%</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted-text)', fontWeight: 600 }}>
                  {lang === 'hi' ? 'तैयारी में वृद्धि' : 'Readiness Growth'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Career Ecosystem */}
          <div
            style={{
              position: 'relative',
              minHeight: '480px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'scale(1)' : 'scale(0.95)',
              transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* SVG Connecting Network Lines */}
            <svg
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1
              }}
            >
              {/* Lines from center to floating nodes */}
              <line x1="50%" y1="50%" x2="18%" y2="20%" stroke="rgba(249, 115, 22, 0.35)" strokeWidth="2" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="82%" y2="18%" stroke="rgba(99, 102, 241, 0.35)" strokeWidth="2" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="16%" y2="76%" stroke="rgba(34, 197, 94, 0.35)" strokeWidth="2" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="85%" y2="78%" stroke="rgba(249, 115, 22, 0.35)" strokeWidth="2" className="animate-dash-flow" />
              <line x1="50%" y1="50%" x2="50%" y2="88%" stroke="rgba(99, 102, 241, 0.35)" strokeWidth="2" className="animate-dash-flow" />
            </svg>

            {/* Central Node: STUDENT PROFILE */}
            <div
              style={{
                position: 'relative',
                zIndex: 10,
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #F97316 0%, #312E81 100%)',
                padding: '4px',
                boxShadow: '0 16px 40px rgba(249, 115, 22, 0.35)',
                transform: `translate(${mousePos.x * -6}px, ${mousePos.y * -6}px)`,
                transition: 'transform 200ms ease-out'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  backgroundColor: 'var(--pure-white)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--saffron-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '8px'
                  }}
                >
                  <UserCheck size={24} color="var(--saffron-primary)" />
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--govt-ink)', lineHeight: 1.2 }}>
                  STUDENT
                </div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--saffron-primary)' }}>
                  PROFILE
                </div>
              </div>
            </div>

            {/* Floating Card 1: CAREER READINESS 82 / 100 */}
            <div
              className="card-glass"
              style={{
                position: 'absolute',
                top: '12%',
                left: '2%',
                zIndex: 12,
                padding: '12px 18px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`,
                transition: 'transform 200ms ease-out'
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--success-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <TrendingUp size={20} color="var(--success-green)" />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted-text)', fontWeight: 700 }}>
                  CAREER READINESS
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                  82 <span style={{ fontSize: '0.78rem', color: 'var(--muted-text)' }}>/ 100</span>
                </div>
              </div>
            </div>

            {/* Floating Card 2: SKILL MATCH 94% */}
            <div
              className="card-glass"
              style={{
                position: 'absolute',
                top: '10%',
                right: '2%',
                zIndex: 12,
                padding: '12px 18px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transform: `translate(${mousePos.x * -10}px, ${mousePos.y * 10}px)`,
                transition: 'transform 200ms ease-out'
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(99, 102, 241, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Zap size={20} color="var(--deep-indigo)" />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted-text)', fontWeight: 700 }}>
                  SKILL MATCH
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--deep-indigo)' }}>
                  94% <span style={{ fontSize: '0.74rem', color: 'var(--muted-text)' }}>Software Dev</span>
                </div>
              </div>
            </div>

            {/* Floating Card 3: SKILL GAP (3 priorities) */}
            <div
              className="card-glass"
              style={{
                position: 'absolute',
                bottom: '18%',
                left: '2%',
                zIndex: 12,
                padding: '12px 18px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transform: `translate(${mousePos.x * 10}px, ${mousePos.y * -10}px)`,
                transition: 'transform 200ms ease-out'
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--saffron-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Target size={20} color="var(--saffron-primary)" />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted-text)', fontWeight: 700 }}>
                  SKILL GAP
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--saffron-primary)' }}>
                  3 Priorities <span style={{ fontSize: '0.74rem', color: 'var(--muted-text)' }}>Identified</span>
                </div>
              </div>
            </div>

            {/* Floating Card 4: NEW OPPORTUNITY (AI Engineering Intern) */}
            <div
              className="card-glass"
              style={{
                position: 'absolute',
                bottom: '16%',
                right: '0%',
                zIndex: 12,
                padding: '12px 18px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)`,
                transition: 'transform 200ms ease-out'
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--success-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Briefcase size={20} color="var(--success-green)" />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted-text)', fontWeight: 700 }}>
                  NEW OPPORTUNITY
                </div>
                <div style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                  AI Engineering Intern
                </div>
              </div>
            </div>

            {/* Floating Card 5: RESUME ALIGNMENT 86% */}
            <div
              className="card-glass"
              style={{
                position: 'absolute',
                bottom: '2%',
                left: '32%',
                zIndex: 12,
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transform: `translate(${mousePos.x * 6}px, ${mousePos.y * -6}px)`,
                transition: 'transform 200ms ease-out'
              }}
            >
              <FileText size={16} color="var(--saffron-primary)" />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                RESUME ALIGNMENT: <strong style={{ color: 'var(--saffron-primary)' }}>86%</strong>
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
