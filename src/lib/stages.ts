import { Aspects, StackProps, Stage, Tags } from 'aws-cdk-lib';
import { AwsSolutionsChecks, HIPAASecurityChecks, NIST80053R5Checks, PCIDSS321Checks } from 'cdk-nag';
import { Construct } from 'constructs';
import { BackendAppStack } from './backend-app-stack';
import { Labels } from '../shared';
import { FrontendStack } from '../stacks/FrontendStack';
import { S3Stack } from '../stacks/S3Stack';

const REGION = process.env.CDK_DEFAULT_REGION || '';

export interface StackInputs extends StackProps {
  readonly labels: Labels;
  readonly complianceFramework?: string;
  readonly clientUrl: string;
  readonly adminEmail: string;
  readonly adminFamilyName: string;
  readonly adminGivenName: string;
  readonly vendorName: string;
  readonly huggingfaceHubToken: string;
}

export class ProdStage extends Stage {
  constructor(
    scope: Construct,
    id: string,
    args: StackInputs,
    props?: StackProps,
  ) {
    super(scope, id, props);

    new S3Stack(
      this,
      `${args.labels.name()}-s3`,
      args,
    );

    const backendAppStack = new BackendAppStack(
      this,
      `${args.labels.name()}-backend-app`,
      args,
      {
        env: { region: REGION },
        description: 'AI-powered document processing platform with SageMaker integration - Marketplace Edition',
      },
    );

    const frontendStack = new FrontendStack(this, `${args.labels.name()}-FrontEnd-Stack`, args);
    frontendStack.addDependency(backendAppStack);

    // Apply comprehensive compliance checks based on configuration
    this.addComplianceChecks(backendAppStack, args.complianceFramework);
  }

  private addComplianceChecks(backendAppStack: BackendAppStack, framework?: string): void {
    // Always apply AWS Solutions checks
    Aspects.of(backendAppStack).add(new AwsSolutionsChecks({ verbose: true }));

    // Apply additional compliance frameworks based on parameter
    switch (framework?.toLowerCase()) {
      case 'hipaa':
        Aspects.of(backendAppStack).add(new HIPAASecurityChecks({ verbose: true }));
        Tags.of(this).add('ComplianceFramework', 'HIPAA');
        break;

      case 'nist':
        Aspects.of(backendAppStack).add(new NIST80053R5Checks({ verbose: true }));
        Tags.of(this).add('ComplianceFramework', 'NIST-800-53-R5');
        break;

      case 'pci':
        Aspects.of(backendAppStack).add(new PCIDSS321Checks({ verbose: true }));
        Tags.of(this).add('ComplianceFramework', 'PCI-DSS-3.2.1');
        break;

      case 'all':
        // Apply all compliance frameworks for maximum security
        Aspects.of(backendAppStack).add(new HIPAASecurityChecks({ verbose: true }));
        Aspects.of(backendAppStack).add(new NIST80053R5Checks({ verbose: true }));
        Aspects.of(backendAppStack).add(new PCIDSS321Checks({ verbose: true }));
        Tags.of(this).add('ComplianceFramework', 'Multi-Framework');
        break;

      default:
        // Default to HIPAA for healthcare-related AI applications
        Aspects.of(backendAppStack).add(new HIPAASecurityChecks({ verbose: true }));
        Tags.of(this).add('ComplianceFramework', 'HIPAA-Default');
        break;
    }
  }
}
