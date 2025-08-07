import * as path from 'path';
import * as fs from 'fs';
import { Duration } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';

// DB
export const PARTITION_KEY_NAMES = {
  FILES: 'FILES',
};

export const PARTITION_KEY_NAME = 'sectionName';
export const SORT_KEY_NAME: string = 'sortKey';

// API
export const CORS = {
  HEADERS: 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,Domain-Name',
  METHODS: 'OPTIONS,GET,POST,PUT,DELETE',
  ORIGIN: '*',
} as const;


// Lambda
// Dynamically resolve depsLockFilePath
const lockFileCandidates = [
  path.resolve(__dirname, '../../../package-lock.json'),
  path.resolve(__dirname, '../../package-lock.json'),
];

const depsLockFilePath = lockFileCandidates.find(fs.existsSync);

export const DEFAULT_PROPS: NodejsFunctionProps = {
  runtime: Runtime.NODEJS_22_X,
  memorySize: 512,
  timeout: Duration.minutes(5),
  depsLockFilePath,
  handler: 'handler',
  bundling: {
    externalModules: ['aws-sdk'],
  },
};

// File
export const FILE_STATUSES = {
  INITIALIZED: 'Initialized',
  UPLOADED: 'Uploaded',
  IN_PROGRESS: 'In progress',
  PROCESSED: 'Processed',
  PARTIALLY_PROCESSED: 'Partially Processed',
};

export const STAGES = {
  dev: 'dev',
  prod: 'prod',
  test: 'test',
  FTR: 'FTR',
  MARKETPLACE: 'marketplace',
};

export const USER_ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  USER: 'USER',
};
