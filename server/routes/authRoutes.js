import express from 'express';
import { z } from 'zod';
import { db } from '../db.js';

export const authRouter = express.Router();

const loginSchema = z.object({
  email: z.string().trim().min(1, { message: 'Please enter your email.' }).email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(1, { message: 'Please enter your password.' })
});

const registerSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().trim().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  role: z.enum(['student', 'industry', 'academia', 'institution', 'governance']).default('student'),
  organization: z.string().optional()
});

/**
 * 1. POST /api/auth/login
 */
authRouter.post('/login', (req, res) => {
  try {
    const parseResult = loginSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({
        success: false,
        error: parseResult.error.errors[0]?.message || 'Please enter a valid email and password.'
      });
    }

    const { email, password } = parseResult.data;

    // Find User
    const user = db.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Incorrect email or password.'
      });
    }

    // Verify Password Server-Side
    const isValidPassword = db.verifyPassword(user, password);
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        error: 'Incorrect email or password.'
      });
    }

    // Create Authenticated Session
    const { sessionId, expiresAt } = db.createSession(user.id);

    // Set Secure HTTP-Only Cookie
    res.cookie('careersetu_session', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      expires: new Date(expiresAt)
    });

    const userPayload = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      avatar: user.avatar,
      organization: user.organization
    };

    return res.status(200).json({
      success: true,
      user: userPayload,
      message: 'Signed in successfully.'
    });
  } catch (error) {
    console.error('Login Error:', error);
    return res.status(500).json({
      success: false,
      error: 'An error occurred during authentication. Please try again.'
    });
  }
});

/**
 * 2. POST /api/auth/register
 */
authRouter.post('/register', (req, res) => {
  try {
    const parseResult = registerSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({
        success: false,
        error: parseResult.error.errors[0]?.message || 'Invalid registration details.'
      });
    }

    const { name, email, password, role, organization } = parseResult.data;

    const existingUser = db.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'An account with this email address already exists. Please sign in.'
      });
    }

    const newUser = db.createUser({
      email,
      password,
      name,
      role,
      organization
    });

    // Create Session
    const { sessionId, expiresAt } = db.createSession(newUser.id);

    res.cookie('careersetu_session', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      expires: new Date(expiresAt)
    });

    const userPayload = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
      avatar: newUser.avatar,
      organization: newUser.organization
    };

    return res.status(201).json({
      success: true,
      user: userPayload,
      message: 'Account created successfully.'
    });
  } catch (error) {
    console.error('Registration Error:', error);
    return res.status(500).json({
      success: false,
      error: 'An error occurred during registration. Please try again.'
    });
  }
});

/**
 * 3. GET /api/auth/session
 */
authRouter.get('/session', (req, res) => {
  const sessionId = req.cookies?.careersetu_session || req.headers.authorization?.replace('Bearer ', '');
  if (!sessionId) {
    return res.status(200).json({ authenticated: false, user: null });
  }

  const sessionData = db.findSession(sessionId);
  if (!sessionData) {
    res.clearCookie('careersetu_session', { path: '/' });
    return res.status(200).json({ authenticated: false, user: null });
  }

  const userPayload = {
    id: sessionData.user.id,
    email: sessionData.user.email,
    name: sessionData.user.name,
    role: sessionData.user.role,
    avatar: sessionData.user.avatar,
    organization: sessionData.user.organization
  };

  return res.status(200).json({
    authenticated: true,
    user: userPayload
  });
});

/**
 * 4. POST /api/auth/logout
 */
authRouter.post('/logout', (req, res) => {
  const sessionId = req.cookies?.careersetu_session || req.headers.authorization?.replace('Bearer ', '');
  if (sessionId) {
    db.deleteSession(sessionId);
  }
  res.clearCookie('careersetu_session', { path: '/' });
  return res.status(200).json({ success: true, message: 'Signed out successfully.' });
});

/**
 * 5. POST /api/auth/onboarding
 */
authRouter.post('/onboarding', (req, res) => {
  try {
    const sessionId = req.cookies?.careersetu_session || req.headers.authorization?.replace('Bearer ', '');
    const sessionData = db.findSession(sessionId);

    if (!sessionData) {
      return res.status(401).json({ success: false, error: 'Unauthorized session.' });
    }

    const { role, name, institution, course, branch, graduationYear, semester, organization } = req.body;

    const updatedUser = db.createUser({
      email: sessionData.user.email,
      name: name || sessionData.user.name,
      role: role || sessionData.user.role,
      organization: organization || institution || sessionData.user.organization
    });

    if (role === 'student') {
      db.saveStudentProfile(sessionData.user.id, {
        institution: institution || 'Indian Institute of Technology, Delhi',
        course: course || 'B.Tech',
        branch: branch || 'Computer Science Engineering',
        graduationYear: graduationYear || '2026',
        semester: semester || '7th Semester',
        skills: ['React', 'Python', 'Git & Version Control'],
        readinessScore: 82
      });
    }

    return res.status(200).json({
      success: true,
      user: updatedUser
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Could not complete onboarding.' });
  }
});
