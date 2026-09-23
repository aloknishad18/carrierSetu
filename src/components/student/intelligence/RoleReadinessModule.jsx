import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { careerRolesData } from '../../../mockData';
import {
  Compass,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
  Award,
  ChevronRight,
  BookmarkPlus
} from 'lucide-react';

export const RoleReadinessModule = () => {
  const { lang, t, setStudentTab, showToast } = useApp();

  const tr = t.careerIntelligence?.role || {};

  const [selectedRoleId, setSelectedRoleId] = useState('software-dev');

  const activeRole = careerRolesData.find((r) => r.id === selectedRoleId) || careerRolesData[0];

  const handleAddPlanToRoadmap = () => {
    showToast(
      lang === 'hi'
        ? '4-सप्ताह की तैयारी योजना आपके करियर मार्गदर्शन में जोड़ दी गई है!'
        : '4-Week Preparation Plan added to your Career Roadmap!',
      'success'
    );
    setStudentTab('roadmap');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }} className="fade-in">
      
      {/* 1. Header & Role Selector */}
      <div
        style={{
          padding: '28px',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--pure-white)',
          border: '1px solid var(--light-border)',
          boxShadow: 'var(--shadow-xs)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
          <div>
            <span className="badge badge-indigo" style={{ marginBottom: '6px' }}>
              <Compass size={13} /> {lang === 'hi' ? 'भूमिका तत्परता' : 'ROLE READINESS ENGINE'}
            </span>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {tr.heading || 'Role Readiness Analysis'}
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted-dark)', marginTop: '4px' }}>
              {tr.sub || 'Compare your holistic CareerSetu skill profile against national competency frameworks.'}
            </p>
          </div>

          <div
            style={{
              padding: '12px 20px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--warm-ivory)',
              border: '1px solid var(--light-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--muted-text)', fontWeight: 700 }}>
                {tr.currentMatch || 'CURRENT ROLE MATCH'}
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--saffron-primary)', lineHeight: 1 }}>
                {activeRole.matchScore}%
              </div>
            </div>
            <span className="badge badge-green" style={{ fontSize: '0.72rem' }}>
              High Potential
            </span>
          </div>
        </div>

        {/* Role Selector Buttons */}
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted-text)', marginBottom: '8px' }}>
            {tr.selectRole || 'Target Career Path'}:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {careerRolesData.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRoleId(role.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.84rem',
                  fontWeight: selectedRoleId === role.id ? 700 : 500,
                  backgroundColor: selectedRoleId === role.id ? 'var(--deep-indigo)' : 'var(--warm-ivory)',
                  color: selectedRoleId === role.id ? 'var(--pure-white)' : 'var(--govt-ink)',
                  border: `1px solid ${selectedRoleId === role.id ? 'var(--deep-indigo)' : 'var(--light-border)'}`,
                  boxShadow: selectedRoleId === role.id ? 'var(--shadow-indigo)' : 'none',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {lang === 'hi' && role.hindiName ? role.hindiName : role.name} ({role.matchScore}%)
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Three-Tier Competency Breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        
        {/* Tier 1: READY */}
        <div
          style={{
            padding: '24px',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--pure-white)',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-xs)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span className="badge badge-green" style={{ fontSize: '0.75rem' }}>
              ✓ {tr.readyTab || 'READY'}
            </span>
            <span style={{ fontSize: '0.74rem', color: 'var(--muted-text)' }}>4 Competencies</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {activeRole.matchedSkills.map((s) => (
              <div key={s.name} style={{ padding: '10px 12px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                  <span>{s.name}</span>
                  <span style={{ color: 'var(--success-green)' }}>{s.score}%</span>
                </div>
                <div style={{ height: '5px', borderRadius: '3px', backgroundColor: 'var(--warm-ivory-alt)', marginTop: '6px', overflow: 'hidden' }}>
                  <div style={{ width: `${s.score}%`, height: '100%', backgroundColor: 'var(--success-green)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 2: DEVELOPING */}
        <div
          style={{
            padding: '24px',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--pure-white)',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-xs)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span className="badge badge-orange" style={{ fontSize: '0.75rem' }}>
              ⚡ {tr.developingTab || 'DEVELOPING'}
            </span>
            <span style={{ fontSize: '0.74rem', color: 'var(--muted-text)' }}>2 Competencies</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {activeRole.developingSkills.slice(0, 2).map((s) => (
              <div key={s.name} style={{ padding: '10px 12px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                  <span>{s.name}</span>
                  <span style={{ color: '#92400E' }}>{s.current}% / {s.target}%</span>
                </div>
                <div style={{ height: '5px', borderRadius: '3px', backgroundColor: 'var(--warm-ivory-alt)', marginTop: '6px', overflow: 'hidden' }}>
                  <div style={{ width: `${s.current}%`, height: '100%', backgroundColor: 'var(--warm-orange)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 3: PRIORITY GAP */}
        <div
          style={{
            padding: '24px',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--pure-white)',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-xs)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span className="badge badge-red" style={{ fontSize: '0.75rem' }}>
              ▲ {tr.priorityGapTab || 'PRIORITY GAP'}
            </span>
            <span style={{ fontSize: '0.74rem', color: 'var(--muted-text)' }}>Target Target 90%</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {activeRole.developingSkills.slice(2).map((s) => (
              <div key={s.name} style={{ padding: '10px 12px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                  <span>{s.name}</span>
                  <span style={{ color: 'var(--bharat-red)' }}>{s.current}% / {s.target}%</span>
                </div>
                <div style={{ height: '5px', borderRadius: '3px', backgroundColor: 'var(--warm-ivory-alt)', marginTop: '6px', overflow: 'hidden' }}>
                  <div style={{ width: `${s.current}%`, height: '100%', backgroundColor: 'var(--bharat-red)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3. Setu AI Recommended 4-Week Actionable Preparation Plan */}
      <div
        style={{
          padding: '28px',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--pure-white)',
          border: '1px solid var(--light-border)',
          boxShadow: 'var(--shadow-xs)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '22px' }}>
          <div>
            <span className="badge badge-saffron" style={{ marginBottom: '6px' }}>
              <Sparkles size={12} /> {lang === 'hi' ? 'सेतु एआई व्यक्तिगत योजना' : 'SETU AI ACTIONABLE ROADMAP'}
            </span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {tr.prepPlanHeading || 'Setu AI Recommended 4-Week Preparation Plan'}
            </h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--muted-dark)', marginTop: '4px' }}>
              {activeRole.actionPlan}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => showToast(lang === 'hi' ? 'योजना अनुकूलन विंडो सक्रिय' : 'Customizing plan settings...', 'info')}
              className="btn-secondary"
              style={{ padding: '8px 16px', fontSize: '0.84rem' }}
            >
              {tr.customizeBtn || 'Customize Plan'}
            </button>
            <button
              onClick={handleAddPlanToRoadmap}
              className="btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.84rem' }}
            >
              <BookmarkPlus size={15} />
              <span>{tr.addRoadmapBtn || 'Add Entire Plan to Career Roadmap'}</span>
            </button>
          </div>
        </div>

        {/* 4-Week Timeline Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {/* Week 1 */}
          <div
            style={{
              padding: '18px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--warm-ivory)',
              border: '1px solid var(--light-border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <span className="badge badge-saffron" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>
                WEEK 1: ADVANCED DSA
              </span>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--govt-ink)', marginTop: '4px' }}>
                Graphs & Dynamic Programming
              </h4>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted-dark)', marginTop: '6px', lineHeight: 1.4 }}>
                <strong>Focus:</strong> Graph BFS/DFS traversal, Dijkstra's algorithm, 2D memoization problems.
              </div>
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--success-green)', fontWeight: 700, marginTop: '12px' }}>
              Impact: Strengthen technical problem-solving evidence
            </div>
          </div>

          {/* Week 2 */}
          <div
            style={{
              padding: '18px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--warm-ivory)',
              border: '1px solid var(--light-border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <span className="badge badge-indigo" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>
                WEEK 2: BACKEND ARCHITECTURE
              </span>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--govt-ink)', marginTop: '4px' }}>
                REST APIs & Caching
              </h4>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted-dark)', marginTop: '6px', lineHeight: 1.4 }}>
                <strong>Focus:</strong> REST API contracts, Redis in-memory cache, database indexing & ACID transactions.
              </div>
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--deep-indigo)', fontWeight: 700, marginTop: '12px' }}>
              Impact: Boosts backend capability evidence (+8%)
            </div>
          </div>

          {/* Week 3 */}
          <div
            style={{
              padding: '18px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--warm-ivory)',
              border: '1px solid var(--light-border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <span className="badge badge-orange" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>
                WEEK 3: DEPLOYMENT & CONTAINERS
              </span>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--govt-ink)', marginTop: '4px' }}>
                Docker & Cloud Pipelines
              </h4>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted-dark)', marginTop: '6px', lineHeight: 1.4 }}>
                <strong>Focus:</strong> Containerizing React + Node capstone, writing Dockerfiles, GitHub Actions CI.
              </div>
            </div>
            <div style={{ fontSize: '0.74rem', color: '#92400E', fontWeight: 700, marginTop: '12px' }}>
              Impact: Resolves primary industry alignment gap (55% → 75%)
            </div>
          </div>

          {/* Week 4 */}
          <div
            style={{
              padding: '18px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--warm-ivory)',
              border: '1px solid var(--light-border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <span className="badge badge-green" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>
                WEEK 4: SYSTEM DESIGN
              </span>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--govt-ink)', marginTop: '4px' }}>
                Scalability Fundamentals
              </h4>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted-dark)', marginTop: '6px', lineHeight: 1.4 }}>
                <strong>Focus:</strong> Load balancing, horizontal scaling, database sharding, asynchronous workers.
              </div>
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--success-green)', fontWeight: 700, marginTop: '12px' }}>
              Impact: Elevates candidate readiness into 90th percentile
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
