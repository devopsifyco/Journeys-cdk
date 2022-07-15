import * as cdk from 'aws-cdk-lib';
import { Vpc, SN, IGW } from './resources';
import { getConfig } from '../config/build-config';

export class HelloCkdStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

    new ec2.CfnVPC(this, 'vpc', {
      cidrBlock: '10.0.0.0/24',
      tags: [
        {
            key: `Name`,
            value: `demo-vpc`
        },
      ],
    });
  }
}
