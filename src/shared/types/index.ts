import { StackProps } from 'aws-cdk-lib';
import { IVpc, SecurityGroup } from 'aws-cdk-lib/aws-ec2';
import { Role } from 'aws-cdk-lib/aws-iam';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { Labels } from '../labels';


export interface Claims {
  readonly sub: string;
  readonly email: string;
  readonly username: string;
}

export interface Authorizer {
  readonly claims: Claims;
}

export interface RequestContext {
  readonly authorizer: Authorizer;
}

export interface CognitoAuthorizedEvent {
  readonly body?: string;
  readonly headers: Record<string, string>;
  readonly pathParameters?: Record<string, string>;
  readonly queryStringParameters?: Record<string, string>;
  readonly requestContext: RequestContext;
}

export interface LambdaHandlerEvent {
  readonly pathParameters?: Record<string, string>;
  readonly queryStringParameters?: Record<string, string>;
  readonly records?: Record<string, any>;
  readonly requestContext: RequestContext;
}

export interface LambdaHandler {
  (scope: Construct, env: Record<string, string> | undefined, role: Role, vpc: IVpc, securityGroup: SecurityGroup): IFunction;
}

export interface BaseStackProps extends StackProps {
  readonly labels: Labels;
}

export interface Environment {
  readonly region: string;
  readonly account: string;
  readonly name: string;
}

export type IComplianceFramework = 'hipaa' | 'nist' | 'pci' | 'all' | 'aws-solutions-only';
export type SageMakerInferenceType = 'SYNC' | 'ASYNC';
export type ApiGatewayEndpointType = 'REGIONAL' | 'EDGE' | 'PRIVATE';

export interface MonitoringConfig {
  readonly enableDetailedMonitoring: boolean;
  readonly enableXRayTracing: boolean;
  readonly logRetentionDays?: number;
}

export interface WafConfig {
  readonly enableWaf: boolean;
  readonly rateLimitPerMinute?: number;
};

export interface SecurityConfig {
  readonly enableEncryptionAtRest: boolean;
  readonly enableEncryptionInTransit: boolean;
  readonly enableVpcEndpoints: boolean;
  readonly wafConfig?: WafConfig;
}

export interface BackupConfig {
  readonly enableBackups: boolean;
  readonly retentionDays?: number;
  readonly schedule?: string;
}

export interface S3LifecyclePolicies {
  readonly transitionToIA?: number; // days
  readonly transitionToGlacier?: number; // days
  readonly expiration?: number; // days
}
export interface CostOptimizationConfig {
  readonly enableAutoScaling: boolean;
  readonly enableSpotInstances: boolean;
  readonly s3LifecyclePolicies?: S3LifecyclePolicies;
}
