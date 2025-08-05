import { Aspects, IAspect, Tags, Stack, StackProps } from 'aws-cdk-lib';

import { RestApi } from 'aws-cdk-lib/aws-apigateway';
import { IUserPool } from 'aws-cdk-lib/aws-cognito';
import { IVpc } from 'aws-cdk-lib/aws-ec2';
import { IKey } from 'aws-cdk-lib/aws-kms';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { AwsSolutionsChecks, HIPAASecurityChecks, NIST80053R5Checks, PCIDSS321Checks } from 'cdk-nag';
import { Construct, IConstruct } from 'constructs';

export interface Labels {
  environment: string;
  name(): string;
}

export interface SageMakerConfig {
  modelName: string;
  instanceType: string;
  inferenceType: string;
}

export interface AiDocumentProcessorProps extends StackProps {
  readonly labels: Labels;
  readonly complianceFramework?: string;
  readonly sageMakerConfig?: SageMakerConfig;
}

/**
 * Outputs from the AI Document Processor construct
 */
export interface AiDocumentProcessorOutputs {
  readonly api: RestApi;
  readonly userPool: IUserPool;
  readonly vpc: IVpc;
  readonly inputBucket: IBucket;
  readonly outputBucket: IBucket;
  readonly sageMakerAsyncBucket: IBucket;
  readonly kmsKey: IKey;
  readonly sageMakerEndpointName: string;
}

export class AiDocumentProcessor extends Stack {
  public readonly outputs: AiDocumentProcessorOutputs;

  constructor(scope: Construct, id: string, props: AiDocumentProcessorProps) {
    super(scope, id, props);

    // Apply compliance framework
    const complianceFramework = new ComplianceFramework(this, 'Compliance', {
      framework: (props.complianceFramework || 'hipaa') as ComplianceFrameworkProps['framework'],
      enableVerboseLogging: true,
    });

    // Apply compliance checks to the stack
    Aspects.of(this).add(complianceFramework);

    // Placeholder outputs - replace with actual resources
    this.outputs = {
      api: {} as RestApi,
      userPool: {} as IUserPool,
      vpc: {} as IVpc,
      inputBucket: {} as IBucket,
      outputBucket: {} as IBucket,
      sageMakerAsyncBucket: {} as IBucket,
      kmsKey: {} as IKey,
      sageMakerEndpointName: 'placeholder-endpoint',
    };

    // Add tags for marketplace identification
    this.addMarketplaceTags(props.labels);
  }

  private addMarketplaceTags(labels: Labels): void {
    const commonTags = {
      'aws-marketplace:product': 'ai-document-processing-platform',
      'aws-marketplace:version': '1.0.0',
      'cost-center': 'marketplace-product',
      'environment': labels.environment,
      'auto-scaling': 'enabled',
      'backup-required': 'true',
      'monitoring-required': 'true',
    };

    // Apply tags to the construct
    Object.entries(commonTags).forEach(([key, value]) => {
      Tags.of(this).add(key, value);
    });
  }
}

/**
 * Configuration for compliance framework
 */
export interface ComplianceFrameworkProps {
  readonly framework: 'hipaa' | 'nist' | 'pci' | 'all' | 'aws-solutions-only';
  readonly enableVerboseLogging?: boolean;
  readonly complianceTags?: Record<string, string>;
}

export class ComplianceFramework implements IAspect {
  public readonly props: ComplianceFrameworkProps;

  constructor(_scope: IConstruct, _id: string, props: ComplianceFrameworkProps) {
    this.props = props;
  }

  /**
   * Apply compliance checks to the given construct
   */
  public visit(node: IConstruct): void {
    const verbose = this.props.enableVerboseLogging ?? false;

    // Get the root of the construct tree to apply aspects
    const root = node.node.root;

    // Always apply AWS Solutions checks
    if (!this.hasAspect(root, AwsSolutionsChecks)) {
      Aspects.of(root).add(new AwsSolutionsChecks({ verbose }));
    }

    // Apply framework-specific checks
    switch (this.props.framework.toLowerCase()) {
      case 'hipaa':
        if (!this.hasAspect(root, HIPAASecurityChecks)) {
          Aspects.of(root).add(new HIPAASecurityChecks({ verbose }));
        }
        Tags.of(node).add('ComplianceFramework', 'HIPAA');
        break;

      case 'nist':
        if (!this.hasAspect(root, NIST80053R5Checks)) {
          Aspects.of(root).add(new NIST80053R5Checks({ verbose }));
        }
        Tags.of(node).add('ComplianceFramework', 'NIST-800-53-R5');
        break;

      case 'pci':
        if (!this.hasAspect(root, PCIDSS321Checks)) {
          Aspects.of(root).add(new PCIDSS321Checks({ verbose }));
        }
        Tags.of(node).add('ComplianceFramework', 'PCI-DSS-3.2.1');
        break;

      case 'all':
        // Apply all compliance frameworks for maximum security
        if (!this.hasAspect(root, HIPAASecurityChecks)) {
          Aspects.of(root).add(new HIPAASecurityChecks({ verbose }));
        }
        if (!this.hasAspect(root, NIST80053R5Checks)) {
          Aspects.of(root).add(new NIST80053R5Checks({ verbose }));
        }
        if (!this.hasAspect(root, PCIDSS321Checks)) {
          Aspects.of(root).add(new PCIDSS321Checks({ verbose }));
        }
        Tags.of(node).add('ComplianceFramework', 'Multi-Framework');
        break;

      case 'aws-solutions-only':
        // Only AWS Solutions checks are applied (already done above)
        Tags.of(node).add('ComplianceFramework', 'AWS-Solutions');
        break;

      default:
        // Default to HIPAA for healthcare-related AI applications
        if (!this.hasAspect(root, HIPAASecurityChecks)) {
          Aspects.of(root).add(new HIPAASecurityChecks({ verbose }));
        }
        Tags.of(node).add('ComplianceFramework', 'HIPAA-Default');
        break;
    }

    // Apply custom compliance tags
    if (this.props.complianceTags) {
      Object.entries(this.props.complianceTags).forEach(([key, value]) => {
        Tags.of(node).add(key, value);
      });
    }

    // Add standard compliance metadata
    this.addComplianceMetadata(node);
  }

  /**
   * Check if an aspect of a specific type has already been added
   */
  private hasAspect(node: IConstruct, aspectType: any): boolean {
    const aspects = (node as any)._aspects;
    if (!aspects) return false;

    return aspects.some((aspect: any) => aspect instanceof aspectType);
  }

  private addComplianceMetadata(node: IConstruct): void {
    const metadata = {
      'compliance:framework': this.props.framework,
      'compliance:version': '1.0.0',
      'compliance:last-updated': new Date().toISOString(),
      'compliance:verbose-logging': this.props.enableVerboseLogging?.toString() || 'false',
    };

    Object.entries(metadata).forEach(([key, value]) => {
      node.node.addMetadata(key, value);
    });
  }
}

/**
 * Supported compliance frameworks
 */
export enum ComplianceFrameworkType {
  /**
   * Health Insurance Portability and Accountability Act
   */
  HIPAA = 'hipaa',

  /**
   * NIST 800-53 Revision 5
   */
  NIST = 'nist',

  /**
   * Payment Card Industry Data Security Standard 3.2.1
   */
  PCI = 'pci',

  /**
   * All supported frameworks
   */
  ALL = 'all',

  /**
   * Only AWS Solutions checks
   */
  AWS_SOLUTIONS_ONLY = 'aws-solutions-only',
}
