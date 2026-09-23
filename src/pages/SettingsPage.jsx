import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp, ROLE_DASHBOARDS } from '../context/AppContext';
import {
  User,
  Mail,
  Shield,
  Sun,
  Moon,
  Laptop,
  Globe,
  Bell,
  Lock,
  LogOut,
  ArrowLeft,
  Check,
  Save,
  KeyRound
} from 'lucide-react';

export const SettingsPage = ({ embedded = false }) => {
  const { user, lang, setLang, theme, setTheme, logout, showToast } = useApp();
  const navigate = useNavigate();

  // Form states
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  
  // Notification states
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [oppNotifs, setOppNotifs] = useState(true);
  const [appNotifs, setAppNotifs] = useState(true);

  // Security password state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);

  const backDashboard = user ? (ROLE_DASHBOARDS[user.role] || '/portal/student/dashboard') : '/';

  const handleProfileSave = (e) => {
    e.preventDefault();
    showToast(lang === 'hi' ? 'प्रोफ़ाइल प्राथमिकताएं सहेजी गईं!' : 'Profile settings saved successfully!', 'success');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (!currentPassword) {
      showToast(lang === 'hi' ? 'वर्तमान पासवर्ड दर्ज करें।' : 'Please enter your current password.', 'warning');
      return;
    }
    if (!newPassword || newPassword.length < 6) {
      showToast(lang === 'hi' ? 'नया पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।' : 'New password must be at least 6 characters.', 'warning');
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast(lang === 'hi' ? 'पासवर्ड मेल नहीं खाते।' : 'Passwords do not match.', 'error');
      return;
    }

    setPasswordLoading(true);
    setTimeout(() => {
      setPasswordLoading(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      showToast(lang === 'hi' ? 'पासवर्ड सफलतापूर्वक बदल दिया गया!' : 'Password updated successfully!', 'success');
    }, 600);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: embedded ? '0 auto' : '32px auto', padding: '0 20px', width: '100%' }}>
      {/* Top Header & Breadcrumb */}
      {!embedded && (
        <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <button
              onClick={() => navigate(backDashboard)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'none',
                border: 'none',
                color: 'var(--saffron-primary)',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer',
                marginBottom: '8px'
              }}
            >
              <ArrowLeft size={16} />
              <span>{lang === 'hi' ? 'डैशबोर्ड पर वापस जाएं' : 'Back to Dashboard'}</span>
            </button>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--govt-ink)', letterSpacing: '-0.02em' }}>
              {lang === 'hi' ? 'खाता सेटिंग्स और प्राथमिकताएं' : 'Account & Portal Settings'}
            </h1>
          </div>

          <button
            onClick={logout}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--bharat-red)',
              color: 'var(--bharat-red)',
              backgroundColor: 'transparent',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            <LogOut size={16} />
            <span>{lang === 'hi' ? 'साइन आउट' : 'Sign Out'}</span>
          </button>
        </div>
      )}

      {/* Grid of Setting Sections */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
        
        {/* SECTION 1: ACCOUNT PROFILE */}
        <div
          style={{
            backgroundColor: 'var(--pure-white)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', borderBottom: '1px solid var(--light-border)', paddingBottom: '12px' }}>
            <User size={20} color="var(--saffron-primary)" />
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {lang === 'hi' ? '1. खाता विवरण' : '1. Account Details'}
            </h2>
          </div>

          <form onSubmit={handleProfileSave} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>
                {lang === 'hi' ? 'पूरा नाम' : 'Full Name'}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--light-border)',
                  backgroundColor: 'var(--warm-ivory)',
                  color: 'var(--govt-ink)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>
                {lang === 'hi' ? 'ईमेल पता' : 'Email Address'}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--light-border)',
                  backgroundColor: 'var(--warm-ivory)',
                  color: 'var(--govt-ink)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>
                {lang === 'hi' ? 'भूमिका (Role)' : 'Role'}
              </label>
              <input
                type="text"
                value={user?.role?.toUpperCase() || 'STUDENT'}
                disabled
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--light-border)',
                  backgroundColor: 'rgba(0,0,0,0.04)',
                  color: 'var(--muted-text)',
                  fontSize: '0.9rem',
                  cursor: 'not-allowed',
                  fontWeight: 700
                }}
              />
            </div>

            <div style={{ gridColumn: '1 / -1', marginTop: '8px' }}>
              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '9px 20px', fontSize: '0.88rem' }}
              >
                <Save size={15} />
                <span>{lang === 'hi' ? 'विवरण सहेजें' : 'Save Profile Changes'}</span>
              </button>
            </div>
          </form>
        </div>

        {/* SECTION 2: APPEARANCE & THEME SYSTEM */}
        <div
          style={{
            backgroundColor: 'var(--pure-white)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', borderBottom: '1px solid var(--light-border)', paddingBottom: '12px' }}>
            <Sun size={20} color="var(--saffron-primary)" />
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {lang === 'hi' ? '2. रूप-रंग और थीम (Appearance & Theme)' : '2. Appearance & Theme'}
            </h2>
          </div>

          <p style={{ fontSize: '0.88rem', color: 'var(--muted-text)', marginBottom: '16px' }}>
            {lang === 'hi'
              ? 'पोर्टल के लिए अपनी पसंदीदा थीम चुनें। यह तुरंत पूरी एप्लीकेशन पर लागू हो जाएगी।'
              : 'Choose your preferred theme across CareerSetu. Theme updates immediately across all screens.'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
            {/* Light Mode Card */}
            <button
              onClick={() => setTheme('light')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                border: theme === 'light' ? '2px solid var(--saffron-primary)' : '1px solid var(--light-border)',
                backgroundColor: theme === 'light' ? 'var(--saffron-light)' : 'var(--warm-ivory)',
                color: 'var(--govt-ink)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
            >
              <Sun size={24} color="#E87516" />
              <span style={{ fontSize: '0.9rem', fontWeight: 800 }}>☀ Light</span>
              {theme === 'light' && (
                <div style={{ position: 'absolute', top: '8px', right: '8px', backgroundColor: 'var(--saffron-primary)', color: '#FFF', borderRadius: '50%', padding: '2px' }}>
                  <Check size={12} />
                </div>
              )}
            </button>

            {/* Dark Mode Card */}
            <button
              onClick={() => setTheme('dark')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                border: theme === 'dark' ? '2px solid var(--saffron-primary)' : '1px solid var(--light-border)',
                backgroundColor: theme === 'dark' ? 'rgba(232, 117, 22, 0.15)' : 'var(--warm-ivory)',
                color: 'var(--govt-ink)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
            >
              <Moon size={24} color="#F59E0B" />
              <span style={{ fontSize: '0.9rem', fontWeight: 800 }}>🌙 Dark</span>
              {theme === 'dark' && (
                <div style={{ position: 'absolute', top: '8px', right: '8px', backgroundColor: 'var(--saffron-primary)', color: '#FFF', borderRadius: '50%', padding: '2px' }}>
                  <Check size={12} />
                </div>
              )}
            </button>

            {/* System Theme Card */}
            <button
              onClick={() => setTheme('system')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                border: theme === 'system' ? '2px solid var(--saffron-primary)' : '1px solid var(--light-border)',
                backgroundColor: theme === 'system' ? 'var(--indigo-surface)' : 'var(--warm-ivory)',
                color: 'var(--govt-ink)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
            >
              <Laptop size={24} color="var(--deep-indigo)" />
              <span style={{ fontSize: '0.9rem', fontWeight: 800 }}>💻 System</span>
              {theme === 'system' && (
                <div style={{ position: 'absolute', top: '8px', right: '8px', backgroundColor: 'var(--saffron-primary)', color: '#FFF', borderRadius: '50%', padding: '2px' }}>
                  <Check size={12} />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* SECTION 3: LANGUAGE PREFERENCES */}
        <div
          style={{
            backgroundColor: 'var(--pure-white)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', borderBottom: '1px solid var(--light-border)', paddingBottom: '12px' }}>
            <Globe size={20} color="var(--saffron-primary)" />
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {lang === 'hi' ? '3. भाषा (Language Preference)' : '3. Language Preference'}
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setLang('en')}
              style={{
                padding: '10px 24px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.92rem',
                fontWeight: lang === 'en' ? 800 : 600,
                color: lang === 'en' ? '#FFFFFF' : 'var(--govt-ink)',
                backgroundColor: lang === 'en' ? 'var(--saffron-primary)' : 'var(--warm-ivory)',
                border: '1px solid var(--light-border)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              English
            </button>
            <button
              onClick={() => setLang('hi')}
              style={{
                padding: '10px 24px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.92rem',
                fontWeight: lang === 'hi' ? 800 : 600,
                color: lang === 'hi' ? '#FFFFFF' : 'var(--govt-ink)',
                backgroundColor: lang === 'hi' ? 'var(--saffron-primary)' : 'var(--warm-ivory)',
                border: '1px solid var(--light-border)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              हिन्दी (Hindi)
            </button>
          </div>
        </div>

        {/* SECTION 4: NOTIFICATION PREFERENCES */}
        <div
          style={{
            backgroundColor: 'var(--pure-white)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', borderBottom: '1px solid var(--light-border)', paddingBottom: '12px' }}>
            <Bell size={20} color="var(--saffron-primary)" />
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {lang === 'hi' ? '4. सूचनाएं (Notifications)' : '4. Notification Settings'}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', padding: '8px 0' }}>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                  {lang === 'hi' ? 'ईमेल सूचनाएं' : 'Email Notifications'}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>
                  {lang === 'hi' ? 'महत्वपूर्ण खाते और सुरक्षा अलर्ट प्राप्त करें' : 'Receive account updates and security alerts'}
                </div>
              </div>
              <input
                type="checkbox"
                checked={emailNotifs}
                onChange={(e) => setEmailNotifs(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--saffron-primary)', cursor: 'pointer' }}
              />
            </label>

            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', padding: '8px 0', borderTop: '1px solid var(--light-border)' }}>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                  {lang === 'hi' ? 'अवसर और नौकरी अलर्ट' : 'Opportunity & Internship Alerts'}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>
                  {lang === 'hi' ? 'आपके कौशल प्रोफ़ाइल से मेल खाने वाले नए अवसरों का अलर्ट' : 'Instant notifications for matched high-readiness roles'}
                </div>
              </div>
              <input
                type="checkbox"
                checked={oppNotifs}
                onChange={(e) => setOppNotifs(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--saffron-primary)', cursor: 'pointer' }}
              />
            </label>

            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', padding: '8px 0', borderTop: '1px solid var(--light-border)' }}>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
                  {lang === 'hi' ? 'आवेदन स्थिति अपडेट' : 'Application Status Updates'}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>
                  {lang === 'hi' ? 'शॉर्टलिस्टिंग और साक्षात्कार शेड्यूल अपडेट' : 'Real-time updates when recruiters review your profile'}
                </div>
              </div>
              <input
                type="checkbox"
                checked={appNotifs}
                onChange={(e) => setAppNotifs(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--saffron-primary)', cursor: 'pointer' }}
              />
            </label>
          </div>
        </div>

        {/* SECTION 5: SECURITY & CHANGE PASSWORD */}
        <div
          style={{
            backgroundColor: 'var(--pure-white)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            border: '1px solid var(--light-border)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', borderBottom: '1px solid var(--light-border)', paddingBottom: '12px' }}>
            <Lock size={20} color="var(--saffron-primary)" />
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
              {lang === 'hi' ? '5. सुरक्षा और पासवर्ड (Security & Password)' : '5. Security & Change Password'}
            </h2>
          </div>

          <form onSubmit={handlePasswordChange} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>
                {lang === 'hi' ? 'वर्तमान पासवर्ड' : 'Current Password'}
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--light-border)',
                  backgroundColor: 'var(--warm-ivory)',
                  color: 'var(--govt-ink)',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>
                {lang === 'hi' ? 'नया पासवर्ड' : 'New Password'}
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--light-border)',
                  backgroundColor: 'var(--warm-ivory)',
                  color: 'var(--govt-ink)',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--govt-ink)', marginBottom: '6px' }}>
                {lang === 'hi' ? 'नया पासवर्ड पुन: दर्ज करें' : 'Confirm New Password'}
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--light-border)',
                  backgroundColor: 'var(--warm-ivory)',
                  color: 'var(--govt-ink)',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div style={{ gridColumn: '1 / -1', marginTop: '8px' }}>
              <button
                type="submit"
                disabled={passwordLoading}
                className="btn-primary"
                style={{ padding: '9px 20px', fontSize: '0.88rem' }}
              >
                <KeyRound size={15} />
                <span>{passwordLoading ? (lang === 'hi' ? 'अद्यतन हो रहा है...' : 'Updating...') : (lang === 'hi' ? 'पासवर्ड बदलें' : 'Update Password')}</span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};
