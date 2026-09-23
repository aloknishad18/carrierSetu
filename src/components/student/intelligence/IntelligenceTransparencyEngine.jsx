import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Award,
  CheckCircle2,
  FileText,
  Target,
  Briefcase,
  GitCompare,
  Sparkles,
  ArrowDown
} from 'lucide-react';

export const IntelligenceTransparencyEngine = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    {
      step: 1,
      name: lang === 'hi' ? 'छात्र कौशल प्रोफ़ाइल' : 'Student Skill Profile',
      desc: lang === 'hi' ? 'एनपीटीईएल, कॉलेज अंक एवं सत्यापित शैक्षणिक पाठ्यक्रम' : 'Self-assessment, academic coursework & verified institutional history',
      icon: Award,
      badge: 'PROFILE-BASED'
    },
    {
      step: 2,
      name: lang === 'hi' ? 'कौशल मूल्यांकन परिणाम' : 'Assessment Results',
      desc: lang === 'hi' ? 'मानकीकृत तकनीकी कोडिंग एवं समस्या समाधान परीक्षण' : 'Algorithmic problem solving & standardized national skill tests',
      icon: CheckCircle2,
      badge: 'VERIFIED EVIDENCE'
    },
    {
      step: 3,
      name: lang === 'hi' ? 'सत्यापित प्रोजेक्ट्स एवं साक्ष्य' : 'Verified Projects and Evidence',
      desc: lang === 'hi' ? 'गिटहब रिपॉजिटरी, कोड गुणवत्ता एवं हैकाथॉन उपलब्धियां' : 'GitHub commits, live demo deployments, hackathon project awards',
      icon: FileText,
      badge: 'PRACTICAL PROOF'
    },
    {
      step: 4,
      name: lang === 'hi' ? 'लक्ष्य करियर भूमिका' : 'Target Role Framework',
      desc: lang === 'hi' ? 'राष्ट्रीय व्यावसायिक मानक (NOS) एवं उद्योग योग्यता रूपरेखा' : 'National Occupational Standards (NOS) & engineering benchmarks',
      icon: Target,
      badge: 'ROLE-BASED'
    },
    {
      step: 5,
      name: lang === 'hi' ? 'रिज़्यूमे प्रस्तुति विश्लेषण' : 'Resume Representation',
      desc: lang === 'hi' ? 'रिज़्यूमे पाठ संरचना, कौशल उल्लेख एवं प्रोजेक्ट विवरण प्रभाव' : 'Structural parsing of uploaded PDF/DOCX against verified competencies',
      icon: FileText,
      badge: 'RESUME AUDIT'
    },
    {
      step: 6,
      name: lang === 'hi' ? 'अवसर एवं कंपनी आवश्यकताएं' : 'Opportunity / Requirement Context',
      desc: lang === 'hi' ? 'सत्यापित कंपनी जेडी, इंटर्नशिप पात्रता एवं नियोक्ता मानदंड' : 'Live recruiter listings or demonstration competency profiles',
      icon: Briefcase,
      badge: 'OPPORTUNITY-BASED'
    },
    {
      step: 7,
      name: lang === 'hi' ? 'प्राथमिकता कौशल अंतर' : 'Priority Skill Gaps',
      desc: lang === 'hi' ? 'तैयारी लक्ष्य (उदा. 90%) बनाम वर्तमान क्षमता का तुलनात्मक अंतर' : 'Calculates delta between verified capability and target readiness',
      icon: GitCompare,
      badge: 'ANALYTICAL GAP'
    },
    {
      step: 8,
      name: lang === 'hi' ? 'व्यक्तिगत करियर मार्गदर्शन' : 'Personalized Guidance',
      desc: lang === 'hi' ? 'कार्रवाई योग्य अध्ययन योजना, रिज़्यूमे सुधार सुझाव एवं अगला कदम' : 'Actionable milestones, phrasing suggestions, and roadmap milestones',
      icon: Sparkles,
      badge: 'ACTIONABLE PLAN'
    }
  ];

  return (
    <div
      style={{
        borderRadius: 'var(--radius-xl)',
        backgroundColor: 'var(--pure-white)',
        border: '1px solid var(--light-border)',
        boxShadow: 'var(--shadow-xs)',
        overflow: 'hidden'
      }}
    >
      {/* Clickable Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: isOpen ? 'var(--warm-ivory)' : 'var(--pure-white)',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'background-color var(--transition-fast)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: 'var(--indigo-surface)',
              color: 'var(--deep-indigo)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ShieldCheck size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--deep-indigo)' }}>
              {lang === 'hi' ? 'पारदर्शिता एवं नैतिक एआई सिद्धांत' : 'TRANSPARENCY & DATA CONFIDENCE'}
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--govt-ink)', marginTop: '2px' }}>
              {lang === 'hi' ? 'करियरसेतु यह मार्गदर्शन कैसे तैयार करता है' : 'HOW CAREERSETU GENERATES THIS GUIDANCE'}
            </h4>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--muted-dark)', fontSize: '0.82rem', fontWeight: 600 }}>
          <span>{isOpen ? (lang === 'hi' ? 'संक्षिप्त करें' : 'Hide details') : (lang === 'hi' ? 'पूरी प्रक्रिया देखें' : 'View 8-step pipeline')}</span>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {/* Expandable Content */}
      {isOpen && (
        <div style={{ padding: '24px', borderTop: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)' }} className="fade-in">
          <p style={{ fontSize: '0.88rem', color: 'var(--muted-dark)', lineHeight: 1.5, marginBottom: '20px' }}>
            {lang === 'hi'
              ? 'करियरसेतु किसी गुप्त एल्गोरिदम या बंद प्रणाली पर निर्भर नहीं है। हमारा मार्गदर्शन आठ परस्पर जुड़े डेटा स्रोतों पर आधारित है जो छात्र की वास्तविक क्षमताओं को उद्योग मानकों से जोड़ते हैं।'
              : 'CareerSetu does not rely on opaque AI models or confidential hiring cutoffs. All recommendations are synthesized through an open, multi-layer framework connecting verified student capabilities with public industry benchmarks.'}
          </p>

          {/* 8-Step Pipeline */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '24px' }}>
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  style={{
                    padding: '14px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--warm-ivory)',
                    border: '1px solid var(--light-border)',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--deep-indigo)',
                          color: 'var(--pure-white)',
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {s.step}
                      </span>
                      <Icon size={14} color="var(--deep-indigo)" />
                    </div>
                    <span className="badge" style={{ fontSize: '0.65rem', backgroundColor: 'var(--warm-ivory-alt)', color: 'var(--muted-dark)' }}>
                      {s.badge}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--govt-ink)' }}>{s.name}</div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted-dark)', marginTop: '4px', lineHeight: 1.4 }}>
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Plain Language Ethical Disclaimer */}
          <div
            style={{
              padding: '14px 18px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--warm-orange-light)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              fontSize: '0.82rem',
              color: '#92400E',
              lineHeight: 1.5
            }}
          >
            <strong>{lang === 'hi' ? 'महत्वपूर्ण अस्वीकरण (Disclaimer):' : 'Important Guidance Disclaimer:'}</strong>{' '}
            {lang === 'hi'
              ? 'स्मार्ट सिफारिशें आपके करियर नियोजन का समर्थन करती हैं। इन्हें मार्गदर्शन के रूप में उपयोग किया जाना चाहिए और विशिष्ट अवसरों और नियोक्ता की अपेक्षाओं के आधार पर भिन्न हो सकती हैं। करियरसेतु चयन या साक्षात्कार की गारंटी नहीं देता।'
              : 'Smart recommendations support your career planning. They should be used as guidance and may vary depending on specific opportunities and employer expectations. CareerSetu does not guarantee job selection or interview placement.'}
          </div>
        </div>
      )}
    </div>
  );
};
