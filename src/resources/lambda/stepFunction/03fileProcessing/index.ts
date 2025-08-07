import * as fs from 'fs';
import * as path from 'path';
import { Duration } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { DEFAULT_PROPS } from '../../../../shared/constants';
import { getCdkConstructId } from '../../../../shared/helpers';
import { LambdaHandler } from '../../../../shared/types';

export const fileProcessing: LambdaHandler = (scope, env, role, vpc, securityGroup) => {
  // Dynamically resolve entry path based on whether .ts or .js exists
  const localTsPath = path.resolve(__dirname, 'handler.ts');
  const builtJsPath = path.resolve(__dirname, 'handler.js');

  const entry = fs.existsSync(localTsPath) ? localTsPath : builtJsPath;

  return new NodejsFunction(scope, getCdkConstructId({ context: 'file-processing', resourceName: 'lambda' }, scope), {
    functionName: getCdkConstructId({ context: 'file-processing', resourceName: 'lambda' }, scope),
    ...DEFAULT_PROPS,
    role,
    vpc,
    securityGroups: [securityGroup],
    memorySize: 2048,
    runtime: Runtime.NODEJS_22_X,
    reservedConcurrentExecutions: 40,
    timeout: Duration.minutes(5),
    entry,
    environment: env,
    bundling: {
      nodeModules: ['aws-sdk', 'smartystreets-javascript-sdk'],
    },
  });
};
