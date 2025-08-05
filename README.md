## 🛠️ Development and Contributing

### Prerequisites

- **Node.js**: 18.x or later
- **npm**: 8.x or later
- **AWS CDK**: 2.100.0 or later
- **TypeScript**: 5.2 or later
- **AWS CLI**: Configured with appropriate permissions

### Local Development Setup

```bash
# Clone the repository
git clone https://github.com/horustech/ai-document-processor-cdk.git
cd ai-document-processor-cdk

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm run test

# Run linting and security checks
npm run lint
npm run lint:security

# Generate documentation
npm run docs:generate

# Package for all languages
npm run package:all
```

### Project Structure

```
ai-document-processor-cdk/
├── src/                          # Source code
│   ├── constructs/              # High-level constructs
│   │   ├── ai-document-processor.ts
│   │   ├── compliance-framework.ts
│   │   └── marketplace-deployment.ts
│   ├── stacks/                  # CDK stacks
│   │   ├── backend-app-stack.ts
│   │   ├── prod-stage.ts
│   │   └── resources/           # Resource-specific stacks
│   ├── shared/                  # Shared utilities
│   │   ├── labels.ts
│   │   ├── constants.ts
│   │   ├── helpers.ts
│   │   └── types.ts
│   └── index.ts                 # Main export
├── test/                        # Test files
├── examples/                    # Usage examples
├── docs/                        # Generated documentation
├── .projenrc.ts                # Projen configuration
├── package.json                # NPM configuration
└── README.md                   # This file
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Compile TypeScript and run tests |
| `npm run test` | Run Jest unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix linting issues |
| `npm run lint:security` | Run CDK-nag security checks |
| `npm run docs:generate` | Generate API documentation |
| `npm run docs:serve` | Serve documentation locally |
| `npm run package:all` | Package for all supported languages |
| `npm run release` | Create a new release |

### Testing

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test -- --coverage

# Run specific test file
npm run test -- --testNamePattern="AiDocumentProcessor"

# Update test snapshots
npm run test -- --updateSnapshot
```

### Writing Tests

```typescript
// test/ai-document-processor.test.ts
import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AiDocumentProcessor, Labels } from '../src';

describe('AiDocumentProcessor', () => {
  test('creates required resources', () => {
    const app = new App();
    const stack = new Stack(app, 'TestStack');
    
    const labels = new Labels('Test', 'dev', 'us-east-1', 'test-app');
    
    new AiDocumentProcessor(stack, 'TestProcessor', {
      labels,
      complianceFramework: 'hipaa',
    });

    const template = Template.fromStack(stack);
    
    // Assert that required resources are created
    template.hasResourceProperties('AWS::SageMaker::Endpoint', {
      EndpointConfigName: expect.any(String),
    });
    
    template.hasResourceProperties('AWS::ApiGateway::RestApi', {
      Name: expect.stringContaining('test-app'),
    });
  });
});
```

### Contribution Guidelines

1. **Fork the Repository**
   ```bash
   git fork https://github.com/horustech/ai-document-processor-cdk.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/my-new-feature
   ```

3. **Make Your Changes**
   - Follow TypeScript and CDK best practices
   - Add tests for new functionality
   - Update documentation as needed

4. **Run Quality Checks**
   ```bash
   npm run build
   npm run test
   npm run lint
   npm run lint:security
   ```

5. **Commit Your Changes**
   ```bash
   git commit -m "feat: add new feature for document processing"
   ```

6. **Push and Create PR**
   ```bash
   git push origin feature/my-new-feature
   # Create pull request on GitHub
   ```

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: AWS CDK and TypeScript recommended rules
- **Prettier**: Consistent code formatting
- **Jest**: Unit tests with >80% coverage
- **CDK-nag**: Security and compliance checks
- **Conventional Commits**: Semantic commit messages

### Release Process

Releases are automated via GitHub Actions:

