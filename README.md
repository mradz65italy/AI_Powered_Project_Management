# AI_Powered_Project_Management
Open-source AI-enhanced project management platform with PMP compliance for SMBs. Self-hosted alternative to Monday.com with Claude AI integration.

<div align="center">

<img src="https://img.shields.io/badge/AI%20Project%20Management-Anthropic%20Claude%20%7C%20Node.js%20%2B%20React-blueviolet?style=for-the-badge&logo=anthropic&logoColor=white" alt="AI Project Management Banner" />

# AI-Powered Project Management Toolkit

**Automate, analyze, and optimize your software projects with Node.js, Express, React, and Anthropic Claude.**  
*Break down tasks, predict timelines, analyze team health, optimize resources, and answer project queries with advanced AI.*

<img src="https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-green?style=flat-square&logo=node.js" alt="Node.js" />
<img src="https://img.shields.io/badge/Frontend-React-blue?style=flat-square&logo=react" alt="React" />
<img src="https://img.shields.io/badge/AI-Anthropic%20Claude-orange?style=flat-square&logo=anthropic" alt="Anthropic Claude" />

</div>

# What is an AI Powered Project Manager?
AI Powered Project Manager is a revolutionary open-source project management platform that combines artificial intelligence with professional PMI methodologies to deliver enterprise-grade project management capabilities to small and medium businesses. Built from the ground up with AI at its core, it provides intelligent insights, predictive analytics, and automated project optimization that traditionally required expensive proprietary solutions or dedicated project management offices.

Unlike legacy project management tools that bolt on AI features as an afterthought, this AI powered Project Management program allows - automatic task breakdown and timeline prediction to risk assessment and resource optimization. The platform follows Project Management Professional (PMP) best practices and includes comprehensive templates and processes that ensure your projects meet industry standards while utilizing AI to prevent problems before they occur.

# Core Capabilities

# AI-Enhanced Project Intelligence
- Predictive Timeline Management: Monte Carlo simulations predict project completion dates with confidence intervals
- Intelligent Task Breakdown: AI automatically decomposes complex projects into manageable tasks following PMP Work Breakdown Structure principles
- Risk Prediction & Mitigation: Proactive identification of project risks with AI-recommended response strategies
- Resource Optimization: Smart allocation of team members based on skills, workload, and project requirements
- Scope Change Impact Analysis: Instant assessment of how proposed changes affect timeline, budget, and resources
- Real-time Project Health Monitoring: Continuous analysis of project metrics with early warning alerts

# PMP Methodology & Compliance
- Complete Process Group Coverage: Initiating, Planning, Executing, Monitoring & Controlling, and Closing phases
- Ten Knowledge Areas: Integration, Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement, and Stakeholder Management
- Automated Artifact Generation: Project charters, WBS, risk registers, stakeholder analysis, and communication plans
- Earned Value Management: Comprehensive EVM with SPI, CPI, EAC, and variance analysis
- Quality Management: Built-in quality planning, assurance, and control processes
- Compliance Reporting: Automated generation of PMI-standard reports and documentation

# Advanced Project Features
- Dynamic Gantt Charts: Interactive timeline visualization with dependency management and critical path analysis
- Kanban Boards: Agile workflow management with customizable swim lanes and WIP limits
- Portfolio Management: Multi-project oversight with resource balancing and priority management
- Time Tracking & Reporting: Integrated time logging with productivity analytics and billing integration
- Document Management: Version-controlled project documentation with collaborative editing
- Custom Dashboards: Personalized views and real-time data visualization

# Technical & Infrastructure
- Self-Hosted Deployment: Complete data sovereignty with Docker and Kubernetes support
- Cloud-Ready Architecture: Multi-tenant SaaS deployment with enterprise security
- API-First Design: Comprehensive REST API for custom integrations and automation
- Multi-Cloud Support: Deploy on AWS, Azure, GCP, or on-premises infrastructure
- Enterprise Security: SSO, RBAC, audit trails

# Rapid Deployment & Scaling
- 15-minute setup compared to weeks for traditional enterprise solutions
- Pre-configured templates for common project types and industries
- Scalable architecture that grows from small teams to enterprise deployments
- Migration tools to import data from existing project management platforms

# Installation & Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- **PostgreSQL** (v13.0 or higher)
- **Docker** (optional, for containerized deployment)
- **Git** for cloning the repository

## Quick Start (Local Development)

### 1. Clone the Repository

