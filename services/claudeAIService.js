// Backend API Service for Claude Integration (Hardened)
// File: services/claudeAIService.js

import Anthropic from '@anthropic-ai/sdk';

function safeJSONParse(str) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

export class ClaudeAIService {
  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
  }

  // Task Breakdown Intelligence
  async breakdownTask(taskDescription, projectContext) {
    // ...existing code...
    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1500,
        messages: [{ role: 'user', content: `You are an expert project manager. Break down this high-level task into specific, actionable subtasks:\n\nTask: "${taskDescription}"\nProject Context: ${projectContext}\n\nProvide a structured breakdown with:\n1. Subtask name\n2. Estimated hours\n3. Skills required\n4. Dependencies\n5. Priority level\n\nFormat as JSON array.` }]
      });
      const parsed = safeJSONParse(response.content[0].text);
      if (!parsed) throw new Error('Claude API returned invalid JSON');
      return parsed;
    } catch (error) {
      throw new Error('Failed to breakdown task');
    }
  }

  // Timeline Prediction Analysis
  async analyzeProjectTimeline(projectData) {
    // ...existing code...
    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: `Analyze this project data and provide timeline predictions:\n\nProject: ${JSON.stringify(projectData, null, 2)}\n\nBased on:\n- Current progress: ${projectData.progress}%\n- Completed tasks: ${projectData.completedTasks}\n- Remaining tasks: ${projectData.remainingTasks}\n- Team velocity: ${projectData.teamVelocity} tasks/week\n- Historical overrun rate: ${projectData.overrunRate}%\n\nProvide analysis in JSON format:\n{\n  "completionProbability": "percentage",\n  "projectedDelay": "days",\n  "riskFactors": ["factor1", "factor2"],\n  "recommendations": ["action1", "action2"],\n  "confidenceLevel": "high/medium/low"\n}` }]
      });
      const parsed = safeJSONParse(response.content[0].text);
      if (!parsed) throw new Error('Claude API returned invalid JSON');
      return parsed;
    } catch (error) {
      throw new Error('Failed to analyze timeline');
    }
  }

  // Scope Change Impact Analysis
  async analyzeScopeChange(originalScope, proposedChange, projectData) {
    // ...existing code...
    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1200,
        messages: [{ role: 'user', content: `Analyze the impact of this scope change:\n\nOriginal Scope: "${originalScope}"\nProposed Change: "${proposedChange}"\nCurrent Project Status: ${JSON.stringify(projectData)}\n\nAssess:\n1. Timeline impact (days added/removed)\n2. Resource requirements\n3. Budget implications\n4. Risk level (1-10)\n5. Alternative approaches\n6. Stakeholder communication needs\n\nProvide structured JSON response with recommendations.` }]
      });
      const parsed = safeJSONParse(response.content[0].text);
      if (!parsed) throw new Error('Claude API returned invalid JSON');
      return parsed;
    } catch (error) {
      throw new Error('Failed to analyze scope change');
    }
  }

  // Communication Sentiment & Team Health Analysis
  async analyzeTeamCommunications(communications) {
    // ...existing code...
    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: `Analyze these team communications for project health insights:\n\nCommunications: ${JSON.stringify(communications)}\n\nProvide analysis for:\n1. Overall team sentiment (positive/neutral/negative)\n2. Stress indicators\n3. Collaboration effectiveness\n4. Potential blockers mentioned\n5. Engagement levels by team member\n6. Recommended interventions\n\nReturn structured JSON with actionable insights.` }]
      });
      const parsed = safeJSONParse(response.content[0].text);
      if (!parsed) throw new Error('Claude API returned invalid JSON');
      return parsed;
    } catch (error) {
      throw new Error('Failed to analyze communications');
    }
  }

  // Resource Optimization Recommendations
  async optimizeResourceAllocation(teamData, projectRequirements) {
    // ...existing code...
    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1200,
        messages: [{ role: 'user', content: `Optimize resource allocation for maximum efficiency:\n\nTeam Data: ${JSON.stringify(teamData)}\nProject Requirements: ${JSON.stringify(projectRequirements)}\n\nProvide recommendations for:\n1. Optimal task assignments\n2. Workload balancing\n3. Skill gap identification\n4. Training recommendations\n5. Timeline optimization\n6. Risk mitigation strategies\n\nFormat as actionable JSON response.` }]
      });
      const parsed = safeJSONParse(response.content[0].text);
      if (!parsed) throw new Error('Claude API returned invalid JSON');
      return parsed;
    } catch (error) {
      throw new Error('Failed to optimize resources');
    }
  }

  // Natural Language Project Queries
  async handleProjectQuery(query, projectContext) {
    // ...existing code...
    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 800,
        messages: [{ role: 'user', content: `You are an AI project management assistant. Answer this query about the project:\n\nQuery: "${query}"\nProject Context: ${JSON.stringify(projectContext)}\n\nProvide a helpful, actionable response based on the project data. Include specific recommendations when appropriate.` }]
      });
      if (!response.content[0].text) throw new Error('Claude API returned no text');
      return response.content[0].text;
    } catch (error) {
      throw new Error('Failed to process query');
    }
  }
}
