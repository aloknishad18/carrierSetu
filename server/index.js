import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { authRouter } from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS setup for Vite frontend dev server
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
    credentials: true
  })
);

// Body Parsers with explicit error handling for invalid JSON payloads
app.use((req, res, next) => {
  express.json()(req, res, (err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: 'Invalid JSON format in request body.'
      });
    }
    next();
  });
});
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Root Healthcheck Endpoint
app.get('/api/health', (req, res) => {
  return res.status(200).json({
    status: 'online',
    project: 'CareerSetu (SIH26044)',
    service: 'Authentication & Career Intelligence API Engine',
    timestamp: new Date().toISOString()
  });
});

// Mount API Auth Routes
app.use('/api/auth', authRouter);

// 404 Handler for Unmatched API Endpoints
app.use((req, res) => {
  return res.status(404).json({
    success: false,
    error: `API endpoint '${req.originalUrl}' not found.`
  });
});

// Global Express JSON Error Handler (Guarantees JSON output, never HTML)
app.use((err, req, res, _next) => {
  console.error('Unhandled Express Server Error:', err);
  return res.status(err.status || 500).json({
    success: false,
    error: err.message || 'An internal server error occurred.'
  });
});

// Start Express Server only if executed directly
if (process.env.NODE_ENV !== 'test' && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`
============================================================
🚀 CAREERSETU (SIH26044) AUTHENTICATION BACKEND RUNNING
Port: ${PORT}
Health Endpoint: http://localhost:${PORT}/api/health
Auth Base URL:   http://localhost:${PORT}/api/auth
============================================================
    `);
  });
}

export default app;