```bash
# Clone the main repository
git clone https://github.com/mradz65italy/AI_Powered_Project_Management.git
cd AI_Powered_Project_Management

# Or clone your fork
git clone https://github.com/mradz65italy/AI_Powered_Project_Management.git
cd AI_Powered_Project_Management
```

### 2. Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### 3. Environment Configuration

```bash
# Copy environment template
cp .env.example .env

# Edit the configuration file
nano .env
```

**Required Environment Variables:**
```bash
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/ai_powered_project_management
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ai_projecthub
DB_USER=your_username
DB_PASSWORD=your_password

# Claude AI Configuration
ANTHROPIC_API_KEY=your_claude_api_key_here
CLAUDE_MODEL=claude-sonnet-4-20250514

# Application Configuration
NODE_ENV=development
PORT=3001
CLIENT_PORT=3000
JWT_SECRET=your_jwt_secret_here
SESSION_SECRET=your_session_secret_here

# Redis Configuration (for caching and sessions)
REDIS_URL=redis://localhost:6379

# Email Configuration (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# File Storage (optional)
STORAGE_TYPE=local
# For cloud storage, use: s3, azure, or gcp
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_S3_BUCKET=your_bucket_name
```

### 4. Database Setup

```bash
# Create PostgreSQL database
createdb AI_Powered_Project_Management

# Run database migrations
npm run db:migrate

# Seed with sample data (optional)
npm run db:seed
```

### 5. Start the Application

```bash
# Start backend server (development mode)
npm run dev

# In a new terminal, start frontend
cd client
npm start
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **API Documentation**: http://localhost:3001/api/docs

## 🐳 Docker Deployment

### Option 1: Docker Compose (Recommended)

```bash
# Clone repository
git clone https://github.com/mradz65italy/AI_Powered_Project_Management.git
cd AI_Powered_Project_Management

# Copy and configure environment
cp docker-compose.env.example docker-compose.env
nano docker-compose.env

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f
```

### Option 2: Individual Docker Containers

```bash
# Build the application image
docker build -t AI_Powered_Project_Management.

# Run PostgreSQL
docker run -d \
  --name AI_Powered_Project_Management-db \
  -e POSTGRES_DB=AI_Powered_Project_Management \
  -e POSTGRES_USER=projecthub \
  -e POSTGRES_PASSWORD=your_password \
  -p 5432:5432 \
  postgres:15

# Run Redis
docker run -d \
  --name ai-projecthub-redis \
  -p 6379:6379 \
  redis:7-alpine

# Run the application
docker run -d \
  --name ai-projecthub-app \
  --link ai-projecthub-db:db \
  --link ai-projecthub-redis:redis \
  -p 3000:3000 \
  -e DATABASE_URL=postgresql://projecthub:your_password@db:5432/ai_projecthub \
  -e REDIS_URL=redis://redis:6379 \
  -e ANTHROPIC_API_KEY=your_claude_api_key \
  AI_Powered_Project_Management
```

## ☸️ Kubernetes Deployment

### Prerequisites
- Kubernetes cluster (minikube, kind, or cloud provider)
- kubectl configured
- Helm (optional)

### Basic Kubernetes Deployment

```bash
# Clone repository
git clone https://github.com/mradz65italy/AI_Powered_Project_Management.git
cd AI_Powered_Project_Management

# Create namespace
kubectl create namespace AI_Powered_Project_Management

# Create secrets
kubectl create secret generic AI_Powered_Project_Management-secrets \
  --from-literal=database-url="postgresql://user:pass@postgres:5432/ai_projecthub" \
  --from-literal=anthropic-api-key="your_claude_api_key" \
  --from-literal=jwt-secret="your_jwt_secret" \
  -n ai-projecthub

# Deploy PostgreSQL
kubectl apply -f k8s/postgres.yaml -n AI_Powered_Project_Management

# Deploy Redis
kubectl apply -f k8s/redis.yaml -n AI_Powered_Project_Management

# Deploy application
kubectl apply -f k8s/app.yaml -n AI_Powered_Project_Management

# Expose service
kubectl apply -f k8s/service.yaml -n AI_Powered_Project_Management
```

### Helm Deployment

```bash
# Add Helm repository
helm repo add ai-projecthub https://charts.aiprojecthub.org
helm repo update

# Install with custom values
helm install AI_Powered_Project_Management AI_Powered_Project_Management/AI_Powered_Project_Management\
  --set postgresql.enabled=true \
  --set redis.enabled=true \
  --set anthropic.apiKey="your_claude_api_key" \
  --set ingress.enabled=true \
  --set ingress.hostname="projecthub.yourdomain.com"
