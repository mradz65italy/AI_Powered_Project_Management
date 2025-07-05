// PMP-Enhanced Claude AI Service
// File: services/pmpClaudeService.js

import Anthropic from '@anthropic-ai/sdk';

class PMPClaudeService {
  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
  }

  // PMP Project Charter AI Analysis
  async analyzeProjectCharter(charterData) {
    const prompt = `
As a PMP-certified project management expert, analyze this project charter for completeness and alignment with PMI best practices:

Charter Data: ${JSON.stringify(charterData, null, 2)}

Evaluate against PMP standards:
1. Charter Completeness (PMI PMBOK requirements)
2. SMART Objectives alignment
3. Stakeholder identification adequacy
4. Success criteria measurability
5. Scope clarity and boundaries
6. High-level risk identification
7. Business case justification

Provide structured JSON analysis with:
- completenessScore (1-10)
- recommendations for improvement
- missing elements per PMBOK
- risk flags
- stakeholder analysis gaps

Format response as actionable recommendations following PMP best practices.
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
      console.error('PMP Charter Analysis Error:', error);
      throw new Error('Failed to analyze project charter');
    }
  }

  // Work Breakdown Structure (WBS) AI Optimization
  async optimizeWBS(wbsData, projectObjectives) {
    const prompt = `
As a PMP expert, analyze and optimize this Work Breakdown Structure following PMI guidelines:

WBS Data: ${JSON.stringify(wbsData, null, 2)}
Project Objectives: ${JSON.stringify(projectObjectives)}

Apply PMP WBS best practices:
1. 100% Rule compliance (all work included)
2. Mutually exclusive deliverables
3. Appropriate decomposition level
4. Work package sizing (8-80 hour rule)
5. Outcome-oriented structure
6. Hierarchical logic validation
7. Control account alignment

Provide optimization recommendations including:
- Missing work packages
- Decomposition level adjustments
- Dependencies identification
- Resource assignment suggestions
- Control points establishment
- Risk-prone areas flagging

Format as actionable WBS improvements with PMP rationale.
`;

    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1800,
        messages: [{
          role: 'user',
          content: prompt
        }]
      });

      return JSON.parse(response.content[0].text);
    } catch (error) {
      console.error('WBS Optimization Error:', error);
      throw new Error('Failed to optimize WBS');
    }
  }

  // Earned Value Management (EVM) AI Analysis
  async analyzeEarnedValue(evmData, projectBaseline) {
    const prompt = `
Perform comprehensive Earned Value Management analysis following PMP EVM standards:

EVM Data: ${JSON.stringify(evmData, null, 2)}
Project Baseline: ${JSON.stringify(projectBaseline)}

Calculate and analyze:
1. Schedule Performance Index (SPI) trends
2. Cost Performance Index (CPI) trends  
3. To-Complete Performance Index (TCPI)
4. Estimate at Completion (EAC) scenarios
5. Variance analysis (SV, CV, VAC)
6. Performance trend forecasting
7. Control threshold breaches

Provide PMP-compliant analysis including:
- Performance interpretation per PMI standards
- Recommended corrective actions
- Forecasting accuracy assessment
- Control limit breach notifications
- Stakeholder communication recommendations
- Recovery planning guidance

Format as executive dashboard with actionable insights.
`;

    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1600,
        messages: [{
          role: 'user',
          content: prompt
        }]
      });

      return JSON.parse(response.content[0].text);
    } catch (error) {
      console.error('EVM Analysis Error:', error);
      throw new Error('Failed to analyze earned value metrics');
    }
  }

  // Risk Management AI Enhancement
  async enhanceRiskManagement(riskRegister, projectContext) {
    const prompt = `
Enhance risk management following PMP risk management processes:

Risk Register: ${JSON.stringify(riskRegister, null, 2)}
Project Context: ${JSON.stringify(projectContext)}

Apply PMI Risk Management knowledge area:
1. Risk identification completeness
2. Qualitative risk analysis validation
3. Quantitative risk analysis recommendations
4. Risk response strategy optimization
5. Secondary and residual risk identification
6. Risk trigger identification
7. Contingency planning adequacy

Provide enhanced risk management including:
- Additional risk identification using PMI techniques
- Risk probability/impact matrix validation
- Response strategy optimization (avoid/mitigate/transfer/accept)
- Contingency and fallback planning
- Risk monitoring indicators
- Portfolio risk interdependencies
- Communication plan for risks

Format as comprehensive risk management enhancement plan.
`;

    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2000,
        messages: [{
          role: 'user',
          content: prompt
        }]
      });

      return JSON.parse(response.content[0].text);
    } catch (error) {
      console.error('Risk Management Enhancement Error:', error);
      throw new Error('Failed to enhance risk management');
    }
  }

  // Quality Management AI Analysis
  async analyzeQualityManagement(qualityData, projectRequirements) {
    const prompt = `
Analyze quality management following PMP Quality Management processes:

Quality Data: ${JSON.stringify(qualityData, null, 2)}
Project Requirements: ${JSON.stringify(projectRequirements)}

Apply PMI Quality Management framework:
1. Quality planning assessment
2. Quality assurance process evaluation
3. Quality control metrics analysis
4. Continuous improvement opportunities
5. Cost of quality analysis
6. Quality baseline compliance
7. Customer satisfaction alignment

Provide quality management analysis including:
- Quality planning gaps identification
- QA process optimization recommendations
- QC metrics improvement suggestions
- Quality baseline adjustments
- Cost of quality optimization
- Stakeholder satisfaction enhancement
- Quality tool recommendations (Pareto, fishbone, etc.)

Format as comprehensive quality management improvement plan.
`;

    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1400,
        messages: [{
          role: 'user',
          content: prompt
        }]
      });

      return JSON.parse(response.content[0].text);
    } catch (error) {
      console.error('Quality Analysis Error:', error);
      throw new Error('Failed to analyze quality management');
    }
  }

  // Stakeholder Management AI Enhancement
  async enhanceStakeholderManagement(stakeholderData, communicationPlan) {
    const prompt = `
Enhance stakeholder management following PMP Stakeholder Management processes:

Stakeholder Data: ${JSON.stringify(stakeholderData, null, 2)}
Communication Plan: ${JSON.stringify(communicationPlan)}

Apply PMI Stakeholder Management knowledge area:
1. Stakeholder identification completeness
2. Stakeholder analysis depth (power/interest/attitude)
3. Engagement strategy optimization
4. Communication requirements analysis
5. Stakeholder engagement monitoring
6. Issue resolution tracking
7. Change management impact on stakeholders

Provide stakeholder management enhancement including:
- Additional stakeholder identification
- Engagement strategy refinement
- Communication plan optimization
- Influence network mapping
- Engagement level monitoring metrics
- Conflict resolution strategies
- Change communication protocols

Format as comprehensive stakeholder engagement improvement plan.
`;

    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1600,
        messages: [{
          role: 'user',
          content: prompt
        }]
      });

      return JSON.parse(response.content[0].text);
    } catch (error) {
      console.error('Stakeholder Management Error:', error);
      throw new Error('Failed to enhance stakeholder management');
    }
  }

  // Resource Management AI Optimization
  async optimizeResourceManagement(resourceData, projectSchedule) {
    const prompt = `
Optimize resource management following PMP Resource Management processes:

Resource Data: ${JSON.stringify(resourceData, null, 2)}
Project Schedule: ${JSON.stringify(projectSchedule)}

Apply PMI Resource Management knowledge area:
1. Resource planning optimization
2. Activity resource estimation validation
3. Resource leveling and smoothing
4. Team development opportunities
5. Resource performance analysis
6. Conflict resolution strategies
7. Virtual team management

Provide resource optimization including:
- Resource allocation efficiency improvements
- Skill gap identification and training plans
- Team performance enhancement strategies
- Resource conflict resolution
- Cross-training recommendations
- Succession planning for key resources
- Virtual team collaboration optimization

Format as comprehensive resource management optimization plan.
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
      console.error('Resource Management Error:', error);
      throw new Error('Failed to optimize resource management');
    }
  }

  // Integration Management AI Coordination
  async coordinateProjectIntegration(projectData, changeRequests) {
    const prompt = `
Coordinate project integration following PMP Integration Management processes:

Project Data: ${JSON.stringify(projectData, null, 2)}
Change Requests: ${JSON.stringify(changeRequests)}

Apply PMI Integration Management knowledge area:
1. Project plan integration assessment
2. Change control process optimization
3. Configuration management validation
4. Knowledge management enhancement
5. Project closure preparation
6. Lessons learned integration
7. Organizational process assets updates

Provide integration coordination including:
- Project plan coherence analysis
- Change impact assessment automation
- Knowledge transfer optimization
- Baseline integration validation
- Process improvement recommendations
- Closure checklist preparation
- Organizational learning capture

Format as comprehensive integration management coordination plan.
`;

    try {
      const response = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1700,
        messages: [{
          role: 'user',
          content: prompt
        }]
      });

      return JSON.parse(response.content[0].text);
    } catch (error) {
      console.error('Integration Management Error:', error);
      throw new Error('Failed to coordinate project integration');
    }
  }
}

