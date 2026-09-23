import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, MapPin, Briefcase, Calendar, Award, CheckCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const OpportunityModal = () => {
  const { selectedOpportunity, setSelectedOpportunity, applyToOpportunity, lang, t, applications, navigateToIntelligence } = useApp();

  if (!selectedOpportunity) return null;

  const opp = selectedOpportunity;
  const isApplied = applications.some((a) => a.opportunityId === opp.id);

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
      onClick={() => setSelectedOpportunity(null)}
    >
      <div
        className="fade-in"
        style={{
          backgroundColor: 'var(--pure-white)',
          borderRadius: 'var(--radius-xl)',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--light-border)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '24px 28px',
            borderBottom: '1px solid var(--light-border)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <img
              src={opp.companyLogo}
              alt={opp.company}
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                objectFit: 'cover',
                border: '1px solid var(--light-border)'
              }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--muted-dark)' }}>{opp.company}</span>
                {opp.verifiedCompany && (
                  <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>
                    <ShieldCheck size={12} /> {lang === 'hi' ? 'सत्यापित कंपनी' : 'Verified Recruiter'}
                  </span>
                )}
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '2px', color: 'var(--govt-ink)' }}>
                {lang === 'hi' && opp.titleHi ? opp.titleHi : opp.title}
              </h3>
            </div>
          </div>

          <button
            onClick={() => setSelectedOpportunity(null)}
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

        {/* Modal Body */}
        <div style={{ padding: '24px 28px' }}>
          
          {/* Match Score Banner */}
          <div
            style={{
              backgroundColor: 'var(--indigo-surface)',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
              border: '1px solid rgba(49, 46, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px'
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: 'var(--deep-indigo)',
                color: 'var(--pure-white)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1rem',
                flexShrink: 0
              }}
            >
              {opp.matchScore}%
              <span style={{ fontSize: '0.55rem', fontWeight: 500 }}>MATCH</span>
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--deep-indigo)' }}>
                {lang === 'hi' ? 'कौशल अनुकूलता विश्लेषण' : 'Competency Match Rationale:'}
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted-dark)', marginTop: '2px', lineHeight: 1.4 }}>
                {opp.whyMatch}
              </p>
            </div>
          </div>

          {/* Key Facts Pill Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '12px',
              marginBottom: '24px'
            }}
          >
            <div style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--muted-text)', fontWeight: 600 }}>{t.opportunities.stipend}</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--govt-ink)', marginTop: '2px' }}>{opp.stipend}</div>
            </div>
            <div style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--muted-text)', fontWeight: 600 }}>{t.opportunities.location}</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--govt-ink)', marginTop: '2px' }}>{opp.location}</div>
            </div>
            <div style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--muted-text)', fontWeight: 600 }}>Work Mode</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--govt-ink)', marginTop: '2px' }}>{opp.type}</div>
            </div>
            <div style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--muted-text)', fontWeight: 600 }}>{t.opportunities.applyBefore}</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--bharat-red)', marginTop: '2px' }}>{opp.deadlineDays} {t.opportunities.daysLeft}</div>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px', color: 'var(--govt-ink)' }}>
              {lang === 'hi' ? 'अवसर विवरण एवं भूमिका' : 'Role Overview & Responsibilities'}
            </h4>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--muted-dark)' }}>
              {opp.description}
            </p>
          </div>

          {/* Required Skills Matrix */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '10px', color: 'var(--govt-ink)' }}>
              {lang === 'hi' ? 'आवश्यक कौशल एवं पात्रता' : 'Evaluated Competency Requirements'}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {opp.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--warm-ivory)',
                    border: '1px solid var(--light-border)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--govt-ink)'
                  }}
                >
                  <CheckCircle size={14} color="var(--success-green)" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Disclaimer (SIH Requirement) */}
          <div
            style={{
              padding: '12px',
              borderRadius: '8px',
              backgroundColor: 'var(--warm-orange-light)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              fontSize: '0.76rem',
              color: '#92400E',
              lineHeight: 1.4,
              marginBottom: '20px'
            }}
          >
            <strong>{lang === 'hi' ? 'पारदर्शिता सूचना:' : 'Notice:'}</strong>{' '}
            {t.smartMatch.disclaimer}
          </div>

          {/* PREPARE FOR THIS OPPORTUNITY BANNER */}
          <div
            style={{
              padding: '16px 20px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--saffron-light)',
              border: '1px solid rgba(232, 117, 22, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px',
              marginBottom: '24px'
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', fontWeight: 800, color: 'var(--saffron-primary)' }}>
                <Sparkles size={13} /> {lang === 'hi' ? 'करियर इंटेलिजेंस तैयारी' : 'PREPARE FOR THIS OPPORTUNITY'}
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--govt-ink)', marginTop: '2px' }}>
                {lang === 'hi' ? 'इस अवसर के लिए अपनी तत्परता का विश्लेषण करें' : 'Analyze your readiness and preparation targets'}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted-dark)', marginTop: '2px' }}>
                {lang === 'hi' ? 'कौशल अंतर, रिज़्यूमे सुझाव एवं 4-सप्ताह योजना प्राप्त करें' : 'Compares profile + opportunity requirements for personalized guidance.'}
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedOpportunity(null);
                const compId = opp.company.toLowerCase().includes('tcs')
                  ? 'tcs'
                  : opp.company.toLowerCase().includes('infosys')
                  ? 'infosys'
                  : opp.company.toLowerCase().includes('razorpay')
                  ? 'razorpay'
                  : 'tcs';
                navigateToIntelligence({ companyId: compId, roleId: 'software-dev', opp }, 'company');
              }}
              className="btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.84rem' }}
            >
              <Sparkles size={14} />
              <span>{lang === 'hi' ? 'मेरी तत्परता का विश्लेषण करें' : 'Analyze My Readiness'}</span>
            </button>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button
              onClick={() => setSelectedOpportunity(null)}
              className="btn-secondary"
            >
              {lang === 'hi' ? 'बंद करें' : 'Close'}
            </button>
            <button
              onClick={() => {
                applyToOpportunity(opp);
                setSelectedOpportunity(null);
              }}
              className="btn-primary"
              disabled={isApplied}
              style={{
                backgroundColor: isApplied ? 'var(--success-green)' : 'var(--saffron-primary)',
                opacity: isApplied ? 0.9 : 1
              }}
            >
              <span>
                {isApplied
                  ? (lang === 'hi' ? 'आवेदन जमा हो चुका है ✓' : 'Already Applied ✓')
                  : (lang === 'hi' ? 'अभी आवेदन करें →' : 'Apply Now →')}
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
