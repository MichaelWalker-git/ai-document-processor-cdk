// Main exports for the AI Document Processor CDK Construct Library
export * from './constructs';
export * from './stacks';
export * from './shared';

// Re-export commonly used AWS CDK types for convenience
export { StackProps, App, Stack, Stage } from 'aws-cdk-lib';
export { Construct } from 'constructs';

// Version information
export const VERSION = '1.0.0';
