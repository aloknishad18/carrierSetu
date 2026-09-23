import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { adminStats } from '../../mockData';
import {
  ShieldCheck,
  Building2,
  Briefcase,
  AlertTriangle,
  FileText,
  CheckCircle,
  XCircle,
  ArrowLeft,
  Activity
} from 'lucide-react';

export const AdminPortal = () => {
  const { lang, showToast } = useApp();
  const navigate = useNavigate();
  const [instList, setInstList] = useState(adminStats.pendingInstitutions);
  const [recList, setRecList] = useState(adminStats.pendingRecruiters);

  const verifyInst = (id) => {
    setInstList(instList.filter((i) => i.id !== id));
    showToast('Institution verified and granted campus analytics access!', 'success');
  };

  const verifyRec = (id) => {
    setRecList(recList.filter((r) => r.id !== id));
    showToast('Corporate Recruiter CIN verified and authorized to post jobs!', 'success');
  };

  return (
    <div style={{ backgroundColor: 'var(--warm-ivory)', minHeight: 'calc(100vh - 105px)', padding: '32px 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <button
              onClick={() => navigate('/')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.86rem',
                fontWeight: 600,
                color: 'var(--muted-dark)',
                marginBottom: '8px'
              }}
            >
              <ArrowLeft size={16} />
              <span>{lang === 'hi' ? 'मुख्य साइट पर लौटें' : 'Back to Public Portal'}</span>
            </button>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              National Platform Governance & Moderation (SIH26044)
            </h2>
          </div>

          <span className="badge badge-green" style={{ padding: '6px 14px' }}>
            <Activity size={14} /> System Health: Nominal • 99.98% Uptime
          </span>
        </div>

        {/* 2 Verification Queues (Institutions + Industry Recruiters) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          
          {/* Pending Colleges */}
          <div style={{ padding: '24px', borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--pure-white)', border: '1px solid var(--light-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                Pending Institution Approvals
              </h3>
              <span className="badge badge-orange">{instList.length} Pending</span>
            </div>

            {instList.length === 0 ? (
              <div style={{ padding: '20px', textAlign: 'center', color: 'var(--muted-text)', fontSize: '0.86rem' }}>
                All academic institutions have been verified.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {instList.map((inst) => (
                  <div key={inst.id} style={{ padding: '14px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--govt-ink)' }}>{inst.name}</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--muted-dark)' }}>{inst.state} • Submitted {inst.date}</div>
                    </div>
                    <button onClick={() => verifyInst(inst.id)} className="btn-primary" style={{ padding: '6px 12px', fontSize: '0.78rem' }}>
                      Verify
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pending Recruiters */}
          <div style={{ padding: '24px', borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--pure-white)', border: '1px solid var(--light-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                Pending Recruiter CIN Verifications
              </h3>
              <span className="badge badge-orange">{recList.length} Pending</span>
            </div>

            {recList.length === 0 ? (
              <div style={{ padding: '20px', textAlign: 'center', color: 'var(--muted-text)', fontSize: '0.86rem' }}>
                All recruiter KYC & CIN verifications up to date.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {recList.map((rec) => (
                  <div key={rec.id} style={{ padding: '14px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--govt-ink)' }}>{rec.company}</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--muted-dark)' }}>CIN: {rec.cin} • {rec.contact}</div>
                    </div>
                    <button onClick={() => verifyRec(rec.id)} className="btn-primary" style={{ padding: '6px 12px', fontSize: '0.78rem' }}>
                      Approve
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Moderation Flag & Audit Log */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* Flagged Opportunities */}
          <div style={{ padding: '24px', borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--pure-white)', border: '1px solid var(--light-border)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '16px' }}>
              AI Moderation & Stipend Compliance Gate
            </h3>

            {adminStats.moderationFlags.map((flag) => (
              <div key={flag.id} style={{ padding: '16px', borderRadius: '10px', backgroundColor: 'var(--bharat-red-light)', border: '1px solid rgba(185,28,28,0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--bharat-red)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px' }}>
                  <AlertTriangle size={16} /> {flag.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--govt-ink)', marginBottom: '12px' }}>
                  {flag.company} — {flag.reason}
                </div>
                <button
                  onClick={() => showToast('Flagged posting rejected per SIH statutory guidelines.', 'error')}
                  className="btn-secondary"
                  style={{ fontSize: '0.78rem', padding: '6px 12px', borderColor: 'var(--bharat-red)', color: 'var(--bharat-red)' }}
                >
                  Reject & Enforce Guidelines
                </button>
              </div>
            ))}
          </div>

          {/* Audit Log */}
          <div style={{ padding: '24px', borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--pure-white)', border: '1px solid var(--light-border)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '16px' }}>
              Real-Time National Audit Trail
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {adminStats.auditLog.map((log, idx) => (
                <div key={idx} style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)', fontSize: '0.82rem' }}>
                  <div style={{ fontWeight: 600, color: 'var(--govt-ink)' }}>{log.event}</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--muted-text)', marginTop: '2px' }}>
                    {log.time} • Operator: {log.admin}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
