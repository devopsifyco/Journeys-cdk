import * as cdk from 'aws-cdk-lib';
import { Vpc } from './resources';

export class HelloCkdStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const VpcCidr: string = `10.90.16.0/22`;
    // VPC
    const vpc = new Vpc(
      VpcCidr,
    );
    vpc.createResources(this);

  }
}
