import { StackProps } from 'aws-cdk-lib';
import { RestApi } from 'aws-cdk-lib/aws-apigateway';
import { UserPool } from 'aws-cdk-lib/aws-cognito';
import { IVpc, SecurityGroup } from 'aws-cdk-lib/aws-ec2';
import { Role } from 'aws-cdk-lib/aws-iam';
import { Key } from 'aws-cdk-lib/aws-kms';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import {
  APIGatewayProxyEventPathParameters,
  APIGatewayProxyEventQueryStringParameters,
  APIGatewayProxyEventV2,
  APIGatewayProxyEventV2WithRequestContext,
} from 'aws-lambda';
import { Construct } from 'constructs';
import { Labels } from '../labels';

export type ApiStackProps = {
  securityGroup: SecurityGroup;
  restApi: RestApi;
  dataTableName: string;
  inputBucketName: string;
  outputBucketName: string;
  tableName: string;
  tableArn: string;
  vpc: IVpc;
  kmsKey: Key;
  userPool: UserPool;
}

export interface CognitoAuthorizedEvent extends Omit<APIGatewayProxyEventV2, 'requestContext'> {
  requestContext: {
    authorizer: {
      claims: {
        sub: string;
        email: string;
        username: string;
      };
    };
  };
}

export interface LambdaHandlerEvent<
  T = Record<string, unknown>,
  S = Record<string, unknown>
> extends APIGatewayProxyEventV2WithRequestContext<CognitoAuthorizedEvent> {
  pathParameters: APIGatewayProxyEventPathParameters & T;
  queryStringParameters: APIGatewayProxyEventQueryStringParameters & S;
  body: string;
  Records: Record<any, any>;
}

export interface LambdaHandler {
  (scope: Construct, env: Record<string, string> | undefined, role: Role, vpc: IVpc, securityGroup: SecurityGroup): IFunction;
}

/**
 * Base interface for all stack props in the AI Document Processor
 */
export interface BaseStackProps extends StackProps {
  /**
   * Labels for resource naming and tagging
   */
  readonly labels: Labels;
}

/**
 * Environment configuration
 */
export interface Environment {
  /**
   * AWS region
   */
  readonly region: string;

  /**
   * AWS account ID
   */
  readonly account: string;

  /**
   * Environment name (dev, staging, prod)
   */
  readonly name: string;
}

/**
 * Compliance framework types
 */
export type IComplianceFramework = 'hipaa' | 'nist' | 'pci' | 'all' | 'aws-solutions-only';

/**
 * SageMaker inference types
 */
export type SageMakerInferenceType = 'SYNC' | 'ASYNC';

/**
 * API Gateway endpoint types
 */
export type ApiGatewayEndpointType = 'REGIONAL' | 'EDGE' | 'PRIVATE';

/**
 * Monitoring configuration
 */
export interface MonitoringConfig {
  /**
   * Enable detailed CloudWatch monitoring
   */
  readonly enableDetailedMonitoring: boolean;

  /**
   * Enable X-Ray tracing
   */
  readonly enableXRayTracing: boolean;

  /**
   * CloudWatch log retention in days
   */
  readonly logRetentionDays?: number;
}

/**
 * Security configuration
 */
export interface SecurityConfig {
  /**
   * Enable encryption at rest
   */
  readonly enableEncryptionAtRest: boolean;

  /**
   * Enable encryption in transit
   */
  readonly enableEncryptionInTransit: boolean;

  /**
   * Enable VPC endpoints
   */
  readonly enableVpcEndpoints: boolean;

  /**
   * WAF configuration
   */
  readonly wafConfig?: {
    readonly enableWaf: boolean;
    readonly rateLimitPerMinute?: number;
  };
}

/**
 * Backup configuration
 */
export interface BackupConfig {
  /**
   * Enable automated backups
   */
  readonly enableBackups: boolean;

  /**
   * Backup retention period in days
   */
  readonly retentionDays?: number;

  /**
   * Backup schedule (cron expression)
   */
  readonly schedule?: string;
}

/**
 * Cost optimization configuration
 */
export interface CostOptimizationConfig {
  /**
   * Enable auto-scaling
   */
  readonly enableAutoScaling: boolean;

  /**
   * Enable spot instances where applicable
   */
  readonly enableSpotInstances: boolean;

  /**
   * S3 lifecycle policies
   */
  readonly s3LifecyclePolicies?: {
    readonly transitionToIA?: number; // days
    readonly transitionToGlacier?: number; // days
    readonly expiration?: number; // days
  };
}
