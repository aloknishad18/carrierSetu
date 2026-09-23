import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp, ROLE_DASHBOARDS } from '../../context/AppContext';
import { Globe, Menu, X, ArrowRight, User, LogOut, Sun, Moon } from 'lucide-react';

export const Navbar = () => {
  const { lang, setLang, theme, toggleTheme, t, user, isAuthenticated, logout } = useApp();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.forStudents, href: '#for-students' },
    { label: t.nav.forIndustry, href: '#for-industry' },
    { label: t.nav.forAcademia, href: '#for-academia' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/' + href);
    }
  };

  const userDashboardUrl = user ? (ROLE_DASHBOARDS[user.role] || '/portal/student/dashboard') : '/login';

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 900,
        backgroundColor: isScrolled
          ? (theme === 'dark' ? 'rgba(11, 11, 13, 0.95)' : 'rgba(255, 255, 255, 0.98)')
          : (theme === 'dark' ? 'rgba(17, 17, 20, 0.85)' : 'rgba(250, 249, 246, 0.92)'),
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid var(--light-border)'
          : '1px solid rgba(255,255,255,0.05)',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
        height: isScrolled ? '66px' : '74px',
        transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
        
        {/* Brand Logo & Descriptor */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', textDecoration: 'none' }}
        >
          {/* Logo Mark */}
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #E87516 0%, #312E81 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(232, 117, 22, 0.35)'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 18L12 6L20 18" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="13" r="2.5" fill="#F59E0B" />
              <path d="M8 15H16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--govt-ink)' }}>
                Career<span style={{ color: 'var(--saffron-primary)' }}>Setu</span>
              </span>
              <span className="badge badge-saffron" style={{ fontSize: '0.68rem', padding: '2px 6px' }}>
                SIH26044
              </span>
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--muted-text)', fontWeight: 500, letterSpacing: '0.01em' }}>
              {t.nav.tagline}
            </div>
          </div>
        </Link>

        {/* Center Navigation Links (Public Marketing) */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: 'var(--muted-dark)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--saffron-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-dark)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Area */}
        <div style={{ display: 'none', alignItems: 'center', gap: '14px' }} className="desktop-actions">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 12px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--light-border)',
              backgroundColor: 'var(--pure-white)',
              color: 'var(--govt-ink)',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: 'var(--shadow-xs)',
              transition: 'all 0.2s ease'
            }}
          >
            {theme === 'dark' ? (
              <>
                <Sun size={15} color="#F97316" />
                <span>☀ Light</span>
              </>
            ) : (
              <>
                <Moon size={15} color="#312E81" />
                <span>☾ Dark</span>
              </>
            )}
          </button>

          {/* Language Switcher: 🌐 English | हिन्दी */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2px',
              padding: '4px 6px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--light-border)',
              backgroundColor: 'var(--pure-white)',
              boxShadow: 'var(--shadow-xs)'
            }}
          >
            <Globe size={15} color="var(--saffron-primary)" style={{ marginLeft: '6px', marginRight: '4px' }} />
            <button
              onClick={() => setLang('en')}
              style={{
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: lang === 'en' ? 800 : 600,
                color: lang === 'en' ? '#FFFFFF' : 'var(--muted-dark)',
                backgroundColor: lang === 'en' ? 'var(--saffron-primary)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              English
            </button>
            <button
              onClick={() => setLang('hi')}
              style={{
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: lang === 'hi' ? 800 : 600,
                color: lang === 'hi' ? '#FFFFFF' : 'var(--muted-dark)',
                backgroundColor: lang === 'hi' ? 'var(--saffron-primary)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              हिन्दी
            </button>
          </div>

          {/* If NOT Authenticated: Sign In & Get Started */}
          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: 'var(--govt-ink)',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--saffron-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--govt-ink)')}
              >
                {t.nav.signIn}
              </Link>

              <Link
                to="/register"
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.88rem', textDecoration: 'none' }}
              >
                <span>{lang === 'hi' ? 'शुरू करें →' : 'Get Started →'}</span>
              </Link>
            </>
          ) : (
            /* If Authenticated: User Info & Direct Portal Link */
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Link
                to={userDashboardUrl}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--saffron-light)',
                  color: 'var(--saffron-primary)',
                  textDecoration: 'none',
                  fontSize: '0.86rem',
                  fontWeight: 700
                }}
              >
                <User size={15} />
                <span>{user.name} ({user.role})</span>
              </Link>

              <Link
                to={userDashboardUrl}
                className="btn-primary"
                style={{ padding: '8px 16px', fontSize: '0.86rem', textDecoration: 'none' }}
              >
                <span>Go to Portal</span>
                <ArrowRight size={14} />
              </Link>

              <button
                onClick={logout}
                title="Sign Out"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--muted-dark)',
                  cursor: 'pointer',
                  padding: '6px'
                }}
              >
                <LogOut size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile navigation menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--govt-ink)',
            cursor: 'pointer',
            padding: '8px'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fade-in"
          style={{
            backgroundColor: 'var(--pure-white)',
            borderBottom: '1px solid var(--light-border)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--govt-ink)',
                padding: '6px 0'
              }}
            >
              {link.label}
            </a>
          ))}

          <div style={{ height: '1px', backgroundColor: 'var(--light-border)', margin: '4px 0' }} />

          {/* Mobile Auth Actions */}
          {!isAuthenticated ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-secondary"
                style={{ justifyContent: 'center', textDecoration: 'none' }}
              >
                <span>{t.nav.signIn}</span>
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ justifyContent: 'center', textDecoration: 'none' }}
              >
                <span>{t.nav.getStarted}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link
                to={userDashboardUrl}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ justifyContent: 'center', textDecoration: 'none' }}
              >
                <span>Open {user.role} Portal</span>
                <ArrowRight size={16} />
              </Link>
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="btn-secondary"
                style={{ justifyContent: 'center' }}
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            </div>
          )}

          <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
            <button
              onClick={() => {
                setLang(lang === 'en' ? 'hi' : 'en');
                setMobileMenuOpen(false);
              }}
              className="btn-secondary"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <Globe size={16} />
              <span>{lang === 'en' ? 'हिन्दी में बदलें' : 'Switch to English'}</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 899px) {
          .desktop-nav { display: none !important; }
          .desktop-actions { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};
