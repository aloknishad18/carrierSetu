import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { MapPin, CheckCircle2, Circle, ArrowDown, Award } from 'lucide-react';

export const RoadmapSection = () => {
  const { lang, theme } = useApp();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('roadmap');
      if (el) {
        const rect = el.getBoundingClientRect();
        const winHeight = window.innerHeight;
        const total = rect.height;
        const current = winHeight - rect.top;
        let p = (current / total) * 100;
        p = Math.max(0, Math.min(100, p));
        setScrollProgress(p);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pathMilestones = [
    { label: lang === 'hi' ? 'आप यहां हैं (82% तत्परता)' : 'YOU ARE HERE (82% Readiness)', type: 'start', score: '82%' },
    { label: lang === 'hi' ? 'वर्तमान सत्यापित कौशल' : 'Current Verified Skills', type: 'completed' },
    { label: lang === 'hi' ? 'उन्नत DSA अध्ययन' : 'Advanced DSA Module', type: 'target' },
    { label: lang === 'hi' ? 'बैकएंड माइक्रो-प्रोजेक्ट' : 'Backend Architecture Project', type: 'target' },
    { label: lang === 'hi' ? 'सिस्टम डिजाइन बुनियादी बातें' : 'System Design Fundamentals', type: 'target' },
    { label: lang === 'hi' ? 'लक्ष्य करियर तत्परता (90%+)' : 'Target Career Readiness (90%+)', type: 'goal', score: '90%+' }
  ];

  return (
    <section
      id="roadmap"
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
            {lang === 'hi' ? 'करियर मार्ग' : 'CAREER ROADMAP'}
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
            {lang === 'hi' ? 'सफलता का एक स्पष्ट मार्ग।' : 'A Clear Guided Path to Readiness.'}
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--muted-dark)', lineHeight: 1.68 }}>
            {lang === 'hi'
              ? 'वर्तमान क्षमताओं से लेकर पूर्ण उद्योग तत्परता तक का व्यक्तिगत चरण-दर-चरण रोडमैप।'
              : 'Follow an interactive milestone pathway taking you from baseline skills to top-tier hiring readiness.'}
          </p>
        </div>

        {/* Path Metaphor Box */}
        <div
          className="card-glass"
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            padding: '44px 36px',
            borderRadius: 'var(--radius-xl)',
            position: 'relative'
          }}
        >
          {/* Animated Filling Pathway Line */}
          <div
            style={{
              position: 'absolute',
              top: '80px',
              bottom: '80px',
              left: '52px',
              width: '4px',
              backgroundColor: 'var(--light-border)',
              borderRadius: '2px',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: '100%',
                height: `${scrollProgress}%`,
                backgroundColor: 'var(--saffron-primary)',
                transition: 'height 150ms ease-out'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative', zIndex: 2 }}>
            {pathMilestones.map((ms, idx) => {
              const isPassed = (idx / (pathMilestones.length - 1)) * 100 <= scrollProgress;
              return (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: isPassed ? 'var(--saffron-primary)' : 'var(--pure-white)',
                      border: `3px solid ${isPassed ? 'var(--saffron-primary)' : 'var(--light-border)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isPassed ? '#FFFFFF' : 'var(--muted-text)',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      boxShadow: isPassed ? 'var(--shadow-saffron)' : 'none',
                      transition: 'all 300ms ease'
                    }}
                  >
                    {idx + 1}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                      {ms.label}
                    </div>
                  </div>

                  {ms.score && (
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.82rem',
                        fontWeight: 800,
                        backgroundColor: ms.type === 'start' ? 'var(--saffron-light)' : 'var(--success-light)',
                        color: ms.type === 'start' ? 'var(--saffron-primary)' : 'var(--success-green)'
                      }}
                    >
                      {ms.score}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
