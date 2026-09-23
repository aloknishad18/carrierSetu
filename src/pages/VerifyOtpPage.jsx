import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ShieldCheck, ArrowLeft, CheckCircle2, AlertCircle, RefreshCw, KeyRound } from 'lucide-react';

export const VerifyOtpPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { lang, verifyEmailOtp, resendEmailOtp, showToast } = useApp();

  const emailParam = searchParams.get('email') || '';
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Timers
  const [expirySeconds, setExpirySeconds] = useState(300); // 5 minutes (300s)
  const [resendCooldown, setResendCooldown] = useState(30); // 30s cooldown
  const [resendLoading, setResendLoading] = useState(false);

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  // Expiry Countdown (5 mins)
  useEffect(() => {
    if (expirySeconds <= 0) return;
    const timer = setInterval(() => setExpirySeconds((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [expirySeconds]);

  // Resend Cooldown (30s)
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => setResendCooldown((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  // Focus first input box on mount
  useEffect(() => {
    if (inputRefs[0]?.current) {
      inputRefs[0].current.focus();
    }
  }, []);

  // Format seconds to MM:SS
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Handle Box Change & Auto Advance
  const handleChange = (index, value) => {
    // Only accept numeric digit
    const digit = value.replace(/[^0-9]/g, '').slice(-1);

    const newOtp = [...otpValues];
    newOtp[index] = digit;
    setOtpValues(newOtp);
    setErrorMessage('');

    if (digit && index < 5 && inputRefs[index + 1]?.current) {
      inputRefs[index + 1].current.focus();
    }
  };

  // Handle Backspace
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      inputRefs[index - 1]?.current?.focus();
    }
  };

  // Handle Paste Full OTP (e.g. 123456)
  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/[^0-9]/g, '').trim().slice(0, 6);
    if (pasted.length > 0) {
      const newOtp = [...otpValues];
      for (let i = 0; i < 6; i++) {
        newOtp[i] = pasted[i] || '';
      }
      setOtpValues(newOtp);
      // Focus last pasted or next empty
      const targetIdx = Math.min(pasted.length, 5);
      inputRefs[targetIdx]?.current?.focus();
    }
  };

  // Submit OTP Verification
  const handleVerify = async (e) => {
    if (e) e.preventDefault();
    setErrorMessage('');

    const fullOtp = otpValues.join('');
    if (fullOtp.length !== 6) {
      setErrorMessage(lang === 'hi' ? 'कृपया 6-अंकीय सत्यापन कोड पूरा दर्ज करें।' : 'Please enter the complete 6-digit verification code.');
      return;
    }

    if (expirySeconds <= 0) {
      setErrorMessage(lang === 'hi' ? 'यह कोड समाप्त हो गया है। एक नया कोड प्राप्त करें।' : 'This code has expired. Request a new verification code.');
      return;
    }

    setLoading(true);
    try {
      const data = await verifyEmailOtp(emailParam, fullOtp);
      showToast(
        lang === 'hi' ? 'ईमेल सफलतापूर्वक सत्यापित किया गया!' : 'Email verified successfully!',
        'success'
      );

      if (data.isNewUser) {
        navigate('/onboarding');
      } else {
        const role = data.user.role || 'student';
        const rolePaths = {
          student: '/portal/student/dashboard',
          industry: '/portal/industry/dashboard',
          academia: '/portal/academia/dashboard',
          institution: '/portal/institution/dashboard',
          governance: '/portal/governance/dashboard'
        };
        navigate(rolePaths[role] || '/portal/student/dashboard');
      }
    } catch (err) {
      setErrorMessage(err.message || "That code isn't correct. Please check the email and try again.");
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResend = async () => {
    if (resendCooldown > 0) return;
    setErrorMessage('');
    setResendLoading(true);

    try {
      await resendEmailOtp(emailParam);
      setOtpValues(['', '', '', '', '', '']);
      setExpirySeconds(300); // Reset 5 min timer
      setResendCooldown(30); // Reset 30s cooldown
      showToast(
        lang === 'hi' ? 'नया कोड आपकी ईमेल पर भेजा गया!' : 'A new verification code has been sent!',
        'success'
      );
      if (inputRefs[0]?.current) inputRefs[0].current.focus();
    } catch (err) {
      setErrorMessage(err.message || "We couldn't send the verification email right now. Please try again.");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--warm-ivory)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 16px',
        transition: 'background-color 350ms ease'
      }}
    >
      {/* Container Box */}
      <div
        className="card-glass"
        style={{
          width: '100%',
          maxWidth: '480px',
          padding: '40px 36px',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-xl)',
          position: 'relative'
        }}
      >
        {/* Top Change Email Link */}
        <Link
          to="/login"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--saffron-primary)',
            textDecoration: 'none',
            marginBottom: '24px'
          }}
        >
          <ArrowLeft size={16} />
          <span>{lang === 'hi' ? '← ईमेल बदलें' : '← Change email'}</span>
        </Link>

        {/* Header Icon & Title */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              backgroundColor: 'var(--saffron-light)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}
          >
            <KeyRound size={28} color="var(--saffron-primary)" />
          </div>

          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--govt-ink)', marginBottom: '8px' }}>
            {lang === 'hi' ? 'अपनी ईमेल जांचें' : 'Check your email'}
          </h1>

          <p style={{ fontSize: '0.94rem', color: 'var(--muted-dark)', lineHeight: 1.5 }}>
            {lang === 'hi' ? 'हमने 6-अंकीय सत्यापन कोड भेजा है:' : 'We’ve sent a 6-digit verification code to'}{' '}
            <strong style={{ color: 'var(--saffron-primary)', display: 'block', marginTop: '4px' }}>
              {emailParam || 'your email'}
            </strong>
          </p>
        </div>

        {/* Error Alert */}
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
              marginBottom: '24px'
            }}
          >
            <AlertCircle size={18} style={{ flexShrink: 0 }} />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* 6 Individual Box Inputs */}
        <form onSubmit={handleVerify}>
          <div
            onPaste={handlePaste}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '8px',
              marginBottom: '24px'
            }}
          >
            {otpValues.map((val, idx) => (
              <input
                key={idx}
                ref={inputRefs[idx]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={val}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                style={{
                  width: '100%',
                  height: '56px',
                  textAlign: 'center',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'var(--govt-ink)',
                  backgroundColor: 'var(--pure-white)',
                  border: val ? '2px solid var(--saffron-primary)' : '1px solid var(--light-border)',
                  borderRadius: 'var(--radius-md)',
                  outline: 'none',
                  boxShadow: val ? 'var(--shadow-xs)' : 'none'
                }}
              />
            ))}
          </div>

          {/* Expiry Countdown Timer */}
          <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--muted-dark)', marginBottom: '24px', fontWeight: 600 }}>
            {expirySeconds > 0 ? (
              <span>
                {lang === 'hi' ? 'कोड की समय सीमा:' : 'Code expires in'}{' '}
                <strong style={{ color: 'var(--saffron-primary)' }}>{formatTime(expirySeconds)}</strong>
              </span>
            ) : (
              <span style={{ color: '#EF4444', fontWeight: 800 }}>
                {lang === 'hi' ? 'कोड की समय सीमा समाप्त हो गई है।' : 'Code expired.'}
              </span>
            )}
          </div>

          {/* Primary Submit Button */}
          <button
            type="submit"
            disabled={loading || otpValues.join('').length !== 6}
            className="btn-primary"
            style={{
              width: '100%',
              padding: '14px',
              fontSize: '1rem',
              borderRadius: 'var(--radius-md)',
              justifyContent: 'center',
              marginBottom: '20px',
              opacity: (loading || otpValues.join('').length !== 6) ? 0.6 : 1
            }}
          >
            {loading ? (
              <span>{lang === 'hi' ? 'सत्यापित किया जा रहा है...' : 'Verifying Code...'}</span>
            ) : (
              <span>{lang === 'hi' ? 'सत्यापित करें और आगे बढ़ें' : 'Verify & Continue'}</span>
            )}
          </button>

          {/* Resend Code Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              type="button"
              onClick={handleResend}
              disabled={resendCooldown > 0 || resendLoading}
              style={{
                background: 'none',
                border: 'none',
                color: resendCooldown > 0 ? 'var(--muted-text)' : 'var(--saffron-primary)',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: resendCooldown > 0 ? 'not-allowed' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <RefreshCw size={14} className={resendLoading ? 'animate-spin' : ''} />
              {resendCooldown > 0 ? (
                <span>Resend in {resendCooldown}s</span>
              ) : (
                <span>Resend Code</span>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
