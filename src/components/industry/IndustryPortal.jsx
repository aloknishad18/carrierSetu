import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  FileCheck2,
  Handshake,
  PlusCircle,
  Search,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Sparkles,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

export const IndustryPortal = () => {
  const {
    industryTab,
    setIndustryTab,
    opportunities,
    candidates,
    setIsPostOpportunityOpen,
    setSelectedCandidate,
    setSelectedOpportunity,
    lang,
    setCurrentView,
    showToast
  } = useApp();

  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [minReadiness, setMinReadiness] = useState(80);

  const filteredCandidates = candidates.filter((can) => {
    const matchesQuery =
      can.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      can.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      can.college.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesReadiness = can.readiness >= minReadiness;
    return matchesQuery && matchesReadiness;
  });

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'opportunities', label: 'My Postings', icon: Briefcase },
    { id: 'candidates', label: 'Candidate Discovery', icon: Users },
    { id: 'applications', label: 'Applicant Pipeline', icon: FileCheck2 },
    { id: 'collaboration', label: 'Academia Tie-ups', icon: Handshake }
  ];

  return (
    <div style={{ backgroundColor: 'var(--warm-ivory)', minHeight: 'calc(100vh - 105px)', padding: '32px 0' }}>
      <div className="container">
        
        {/* Sub-Header bar */}
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

          <button
            onClick={() => setIsPostOpportunityOpen(true)}
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.86rem' }}
          >
            <PlusCircle size={16} />
            <span>{lang === 'hi' ? 'नया अवसर पोस्ट करें' : 'Post New Opportunity'}</span>
          </button>
        </div>

        {/* Layout Grid */}
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
              <span className="badge badge-saffron" style={{ fontSize: '0.7rem', marginBottom: '4px' }}>
                CORPORATE RECRUITER
              </span>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                Tech Innovations Lab
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--muted-text)' }}>
                Bengaluru • Verified CIN Partner
              </div>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = industryTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setIndustryTab(item.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.88rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--pure-white)' : 'var(--govt-ink)',
                      backgroundColor: isActive ? 'var(--saffron-primary)' : 'transparent',
                      textAlign: 'left',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main Content Area */}
          <main style={{ minWidth: 0 }}>
            
            {/* TAB: DASHBOARD */}
            {industryTab === 'dashboard' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                  <div style={{ padding: '20px', borderRadius: '12px', backgroundColor: 'var(--pure-white)', border: '1px solid var(--light-border)' }}>
                    <div style={{ fontSize: '0.76rem', color: 'var(--muted-text)', fontWeight: 700 }}>ACTIVE POSTINGS</div>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--govt-ink)', marginTop: '4px' }}>{opportunities.length}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--success-green)', marginTop: '2px' }}>All AICTE verified</div>
                  </div>
                  <div style={{ padding: '20px', borderRadius: '12px', backgroundColor: 'var(--pure-white)', border: '1px solid var(--light-border)' }}>
                    <div style={{ fontSize: '0.76rem', color: 'var(--muted-text)', fontWeight: 700 }}>APPLICANTS POOL</div>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--deep-indigo)', marginTop: '4px' }}>142</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted-dark)', marginTop: '2px' }}>38 passed 85%+ readiness gate</div>
                  </div>
                  <div style={{ padding: '20px', borderRadius: '12px', backgroundColor: 'var(--pure-white)', border: '1px solid var(--light-border)' }}>
                    <div style={{ fontSize: '0.76rem', color: 'var(--muted-text)', fontWeight: 700 }}>SCHEDULED INTERVIEWS</div>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--saffron-primary)', marginTop: '4px' }}>8</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--saffron-primary)', marginTop: '2px' }}>3 happening today</div>
                  </div>
                </div>

                {/* Candidate Discovery Quick Section */}
                <div style={{ padding: '24px', borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--pure-white)', border: '1px solid var(--light-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                      Pre-Screened Top Matches (85%+ Readiness)
                    </h3>
                    <button onClick={() => setIndustryTab('candidates')} style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--saffron-primary)' }}>
                      View All Candidates →
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    {candidates.map((can) => (
                      <div
                        key={can.id}
                        onClick={() => setSelectedCandidate(can)}
                        className="interactive-card"
                        style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--light-border)', cursor: 'pointer' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                          <img src={can.avatar} alt={can.name} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} />
                          <div>
                            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--govt-ink)' }}>{can.name}</h4>
                            <div style={{ fontSize: '0.76rem', color: 'var(--muted-dark)' }}>{can.college}</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '8px' }}>
                          <span>Readiness: <strong>{can.readiness}/100</strong></span>
                          <span style={{ color: 'var(--saffron-primary)', fontWeight: 700 }}>{can.matchScore}% Match</span>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                          {can.skills.slice(0, 3).map((s) => (
                            <span key={s} style={{ fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', backgroundColor: 'var(--warm-ivory)' }}>{s}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: CANDIDATES DISCOVERY */}
            {industryTab === 'candidates' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Search and Filters */}
                <div style={{ padding: '20px', borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--pure-white)', border: '1px solid var(--light-border)', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                  <div style={{ flex: 1, minWidth: '240px', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
                    <Search size={18} color="var(--muted-text)" />
                    <input
                      type="text"
                      placeholder="Search talent by skills (React, PyTorch), college, or candidate name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.9rem' }}
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted-dark)' }}>Min Readiness:</span>
                    <select
                      value={minReadiness}
                      onChange={(e) => setMinReadiness(Number(e.target.value))}
                      style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--light-border)', backgroundColor: 'var(--warm-ivory)', fontSize: '0.85rem', fontWeight: 600 }}
                    >
                      <option value={70}>70+ (Competent)</option>
                      <option value={80}>80+ (High Performer)</option>
                      <option value={90}>90+ (Top 2% Elite)</option>
                    </select>
                  </div>
                </div>

                {/* Candidate List Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                  {filteredCandidates.map((can) => (
                    <div
                      key={can.id}
                      className="interactive-card"
                      style={{ padding: '24px', borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--pure-white)', border: '1px solid var(--light-border)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                          <img src={can.avatar} alt={can.name} style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }} />
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--govt-ink)' }}>{can.name}</h4>
                              <ShieldCheck size={14} color="var(--success-green)" />
                            </div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--muted-dark)' }}>{can.degree}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--muted-text)' }}>{can.college}</div>
                          </div>
                        </div>

                        {/* Scores */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                          <div style={{ padding: '8px 12px', borderRadius: '8px', backgroundColor: 'var(--indigo-surface)', border: '1px solid rgba(49,46,129,0.1)' }}>
                            <div style={{ fontSize: '0.68rem', color: 'var(--deep-indigo)', fontWeight: 700 }}>READINESS</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--deep-indigo)' }}>{can.readiness} <span style={{ fontSize: '0.7rem' }}>/100</span></div>
                          </div>
                          <div style={{ padding: '8px 12px', borderRadius: '8px', backgroundColor: 'var(--saffron-light)', border: '1px solid rgba(232,117,22,0.2)' }}>
                            <div style={{ fontSize: '0.68rem', color: 'var(--saffron-primary)', fontWeight: 700 }}>ROLE MATCH</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--saffron-primary)' }}>{can.matchScore}%</div>
                          </div>
                        </div>

                        <div style={{ fontSize: '0.82rem', color: 'var(--muted-dark)', lineHeight: 1.45, marginBottom: '14px', backgroundColor: 'var(--warm-ivory)', padding: '10px', borderRadius: '8px' }}>
                          <strong>AI Match Reason:</strong> {can.matchReason}
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                          {can.skills.map((s) => (
                            <span key={s} style={{ fontSize: '0.72rem', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
                              ✓ {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedCandidate(can)}
                        className="btn-primary"
                        style={{ width: '100%', justifyContent: 'center', padding: '10px' }}
                      >
                        <span>View Candidate Profile</span>
                        <ArrowRight size={14} className="btn-arrow" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: OPPORTUNITIES POSTINGS */}
            {industryTab === 'opportunities' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--govt-ink)' }}>Active Opportunity Postings</h3>
                  <button onClick={() => setIsPostOpportunityOpen(true)} className="btn-primary">
                    <PlusCircle size={16} /> Post Opportunity
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {opportunities.map((opp) => (
                    <div
                      key={opp.id}
                      style={{
                        padding: '20px',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--pure-white)',
                        border: '1px solid var(--light-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '16px'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--govt-ink)' }}>{opp.title}</div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--muted-dark)', marginTop: '2px' }}>
                          {opp.location} • {opp.stipend} • {opp.type}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span className="badge badge-green">Active • Accepting</span>
                        <button
                          onClick={() => setSelectedOpportunity(opp)}
                          className="btn-secondary"
                          style={{ padding: '6px 14px', fontSize: '0.82rem' }}
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: ACADEMIA TIE-UPS */}
            {(industryTab === 'collaboration' || industryTab === 'applications') && (
              <div style={{ padding: '32px', borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--pure-white)', border: '1px solid var(--light-border)' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '12px' }}>
                  Academia Collaboration Portal
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted-dark)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Partner directly with Indian engineering colleges and universities to design specialized curriculum tracks, sponsor capstone student projects, or host faculty immersion workshops.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div style={{ padding: '20px', borderRadius: '12px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>
                      Sponsor a College Capstone
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted-dark)', marginBottom: '14px' }}>
                      Provide real datasets and mentors for 6-month final year student projects.
                    </p>
                    <button onClick={() => showToast('Capstone partnership proposal initiated!', 'success')} className="btn-secondary" style={{ fontSize: '0.82rem' }}>
                      Initiate Program
                    </button>
                  </div>

                  <div style={{ padding: '20px', borderRadius: '12px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>
                      Deliver Industry Guest Lectures
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted-dark)', marginBottom: '14px' }}>
                      Match your senior engineers with university seminars on cloud, cybersecurity, or AI.
                    </p>
                    <button onClick={() => showToast('Speaker profile listed for university discovery!', 'success')} className="btn-secondary" style={{ fontSize: '0.82rem' }}>
                      Register Speaker
                    </button>
                  </div>
                </div>
              </div>
            )}

          </main>
        </div>

      </div>
    </div>
  );
};
