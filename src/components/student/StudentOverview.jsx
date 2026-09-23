import React from 'react';
import { useApp } from '../../context/AppContext';
import { Award, TrendingUp, AlertTriangle, ArrowRight, CheckCircle2, Calendar, Sparkles, ExternalLink } from 'lucide-react';

export const StudentOverview = () => {
  const { studentProfile, opportunities, applications, lang, t, setStudentTab, setSelectedOpportunity } = useApp();

  const recommendedOpps = opportunities.slice(0, 3);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Welcome Banner */}
      <div
        style={{
          padding: '28px 32px',
          borderRadius: 'var(--radius-xl)',
          background: 'linear-gradient(135deg, #1C1B1A 0%, #312E81 100%)',
          color: 'var(--pure-white)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#FDBA74', fontWeight: 700, marginBottom: '6px' }}>
            <Sparkles size={14} /> {lang === 'hi' ? 'छात्र डैशबोर्ड' : 'VERIFIED STUDENT PROFILE'}
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--pure-white)', lineHeight: 1.2 }}>
            {lang === 'hi' ? `नमस्ते, ${studentProfile.hindiName}` : `Welcome back, ${studentProfile.name}`}
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>
            {studentProfile.degree} • {studentProfile.institute}
          </p>
        </div>

        {/* Readiness Circular Highlight */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            padding: '14px 24px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              backgroundColor: 'var(--saffron-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.3rem',
              color: 'var(--pure-white)'
            }}
          >
            {studentProfile.readinessScore}
          </div>
          <div>
            <div style={{ fontSize: '0.74rem', color: '#FDBA74', fontWeight: 700 }}>
              {t.studentDashboard.scoreTitle}
            </div>
            <div style={{ fontSize: '0.86rem', color: 'var(--pure-white)', fontWeight: 600 }}>
              Top 10% Nationwide
            </div>
          </div>
        </div>
      </div>

      {/* Career Intelligence Feature Highlight Banner */}
      <div
        style={{
          padding: '18px 24px',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--pure-white)',
          border: '1px solid rgba(232, 117, 22, 0.3)',
          boxShadow: 'var(--shadow-xs)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          background: 'linear-gradient(135deg, rgba(255, 245, 235, 0.7) 0%, #FFFFFF 100%)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: 'var(--saffron-primary)',
              color: 'var(--pure-white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Sparkles size={20} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--saffron-primary)', letterSpacing: '0.04em' }}>
                CAREER INTELLIGENCE & SETU AI
              </span>
              <span className="badge badge-indigo" style={{ fontSize: '0.68rem', padding: '1px 6px' }}>SIH Innovation</span>
            </div>
            <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--govt-ink)', marginTop: '2px' }}>
              {lang === 'hi'
                ? 'रिज़्यूमे में 3 शीर्ष सत्यापित कौशल अनुपस्थित हैं। कंपनी तैयारी का विश्लेषण करें।'
                : '3 verified skills missing in your resume. Analyze role readiness & target preparation.'}
            </div>
          </div>
        </div>

        <button
          onClick={() => setStudentTab('intelligence')}
          className="btn-primary"
          style={{ padding: '8px 18px', fontSize: '0.84rem' }}
        >
          <span>{lang === 'hi' ? 'करियर इंटेलिजेंस खोलें' : 'Open Career Intelligence'}</span>
          <ArrowRight size={14} className="btn-arrow" />
        </button>
      </div>

      {/* 3 Core Metric Stat Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px'
        }}
      >
        {/* Top Skill Strength */}
        <div
          style={{
            padding: '20px',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--pure-white)',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-xs)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <span style={{ padding: '6px', borderRadius: '8px', backgroundColor: 'var(--success-light)', color: 'var(--success-green)' }}>
              <TrendingUp size={18} />
            </span>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted-dark)' }}>
              {t.studentDashboard.topStrength}
            </span>
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
            React.js & Web Architectures
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--success-green)', fontWeight: 600, marginTop: '4px' }}>
            92% Competency • 4 Projects Verified
          </div>
        </div>

        {/* Main Skill Gap */}
        <div
          style={{
            padding: '20px',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--pure-white)',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-xs)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <span style={{ padding: '6px', borderRadius: '8px', backgroundColor: 'var(--warm-orange-light)', color: '#B45309' }}>
              <AlertTriangle size={18} />
            </span>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted-dark)' }}>
              {t.studentDashboard.mainGap}
            </span>
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
            Docker & Microservices
          </div>
          <div style={{ fontSize: '0.82rem', color: '#B45309', fontWeight: 600, marginTop: '4px' }}>
            Currently 55% • Target: 75%
          </div>
        </div>

        {/* Recommended Next Action */}
        <div
          style={{
            padding: '20px',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--saffron-light)',
            border: '1px solid rgba(232, 117, 22, 0.25)',
            boxShadow: 'var(--shadow-xs)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--saffron-primary)', marginBottom: '4px' }}>
              {t.studentDashboard.recommendedAction}
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
              Deploy containerized capstone API to cloud
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted-dark)', marginTop: '2px' }}>
              Estimated effort: 3 hours • +6 readiness points
            </div>
          </div>
          <button
            onClick={() => setStudentTab('roadmap')}
            style={{
              marginTop: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: 'var(--saffron-primary)'
            }}
          >
            <span>Start Learning Action</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Recommended Opportunities List */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
            {lang === 'hi' ? 'आपके कौशल के अनुकूल अनुशंसित अवसर' : 'Recommended Opportunities for Your Skill Profile'}
          </h3>
          <button
            onClick={() => setStudentTab('opportunities')}
            style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--saffron-primary)' }}
          >
            {lang === 'hi' ? 'सभी देखें →' : 'View All →'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {recommendedOpps.map((opp) => (
            <div
              key={opp.id}
              className="interactive-card"
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--pure-white)',
                border: '1px solid var(--light-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img
                      src={opp.companyLogo}
                      alt={opp.company}
                      style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover', border: '1px solid var(--light-border)' }}
                    />
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--muted-dark)', fontWeight: 600 }}>{opp.company}</div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--govt-ink)' }}>{opp.title}</h4>
                    </div>
                  </div>
                  <span className="badge badge-green" style={{ fontSize: '0.72rem' }}>
                    {opp.matchScore}% Match
                  </span>
                </div>

                <div style={{ fontSize: '0.84rem', color: 'var(--muted-dark)', marginBottom: '12px' }}>
                  {opp.location} • {opp.stipend}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '16px' }}>
                  {opp.skills.slice(0, 3).map((sk) => (
                    <span key={sk} style={{ fontSize: '0.72rem', padding: '2px 6px', borderRadius: '4px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedOpportunity(opp)}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', padding: '8px 12px', fontSize: '0.84rem' }}
              >
                <span>View & Apply</span>
                <ArrowRight size={14} className="btn-arrow" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Active Applications Quick Glance */}
      <div
        style={{
          padding: '24px',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--pure-white)',
          border: '1px solid var(--light-border)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
            {lang === 'hi' ? 'सक्रिय आवेदन स्थिति' : 'Active Applications Tracking'}
          </h3>
          <button
            onClick={() => setStudentTab('applications')}
            style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--saffron-primary)' }}
          >
            Pipeline View →
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {applications.map((app) => (
            <div
              key={app.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: 'var(--warm-ivory)',
                border: '1px solid var(--light-border)',
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--govt-ink)' }}>{app.role}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted-dark)' }}>{app.company} • Applied on {app.appliedDate}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="badge badge-indigo">
                  {app.stage}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--muted-dark)', fontWeight: 500 }}>
                  {app.nextAction}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
