import request from 'supertest';
import express from 'express';
import aiRoutes from '../routes/aiRoutes.js';
import { ClaudeAIService } from '../services/claudeAIService.js';

// Mock ClaudeAIService methods to avoid real API calls
describe('AI API Integration Endpoints', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/api/ai', aiRoutes);
  });

  it('POST /api/ai/breakdown-task returns structured subtasks', async () => {
    ClaudeAIService.prototype.breakdownTask = jest.fn().mockResolvedValue([
      { name: 'Subtask 1', estimatedHours: 2, skills: ['Skill1'], dependencies: [], priority: 'High' }
    ]);
    const res = await request(app)
      .post('/api/ai/breakdown-task')
      .send({ taskDescription: 'Test Task', projectContext: 'Test Context' });
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('POST /api/ai/analyze-timeline returns timeline analysis', async () => {
    ClaudeAIService.prototype.analyzeProjectTimeline = jest.fn().mockResolvedValue({
      completionProbability: '90%',
      projectedDelay: 2,
      riskFactors: ['factor1'],
      recommendations: ['action1'],
      confidenceLevel: 'high'
    });
    const res = await request(app)
      .post('/api/ai/analyze-timeline')
      .send({ projectData: { progress: 50 } });
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('completionProbability');
  });

  // Add more endpoint tests as needed
});