1. **Merge to main** triggers automatic release
2. **Semantic versioning** based on commit messages
3. **Multi-language packages** published automatically:
   - npm (TypeScript/JavaScript)
   - PyPI (Python)
   - Maven Central (Java)
   - NuGet (C#/.NET)

## 📖 Examples and Use Cases

### Healthcare Document Processing

```typescript
const healthcareProcessor = new AiDocumentProcessor(stack, 'HealthcareProcessor', {
  labels: new Labels('Healthcare', 'prod', 'us-east-1', 'medical-docs'),
  complianceFramework: 'hipaa',
  
  // HIPAA-specific configuration
  vpcConfig: {
    cidr: '10.0.0.0/16', // Isolated network
  },
  encryptionConfig: {
    keyRotationPeriod: Duration.days(90), // Quarterly rotation
  },
  
  // High-performance inference for medical imaging
  sageMakerConfig: {
    instanceType: 'ml.g5.2xlarge',
    modelId: 'Qwen/Qwen2.5-VL-7B-Instruct',
  },
});
```

### Financial Document Analysis

```typescript
const financialProcessor = new AiDocumentProcessor(stack, 'FinancialProcessor', {
  labels: new Labels('FinTech', 'prod', 'us-east-1', 'financial-docs'),
  complianceFramework: 'pci', // PCI-DSS compliance
  
  // Enhanced security for financial data
  apiConfig: {
    corsAllowedOrigins: ['https://secure.bank.com'],
    throttling: {
      rateLimit: 100,   // Conservative rate limiting
      burstLimit: 200,
    },
  },
  
  // Multi-factor authentication
  authConfig: {
    passwordPolicy: {
      minLength: 16,
      requireSymbols: true,
    },
  },
});
```

### Government Document Processing

```typescript
const govProcessor = new AiDocumentProcessor(stack, 'GovProcessor', {
  labels: new Labels('GovAgency', 'prod', 'us-gov-east-1', 'gov-docs'),
  complianceFramework: 'nist', // NIST 800-53 R5
  
  // Government cloud configuration
  vpcConfig: {
    cidr: '172.16.0.0/12',
  },
  
  // Enhanced monitoring for audit requirements
  enableDetailedMonitoring: true,
  enableXRayTracing: true,
});
```# AI Document Processor CDK Construct Library

[![npm version](https://badge.fury.io/js/%40horustech%2Fai-document-processor-cdk.svg)](https://badge.fury.io/js/%40horustech%2Fai-document-processor-cdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/horustech/ai-document-processor-cdk/workflows/test-and-release/badge.svg)](https://github.com/horustech/ai-document-processor-cdk/actions)
[![PyPI version](https://badge.fury.io/py/horustech-ai-document-processor-cdk.svg)](https://badge.fury.io/py/horustech-ai-document-processor-cdk)
[![Maven Central](https://img.shields.io/maven-central/v/com.horustech/ai-document-processor-cdk.svg)](https://search.maven.org/artifact/com.horustech/ai-document-processor-cdk)
[![NuGet version](https://badge.fury.io/nu/Horustech.AiDocumentProcessor.Cdk.svg)](https://badge.fury.io/nu/Horustech.AiDocumentProcessor.Cdk)

> **Enterprise-Grade AI Document Processing Platform**
> 
> A comprehensive AWS CDK construct library for deploying production-ready AI-powered document processing infrastructure with SageMaker integration, enterprise security, and multi-framework compliance support.

## 🎯 Why This Library?

Building AI document processing infrastructure from scratch is complex. This library provides:

- **⚡ Rapid Deployment**: Complete infrastructure in minutes, not weeks
- **🏢 Enterprise Ready**: Built-in security, compliance, and monitoring
- **🔧 Highly Configurable**: Adapt to your specific requirements
- **📈 Production Tested**: Battle-tested patterns and best practices
- **🏪 Marketplace Compatible**: Ready for AWS Marketplace deployment

## Features

- 🤖 **AI-Powered Processing**: SageMaker integration with Qwen2.5-VL-7B-Instruct model
- 🔒 **Enterprise Security**: VPC isolation, KMS encryption, IAM best practices
- 📋 **Compliance Ready**: HIPAA, NIST 800-53 R5, PCI-DSS 3.2.1 compliance frameworks
- 🚀 **Serverless Architecture**: API Gateway, Lambda, Step Functions, DynamoDB
- 📊 **Observability**: CloudWatch monitoring, X-Ray tracing, structured logging
- 🏪 **Marketplace Ready**: AWS Marketplace compatible with CloudFormation parameters
- 🔧 **Highly Configurable**: Extensive customization options for different use cases

## 📦 Installation

### npm (TypeScript/JavaScript)

```bash
# Install the library
npm install @horustech/ai-document-processor-cdk

# Install peer dependencies
npm install aws-cdk-lib@^2.100.0 constructs@^10.0.5
```

### Python

```bash
pip install horustech-ai-document-processor-cdk
```

### Java (Maven)

```xml
<dependency>
    <groupId>com.horustech</groupId>
    <artifactId>ai-document-processor-cdk</artifactId>
    <version>1.0.0</version>
</dependency>
```

### Java (Gradle)

```gradle
implementation 'com.horustech:ai-document-processor-cdk:1.0.0'
```

### C# (.NET)

```bash
dotnet add package Horustech.AiDocumentProcessor.Cdk
```

### Go

```bash
go get github.com/horustech/ai-document-processor-cdk-go/v2
```

## 🚀 Quick Start Guide

### 1. Basic TypeScript Setup

```typescript
import { App, Stack, StackProps } from 'aws-cdk-lib';
import { AiDocumentProcessor, Labels } from '@horustech/ai-document-processor-cdk';

export class MyDocProcessorStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const labels = new Labels(
      'MyCompany',       // application label  
      'prod',            // environment
      'us-east-1',       // region
      'doc-processor'    // application name
    );

    const processor = new AiDocumentProcessor(this, 'DocumentProcessor', {
      labels,
      complianceFramework: 'hipaa',
    });

    // Outputs available after deployment
    new cdk.CfnOutput(this, 'ApiUrl', {
      value: processor.outputs.api.url,
      description: 'API Gateway endpoint URL'
    });
  }
}

const app = new App();
new MyDocProcessorStack(app, 'MyDocProcessorStack');
app.synth();
```

### 2. Python Setup

```python
from aws_cdk import App, Stack, CfnOutput
from horustech_ai_document_processor_cdk import AiDocumentProcessor, Labels

class MyDocProcessorStack(Stack):
    def __init__(self, scope: App, construct_id: str, **kwargs):
        super().__init__(scope, construct_id, **kwargs)

        labels = Labels(
            application_label="MyCompany",
            environment="prod", 
            region="us-east-1",
            application_name="doc-processor"
        )

        processor = AiDocumentProcessor(
            self, "DocumentProcessor",
            labels=labels,
            compliance_framework="hipaa"
        )

        CfnOutput(
            self, "ApiUrl",
            value=processor.outputs.api.url,
            description="API Gateway endpoint URL"
        )

app = App()
MyDocProcessorStack(app, "MyDocProcessorStack")
app.synth()
```

### 3. Deploy Your Stack

```bash
# Bootstrap CDK (one-time setup)
cdk bootstrap

# Deploy your stack
cdk deploy MyDocProcessorStack

# View the deployed resources
aws cloudformation describe-stacks \
  --stack-name MyDocProcessorStack \
  --query 'Stacks[0].Outputs'
```

## Architecture

The AI Document Processor creates a comprehensive serverless architecture:

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   API Gateway   │────│   Cognito Auth   │────│   Lambda APIs   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                                         │
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Input S3      │────│  Step Functions  │────│   SageMaker     │
│   Bucket        │    │   Orchestration  │    │   Endpoint      │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │                        │
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Output S3     │────│    DynamoDB      │────│   CloudWatch    │
│   Bucket        │    │    Metadata      │    │   Monitoring    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │
                       ┌──────────────────┐
                       │   KMS Encryption │
                       │   & VPC Network  │
                       └──────────────────┘
```

## 🔧 Advanced Configuration

### Complete Configuration Example

```typescript
import { AiDocumentProcessor, Labels, ComplianceFrameworkType } from '@horustech/ai-document-processor-cdk';
import { RemovalPolicy, Duration } from 'aws-cdk-lib';

const processor = new AiDocumentProcessor(stack, 'AdvancedProcessor', {
  labels: new Labels('Enterprise', 'prod', 'us-east-1', 'advanced-processor'),
  
  // Compliance & Security
  complianceFramework: ComplianceFrameworkType.ALL, // HIPAA + NIST + PCI
  
  // AI/ML Configuration  
  sageMakerConfig: {
    modelId: 'Qwen/Qwen2.5-VL-7B-Instruct',
    instanceType: 'ml.g5.2xlarge',        // Scale up for production
    inferenceType: 'ASYNC',               // Better for batch processing
  },
  
  // Network & Security
  vpcConfig: {
    cidr: '10.1.0.0/16',                  // Custom CIDR
    // vpc: existingVpc,                  // Use existing VPC
  },
  
  // Storage Configuration
  bucketConfig: {
    removalPolicy: RemovalPolicy.RETAIN,  // Keep data on stack deletion
    // inputBucket: existingInputBucket,  // Use existing buckets
  },
  
  // Encryption
  encryptionConfig: {
    keyRotationPeriod: Duration.days(90), // Quarterly key rotation
  },
  
  // API Gateway
  apiConfig: {
    corsAllowedOrigins: [
      'https://mycompany.com',
      'https://app.mycompany.com'
    ],
    throttling: {
      rateLimit: 5000,   // requests per second
      burstLimit: 10000, // burst capacity
    },
  },
  
  // Authentication
  authConfig: {
    passwordPolicy: {
      minLength: 14,
      requireLowercase: true,
      requireUppercase: true, 
      requireDigits: true,
      requireSymbols: true,
    },
  },
  
  // Monitoring
  enableDetailedMonitoring: true,
  enableXRayTracing: true,
});
```

### Environment-Specific Deployments

```typescript
// lib/stages/dev-stage.ts
export class DevStage extends Stage {
  constructor(scope: Construct, id: string, props: StageProps) {
    super(scope, id, props);
    
    new AiDocumentProcessor(this, 'DevProcessor', {
      labels: new Labels('MyApp', 'dev', props.env?.region!, 'doc-processor'),
      complianceFramework: 'aws-solutions-only', // Minimal for dev
      sageMakerConfig: {
        instanceType: 'ml.t3.medium', // Smaller instance for dev
      },
    });
  }
}

// lib/stages/prod-stage.ts  
export class ProdStage extends Stage {
  constructor(scope: Construct, id: string, props: StageProps) {
    super(scope, id, props);
    
    new AiDocumentProcessor(this, 'ProdProcessor', {
      labels: new Labels('MyApp', 'prod', props.env?.region!, 'doc-processor'),
      complianceFramework: 'hipaa',              // Full compliance
      sageMakerConfig: {
        instanceType: 'ml.g5.2xlarge',          // Production scale
      },
      enableDetailedMonitoring: true,
      enableXRayTracing: true,
    });
  }
}
```

### Multi-Region Deployment

```typescript
import { App } from 'aws-cdk-lib';

const app = new App();

// Primary region
new MyDocProcessorStack(app, 'DocProcessor-US-East-1', {
  env: { region: 'us-east-1', account: process.env.CDK_DEFAULT_ACCOUNT },
});

// Secondary region for disaster recovery
new MyDocProcessorStack(app, 'DocProcessor-US-West-2', {
  env: { region: 'us-west-2', account: process.env.CDK_DEFAULT_ACCOUNT },
});

app.synth();
```

## 📊 Monitoring and Operations

### Built-in Dashboards

The construct automatically creates CloudWatch dashboards for:

- **API Performance**: Request latency, error rates, throttling
- **SageMaker Metrics**: Inference latency, model performance
- **Storage Metrics**: S3 request patterns, storage utilization
- **Security Events**: Authentication failures, access patterns
- **Cost Tracking**: Resource utilization and spending

### Setting Up Alerts

```typescript
import { Alarm, Metric } from 'aws-cdk-lib/aws-cloudwatch';
import { SnsAction } from 'aws-cdk-lib/aws-cloudwatch-actions';

// Create SNS topic for alerts
const alertTopic = new Topic(stack, 'AlertTopic');

// High error rate alarm
new Alarm(stack, 'HighErrorRate', {
  metric: processor.outputs.api.metricServerError(),
  threshold: 10,
  evaluationPeriods: 2,
});

// Add SNS notification
alarm.addAlarmAction(new SnsAction(alertTopic));
```

### Accessing Logs

```bash
# API Gateway logs
aws logs describe-log-groups --log-group-name-prefix "/aws/apigateway"

# Lambda function logs  
aws logs describe-log-groups --log-group-name-prefix "/aws/lambda"

# SageMaker endpoint logs
aws logs describe-log-groups --log-group-name-prefix "/aws/sagemaker"

# Filter logs by error level
aws logs filter-log-events \
  --log-group-name "/aws/lambda/my-function" \
  --filter-pattern "ERROR"
```

### X-Ray Tracing

View distributed traces in the AWS X-Ray console to:
- Track request flow across services
- Identify performance bottlenecks
- Debug errors and timeouts
- Analyze service dependencies

## 🔒 Security Best Practices

### Network Security

```typescript
const processor = new AiDocumentProcessor(stack, 'SecureProcessor', {
  labels,
  vpcConfig: {
    cidr: '10.0.0.0/16',
    // Creates private subnets with NAT gateways
    // No direct internet access to resources
  },
  
  // Enable VPC endpoints for AWS services
  enableVpcEndpoints: true,
});
```

### Encryption Configuration

```typescript
const processor = new AiDocumentProcessor(stack, 'EncryptedProcessor', {
  labels,
  encryptionConfig: {
    keyRotationPeriod: Duration.days(90), // Automatic key rotation
  },
  
  // All data encrypted at rest:
  // - S3 buckets with customer-managed KMS keys
  // - DynamoDB tables with KMS encryption
  // - SageMaker model artifacts encrypted
  // - CloudWatch logs encrypted
});
```

### IAM Best Practices

The construct automatically implements:

- **Least Privilege Access**: Minimal required permissions only
- **Resource-Based Policies**: Fine-grained access control
- **Service-Linked Roles**: AWS-managed roles where appropriate
- **Cross-Service Access**: Secure service-to-service communication
- **Audit Trail**: All IAM actions logged to CloudTrail

### Compliance Features

#### HIPAA Compliance
✅ **Encryption**: At rest and in transit  
✅ **Access Controls**: Role-based access with MFA  
✅ **Audit Logging**: Complete access trail  
✅ **Network Isolation**: VPC with private subnets  
✅ **Data Residency**: Regional data containment

#### NIST 800-53 R5
✅ **Security Controls**: 800+ automated controls  
✅ **Risk Management**: Continuous assessment  
✅ **Incident Response**: Automated alerting  
✅ **Configuration Management**: Infrastructure as code

#### PCI-DSS 3.2.1
✅ **Network Segmentation**: Isolated processing environment  
✅ **Access Control**: Multi-factor authentication  
✅ **Encryption**: Strong cryptographic controls  
✅ **Monitoring**: Real-time security monitoring

### Security Scanning

```bash
# Run CDK-nag security checks
npm run lint:security

# Generate compliance report
npm run compliance:report

# Scan for vulnerabilities
npm audit
npm run security:scan
```

## 💰 Cost Optimization

### Built-in Cost Controls

```typescript
const processor = new AiDocumentProcessor(stack, 'CostOptimizedProcessor', {
  labels,
  
  // Auto-scaling configuration
  enableAutoScaling: true,
  
  // S3 lifecycle policies
  bucketConfig: {
    s3LifecyclePolicies: {
      transitionToIA: 30,      // Move to Infrequent Access after 30 days
      transitionToGlacier: 90, // Archive to Glacier after 90 days  
      expiration: 2555,        // Delete after 7 years (compliance)
    },
  },
  
  // Use spot instances for batch processing (where applicable)
  enableSpotInstances: true,
});
```

### Cost Monitoring

```typescript
import { Budget } from 'aws-cdk-lib/aws-budgets';

// Set up cost alerts
new Budget(stack, 'MonthlyBudget', {
  budget: {
    budgetName: 'AI-Document-Processor-Budget',
    budgetLimit: {
      amount: 1000,
      unit: 'USD',
    },
    timeUnit: 'MONTHLY',
    budgetType: 'COST',
  },
  
  // Alert at 80% and 100% of budget
  notificationsWithClosedSubscribers: [
    {
      notification: {
        notificationType: 'ACTUAL',
        comparisonOperator: 'GREATER_THAN',
        threshold: 80,
      },
      subscribers: [
        { subscriptionType: 'EMAIL', address: 'alerts@company.com' }
      ],
    },
  ],
});
```

### Estimated Monthly Costs

| Component | Instance/Type | Estimated Cost |
|-----------|---------------|----------------|
| **SageMaker Endpoint** | ml.g5.xlarge | $850-1200/month |
| **API Gateway** | 1M requests/month | $3.50/month |
| **Lambda Functions** | 1M invocations | $0.20/month |
| **DynamoDB** | 1GB, 100 RCU/WCU | $25/month |
| **S3 Storage** | 100GB Standard | $23/month |
| **VPC NAT Gateway** | 2 AZs | $90/month |
| **CloudWatch Logs** | 10GB/month | $5/month |
| **KMS** | 1000 operations/day | $3/month |
| **Total Estimated** | | **$1000-1350/month** |

> 💡 **Cost Optimization Tips:**
> - Use `ml.g4dn.xlarge` instead of `ml.g5.xlarge` to save ~30%
> - Enable auto-scaling to handle variable workloads
> - Use S3 Intelligent Tiering for automatic cost optimization
> - Consider Reserved Instances for predictable workloads

## 📚 API Reference

### Core Classes

#### `AiDocumentProcessor`

The main construct for creating an AI document processing platform.

```typescript
new AiDocumentProcessor(scope: Construct, id: string, props: AiDocumentProcessorProps)
```

**Properties:**
- `labels: Labels` - Resource naming and tagging configuration
- `complianceFramework?: string` - Compliance framework ('hipaa' | 'nist' | 'pci' | 'all')
- `sageMakerConfig?: SageMakerConfig` - AI model configuration
- `vpcConfig?: VpcConfig` - Network configuration
- `bucketConfig?: BucketConfig` - Storage configuration
- `encryptionConfig?: EncryptionConfig` - Encryption settings
- `apiConfig?: ApiConfig` - API Gateway configuration
- `authConfig?: AuthConfig` - Authentication settings

**Methods:**
- `outputs: AiDocumentProcessorOutputs` - Access deployed resources

#### `MarketplaceDeployment`

Stage construct for AWS Marketplace deployment with parameters and outputs.

```typescript
new MarketplaceDeployment(scope: Construct, id: string, props: MarketplaceDeploymentProps)
```

#### `ComplianceFramework`

Aspect for applying compliance checks to CDK constructs.

```typescript
new ComplianceFramework(scope: Construct, id: string, props: ComplianceFrameworkProps)
```

#### `Labels`

Utility class for consistent resource naming and tagging.

```typescript
new Labels(
  applicationLabel: string,
  environment: string, 
  region: string,
  applicationName: string,
  context?: string,
  separator?: string
)
```

### Interface Reference

#### `AiDocumentProcessorProps`

Configuration interface for the main construct.

```typescript
interface AiDocumentProcessorProps {
  readonly labels: Labels;
  readonly complianceFramework?: 'hipaa' | 'nist' | 'pci' | 'all';
  readonly enableDetailedMonitoring?: boolean;
  readonly enableXRayTracing?: boolean;
  readonly sageMakerConfig?: SageMakerConfig;
  readonly vpcConfig?: VpcConfig;
  readonly bucketConfig?: BucketConfig;
  readonly encryptionConfig?: EncryptionConfig;
  readonly apiConfig?: ApiConfig;
  readonly authConfig?: AuthConfig;
}
```

#### `SageMakerConfig`

SageMaker endpoint configuration.

```typescript
interface SageMakerConfig {
  readonly modelId?: string;              // Default: 'Qwen/Qwen2.5-VL-7B-Instruct'
  readonly instanceType?: string;         // Default: 'ml.g5.xlarge'  
  readonly inferenceType?: 'SYNC' | 'ASYNC';  // Default: 'ASYNC'
}
```

#### `AiDocumentProcessorOutputs`

Outputs available after deployment.

```typescript
interface AiDocumentProcessorOutputs {
  readonly api: RestApi;
  readonly userPool: IUserPool;
  readonly vpc: IVpc;
  readonly inputBucket: IBucket;
  readonly outputBucket: IBucket;
  readonly sageMakerAsyncBucket: IBucket;
  readonly kmsKey: IKey;
  readonly sageMakerEndpointName: string;
}
```

## 🔧 Troubleshooting

### Common Issues

#### SageMaker Endpoint Deployment Fails

```bash
# Check service quotas
aws service-quotas get-service-quota \
  --service-code sagemaker \
  --quota-code L-78CA7C48

# Request quota increase if needed
aws service-quotas request-service-quota-increase \
  --service-code sagemaker \
  --quota-code L-78CA7C48 \
  --desired-value 2
```

#### VPC Resource Limits

```bash
# Check VPC limits in your region
aws ec2 describe-account-attributes \
  --attribute-names max-instances

# Use existing VPC to avoid limits
const processor = new AiDocumentProcessor(stack, 'Processor', {
  vpcConfig: {
    vpc: Vpc.fromLookup(stack, 'ExistingVpc', {
      vpcId: 'vpc-12345678'
    })
  }
});
```

#### CDK Bootstrap Issues

```bash
# Bootstrap with specific toolkit stack name
cdk bootstrap \
  --toolkit-stack-name CDKToolkit-MyCompany \
  --qualifier mycompany

# Use in your CDK app
app.node.setContext('@aws-cdk/core:bootstrapQualifier', 'mycompany');
```

#### Compliance Check Failures

```bash
# Run CDK-nag with suppressions
npm run lint:security

# Add suppression for specific violations
NagSuppressions.addResourceSuppressions(
  myResource,
  [
    {
      id: 'AwsSolutions-IAM5',
      reason: 'Wildcard required for dynamic resource access',
    },
  ]
);
```

### Debug Mode

```typescript
// Enable debug logging
process.env.CDK_DEBUG = 'true';

// Enable verbose CDK-nag output
const processor = new AiDocumentProcessor(stack, 'Processor', {
  labels,
  complianceFramework: 'hipaa',
  enableVerboseCompliance: true, // Detailed compliance logging
});
```

### Getting Help

- 📖 **Documentation**: https://docs.horustech.com/ai-document-processor
- 🐛 **Issues**: https://github.com/horustech/ai-document-processor-cdk/issues
- 💬 **Discussions**: https://github.com/horustech/ai-document-processor-cdk/discussions
- 📧 **Email**: support@horustech.com

## 🏷️ Versioning and Releases

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking API changes
- **MINOR**: New features, backward compatible
- **PATCH**: Bug fixes, backward compatible

### Release Schedule

- **Weekly**: Patch releases for bug fixes
- **Monthly**: Minor releases for new features
- **Quarterly**: Major releases for breaking changes

### Migration Guides

- [v1.0 to v1.1 Migration Guide](./docs/migrations/v1.0-to-v1.1.md)
- [Breaking Changes Log](./docs/BREAKING_CHANGES.md)

## 🎯 Roadmap

### Q1 2025
- [ ] **Multi-Modal Support**: Image + text processing
- [ ] **Batch Processing**: Large document batch support
- [ ] **Custom Models**: Support for custom SageMaker models
- [ ] **Cost Optimization**: Advanced auto-scaling policies

### Q2 2025
- [ ] **Edge Deployment**: AWS IoT Greengrass support
- [ ] **Real-time Processing**: WebSocket API support
- [ ] **Advanced Analytics**: Built-in document analytics
- [ ] **Multi-Language**: Additional language bindings

### Q3 2025
- [ ] **Federated Learning**: Multi-tenant model training
- [ ] **Advanced Security**: Zero-trust architecture
- [ ] **Global Deployment**: Multi-region active-active
- [ ] **Enterprise Features**: Advanced workflow management

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

### Commercial License

For commercial use with extended support and additional features, contact us at enterprise@horustech.com.

## 🤝 Community

### Contributors

- **Horustech Team** - Initial work and maintenance
- **Community Contributors** - Feature enhancements and bug fixes

See the [CONTRIBUTORS.md](./CONTRIBUTORS.md) file for a full list of contributors.

### Acknowledgments

- **AWS CDK Team** - For the excellent CDK framework
- **CDK-nag Maintainers** - For compliance and security checks
- **SageMaker Team** - For the powerful ML inference platform
- **Open Source Community** - For continuous feedback and improvements

---

<div align="center">

**Made with ❤️ by [Horustech](https://horustech.com)**

[![Follow on Twitter](https://img.shields.io/twitter/follow/horustech?style=social)](https://twitter.com/horustech)
[![Star on GitHub](https://img.shields.io/github/stars/horustech/ai-document-processor-cdk?style=social)](https://github.com/horustech/ai-document-processor-cdk)

</div>
