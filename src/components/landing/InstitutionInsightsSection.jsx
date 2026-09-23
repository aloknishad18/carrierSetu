import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Compass, FileText, Bot, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export const InstitutionInsightsSection = () => {
  const { lang, theme } = useApp();
  const [hoveredTile, setHoveredTile] = useState(null);

  const featureTiles = [
    {
      id: 'skill-mapping',
      title: lang === 'hi' ? 'कौशल मैपिंग' : 'SKILL MAPPING',
      desc: lang === 'hi' ? 'वास्तविक परियोजनाओं और स्व-मूल्यांकन का गहन सत्यापन।' : 'Holistic skill matrix verified from course performance and project builds.',
      icon: Compass,
      color: '#F97316',
      preview: 'React: 88% | Python: 82% | Git: 91%'
    },
    {
      id: 'resume-intel',
      title: lang === 'hi' ? 'रिज्यूमे इंटेलिजेंस' : 'RESUME INTELLIGENCE',
      desc: lang === 'hi' ? 'स्मार्ट AI ऑडिट जो आपकी वास्तविक क्षमताओं को उजागर करता है।' : 'Setu AI resume audit discovering missing key technical project proof points.',
      icon: FileText,
      color: '#6366F1',
      preview: 'Audit Score: 86/100 • 2 High-impact suggestions'
    },
    {
      id: 'company-prep',
      title: lang === 'hi' ? 'कंपनी की तैयारी' : 'COMPANY PREPARATION',
      desc: lang === 'hi' ? 'लक्षित अवसरों के लिए व्यक्तिगत AI अध्ययन सलाह।' : 'Custom Setu AI study modules tailored to selected target job descriptions.',
      icon: Bot,
      color: '#0D9488',
      preview: 'Recommended: Advanced DSA + Backend Architecture'
    },
    {
      id: 'opportunity-match',
      title: lang === 'hi' ? 'अवसर मिलान' : 'OPPORTUNITY MATCHING',
      desc: lang === 'hi' ? 'बिना रिजिड कटऑफ के सीधा मैचिंग इंजन।' : 'Direct skill-to-job matching engine connecting verified competencies.',
      icon: Zap,
      color: '#22C55E',
      preview: 'Matched: Software Developer Intern (94% Match)'
    }
  ];

  return (
    <section
      id="feature-playground"
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
            {lang === 'hi' ? 'प्लेटफ़ॉर्म प्लेग्राउंड' : 'INTERACTIVE PLATFORM TILES'}
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
            {lang === 'hi' ? 'मुख्य विशेषताओं को एक्सप्लोर करें।' : 'Discover CareerSetu Core Features.'}
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--muted-dark)', lineHeight: 1.68 }}>
            {lang === 'hi'
              ? 'प्रत्येक कार्ड पर होवर करें और देखें कि कैसे कैरियर सेतु आपकी यात्रा को सशक्त बनाता है।'
              : 'Hover over each feature card to explore live preview insights.'}
          </p>
        </div>

        {/* 4 Interactive Feature Tiles */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {featureTiles.map((tile) => {
            const isHovered = hoveredTile === tile.id;
            return (
              <div
                key={tile.id}
                onMouseEnter={() => setHoveredTile(tile.id)}
                onMouseLeave={() => setHoveredTile(null)}
                className="card-glass"
                style={{
                  padding: '32px 28px',
                  borderRadius: 'var(--radius-xl)',
                  cursor: 'pointer',
                  transform: isHovered ? 'translateY(-6px) scale(1.02)' : 'none',
                  borderColor: isHovered ? tile.color : 'var(--light-border)',
                  boxShadow: isHovered ? `0 14px 30px ${tile.color}25` : 'var(--shadow-sm)',
                  transition: 'all 250ms ease'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    backgroundColor: `${tile.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  {React.createElement(tile.icon, { size: 26, color: tile.color })}
                </div>

                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: tile.color,
                    marginBottom: '6px',
                    letterSpacing: '0.04em'
                  }}
                >
                  {tile.title}
                </div>

                <p style={{ fontSize: '0.96rem', color: 'var(--muted-dark)', lineHeight: 1.55, marginBottom: '20px' }}>
                  {tile.desc}
                </p>

                {/* Live Interactive Preview Box on Hover */}
                <div
                  style={{
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: isHovered ? `${tile.color}12` : 'var(--warm-ivory)',
                    border: `1px solid ${isHovered ? tile.color : 'var(--light-border)'}`,
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    color: isHovered ? tile.color : 'var(--govt-ink)',
                    transition: 'all 200ms ease'
                  }}
                >
                  <div style={{ fontSize: '0.7rem', opacity: 0.8, textTransform: 'uppercase', marginBottom: '2px' }}>
                    Live Preview
                  </div>
                  {tile.preview}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