```

## Production Deployment

### Environment-Specific Configurations

#### Production Environment Variables
```bash
# Production settings
NODE_ENV=production
PORT=3000
LOG_LEVEL=info

# Database (use managed service in production)
DATABASE_URL=postgresql://user:pass@your-db-host:5432/ai_projecthub
DATABASE_SSL=true
DATABASE_POOL_MIN=2
DATABASE_POOL_MAX=20

# Redis (use managed service)
REDIS_URL=redis://your-redis-host:6379
REDIS_TLS=true

# Security
JWT_SECRET=generate_strong_random_secret
SESSION_SECRET=generate_strong_random_secret
CORS_ORIGIN=https://your-domain.com
HELMET_ENABLED=true

# Claude AI (production keys)
ANTHROPIC_API_KEY=your_production_claude_key
CLAUDE_MODEL=claude-sonnet-4-20250514
AI_RATE_LIMIT=1000

# File Storage (cloud provider)
STORAGE_TYPE=s3
AWS_S3_BUCKET=your-production-bucket
AWS_REGION=us-west-2

# Monitoring & Logging
SENTRY_DSN=your_sentry_dsn
NEW_RELIC_LICENSE_KEY=your_newrelic_key
LOG_TO_FILE=true
METRICS_ENABLED=true
```

### SSL/TLS Setup

```bash
# Using Let's Encrypt with Certbot
sudo apt install certbot python3-certbot-nginx

# Generate certificates
sudo certbot --nginx -d projecthub.yourdomain.com

# Auto-renewal setup
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name projecthub.yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name projecthub.yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/projecthub.yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/projecthub.yourdomain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Development Setup

### Development Dependencies

```bash
# Install development tools
npm install -g nodemon
npm install -g @types/node
npm install -g eslint
npm install -g prettier

# Install project dev dependencies
npm install --save-dev jest supertest @testing-library/react
```

### Database Development Setup

```bash
# Create development and test databases
createdb AI_Powered_Project_Management
createdb AI_Powered_Project_Management_test

# Run migrations for all environments
npm run db:migrate:dev
npm run db:migrate:test

# Seed development data
npm run db:seed:dev
```

### Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test suites
npm run test:unit
npm run test:integration
npm run test:e2e

# Watch mode for development
npm run test:watch
```

### Code Quality & Formatting

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type checking
npm run type-check

# Pre-commit hooks
npm run pre-commit
```

## API Keys & External Services

### Getting Claude AI API Key

1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Create an account or sign in
3. Navigate to API Keys section
4. Generate a new API key
5. Add to your `.env` file as `ANTHROPIC_API_KEY`

### Optional Integrations

#### Slack Integration
```bash
# Slack App Configuration
SLACK_CLIENT_ID=your_slack_client_id
SLACK_CLIENT_SECRET=your_slack_client_secret
SLACK_SIGNING_SECRET=your_slack_signing_secret
```

#### Email Service (SendGrid)
```bash
# SendGrid Configuration
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=noreply@yourdomain.com
```

#### Cloud Storage (AWS S3)
```bash
# AWS S3 Configuration
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_S3_BUCKET=your_s3_bucket_name
AWS_REGION=us-west-2
```

## Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Find process using port 3000
lsof -ti:3000

# Kill the process
kill -9 $(lsof -ti:3000)
```

#### Database Connection Issues
```bash
# Check PostgreSQL status
sudo systemctl status postgresql

# Restart PostgreSQL
sudo systemctl restart postgresql

# Reset database
npm run db:reset
```

#### Node.js Version Issues
```bash
# Install Node Version Manager
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use correct Node.js version
nvm install 18
nvm use 18
```

#### Permission Issues (Linux/Mac)
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

### Performance Optimization

#### Database Optimization
```bash
# Add database indices
npm run db:optimize

# Analyze query performance
npm run db:analyze
```

#### Application Monitoring
```bash
# Install monitoring tools
npm install pm2 -g

# Start with PM2
pm2 start ecosystem.config.js

# Monitor performance
pm2 monit
```

---

## Next Steps

After successful installation:

1. **Create your first project** using the PMP-compliant templates
2. **Invite team members** and set up user roles
3. **Configure integrations** with your existing tools
4. **Explore AI features** like predictive analytics and smart task breakdown
5. **Set up dashboards** for project monitoring and reporting


