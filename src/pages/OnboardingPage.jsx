import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp, ROLE_DASHBOARDS } from '../context/AppContext';
import {
  UserCheck,
  Building2,
  GraduationCap,
  Landmark,
  Shield,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const OnboardingPage = () => {
  const { user, lang, completeOnboarding, showToast } = useApp();
  const navigate = useNavigate();

  const [role, setRole] = useState('student');
  const [fullName, setFullName] = useState(user?.name || '');
  const [institution, setInstitution] = useState('Indian Institute of Technology, Delhi');
  const [course, setCourse] = useState('B.Tech');
  const [branch, setBranch] = useState('Computer Science & Engineering');
  const [graduationYear, setGraduationYear] = useState('2026');
  const [semester, setSemester] = useState('7th Semester');
  const [organization, setOrganization] = useState('');
  const [loading, setLoading] = useState(false);

  const rolesList = [
    { id: 'student', label: lang === 'hi' ? 'छात्र (Student)' : 'Student', icon: UserCheck, desc: 'Skill mapping, career guidance, internships & placement matching.' },
    { id: 'industry', label: lang === 'hi' ? 'उद्योग / रिक्रूटर' : 'Industry / Recruiter', icon: Building2, desc: 'Talent discovery, skill matching, and posting opportunities.' },
    { id: 'academia', label: lang === 'hi' ? 'संकाय / शिक्षाविद' : 'Faculty / Academia', icon: GraduationCap, desc: 'Student skill monitoring, curriculum alignment, and mentorship.' },
    { id: 'institution', label: lang === 'hi' ? 'संस्थान प्रबंधन' : 'Institution Admin', icon: Landmark, desc: 'Institutional skill analytics and placement tracking.' },
    { id: 'governance', label: lang === 'hi' ? 'प्रशासन (Governance)' : 'Platform Governance', icon: Shield, desc: 'Nationwide skill insights and platform monitoring.' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await completeOnboarding({
        role,
        name: fullName || user?.email?.split('@')[0] || 'Verified Member',
        institution,
        course,
        branch,
        graduationYear,
        semester,
        organization: organization || institution
      });

      showToast(
        lang === 'hi' ? 'प्रोफ़ाइल सफलतापूर्वक बनाई गई!' : 'Profile created successfully!',
        'success'
      );

      const targetPath = ROLE_DASHBOARDS[role] || '/portal/student/dashboard';
      navigate(targetPath);
    } catch (err) {
      showToast(err.message || 'Could not complete onboarding', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--warm-ivory)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 16px',
        transition: 'background-color 350ms ease'
      }}
    >
      <div
        className="card-glass"
        style={{
          width: '100%',
          maxWidth: '680px',
          padding: '44px 40px',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-xl)'
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--saffron-light)',
              color: 'var(--saffron-primary)',
              fontSize: '0.8rem',
              fontWeight: 800,
              marginBottom: '16px'
            }}
          >
            <Sparkles size={16} />
            <span>SIH26044 • ONBOARDING</span>
          </div>

          <h1 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '8px' }}>
            {lang === 'hi' ? 'CareerSetu में आपका स्वागत है' : 'Welcome to CareerSetu'}
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--muted-dark)' }}>
            {lang === 'hi'
              ? '"आइए आपकी करियर यात्रा को व्यक्तिगत बनाएं।"'
              : '"Let\'s personalize your career journey."'}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Step 1: Role Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '12px' }}>
              {lang === 'hi' ? 'आपको कौन सा विवरण सबसे अच्छा वर्णित करता है?' : 'What describes you best?'}
            </label>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {rolesList.map((r) => {
                const isSelected = role === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRole(r.id)}
                    style={{
                      padding: '14px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isSelected ? 'var(--pure-white)' : 'transparent',
                      border: isSelected ? '2px solid var(--saffron-primary)' : '1px solid var(--light-border)',
                      boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 200ms ease'
                    }}
                  >
                    {React.createElement(r.icon, {
                      size: 20,
                      color: isSelected ? 'var(--saffron-primary)' : 'var(--muted-text)'
                    })}
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--govt-ink)' }}>{r.label}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--muted-text)', marginTop: '2px', lineHeight: 1.3 }}>{r.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Student Specific Fields */}
          {role === 'student' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '12px', borderTop: '1px solid var(--light-border)' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Aarav Sharma"
                  required
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)', color: 'var(--govt-ink)', fontSize: '0.94rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>College / Institution</label>
                <input
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="Indian Institute of Technology, Delhi"
                  required
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)', color: 'var(--govt-ink)', fontSize: '0.94rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>Course / Degree</label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)', color: 'var(--govt-ink)', fontSize: '0.94rem' }}
                  >
                    <option value="B.Tech">B.Tech</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="B.Sc CS">B.Sc Computer Science</option>
                    <option value="Diploma">Diploma Engineering</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>Branch / Specialization</label>
                  <input
                    type="text"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    placeholder="Computer Science Engineering"
                    required
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)', color: 'var(--govt-ink)', fontSize: '0.94rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>Graduation Year</label>
                  <select
                    value={graduationYear}
                    onChange={(e) => setGraduationYear(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)', color: 'var(--govt-ink)', fontSize: '0.94rem' }}
                  >
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>Current Semester</label>
                  <select
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)', color: 'var(--govt-ink)', fontSize: '0.94rem' }}
                  >
                    <option value="5th Semester">5th Semester</option>
                    <option value="6th Semester">6th Semester</option>
                    <option value="7th Semester">7th Semester</option>
                    <option value="8th Semester">8th Semester</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Non-Student Organization Field */}
          {role !== 'student' && (
            <div style={{ paddingTop: '12px', borderTop: '1px solid var(--light-border)' }}>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>Organization / Company Name</label>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Tech Innovations Lab / AICTE Cell"
                required
                style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)', color: 'var(--govt-ink)', fontSize: '0.94rem' }}
              />
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{
              width: '100%',
              padding: '14px',
              fontSize: '1rem',
              borderRadius: 'var(--radius-md)',
              justifyContent: 'center'
            }}
          >
            {loading ? (
              <span>Saving Profile...</span>
            ) : (
              <>
                <span>Complete Profile & Open Portal</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
