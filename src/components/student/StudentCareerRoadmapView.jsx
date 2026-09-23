import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, Clock, BookOpen, Award, ArrowRight, Sparkles } from 'lucide-react';

export const StudentCareerRoadmapView = () => {
  const { lang, setStudentTab, showToast } = useApp();

  const tasks = [
    {
      id: 1,
      title: "Algorithms: Graphs & Dynamic Programming",
      skill: "Problem Solving",
      effort: "12 Hours",
      status: "In Progress",
      progress: 65,
      action: "Resume Problem Set"
    },
    {
      id: 2,
      title: "Containerization: Dockerizing Microservices",
      skill: "Industry Alignment",
      effort: "6 Hours",
      status: "Upcoming",
      progress: 0,
      action: "Start Module"
    },
    {
      id: 3,
      title: "Deploy Full-Stack App on AWS / Cloudflare",
      skill: "Technical Skills",
      effort: "8 Hours",
      status: "Upcoming",
      progress: 0,
      action: "View Architecture Guide"
    },
    {
      id: 4,
      title: "System Design Mock Evaluation",
      skill: "Problem Solving & Architecture",
      effort: "4 Hours",
      status: "Upcoming",
      progress: 0,
      action: "Book Slot"
    },
    {
      id: 5,
      title: "Fast-Track Application Submission",
      skill: "Career Readiness: 90% Target",
      effort: "1 Hour",
      status: "Locked",
      progress: 0,
      action: "Requires 90% Readiness"
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Header */}
      <div
        style={{
          padding: '26px 30px',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--pure-white)',
          border: '1px solid var(--light-border)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
        }}
      >
        <div>
          <span className="badge badge-indigo" style={{ marginBottom: '6px' }}>
            {lang === 'hi' ? 'करियर मार्गदर्शन ट्रैक' : 'GOAL-DIRECTED ROADMAP'}
          </span>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
            {lang === 'hi' ? 'लक्ष्य: सॉफ्टवेयर इंजीनियर (Tier-1)' : 'Target: Software Development Engineer (Tier-1)'}
          </h2>
          <p style={{ fontSize: '0.86rem', color: 'var(--muted-dark)', marginTop: '4px' }}>
            {lang === 'hi'
              ? 'प्रमाणित मील के पत्थर पूरे करें और अपनी करियर तैयारी को 82 से 92 तक पहुंचाएं।'
              : 'Complete verified learning milestones to progress readiness score from 82 to 92.'}
          </p>
        </div>

        {/* Readiness Progression Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'var(--warm-ivory)', padding: '12px 18px', borderRadius: '12px', border: '1px solid var(--light-border)' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted-dark)', fontWeight: 600 }}>CURRENT</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--saffron-primary)' }}>82%</div>
          </div>
          <ArrowRight size={18} color="var(--deep-indigo)" />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted-dark)', fontWeight: 600 }}>TARGET</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--success-green)' }}>92%</div>
          </div>
        </div>
      </div>

      {/* Roadmap Milestone Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {tasks.map((task, idx) => (
          <div
            key={task.id}
            className="interactive-card"
            style={{
              padding: '24px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--pure-white)',
              border: '1px solid var(--light-border)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', minWidth: '280px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: task.status === 'In Progress' ? 'var(--saffron-light)' : 'var(--warm-ivory)',
                  color: task.status === 'In Progress' ? 'var(--saffron-primary)' : 'var(--muted-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  flexShrink: 0
                }}
              >
                0{idx + 1}
              </div>

              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                  {task.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.78rem', color: 'var(--muted-dark)', marginTop: '4px' }}>
                  <span>{task.skill}</span>
                  <span>•</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> {task.effort}
                  </span>
                </div>
              </div>
            </div>

            {/* Progress & Action Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <span
                className={
                  task.status === 'In Progress'
                    ? 'badge badge-saffron'
                    : task.status === 'Completed'
                    ? 'badge badge-green'
                    : 'badge badge-indigo'
                }
              >
                {task.status}
              </span>

              <button
                onClick={() => {
                  if (task.status === 'Locked') {
                    showToast('Complete preceding modules to unlock Tier-1 applications!', 'info');
                  } else {
                    showToast(`Module launched: ${task.title}`, 'success');
                  }
                }}
                className={task.status === 'In Progress' ? 'btn-primary' : 'btn-secondary'}
                style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                disabled={task.status === 'Locked'}
              >
                <span>{task.action}</span>
                <ArrowRight size={14} className="btn-arrow" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
