import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FinalCtaSection = () => {
  const { lang, theme } = useApp();

  const scrollToSkills = () => {
    const el = document.querySelector('#smart-match');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="final-cta"
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-color 350ms ease'
      }}
    >
      {/* Background Ambient Glow Container */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: theme === 'dark'
            ? 'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.15) 0%, rgba(99, 102, 241, 0.1) 40%, rgba(11, 11, 13, 0.95) 80%)'
            : 'radial-gradient(circle at 50% 50%, rgba(232, 117, 22, 0.08) 0%, rgba(49, 46, 129, 0.04) 50%, transparent 80%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="card-glass"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '64px 48px',
            borderRadius: 'var(--radius-xl)',
            textAlign: 'center',
            boxShadow: 'var(--shadow-xl)',
            position: 'relative'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--saffron-light)',
              color: 'var(--saffron-primary)',
              fontSize: '0.82rem',
              fontWeight: 800,
              marginBottom: '20px'
            }}
          >
            <Sparkles size={16} />
            <span>SIH26044 • CAREERSETU</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)',
              fontWeight: 800,
              color: 'var(--govt-ink)',
              marginBottom: '20px',
              lineHeight: 1.15,
              letterSpacing: '-0.02em'
            }}
          >
            {lang === 'hi'
              ? 'आपका अगला अवसर आपके कौशल को समझने से शुरू होता है।'
              : 'Your next opportunity starts with understanding your skills.'}
          </h2>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--muted-dark)',
              maxWidth: '680px',
              margin: '0 auto 36px auto',
              lineHeight: 1.6
            }}
          >
            {lang === 'hi'
              ? 'अपनी प्रोफ़ाइल बनाएं। अपनी कमियों को समझें। अधिक समझदारी से तैयारी करें। अवसरों से जुड़ें।'
              : 'Build your profile. Understand your gaps. Prepare smarter. Connect with opportunity.'}
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px'
            }}
          >
            <Link
              to="/register"
              className="btn-primary"
              style={{
                padding: '16px 32px',
                fontSize: '1.05rem',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-saffron)',
                textDecoration: 'none'
              }}
            >
              <span>{lang === 'hi' ? 'शुरू करें →' : 'Get Started →'}</span>
            </Link>

            <button
              onClick={scrollToSkills}
              style={{
                padding: '16px 28px',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--light-border)',
                backgroundColor: 'var(--pure-white)',
                color: 'var(--govt-ink)',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-xs)'
              }}
            >
              <span>{lang === 'hi' ? 'करियर इंटेलिजेंस एक्सप्लोर करें' : 'Explore Career Intelligence'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
