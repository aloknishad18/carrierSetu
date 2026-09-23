import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { StudentAppHeader } from './StudentAppHeader';
import { StudentAppFooter } from './StudentAppFooter';
import { StudentOverview } from './StudentOverview';
import { StudentSkillProfileView } from './StudentSkillProfileView';
import { SkillAssessmentView } from './SkillAssessmentView';
import { StudentSkillGapView } from './StudentSkillGapView';
import { StudentCareerRoadmapView } from './StudentCareerRoadmapView';
import { StudentOpportunitiesView } from './StudentOpportunitiesView';
import { StudentApplicationsView } from './StudentApplicationsView';
import { StudentPortfolioView } from './StudentPortfolioView';
import { CareerIntelligenceView } from './intelligence/CareerIntelligenceView';
import { SettingsPage } from '../../pages/SettingsPage';
import { SupportPage } from '../../pages/SupportPage';
import {
  LayoutDashboard,
  Award,
  Compass,
  GitCompare,
  Map,
  Sparkles,
  Briefcase,
  FileCheck2,
  UserCheck,
  Settings,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';

export const StudentPortal = () => {
  const { studentTab, setStudentTab, studentProfile, lang, showToast } = useApp();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryMenuItems = [
    { id: 'overview', label: 'Dashboard', hindi: 'डैशबोर्ड', icon: LayoutDashboard },
    { id: 'skills', label: 'My Skills', hindi: 'मेरे कौशल', icon: Award },
    { id: 'assessment', label: 'Skill Assessment', hindi: 'कौशल मूल्यांकन', icon: Compass },
    { id: 'gap', label: 'Skill Gap', hindi: 'कौशल अंतर', icon: GitCompare },
    { id: 'roadmap', label: 'Career Roadmap', hindi: 'करियर मार्गदर्शन', icon: Map },
    { id: 'intelligence', label: 'Career Intelligence', hindi: 'करियर इंटेलिजेंस', icon: Sparkles },
    { id: 'opportunities', label: 'Opportunities', hindi: 'अवसर खोज', icon: Briefcase },
    { id: 'applications', label: 'Applications', hindi: 'आवेदन ट्रैकर', icon: FileCheck2 },
    { id: 'portfolio', label: 'Portfolio', hindi: 'पोर्टफोलियो', icon: UserCheck }
  ];

  const handleNavClick = (tabId) => {
    setStudentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--warm-ivory)' }}>
      {/* 1. Compact Student Application Header */}
      <StudentAppHeader />

      {/* Mobile drawer toggle bar */}
      <div
        className="student-mobile-bar"
        style={{
          display: 'none',
          backgroundColor: 'var(--pure-white)',
          padding: '10px 16px',
          borderBottom: '1px solid var(--light-border)',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src={studentProfile.avatarUrl}
            alt={studentProfile.name}
            style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--govt-ink)' }}>
            {lang === 'hi' ? studentProfile.hindiName : studentProfile.name}
          </span>
          <span className="badge badge-green" style={{ fontSize: '0.7rem', padding: '1px 6px' }}>
            {studentProfile.readinessScore}%
          </span>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: '1px solid var(--light-border)',
            borderRadius: '6px',
            padding: '6px 10px',
            fontSize: '0.78rem',
            fontWeight: 600,
            cursor: 'pointer',
            color: 'var(--govt-ink)'
          }}
        >
          {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          <span>{lang === 'hi' ? 'मेन्यू' : 'Menu'}</span>
        </button>
      </div>

      {/* 2. Main Application Area: Sidebar + Content */}
      <div style={{ flex: 1, padding: '24px 0 36px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '250px 1fr',
              gap: '28px',
              alignItems: 'flex-start'
            }}
            className="student-app-layout"
          >
            {/* Left Navigation Sidebar */}
            <aside
              className={`student-sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}
              style={{
                backgroundColor: 'var(--pure-white)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--light-border)',
                padding: '16px 12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                position: 'sticky',
                top: '105px',
                zIndex: 80
              }}
            >
              {/* Student Mini Profile Card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '4px 6px 16px 6px',
                  borderBottom: '1px solid var(--light-border)',
                  marginBottom: '14px'
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={studentProfile.avatarUrl}
                    alt={studentProfile.name}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid var(--saffron-primary)'
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      right: '-2px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--success-green)',
                      border: '2px solid var(--pure-white)'
                    }}
                    title="Verified National Student"
                  />
                </div>

                <div style={{ overflow: 'hidden' }}>
                  <div
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 800,
                      color: 'var(--govt-ink)',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden'
                    }}
                  >
                    {lang === 'hi' ? studentProfile.hindiName : studentProfile.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted-dark)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>Readiness:</span>
                    <strong style={{ color: 'var(--saffron-primary)' }}>{studentProfile.readinessScore} / 100</strong>
                  </div>
                </div>
              </div>

              {/* Primary Navigation Menu */}
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {primaryMenuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = studentTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '9px 12px',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.86rem',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? 'var(--pure-white)' : 'var(--govt-ink)',
                        backgroundColor: isActive ? 'var(--saffron-primary)' : 'transparent',
                        textAlign: 'left',
                        transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: isActive ? '0 2px 8px rgba(232, 117, 22, 0.28)' : 'none'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = 'var(--warm-ivory)';
                          e.currentTarget.style.transform = 'translateX(2px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.transform = 'none';
                        }
                      }}
                    >
                      <Icon size={17} style={{ flexShrink: 0 }} />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {lang === 'hi' ? item.hindi : item.label}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Subtle Divider */}
              <div style={{ height: '1px', backgroundColor: 'var(--light-border)', margin: '14px 4px' }} />

              {/* Secondary Navigation Menu */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <button
                  onClick={() => handleNavClick('support')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.82rem',
                    fontWeight: studentTab === 'support' ? 700 : 500,
                    color: studentTab === 'support' ? 'var(--saffron-primary)' : 'var(--muted-dark)',
                    backgroundColor: studentTab === 'support' ? 'var(--saffron-light)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = studentTab === 'support' ? 'var(--saffron-light)' : 'var(--warm-ivory)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = studentTab === 'support' ? 'var(--saffron-light)' : 'transparent')}
                >
                  <HelpCircle size={15} />
                  <span>{lang === 'hi' ? 'सहायता केंद्र' : 'Help & Support'}</span>
                </button>

                <button
                  onClick={() => handleNavClick('settings')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.82rem',
                    fontWeight: studentTab === 'settings' ? 700 : 500,
                    color: studentTab === 'settings' ? 'var(--saffron-primary)' : 'var(--muted-dark)',
                    backgroundColor: studentTab === 'settings' ? 'var(--saffron-light)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = studentTab === 'settings' ? 'var(--saffron-light)' : 'var(--warm-ivory)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = studentTab === 'settings' ? 'var(--saffron-light)' : 'transparent')}
                >
                  <Settings size={15} />
                  <span>{lang === 'hi' ? 'सेटिंग्स' : 'Settings'}</span>
                </button>

                <button
                  onClick={() => navigate('/')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--deep-indigo)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--indigo-surface)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <ExternalLink size={15} />
                  <span>{lang === 'hi' ? 'मुख्य साइट पर लौटें' : 'Back to Public Portal'}</span>
                </button>
              </div>
            </aside>

            {/* Right Main Application Content Area */}
            <main style={{ minWidth: 0 }}>
              <div className="fade-in" key={studentTab}>
                {studentTab === 'overview' && <StudentOverview />}
                {studentTab === 'skills' && <StudentSkillProfileView />}
                {studentTab === 'assessment' && <SkillAssessmentView />}
                {studentTab === 'gap' && <StudentSkillGapView />}
                {studentTab === 'roadmap' && <StudentCareerRoadmapView />}
                {studentTab === 'intelligence' && <CareerIntelligenceView />}
                {studentTab === 'opportunities' && <StudentOpportunitiesView />}
                {studentTab === 'applications' && <StudentApplicationsView />}
                {studentTab === 'portfolio' && <StudentPortfolioView />}
                {studentTab === 'settings' && <SettingsPage embedded={true} />}
                {studentTab === 'support' && <SupportPage embedded={true} />}
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* 3. Minimal Application Footer */}
      <StudentAppFooter />

      <style>{`
        @media (max-width: 860px) {
          .student-app-layout {
            grid-template-columns: 1fr !important;
          }
          .student-mobile-bar {
            display: flex !important;
          }
          .student-sidebar {
            display: none !important;
            position: fixed !important;
            top: 96px !important;
            left: 12px !important;
            right: 12px !important;
            z-index: 999 !important;
            box-shadow: var(--shadow-xl) !important;
          }
          .student-sidebar.mobile-open {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

