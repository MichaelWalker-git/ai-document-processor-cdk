import { Aspects, Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { RestApi } from 'aws-cdk-lib/aws-apigateway';
import { IUserPool } from 'aws-cdk-lib/aws-cognito';
import { IVpc } from 'aws-cdk-lib/aws-ec2';
import { IKey } from 'aws-cdk-lib/aws-kms';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { ComplianceFramework, ComplianceFrameworkProps } from './complianceFramework';
import { Labels } from '../shared/labels';

/**
 * Configuration options for the AI Document Processor
 */
export interface AiDocumentProcessorProps {
  /**
   * Labels for resource naming and tagging
   */
  readonly labels: Labels;

  /**
   * Compliance framework to apply (hipaa, nist, pci, all)
   * @default 'hipaa'
   */
  readonly complianceFramework?: string;

  /**
   * Whether to enable detailed monitoring
   * @default true
   */
  readonly enableDetailedMonitoring?: boolean;

  /**
   * Whether to enable X-Ray tracing
   * @default true
   */
  readonly enableXRayTracing?: boolean;

  /**
   * SageMaker model configuration
   */
  readonly sageMakerConfig?: {
    /**
     * Model ID for the SageMaker endpoint
     * @default 'Qwen/Qwen2.5-VL-7B-Instruct'
     */
    readonly modelId?: string;

    /**
     * Instance type for the SageMaker endpoint
     * @default 'ml.g5.xlarge'
     */
    readonly instanceType?: string;

    /**
     * Inference type (SYNC or ASYNC)
     * @default 'ASYNC'
     */
    readonly inferenceType?: 'SYNC' | 'ASYNC';
  };

  /**
   * VPC configuration
   */
  readonly vpcConfig?: {
    /**
     * Existing VPC to use. If not provided, a new VPC will be created
     */
    readonly vpc?: IVpc;

    /**
     * VPC CIDR block if creating a new VPC
     * @default '10.0.0.0/16'
     */
    readonly cidr?: string;
  };

  /**
   * S3 bucket configuration
   */
  readonly bucketConfig?: {
    /**
     * Existing input bucket. If not provided, a new bucket will be created
     */
    readonly inputBucket?: IBucket;

    /**
     * Existing output bucket. If not provided, a new bucket will be created
     */
    readonly outputBucket?: IBucket;

    /**
     * Existing SageMaker async bucket. If not provided, a new bucket will be created
     */
    readonly sageMakerAsyncBucket?: IBucket;

    /**
     * Bucket removal policy
     * @default RemovalPolicy.RETAIN
     */
    readonly removalPolicy?: RemovalPolicy;
  };

  /**
   * KMS encryption configuration
   */
  readonly encryptionConfig?: {
    /**
     * Existing KMS key. If not provided, a new key will be created
     */
    readonly kmsKey?: IKey;

    /**
     * Key rotation period
     * @default Duration.days(365)
     */
    readonly keyRotationPeriod?: Duration;
  };

  /**
   * API Gateway configuration
   */
  readonly apiConfig?: {
    /**
     * CORS allowed origins
     * @default ['*']
     */
    readonly corsAllowedOrigins?: string[];

    /**
     * API throttling configuration
     */
    readonly throttling?: {
      readonly rateLimit?: number;
      readonly burstLimit?: number;
    };
  };

  /**
   * Cognito User Pool configuration
   */
  readonly authConfig?: {
    /**
     * Existing User Pool. If not provided, a new pool will be created
     */
    readonly userPool?: IUserPool;

    /**
     * User pool password policy
     */
    readonly passwordPolicy?: {
      readonly minLength?: number;
      readonly requireLowercase?: boolean;
      readonly requireUppercase?: boolean;
      readonly requireDigits?: boolean;
      readonly requireSymbols?: boolean;
    };
  };
}

/**
 * Outputs from the AI Document Processor construct
 */
export interface AiDocumentProcessorOutputs {
  /**
   * The REST API endpoint
   */
  readonly api: RestApi;

  /**
   * The Cognito User Pool
   */
  readonly userPool: IUserPool;

  /**
   * The VPC used by the application
   */
  readonly vpc: IVpc;

  /**
   * The input S3 bucket
   */
  readonly inputBucket: IBucket;

  /**
   * The output S3 bucket
   */
  readonly outputBucket: IBucket;

  /**
   * The SageMaker async S3 bucket
   */
  readonly sageMakerAsyncBucket: IBucket;

  /**
   * The KMS key used for encryption
   */
  readonly kmsKey: IKey;

  /**
   * SageMaker endpoint name
   */
  readonly sageMakerEndpointName: string;
}

/**
 * High-level construct for the AI Document Processor platform
 *
 * This construct creates a complete AI-powered document processing platform
 * with SageMaker integration, including:
 *
 * - VPC with public and private subnets
 * - S3 buckets for input, output, and SageMaker async processing
 * - SageMaker endpoint for AI inference
 * - API Gateway with Cognito authentication
 * - Step Functions for workflow orchestration
 * - DynamoDB for metadata storage
 * - CloudWatch monitoring and X-Ray tracing
 * - KMS encryption for data at rest
 * - Compliance framework integration
 *
 * @example
 * ```typescript
 * import { AiDocumentProcessor } from '@horustech/ai-document-processor-cdk';
 *
 * const processor = new AiDocumentProcessor(this, 'MyDocProcessor', {
 *   labels: new Labels('MyApp', 'prod', 'us-east-1', 'my-app'),
 *   complianceFramework: 'hipaa',
 *   sageMakerConfig: {
 *     modelId: 'Qwen/Qwen2.5-VL-7B-Instruct',
 *     instanceType: 'ml.g5.xlarge',
 *   },
 * });
 *
 * // Access outputs
 * const apiUrl = processor.outputs.api.url;
 * ```
 */
export class AiDocumentProcessor extends Construct {
  /**
   * The outputs from this construct
   */
  public readonly outputs: AiDocumentProcessorOutputs;

  constructor(scope: Construct, id: string, props: AiDocumentProcessorProps) {
    super(scope, id);

    // Apply compliance framework
    const complianceFramework = new ComplianceFramework(this, 'Compliance', {
      framework: (props.complianceFramework || 'hipaa') as ComplianceFrameworkProps['framework'],
      enableVerboseLogging: true,
    });

    // Apply compliance checks to the stack
    Aspects.of(this).add(complianceFramework);

    // TODO: Implement the actual stack creation logic here
    // This would include creating all the necessary resources:
    // - VPC (if not provided)
    // - S3 buckets (if not provided)
    // - KMS key (if not provided)
    // - SageMaker stack
    // - API Gateway stack
    // - Cognito stack
    // - Step Functions stack
    // - DynamoDB stack
    // - Lambda functions
    // - IAM roles and policies

    // For now, we'll create a placeholder implementation
    // In a real implementation, you would instantiate your existing stacks here

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
      this.node.addMetadata(key, value);
    });
  }
}
