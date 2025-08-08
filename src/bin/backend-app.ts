#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { config } from 'dotenv';

config();

import { ProdStage } from '../lib/stages';
import { STAGES } from '../shared/constants';
import { Labels } from '../shared/labels';

// Environment variables with defaults for marketplace deployment
const CDK_DEFAULT_REGION = process.env.CDK_DEFAULT_REGION || 'us-east-1';
const CDK_DEFAULT_ACCOUNT = process.env.CDK_DEFAULT_ACCOUNT || '';
const APP_NAME = process.env.APP_NAME || 'ai-document-processor';
const APP_LABEL = process.env.APP_LABEL || 'AiDocProcessor';
const APP_REGION = process.env.APP_REGION || 'eu-central-1';
const COMPLIANCE_FRAMEWORK = process.env.COMPLIANCE_FRAMEWORK || 'hipaa';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com';
const ADMIN_FAMILY_NAME = process.env.ADMIN_FAMILY_NAME || 'Admin';
const ADMIN_GIVEN_NAME = process.env.ADMIN_GIVEN_NAME || 'Super';
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173/';

const HUGGINGFACE_HUB_TOKEN = process.env.HUGGINGFACE_HUB_TOKEN || '';

// Marketplace-specific configuration
const VENDOR_NAME = process.env.VENDOR_NAME || 'Horustech';

const app = new cdk.App();

// Create labels for the marketplace deployment
const labels = new Labels(
  APP_LABEL,
  STAGES.prod,
  APP_REGION,
  APP_NAME,
  'marketplace',
  '-',
);

const prodProps = {
  labels,
  complianceFramework: COMPLIANCE_FRAMEWORK,
  description: 'AI Document Processing Platform',
  adminEmail: ADMIN_EMAIL,
  adminFamilyName: ADMIN_FAMILY_NAME,
  adminGivenName: ADMIN_GIVEN_NAME,
  clientUrl: CLIENT_URL,
  vendorName: VENDOR_NAME,
  huggingfaceHubToken: HUGGINGFACE_HUB_TOKEN,
  env: {
    region: CDK_DEFAULT_REGION,
    account: CDK_DEFAULT_ACCOUNT,
  },
};

// Deploy the marketplace stage
new ProdStage(
  app,
  STAGES.prod,
  prodProps,
  {
    env: { region: CDK_DEFAULT_REGION, account: CDK_DEFAULT_ACCOUNT },
  },
);


// Synthesize the CloudFormation templates
app.synth();

// Log deployment information
console.log('🚀 Marketplace CloudFormation Template Generation Complete!');
console.log('🌍 Region:', CDK_DEFAULT_REGION);
console.log('🏢 Vendor:', VENDOR_NAME);
console.log('🔒 Compliance:', COMPLIANCE_FRAMEWORK.toUpperCase());
console.log('📁 Output Directory: cdk.out/');