// PMP Data Models and Validation
// File: models/pmpModels.js

export class PMPProject {
  constructor(projectData) {
    this.validatePMPCompliance(projectData);
    Object.assign(this, projectData);
  }

  validatePMPCompliance(data) {
    const requiredFields = [
      'charter', 'wbs', 'schedule', 'budget', 
      'riskRegister', 'qualityPlan', 'communicationPlan',
      'stakeholderRegister', 'procurementPlan'
    ];

    const missingFields = requiredFields.filter(field => !data[field]);
    if (missingFields.length > 0) {
      throw new Error(`Missing PMP required fields: ${missingFields.join(', ')}`);
    }
  }

  calculateEVM() {
    const { plannedValue, earnedValue, actualCost } = this.budget;
    
    return {
      pv: plannedValue,
      ev: earnedValue,
      ac: actualCost,
      spi: earnedValue / plannedValue,
      cpi: earnedValue / actualCost,
      sv: earnedValue - plannedValue,
      cv: earnedValue - actualCost,
      eac: this.calculateEAC(),
      etc: this.calculateETC(),
      vac: this.budget.totalBudget - this.calculateEAC()
    };
  }

  calculateEAC() {
    const { totalBudget, actualCost, earnedValue } = this.budget;
    const cpi = earnedValue / actualCost;
    
    // EAC = AC + [(BAC - EV) / CPI]
    return actualCost + ((totalBudget - earnedValue) / cpi);
  }

