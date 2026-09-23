import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { careerRolesData } from '../../mockData';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  BookOpen,
  Layers,
  X,
  Plus,
  HelpCircle,
  Clock,
  TrendingUp,
  ShieldCheck,
  Compass
} from 'lucide-react';

export const StudentSkillGapView = () => {
  const { lang, setStudentTab, showToast } = useApp();
  const [selectedRole, setSelectedRole] = useState(careerRolesData[0]);
  const [activeGapDetail, setActiveGapDetail] = useState(null);
  const [showRationaleModal, setShowRationaleModal] = useState(false);

  // Default gap explanation helper
  const getGapExplanation = (gapName) => {
    const explanations = {
      "Advanced Data Structures & DP": {
        current: 78,
        target: 90,
        gap: 12,
        importance: "Frequently evaluated in Tier-1 product engineering rounds, code optimization assessments, and memory-constrained system architectures.",
        actions: [
          "Complete Graph Algorithms (BFS/DFS, Dijkstra, Topological Sort)",
          "Solve 15 dynamic programming pattern problems (Knapsack, LCS)",
          "Participate in the upcoming CareerSetu live benchmark contest"
        ]
      },
      "Backend Architecture & Caching": {
        current: 74,
        target: 88,
        gap: 14,
        importance: "Critical for designing scalable, sub-millisecond API responses and distributed microservice communication.",
        actions: [
          "Implement Redis caching layer for relational query caching",
          "Read system design blueprints on database indexing and connection pooling",
          "Complete capstone module on message queues (RabbitMQ/Kafka)"
        ]
      },
      "System Design & Scalability": {
        current: 68,
        target: 82,
        gap: 14,
        importance: "Required by tech teams to evaluate candidate's architectural maturity, API idempotency, and fault tolerance understanding.",
        actions: [
          "Study High-Level Design (HLD) trade-offs for rate limiting & load balancers",
          "Build an asynchronous URL shortener or job queue system",
          "Schedule peer mock architecture review on CareerSetu"
        ]
      },
      "Docker & Container Deployment": {
        current: 55,
        target: 75,
        gap: 20,
        importance: "Standard industry expectation for continuous delivery, containerized microservices, and multi-environment reproducibility.",
        actions: [
          "Dockerize a full-stack Node.js + PostgreSQL repository",
          "Write multi-stage Dockerfiles to optimize image footprints",
          "Set up automated Docker container build on GitHub Actions"
        ]
      }
    };

    return (
      explanations[gapName] || {
        current: 60,
        target: 85,
        gap: 25,
        importance: "Essential core competency identified in active industry job descriptions.",
        actions: [
          "Review standard documentation and best practice guidelines",
          "Build an isolated hands-on project demonstrating this competency",
          "Take an adaptive assessment on CareerSetu"
        ]
      }
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* 1. Page Header with Eyebrow and Context */}
      <div
        style={{
          padding: '28px 32px',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--pure-white)',
          border: '1px solid var(--light-border)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
          <span className="badge badge-saffron">
            {lang === 'hi' ? 'करियर लक्ष्य चयन' : 'SELECT TARGET CAREER PATH'}
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--muted-dark)', fontWeight: 600 }}>
            {lang === 'hi' ? '• उद्योग बेंचमार्क 2026' : '• Industry Benchmark 2026'}
          </span>
        </div>

        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '8px' }}>
          {lang === 'hi' ? 'लक्षित पद के अनुसार कौशल अंतर विश्लेषण' : 'Target Role Competency Gap Analysis'}
        </h2>
        
        <p style={{ fontSize: '0.9rem', color: 'var(--muted-dark)', maxWidth: '780px', lineHeight: 1.5, marginBottom: '20px' }}>
          {lang === 'hi'
            ? 'अपनी वर्तमान सत्यापित क्षमताओं की तुलना उद्योग द्वारा अपेक्षित मानकों से करें और उच्च प्राथमिकता वाले कौशल अंतरों को दूर करें।'
            : 'Compare your current verified competencies with role-specific industry expectations. Bridge high-priority gaps to increase your smart match score.'}
        </p>

        {/* 5 Target Roles Selector */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {careerRolesData.map((role) => {
            const isSelected = selectedRole.id === role.id;
            return (
              <button
                key={role.id}
                onClick={() => {
                  setSelectedRole(role);
                  setActiveGapDetail(null);
                }}
                style={{
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  backgroundColor: isSelected ? 'var(--deep-indigo)' : 'var(--warm-ivory)',
                  color: isSelected ? 'var(--pure-white)' : 'var(--govt-ink)',
                  border: isSelected ? '1px solid var(--deep-indigo)' : '1px solid var(--light-border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 4px 12px rgba(49, 46, 129, 0.2)' : 'none'
                }}
              >
                <span>{lang === 'hi' ? role.hindiName : role.name}</span>
                <span
                  style={{
                    fontSize: '0.76rem',
                    padding: '2px 7px',
                    borderRadius: '4px',
                    backgroundColor: isSelected ? 'rgba(255,255,255,0.22)' : 'rgba(49,46,129,0.08)',
                    color: isSelected ? '#FFFFFF' : 'var(--deep-indigo)',
                    fontWeight: 700
                  }}
                >
                  {role.matchScore}%
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Comparison Grid: Satisfied Competencies + Priority Gaps */}
      <div
        className="fade-in"
        key={selectedRole.id}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}
      >
        {/* Left Column: Satisfied Competencies (Ready) */}
        <div
          style={{
            padding: '26px',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--pure-white)',
            border: '1px solid var(--light-border)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ padding: '7px', borderRadius: '10px', backgroundColor: 'var(--success-light)', color: 'var(--success-green)' }}>
                <CheckCircle2 size={20} />
              </span>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                  {lang === 'hi' ? 'तैयार क्षमताएं (Ready)' : 'Satisfied Competencies (Ready)'}
                </h3>
                <span style={{ fontSize: '0.74rem', color: 'var(--muted-text)' }}>
                  {selectedRole.matchedSkills.length} {lang === 'hi' ? 'कौशल बेंचमार्क पूरा' : 'verified benchmark standards met'}
                </span>
              </div>
            </div>
            <span className="badge badge-green">
              {lang === 'hi' ? 'प्रमाणित' : 'Verified'}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {selectedRole.matchedSkills.map((sk) => (
              <div
                key={sk.name}
                style={{
                  padding: '14px 16px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--warm-ivory)',
                  border: '1px solid var(--light-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                }}
                className="interactive-card"
                title="Based on assessment performance, project evidence and verified activities."
              >
                <div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--govt-ink)', display: 'block' }}>
                    {sk.name}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--muted-text)' }}>
                    Assessment & Capstone Verified
                  </span>
                </div>
                <span className="badge badge-green" style={{ fontWeight: 800 }}>
                  {sk.score}% Ready
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '16px', padding: '10px 14px', borderRadius: '8px', backgroundColor: 'var(--indigo-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HelpCircle size={14} color="var(--deep-indigo)" />
            <span style={{ fontSize: '0.75rem', color: 'var(--muted-dark)', lineHeight: 1.4 }}>
              Scores derived from verified coding assessments, project code commits, and academic transcripts.
            </span>
          </div>
        </div>

        {/* Right Column: Development Areas & Priority Gaps */}
        <div
          style={{
            padding: '26px',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--pure-white)',
            border: '1px solid var(--light-border)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ padding: '7px', borderRadius: '10px', backgroundColor: 'var(--warm-orange-light)', color: '#B45309' }}>
                <AlertCircle size={20} />
              </span>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                  {lang === 'hi' ? 'प्राथमिकता कौशल अंतर (Skill Gaps)' : 'Development Areas & Priority Gaps'}
                </h3>
                <span style={{ fontSize: '0.74rem', color: 'var(--muted-text)' }}>
                  Click any card to inspect roadmap actions
                </span>
              </div>
            </div>
            <span className="badge badge-orange">
              {selectedRole.developingSkills.length} To Improve
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {selectedRole.developingSkills.map((sk) => {
              const isHigh = sk.priority === 'High';
              return (
                <div
                  key={sk.name}
                  onClick={() => setActiveGapDetail(sk.name)}
                  style={{
                    padding: '14px 16px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--warm-ivory)',
                    border: isHigh ? '1px solid rgba(185, 28, 28, 0.25)' : '1px solid rgba(245, 158, 11, 0.25)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  className="interactive-card"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                      {sk.name}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '2px 8px',
                        borderRadius: '4px',
                        backgroundColor: isHigh ? 'var(--bharat-red-light)' : 'var(--warm-orange-light)',
                        color: isHigh ? 'var(--bharat-red)' : '#B45309'
                      }}
                    >
                      {sk.priority} Priority
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ flex: 1, height: '7px', backgroundColor: 'var(--light-border)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${sk.current}%`,
                          height: '100%',
                          backgroundColor: isHigh ? 'var(--bharat-red)' : 'var(--warm-orange)',
                          borderRadius: '4px',
                          transition: 'width 0.6s ease'
                        }}
                      />
                    </div>
                    <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--muted-dark)', minWidth: '70px', textAlign: 'right' }}>
                      {sk.current} / {sk.target || 85}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '6px' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--deep-indigo)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px' }}>
                      Explain Gap & Actions →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Intelligent Recommendation + Next Best Action Section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px'
        }}
      >
        {/* Recommended Learning Action Card */}
        <div
          style={{
            padding: '24px 28px',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--indigo-surface)',
            border: '1px solid rgba(49, 46, 129, 0.18)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--deep-indigo)', letterSpacing: '0.04em' }}>
                RECOMMENDED LEARNING ACTION
              </span>
              <button
                onClick={() => setShowRationaleModal(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.75rem',
                  color: 'var(--deep-indigo)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                <HelpCircle size={13} />
                <span>Why this recommendation?</span>
              </button>
            </div>

            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--govt-ink)', lineHeight: 1.45 }}>
              {selectedRole.actionPlan}
            </div>

            <p style={{ fontSize: '0.82rem', color: 'var(--muted-dark)', marginTop: '8px', lineHeight: 1.5 }}>
              Smart recommendations analyze target role benchmarks against your active profile. Final hiring decisions rest with recruiters.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setStudentTab('roadmap')}
              className="btn-indigo"
              style={{ padding: '10px 18px', fontSize: '0.86rem' }}
            >
              <span>{lang === 'hi' ? 'करियर रोडमैप पर जाएं' : 'Open Personalized Roadmap'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Next Best Action Card */}
        <div
          style={{
            padding: '24px 28px',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--pure-white)',
            border: '1px solid rgba(232, 117, 22, 0.3)',
            boxShadow: '0 4px 14px rgba(232, 117, 22, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span className="badge badge-saffron" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                <Sparkles size={12} /> NEXT BEST ACTION
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--success-green)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <TrendingUp size={14} /> +4 Readiness Points
              </span>
            </div>

            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--govt-ink)', marginTop: '6px' }}>
              Graph Algorithms Assessment
            </h4>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '8px', fontSize: '0.8rem', color: 'var(--muted-dark)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={13} color="var(--saffron-primary)" /> Est. Time: 2 Hours
              </span>
              <span style={{ color: 'var(--light-border)' }}>•</span>
              <span>5 Core Questions</span>
            </div>
          </div>

          <button
            onClick={() => {
              setStudentTab('assessment');
              showToast('Launching Graph Algorithms Assessment...', 'info');
            }}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <span>Start Now →</span>
          </button>
        </div>
      </div>

      {/* 4. Gap Explanation Side Drawer / Modal */}
      {activeGapDetail && (
        <div
          className="fade-in"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(28, 27, 26, 0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1100,
            padding: '20px'
          }}
          onClick={() => setActiveGapDetail(null)}
        >
          <div
            style={{
              backgroundColor: 'var(--pure-white)',
              borderRadius: 'var(--radius-xl)',
              maxWidth: '560px',
              width: '100%',
              padding: '32px',
              border: '1px solid var(--light-border)',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveGapDetail(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--muted-dark)'
              }}
            >
              <X size={20} />
            </button>

            <span className="badge badge-red" style={{ marginBottom: '8px' }}>
              PRIORITY SKILL GAP BREAKDOWN
            </span>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '16px' }}>
              {activeGapDetail}
            </h3>

            {/* Gap Metrics Row */}
            {(() => {
              const exp = getGapExplanation(activeGapDetail);
              return (
                <div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '12px',
                      backgroundColor: 'var(--warm-ivory)',
                      padding: '14px',
                      borderRadius: '12px',
                      marginBottom: '20px',
                      textAlign: 'center'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--muted-dark)' }}>Current Readiness</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--saffron-primary)' }}>
                        {exp.current}%
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--muted-dark)' }}>Role Benchmark</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--deep-indigo)' }}>
                        {exp.target}%
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--muted-dark)' }}>Net Gap</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--bharat-red)' }}>
                        -{exp.gap}%
                      </div>
                    </div>
                  </div>

                  {/* Why This Matters */}
                  <div style={{ marginBottom: '16px' }}>
                    <h5 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '4px' }}>
                      Why This Matters:
                    </h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted-dark)', lineHeight: 1.5 }}>
                      {exp.importance}
                    </p>
                  </div>

                  {/* Recommended Action Steps */}
                  <div style={{ marginBottom: '24px' }}>
                    <h5 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '8px' }}>
                      Recommended Action Steps:
                    </h5>
                    <ul style={{ paddingLeft: '20px', fontSize: '0.82rem', color: 'var(--muted-dark)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {exp.actions.map((act, idx) => (
                        <li key={idx}>{act}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                      onClick={() => {
                        showToast(`"${activeGapDetail}" added to personalized Career Roadmap!`, 'success');
                        setActiveGapDetail(null);
                        setStudentTab('roadmap');
                      }}
                      className="btn-primary"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      <Plus size={16} /> Add to My Career Roadmap
                    </button>
                    <button
                      onClick={() => setActiveGapDetail(null)}
                      className="btn-secondary"
                    >
                      Close
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* 5. Recommendation Rationale Explainer Modal */}
      {showRationaleModal && (
        <div
          className="fade-in"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(28, 27, 26, 0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1100,
            padding: '20px'
          }}
          onClick={() => setShowRationaleModal(false)}
        >
          <div
            style={{
              backgroundColor: 'var(--pure-white)',
              borderRadius: 'var(--radius-xl)',
              maxWidth: '520px',
              width: '100%',
              padding: '32px',
              border: '1px solid var(--light-border)',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowRationaleModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--muted-dark)'
              }}
            >
              <X size={20} />
            </button>

            <span className="badge badge-indigo" style={{ marginBottom: '8px' }}>
              TRANSPARENT AI RECOMMENDATION
            </span>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '12px' }}>
              How Is This Recommendation Generated?
            </h3>

            <p style={{ fontSize: '0.86rem', color: 'var(--muted-dark)', lineHeight: 1.5, marginBottom: '16px' }}>
              CareerSetu does not use opaque algorithmic black boxes. Recommendations are synthesized deterministically based on:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)', fontSize: '0.82rem', color: 'var(--govt-ink)' }}>
                <strong>1. Current Skill Profile:</strong> Verified technical and problem-solving metrics from your assessments.
              </div>
              <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)', fontSize: '0.82rem', color: 'var(--govt-ink)' }}>
                <strong>2. Target Role Requirements:</strong> Real rubric benchmarks defined by 500+ participating employers.
              </div>
              <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)', fontSize: '0.82rem', color: 'var(--govt-ink)' }}>
                <strong>3. Priority Skill Gaps:</strong> Gaps weighted by hiring frequency in current national postings.
              </div>
              <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)', fontSize: '0.82rem', color: 'var(--govt-ink)' }}>
                <strong>4. Ethical AI Standard:</strong> Recommendations are assistive tools for planning. Recruiters make independent selection choices.
              </div>
            </div>

            <button
              onClick={() => setShowRationaleModal(false)}
              className="btn-indigo"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Understood
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

