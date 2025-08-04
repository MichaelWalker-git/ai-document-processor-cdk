import { IAspect, Tags } from 'aws-cdk-lib';
import { AwsSolutionsChecks, HIPAASecurityChecks, NIST80053R5Checks, PCIDSS321Checks } from 'cdk-nag';
import { IConstruct } from 'constructs';

/**
 * Configuration for compliance framework
 */
export interface ComplianceFrameworkProps {
  /**
   * The compliance framework to apply
   */
  readonly framework: 'hipaa' | 'nist' | 'pci' | 'all' | 'aws-solutions-only';

  /**
   * Whether to enable verbose logging for compliance checks
   * @default false
   */
  readonly enableVerboseLogging?: boolean;

  /**
   * Custom tags to apply for compliance
   */
  readonly complianceTags?: Record<string, string>;
}

/**
 * An aspect that applies compliance frameworks to CDK constructs
 *
 * This aspect automatically applies the appropriate compliance checks
 * and tags based on the selected framework.
 *
 * @example
 * ```typescript
 * const compliance = new ComplianceFramework(this, 'Compliance', {
 *   framework: 'hipaa',
 *   enableVerboseLogging: true,
 * });
 *
 * Aspects.of(stack).add(compliance);
 * ```
 */
export class ComplianceFramework implements IAspect {
  private readonly props: ComplianceFrameworkProps;

  constructor(_scope: IConstruct, _id: string, props: ComplianceFrameworkProps) {
    this.props = props;
  }

  /**
   * Apply compliance checks to the given construct
   */
  public visit(node: IConstruct): void {
    const verbose = this.props.enableVerboseLogging ?? false;

    // Always apply AWS Solutions checks
    node.node.addDependency(new AwsSolutionsChecks({ verbose }));

    // Apply framework-specific checks
    switch (this.props.framework.toLowerCase()) {
      case 'hipaa':
        node.node.addDependency(new HIPAASecurityChecks({ verbose }));
        Tags.of(node).add('ComplianceFramework', 'HIPAA');
        break;

      case 'nist':
        node.node.addDependency(new NIST80053R5Checks({ verbose }));
        Tags.of(node).add('ComplianceFramework', 'NIST-800-53-R5');
        break;

      case 'pci':
        node.node.addDependency(new PCIDSS321Checks({ verbose }));
        Tags.of(node).add('ComplianceFramework', 'PCI-DSS-3.2.1');
        break;

      case 'all':
        // Apply all compliance frameworks for maximum security
        node.node.addDependency(new HIPAASecurityChecks({ verbose }));
        node.node.addDependency(new NIST80053R5Checks({ verbose }));
        node.node.addDependency(new PCIDSS321Checks({ verbose }));
        Tags.of(node).add('ComplianceFramework', 'Multi-Framework');
        break;

      case 'aws-solutions-only':
        // Only AWS Solutions checks are applied (already done above)
        Tags.of(node).add('ComplianceFramework', 'AWS-Solutions');
        break;

      default:
        // Default to HIPAA for healthcare-related AI applications
        node.node.addDependency(new HIPAASecurityChecks({ verbose }));
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
