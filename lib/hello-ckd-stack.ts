import * as cdk from 'aws-cdk-lib';
import { Vpc } from './resources';
import { getConfig } from '../config/build-config';

export class HelloCkdStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const config = getConfig(scope);

    // VPC
    const vpc = new Vpc();
    vpc.createResources(this, config.projectName, config.environment, `network`);

  }
}
