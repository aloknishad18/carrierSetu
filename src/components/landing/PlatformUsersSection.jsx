import React from 'react';
import { useApp } from '../../context/AppContext';
import { Compass, Target, Map, Sparkles, ArrowRight } from 'lucide-react';

export const PlatformUsersSection = () => {
  const { lang, theme } = useApp();

  const studentActions = [
    {
      num: '01',
      title: lang === 'hi' ? 'अपने कौशल को जानें' : 'Know Your Skills',
      desc: lang === 'hi' ? 'केवल अपनी डिग्री पर निर्भर रहने के बजाय अपनी वास्तविक क्षमताओं का सत्यापन करें।' : 'Understand what skills you already have verified through practical self-assessments and projects.',
      icon: Compass,
      color: '#F97316'
    },
    {
      num: '02',
      title: lang === 'hi' ? 'अपनी कमियों को खोजें' : 'Find Your Gaps',
      desc: lang === 'hi' ? 'जानें कि आपके लक्षित पद के लिए कौन से तकनीकी या सॉफ्ट कौशल बाकी हैं।' : 'Identify the exact skills standing between your current profile and your dream role.',
      icon: Target,
      color: '#6366F1'
    },
    {
      num: '03',
      title: lang === 'hi' ? 'अपना रोडमैप बनाएं' : 'Build Your Roadmap',
      desc: lang === 'hi' ? 'स्पष्ट मील के पत्थरों और छोटे प्रोजेक्ट्स के साथ अपने कौशल में सुधार करें।' : 'Follow a personalized step-by-step learning guide customized to your target role.',
      icon: Map,
      color: '#0D9488'
    },
    {
      num: '04',
      title: lang === 'hi' ? 'अवसरों के लिए तैयार हों' : 'Prepare for Opportunities',
      desc: lang === 'hi' ? 'सेतु AI सहायता के साथ साक्षात्कार और रिज्यूमे की तैयारी करें।' : 'Get Setu AI feedback to tailor your resume and prepare for company interviews.',
      icon: Sparkles,
      color: '#15803D'
    }
  ];

  return (
    <section
      id="for-students"
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
            {lang === 'hi' ? 'छात्रों के लिए' : 'FOR STUDENTS'}
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
              fontWeight: 800,
              color: 'var(--govt-ink)',
              marginBottom: '16px',
              lineHeight: 1.18
            }}
          >
            {lang === 'hi'
              ? 'आपके अगले अवसर की तैयारी के लिए सब कुछ एक जगह।'
              : 'Everything you need to prepare for your next opportunity.'}
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--muted-dark)', lineHeight: 1.65 }}>
            {lang === 'hi'
              ? 'CareerSetu जटिल प्रक्रियाओं को सरल बनाता है ताकि आप अपने लक्ष्यों पर ध्यान केंद्रित कर सकें।'
              : 'CareerSetu simplifies your career path with clear, actionable steps tailored to your personal goals.'}
          </p>
        </div>

        {/* 4 Action Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {studentActions.map((act) => (
            <div
              key={act.num}
              className="card-glass"
              style={{
                padding: '32px 28px',
                borderRadius: 'var(--radius-xl)',
                position: 'relative'
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: `${act.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                {React.createElement(act.icon, { size: 28, color: act.color })}
              </div>

              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  color: act.color,
                  marginBottom: '6px',
                  letterSpacing: '0.04em'
                }}
              >
                ACTION {act.num}
              </div>

              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 800,
                  color: 'var(--govt-ink)',
                  marginBottom: '12px'
                }}
              >
                {act.title}
              </h3>

              <p
                style={{
                  fontSize: '0.96rem',
                  color: 'var(--muted-dark)',
                  lineHeight: 1.6
                }}
              >
                {act.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
