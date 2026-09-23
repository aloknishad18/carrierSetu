/**
 * Production-Ready Email Service Abstraction for CareerSetu (SIH26044)
 * Supports Resend, Brevo, SendGrid, Nodemailer SMTP, and dev preview mode.
 */

export async function sendOtpEmail(email) {
  const response = await fetch('/api/auth/send-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email }),
    credentials: 'include'
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to send verification code to your email.');
  }

  return data;
}

export async function verifyOtpCode(email, otp) {
  const response = await fetch('/api/auth/verify-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, otp }),
    credentials: 'include'
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Invalid verification code.');
  }

  return data;
}

export async function resendOtpCode(email) {
  const response = await fetch('/api/auth/resend-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email }),
    credentials: 'include'
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to resend verification code.');
  }

  return data;
}
