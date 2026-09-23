import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  Globe,
  User,
  Home,
  LogOut,
  Bell,
  ChevronDown,
  Settings,
  Shield,
  Briefcase,
  GraduationCap,
  Building2,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const NormalPortalHeader = () => {
  const { user, lang, setLang, logout, showToast } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Determine portal title from current path or user role
  const getPortalInfo = () => {
    const path = location.pathname;
    if (path.includes('/student')) {
      return { title: 'Student Portal', titleHi: 'छात्र पोर्टल', icon: GraduationCap, color: 'var(--saffron-primary)' };
    }
    if (path.includes('/industry')) {
      return { title: 'Industry & Recruiter Portal', titleHi: 'उद्योग एवं रिक्रूटर पोर्टल', icon: Briefcase, color: '#0D9488' };
    }
    if (path.includes('/academia')) {
      return { title: 'Academia & Faculty Portal', titleHi: 'शिक्षाविद एवं संकाय पोर्टल', icon: User, color: '#4338CA' };
    }
    if (path.includes('/institution')) {
      return { title: 'Institution Admin Portal', titleHi: 'संस्थान प्रबंधन पोर्टल', icon: Building2, color: '#D97706' };
    }
    if (path.includes('/governance')) {
      return { title: 'Platform Governance Portal', titleHi: 'प्रशासन एवं नियमन पोर्टल', icon: ShieldCheck, color: '#15803D' };
    }
    return { title: 'CareerSetu Portal', titleHi: 'करियर सेतु पोर्टल', icon: Shield, color: 'var(--saffron-primary)' };
  };

  const portal = getPortalInfo();
  const PortalIcon = portal.icon;

  return (
    <header
      style={{
        backgroundColor: 'var(--govt-ink)',
        color: 'var(--pure-white)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '8px 20px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}
    >
      {/* Left: Brand Logo & Dedicated Portal Identity (No persona switcher) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--pure-white)'
          }}
        >
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #E87516 0%, #312E81 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(232, 117, 22, 0.3)'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 18L12 6L20 18" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="13" r="2.5" fill="#F59E0B" />
              <path d="M8 15H16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#FFFFFF' }}>
              Career<span style={{ color: 'var(--saffron-primary)' }}>Setu</span>
            </span>
            <span className="badge badge-saffron" style={{ fontSize: '0.62rem', padding: '1px 5px' }}>
              SIH26044
            </span>
          </div>
        </Link>

        <div style={{ width: '1px', height: '18px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Portal Name Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '3px 10px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.95)'
            }}
          >
            <PortalIcon size={14} color={portal.color} />
            <span>{lang === 'hi' ? portal.titleHi : portal.title}</span>
          </div>
        </div>
      </div>

      {/* Right: Actions, Public Site Link, Language & User Profile Dropdown */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Back to Public Site */}
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            color: 'rgba(255, 255, 255, 0.75)',
            textDecoration: 'none',
            fontSize: '0.78rem',
            fontWeight: 600,
            padding: '4px 8px',
            borderRadius: '4px',
            transition: 'color 0.15s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
        >
          <Home size={13} />
          <span>{lang === 'hi' ? 'मुख्य साइट' : 'Public Site'}</span>
        </Link>

        {/* Language Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <Globe size={13} color="var(--warm-orange)" />
          <button
            onClick={() => setLang('en')}
            style={{
              padding: '2px 6px',
              fontSize: '0.74rem',
              borderRadius: '3px',
              fontWeight: lang === 'en' ? 700 : 400,
              color: lang === 'en' ? 'var(--saffron-primary)' : 'rgba(255, 255, 255, 0.7)',
              backgroundColor: lang === 'en' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            English
          </button>
          <span style={{ opacity: 0.3, fontSize: '0.7rem' }}>|</span>
          <button
            onClick={() => setLang('hi')}
            style={{
              padding: '2px 6px',
              fontSize: '0.74rem',
              borderRadius: '3px',
              fontWeight: lang === 'hi' ? 700 : 400,
              color: lang === 'hi' ? 'var(--saffron-primary)' : 'rgba(255, 255, 255, 0.7)',
              backgroundColor: lang === 'hi' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            हिन्दी
          </button>
        </div>

        {/* Notifications Icon */}
        <button
          onClick={() => showToast(lang === 'hi' ? 'कोई नया सूचना संदेश नहीं है' : 'No new notifications', 'info')}
          title="Notifications"
          style={{
            position: 'relative',
            background: 'none',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.75)',
            cursor: 'pointer',
            padding: '4px'
          }}
        >
          <Bell size={16} />
          <span
            style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--saffron-primary)'
            }}
          />
        </button>

        {/* Profile Avatar & Interactive Dropdown Menu */}
        <div style={{ position: 'relative' }} ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: 'var(--pure-white)',
              cursor: 'pointer',
              transition: 'background-color 0.15s ease'
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: 'var(--deep-indigo)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              {user?.avatar ? (
                <img src={user.avatar} alt={user.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <User size={13} color="#FFFFFF" />
              )}
            </div>

            <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>
              {user?.name || 'Authenticated User'}
            </span>

            <span
              style={{
                fontSize: '0.66rem',
                padding: '1px 6px',
                borderRadius: '4px',
                backgroundColor: 'rgba(232, 117, 22, 0.25)',
                color: '#FDBA74',
                fontWeight: 700,
                textTransform: 'capitalize'
              }}
            >
              {user?.roleName || user?.role || 'User'}
            </span>

            <ChevronDown
              size={13}
              style={{
                transform: dropdownOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.15s ease',
                opacity: 0.7
              }}
            />
          </button>

          {/* Profile Dropdown Menu */}
          {dropdownOpen && (
            <div
              className="fade-in"
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                width: '260px',
                backgroundColor: 'var(--pure-white)',
                color: 'var(--govt-ink)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid var(--light-border)',
                padding: '8px',
                zIndex: 1000
              }}
            >
              {/* User Identity Header */}
              <div
                style={{
                  padding: '10px 12px',
                  backgroundColor: 'var(--warm-ivory)',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '6px'
                }}
              >
                <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--govt-ink)' }}>
                  {user?.name || 'Aarav Sharma'}
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--muted-text)', marginTop: '2px' }}>
                  {user?.email || 'user@careersetu.in'}
                </div>
                {user?.organization && (
                  <div style={{ fontSize: '0.72rem', color: 'var(--deep-indigo)', fontWeight: 600, marginTop: '3px' }}>
                    {user.organization}
                  </div>
                )}
              </div>

              {/* Menu Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    showToast(lang === 'hi' ? 'प्रोफ़ाइल विवरण प्रदर्शित हो रहे हैं' : 'Viewing user profile details', 'info');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--govt-ink)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--warm-ivory)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <User size={14} color="var(--deep-indigo)" />
                  <span>{lang === 'hi' ? 'मेरी प्रोफ़ाइल' : 'My Profile'}</span>
                </button>

                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    showToast(lang === 'hi' ? 'खाता सेटिंग्स सुरक्षित हैं' : 'Account settings loaded', 'info');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--govt-ink)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--warm-ivory)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <Settings size={14} color="var(--deep-indigo)" />
                  <span>{lang === 'hi' ? 'खाता सेटिंग्स' : 'Account Settings'}</span>
                </button>

                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate('/');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--govt-ink)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--warm-ivory)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <Home size={14} color="var(--saffron-primary)" />
                  <span>{lang === 'hi' ? 'मुख्य वेबसाइट पर जाएं' : 'Back to Public Site'}</span>
                </button>

                <div style={{ height: '1px', backgroundColor: 'var(--light-border)', margin: '4px 0' }} />

                {/* Sign Out Button */}
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    logout();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--bharat-red)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bharat-red-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <LogOut size={14} color="var(--bharat-red)" />
                  <span>{lang === 'hi' ? 'साइन आउट करें' : 'Sign Out'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
