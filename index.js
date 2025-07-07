import express from 'express';
import aiRoutes from './routes/aiRoutes.js';
import loginRoutes from './routes/login.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';

const app = express();

// CORS configuration (restrict as needed)
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true // Allow cookies
}));

app.use(express.json({ limit: '1mb' })); // Prevent large payloads
app.use(cookieParser()); // Parse cookies

// Enforce HTTPS in production
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect('https://' + req.headers.host + req.url);
  }
  next();
});

app.use('/api/ai', aiRoutes);
app.use('/api/auth', loginRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
