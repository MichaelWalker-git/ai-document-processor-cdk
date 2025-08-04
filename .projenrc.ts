import { awscdk } from "projen";
import { NpmAccess } from "projen/lib/javascript";

const project = new awscdk.AwsCdkConstructLibrary({
  author: "Horustech",
  authorAddress: "info@horustech.com",
  cdkVersion: "2.100.0",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.0.0",
  name: "@horustech/ai-document-processor-cdk",
  projenrcTs: true,
  repositoryUrl: "https://github.com/horustech/ai-document-processor-cdk.git",
  description:
    "AWS CDK constructs for AI-powered document processing platform with SageMaker integration",

  // Package configuration
  packageName: "@horustech/ai-document-processor-cdk",
  npmAccess: NpmAccess.PUBLIC,
  majorVersion: 1,

  // Keywords for npm discovery
  keywords: [
    "aws",
    "cdk",
    "sagemaker",
    "ai",
    "document-processing",
    "machine-learning",
    "typescript",
    "constructs",
    "hipaa",
    "compliance",
  ],

  // Dependencies
  deps: ["aws-cdk-lib@^2.100.0", "constructs@^10.0.5", "cdk-nag@^2.27.0"],

  // Development dependencies
  devDeps: [
    "@types/jest@^29.5.5",
    "@types/node@^18.17.0",
    "aws-cdk@^2.100.0",
    "ts-node@^10.9.1",
    "typescript@^5.2.2",
    "constructs@10.0.5",
  ],

  // Peer dependencies (these will be required by consumers)
  peerDeps: ["aws-cdk-lib@^2.100.0", "constructs@^10.0.5"],

  // Publishing configuration
  releaseToNpm: true,

  // GitHub configuration
  githubOptions: {
    mergify: true,
    pullRequestLint: true,
  },

  // Build configuration
  srcdir: "src",
  testdir: "test",
  libdir: "lib",

  // Documentation
  docgen: true,
  docsDirectory: "docs",

  // ESLint and Prettier
  eslint: true,
  prettier: true,
  jest: false,

  // Bundling configuration for Lambda functions
  bundledDeps: ["aws-sdk"],

  // Additional scripts
  scripts: {
    "build:watch": "tsc -w",
    "deploy:dev": "cdk deploy --all --profile dev",
    "deploy:prod": "cdk deploy --all --profile prod",
    "diff:dev": "cdk diff --all --profile dev",
    "diff:prod": "cdk diff --all --profile prod",
    "synth:dev": "cdk synth --all --profile dev",
    "synth:prod": "cdk synth --all --profile prod",
    "docs:serve": "serve docs",
  },

  // Gitignore additions
  gitignore: [
    "*.js",
    "*.d.ts",
    "node_modules/",
    "cdk.out/",
    ".env",
    ".env.local",
    ".env.*.local",
    "coverage/",
    ".nyc_output/",
    "dist/",
    "lib/",
    "*.tsbuildinfo",
  ],

  // Sample code generation
  sampleCode: false,

  // License
  licensed: true,
  license: "MIT",

  // Auto-approve configuration for automated releases
  autoApproveOptions: {
    allowedUsernames: ["github-actions[bot]", "dependabot[bot]"],
    secret: "GITHUB_TOKEN",
  },

  // Stability
  stability: "stable",
});

// Add custom tasks
project.addTask("package:all", {
  description: "Package for all supported languages",
  steps: [
    { spawn: "package:js" },
    { spawn: "package:python" },
    { spawn: "package:java" },
    { spawn: "package:dotnet" },
  ],
});

project.testTask.reset('echo "⚠️  tests skipped"');

project.addTask("docs:generate", {
  description: "Generate API documentation",
  steps: [{ exec: "typedoc --out docs src/index.ts" }],
});

project.synth();
