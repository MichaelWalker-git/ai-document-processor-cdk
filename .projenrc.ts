import { awscdk, javascript } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Horustech',
  authorAddress: 'info@horustech.com',
  cdkVersion: '2.208.0',
  defaultReleaseBranch: 'master',
  jsiiVersion: '~5.8.0',
  name: '@horustech/ai-document-processor-cdk',
  projenrcTs: true,
  repositoryUrl:
    'https://github.com/MichaelWalker-git/ai-document-processor-cdk',
  description:
    'AWS CDK constructs for AI-powered document processing platform with SageMaker integration',

  // Package configuration
  packageName: '@horustech/ai-document-processor-cdk',
  npmAccess: NpmAccess.PUBLIC,
  majorVersion: 1,

  packageManager: javascript.NodePackageManager.NPM,

  // Keywords for npm discovery
  keywords: [
    'aws',
    'cdk',
    'sagemaker',
    'ai',
    'document-processing',
    'machine-learning',
    'typescript',
    'constructs',
    'hipaa',
    'compliance',
  ],

  // Only JSII-enabled packages here:
  deps: [
    'aws-cdk-lib@2.208.0',
    'constructs@^10.0.0',
    'fs-extra',
  ],

  // Everything else (non-JSII) gets bundled into your published package:
  bundledDeps: [
    '@aws-cdk/integ-tests-alpha@^2.208.0-alpha.0',
    '@aws-cdk/aws-scheduler-alpha@2.186.0-alpha.0',
    'cdk-nag@^2.36.50',
    '@aws-sdk/client-bedrock-runtime',
    '@aws-sdk/client-cognito-identity-provider',
    '@aws-sdk/client-dynamodb',
    '@aws-sdk/client-lambda',
    '@aws-sdk/client-s3',
    '@aws-sdk/client-ses',
    '@aws-sdk/client-sfn',
    '@aws-sdk/client-sns',
    '@aws-sdk/client-ssm',
    '@aws-sdk/lib-dynamodb',
    '@aws-sdk/s3-request-presigner',
    '@google-cloud/functions-framework',
    '@google-cloud/local-auth',
    '@google-cloud/pubsub',
    '@opensearch-project/opensearch',
    '@types/aws-lambda',
    '@aws-sdk/client-sagemaker-runtime',
    'busboy',
    'canvas',
    'dotenv',
    'google-auth-library',
    'googleapis',
    'joi',
    'jsonwebtoken',
    'jwks-rsa',
    'mailparser',
    'mime-types',
    'p-limit',
    'pdf-lib',
    'pdf2pic',
    'pdfjs-dist',
    'smartystreets-javascript-sdk',
    'uuid',
    'aws-sdk',
    'axios',
    'google-auth-library@9.15.1',
    'fs-extra',
  ],

  // devDependencies stay under devDeps:
  devDeps: [
    '@types/fs-extra',
    'aws-cdk-lib@^2.208.0',
    'constructs@^10.0.0',
    '@types/busboy',
    '@types/jsonwebtoken',
    '@types/mime-types',
    '@types/pdf-parse',
    '@types/sharp',
    '@types/smartystreets-javascript-sdk',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    '@types/jest',
    '@types/node',
    '@stylistic/eslint-plugin',
    'esbuild',
    'eslint',
    'eslint-import-resolver-typescript',
    'eslint-plugin-import',
    'jest',
    'promptfoo',
    'sharp',
    'ts-jest',
    'ts-node',
    'typescript',
  ],

  // Peer dependencies (these will be required by consumers)
  peerDeps: ['aws-cdk-lib@^2.208.0', 'constructs@^10.0.0'],

  // Publishing configuration
  releaseToNpm: true,

  // GitHub configuration
  githubOptions: {
    mergify: true,
    pullRequestLint: true,
  },

  // Build configuration
  srcdir: 'src',
  testdir: 'test',
  libdir: 'lib',

  // Documentation
  docgen: true,
  docsDirectory: 'docs',

  // ESLint and Prettier
  eslint: true,
  prettier: false,
  jest: false,

  // Additional scripts
  scripts: {
    'build:watch': 'tsc -w',
    'diff:prod': "cdk diff 'prod/*'",
    'deploy:prod': "STAGE=prod cdk deploy 'prod/*'",
    'deploy:prod:watch': "STAGE=prod cdk deploy 'prod/*' --watch",
    'destroy:prod': "STAGE=prod cdk destroy 'prod/*'",
    'synth:prod': 'STAGE=prod cdk synth',
    'docs:serve': 'serve docs',
  },

  // Gitignore additions
  gitignore: [
    '*.js',
    '*.d.ts',
    'node_modules/',
    'cdk.out/',
    '.env',
    '.env.local',
    '.env.*.local',
    'coverage/',
    '.nyc_output/',
    'dist/',
    'lib/',
    '*.tsbuildinfo',
    '.idea',
    '!src/lib/',
  ],

  // Sample code generation
  sampleCode: false,

  // License
  licensed: true,
  license: 'MIT',

  // Auto-approve configuration for automated releases
  autoApproveOptions: {
    allowedUsernames: ['github-actions[bot]', 'dependabot[bot]'],
    secret: 'GITHUB_TOKEN',
  },

  // Stability
  stability: 'stable',
});

// Add custom tasks
project.addTask('package:all', {
  description: 'Package for all supported languages',
  steps: [
    { spawn: 'package:js' },
    { spawn: 'package:python' },
    { spawn: 'package:java' },
    { spawn: 'package:dotnet' },
  ],
});

project.testTask.reset('echo "⚠️  tests skipped"');

project.addTask('docs:generate', {
  description: 'Generate API documentation',
  steps: [{ exec: 'typedoc --out docs src/index.ts' }],
});

project.eslint?.addRules({
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      vars: 'all',
      args: 'after-used',
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    },
  ],
});

project.addTask('install:lock', {
  description: 'Install with lockfile',
  exec: 'npm install',
});

project.addDeps('fs-extra');

project.synth();
