// Authentication Middleware (JWT-based, Secure Cookie)
// File: middleware/authenticate.js

import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

export default function authenticate(req, res, next) {
  // Read token from httpOnly cookie
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({ success: false, error: 'Missing authentication token' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, error: 'Invalid or expired token' });
  }
}
