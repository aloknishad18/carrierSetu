import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp, ROLE_DASHBOARDS } from '../context/AppContext';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  Compass,
  Target,
  Map,
  Briefcase,
  UserCheck,
  AlertCircle,
  Sun,
  Moon,
  Globe
} from 'lucide-react';

export const LoginPage = () => {
  const { lang, setLang, theme, toggleTheme, loginWithPassword, showToast } = useApp();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Pre-configured SIH Demo Credentials Map
  const demoCredentials = {
    student: { email: 'student@careersetuu.demo', pass: 'Student@123', label: 'Student' },
    industry: { email: 'industry@careersetuu.demo', pass: 'Industry@123', label: 'Industry' },
    academia: { email: 'academia@careersetuu.demo', pass: 'Academia@123', label: 'Academia' },
    institution: { email: 'institution@careersetuu.demo', pass: 'Institution@123', label: 'Institution' },
    governance: { email: 'governance@careersetuu.demo', pass: 'Governance@123', label: 'Governance' }
  };

  const handleFillDemo = (roleKey) => {
    const creds = demoCredentials[roleKey];
    if (creds) {
      setEmail(creds.email);
      setPassword(creds.pass);
      setErrorMessage('');
      showToast(`Populated ${creds.label} demo credentials. Click Sign In to test.`, 'info');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setErrorMessage(lang === 'hi' ? 'कृपया अपना ईमेल दर्ज करें।' : 'Please enter your email.');
      return;
    }
    if (!email.includes('@')) {
      setErrorMessage(lang === 'hi' ? 'कृपया एक वैध ईमेल दर्ज करें।' : 'Please enter a valid email address.');
      return;
    }
    if (!password) {
      setErrorMessage(lang === 'hi' ? 'कृपया अपना पासवर्ड दर्ज करें।' : 'Please enter your password.');
      return;
    }

    setLoading(true);
    try {
      const data = await loginWithPassword(email.trim(), password);
      showToast(
        lang === 'hi' ? `सफलतापूर्वक साइन इन किया गया!` : `Signed in successfully! Welcome back, ${data.user.name}.`,
        'success'
      );

      const targetPath = ROLE_DASHBOARDS[data.user.role] || '/portal/student/dashboard';
      navigate(targetPath);
    } catch (err) {
      setErrorMessage(err.message || 'Incorrect email or password.');
    } finally {
      setLoading(false);
    }
  };

  const storyNodes = [
    { label: lang === 'hi' ? '1. छात्र प्रोफ़ाइल' : '1. Student Profile', icon: UserCheck, color: '#F97316' },
    { label: lang === 'hi' ? '2. कौशल मूल्यांकन' : '2. Skill Assessment', icon: Compass, color: '#6366F1' },
    { label: lang === 'hi' ? '3. कौशल अंतर इंजन' : '3. Skill Gap Engine', icon: Target, color: '#EF4444' },
    { label: lang === 'hi' ? '4. करियर रोडमैप' : '4. Career Roadmap', icon: Map, color: '#0D9488' },
    { label: lang === 'hi' ? '5. सत्यापित अवसर' : '5. Verified Opportunity', icon: Briefcase, color: '#22C55E' }
  ];

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
      {/* Header controls */}
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={toggleTheme}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--light-border)',
              backgroundColor: 'var(--pure-white)',
              color: 'var(--govt-ink)',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {theme === 'dark' ? <Sun size={14} color="#F97316" /> : <Moon size={14} color="#6366F1" />}
            <span>{theme === 'dark' ? '☀ Light' : '☾ Dark'}</span>
          </button>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', border: '1px solid var(--light-border)', borderRadius: 'var(--radius-full)', padding: '2px 6px' }}>
            <Globe size={14} color="var(--saffron-primary)" style={{ marginLeft: '4px' }} />
            <button onClick={() => setLang('en')} style={{ padding: '2px 6px', fontSize: '0.78rem', fontWeight: lang === 'en' ? 800 : 500, color: lang === 'en' ? 'var(--saffron-primary)' : 'var(--muted-dark)' }}>EN</button>
            <button onClick={() => setLang('hi')} style={{ padding: '2px 6px', fontSize: '0.78rem', fontWeight: lang === 'hi' ? 800 : 500, color: lang === 'hi' ? 'var(--saffron-primary)' : 'var(--muted-dark)' }}>HI</button>
          </div>
        </div>
      </header>

      {/* Main Split Layout */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          padding: '40px 24px',
          gap: '48px'
        }}
      >
        {/* LEFT SIDE: Visual Storytelling */}
        <div style={{ maxWidth: '540px' }} className="desktop-only">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--saffron-light)',
              color: 'var(--saffron-primary)',
              fontSize: '0.8rem',
              fontWeight: 800,
              marginBottom: '20px'
            }}
          >
            <Sparkles size={16} />
            <span>MODERN BHARAT CAREER ECOSYSTEM</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
              fontWeight: 800,
              color: 'var(--govt-ink)',
              lineHeight: 1.18,
              marginBottom: '16px'
            }}
          >
            {lang === 'hi' ? 'कौशल से अवसर तक।' : 'Bridging Skills with Opportunities.'}
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--muted-dark)', lineHeight: 1.6, marginBottom: '32px' }}>
            {lang === 'hi'
              ? 'राष्ट्रीय स्तर पर छात्रों, शिक्षाविदों और उद्योग को जोड़ने वाला एक एकीकृत डिजिटल मंच।'
              : 'CareerSetu translates coursework, projects, and assessments into verified hiring opportunities.'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {storyNodes.map((nd) => (
              <div
                key={nd.label}
                className="card-glass"
                style={{
                  padding: '12px 18px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: `${nd.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {React.createElement(nd.icon, { size: 18, color: nd.color })}
                </div>
                <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                  {nd.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Authentication Card */}
        <div>
          <div
            className="card-glass"
            style={{
              padding: '40px 36px',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-xl)',
              maxWidth: '480px',
              margin: '0 auto'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '6px' }}>
                {lang === 'hi' ? 'पुनः स्वागत है' : 'Welcome back'}
              </h2>
              <p style={{ fontSize: '0.94rem', color: 'var(--muted-dark)' }}>
                {lang === 'hi' ? '"अपनी CareerSetu यात्रा जारी रखने के लिए साइन इन करें।"' : '"Sign in to continue your CareerSetu journey."'}
              </p>
            </div>

            {/* Error Message Alert */}
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

            {/* Email & Password Login Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email-input"
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--govt-ink)',
                    marginBottom: '8px'
                  }}
                >
                  {lang === 'hi' ? 'ईमेल पता (Email Address)' : 'Email Address'}
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail
                    size={18}
                    color="var(--muted-text)"
                    style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
                  />
                  <input
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={lang === 'hi' ? 'अपना ईमेल दर्ज करें' : 'Enter your email'}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 14px 12px 42px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--light-border)',
                      backgroundColor: 'var(--pure-white)',
                      color: 'var(--govt-ink)',
                      fontSize: '0.96rem',
                      fontWeight: 500,
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label
                    htmlFor="password-input"
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--govt-ink)'
                    }}
                  >
                    {lang === 'hi' ? 'पासवर्ड (Password)' : 'Password'}
                  </label>
                  <button
                    type="button"
                    onClick={() => showToast(lang === 'hi' ? 'पासवर्ड रीसेट लिंक सहायता के लिए संपर्क करें।' : 'Contact admin or support to reset password.', 'info')}
                    style={{ fontSize: '0.78rem', color: 'var(--saffron-primary)', fontWeight: 700, border: 'none', background: 'none', cursor: 'pointer' }}
                  >
                    {lang === 'hi' ? 'पासवर्ड भूल गए?' : 'Forgot password?'}
                  </button>
                </div>
                <div style={{ position: 'relative' }}>
                  <Lock
                    size={18}
                    color="var(--muted-text)"
                    style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
                  />
                  <input
                    id="password-input"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={lang === 'hi' ? 'अपना पासवर्ड दर्ज करें' : 'Enter your password'}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 42px 12px 42px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--light-border)',
                      backgroundColor: 'var(--pure-white)',
                      color: 'var(--govt-ink)',
                      fontSize: '0.96rem',
                      fontWeight: 500,
                      outline: 'none'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: 'var(--muted-text)',
                      cursor: 'pointer'
                    }}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
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
                {loading ? (
                  <span>{lang === 'hi' ? 'साइन इन हो रहा है...' : 'Signing In...'}</span>
                ) : (
                  <>
                    <span>{lang === 'hi' ? 'साइन इन करें' : 'Sign In'}</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Create Account Link */}
            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.88rem', color: 'var(--muted-dark)' }}>
              {lang === 'hi' ? 'खाता नहीं है?' : "Don't have an account?"}{' '}
              <Link to="/register" style={{ color: 'var(--saffron-primary)', fontWeight: 800, textDecoration: 'none' }}>
                {lang === 'hi' ? 'खाता बनाएं' : 'Create account'}
              </Link>
            </div>

            {/* SIH26044 Demo Access Section */}
            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--light-border)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--saffron-primary)', letterSpacing: '0.04em', marginBottom: '12px' }}>
                ⚡ SIH26044 DEMO ACCESS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                <button
                  type="button"
                  onClick={() => handleFillDemo('student')}
                  style={{ fontSize: '0.78rem', fontWeight: 700, padding: '6px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)', color: 'var(--govt-ink)', cursor: 'pointer' }}
                >
                  Student Demo
                </button>
                <button
                  type="button"
                  onClick={() => handleFillDemo('industry')}
                  style={{ fontSize: '0.78rem', fontWeight: 700, padding: '6px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)', color: 'var(--govt-ink)', cursor: 'pointer' }}
                >
                  Industry Demo
                </button>
                <button
                  type="button"
                  onClick={() => handleFillDemo('academia')}
                  style={{ fontSize: '0.78rem', fontWeight: 700, padding: '6px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)', color: 'var(--govt-ink)', cursor: 'pointer' }}
                >
                  Academia Demo
                </button>
                <button
                  type="button"
                  onClick={() => handleFillDemo('institution')}
                  style={{ fontSize: '0.78rem', fontWeight: 700, padding: '6px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)', color: 'var(--govt-ink)', cursor: 'pointer' }}
                >
                  Institution Demo
                </button>
                <button
                  type="button"
                  onClick={() => handleFillDemo('governance')}
                  style={{ fontSize: '0.78rem', fontWeight: 700, padding: '6px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--light-border)', backgroundColor: 'var(--pure-white)', color: 'var(--govt-ink)', cursor: 'pointer' }}
                >
                  Governance Demo
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
