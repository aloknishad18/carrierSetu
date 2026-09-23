import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { academiaPrograms } from '../../mockData';
import {
  GraduationCap,
  BookOpen,
  Award,
  Layers,
  Users,
  Calendar,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const AcademicianPortal = () => {
  const { lang, showToast } = useApp();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('programs');

  return (
    <div style={{ backgroundColor: 'var(--warm-ivory)', minHeight: 'calc(100vh - 105px)', padding: '32px 0' }}>
      <div className="container">
        
        {/* Sub-Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.86rem',
              fontWeight: 600,
              color: 'var(--muted-dark)'
            }}
          >
            <ArrowLeft size={16} />
            <span>{lang === 'hi' ? 'मुख्य साइट पर लौटें' : 'Back to Public Portal'}</span>
          </button>

          <span className="badge badge-indigo">
            <GraduationCap size={13} /> {lang === 'hi' ? 'संकाय सत्र: डॉ. वी. के. राव (आईआईटी/डीटीयू)' : 'Faculty Session: Prof. V. K. Rao (Dept. of CSE)'}
          </span>
        </div>

        {/* Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: '32px',
            alignItems: 'flex-start'
          }}
          className="portal-layout"
        >
          {/* Sidebar */}
          <aside
            style={{
              backgroundColor: 'var(--pure-white)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--light-border)',
              padding: '20px 14px',
              position: 'sticky',
              top: '110px'
            }}
          >
            <div style={{ padding: '0 8px 16px 8px', borderBottom: '1px solid var(--light-border)', marginBottom: '16px' }}>
              <span className="badge badge-indigo" style={{ fontSize: '0.7rem', marginBottom: '4px' }}>
                ACADEMICIAN / FACULTY
              </span>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                Prof. V. K. Rao
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--muted-text)' }}>
                Senior Professor • Delhi Tech. Univ.
              </div>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {[
                { id: 'programs', label: 'Industry FDPs', icon: BookOpen },
                { id: 'research', label: 'Research Grants', icon: Award },
                { id: 'projects', label: 'Live Student Projects', icon: Layers },
                { id: 'mentorship', label: 'Mentorship Hub', icon: Users }
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.88rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--pure-white)' : 'var(--govt-ink)',
                      backgroundColor: isActive ? 'var(--deep-indigo)' : 'transparent',
                      textAlign: 'left'
                    }}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Content */}
          <main style={{ minWidth: 0 }}>
            {/* Overview / FDP Programs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div
                style={{
                  padding: '28px',
                  borderRadius: 'var(--radius-xl)',
                  backgroundColor: 'var(--pure-white)',
                  border: '1px solid var(--light-border)'
                }}
              >
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '8px' }}>
                  Industry Faculty Development Programs (AICTE Sponsored)
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted-dark)', lineHeight: 1.6 }}>
                  Upskill and collaborate with corporate R&D divisions. Selected programs provide hands-on enterprise cloud credits and direct lab curriculum materials.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {academiaPrograms.map((prog) => (
                  <div
                    key={prog.id}
                    className="interactive-card"
                    style={{
                      padding: '24px',
                      borderRadius: 'var(--radius-xl)',
                      backgroundColor: 'var(--pure-white)',
                      border: '1px solid var(--light-border)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                      <div>
                        <span className="badge badge-saffron" style={{ marginBottom: '6px' }}>
                          Partner: {prog.industryPartner}
                        </span>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                          {prog.title}
                        </h4>
                      </div>
                      <span className="badge badge-indigo">
                        {prog.stipendFund || prog.funding}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.86rem', color: 'var(--muted-dark)', lineHeight: 1.55 }}>
                      {prog.focus}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '12px', borderTop: '1px solid var(--light-border)' }}>
                      <div style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>
                        <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                        {prog.dates || prog.deadline} • {prog.seats || prog.duration}
                      </div>

                      <button
                        onClick={() => showToast(`Enrolled in ${prog.title}! Official confirmation sent.`, 'success')}
                        className="btn-indigo"
                        style={{ padding: '8px 16px', fontSize: '0.84rem' }}
                      >
                        Apply for Faculty Seat
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>

      </div>
    </div>
  );
};
