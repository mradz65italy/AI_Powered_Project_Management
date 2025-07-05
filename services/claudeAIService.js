import Anthropic from '@anthropic-ai/sdk';

class ClaudeAIService {
  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
  }

  // Task Breakdown Intelligence
  async breakdownTask(taskDescription, projectContext) {
    const prompt = `
You are an expert project manager. Break down this high-level task into specific, actionable subtasks:

Task: "${taskDescription}"
Project Context: ${projectContext}

Provide a structured breakdown with:
1. Subtask name
2. Estimated hours
3. Skills required
4. Dependencies
5. Priority level

Format as JSON array.
`;

    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1500,
        messages: [{
          role: 'user',
          content: prompt
        }]
      });

      return JSON.parse(response.content[0].text);
    } catch (error) {
      console.error('Claude API Error:', error);
      throw new Error('Failed to breakdown task');
    }
  }

  // Timeline Prediction Analysis
  async analyzeProjectTimeline(projectData) {
    const prompt = `
Analyze this project data and provide timeline predictions:

Project: ${JSON.stringify(projectData, null, 2)}

Based on:
- Current progress: ${projectData.progress}%
- Completed tasks: ${projectData.completedTasks}
- Remaining tasks: ${projectData.remainingTasks}
- Team velocity: ${projectData.teamVelocity} tasks/week
- Historical overrun rate: ${projectData.overrunRate}%

Provide analysis in JSON format:
{
  "completionProbability": "percentage",
  "projectedDelay": "days",
  "riskFactors": ["factor1", "factor2"],
  "recommendations": ["action1", "action2"],
  "confidenceLevel": "high/medium/low"
}
`;

    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: prompt
        }]
      });

      return JSON.parse(response.content[0].text);
    } catch (error) {
      console.error('Timeline Analysis Error:', error);
      throw new Error('Failed to analyze timeline');
    }
  }

  // Scope Change Impact Analysis
  async analyzeScopeChange(originalScope, proposedChange, projectData) {
    const prompt = `
Analyze the impact of this scope change:

Original Scope: "${originalScope}"
Proposed Change: "${proposedChange}"
Current Project Status: ${JSON.stringify(projectData)}

Assess:
1. Timeline impact (days added/removed)
2. Resource requirements
3. Budget implications
4. Risk level (1-10)
5. Alternative approaches
6. Stakeholder communication needs

Provide structured JSON response with recommendations.
`;

    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1200,
        messages: [{
          role: 'user',
          content: prompt
        }]
      });

      return JSON.parse(response.content[0].text);
    } catch (error) {
      console.error('Scope Analysis Error:', error);
      throw new Error('Failed to analyze scope change');
    }
  }

  // Communication Sentiment & Team Health Analysis
  async analyzeTeamCommunications(communications) {
    const prompt = `
Analyze these team communications for project health insights:

Communications: ${JSON.stringify(communications)}

Provide analysis for:
1. Overall team sentiment (positive/neutral/negative)
2. Stress indicators
3. Collaboration effectiveness
4. Potential blockers mentioned
5. Engagement levels by team member
6. Recommended interventions

Return structured JSON with actionable insights.
`;

    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: prompt
        }]
      });

      return JSON.parse(response.content[0].text);
    } catch (error) {
      console.error('Communication Analysis Error:', error);
      throw new Error('Failed to analyze communications');
    }
  }

  // Resource Optimization Recommendations
  async optimizeResourceAllocation(teamData, projectRequirements) {
    const prompt = `
Optimize resource allocation for maximum efficiency:

Team Data: ${JSON.stringify(teamData)}
Project Requirements: ${JSON.stringify(projectRequirements)}

Provide recommendations for:
1. Optimal task assignments
2. Workload balancing
3. Skill gap identification
4. Training recommendations
5. Timeline optimization
6. Risk mitigation strategies

Format as actionable JSON response.
`;

    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1200,
        messages: [{
          role: 'user',
          content: prompt
        }]
      });

      return JSON.parse(response.content[0].text);
    } catch (error) {
      console.error('Resource Optimization Error:', error);
      throw new Error('Failed to optimize resources');
    }
  }

  // Natural Language Project Queries
  async handleProjectQuery(query, projectContext) {
    const prompt = `
You are an AI project management assistant. Answer this query about the project:

Query: "${query}"
Project Context: ${JSON.stringify(projectContext)}

Provide a helpful, actionable response based on the project data. Include specific recommendations when appropriate.
`;

    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 800,
        messages: [{
          role: 'user',
          content: prompt
        }]
      });

      return response.content[0].text;
    } catch (error) {
      console.error('Query Processing Error:', error);
      throw new Error('Failed to process query');
    }
  }
}

export { ClaudeAIService };
