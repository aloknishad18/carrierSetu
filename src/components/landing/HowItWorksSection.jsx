import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Compass, GitCompare, Map, FileText, Target, Users, ArrowRight, Check } from 'lucide-react';

export const HowItWorksSection = () => {
  const { lang, theme } = useApp();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const stages = [
    {
      num: '01',
      stage: 'DISCOVER',
      stageHi: 'खोजें',
      title: lang === 'hi' ? 'अपनी समझ पहचानें' : 'Understand what you already know',
      desc: lang === 'hi' ? 'अपनी मौजूदा तकनीकी दक्षताओं, प्रोजेक्ट्स और अकादमिक ज्ञान का पूरा नक्शा बनाएं।' : 'Map out your current technical competencies, projects, and academic foundations.',
      icon: Compass,
      color: '#F97316'
    },
    {
      num: '02',
      stage: 'ANALYZE',
      stageHi: 'विश्लेषण करें',
      title: lang === 'hi' ? 'कौशल अंतर पहचानें' : 'Identify the skills you need to strengthen',
      desc: lang === 'hi' ? 'उद्योग मानकों और वर्तमान जॉब मार्केट आवश्यकताओं के साथ अपनी क्षमताओं की तुलना करें।' : 'Compare your profile against real-time industry job descriptions and role benchmarks.',
      icon: GitCompare,
      color: '#6366F1'
    },
    {
      num: '03',
      stage: 'BUILD',
      stageHi: 'निर्माण करें',
      title: lang === 'hi' ? 'व्यक्तिगत करियर मार्ग' : 'Follow a personalized career roadmap',
      desc: lang === 'hi' ? 'चरण-दर-चरण माइलस्टोन और प्रोजेक्ट्स के साथ अपने लक्षित करियर तक पहुंचें।' : 'Target specific skill goals with structured milestones and practical micro-assignments.',
      icon: Map,
      color: '#0D9488'
    },
    {
      num: '04',
      stage: 'PRESENT',
      stageHi: 'प्रस्तुत करें',
      title: lang === 'hi' ? 'रिज्यूमे को प्रामाणिक बनाएं' : 'Make your resume reflect your real strengths',
      desc: lang === 'hi' ? 'केवल कीवर्ड के बजाय अपने वास्तविक सत्यापित कौशल और परियोजनाओं को प्रदर्शित करें।' : 'Transform basic keyword bullet points into verified, evidence-backed competency scores.',
      icon: FileText,
      color: '#F59E0B'
    },
    {
      num: '05',
      stage: 'PREPARE',
      stageHi: 'तैयारी करें',
      title: lang === 'hi' ? 'लक्षित अवसर की तैयारी' : 'Understand what to improve for your target role',
      desc: lang === 'hi' ? 'सेतु AI के मार्गदर्शन से विशिष्ट अवसर या कंपनी के साक्षात्कार के लिए तैयारी करें।' : 'Get Setu AI contextual feedback tailored specifically to your chosen company or position.',
      icon: Target,
      color: '#15803D'
    },
    {
      num: '06',
      stage: 'CONNECT',
      stageHi: 'जुड़ें',
      title: lang === 'hi' ? 'अवसरों से जुड़ें' : 'Discover internships and placement opportunities',
      desc: lang === 'hi' ? 'योग्यता आधारित स्मार्ट मैचिंग के माध्यम से सीधे शीर्ष नियोक्ताओं तक पहुंचें।' : 'Access verified internships and entry-level positions matched directly to your skill matrix.',
      icon: Users,
      color: '#7C3AED'
    }
  ];

  return (
    <section
      id="how-it-works"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        position: 'relative',
        transition: 'background-color 350ms ease'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px auto' }}>
          <span className="badge badge-saffron" style={{ marginBottom: '14px' }}>
            {lang === 'hi' ? 'कौशल से अवसर तक' : 'YOUR CAREER JOURNEY'}
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
            {lang === 'hi' ? 'कौशल से अवसरों तक का सफर' : 'From Skills to Opportunities.'}
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--muted-dark)', lineHeight: 1.68 }}>
            {lang === 'hi'
              ? 'एक सहज 6-चरण प्रक्रिया जो आपके ज्ञान को ठोस करियर सफलता में बदलती है।'
              : 'A continuous, end-to-end pathway that turns academic learning into verified industry opportunities.'}
          </p>
        </div>

        {/* 6 Stage Timeline Selector */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '12px',
            marginBottom: '40px'
          }}
        >
          {stages.map((stg, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={stg.num}
                onClick={() => setActiveStep(idx)}
                style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isActive ? 'var(--pure-white)' : 'transparent',
                  border: isActive ? `2px solid ${stg.color}` : '1px solid var(--light-border)',
                  boxShadow: isActive ? 'var(--shadow-md)' : 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 200ms ease'
                }}
              >
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: stg.color, marginBottom: '2px' }}>
                  STAGE {stg.num}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                  {lang === 'hi' ? stg.stageHi : stg.stage}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Card */}
        {stages[activeStep] && (
          <div
            className="card-glass"
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              padding: '36px 40px',
              borderRadius: 'var(--radius-xl)',
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: '28px',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '20px',
                backgroundColor: `${stages[activeStep].color}18`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {React.createElement(stages[activeStep].icon, {
                size: 34,
                color: stages[activeStep].color
              })}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: stages[activeStep].color,
                    letterSpacing: '0.04em'
                  }}
                >
                  STAGE {stages[activeStep].num} — {stages[activeStep].stage}
                </span>
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '8px' }}>
                {stages[activeStep].title}
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--muted-dark)', lineHeight: 1.6 }}>
                {stages[activeStep].desc}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
