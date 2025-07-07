// Example login endpoint for secure cookie auth
// File: routes/login.js
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';
const JWT_EXPIRES = '2h';

// Dummy user validation (replace with real user DB check)
function validateUser(username, password) {
  return username === 'admin' && password === 'password';
}

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!validateUser(username, password)) {
    return res.status(401).json({ success: false, error: 'Invalid credentials' });
  }
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: JWT_EXPIRES });
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 2 * 60 * 60 * 1000 // 2 hours
  });
  res.json({ success: true });
});

router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ success: true });
});

export default router;
