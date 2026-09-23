import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, CheckCircle2, Award, ExternalLink, Code, Layers, FileCheck } from 'lucide-react';

export const StudentSkillProfileView = () => {
  const { studentProfile, lang } = useApp();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Header Profile Card */}
      <div
        style={{
          padding: '32px',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--pure-white)',
          border: '1px solid var(--light-border)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img
            src={studentProfile.avatarUrl}
            alt={studentProfile.name}
            style={{ width: '84px', height: '84px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--saffron-primary)' }}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                {lang === 'hi' ? studentProfile.hindiName : studentProfile.name}
              </h2>
              <span className="badge badge-green">
                <ShieldCheck size={14} /> National Verified Passport
              </span>
            </div>
            <div style={{ fontSize: '0.92rem', color: 'var(--muted-dark)', marginTop: '4px' }}>
              {studentProfile.degree} • {studentProfile.institute}
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--muted-text)', marginTop: '6px', maxWidth: '600px' }}>
              {studentProfile.summary}
            </p>
          </div>
        </div>

        {/* Readiness Gauge */}
        <div
          style={{
            padding: '18px 24px',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--indigo-surface)',
            border: '1px solid rgba(49, 46, 129, 0.15)',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--deep-indigo)' }}>
            CAREER READINESS INDEX
          </div>
          <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--deep-indigo)', lineHeight: 1, marginTop: '4px' }}>
            {studentProfile.readinessScore} <span style={{ fontSize: '1rem', fontWeight: 500 }}>/ 100</span>
          </div>
          <div style={{ fontSize: '0.74rem', color: 'var(--success-green)', fontWeight: 600, marginTop: '4px' }}>
            Tier-1 Engineering Ready
          </div>
        </div>
      </div>

      {/* 5 Core Competency Metrics Breakdown */}
      <div
        style={{
          padding: '28px',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--pure-white)',
          border: '1px solid var(--light-border)'
        }}
      >
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '20px' }}>
          {lang === 'hi' ? 'दक्षता वितरण मैट्रिक्स' : 'Holistic Competency Distribution'}
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {Object.entries(studentProfile.categories).map(([key, cat]) => (
            <div key={key} style={{ padding: '16px', borderRadius: '10px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                  {lang === 'hi' ? cat.hindiLabel : cat.label}
                </span>
                <span style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--saffron-primary)' }}>
                  {cat.score}%
                </span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--light-border)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${cat.score}%`, height: '100%', backgroundColor: 'var(--saffron-primary)', borderRadius: '4px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Matrix (Verified vs Developing) */}
      <div
        style={{
          padding: '28px',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--pure-white)',
          border: '1px solid var(--light-border)'
        }}
      >
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '20px' }}>
          {lang === 'hi' ? 'सत्यापित व्यक्तिगत कौशल' : 'Verified Competencies (Evaluated)'}
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
          {studentProfile.skills.map((skill) => (
            <div
              key={skill.name}
              style={{
                padding: '14px',
                borderRadius: '8px',
                backgroundColor: 'var(--warm-ivory)',
                border: '1px solid var(--light-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--govt-ink)' }}>{skill.name}</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--muted-text)' }}>{skill.category} • {skill.level}</div>
              </div>
              <span className={skill.verified ? 'badge badge-green' : 'badge badge-orange'}>
                {skill.verified ? '✓ Verified' : 'Self-declared'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Capstone Projects */}
      <div
        style={{
          padding: '28px',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--pure-white)',
          border: '1px solid var(--light-border)'
        }}
      >
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '20px' }}>
          {lang === 'hi' ? 'सत्यापित प्रोजेक्ट्स' : 'Verified Capstone & Open Source Projects'}
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {studentProfile.projects.map((proj) => (
            <div
              key={proj.title}
              style={{
                padding: '20px',
                borderRadius: '12px',
                backgroundColor: 'var(--warm-ivory)',
                border: '1px solid var(--light-border)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--govt-ink)' }}>{proj.title}</h4>
                <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>
                  Code Verified
                </span>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--muted-dark)', lineHeight: 1.5, marginBottom: '14px' }}>
                {proj.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {proj.tech.map((t) => (
                  <span key={t} className="badge badge-indigo" style={{ fontSize: '0.72rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
