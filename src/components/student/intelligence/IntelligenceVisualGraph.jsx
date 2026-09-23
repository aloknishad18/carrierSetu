import React from 'react';
import { User, Award, FileText, Target, Sparkles, GitCompare, Building2, CheckCircle2 } from 'lucide-react';

export const IntelligenceVisualGraph = ({ lang }) => {
  return (
    <div
      style={{
        position: 'relative',
        padding: '20px 24px',
        borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(145deg, #1E1B4B 0%, #312E81 55%, #1C1B1A 100%)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: 'var(--shadow-lg)',
        color: 'var(--pure-white)',
        minHeight: '260px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient glow circles */}
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232, 117, 22, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30px',
          left: '10px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      {/* SVG Connecting Lines with animated dashes */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      >
        <defs>
          <linearGradient id="lineGradSaffron" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E87516" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="lineGradIndigo" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#E87516" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Top Node to Middle 3 */}
        <line x1="50%" y1="36" x2="20%" y2="82" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="3 3" className="animated-dash-line" />
        <line x1="50%" y1="36" x2="50%" y2="82" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <line x1="50%" y1="36" x2="80%" y2="82" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="3 3" className="animated-dash-line" />

        {/* Middle 3 to Central Setu AI Hub */}
        <line x1="20%" y1="112" x2="50%" y2="148" stroke="url(#lineGradIndigo)" strokeWidth="1.5" />
        <line x1="50%" y1="112" x2="50%" y2="148" stroke="url(#lineGradSaffron)" strokeWidth="2" />
        <line x1="80%" y1="112" x2="50%" y2="148" stroke="url(#lineGradIndigo)" strokeWidth="1.5" />

        {/* Central Setu AI Hub to Bottom 3 */}
        <line x1="50%" y1="176" x2="20%" y2="216" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 4" className="animated-dash-line" />
        <line x1="50%" y1="176" x2="50%" y2="216" stroke="rgba(232, 117, 22, 0.7)" strokeWidth="1.5" />
        <line x1="50%" y1="176" x2="80%" y2="216" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 4" className="animated-dash-line" />
      </svg>

      {/* Layer 1: Student Profile */}
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(8px)',
            padding: '5px 14px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.04em'
          }}
        >
          <User size={13} color="#FDBA74" />
          <span>{lang === 'hi' ? 'छात्र प्रोफ़ाइल (आरव शर्मा)' : 'STUDENT PROFILE (AARAV)'}</span>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--success-green)' }} />
        </div>
      </div>

      {/* Layer 2: Skills | Resume | Target Role */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '8px',
          marginTop: '12px',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(6px)',
            borderRadius: '10px',
            padding: '7px 10px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2px' }}>
            <Award size={14} color="#FDBA74" />
          </div>
          <div style={{ fontSize: '0.7rem', fontWeight: 700 }}>{lang === 'hi' ? 'सत्यापित कौशल' : 'VERIFIED SKILLS'}</div>
          <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)' }}>24 Verified</div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(6px)',
            borderRadius: '10px',
            padding: '7px 10px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2px' }}>
            <FileText size={14} color="#93C5FD" />
          </div>
          <div style={{ fontSize: '0.7rem', fontWeight: 700 }}>{lang === 'hi' ? 'रिज़्यूमे साक्ष्य' : 'RESUME EVIDENCE'}</div>
          <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)' }}>18 Present</div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(6px)',
            borderRadius: '10px',
            padding: '7px 10px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2px' }}>
            <Target size={14} color="#FCA5A5" />
          </div>
          <div style={{ fontSize: '0.7rem', fontWeight: 700 }}>{lang === 'hi' ? 'लक्ष्य भूमिका' : 'TARGET ROLE'}</div>
          <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)' }}>Software Dev</div>
        </div>
      </div>

      {/* Layer 3: Central Setu AI Hub */}
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 3, margin: '8px 0' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'var(--saffron-primary)',
            boxShadow: '0 0 20px rgba(232, 117, 22, 0.55)',
            padding: '6px 16px',
            borderRadius: '9999px',
            border: '2px solid rgba(255, 255, 255, 0.85)',
            fontSize: '0.78rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            animation: 'pulseGlow 3s infinite'
          }}
        >
          <Sparkles size={14} color="#FFF" />
          <span>SETU AI INTELLIGENCE</span>
        </div>
      </div>

      {/* Layer 4: Skill Gaps | Resume Insights | Company Prep */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '8px',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(6px)',
            borderRadius: '10px',
            padding: '6px 8px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2px' }}>
            <GitCompare size={13} color="#FDBA74" />
          </div>
          <div style={{ fontSize: '0.68rem', fontWeight: 700 }}>{lang === 'hi' ? 'कौशल अंतर' : 'SKILL GAPS'}</div>
          <div style={{ fontSize: '0.62rem', color: '#FDBA74' }}>Target: 90%</div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(6px)',
            borderRadius: '10px',
            padding: '6px 8px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2px' }}>
            <Sparkles size={13} color="#93C5FD" />
          </div>
          <div style={{ fontSize: '0.68rem', fontWeight: 700 }}>{lang === 'hi' ? 'रिज़्यूमे अंतर्दृष्टि' : 'RESUME INSIGHTS'}</div>
          <div style={{ fontSize: '0.62rem', color: '#93C5FD' }}>78 / 100</div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(6px)',
            borderRadius: '10px',
            padding: '6px 8px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2px' }}>
            <Building2 size={13} color="#86EFAC" />
          </div>
          <div style={{ fontSize: '0.68rem', fontWeight: 700 }}>{lang === 'hi' ? 'कंपनी तैयारी' : 'COMPANY PREP'}</div>
          <div style={{ fontSize: '0.62rem', color: '#86EFAC' }}>76% Alignment</div>
        </div>
      </div>
    </div>
  );
};
