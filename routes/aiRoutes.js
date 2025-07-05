import express from 'express';
import { ClaudeAIService } from '../services/claudeAIService.js';

const router = express.Router();
const claudeService = new ClaudeAIService();

// Task Breakdown Endpoint
router.post('/breakdown-task', async (req, res) => {
  try {
    const { taskDescription, projectContext } = req.body;
    const breakdown = await claudeService.breakdownTask(taskDescription, projectContext);
    res.json({ success: true, data: breakdown });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Timeline Analysis Endpoint
router.post('/analyze-timeline', async (req, res) => {
  try {
    const { projectData } = req.body;
    const analysis = await claudeService.analyzeProjectTimeline(projectData);
    res.json({ success: true, data: analysis });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Scope Change Analysis Endpoint
router.post('/analyze-scope-change', async (req, res) => {
  try {
    const { originalScope, proposedChange, projectData } = req.body;
    const analysis = await claudeService.analyzeScopeChange(originalScope, proposedChange, projectData);
    res.json({ success: true, data: analysis });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Team Communication Analysis Endpoint
router.post('/analyze-communications', async (req, res) => {
  try {
    const { communications } = req.body;
    const analysis = await claudeService.analyzeTeamCommunications(communications);
    res.json({ success: true, data: analysis });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Resource Optimization Endpoint
router.post('/optimize-resources', async (req, res) => {
  try {
    const { teamData, projectRequirements } = req.body;
    const optimization = await claudeService.optimizeResourceAllocation(teamData, projectRequirements);
    res.json({ success: true, data: optimization });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Natural Language Query Endpoint
router.post('/query', async (req, res) => {
  try {
    const { query, projectContext } = req.body;
    const response = await claudeService.handleProjectQuery(query, projectContext);
    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
