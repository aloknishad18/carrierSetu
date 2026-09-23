import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { IntelligenceVisualGraph } from './IntelligenceVisualGraph';
import { ResumeIntelligenceModule } from './ResumeIntelligenceModule';
import { CompanyPreparationModule } from './CompanyPreparationModule';
import { RoleReadinessModule } from './RoleReadinessModule';
import { IntelligenceTransparencyEngine } from './IntelligenceTransparencyEngine';
import { SetuAiAssistantPanel } from './SetuAiAssistantPanel';
import {
  Sparkles,
  FileText,
  Building2,
  Compass,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';

export const CareerIntelligenceView = () => {
  const {
    lang,
    t,
    activeIntelligenceTab,
    setActiveIntelligenceTab,
    resumeReadinessScore,
    studentProfile,
    setStudentTab,
    showToast,
    isSetuAiPanelOpen
  } = useApp();

  const tr = t.careerIntelligence || {};

  // Active subtab: 'overview' | 'resume' | 'company' | 'role' | 'transparency'
  const subTabs = [
    { id: 'overview', label: lang === 'hi' ? 'करियर अवलोकन' : 'Overview & Hub', icon: Layers },
    { id: 'resume', label: tr.modules?.resumeTitle || 'Resume Intelligence', icon: FileText },
    { id: 'company', label: tr.modules?.companyTitle || 'Company Preparation', icon: Building2 },
    { id: 'role', label: tr.modules?.roleTitle || 'Role Readiness', icon: Compass },
    { id: 'transparency', label: tr.modules?.transparencyTitle || 'Connection Engine', icon: ShieldCheck }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} className="fade-in">
      
      {/* 1. Header Banner & Dynamic Connected Visual */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '24px',
          alignItems: 'stretch'
        }}
        className="ci-hero-grid"
      >
        {/* Left: Page Title & Value Proposition */}
        <div
          style={{
            padding: '32px',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--pure-white)',
            border: '1px solid var(--light-border)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: '9999px',
                backgroundColor: 'var(--saffron-light)',
                border: '1px solid rgba(232, 117, 22, 0.3)',
                fontSize: '0.76rem',
                fontWeight: 800,
                color: 'var(--saffron-primary)',
                letterSpacing: '0.04em',
                marginBottom: '14px'
              }}
            >
              <Sparkles size={14} />
              <span>{tr.eyebrow || 'CAREER INTELLIGENCE'}</span>
            </div>

            <h1
              style={{
                fontSize: '1.95rem',
                fontWeight: 800,
                color: 'var(--govt-ink)',
                lineHeight: 1.25,
                letterSpacing: '-0.02em'
              }}
            >
              {tr.mainHeading || 'Understand what to improve. Know what to prepare for.'}
            </h1>

            <p
              style={{
                fontSize: '0.94rem',
                color: 'var(--muted-dark)',
                marginTop: '12px',
                lineHeight: 1.6
              }}
            >
              {tr.supportingText ||
                'Get personalized guidance by connecting your CareerSetu skill profile, resume, target role and opportunity requirements.'}
            </p>
          </div>

          <div
            style={{
              marginTop: '20px',
              paddingTop: '16px',
              borderTop: '1px solid var(--light-border)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge badge-green" style={{ fontSize: '0.74rem' }}>
                <CheckCircle2 size={12} /> 24 Verified Skills
              </span>
              <span className="badge badge-indigo" style={{ fontSize: '0.74rem' }}>
                82/100 Career Readiness
              </span>
            </div>

            <div style={{ fontSize: '0.75rem', color: 'var(--muted-text)', fontWeight: 600 }}>
              AI Assistant: <strong style={{ color: 'var(--saffron-primary)' }}>Setu AI Ready</strong>
            </div>
          </div>
        </div>

        {/* Right: Subtle Premium Intelligence Visual Network */}
        <IntelligenceVisualGraph lang={lang} />
      </div>

      {/* 2. Top Intelligent Notification Banners */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '14px' }}>
        {/* Notification 1: Resume Gap */}
        <div
          style={{
            padding: '14px 18px',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--warm-orange-light)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ padding: '6px', borderRadius: '8px', backgroundColor: 'var(--pure-white)', color: '#B45309' }}>
              <AlertCircle size={18} />
            </span>
            <div>
              <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#92400E', textTransform: 'uppercase' }}>
                {lang === 'hi' ? 'करियर अंतर्दृष्टि' : 'CAREER INSIGHT'}
              </div>
              <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                {lang === 'hi'
                  ? 'आपका रिज़्यूमे वर्तमान में आपके 3 सबसे मजबूत सत्यापित कौशलों को नहीं दर्शाता है।'
                  : 'Your resume does not currently highlight 3 of your strongest verified skills.'}
              </div>
            </div>
          </div>

          <button
            onClick={() => setActiveIntelligenceTab('resume')}
            className="btn-secondary"
            style={{
              padding: '6px 14px',
              fontSize: '0.78rem',
              fontWeight: 700,
              backgroundColor: 'var(--pure-white)',
              color: '#92400E',
              borderColor: 'rgba(245, 158, 11, 0.4)',
              flexShrink: 0
            }}
          >
            <span>{lang === 'hi' ? 'सुझाव देखें' : 'Review Suggestions'}</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Notification 2: Preparation Update */}
        <div
          style={{
            padding: '14px 18px',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--indigo-surface)',
            border: '1px solid rgba(49, 46, 129, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ padding: '6px', borderRadius: '8px', backgroundColor: 'var(--pure-white)', color: 'var(--deep-indigo)' }}>
              <TrendingUp size={18} />
            </span>
            <div>
              <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--deep-indigo)', textTransform: 'uppercase' }}>
                {lang === 'hi' ? 'तैयारी अपडेट' : 'PREPARATION UPDATE'}
              </div>
              <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                {lang === 'hi'
                  ? 'आपने ग्राफ एल्गोरिद्म तत्परता में सुधार किया है। अगला मूल्यांकन पूरा करने पर सॉफ्टवेयर डेवलपर संरेखण बढ़ सकता है।'
                  : 'You improved your Graph Algorithms readiness. Role alignment will improve after the next assessment.'}
              </div>
            </div>
          </div>

          <button
            onClick={() => setActiveIntelligenceTab('company')}
            className="btn-secondary"
            style={{
              padding: '6px 14px',
              fontSize: '0.78rem',
              fontWeight: 700,
              backgroundColor: 'var(--pure-white)',
              color: 'var(--deep-indigo)',
              borderColor: 'rgba(49, 46, 129, 0.2)',
              flexShrink: 0
            }}
          >
            <span>{lang === 'hi' ? 'प्रगति देखें' : 'View Progress'}</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* 3. Sub-Navigation Tabs Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          borderBottom: '1px solid var(--light-border)',
          paddingBottom: '2px',
          overflowX: 'auto'
        }}
      >
        {subTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeIntelligenceTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveIntelligenceTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
                fontSize: '0.88rem',
                fontWeight: isActive ? 800 : 600,
                color: isActive ? 'var(--saffron-primary)' : 'var(--govt-ink)',
                backgroundColor: isActive ? 'var(--pure-white)' : 'transparent',
                border: '1px solid',
                borderColor: isActive ? 'var(--light-border) var(--light-border) var(--pure-white) var(--light-border)' : 'transparent',
                marginBottom: '-1px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Icon size={16} color={isActive ? 'var(--saffron-primary)' : 'var(--muted-text)'} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 4. Main Intelligence Content Area (with Hybrid Setu AI Panel on the right) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isSetuAiPanelOpen ? '1fr 340px' : '1fr',
          gap: '24px',
          alignItems: 'flex-start',
          transition: 'all var(--transition-smooth)'
        }}
        className="ci-content-layout"
      >
        {/* Left / Center Canvas */}
        <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {/* TAB 1: OVERVIEW & HUB */}
          {activeIntelligenceTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }} className="fade-in">
              
              {/* Unified Career Preparation Overview Card */}
              <div
                style={{
                  padding: '28px',
                  borderRadius: 'var(--radius-xl)',
                  backgroundColor: 'var(--pure-white)',
                  border: '1px solid var(--light-border)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '22px' }}>
                  <div>
                    <span className="badge badge-indigo" style={{ marginBottom: '6px' }}>
                      <Layers size={13} /> {tr.unifiedOverview || 'CAREER PREPARATION OVERVIEW'}
                    </span>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                      {lang === 'hi' ? 'एकीकृत करियर तैयारी मैट्रिक्स' : 'Unified Career Preparation Matrix'}
                    </h3>
                  </div>

                  <span className="badge badge-green" style={{ fontSize: '0.74rem' }}>
                    <ShieldCheck size={12} /> Live Sync with NSDC
                  </span>
                </div>

                {/* 4 Key Metric Signals Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '14px',
                    marginBottom: '24px'
                  }}
                >
                  <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted-text)', fontWeight: 700 }}>
                      {tr.verifiedSkillsLabel || 'YOUR SKILLS'}
                    </div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--deep-indigo)' }}>
                      24 <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--muted-text)' }}>Verified</span>
                    </div>
                  </div>

                  <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted-text)', fontWeight: 700 }}>
                      {tr.resumeRepresentedLabel || 'RESUME REPRESENTATION'}
                    </div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--govt-ink)' }}>
                      18 <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--muted-text)' }}>Highlighted</span>
                    </div>
                  </div>

                  <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted-text)', fontWeight: 700 }}>
                      {tr.roleAlignmentLabel || 'TARGET ROLE ALIGNMENT'}
                    </div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--saffron-primary)' }}>
                      78%
                    </div>
                  </div>

                  <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted-text)', fontWeight: 700 }}>
                      {tr.opportunityMatchLabel || 'OPPORTUNITY MATCH'}
                    </div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--success-green)' }}>
                      84%
                    </div>
                  </div>
                </div>

                {/* 4 Identified Priorities */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ padding: '12px 14px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory-alt)', border: '1px solid var(--light-border)' }}>
                    <div style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--bharat-red)' }}>1. RESUME GAP</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--govt-ink)', marginTop: '2px', fontWeight: 600 }}>
                      6 Strong Skills Not Highlighted in Resume (React, Git, APIs)
                    </div>
                  </div>

                  <div style={{ padding: '12px 14px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory-alt)', border: '1px solid var(--light-border)' }}>
                    <div style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--saffron-primary)' }}>2. PRIORITY SKILL</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--govt-ink)', marginTop: '2px', fontWeight: 600 }}>
                      Graph Algorithms & DP (Current: 78% → Target: 90%)
                    </div>
                  </div>

                  <div style={{ padding: '12px 14px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory-alt)', border: '1px solid var(--light-border)' }}>
                    <div style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--deep-indigo)' }}>3. PROJECT EVIDENCE</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--govt-ink)', marginTop: '2px', fontWeight: 600 }}>
                      E-Commerce capstone needs quantified metrics
                    </div>
                  </div>

                  <div style={{ padding: '12px 14px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory-alt)', border: '1px solid var(--light-border)' }}>
                    <div style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--success-green)' }}>4. COMPANY READINESS</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--govt-ink)', marginTop: '2px', fontWeight: 600 }}>
                      TCS & Infosys role match at 76% - 78%
                    </div>
                  </div>
                </div>

                {/* Next Best Action Callout */}
                <div
                  style={{
                    padding: '18px 22px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--saffron-light)',
                    border: '1px solid rgba(232, 117, 22, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '16px'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--saffron-primary)', letterSpacing: '0.04em' }}>
                      {tr.nextBestActionTitle || 'NEXT BEST ACTION'}
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--govt-ink)', marginTop: '2px' }}>
                      {tr.nextBestActionDesc || 'Improve your Backend Project description and complete the Graph Algorithms assessment.'}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--muted-dark)', marginTop: '2px' }}>
                      {tr.nextBestActionImpact || 'Estimated Impact: Improves your career preparation evidence (+4% readiness).'}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActiveIntelligenceTab('resume');
                      showToast(
                        lang === 'hi' ? 'रिज़्यूमे इंटेलिजेंस मॉड्यूल खुला' : 'Navigated to Resume Intelligence',
                        'info'
                      );
                    }}
                    className="btn-primary"
                    style={{ padding: '10px 22px', fontSize: '0.88rem' }}
                  >
                    <span>{tr.startNowBtn || 'Start Now'}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              {/* Three Primary Intelligence Modules Feature Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                
                {/* 1. Resume Intelligence Card */}
                <div
                  className="interactive-card"
                  style={{
                    padding: '24px',
                    borderRadius: 'var(--radius-xl)',
                    backgroundColor: 'var(--pure-white)',
                    border: '1px solid var(--light-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          backgroundColor: 'var(--saffron-light)',
                          color: 'var(--saffron-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <FileText size={22} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                          {tr.modules?.resumeTitle || 'Resume Intelligence'}
                        </h4>
                        <span style={{ fontSize: '0.74rem', color: 'var(--saffron-primary)', fontWeight: 700 }}>
                          Readiness: {resumeReadinessScore} / 100
                        </span>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.84rem', color: 'var(--muted-dark)', lineHeight: 1.5, marginBottom: '16px' }}>
                      {tr.modules?.resumeDesc || 'Understand how well your resume represents your verified skills, projects and career strengths.'}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.78rem', color: 'var(--muted-dark)', marginBottom: '18px' }}>
                      <div>• Profile Representation: <strong>85 / 100</strong></div>
                      <div>• Skill Alignment: <strong>82 / 100</strong></div>
                      <div>• Missing Strengths: <strong style={{ color: 'var(--bharat-red)' }}>6 Skills Identified</strong></div>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveIntelligenceTab('resume')}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '10px', fontSize: '0.86rem' }}
                  >
                    <span>{lang === 'hi' ? 'रिज़्यूमे विश्लेषण खोलें' : 'Analyze Resume'}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

                {/* 2. Company Preparation Card */}
                <div
                  className="interactive-card"
                  style={{
                    padding: '24px',
                    borderRadius: 'var(--radius-xl)',
                    backgroundColor: 'var(--pure-white)',
                    border: '1px solid var(--light-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          backgroundColor: 'var(--indigo-surface)',
                          color: 'var(--deep-indigo)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Building2 size={22} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                          {tr.modules?.companyTitle || 'Company Preparation'}
                        </h4>
                        <span style={{ fontSize: '0.74rem', color: 'var(--deep-indigo)', fontWeight: 700 }}>
                          Role Alignment: 76%
                        </span>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.84rem', color: 'var(--muted-dark)', lineHeight: 1.5, marginBottom: '16px' }}>
                      {tr.modules?.companyDesc || 'Understand which skills and experiences to prioritize for a company or specific opportunity.'}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.78rem', color: 'var(--muted-dark)', marginBottom: '18px' }}>
                      <div>• Available Profiles: <strong>TCS, Infosys, Microsoft, Google</strong></div>
                      <div>• Preparation Status: <strong style={{ color: 'var(--success-green)' }}>Good Foundation</strong></div>
                      <div>• Priority Gaps: <strong>DSA (90% Target), Docker (75%)</strong></div>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveIntelligenceTab('company')}
                    className="btn-indigo"
                    style={{ width: '100%', justifyContent: 'center', padding: '10px', fontSize: '0.86rem' }}
                  >
                    <span>{lang === 'hi' ? 'कंपनी आवश्यकताएं देखें' : 'Explore Company Requirements'}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

                {/* 3. Role Readiness Card */}
                <div
                  className="interactive-card"
                  style={{
                    padding: '24px',
                    borderRadius: 'var(--radius-xl)',
                    backgroundColor: 'var(--pure-white)',
                    border: '1px solid var(--light-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          backgroundColor: 'var(--success-light)',
                          color: 'var(--success-green)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Compass size={22} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                          {tr.modules?.roleTitle || 'Role Readiness'}
                        </h4>
                        <span style={{ fontSize: '0.74rem', color: 'var(--success-green)', fontWeight: 700 }}>
                          Role Match: 78%
                        </span>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.84rem', color: 'var(--muted-dark)', lineHeight: 1.5, marginBottom: '16px' }}>
                      {tr.modules?.roleDesc || 'Understand what skills you need to strengthen for your selected career path.'}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.78rem', color: 'var(--muted-dark)', marginBottom: '18px' }}>
                      <div>• Ready Competencies: <strong>4 Verified Strengths</strong></div>
                      <div>• 4-Week Roadmap: <strong>Actionable Weekly Milestones</strong></div>
                      <div>• Target Role: <strong>Software Developer (Tier-1)</strong></div>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveIntelligenceTab('role')}
                    className="btn-secondary"
                    style={{ width: '100%', justifyContent: 'center', padding: '10px', fontSize: '0.86rem' }}
                  >
                    <span>{lang === 'hi' ? 'भूमिका तत्परता विश्लेषण' : 'Analyze Role Readiness'}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

              </div>

              {/* Transparency Engine Teaser */}
              <IntelligenceTransparencyEngine lang={lang} />
            </div>
          )}

          {/* TAB 2: RESUME INTELLIGENCE */}
          {activeIntelligenceTab === 'resume' && <ResumeIntelligenceModule />}

          {/* TAB 3: COMPANY PREPARATION */}
          {activeIntelligenceTab === 'company' && <CompanyPreparationModule />}

          {/* TAB 4: ROLE READINESS */}
          {activeIntelligenceTab === 'role' && <RoleReadinessModule />}

          {/* TAB 5: TRANSPARENCY ENGINE */}
          {activeIntelligenceTab === 'transparency' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} className="fade-in">
              <IntelligenceTransparencyEngine lang={lang} />
            </div>
          )}

        </div>

        {/* Right Side: Contextual Setu AI Assistant */}
        <SetuAiAssistantPanel
          activeTab={activeIntelligenceTab}
          onSelectTab={setActiveIntelligenceTab}
        />
      </div>

      <style>{`
        @media (max-width: 960px) {
          .ci-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .ci-content-layout {
            grid-template-columns: 1fr !important;
          }
          .setu-ai-panel {
            position: fixed !important;
            bottom: 0 !important;
            right: 0 !important;
            left: 0 !important;
            top: auto !important;
            max-width: 100% !important;
            height: 70vh !important;
            z-index: 1200 !important;
            border-radius: 20px 20px 0 0 !important;
            box-shadow: var(--shadow-xl) !important;
          }
        }
      `}</style>
    </div>
  );
};
