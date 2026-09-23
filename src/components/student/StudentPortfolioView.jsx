import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Share2, Download, ExternalLink, Award, FileCode, CheckCircle2 } from 'lucide-react';

export const StudentPortfolioView = () => {
  const { studentProfile, lang, showToast } = useApp();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Top Banner with Share & Export buttons */}
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
          <span className="badge badge-green" style={{ marginBottom: '6px' }}>
            <ShieldCheck size={12} /> PUBLIC SHAREABLE PASSPORT
          </span>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
            Verified Student Portfolio & Competency Record
          </h2>
          <p style={{ fontSize: '0.86rem', color: 'var(--muted-dark)', marginTop: '2px' }}>
            Public URL: <code style={{ backgroundColor: 'var(--warm-ivory)', padding: '2px 6px', borderRadius: '4px' }}>careersetu.gov.in/p/{studentProfile.id}</code>
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => {
              navigator.clipboard?.writeText(`https://careersetu.gov.in/p/${studentProfile.id}`);
              showToast('Public portfolio link copied to clipboard!', 'success');
            }}
            className="btn-secondary"
          >
            <Share2 size={16} /> Share Link
          </button>
          <button
            onClick={() => showToast('CareerSetu Verified Skill Passport PDF downloaded!', 'success')}
            className="btn-primary"
          >
            <Download size={16} /> Export Verified PDF
          </button>
        </div>
      </div>

      {/* Portfolio Strength & Recruiter Visibility Card */}
      <div
        style={{
          padding: '20px 24px',
          borderRadius: 'var(--radius-lg)',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'var(--indigo-surface)',
              color: 'var(--deep-indigo)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.05rem',
              border: '2px solid rgba(49, 46, 129, 0.2)'
            }}
          >
            78%
          </div>
          <div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              Portfolio Strength: 78%
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--muted-dark)', marginTop: '2px' }}>
              Recommendation: Add one more verified production project to improve your recruiter discovery visibility by 24%.
            </div>
          </div>
        </div>

        <button
          onClick={() => showToast('GitHub repository sync initiated...', 'info')}
          className="btn-secondary"
          style={{ padding: '8px 14px', fontSize: '0.82rem' }}
        >
          <span>Sync Repository</span>
        </button>
      </div>

      {/* Portfolio Card Container */}
      <div
        style={{
          backgroundColor: 'var(--pure-white)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--light-border)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden'
        }}
      >
        {/* Top Passport Header */}
        <div style={{ padding: '36px', background: 'linear-gradient(135deg, rgba(232, 117, 22, 0.08) 0%, rgba(49, 46, 129, 0.08) 100%)', borderBottom: '1px solid var(--light-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <img
              src={studentProfile.avatarUrl}
              alt={studentProfile.name}
              style={{ width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--pure-white)', boxShadow: 'var(--shadow-md)' }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                  {lang === 'hi' ? studentProfile.hindiName : studentProfile.name}
                </h3>
                <span className="badge badge-saffron">SIH26044 Verified</span>
              </div>
              <div style={{ fontSize: '1rem', color: 'var(--muted-dark)', marginTop: '4px' }}>
                {studentProfile.degree} • {studentProfile.institute}
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', marginTop: '8px', maxWidth: '680px', lineHeight: 1.5 }}>
                {studentProfile.summary}
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Body Sections */}
        <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* Projects */}
          <div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '16px' }}>
              Key Technical Projects
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
              {studentProfile.projects.map((p) => (
                <div key={p.title} style={{ padding: '20px', borderRadius: '12px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--govt-ink)' }}>{p.title}</div>
                    <span className="badge badge-green" style={{ fontSize: '0.68rem' }}>Live Demo Verified</span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--muted-dark)', marginBottom: '12px', lineHeight: 1.5 }}>
                    {p.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {p.tech.map((t) => (
                      <span key={t} className="badge badge-indigo" style={{ fontSize: '0.72rem' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '16px' }}>
              Verified Certifications & Accreditations
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {studentProfile.certifications.map((c) => (
                <div key={c.name} style={{ padding: '16px', borderRadius: '10px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <Award size={28} color="var(--saffron-primary)" />
                  <div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--govt-ink)' }}>{c.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted-dark)' }}>{c.issuer} • Issued {c.date}</div>
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
