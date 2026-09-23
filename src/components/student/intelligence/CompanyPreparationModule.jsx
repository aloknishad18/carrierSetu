import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { companiesPreparationData } from '../../../mockData';
import {
  Building2,
  Search,
  Target,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  BookmarkPlus,
  HelpCircle,
  Briefcase
} from 'lucide-react';

export const CompanyPreparationModule = () => {
  const { lang, t, intelligenceTarget, setStudentTab, showToast, setIsSetuAiPanelOpen } = useApp();

  const tr = t.careerIntelligence?.company || {};

  // Company and Search States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompanyId, setSelectedCompanyId] = useState(() => {
    if (intelligenceTarget && intelligenceTarget.companyId) return intelligenceTarget.companyId;
    return 'tcs';
  });
  const [selectedRoleId, setSelectedRoleId] = useState(() => {
    if (intelligenceTarget && intelligenceTarget.roleId) return intelligenceTarget.roleId;
    return 'software-dev';
  });
  const [expandedSkill, setExpandedSkill] = useState('Advanced Data Structures & Algorithms');

  // Filter companies
  const filteredCompanies = companiesPreparationData.filter((comp) => {
    const q = searchTerm.toLowerCase();
    return (
      comp.name.toLowerCase().includes(q) ||
      comp.shortName.toLowerCase().includes(q) ||
      comp.industry.toLowerCase().includes(q)
    );
  });

  const activeCompany = companiesPreparationData.find((c) => c.id === selectedCompanyId) || companiesPreparationData[0];
  const activeRole = activeCompany.roles.find((r) => r.id === selectedRoleId) || activeCompany.roles[0];

  const handleActionClick = (actionName, skillName) => {
    if (actionName === 'Add to Roadmap') {
      showToast(
        lang === 'hi' ? `${skillName} आपके करियर मार्गदर्शन में जोड़ा गया!` : `${skillName} added to your Career Roadmap!`,
        'success'
      );
    } else {
      showToast(
        lang === 'hi' ? `${skillName} के लिए अध्ययन योजना प्रारंभ हुई` : `Learning pathway launched for ${skillName}`,
        'info'
      );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }} className="fade-in">
      
      {/* 1. Header & Trust Notice */}
      <div
        style={{
          padding: '28px',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--pure-white)',
          border: '1px solid var(--light-border)',
          boxShadow: 'var(--shadow-xs)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
          <div>
            <span className="badge badge-indigo" style={{ marginBottom: '6px' }}>
              <Building2 size={13} /> {lang === 'hi' ? 'कंपनी एवं अवसर तैयारी' : 'COMPANY & OPPORTUNITY INTELLIGENCE'}
            </span>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {tr.heading || 'Prepare for a Company or Opportunity'}
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted-dark)', marginTop: '4px', maxWidth: '780px' }}>
              {tr.sub || 'Understand which skills and experiences you should prioritize based on your CareerSetu profile and the selected role or opportunity.'}
            </p>
          </div>

          <span className="badge badge-saffron" style={{ fontSize: '0.74rem' }}>
            <ShieldCheck size={12} /> {activeCompany.requirementSource}
          </span>
        </div>

        {/* Ethical Transparency Banner */}
        <div
          style={{
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--indigo-surface)',
            border: '1px solid rgba(49, 46, 129, 0.15)',
            fontSize: '0.8rem',
            color: 'var(--deep-indigo)',
            lineHeight: 1.5,
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <HelpCircle size={18} style={{ flexShrink: 0 }} />
          <span>
            <strong>{lang === 'hi' ? 'पारदर्शिता नीति:' : 'Trust & Accuracy Notice:'}</strong>{' '}
            {tr.trustNotice || 'CareerSetu provides preparation guidance using available opportunity requirements, role descriptions, employer-provided competency data where available, and the student’s CareerSetu skill profile.'}
          </span>
        </div>
      </div>

      {/* 2. Company Search & Quick Selector */}
      <div
        style={{
          padding: '24px',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--pure-white)',
          border: '1px solid var(--light-border)',
          boxShadow: 'var(--shadow-xs)'
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
            {tr.searchHeading || 'Which company or opportunity are you preparing for?'}
          </h3>
        </div>

        {/* Search Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 16px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--warm-ivory)',
            border: '1px solid var(--light-border)',
            marginBottom: '16px'
          }}
        >
          <Search size={18} color="var(--muted-text)" />
          <input
            type="text"
            placeholder={tr.searchPlaceholder || 'Search company (e.g. TCS, Infosys, Microsoft, Google, Accenture, Razorpay)...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              border: 'none',
              background: 'transparent',
              outline: 'none',
              width: '100%',
              fontSize: '0.9rem',
              fontFamily: 'inherit',
              color: 'var(--govt-ink)'
            }}
          />
        </div>

        {/* Company Cards Horizontal / Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
          {filteredCompanies.map((c) => {
            const isSelected = c.id === selectedCompanyId;
            return (
              <div
                key={c.id}
                onClick={() => {
                  setSelectedCompanyId(c.id);
                  if (c.roles && c.roles.length > 0) {
                    setSelectedRoleId(c.roles[0].id);
                  }
                }}
                className="interactive-card"
                style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isSelected ? 'var(--warm-ivory-alt)' : 'var(--pure-white)',
                  border: isSelected ? '2px solid var(--saffron-primary)' : '1px solid var(--light-border)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: isSelected ? 'var(--shadow-saffron)' : 'var(--shadow-xs)'
                }}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  style={{ width: '38px', height: '38px', borderRadius: '8px', objectFit: 'cover', border: '1px solid var(--light-border)' }}
                />
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--govt-ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {c.shortName}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted-text)' }}>
                    {c.opportunitiesCount} opportunities
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Role Picker for Selected Company */}
        <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--light-border)', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
            {tr.selectRoleHeading || 'Select Target Role'}:
          </span>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {activeCompany.roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedRoleId(r.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: selectedRoleId === r.id ? 700 : 500,
                  backgroundColor: selectedRoleId === r.id ? 'var(--saffron-primary)' : 'var(--warm-ivory)',
                  color: selectedRoleId === r.id ? 'var(--pure-white)' : 'var(--govt-ink)',
                  border: `1px solid ${selectedRoleId === r.id ? 'var(--saffron-primary)' : 'var(--light-border)'}`
                }}
              >
                {lang === 'hi' && r.titleHi ? r.titleHi : r.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Company Preparation Analysis Dashboard */}
      <div
        style={{
          padding: '28px',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--pure-white)',
          border: '1px solid var(--light-border)',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="badge badge-saffron" style={{ fontSize: '0.72rem' }}>
                {activeCompany.name}
              </span>
              <span className="badge badge-indigo" style={{ fontSize: '0.72rem' }}>
                {activeRole.title}
              </span>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {activeCompany.shortName} • {lang === 'hi' ? 'तैयारी विश्लेषण' : 'Preparation Alignment'}
            </h3>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted-text)', marginTop: '4px' }}>
              <span className="badge" style={{ backgroundColor: 'var(--warm-ivory-alt)', color: 'var(--muted-dark)', padding: '2px 8px' }}>
                {activeCompany.requirementSource}
              </span>
            </div>
          </div>

          {/* Dual Score Highlight: Career Readiness vs Role Alignment */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div
              style={{
                padding: '12px 20px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--warm-ivory)',
                border: '1px solid var(--light-border)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--muted-text)' }}>
                {lang === 'hi' ? 'करियर तैयारी' : 'Career Readiness'}
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--govt-ink)' }}>
                {activeRole.readinessScore} <span style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>/ 100</span>
              </div>
            </div>

            <div
              style={{
                padding: '12px 20px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--indigo-surface)',
                border: '1px solid rgba(49, 46, 129, 0.15)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--deep-indigo)' }}>
                {lang === 'hi' ? 'भूमिका संरेखण' : 'Role Alignment'}
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--deep-indigo)' }}>
                {activeRole.alignmentScore}%
              </div>
            </div>
          </div>
        </div>

        {/* Preparation Status Banner */}
        <div
          style={{
            padding: '14px 18px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--success-light)',
            border: '1px solid rgba(21, 128, 61, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '24px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={18} color="var(--success-green)" />
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F6830' }}>
                {tr.prepStatusGood || 'Good Foundation'}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#166534' }}>
                {tr.prepStatusRec || 'Priority improvements recommended to bridge the 14% target gap.'}
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setIsSetuAiPanelOpen(true);
              showToast(
                lang === 'hi' ? 'सेतु एआई कंपनी तैयारी सहायक खुला' : 'Setu AI Assistant opened with preparation context',
                'info'
              );
            }}
            className="btn-primary"
            style={{ padding: '6px 14px', fontSize: '0.8rem' }}
          >
            <Sparkles size={13} />
            <span>{tr.askAssistant || 'Ask Setu AI about this company'}</span>
          </button>
        </div>

        {/* 4. Strengths for this preparation */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <TrendingUp size={16} color="var(--success-green)" />
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {tr.currentStrengths || 'YOUR CURRENT STRENGTHS'}
            </h4>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted-dark)', marginBottom: '14px' }}>
            {tr.strengthsExpl || 'These competencies are already strong in your CareerSetu profile and can be highlighted through relevant project and resume evidence.'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
            {activeRole.strengths.map((st) => (
              <div
                key={st.name}
                style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--warm-ivory)',
                  border: '1px solid var(--light-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="var(--success-green)" />
                  <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)' }}>{st.name}</span>
                </div>
                <span className="badge badge-green" style={{ fontSize: '0.72rem' }}>
                  {st.readiness}% Ready
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Priority Skills to Improve Table */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {tr.prioritySkillsTable || 'Priority Skills to Improve'}
            </h4>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted-text)' }}>
              * Labeled as Preparation Target (not mandatory company cutoff)
            </span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--warm-ivory)', borderBottom: '1px solid var(--light-border)' }}>
                  <th style={{ padding: '10px 12px', fontSize: '0.75rem', fontWeight: 800, color: 'var(--muted-text)' }}>
                    {tr.priorityTh || 'PRIORITY'}
                  </th>
                  <th style={{ padding: '10px 12px', fontSize: '0.75rem', fontWeight: 800, color: 'var(--muted-text)' }}>
                    {tr.skillTh || 'SKILL'}
                  </th>
                  <th style={{ padding: '10px 12px', fontSize: '0.75rem', fontWeight: 800, color: 'var(--muted-text)' }}>
                    {tr.readinessTh || 'CURRENT'}
                  </th>
                  <th style={{ padding: '10px 12px', fontSize: '0.75rem', fontWeight: 800, color: 'var(--muted-text)' }}>
                    {tr.targetTh || 'PREPARATION TARGET'}
                  </th>
                  <th style={{ padding: '10px 12px', fontSize: '0.75rem', fontWeight: 800, color: 'var(--muted-text)' }}>
                    {tr.gapTh || 'GAP'}
                  </th>
                  <th style={{ padding: '10px 12px', fontSize: '0.75rem', fontWeight: 800, color: 'var(--muted-text)', textAlign: 'right' }}>
                    {tr.actionTh || 'ACTION'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {activeRole.prioritySkills.map((sk) => {
                  const isExpanded = expandedSkill === sk.skill;
                  return (
                    <React.Fragment key={sk.skill}>
                      <tr
                        onClick={() => setExpandedSkill(isExpanded ? null : sk.skill)}
                        style={{
                          borderBottom: '1px solid var(--light-border)',
                          cursor: 'pointer',
                          backgroundColor: isExpanded ? 'var(--warm-ivory)' : 'transparent',
                          transition: 'background-color var(--transition-fast)'
                        }}
                      >
                        <td style={{ padding: '12px' }}>
                          <span className={`badge ${sk.priority === 'HIGH' ? 'badge-red' : 'badge-orange'}`} style={{ fontSize: '0.7rem' }}>
                            {sk.priority}
                          </span>
                        </td>
                        <td style={{ padding: '12px', fontWeight: 700, color: 'var(--govt-ink)', fontSize: '0.88rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span>{lang === 'hi' && sk.skillHi ? sk.skillHi : sk.skill}</span>
                            {isExpanded ? <ChevronUp size={14} color="var(--muted-text)" /> : <ChevronDown size={14} color="var(--muted-text)" />}
                          </div>
                        </td>
                        <td style={{ padding: '12px', fontSize: '0.86rem', fontWeight: 600 }}>{sk.current}%</td>
                        <td style={{ padding: '12px', fontSize: '0.86rem', fontWeight: 700, color: 'var(--saffron-primary)' }}>{sk.target}%</td>
                        <td style={{ padding: '12px', fontSize: '0.84rem', fontWeight: 700, color: 'var(--bharat-red)' }}>-{sk.gap}%</td>
                        <td style={{ padding: '12px', textAlign: 'right' }}>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleActionClick(sk.action, sk.skill);
                            }}
                            className="btn-secondary"
                            style={{ padding: '5px 12px', fontSize: '0.78rem' }}
                          >
                            <span>{sk.action}</span>
                          </button>
                        </td>
                      </tr>

                      {/* Expandable Details Row */}
                      {isExpanded && (
                        <tr>
                          <td colSpan={6} style={{ padding: '16px 20px', backgroundColor: 'var(--warm-ivory-alt)', borderBottom: '1px solid var(--light-border)' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                              <div>
                                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--deep-indigo)', marginBottom: '4px' }}>
                                  {tr.whyRecommended || 'Why it is recommended'}:
                                </div>
                                <p style={{ fontSize: '0.82rem', color: 'var(--govt-ink)', lineHeight: 1.45 }}>
                                  {sk.whyRecommended}
                                </p>
                                <div style={{ fontSize: '0.74rem', color: 'var(--muted-dark)', marginTop: '8px' }}>
                                  <strong>{tr.careerEvidence || 'CareerSetu Evidence'}:</strong> {sk.evidence}
                                </div>
                              </div>

                              <div>
                                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--saffron-primary)', marginBottom: '4px' }}>
                                  {tr.recommendedFocus || 'Recommended Focus Topics'}:
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                  {sk.focusTopics.map((f) => (
                                    <span key={f} style={{ fontSize: '0.72rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'var(--pure-white)', border: '1px solid var(--light-border)' }}>
                                      • {f}
                                    </span>
                                  ))}
                                </div>
                                <div style={{ fontSize: '0.74rem', color: 'var(--muted-dark)', marginTop: '8px' }}>
                                  <strong>{tr.studentStatus || "Student's Current Status"}:</strong> {sk.studentStatus}
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
