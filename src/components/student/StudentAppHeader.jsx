import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Bell,
  ChevronDown,
  Globe,
  User,
  Settings,
  HelpCircle,
  ExternalLink,
  LogOut,
  Sparkles,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const StudentAppHeader = () => {
  const { studentProfile, studentTab, setStudentTab, lang, setLang, logout, isDemoMode, showToast } = useApp();
  const navigate = useNavigate();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const profileRef = useRef(null);
  const notifRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileMenuOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const tabNames = {
    overview: { en: 'Dashboard', hi: 'डैशबोर्ड' },
    skills: { en: 'My Skills', hi: 'मेरे कौशल' },
    assessment: { en: 'Skill Assessment', hi: 'कौशल मूल्यांकन' },
    gap: { en: 'Skill Gap Analysis', hi: 'कौशल अंतर विश्लेषण' },
    roadmap: { en: 'Career Roadmap', hi: 'करियर मार्गदर्शन' },
    intelligence: { en: 'Career Intelligence', hi: 'करियर इंटेलिजेंस' },
    opportunities: { en: 'Opportunities', hi: 'अवसर खोज' },
    applications: { en: 'Applications Tracker', hi: 'आवेदन ट्रैकर' },
    portfolio: { en: 'Digital Portfolio', hi: 'डिजिटल पोर्टफोलियो' }
  };

  const notifications = [
    {
      id: 0,
      title: lang === 'hi' ? 'करियर इंटेलिजेंस: रिज़्यूमे में 3 शीर्ष सत्यापित कौशल जोड़ें' : 'Career Intelligence: 3 top verified skills missing from resume',
      time: 'Just now',
      unread: true,
      type: 'action',
      tab: 'intelligence'
    },
    {
      id: 1,
      title: lang === 'hi' ? 'नया स्मार्ट मैच: AI Engineering Intern' : 'New Smart Match: AI Engineering Intern',
      time: '10m ago',
      unread: true,
      type: 'match'
    },
    {
      id: 2,
      title: lang === 'hi' ? 'ग्राफ एल्गोरिद्म मूल्यांकन अनुशंसित (+4 अंक)' : 'Assessment recommended: Graph Algorithms (+4 pts)',
      time: '2h ago',
      unread: true,
      type: 'action'
    },
    {
      id: 3,
      title: lang === 'hi' ? 'कौशल पासपोर्ट एनपीटीईएल से सत्यापित हुआ' : 'NPTEL verification synced with Skill Passport',
      time: '1d ago',
      unread: false,
      type: 'verify'
    }
  ];

  return (
    <header
      style={{
        backgroundColor: 'var(--pure-white)',
        borderBottom: '1px solid var(--light-border)',
        height: '58px',
        position: 'sticky',
        top: isDemoMode ? '35px' : 0,
        zIndex: 900,
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        {/* Left: Brand + App Portal Chip + Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
          <button
            onClick={() => setCurrentView('landing')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
            title="CareerSetu Home"
          >
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--saffron-primary) 0%, var(--deep-indigo) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(232, 117, 22, 0.25)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 18L12 6L20 18" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="13" r="2" fill="#F59E0B" />
              </svg>
            </div>
            <span style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--govt-ink)', letterSpacing: '-0.02em' }}>
              Career<span style={{ color: 'var(--saffron-primary)' }}>Setu</span>
            </span>
          </button>

          <div style={{ width: '1px', height: '18px', backgroundColor: 'var(--light-border)' }} />

          {/* Student Portal Badge */}
          <span
            style={{
              fontSize: '0.74rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '6px',
              backgroundColor: 'var(--indigo-surface)',
              color: 'var(--deep-indigo)',
              border: '1px solid rgba(49, 46, 129, 0.15)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--saffron-primary)' }} />
            {lang === 'hi' ? 'छात्र पोर्टल' : 'Student Portal'}
          </span>

          {/* Breadcrumb Navigation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
              color: 'var(--muted-dark)',
              marginLeft: '4px'
            }}
            className="header-breadcrumb"
          >
            <span style={{ color: 'var(--muted-text)' }}>/</span>
            <span style={{ fontWeight: 600, color: 'var(--govt-ink)' }}>
              {lang === 'hi' ? tabNames[studentTab]?.hi : tabNames[studentTab]?.en}
            </span>
          </div>
        </div>

        {/* Right: Actions, Language, Notifications, Student Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          
          {/* Language Switcher */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--warm-ivory)',
              border: '1px solid var(--light-border)',
              borderRadius: '6px',
              padding: '2px 4px'
            }}
          >
            <button
              onClick={() => setLang('en')}
              style={{
                padding: '3px 7px',
                fontSize: '0.72rem',
                fontWeight: lang === 'en' ? 700 : 500,
                color: lang === 'en' ? 'var(--pure-white)' : 'var(--muted-dark)',
                backgroundColor: lang === 'en' ? 'var(--deep-indigo)' : 'transparent',
                borderRadius: '4px',
                transition: 'all 0.15s ease',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLang('hi')}
              style={{
                padding: '3px 7px',
                fontSize: '0.72rem',
                fontWeight: lang === 'hi' ? 700 : 500,
                color: lang === 'hi' ? 'var(--pure-white)' : 'var(--muted-dark)',
                backgroundColor: lang === 'hi' ? 'var(--deep-indigo)' : 'transparent',
                borderRadius: '4px',
                transition: 'all 0.15s ease',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              हिन्दी
            </button>
          </div>

          {/* Notification Bell with Dropdown */}
          <div style={{ position: 'relative' }} ref={notifRef}>
            <button
              onClick={() => {
                setNotificationsOpen(!notificationsOpen);
                setProfileMenuOpen(false);
              }}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                backgroundColor: notificationsOpen ? 'var(--warm-ivory)' : 'transparent',
                border: '1px solid var(--light-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                color: 'var(--govt-ink)',
                cursor: 'pointer'
              }}
              aria-label="Notifications"
            >
              <Bell size={16} />
              <span
                style={{
                  position: 'absolute',
                  top: '6px',
                  right: '6px',
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--saffron-primary)',
                  boxShadow: '0 0 0 2px var(--pure-white)'
                }}
              />
            </button>

            {/* Notifications Popover */}
            {notificationsOpen && (
              <div
                className="fade-in"
                style={{
                  position: 'absolute',
                  top: '42px',
                  right: 0,
                  width: '320px',
                  backgroundColor: 'var(--pure-white)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--light-border)',
                  boxShadow: 'var(--shadow-lg)',
                  padding: '12px',
                  zIndex: 1000
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '8px', borderBottom: '1px solid var(--light-border)', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                    {lang === 'hi' ? 'सूचनाएं' : 'Notifications'}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--saffron-primary)', fontWeight: 600, cursor: 'pointer' }} onClick={() => showToast('All notifications marked as read', 'info')}>
                    {lang === 'hi' ? 'सभी पढ़ें' : 'Mark all read'}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      style={{
                        padding: '8px 10px',
                        borderRadius: '6px',
                        backgroundColor: n.unread ? 'var(--warm-ivory)' : 'transparent',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2px',
                        cursor: 'pointer'
                      }}
                      onClick={() => {
                        setNotificationsOpen(false);
                        if (n.type === 'match') setStudentTab('opportunities');
                        if (n.type === 'action') setStudentTab('gap');
                      }}
                    >
                      <div style={{ fontSize: '0.8rem', fontWeight: n.unread ? 700 : 500, color: 'var(--govt-ink)', lineHeight: 1.35 }}>
                        {n.title}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--muted-text)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={10} /> {n.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Student Profile Dropdown */}
          <div style={{ position: 'relative' }} ref={profileRef}>
            <button
              onClick={() => {
                setProfileMenuOpen(!profileMenuOpen);
                setNotificationsOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 8px 4px 4px',
                borderRadius: '8px',
                border: '1px solid var(--light-border)',
                backgroundColor: profileMenuOpen ? 'var(--warm-ivory)' : 'transparent',
                cursor: 'pointer'
              }}
            >
              <img
                src={studentProfile.avatarUrl}
                alt={studentProfile.name}
                style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div style={{ textAlign: 'left', display: 'none' }} className="user-name-label">
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--govt-ink)', lineHeight: 1.1 }}>
                  {lang === 'hi' ? studentProfile.hindiName : studentProfile.name}
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--muted-text)' }}>
                  Readiness {studentProfile.readinessScore}/100
                </div>
              </div>
              <ChevronDown size={14} color="var(--muted-dark)" />
            </button>

            {/* Profile Dropdown Menu */}
            {profileMenuOpen && (
              <div
                className="fade-in"
                style={{
                  position: 'absolute',
                  top: '42px',
                  right: 0,
                  width: '240px',
                  backgroundColor: 'var(--pure-white)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--light-border)',
                  boxShadow: 'var(--shadow-lg)',
                  padding: '8px',
                  zIndex: 1000
                }}
              >
                {/* Header in menu */}
                <div style={{ padding: '8px 10px', borderBottom: '1px solid var(--light-border)', marginBottom: '6px' }}>
                  <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--govt-ink)' }}>
                    {lang === 'hi' ? studentProfile.hindiName : studentProfile.name}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--muted-dark)' }}>
                    {studentProfile.institute}
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '6px', fontSize: '0.72rem', color: 'var(--success-green)', fontWeight: 700 }}>
                    <CheckCircle2 size={12} /> {lang === 'hi' ? 'कौशल तैयारी' : 'Career Readiness'}: {studentProfile.readinessScore}%
                  </div>
                </div>

                <button
                  onClick={() => {
                    setStudentTab('portfolio');
                    setProfileMenuOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '8px 10px',
                    fontSize: '0.82rem',
                    color: 'var(--govt-ink)',
                    borderRadius: '6px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--warm-ivory)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <User size={15} color="var(--deep-indigo)" />
                  <span>{lang === 'hi' ? 'मेरी प्रोफ़ाइल एवं पासपोर्ट' : 'My Profile & Passport'}</span>
                </button>

                <button
                  onClick={() => {
                    showToast(lang === 'hi' ? 'सैटिंग्स पैनल सक्रिय है' : 'Settings panel loaded', 'info');
                    setProfileMenuOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '8px 10px',
                    fontSize: '0.82rem',
                    color: 'var(--govt-ink)',
                    borderRadius: '6px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--warm-ivory)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <Settings size={15} color="var(--muted-dark)" />
                  <span>{lang === 'hi' ? 'सेटिंग्स एवं गोपनीयता' : 'Settings & Privacy'}</span>
                </button>

                <button
                  onClick={() => {
                    showToast(lang === 'hi' ? 'सहायता केंद्र: SIH26044 सहायता डेस्क' : 'Help Center: SIH26044 Support Desk', 'info');
                    setProfileMenuOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '8px 10px',
                    fontSize: '0.82rem',
                    color: 'var(--govt-ink)',
                    borderRadius: '6px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--warm-ivory)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <HelpCircle size={15} color="var(--muted-dark)" />
                  <span>{lang === 'hi' ? 'सहायता केंद्र' : 'Help Center'}</span>
                </button>

                <div style={{ height: '1px', backgroundColor: 'var(--light-border)', margin: '6px 0' }} />

                <button
                  onClick={() => {
                    setCurrentView('landing');
                    setProfileMenuOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '8px 10px',
                    fontSize: '0.82rem',
                    color: 'var(--saffron-primary)',
                    borderRadius: '6px',
                    textAlign: 'left',
                    fontWeight: 600,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(232, 117, 22, 0.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <ExternalLink size={15} />
                  <span>{lang === 'hi' ? 'मुख्य साइट पर जाएं' : 'Switch to Public Portal'}</span>
                </button>

                <button
                  onClick={() => {
                    setProfileMenuOpen(false);
                    logout();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '8px 10px',
                    fontSize: '0.82rem',
                    color: 'var(--bharat-red)',
                    borderRadius: '6px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(185, 28, 28, 0.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <LogOut size={15} />
                  <span>{lang === 'hi' ? 'लॉग आउट' : 'Sign Out'}</span>
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .user-name-label {
            display: block !important;
          }
        }
        @media (max-width: 520px) {
          .header-breadcrumb {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
