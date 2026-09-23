import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Compass } from 'lucide-react';

export const ScrollNarrativeTracker = () => {
  const { lang, theme } = useApp();
  const [activeStep, setActiveStep] = useState(0);

  const storySteps = [
    { id: 'hero', number: '01', title: lang === 'hi' ? 'छात्र से मिलें' : 'MEET THE STUDENT' },
    { id: 'skill-profile', number: '02', title: lang === 'hi' ? 'कौशल समझें' : 'UNDERSTAND SKILLS' },
    { id: 'skill-gap', number: '03', title: lang === 'hi' ? 'अंतर पहचानें' : 'IDENTIFY SKILL GAP' },
    { id: 'roadmap', number: '04', title: lang === 'hi' ? 'करियर रोडमैप' : 'CAREER ROADMAP' },
    { id: 'smart-match', number: '05', title: lang === 'hi' ? 'रिज्यूमे इंटेलिजेंस' : 'RESUME AUDIT' },
    { id: 'how-it-works', number: '06', title: lang === 'hi' ? 'उद्योग की तैयारी' : 'PREPARE FOR INDUSTRY' },
    { id: 'opportunities', number: '07', title: lang === 'hi' ? 'अवसर खोजें' : 'DISCOVER OPPORTUNITIES' },
    { id: 'collaboration', number: '08', title: lang === 'hi' ? 'उद्योग से जुड़ें' : 'CONNECT WITH INDUSTRY' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      storySteps.forEach((step, idx) => {
        const el = document.getElementById(step.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveStep(idx);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 800,
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 14px',
        borderRadius: 'var(--radius-full)',
        backgroundColor: theme === 'dark' ? 'rgba(23, 23, 26, 0.92)' : 'rgba(255, 255, 255, 0.94)',
        border: '1px solid var(--light-border)',
        boxShadow: 'var(--shadow-lg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
      className="narrative-pill desktop-only"
    >
      <Compass size={16} color="var(--saffron-primary)" />
      
      <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--saffron-primary)', marginRight: '6px' }}>
        CAREER JOURNEY
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {storySteps.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={step.id}
              onClick={() => scrollToSection(step.id)}
              title={`${step.number} ${step.title}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: isActive ? '4px 10px' : '4px 6px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: isActive ? 'var(--saffron-primary)' : 'transparent',
                color: isActive ? '#FFFFFF' : 'var(--muted-text)',
                fontSize: '0.72rem',
                fontWeight: isActive ? 800 : 600,
                cursor: 'pointer',
                transition: 'all 200ms ease',
                border: 'none'
              }}
            >
              <span>{step.number}</span>
              {isActive && (
                <span style={{ whiteSpace: 'nowrap', fontSize: '0.7rem' }}>
                  {step.title}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
