import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { institutionMetrics } from '../../mockData';
import {
  Building2,
  TrendingUp,
  BarChart3,
  AlertCircle,
  CheckCircle2,
  ArrowLeft,
  Download,
  Users,
  Briefcase
} from 'lucide-react';

export const InstitutionPortal = () => {
  const { lang, showToast } = useApp();
  const navigate = useNavigate();

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
              {institutionMetrics.collegeName} — Campus Intelligence Dashboard
            </h2>
          </div>

          <button
            onClick={() => showToast('NIRF / NAAC Accreditation Data Package Exported!', 'success')}
            className="btn-primary"
          >
            <Download size={16} /> Export NIRF Accreditation Report
          </button>
        </div>

        {/* 4 Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          <div style={{ padding: '20px', borderRadius: '12px', backgroundColor: 'var(--pure-white)', border: '1px solid var(--light-border)' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted-text)', fontWeight: 700 }}>STUDENTS MAPPED</div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--govt-ink)', marginTop: '4px' }}>
              {institutionMetrics.totalStudentsMapped.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--success-green)', marginTop: '2px' }}>98% verified coverage</div>
          </div>

          <div style={{ padding: '20px', borderRadius: '12px', backgroundColor: 'var(--pure-white)', border: '1px solid var(--light-border)' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted-text)', fontWeight: 700 }}>AVG. CAREER READINESS</div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--deep-indigo)', marginTop: '4px' }}>
              {institutionMetrics.averageReadiness}%
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--success-green)', marginTop: '2px' }}>{institutionMetrics.readinessChange}</div>
          </div>

          <div style={{ padding: '20px', borderRadius: '12px', backgroundColor: 'var(--pure-white)', border: '1px solid var(--light-border)' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted-text)', fontWeight: 700 }}>INTERNSHIP PLACEMENT</div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--success-green)', marginTop: '4px' }}>
              {institutionMetrics.internshipPlacementRate}%
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted-dark)', marginTop: '2px' }}>Tier-1 & Tier-2 firms</div>
          </div>

          <div style={{ padding: '20px', borderRadius: '12px', backgroundColor: 'var(--pure-white)', border: '1px solid var(--light-border)' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted-text)', fontWeight: 700 }}>TOP PERFORMING BRANCH</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--saffron-primary)', marginTop: '8px' }}>
              {institutionMetrics.topDepartment}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted-text)', marginTop: '2px' }}>High code repo benchmark</div>
          </div>
        </div>

        {/* Department Readiness Table / Cards */}
        <div style={{ backgroundColor: 'var(--pure-white)', borderRadius: 'var(--radius-xl)', padding: '28px', border: '1px solid var(--light-border)', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '16px' }}>
            Departmental Competency & Placement Breakdown
          </h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--light-border)', color: 'var(--muted-dark)' }}>
                  <th style={{ padding: '12px' }}>Department</th>
                  <th style={{ padding: '12px' }}>Enrolled Students</th>
                  <th style={{ padding: '12px' }}>Career Readiness</th>
                  <th style={{ padding: '12px' }}>Placement %</th>
                  <th style={{ padding: '12px' }}>Primary Curriculum Gap</th>
                  <th style={{ padding: '12px' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {institutionMetrics.departments.map((dept) => (
                  <tr key={dept.name} style={{ borderBottom: '1px solid var(--light-border)' }}>
                    <td style={{ padding: '14px 12px', fontWeight: 700, color: 'var(--govt-ink)' }}>{dept.name}</td>
                    <td style={{ padding: '14px 12px' }}>{dept.students}</td>
                    <td style={{ padding: '14px 12px' }}>
                      <span className="badge badge-indigo">{dept.readiness}%</span>
                    </td>
                    <td style={{ padding: '14px 12px' }}>
                      <span className="badge badge-green">{dept.placement}%</span>
                    </td>
                    <td style={{ padding: '14px 12px', color: 'var(--bharat-red)', fontWeight: 600 }}>{dept.gap}</td>
                    <td style={{ padding: '14px 12px' }}>
                      <button
                        onClick={() => showToast(`Initiated curriculum workshop for ${dept.name}`, 'info')}
                        className="btn-secondary"
                        style={{ padding: '4px 10px', fontSize: '0.76rem' }}
                      >
                        Adjust Curriculum
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* High-Demand Industry Skills Heatmap */}
        <div style={{ backgroundColor: 'var(--pure-white)', borderRadius: 'var(--radius-xl)', padding: '28px', border: '1px solid var(--light-border)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '8px' }}>
            Industry Market Demand vs Campus Coverage
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted-dark)', marginBottom: '24px' }}>
            Identifies areas where university coursework lags behind active job openings posted by 500+ verified partner recruiters.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {institutionMetrics.highDemandSkills.map((sk) => (
              <div key={sk.skill} style={{ padding: '14px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px' }}>
                  <span>{sk.skill}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--muted-dark)' }}>
                    Recruiter Demand: <strong style={{ color: 'var(--saffron-primary)' }}>{sk.demand}%</strong> | Campus Coverage: <strong style={{ color: 'var(--deep-indigo)' }}>{sk.campusCoverage}%</strong>
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '8px', height: '8px' }}>
                  <div style={{ flex: sk.campusCoverage, backgroundColor: 'var(--deep-indigo)', borderRadius: '4px' }} title="Campus Coverage" />
                  <div style={{ flex: Math.max(0, sk.demand - sk.campusCoverage), backgroundColor: 'var(--warm-orange)', borderRadius: '4px' }} title="Market Gap" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
