import React from 'react';
import { useApp } from '../../context/AppContext';
import { Clock, CheckCircle2, AlertCircle, ArrowRight, Calendar, MessageSquare } from 'lucide-react';

export const StudentApplicationsView = () => {
  const { applications, lang } = useApp();

  const stages = ['Applied', 'Under Review', 'Assessment', 'Interview', 'Selected'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* Header */}
      <div
        style={{
          padding: '24px 28px',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--pure-white)',
          border: '1px solid var(--light-border)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        <div>
          <span className="badge badge-indigo" style={{ marginBottom: '6px' }}>
            {lang === 'hi' ? 'आवेदन पाइपलाइन' : 'SELECTION PIPELINE'}
          </span>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
            {lang === 'hi' ? 'आवेदन ट्रैकिंग एवं साक्षात्कार स्थिति' : 'Active Applications & Screening Stages'}
          </h2>
        </div>

        <span className="badge badge-green" style={{ fontSize: '0.82rem', padding: '6px 12px' }}>
          {applications.length} Active Submissions
        </span>
      </div>

      {/* Applications List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {applications.map((app) => (
          <div
            key={app.id}
            className="interactive-card"
            style={{
              padding: '28px',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--pure-white)',
              border: '1px solid var(--light-border)'
            }}
          >
            {/* Top row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
              <div>
                <span className="badge badge-saffron" style={{ marginBottom: '6px' }}>
                  {app.company}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                  {app.role}
                </h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted-text)', marginTop: '2px' }}>
                  Application ID: {app.id} • Submitted on {app.appliedDate}
                </div>
              </div>

              <span className="badge badge-indigo" style={{ padding: '6px 14px', fontSize: '0.82rem' }}>
                Current Stage: {app.stage}
              </span>
            </div>

            {/* Visual 5-Stage Stepper */}
            <div style={{ margin: '24px 0', padding: '16px', backgroundColor: 'var(--warm-ivory)', borderRadius: '12px', border: '1px solid var(--light-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                {stages.map((st, sIdx) => {
                  const isCurrent = app.stage === st;
                  const isPassed = app.stageIndex >= sIdx;

                  return (
                    <div key={st} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, position: 'relative', zIndex: 1 }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          backgroundColor: isCurrent ? 'var(--saffron-primary)' : isPassed ? 'var(--success-green)' : 'var(--light-border)',
                          color: 'var(--pure-white)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          marginBottom: '6px'
                        }}
                      >
                        {isPassed ? '✓' : sIdx + 1}
                      </div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: isCurrent ? 700 : 500,
                          color: isCurrent ? 'var(--saffron-primary)' : isPassed ? 'var(--govt-ink)' : 'var(--muted-text)',
                          textAlign: 'center'
                        }}
                      >
                        {st}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Notes & Next Action */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', paddingTop: '16px', borderTop: '1px solid var(--light-border)' }}>
              <div style={{ fontSize: '0.84rem', color: 'var(--muted-dark)' }}>
                <strong>Recruiter Feedback:</strong> {app.notes}
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--saffron-primary)', fontWeight: 600 }}>
                <strong>Immediate Action Required:</strong> {app.nextAction}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
