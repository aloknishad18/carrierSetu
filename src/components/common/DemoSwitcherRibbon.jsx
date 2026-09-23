import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useApp, DEMO_USERS } from '../../context/AppContext';
import { Globe, User, Briefcase, GraduationCap, Building2, ShieldCheck, Home, LogOut, Sparkles } from 'lucide-react';

export const DemoSwitcherRibbon = () => {
  const { user, lang, setLang, logout, switchDemoRole } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  const portals = [
    { role: 'student', to: '/portal/student/dashboard', label: 'Student', hindiLabel: 'छात्र', icon: User },
    { role: 'industry', to: '/portal/industry/dashboard', label: 'Industry', hindiLabel: 'उद्योग', icon: Briefcase },
    { role: 'academia', to: '/portal/academia/dashboard', label: 'Academia', hindiLabel: 'शिक्षाविद', icon: GraduationCap },
    { role: 'institution', to: '/portal/institution/dashboard', label: 'Institution', hindiLabel: 'संस्थान', icon: Building2 },
    { role: 'governance', to: '/portal/governance/dashboard', label: 'Governance', hindiLabel: 'प्रशासन', icon: ShieldCheck }
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--govt-ink)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        color: 'var(--pure-white)',
        fontSize: '0.8rem',
        padding: '6px 16px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px'
      }}
    >
      {/* Left: Demo Mode Badge & Persona Switcher Label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: 'rgba(232, 117, 22, 0.3)',
            color: '#FDBA74',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.05em'
          }}
        >
          <Sparkles size={11} />
          SIH26044 DEMO MODE
        </span>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: 'rgba(255, 255, 255, 0.92)', fontSize: '0.76rem', fontWeight: 700 }}>
            {lang === 'hi' ? 'हितधारक डेमो स्विच करें:' : 'Switch demonstration persona:'}
          </span>
        </div>
      </div>

      {/* Middle: Persona Navigation Links */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          overflowX: 'auto',
          paddingBottom: '2px'
        }}
        aria-label="Demo Persona Switcher"
      >
        {portals.map((portal) => {
          const Icon = portal.icon;
          const isActive = location.pathname.startsWith(`/portal/${portal.role}`) || location.pathname.startsWith(`/${portal.role}`);

          return (
            <button
              key={portal.role}
              onClick={() => switchDemoRole(portal.role)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.76rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--pure-white)' : 'rgba(255, 255, 255, 0.68)',
                backgroundColor: isActive ? 'var(--saffron-primary)' : 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.16s ease',
                whiteSpace: 'nowrap',
                boxShadow: isActive ? '0 2px 8px rgba(232, 117, 22, 0.3)' : 'none'
              }}
            >
              <Icon size={12} />
              <span>{lang === 'hi' ? portal.hindiLabel : portal.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Right: Authenticated User Info, Language & Exit Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* User Pill */}
        {user && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '2px 8px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              fontSize: '0.74rem'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4ADE80' }} />
            <span style={{ color: 'rgba(255, 255, 255, 0.95)', fontWeight: 600 }}>{user.name}</span>
          </div>
        )}

        {/* Back to Public Site */}
        <NavLink
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            color: 'rgba(255, 255, 255, 0.75)',
            textDecoration: 'none',
            fontSize: '0.74rem',
            fontWeight: 600,
            padding: '2px 6px',
            borderRadius: '4px'
          }}
        >
          <Home size={12} />
          <span>{lang === 'hi' ? 'मुख्य साइट' : 'Public Site'}</span>
        </NavLink>

        {/* Language Quick Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <button
            onClick={() => setLang('en')}
            style={{
              padding: '2px 5px',
              fontSize: '0.72rem',
              borderRadius: '3px',
              fontWeight: lang === 'en' ? 700 : 400,
              color: lang === 'en' ? 'var(--saffron-primary)' : 'rgba(255, 255, 255, 0.7)',
              backgroundColor: lang === 'en' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            EN
          </button>
          <span style={{ opacity: 0.3 }}>|</span>
          <button
            onClick={() => setLang('hi')}
            style={{
              padding: '2px 5px',
              fontSize: '0.72rem',
              borderRadius: '3px',
              fontWeight: lang === 'hi' ? 700 : 400,
              color: lang === 'hi' ? 'var(--saffron-primary)' : 'rgba(255, 255, 255, 0.7)',
              backgroundColor: lang === 'hi' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            हिन्दी
          </button>
        </div>

        {/* Sign Out */}
        <button
          onClick={logout}
          title="Sign Out"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: 'rgba(239, 68, 68, 0.2)',
            color: '#FCA5A5',
            border: 'none',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '0.72rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          <LogOut size={11} />
          <span>{lang === 'hi' ? 'लॉगआउट' : 'Sign Out'}</span>
        </button>
      </div>
    </div>
  );
};
