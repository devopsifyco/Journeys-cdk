import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { Resource } from './abstract';

export class Vpc extends Resource {
  public vpc: ec2.CfnVPC;

  constructor() {
    super();
  }

  public createResources(scope: Construct, projectName: string, stageName: string, stackname: string) {
    this.vpc = new ec2.CfnVPC(scope, `VPC`, {
      cidrBlock: `10.90.16.0/22`,
      enableDnsSupport: true,
      enableDnsHostnames: true,
      instanceTenancy: `default`,
      tags: [
        {
            key: `Name`,
            value: this.createTagName(scope, projectName, stageName, stackname, 'vpc'),
        },
      ],
    });
  }
}
