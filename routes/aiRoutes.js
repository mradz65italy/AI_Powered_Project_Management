// Express.js API Routes Implementation (Hardened)
// File: routes/aiRoutes.js

import express from 'express';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import { ClaudeAIService } from '../services/claudeAIService.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();
const claudeService = new ClaudeAIService();

// Rate Limiter Middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { success: false, error: 'Too many requests, please try again later.' }
});

router.use(limiter);

// Helper: Standard error response
function handleError(res, error, msg = 'Internal server error') {
  // Never leak stack traces or sensitive info
  return res.status(500).json({ success: false, error: msg });
}

// Task Breakdown Endpoint
router.post(
  '/breakdown-task',
  authenticate,
  [
    body('taskDescription').isString().isLength({ min: 5, max: 500 }),
    body('projectContext').isString().isLength({ min: 0, max: 2000 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, error: 'Invalid input', details: errors.array() });
    }
    try {
      const { taskDescription, projectContext } = req.body;
      const breakdown = await claudeService.breakdownTask(taskDescription, projectContext);
      res.json({ success: true, data: breakdown });
    } catch (error) {
      handleError(res, error, 'Failed to breakdown task');
    }
  }
);

// Timeline Analysis Endpoint
router.post(
  '/analyze-timeline',
  authenticate,
  [body('projectData').isObject()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, error: 'Invalid input', details: errors.array() });
    }
    try {
      const { projectData } = req.body;
      const analysis = await claudeService.analyzeProjectTimeline(projectData);
      res.json({ success: true, data: analysis });
    } catch (error) {
      handleError(res, error, 'Failed to analyze timeline');
    }
  }
);

// Scope Change Analysis Endpoint
router.post(
  '/analyze-scope-change',
  authenticate,
  [
    body('originalScope').isString().isLength({ min: 5, max: 1000 }),
    body('proposedChange').isString().isLength({ min: 5, max: 1000 }),
    body('projectData').isObject()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, error: 'Invalid input', details: errors.array() });
    }
    try {
      const { originalScope, proposedChange, projectData } = req.body;
      const analysis = await claudeService.analyzeScopeChange(originalScope, proposedChange, projectData);
      res.json({ success: true, data: analysis });
    } catch (error) {
      handleError(res, error, 'Failed to analyze scope change');
    }
  }
);

// Team Communication Analysis Endpoint
router.post(
  '/analyze-communications',
  authenticate,
  [body('communications').isArray()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, error: 'Invalid input', details: errors.array() });
    }
    try {
      const { communications } = req.body;
      const analysis = await claudeService.analyzeTeamCommunications(communications);
      res.json({ success: true, data: analysis });
    } catch (error) {
      handleError(res, error, 'Failed to analyze communications');
    }
  }
);

// Resource Optimization Endpoint
router.post(
  '/optimize-resources',
  authenticate,
  [
    body('teamData').isObject(),
    body('projectRequirements').isObject()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, error: 'Invalid input', details: errors.array() });
    }
    try {
      const { teamData, projectRequirements } = req.body;
      const optimization = await claudeService.optimizeResourceAllocation(teamData, projectRequirements);
      res.json({ success: true, data: optimization });
    } catch (error) {
      handleError(res, error, 'Failed to optimize resources');
    }
  }
);

// Natural Language Query Endpoint
router.post(
  '/query',
  authenticate,
  [
    body('query').isString().isLength({ min: 2, max: 1000 }),
    body('projectContext').isObject()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, error: 'Invalid input', details: errors.array() });
    }
    try {
      const { query, projectContext } = req.body;
      const response = await claudeService.handleProjectQuery(query, projectContext);
      res.json({ success: true, data: response });
    } catch (error) {
      handleError(res, error, 'Failed to process query');
    }
  }
);

export default router;
