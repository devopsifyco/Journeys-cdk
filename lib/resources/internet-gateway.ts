import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { Resource } from './abstract';
import { Vpc } from './vpc';

export class IGW extends Resource {
    public internetGateway: ec2.CfnInternetGateway;
    private readonly vpc: Vpc;

    private readonly projectName: string;
    private readonly stageName: string;
    private readonly stackname: string;

    constructor(
        scope: Construct,
        projectName: string,
        stageName: string,
        stackname: string,
        vpc: Vpc,
    ) {
        super();
        this.projectName = projectName;
        this.stageName = stageName;
        this.stackname = stackname;
        this.vpc = vpc;
        this.internetGateway = new ec2.CfnInternetGateway(scope, `InternetGateway`, {
            tags: [
                {
                    key: 'Name',
                    value: this.createTagName(
                        scope,
                        this.projectName,
                        this.stageName,
                        this.stackname,
                        `igw`,
                    ),
                },
            ],
        });

        new ec2.CfnVPCGatewayAttachment(scope, `VPCGatewayAttachment`, {
            vpcId: this.vpc.vpc.ref,
            internetGatewayId: this.internetGateway.ref,
        });
    }
}