  calculateETC() {
    return this.calculateEAC() - this.budget.actualCost;
  }

  assessScheduleHealth() {
    const spi = this.calculateEVM().spi;
    
    if (spi >= 1.0) return 'On Track';
    if (spi >= 0.9) return 'Minor Delay';
    if (spi >= 0.8) return 'Significant Delay';
    return 'Critical Delay';
  }

  assessCostHealth() {
    const cpi = this.calculateEVM().cpi;
    
    if (cpi >= 1.0) return 'Under Budget';
    if (cpi >= 0.9) return 'Minor Overrun';
    if (cpi >= 0.8) return 'Significant Overrun';
    return 'Critical Overrun';
  }

  getRiskExposure() {
    return this.riskRegister.risks
      .filter(risk => risk.status === 'Active')
      .reduce((total, risk) => total + (risk.probability * risk.impact), 0);
  }

  getQualityIndex() {
    const metrics = this.qualityPlan.metrics;
    return {
      defectRate: metrics.defects / metrics.deliverables,
      customerSatisfaction: metrics.customerSatisfaction,
      processCompliance: metrics.processesFollowed / metrics.totalProcesses,
      overallQuality: this.calculateOverallQuality(metrics)
    };
  }

  calculateOverallQuality(metrics) {
    // Weighted quality score based on PMP quality factors
    const weights = {
      defectRate: 0.3,
      customerSatisfaction: 0.4,
      processCompliance: 0.2,
      scheduleAdherence: 0.1
    };

    const normalizedDefectRate = Math.max(0, 1 - (metrics.defects / metrics.deliverables));
    const normalizedSatisfaction = metrics.customerSatisfaction / 10;
    const normalizedCompliance = metrics.processesFollowed / metrics.totalProcesses;
    const normalizedSchedule = Math.min(1, this.calculateEVM().spi);

    return (
      weights.defectRate * normalizedDefectRate +
      weights.customerSatisfaction * normalizedSatisfaction +
      weights.processCompliance * normalizedCompliance +
      weights.scheduleAdherence * normalizedSchedule
    ) * 10;
  }
}

