import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp, ROLE_DASHBOARDS } from '../context/AppContext';
import { ShieldAlert, ArrowLeft, ArrowRight, UserCheck, RefreshCw } from 'lucide-react';

export const AccessDeniedPage = ({ requiredRole, requiredRoleLabel }) => {
  const { user, lang, switchDemoRole } = useApp();
  const navigate = useNavigate();

  const userRole = user?.role || 'guest';
  const myDashboard = ROLE_DASHBOARDS[userRole] || '/';

  const roleLabels = {
    student: { en: 'Student Portal', hi: 'छात्र पोर्टल' },
    industry: { en: 'Industry & Recruiter Portal', hi: 'उद्योग एवं रिक्रूटर पोर्टल' },
    academia: { en: 'Academia & Faculty Portal', hi: 'शिक्षाविद एवं संकाय पोर्टल' },
    institution: { en: 'Institution Admin Portal', hi: 'संस्थान प्रबंधन पोर्टल' },
    governance: { en: 'Platform Governance Portal', hi: 'प्रशासन एवं नियमन पोर्टल' }
  };

  const targetLabel = requiredRoleLabel || roleLabels[requiredRole]?.[lang === 'hi' ? 'hi' : 'en'] || 'this authorized portal';
  const userCurrentLabel = roleLabels[userRole]?.[lang === 'hi' ? 'hi' : 'en'] || userRole;

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--warm-ivory)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
    >
      <div
        className="card-modern"
        style={{
          maxWidth: '560px',
          width: '100%',
          padding: '40px',
          textAlign: 'center',
          border: '1px solid #FECACA',
          boxShadow: 'var(--shadow-xl)'
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--bharat-red-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto',
            color: 'var(--bharat-red)'
          }}
        >
          <ShieldAlert size={34} />
        </div>

        <div
          style={{
            display: 'inline-block',
            padding: '3px 10px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--bharat-red-light)',
            color: 'var(--bharat-red)',
            fontSize: '0.78rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            marginBottom: '12px'
          }}
        >
          {lang === 'hi' ? 'सुरक्षा चेतावनी • 403 अनाधिकृत' : 'ACCESS RESTRICTED • 403 FORBIDDEN'}
        </div>

        <h1
          style={{
            fontSize: '1.6rem',
            fontWeight: 800,
            color: 'var(--govt-ink)',
            marginBottom: '12px'
          }}
        >
          {lang === 'hi' ? 'पहुँच अस्वीकृत (Access Denied)' : 'Access Denied'}
        </h1>

        <p
          style={{
            fontSize: '0.94rem',
            color: 'var(--muted-dark)',
            lineHeight: 1.6,
            marginBottom: '20px'
          }}
        >
          {lang === 'hi'
            ? `यह पोर्टल केवल अधिकृत ${targetLabel} खातों के लिए उपलब्ध है। आपका वर्तमान खाता ${userCurrentLabel} के रूप में प्रमाणित है।`
            : `This portal is available only for authorized ${targetLabel} accounts. Your current account is authenticated as ${userCurrentLabel}.`}
        </p>

        <div
          style={{
            padding: '14px 18px',
            borderRadius: '10px',
            backgroundColor: 'var(--warm-ivory-alt)',
            border: '1px solid var(--light-border)',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.86rem'
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 700, color: 'var(--govt-ink)' }}>{user?.name || 'Authenticated User'}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted-text)' }}>{user?.email}</div>
          </div>
          <span className="badge badge-indigo" style={{ textTransform: 'capitalize' }}>
            {user?.role}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={() => navigate(myDashboard)}
            className="btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '12px',
              fontSize: '0.94rem'
            }}
          >
            <ArrowLeft size={16} />
            <span>{lang === 'hi' ? 'मेरे डैशबोर्ड पर लौटें' : 'Return to My Dashboard'}</span>
          </button>

          {/* SIH Demonstration Quick Switch Option */}
          {requiredRole && (
            <button
              onClick={() => switchDemoRole(requiredRole)}
              className="btn-secondary"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '10px',
                fontSize: '0.86rem',
                backgroundColor: 'var(--pure-white)'
              }}
            >
              <RefreshCw size={14} />
              <span>
                {lang === 'hi'
                  ? `डेमो: ${targetLabel} के रूप में बदलें`
                  : `SIH Demo: Switch to ${targetLabel}`}
              </span>
            </button>
          )}

          <button
            onClick={() => navigate('/')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--muted-text)',
              fontSize: '0.84rem',
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '6px'
            }}
          >
            ← {lang === 'hi' ? 'मुख्य वेबसाइट पर जाएं' : 'Go to CareerSetu Home'}
          </button>
        </div>
      </div>
    </div>
  );
};
