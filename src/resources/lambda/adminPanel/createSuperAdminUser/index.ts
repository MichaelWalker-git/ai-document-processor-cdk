import { join } from 'path';
import { Duration } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { DEFAULT_PROPS } from '../../../../shared/constants';
import { getCdkConstructId } from '../../../../shared/helpers';
import { LambdaHandler } from '../../../../shared/types';


export const createSuperAdminUser: LambdaHandler = (scope, env, role, vpc, securityGroup) => {
  const constructId = getCdkConstructId({ context: 'create-super-admin-user', resourceName: 'lambda', addId: true }, scope);
  // Use a shorter function name to stay within 64 character limit
  const functionName = `ai-dev-create-admin-${scope.node.addr.substring(0, 8)}`;
  return new NodejsFunction(scope, constructId, {
    functionName: functionName,
    ...DEFAULT_PROPS,
    role,
    vpc,
    securityGroups: securityGroup ? [securityGroup] : [],
    runtime: Runtime.NODEJS_22_X,
    reservedConcurrentExecutions: 5,
    timeout: Duration.minutes(5),
    entry: join(__dirname, '/handler.js'),
    environment: env,
  });
};
