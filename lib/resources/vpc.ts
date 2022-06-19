import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export class Vpc {
  public vpc: ec2.CfnVPC;

  private readonly VpcCidr: string;

  constructor( VpcCidr: string ) {
    this.VpcCidr = VpcCidr;
  }

  public createResources(scope: Construct) {
    this.vpc = new ec2.CfnVPC(scope, `VPC`, {
      cidrBlock: this.VpcCidr,
      enableDnsSupport: true,
      enableDnsHostnames: true,
      instanceTenancy: `default`,
      tags: [
        {
          key: `Name`,
          value: [`quannhm`, `vpc`].join('-'),
        },
      ],
    });
  }
}
