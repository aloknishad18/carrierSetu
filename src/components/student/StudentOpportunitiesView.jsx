import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, MapPin, Briefcase, Calendar, Filter, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const StudentOpportunitiesView = () => {
  const { opportunities, setSelectedOpportunity, applyToOpportunity, lang, t, applications, navigateToIntelligence } = useApp();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const filtered = opportunities.filter((opp) => {
    const matchesSearch =
      opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCat = selectedCategory === 'All' || opp.category === selectedCategory;
    const matchesType = selectedType === 'All' || opp.type === selectedType;

    return matchesSearch && matchesCat && matchesType;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* Search and Advanced Filters Bar */}
      <div
        style={{
          padding: '24px',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--pure-white)',
          border: '1px solid var(--light-border)',
          boxShadow: 'var(--shadow-xs)'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
          
          {/* Search Input */}
          <div
            style={{
              flex: 1,
              minWidth: '240px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 16px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--warm-ivory)',
              border: '1px solid var(--light-border)'
            }}
          >
            <Search size={18} color="var(--muted-text)" />
            <input
              type="text"
              placeholder={lang === 'hi' ? 'भूमिका, कंपनी या कौशल खोजें...' : 'Search by role, company, or skills (e.g. React, Python)...'}
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

          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '10px 14px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--light-border)',
              backgroundColor: 'var(--warm-ivory)',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: 'var(--govt-ink)',
              cursor: 'pointer'
            }}
          >
            <option value="All">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Engineering">Engineering</option>
            <option value="Data">Data & AI</option>
            <option value="Design">Design</option>
            <option value="Healthcare">Healthcare</option>
          </select>

          {/* Work Mode Dropdown */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{
              padding: '10px 14px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--light-border)',
              backgroundColor: 'var(--warm-ivory)',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: 'var(--govt-ink)',
              cursor: 'pointer'
            }}
          >
            <option value="All">All Work Modes</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
            <option value="In-Office">In-Office</option>
          </select>

        </div>
      </div>

      {/* Opportunities Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {filtered.map((opp) => {
          const isApplied = applications.some((a) => a.opportunityId === opp.id);
          return (
            <div
              key={opp.id}
              className="interactive-card"
              style={{
                padding: '24px',
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--pure-white)',
                border: '1px solid var(--light-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                      src={opp.companyLogo}
                      alt={opp.company}
                      style={{ width: '48px', height: '48px', borderRadius: '10px', objectFit: 'cover', border: '1px solid var(--light-border)' }}
                    />
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--muted-dark)' }}>{opp.company}</div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--govt-ink)' }}>{opp.title}</h3>
                    </div>
                  </div>

                  <span className="badge badge-indigo" style={{ fontSize: '0.74rem' }}>
                    <Sparkles size={12} /> {opp.matchScore}% Match
                  </span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '0.82rem', color: 'var(--muted-dark)', marginBottom: '14px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={14} /> {opp.location}
                  </span>
                  <span className="badge badge-saffron" style={{ fontSize: '0.7rem' }}>
                    {opp.type}
                  </span>
                </div>

                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '14px' }}>
                  {opp.stipend}
                </div>

                <p style={{ fontSize: '0.84rem', color: 'var(--muted-dark)', lineHeight: 1.5, marginBottom: '16px' }}>
                  {opp.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                  {opp.skills.map((sk) => (
                    <span key={sk} style={{ fontSize: '0.72rem', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)', color: 'var(--govt-ink)', fontWeight: 600 }}>
                      {sk}
                    </span>
                  ))}
                </div>

                {/* Expandable Why You Match */}
                <div style={{ padding: '10px 12px', borderRadius: '8px', backgroundColor: 'var(--indigo-surface)', marginBottom: '16px', border: '1px solid rgba(49, 46, 129, 0.12)' }}>
                  <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--deep-indigo)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Sparkles size={11} /> WHY YOU MATCH:
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--govt-ink)', lineHeight: 1.45, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span>✓ Strong verified React & modern JS score (92%)</span>
                    <span>✓ Capstone project demonstrates scalable API integrations</span>
                    <span>✓ High algorithmic benchmark (+4 assessment points)</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--light-border)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--bharat-red)', fontWeight: 600 }}>
                  <Calendar size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  {opp.deadlineDays} days left
                </span>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => {
                      const compId = opp.company.toLowerCase().includes('tcs')
                        ? 'tcs'
                        : opp.company.toLowerCase().includes('infosys')
                        ? 'infosys'
                        : opp.company.toLowerCase().includes('razorpay')
                        ? 'razorpay'
                        : 'tcs';
                      navigateToIntelligence({ companyId: compId, roleId: 'software-dev', opp }, 'company');
                    }}
                    className="btn-secondary"
                    style={{ padding: '6px 10px', fontSize: '0.78rem', color: 'var(--deep-indigo)', borderColor: 'rgba(49, 46, 129, 0.2)' }}
                    title="Prepare for this opportunity"
                  >
                    <Sparkles size={12} />
                    <span>{lang === 'hi' ? 'तैयारी विश्लेषण' : 'Analyze Readiness'}</span>
                  </button>
                  <button
                    onClick={() => setSelectedOpportunity(opp)}
                    className="btn-secondary"
                    style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                  >
                    View
                  </button>
                  <button
                    onClick={() => applyToOpportunity(opp)}
                    className="btn-primary"
                    style={{ padding: '6px 14px', fontSize: '0.8rem', backgroundColor: isApplied ? 'var(--success-green)' : 'var(--saffron-primary)' }}
                    disabled={isApplied}
                  >
                    {isApplied ? 'Applied ✓' : 'Quick Apply'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