export class PMPProcessValidator {
  static validateProcessGroup(project, processGroup) {
    const validations = {
      'Initiating': this.validateInitiating,
      'Planning': this.validatePlanning,
      'Executing': this.validateExecuting,
      'Monitoring_Controlling': this.validateMonitoringControlling,
      'Closing': this.validateClosing
    };

    return validations[processGroup] ? validations[processGroup](project) : null;
  }

  static validateInitiating(project) {
    const requirements = [
      { field: 'charter', description: 'Project Charter' },
      { field: 'stakeholderRegister', description: 'Stakeholder Register' },
      { field: 'assumptionsLog', description: 'Assumptions Log' }
    ];

    return this.checkRequirements(project, requirements, 'Initiating');
  }

  static validatePlanning(project) {
    const requirements = [
      { field: 'projectManagementPlan', description: 'Project Management Plan' },
      { field: 'wbs', description: 'Work Breakdown Structure' },
      { field: 'schedule', description: 'Project Schedule' },
      { field: 'budget', description: 'Cost Baseline' },
      { field: 'riskRegister', description: 'Risk Register' },
      { field: 'qualityPlan', description: 'Quality Management Plan' },
      { field: 'communicationPlan', description: 'Communications Management Plan' },
      { field: 'procurementPlan', description: 'Procurement Management Plan' }
    ];

    return this.checkRequirements(project, requirements, 'Planning');
  }

  static validateExecuting(project) {
    const requirements = [
      { field: 'teamPerformanceAssessments', description: 'Team Performance Assessments' },
      { field: 'qualityAudits', description: 'Quality Audits' },
      { field: 'changeRequests', description: 'Change Requests Log' },
      { field: 'issueLog', description: 'Issue Log' }
    ];

    return this.checkRequirements(project, requirements, 'Executing');
  }

  static validateMonitoringControlling(project) {
    const requirements = [
      { field: 'performanceReports', description: 'Performance Reports' },
      { field: 'earnedValueReports', description: 'Earned Value Reports' },
      { field: 'riskReports', description: 'Risk Reports' },
      { field: 'qualityControlMeasurements', description: 'Quality Control Measurements' }
    ];

    return this.checkRequirements(project, requirements, 'Monitoring & Controlling');
  }

  static validateClosing(project) {
    const requirements = [
      { field: 'finalReport', description: 'Final Project Report' },
      { field: 'lessonsLearned', description: 'Lessons Learned Register' },
      { field: 'closureProcedures', description: 'Project Closure Procedures' },
      { field: 'contractClosures', description: 'Contract Closures' }
    ];

    return this.checkRequirements(project, requirements, 'Closing');
  }

  static checkRequirements(project, requirements, processGroup) {
    const results = {
      processGroup,
      compliant: true,
      missingItems: [],
      warnings: [],
      recommendations: []
    };

    requirements.forEach(req => {
      if (!project[req.field] || (Array.isArray(project[req.field]) && project[req.field].length === 0)) {
        results.compliant = false;
        results.missingItems.push(req.description);
      }
    });

    return results;
  }
}

// PMP API Routes with Enhanced Validation
// File: routes/pmpRoutes.js

import express from 'express';
import { PMPClaudeService } from '../services/pmpClaudeService.js';
import { PMPProject, PMPProcessValidator } from '../models/pmpModels.js';

