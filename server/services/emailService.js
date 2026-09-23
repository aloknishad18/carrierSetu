import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Get Email Config from Environment Variables
const EMAIL_FROM = process.env.EMAIL_FROM || 'CareerSetu Security <noreply@careersetu.in>';
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT || 587;
const SMTP_USER = process.env.SMTP_USER || process.env.GMAIL_USER;
const SMTP_PASS = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

let transporter = null;

if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });
}

/**
 * Generate Clean Branded CareerSetu HTML Email
 */
function createOtpHtml(otp, recipientEmail) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CareerSetu Verification Code</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #FAF9F6;
      color: #181716;
      margin: 0;
      padding: 32px 16px;
      -webkit-font-smoothing: antialiased;
    }
    .email-container {
      max-width: 520px;
      margin: 0 auto;
      background-color: #FFFFFF;
      border: 1px solid #E5E0D8;
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 8px 24px rgba(24, 23, 22, 0.06);
    }
    .brand-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 24px;
    }
    .brand-logo {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: linear-gradient(135deg, #E87516 0%, #312E81 100%);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #FFFFFF;
      font-weight: 900;
      font-size: 20px;
    }
    .brand-name {
      font-size: 22px;
      font-weight: 800;
      color: #181716;
      letter-spacing: -0.02em;
    }
    .saffron { color: #E87516; }
    .badge-sih {
      display: inline-block;
      background-color: #FFF5EB;
      color: #E87516;
      border: 1px solid rgba(232, 117, 22, 0.3);
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.04em;
      margin-bottom: 20px;
    }
    h1 {
      font-size: 22px;
      font-weight: 800;
      margin: 0 0 12px 0;
      color: #181716;
    }
    p {
      font-size: 15px;
      line-height: 1.6;
      color: #4B4845;
      margin: 0 0 24px 0;
    }
    .otp-box {
      background-color: #FAF9F6;
      border: 2px dashed #E87516;
      border-radius: 14px;
      padding: 24px;
      text-align: center;
      margin: 28px 0;
    }
    .otp-code {
      font-size: 38px;
      font-weight: 800;
      letter-spacing: 10px;
      color: #E87516;
      font-family: monospace;
    }
    .security-note {
      font-size: 13px;
      color: #6B6966;
      border-top: 1px solid #E5E0D8;
      padding-top: 20px;
      margin-top: 28px;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #94A3B8;
      margin-top: 32px;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="brand-header">
      <div class="brand-logo">CS</div>
      <div class="brand-name">Career<span class="saffron">Setu</span></div>
    </div>

    <div class="badge-sih">SIH26044 • SECURE AUTHENTICATION</div>

    <h1>Verify your email address</h1>
    <p>Your CareerSetu security verification code is below. Enter this code to sign in to your account.</p>

    <div class="otp-box">
      <div style="font-size: 11px; font-weight: 800; color: #6B6966; letter-spacing: 0.06em; margin-bottom: 8px;">VERIFICATION CODE</div>
      <div class="otp-code">${otp}</div>
    </div>

    <p>This code expires in <strong>5 minutes</strong>. For your security, never share this code with anyone.</p>
    
    <div class="security-note">
      If you did not request this verification code, please ignore this email or contact platform support if you have concerns.
    </div>

    <div class="footer">
      © CareerSetu • SIH26044<br>
      Bridging Skills with Opportunities. • कौशल से अवसर तक।
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Send OTP Email Service
 */
export async function sendOtpEmail({ email, otp }) {
  const htmlContent = createOtpHtml(otp, email);

  // If transporter configured, send via real SMTP / Email provider
  if (transporter) {
    try {
      const info = await transporter.sendMail({
        from: EMAIL_FROM,
        to: email,
        subject: 'CareerSetu Verification Code',
        html: htmlContent
      });
      console.log(`[EMAIL SUCCESS] Sent OTP to ${email}, MessageId: ${info.messageId}`);
      return { success: true, messageId: info.messageId };
    } catch (err) {
      console.error('[EMAIL ERROR] Failed to send via SMTP:', err);
      // Fall back to dev preview logging
    }
  }

  // Developer Preview & Local Inbox Logger (when SMTP credentials not in .env)
  console.log(`
============================================================
📧 [CAREERSETU EMAIL SENT TO: ${email}]
Subject: CareerSetu Verification Code
Verification Code: [ ${otp} ]
Expires in: 5 minutes
============================================================
  `);

  // Save latest preview for dev testing
  try {
    const devPreviewFile = path.resolve(process.cwd(), 'server', 'data', 'latest_email_preview.html');
    fs.writeFileSync(devPreviewFile, htmlContent, 'utf-8');
  } catch (e) {
    // Ignore preview write error
  }

  return { success: true, mode: 'dev-preview' };
}
