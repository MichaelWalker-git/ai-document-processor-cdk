import * as fs from 'fs';
import * as path from 'path';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { DEFAULT_PROPS } from '../../../../shared/constants';
import { getCdkConstructId } from '../../../../shared/helpers';
import { LambdaHandler } from '../../../../shared/types';

export const deleteFile: LambdaHandler = (scope, env, role, vpc, securityGroup) => {
  const constructId = getCdkConstructId({ context: 'delete-file', resourceName: 'deleteFile', addId: true }, scope);

  // Dynamically resolve entry path based on whether .ts or .js exists
  const localTsPath = path.resolve(__dirname, 'handler.ts');
  const builtJsPath = path.resolve(__dirname, 'handler.js');

  const entry = fs.existsSync(localTsPath) ? localTsPath : builtJsPath;

  // Use a shorter function name to stay within 64 character limit
  const functionName = `ai-dev-delete-file-${scope.node.addr.substring(0, 8)}`;
  return new NodejsFunction(scope, constructId, {
    functionName: functionName,
    ...DEFAULT_PROPS,
    role,
    vpc,
    securityGroups: [securityGroup],
    reservedConcurrentExecutions: 5,
    entry,
    environment: env,
  });
};
