import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, CheckCircle, ShieldCheck, Mail, Calendar, ExternalLink } from 'lucide-react';

export const CandidateModal = () => {
  const { selectedCandidate, setSelectedCandidate, lang, showToast } = useApp();

  if (!selectedCandidate) return null;

  const can = selectedCandidate;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(28, 27, 26, 0.65)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={() => setSelectedCandidate(null)}
    >
      <div
        className="fade-in"
        style={{
          backgroundColor: 'var(--pure-white)',
          borderRadius: 'var(--radius-xl)',
          maxWidth: '640px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--light-border)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            padding: '24px 28px',
            borderBottom: '1px solid var(--light-border)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <img
              src={can.avatar}
              alt={can.name}
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid var(--saffron-primary)'
              }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                  {can.name}
                </h3>
                {can.verified && (
                  <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>
                    <ShieldCheck size={12} /> Verified
                  </span>
                )}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted-dark)', marginTop: '2px' }}>
                {can.degree} • {can.college}
              </div>
            </div>
          </div>

          <button
            onClick={() => setSelectedCandidate(null)}
            style={{
              padding: '6px',
              borderRadius: '8px',
              backgroundColor: 'var(--warm-ivory)',
              color: 'var(--muted-text)'
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: '24px 28px' }}>
          {/* Readiness & Match Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
            <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: 'var(--indigo-surface)', border: '1px solid rgba(49, 46, 129, 0.15)' }}>
              <div style={{ fontSize: '0.76rem', color: 'var(--deep-indigo)', fontWeight: 700 }}>CAREER READINESS</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--deep-indigo)', marginTop: '4px' }}>
                {can.readiness} <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>/ 100</span>
              </div>
            </div>
            <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: 'var(--saffron-light)', border: '1px solid rgba(232, 117, 22, 0.2)' }}>
              <div style={{ fontSize: '0.76rem', color: 'var(--saffron-primary)', fontWeight: 700 }}>ROLE FIT MATCH</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--saffron-primary)', marginTop: '4px' }}>
                {can.matchScore}%
              </div>
            </div>
          </div>

          {/* AI Match Rationale */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '8px' }}>
              Why This Candidate Matches:
            </h4>
            <div style={{ padding: '14px', borderRadius: '10px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)', fontSize: '0.86rem', lineHeight: 1.5, color: 'var(--muted-dark)' }}>
              {can.matchReason}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '10px' }}>
              Verified Competencies:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {can.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--pure-white)',
                    border: '1px solid var(--light-border)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--govt-ink)'
                  }}
                >
                  <CheckCircle size={13} color="var(--success-green)" /> {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Recruiter Actions */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button
              onClick={() => {
                showToast(`Interview invite dispatched to ${can.name}!`, 'success');
                setSelectedCandidate(null);
              }}
              className="btn-primary"
            >
              <Calendar size={16} />
              <span>Schedule Technical Round</span>
            </button>
            <button
              onClick={() => {
                showToast(`Direct message sent to ${can.name}!`, 'info');
                setSelectedCandidate(null);
              }}
              className="btn-secondary"
            >
              <Mail size={16} />
              <span>Message Candidate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
