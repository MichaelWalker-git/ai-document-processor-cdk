import { Aspects, Duration, RemovalPolicy, Tags } from 'aws-cdk-lib';
import { RestApi } from 'aws-cdk-lib/aws-apigateway';
import { IUserPool } from 'aws-cdk-lib/aws-cognito';
import { IVpc } from 'aws-cdk-lib/aws-ec2';
import { IKey } from 'aws-cdk-lib/aws-kms';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { ComplianceFramework, ComplianceFrameworkProps } from './complianceFramework';
import { Labels } from '../shared/labels';


export interface SageMakerConfig {
  readonly modelName?: string;
  readonly instanceType?: string;
  readonly inferenceType?: 'SYNC' | 'ASYNC';
}

export interface VpcConfig {
  readonly vpc?: IVpc;
  readonly cidr?: string;
}

export interface BucketConfig {
  readonly inputBucket?: IBucket;
  readonly outputBucket?: IBucket;
  readonly sageMakerAsyncBucket?: IBucket;
  readonly removalPolicy?: RemovalPolicy;
}

export interface EncryptionConfig {
  readonly kmsKey?: IKey;
  readonly keyRotationPeriod?: Duration;
}

export interface Throttling {
  readonly rateLimit?: number;
  readonly burstLimit?: number;
};

export interface ApiConfig {
  readonly corsAllowedOrigins?: string[];
  readonly throttling?: Throttling;
}

export interface PasswordPolicy {
  readonly minLength?: number;
  readonly requireLowercase?: boolean;
  readonly requireUppercase?: boolean;
  readonly requireDigits?: boolean;
  readonly requireSymbols?: boolean;
}

export interface AuthConfig {
  readonly userPool?: IUserPool;
  readonly passwordPolicy?: PasswordPolicy;
}

export interface AiDocumentProcessorProps {
  readonly labels: Labels;
  readonly complianceFramework?: string;
  readonly enableDetailedMonitoring?: boolean;
  readonly enableXRayTracing?: boolean;
  readonly sageMakerConfig?: SageMakerConfig;
  readonly vpcConfig?: VpcConfig;
  readonly bucketConfig?: BucketConfig;
  readonly encryptionConfig?: EncryptionConfig;
  readonly apiConfig?: ApiConfig;
  readonly authConfig?: AuthConfig;
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

export class AiDocumentProcessor extends Construct {
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
