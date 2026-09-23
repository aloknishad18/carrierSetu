import React from 'react';
import { useApp } from '../../context/AppContext';
import { Briefcase, MapPin, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

export const OpportunitiesSection = () => {
  const { lang, theme } = useApp();

  const opportunityCards = [
    {
      id: 'opp-1',
      title: 'Software Developer Intern',
      org: 'Tech Innovations Lab',
      loc: 'Bengaluru / Remote',
      stipend: '₹35,000 / month',
      match: 94,
      color: '#22C55E',
      skills: ['React', 'Node.js', 'Git']
    },
    {
      id: 'opp-2',
      title: 'Frontend Developer',
      org: 'Bharat Digital Systems',
      loc: 'Hyderabad / Hybrid',
      stipend: '₹40,000 / month',
      match: 88,
      color: '#F97316',
      skills: ['React', 'TypeScript', 'CSS']
    },
    {
      id: 'opp-3',
      title: 'Data Engineering Intern',
      org: 'Analytics Cloud India',
      loc: 'Pune / On-site',
      stipend: '₹30,000 / month',
      match: 76,
      color: '#6366F1',
      skills: ['Python', 'SQL', 'Git']
    }
  ];

  return (
    <section
      id="opportunities"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        position: 'relative',
        transition: 'background-color 350ms ease'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px auto' }}>
          <span className="badge badge-saffron" style={{ marginBottom: '14px' }}>
            {lang === 'hi' ? 'अवसर मिलान' : 'OPPORTUNITY MATCHING'}
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
              fontWeight: 800,
              color: 'var(--govt-ink)',
              marginBottom: '16px',
              lineHeight: 1.18
            }}
          >
            {lang === 'hi' ? 'कौशल आधारित अवसर मिलान।' : 'Opportunities Matched to Your Verified Skills.'}
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--muted-dark)', lineHeight: 1.68 }}>
            {lang === 'hi'
              ? 'बिना कटऑफ के अपनी व्यावहारिक क्षमताओं के आधार पर सीधे इंटर्नशिप और नौकरियों की खोज करें।'
              : 'Discover internships and placements recommended directly by your verified competency matrix.'}
          </p>
        </div>

        {/* 3 Matched Opportunity Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px'
          }}
        >
          {opportunityCards.map((opp) => (
            <div
              key={opp.id}
              className="card-glass"
              style={{
                padding: '32px 28px',
                borderRadius: 'var(--radius-xl)',
                position: 'relative'
              }}
            >
              {/* Match Badge Top Right */}
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: `${opp.color}15`,
                  color: opp.color,
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  border: `1px solid ${opp.color}40`
                }}
              >
                {opp.match}% Match
              </div>

              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--saffron-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <Briefcase size={24} color="var(--saffron-primary)" />
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '6px' }}>
                {opp.title}
              </h3>

              <div style={{ fontSize: '0.9rem', color: 'var(--muted-text)', fontWeight: 600, marginBottom: '16px' }}>
                {opp.org} • {opp.loc}
              </div>

              <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--saffron-primary)', marginBottom: '20px' }}>
                {opp.stipend}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {opp.skills.map((sk) => (
                  <span
                    key={sk}
                    style={{
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--warm-ivory)',
                      border: '1px solid var(--light-border)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--govt-ink)'
                    }}
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
