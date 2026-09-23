import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, FileText, UserCheck, Target, Briefcase, Zap, ArrowRight, Bot } from 'lucide-react';

export const SmartMatchSection = () => {
  const { lang, theme } = useApp();
  const [activeQuestion, setActiveQuestion] = useState(0);

  const setuAiScenarios = [
    {
      question: lang === 'hi' ? 'इस अवसर के लिए मुझे क्या सुधारना चाहिए?' : 'What should I improve for this opportunity?',
      response: lang === 'hi'
        ? 'आपके वर्तमान प्रोफ़ाइल और चयनित अवसर संदर्भ के आधार पर उन्नत DSA और बैकएंड आर्किटेक्चर को प्राथमिकता दें।'
        : 'Prioritize Advanced DSA and Backend Architecture based on your current profile and selected opportunity context.',
      resumeNote: lang === 'hi'
        ? 'आपका रिज्यूमे रिएक्ट को अच्छी तरह से उजागर करता है, लेकिन आपके Git और API कौशल कम प्रदर्शित हैं।'
        : 'Your resume highlights React well, but your verified Git and API integration skills are underrepresented.'
    },
    {
      question: lang === 'hi' ? 'मेरा स्किल मैच स्कोर 94% क्यों है?' : 'Why is my skill match score 94%?',
      response: lang === 'hi'
        ? 'आपकी प्रोजेक्ट फाइलें रिएक्ट, स्टेट मैनेजमेंट और REST API में मजबूत दक्षता दर्शाती हैं।'
        : 'Your verified projects demonstrate high proficiency in React state management, component modularity, and API integration.',
      resumeNote: lang === 'hi'
        ? 'सत्यापित प्रोजेक्ट लिंक्स से रिक्रूटर का विश्वास 40% बढ़ जाता है।'
        : 'Adding verified GitHub repository links will increase your profile credibility by 40%.'
    }
  ];

  const scrollToSkills = () => {
    const el = document.querySelector('#skill-profile');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="smart-match"
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
            {lang === 'hi' ? 'करियर इंटेलिजेंस' : 'CAREER INTELLIGENCE'}
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
            {lang === 'hi' ? 'केवल आवेदन न करें। तैयारी करें।' : "Don't just apply. Prepare."}
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--muted-dark)', lineHeight: 1.68 }}>
            {lang === 'hi'
              ? 'सेतु AI आपके रिज्यूमे, प्रोफ़ाइल और लक्षित पद का विश्लेषण करके व्यक्तिगत मार्गदर्शन प्रदान करता है।'
              : 'Setu AI audits your profile, resume, and targeted job roles to provide actionable preparation insights.'}
          </p>
        </div>

        {/* Input Elements Pipeline Banner */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto 40px auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}
        >
          <div
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--pure-white)',
              border: '1px solid var(--light-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--govt-ink)',
              boxShadow: 'var(--shadow-xs)'
            }}
          >
            <FileText size={16} color="var(--saffron-primary)" />
            <span>RESUME</span>
          </div>
          <span style={{ fontWeight: 800, color: 'var(--muted-text)' }}>+</span>
          <div
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--pure-white)',
              border: '1px solid var(--light-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--govt-ink)',
              boxShadow: 'var(--shadow-xs)'
            }}
          >
            <UserCheck size={16} color="var(--deep-indigo)" />
            <span>PROFILE</span>
          </div>
          <span style={{ fontWeight: 800, color: 'var(--muted-text)' }}>+</span>
          <div
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--pure-white)',
              border: '1px solid var(--light-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--govt-ink)',
              boxShadow: 'var(--shadow-xs)'
            }}
          >
            <Target size={16} color="var(--success-green)" />
            <span>TARGET ROLE</span>
          </div>
          <span style={{ fontWeight: 800, color: 'var(--saffron-primary)' }}>➔</span>
          <div
            style={{
              padding: '8px 18px',
              borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, #F97316 0%, #312E81 100%)',
              color: '#FFFFFF',
              fontSize: '0.85rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: 'var(--shadow-saffron)'
            }}
          >
            <Bot size={16} />
            <span>SETU AI GUIDANCE</span>
          </div>
        </div>

        {/* Setu AI Interactive Preview Card */}
        <div
          className="card-glass"
          style={{
            maxWidth: '820px',
            margin: '0 auto 40px auto',
            padding: '36px',
            borderRadius: 'var(--radius-xl)'
          }}
        >
          {/* Resume Audit Insight Banner */}
          <div
            style={{
              padding: '16px 20px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--saffron-light)',
              border: '1px solid rgba(249, 115, 22, 0.25)',
              marginBottom: '28px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}
          >
            <Sparkles size={20} color="var(--saffron-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--saffron-primary)', marginBottom: '2px' }}>
                AI RESUME AUDIT FINDING
              </div>
              <p style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--govt-ink)', margin: 0 }}>
                "{setuAiScenarios[activeQuestion].resumeNote}"
              </p>
            </div>
          </div>

          {/* Interactive Prompt & AI Response Box */}
          <div
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.3)' : 'var(--warm-ivory)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              border: '1px solid var(--light-border)'
            }}
          >
            <div style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--muted-text)', marginBottom: '8px' }}>
              STUDENT QUERY
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '20px' }}>
              "{setuAiScenarios[activeQuestion].question}"
            </div>

            <div style={{ borderTop: '1px solid var(--light-border)', paddingTop: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--deep-indigo)',
                    color: '#FFFFFF',
                    fontSize: '0.7rem',
                    fontWeight: 800
                  }}
                >
                  SETU AI RESPONSE
                </span>
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--govt-ink)', lineHeight: 1.6, fontWeight: 500, margin: 0 }}>
                "{setuAiScenarios[activeQuestion].response}"
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={scrollToSkills}
            className="btn-primary"
            style={{
              padding: '14px 28px',
              fontSize: '1rem',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            <span>{lang === 'hi' ? 'करियर इंटेलिजेंस एक्सप्लोर करें →' : 'Explore Career Intelligence →'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
