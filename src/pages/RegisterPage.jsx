import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp, ROLE_DASHBOARDS } from '../context/AppContext';
import {
  GraduationCap,
  Briefcase,
  User,
  Building2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  Globe,
  AlertCircle
} from 'lucide-react';

export const RegisterPage = () => {
  const { registerUser, lang, setLang, showToast } = useApp();
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState('student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [organization, setOrganization] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const roles = [
    {
      id: 'student',
      title: lang === 'hi' ? 'छात्र (Student)' : 'Student / Learner',
      desc: lang === 'hi' ? 'अपने कौशल खोजें और सही अवसर पाएं।' : 'Discover your skills, improve readiness, and connect with opportunities.',
      icon: GraduationCap,
      color: 'var(--saffron-primary)'
    },
    {
      id: 'industry',
      title: lang === 'hi' ? 'उद्योग / रिक्रूटर' : 'Industry & Recruiter',
      desc: lang === 'hi' ? 'कौशल-आधारित प्रतिभा की खोज करें।' : 'Discover skill-matched talent and post high-relevance opportunities.',
      icon: Briefcase,
      color: '#0D9488'
    },
    {
      id: 'academia',
      title: lang === 'hi' ? 'शिक्षाविद / संकाय' : 'Academia / Faculty',
      desc: lang === 'hi' ? 'छात्रों के कौशल विकास में सहायता करें।' : 'Monitor cohort skill analytics and support student career development.',
      icon: User,
      color: '#4338CA'
    },
    {
      id: 'institution',
      title: lang === 'hi' ? 'संस्थान प्रबंधन' : 'Institution Admin',
      desc: lang === 'hi' ? 'संस्थागत प्लेसमेंट आंकड़ों की निगरानी करें।' : 'Track institutional skill analytics and placement readiness.',
      icon: Building2,
      color: '#D97706'
    }
  ];

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage(lang === 'hi' ? 'कृपया अपना पूरा नाम दर्ज करें।' : 'Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage(lang === 'hi' ? 'कृपया एक वैध ईमेल दर्ज करें।' : 'Please enter a valid email address.');
      return;
    }
    if (!password || password.length < 6) {
      setErrorMessage(lang === 'hi' ? 'पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।' : 'Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage(lang === 'hi' ? 'पासवर्ड मेल नहीं खाते हैं।' : 'Passwords do not match.');
      return;
    }

    setIsLoading(true);
    try {
      const data = await registerUser({
        name: name.trim(),
        email: email.trim(),
        password,
        role: selectedRole,
        organization: organization.trim()
      });

      showToast(
        lang === 'hi' ? 'खाता सफलतापूर्वक बनाया गया!' : 'Account created successfully! Welcome to CareerSetu.',
        'success'
      );

      const targetPath = ROLE_DASHBOARDS[data.user.role] || '/portal/student/dashboard';
      navigate(targetPath);
    } catch (err) {
      setErrorMessage(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--warm-ivory)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'background-color 350ms ease'
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--light-border)',
          backgroundColor: 'var(--pure-white)'
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #F97316 0%, #312E81 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: 800
            }}
          >
            CS
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
            Career<span style={{ color: 'var(--saffron-primary)' }}>Setu</span>
          </span>
          <span className="badge badge-saffron" style={{ fontSize: '0.65rem' }}>SIH26044</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', border: '1px solid var(--light-border)', borderRadius: 'var(--radius-full)', padding: '2px 6px' }}>
            <Globe size={14} color="var(--saffron-primary)" style={{ marginLeft: '4px' }} />
            <button onClick={() => setLang('en')} style={{ padding: '2px 6px', fontSize: '0.78rem', fontWeight: lang === 'en' ? 800 : 500, color: lang === 'en' ? 'var(--saffron-primary)' : 'var(--muted-dark)' }}>EN</button>
            <button onClick={() => setLang('hi')} style={{ padding: '2px 6px', fontSize: '0.78rem', fontWeight: lang === 'hi' ? 800 : 500, color: lang === 'hi' ? 'var(--saffron-primary)' : 'var(--muted-dark)' }}>HI</button>
          </div>

          <div style={{ fontSize: '0.86rem', color: 'var(--muted-dark)' }}>
            {lang === 'hi' ? 'पहले से खाता है?' : 'Already have an account?'}{' '}
            <Link to="/login" style={{ color: 'var(--saffron-primary)', fontWeight: 800, textDecoration: 'none' }}>
              {lang === 'hi' ? 'साइन इन करें' : 'Sign In'}
            </Link>
          </div>
        </div>
      </header>

      {/* Registration Card */}
      <div
        style={{
          flex: 1,
          maxWidth: '640px',
          width: '100%',
          margin: '0 auto',
          padding: '40px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div
          className="card-glass"
          style={{
            padding: '40px 36px',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-xl)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--saffron-light)',
                color: 'var(--saffron-primary)',
                fontSize: '0.78rem',
                fontWeight: 800,
                marginBottom: '12px'
              }}
            >
              <Sparkles size={14} />
              <span>JOIN CAREERSETU</span>
            </div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '6px' }}>
              {lang === 'hi' ? 'खाता बनाएं' : 'Create your account'}
            </h1>
            <p style={{ fontSize: '0.94rem', color: 'var(--muted-dark)' }}>
              {lang === 'hi' ? 'कौशल और अवसरों के राष्ट्रीय मंच से जुड़ें।' : 'Connect with India’s intelligent skill & career platform.'}
            </p>
          </div>

          {errorMessage && (
            <div
              style={{
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#EF4444',
                fontSize: '0.86rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px'
              }}
            >
              <AlertCircle size={18} style={{ flexShrink: 0 }} />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Role Selection */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '10px' }}>
                {lang === 'hi' ? 'अपनी भूमिका चुनें' : 'Select Your Role'}
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                {roles.map((r) => {
                  const isSelected = selectedRole === r.id;
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setSelectedRole(r.id)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: isSelected ? 'var(--pure-white)' : 'transparent',
                        border: isSelected ? `2px solid ${r.color}` : '1px solid var(--light-border)',
                        boxShadow: isSelected ? 'var(--shadow-xs)' : 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        textAlign: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      {React.createElement(r.icon, { size: 20, color: isSelected ? r.color : 'var(--muted-text)' })}
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--govt-ink)' }}>{r.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Name */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Aarav Sharma"
                required
                style={{ width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)', color: 'var(--govt-ink)', fontSize: '0.96rem', outline: 'none' }}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@example.com"
                required
                style={{ width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)', color: 'var(--govt-ink)', fontSize: '0.96rem', outline: 'none' }}
              />
            </div>

            {/* Password & Confirm */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>Password</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 6 characters"
                    required
                    style={{ width: '100%', padding: '12px 38px 12px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)', color: 'var(--govt-ink)', fontSize: '0.96rem', outline: 'none' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--muted-text)', cursor: 'pointer' }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>Confirm Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  required
                  style={{ width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)', color: 'var(--govt-ink)', fontSize: '0.96rem', outline: 'none' }}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '1rem',
                borderRadius: 'var(--radius-md)',
                justifyContent: 'center',
                marginTop: '8px'
              }}
            >
              {isLoading ? (
                <span>Creating Account...</span>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
