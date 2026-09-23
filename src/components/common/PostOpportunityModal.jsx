import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, ArrowRight, ArrowLeft, Check, Sparkles, Building } from 'lucide-react';

export const PostOpportunityModal = () => {
  const { isPostOpportunityOpen, setIsPostOpportunityOpen, addNewOpportunity, lang } = useApp();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    title: '',
    company: 'NextGen Tech Innovations',
    category: 'Technology',
    type: 'Hybrid',
    location: 'Bengaluru / Hyderabad',
    stipend: '₹35,000 / month',
    duration: '6 Months',
    positions: '4',
    skills: 'React, TypeScript, Node.js, SQL',
    description: 'We are seeking passionate engineering interns to work on real-world cloud applications and AI integrations.',
    eligibility: '3rd or 4th year B.Tech/MCA students with minimum 75% career readiness score.'
  });

  if (!isPostOpportunityOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewOpportunity({
      ...formData,
      skills: formData.skills.split(',').map((s) => s.trim())
    });
    setIsPostOpportunityOpen(false);
    setStep(1);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(28, 27, 26, 0.65)',
        backdropFilter: 'blur(6px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={() => setIsPostOpportunityOpen(false)}
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
          border: '1px solid var(--light-border)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '24px 28px',
            borderBottom: '1px solid var(--light-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <span className="badge badge-indigo" style={{ marginBottom: '6px' }}>
              <Sparkles size={12} /> {lang === 'hi' ? 'नया अवसर निर्माण' : 'Industry Recruiter Wizard'}
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {lang === 'hi' ? 'नया इंटर्नशिप / जॉब पोस्ट करें' : 'Post an Internship or Job Opportunity'}
            </h3>
          </div>
          <button
            onClick={() => setIsPostOpportunityOpen(false)}
            style={{ padding: '6px', borderRadius: '8px', backgroundColor: 'var(--warm-ivory)' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Step Indicator */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--light-border)', backgroundColor: 'var(--warm-ivory)' }}>
          {[
            { num: 1, label: 'Basics & Role' },
            { num: 2, label: 'Skills & Eligibility' },
            { num: 3, label: 'Review & Publish' }
          ].map((s) => (
            <div
              key={s.num}
              style={{
                flex: 1,
                padding: '12px 16px',
                textAlign: 'center',
                fontSize: '0.8rem',
                fontWeight: step === s.num ? 700 : 500,
                color: step === s.num ? 'var(--saffron-primary)' : 'var(--muted-text)',
                borderBottom: step === s.num ? '2px solid var(--saffron-primary)' : 'none',
                backgroundColor: step === s.num ? 'var(--pure-white)' : 'transparent'
              }}
            >
              Step 0{s.num}: {s.label}
            </div>
          ))}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} style={{ padding: '24px 28px' }}>
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px', color: 'var(--govt-ink)' }}>
                  Opportunity Title *
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="e.g. Full-Stack Developer Intern, Cloud Engineer"
                  value={formData.title}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--light-border)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--light-border)', fontSize: '0.9rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--light-border)', fontSize: '0.9rem', backgroundColor: 'var(--pure-white)' }}
                  >
                    <option>Technology</option>
                    <option>Data</option>
                    <option>Engineering</option>
                    <option>Design</option>
                    <option>Healthcare</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                    Work Mode
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--light-border)', fontSize: '0.9rem', backgroundColor: 'var(--pure-white)' }}
                  >
                    <option>Hybrid</option>
                    <option>Remote</option>
                    <option>In-Office</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                    Monthly Stipend / Compensation
                  </label>
                  <input
                    type="text"
                    name="stipend"
                    value={formData.stipend}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--light-border)', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--light-border)', fontSize: '0.9rem' }}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                  Required Competencies (Comma separated) *
                </label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g. React, Node.js, Docker, SQL"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--light-border)', fontSize: '0.9rem' }}
                />
                <span style={{ fontSize: '0.74rem', color: 'var(--muted-text)', marginTop: '4px', display: 'block' }}>
                  CareerSetu AI will automatically map these against verified student skill profiles.
                </span>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                  Candidate Eligibility & Criteria
                </label>
                <input
                  type="text"
                  name="eligibility"
                  value={formData.eligibility}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--light-border)', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px' }}>
                  Job Description & Learning Outcomes
                </label>
                <textarea
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--light-border)', fontSize: '0.9rem' }}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ padding: '16px', borderRadius: '10px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--light-border)' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--govt-ink)' }}>{formData.title || 'Untitled Role'}</h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted-dark)', marginTop: '4px' }}>
                  {formData.company} • {formData.location} • {formData.type}
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--saffron-primary)', marginTop: '8px' }}>
                  {formData.stipend}
                </div>
                <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {formData.skills.split(',').map((s) => (
                    <span key={s} className="badge badge-indigo">
                      {s.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ padding: '12px', borderRadius: '8px', backgroundColor: 'var(--success-light)', border: '1px solid rgba(21, 128, 61, 0.2)', fontSize: '0.8rem', color: 'var(--success-green)' }}>
                ✓ Verified posting complies with Smart India Hackathon statutory minimum stipend guidelines.
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '28px', paddingTop: '16px', borderTop: '1px solid var(--light-border)' }}>
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="btn-secondary"
              >
                <ArrowLeft size={16} /> Back
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="btn-primary"
              >
                Continue <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="submit"
                className="btn-primary"
                style={{ backgroundColor: 'var(--success-green)' }}
              >
                <Check size={16} /> Publish Opportunity
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