const router = express.Router();
const pmpService = new PMPClaudeService();

// Project Charter Analysis Endpoint
router.post('/analyze-charter', async (req, res) => {
  try {
    const { charterData } = req.body;
    
    // Validate charter completeness
    const requiredFields = ['purpose', 'objectives', 'scope', 'stakeholders', 'successCriteria'];
    const missingFields = requiredFields.filter(field => !charterData[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        error: `Missing required charter fields: ${missingFields.join(', ')}`
      });
    }

    const analysis = await pmpService.analyzeProjectCharter(charterData);
    res.json({ success: true, data: analysis });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// WBS Optimization Endpoint
router.post('/optimize-wbs', async (req, res) => {
  try {
    const { wbsData, projectObjectives } = req.body;
    
    // Validate WBS structure
    if (!wbsData || !Array.isArray(wbsData) || wbsData.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Invalid WBS structure provided'
      });
    }

    const optimization = await pmpService.optimizeWBS(wbsData, projectObjectives);
    res.json({ success: true, data: optimization });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Earned Value Management Analysis Endpoint
router.post('/analyze-evm', async (req, res) => {
  try {
    const { evmData, projectBaseline } = req.body;
    
    // Validate EVM data
    const requiredEvmFields = ['plannedValue', 'earnedValue', 'actualCost'];
    const missingEvmFields = requiredEvmFields.filter(field => evmData[field] === undefined);
    
    if (missingEvmFields.length > 0) {
      return res.status(400).json({
        success: false,
        error: `Missing EVM fields: ${missingEvmFields.join(', ')}`
      });
    }

    const analysis = await pmpService.analyzeEarnedValue(evmData, projectBaseline);
    res.json({ success: true, data: analysis });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Risk Management Enhancement Endpoint
router.post('/enhance-risk-management', async (req, res) => {
  try {
    const { riskRegister, projectContext } = req.body;
    
    // Validate risk register structure
    if (!riskRegister || !riskRegister.risks || !Array.isArray(riskRegister.risks)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid risk register structure'
      });
    }

    const enhancement = await pmpService.enhanceRiskManagement(riskRegister, projectContext);
    res.json({ success: true, data: enhancement });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Quality Management Analysis Endpoint
router.post('/analyze-quality', async (req, res) => {
  try {
    const { qualityData, projectRequirements } = req.body;
    
    const analysis = await pmpService.analyzeQualityManagement(qualityData, projectRequirements);
    res.json({ success: true, data: analysis });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Stakeholder Management Enhancement Endpoint
router.post('/enhance-stakeholder-management', async (req, res) => {
  try {
    const { stakeholderData, communicationPlan } = req.body;
    
    const enhancement = await pmpService.enhanceStakeholderManagement(stakeholderData, communicationPlan);
    res.json({ success: true, data: enhancement });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Resource Management Optimization Endpoint
router.post('/optimize-resources', async (req, res) => {
  try {
    const { resourceData, projectSchedule } = req.body;
    
    const optimization = await pmpService.optimizeResourceManagement(resourceData, projectSchedule);
    res.json({ success: true, data: optimization });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Project Integration Coordination Endpoint
router.post('/coordinate-integration', async (req, res) => {
  try {
    const { projectData, changeRequests } = req.body;
    
    const coordination = await pmpService.coordinateProjectIntegration(projectData, changeRequests);
    res.json({ success: true, data: coordination });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// PMP Compliance Validation Endpoint
router.post('/validate-compliance', async (req, res) => {
  try {
    const { projectData, processGroup } = req.body;
    
    // Create PMP Project instance for validation
    const pmpProject = new PMPProject(projectData);
    
    // Validate specific process group
    const validation = PMPProcessValidator.validateProcessGroup(pmpProject, processGroup);
    
    // Get overall project health metrics
    const healthMetrics = {
      scheduleHealth: pmpProject.assessScheduleHealth(),
      costHealth: pmpProject.assessCostHealth(),
      riskExposure: pmpProject.getRiskExposure(),
      qualityIndex: pmpProject.getQualityIndex(),
      evm: pmpProject.calculateEVM()
    };

    res.json({ 
      success: true, 
      data: {
        validation,
        healthMetrics,
        complianceScore: this.calculateComplianceScore(validation, healthMetrics)
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// PMP Process Group Status Endpoint
router.get('/process-group-status/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;
    
    // This would normally fetch from database
    const project = await getProjectById(projectId);
    
    const processGroupStatus = {
      'Initiating': PMPProcessValidator.validateProcessGroup(project, 'Initiating'),
      'Planning': PMPProcessValidator.validateProcessGroup(project, 'Planning'),
      'Executing': PMPProcessValidator.validateProcessGroup(project, 'Executing'),
      'Monitoring_Controlling': PMPProcessValidator.validateProcessGroup(project, 'Monitoring_Controlling'),
      'Closing': PMPProcessValidator.validateProcessGroup(project, 'Closing')
    };

    res.json({ success: true, data: processGroupStatus });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Knowledge Area Assessment Endpoint
router.post('/assess-knowledge-areas', async (req, res) => {
  try {
    const { projectData } = req.body;
    
    const knowledgeAreaAssessment = {
      integration: this.assessIntegrationManagement(projectData),
      scope: this.assessScopeManagement(projectData),
      schedule: this.assessScheduleManagement(projectData),
      cost: this.assessCostManagement(projectData),
      quality: this.assessQualityManagement(projectData),
      resource: this.assessResourceManagement(projectData),
      communications: this.assessCommunicationsManagement(projectData),
      risk: this.assessRiskManagement(projectData),
      procurement: this.assessProcurementManagement(projectData),
      stakeholder: this.assessStakeholderManagement(projectData)
    };

    res.json({ success: true, data: knowledgeAreaAssessment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Helper function to calculate compliance score
function calculateComplianceScore(validation, healthMetrics) {
  let score = 100;
  
  // Deduct points for missing PMP artifacts
  score -= validation.missingItems.length * 10;
  
  // Deduct points for poor performance metrics
  if (healthMetrics.evm.spi < 0.9) score -= 15;
  if (healthMetrics.evm.cpi < 0.9) score -= 15;
  if (healthMetrics.qualityIndex.overallQuality < 7) score -= 10;
  if (healthMetrics.riskExposure > 50) score -= 10;
  
  return Math.max(0, score);
}

// Helper functions for knowledge area assessments
function assessIntegrationManagement(projectData) {
  return {
    charterStatus: projectData.charter ? 'Complete' : 'Missing',
    managementPlanStatus: projectData.projectManagementPlan ? 'Complete' : 'Missing',
    changeControlStatus: projectData.changeControlProcess ? 'Active' : 'Not Implemented',
    score: calculateKnowledgeAreaScore('integration', projectData)
  };
}

function assessScopeManagement(projectData) {
  return {
    scopeDefinition: projectData.charter?.scope ? 'Complete' : 'Missing',
    wbsStatus: projectData.wbs ? 'Complete' : 'Missing',
    scopeValidation: projectData.scopeValidationProcess ? 'Active' : 'Not Implemented',
    score: calculateKnowledgeAreaScore('scope', projectData)
  };
}

function assessScheduleManagement(projectData) {
  return {
    activityDefinition: projectData.wbs ? 'Complete' : 'Missing',
    scheduleStatus: projectData.schedule ? 'Complete' : 'Missing',
    scheduleControl: projectData.earnedValue ? 'Active' : 'Not Implemented',
    score: calculateKnowledgeAreaScore('schedule', projectData)
  };
}

function assessCostManagement(projectData) {
  return {
    budgetPlanning: projectData.budget ? 'Complete' : 'Missing',
    costControl: projectData.earnedValue ? 'Active' : 'Not Implemented',
    evmImplementation: projectData.earnedValue ? 'Active' : 'Not Implemented',
    score: calculateKnowledgeAreaScore('cost', projectData)
  };
}

function assessQualityManagement(projectData) {
  return {
    qualityPlanning: projectData.qualityPlan ? 'Complete' : 'Missing',
    qualityAssurance: projectData.qualityAudits ? 'Active' : 'Not Implemented',
    qualityControl: projectData.qualityControlMeasurements ? 'Active' : 'Not Implemented',
    score: calculateKnowledgeAreaScore('quality', projectData)
  };
}

function assessResourceManagement(projectData) {
  return {
    resourcePlanning: projectData.resourcePlan ? 'Complete' : 'Missing',
    teamDevelopment: projectData.teamPerformanceAssessments ? 'Active' : 'Not Implemented',
    resourceControl: projectData.resourceUtilizationReports ? 'Active' : 'Not Implemented',
    score: calculateKnowledgeAreaScore('resource', projectData)
  };
}

function assessCommunicationsManagement(projectData) {
  return {
    communicationPlanning: projectData.communicationPlan ? 'Complete' : 'Missing',
    informationDistribution: projectData.communicationLogs ? 'Active' : 'Not Implemented',
    performanceReporting: projectData.performanceReports ? 'Active' : 'Not Implemented',
    score: calculateKnowledgeAreaScore('communications', projectData)
  };
}

function assessRiskManagement(projectData) {
  return {
    riskPlanning: projectData.riskManagementPlan ? 'Complete' : 'Missing',
    riskIdentification: projectData.riskRegister ? 'Complete' : 'Missing',
    riskMonitoring: projectData.riskReports ? 'Active' : 'Not Implemented',
    score: calculateKnowledgeAreaScore('risk', projectData)
  };
}

function assessProcurementManagement(projectData) {
  return {
    procurementPlanning: projectData.procurementPlan ? 'Complete' : 'Not Applicable',
    vendorManagement: projectData.vendorContracts ? 'Active' : 'Not Applicable',
    score: calculateKnowledgeAreaScore('procurement', projectData)
  };
}

function assessStakeholderManagement(projectData) {
  return {
    stakeholderIdentification: projectData.stakeholderRegister ? 'Complete' : 'Missing',
    engagementPlanning: projectData.stakeholderEngagementPlan ? 'Complete' : 'Missing',
    stakeholderMonitoring: projectData.stakeholderFeedback ? 'Active' : 'Not Implemented',
    score: calculateKnowledgeAreaScore('stakeholder', projectData)
  };
}

function calculateKnowledgeAreaScore(area, projectData) {
  // Knowledge area scoring logic based on PMP requirements
  const weights = {
    integration: ['charter', 'projectManagementPlan', 'changeControlProcess'],
    scope: ['charter.scope', 'wbs', 'scopeValidationProcess'],
    schedule: ['wbs', 'schedule', 'earnedValue'],
    cost: ['budget', 'earnedValue', 'costControlProcess'],
    quality: ['qualityPlan', 'qualityAudits', 'qualityControlMeasurements'],
    resource: ['resourcePlan', 'teamPerformanceAssessments', 'resourceUtilizationReports'],
    communications: ['communicationPlan', 'communicationLogs', 'performanceReports'],
    risk: ['riskManagementPlan', 'riskRegister', 'riskReports'],
    procurement: ['procurementPlan', 'vendorContracts'],
    stakeholder: ['stakeholderRegister', 'stakeholderEngagementPlan', 'stakeholderFeedback']
  };

  const requiredFields = weights[area] || [];
  const completedFields = requiredFields.filter(field => {
    const fieldValue = field.includes('.') ? 
      field.split('.').reduce((obj, key) => obj?.[key], projectData) : 
      projectData[field];
    return fieldValue !== undefined && fieldValue !== null;
  });

  return Math.round((completedFields.length / requiredFields.length) * 100);
}

// Placeholder function - would normally fetch from database
async function getProjectById(projectId) {
  // Mock implementation - replace with actual database query
  return {
    id: projectId,
    charter: { /* charter data */ },
    wbs: [/* wbs data */],
    // ... other project data
  };
}

export default router;
