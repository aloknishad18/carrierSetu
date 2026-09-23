import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Globe, User, Briefcase, GraduationCap, Building2, ShieldCheck, Home } from 'lucide-react';

export const RoleSwitcherBanner = () => {
  const { lang, setLang } = useApp();
  const location = useLocation();

  const portals = [
    { to: '/', label: 'Public Site', hindiLabel: 'मुख्य पोर्टल', icon: Home, end: true },
    { to: '/student/dashboard', label: 'Student Portal', hindiLabel: 'छात्र पोर्टल', icon: User, matchPrefix: '/student' },
    { to: '/industry/dashboard', label: 'Industry & Recruiter', hindiLabel: 'उद्योग एवं रिक्रूटर', icon: Briefcase, matchPrefix: '/industry' },
    { to: '/academia/dashboard', label: 'Academician / Faculty', hindiLabel: 'शिक्षाविद एवं संकाय', icon: GraduationCap, matchPrefix: '/academia' },
    { to: '/institution/dashboard', label: 'Institution Admin', hindiLabel: 'संस्थान प्रबंधन', icon: Building2, matchPrefix: '/institution' },
    { to: '/governance/dashboard', label: 'Platform Governance', hindiLabel: 'प्रशासन एवं नियमन', icon: ShieldCheck, matchPrefix: '/governance' }
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--govt-ink)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: 'rgba(232, 117, 22, 0.25)',
            color: '#FDBA74',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.05em'
          }}
        >
          SIH26044 DEMO
        </span>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.78rem', fontWeight: 700 }}>
            {lang === 'hi' ? 'हितधारक पोर्टल नेविगेशन:' : 'Stakeholder Portal Navigation:'}
          </span>
          <span style={{ color: 'rgba(255, 255, 255, 0.45)', fontSize: '0.66rem', lineHeight: 1 }}>
            {lang === 'hi' ? 'प्रत्येक हितधारक अनुभव देखें' : 'Explore each stakeholder experience'}
          </span>
        </div>
      </div>

      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          overflowX: 'auto',
          paddingBottom: '2px'
        }}
        aria-label="Stakeholder Portal Navigation"
      >
        {portals.map((portal) => {
          const Icon = portal.icon;
          const isActive = portal.end
            ? location.pathname === '/'
            : location.pathname.startsWith(portal.matchPrefix);

          return (
            <NavLink
              key={portal.to}
              to={portal.to}
              end={portal.end}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.76rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--pure-white)' : 'rgba(255, 255, 255, 0.68)',
                backgroundColor: isActive ? 'var(--saffron-primary)' : 'rgba(255, 255, 255, 0.06)',
                transition: 'all 0.16s ease',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                boxShadow: isActive ? '0 2px 8px rgba(232, 117, 22, 0.3)' : 'none'
              }}
            >
              <Icon size={13} />
              <span>{lang === 'hi' ? portal.hindiLabel : portal.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Language Quick Switcher */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Globe size={13} style={{ color: 'var(--warm-orange)' }} />
        <button
          onClick={() => setLang('en')}
          style={{
            padding: '2px 6px',
            fontSize: '0.74rem',
            borderRadius: '4px',
            fontWeight: lang === 'en' ? 700 : 400,
            color: lang === 'en' ? 'var(--saffron-primary)' : 'rgba(255, 255, 255, 0.7)',
            backgroundColor: lang === 'en' ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
          }}
        >
          English
        </button>
        <span style={{ opacity: 0.3 }}>|</span>
        <button
          onClick={() => setLang('hi')}
          style={{
            padding: '2px 6px',
            fontSize: '0.74rem',
            borderRadius: '4px',
            fontWeight: lang === 'hi' ? 700 : 400,
            color: lang === 'hi' ? 'var(--saffron-primary)' : 'rgba(255, 255, 255, 0.7)',
            backgroundColor: lang === 'hi' ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
          }}
        >
          हिन्दी
        </button>
      </div>
    </div>
  );
};
