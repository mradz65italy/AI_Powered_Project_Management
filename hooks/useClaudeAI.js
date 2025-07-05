import { useState } from 'react';

export const useClaudeAI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callClaudeAPI = async (endpoint, data) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/ai/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const result = await response.json();
      return result.data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const breakdownTask = (taskDescription, projectContext) => 
    callClaudeAPI('breakdown-task', { taskDescription, projectContext });

  const analyzeTimeline = (projectData) => 
    callClaudeAPI('analyze-timeline', { projectData });

  const analyzeScopeChange = (originalScope, proposedChange, projectData) => 
    callClaudeAPI('analyze-scope-change', { originalScope, proposedChange, projectData });

  const analyzeCommunications = (communications) => 
    callClaudeAPI('analyze-communications', { communications });

  const optimizeResources = (teamData, projectRequirements) => 
    callClaudeAPI('optimize-resources', { teamData, projectRequirements });

  const queryProject = (query, projectContext) => 
    callClaudeAPI('query', { query, projectContext });

  return {
    loading,
    error,
    breakdownTask,
    analyzeTimeline,
    analyzeScopeChange,
    analyzeCommunications,
    optimizeResources,
    queryProject
  };
};
