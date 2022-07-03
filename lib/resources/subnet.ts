import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Resource } from './abstract';
import { Vpc } from './vpc';

export interface ResourceInfo {
    readonly id: string;
    readonly cidrBlock: string;
    readonly availabilityZone: any;
    readonly assign: (subnet: ec2.CfnSubnet) => void;
}

export class SN extends Resource {
    public public1a: ec2.CfnSubnet;
    public public1c: ec2.CfnSubnet;
    public vitaldb1a: ec2.CfnSubnet;
    public vitaldb1c: ec2.CfnSubnet;
    public mobilecachedb1a: ec2.CfnSubnet;
    public mobilecachedb1c: ec2.CfnSubnet;
    public admindb1a: ec2.CfnSubnet;
    public admindb1c: ec2.CfnSubnet;
    public register1a: ec2.CfnSubnet;
    public register1c: ec2.CfnSubnet;
    public admin1a: ec2.CfnSubnet;
    public admin1c: ec2.CfnSubnet;
    public mobile1a: ec2.CfnSubnet;
    public mobile1c: ec2.CfnSubnet;
    public vitalwebhook1a: ec2.CfnSubnet;
    public vitalwebhook1c: ec2.CfnSubnet;
    public vitaltransform1a: ec2.CfnSubnet;
    public vitaltransform1c: ec2.CfnSubnet;
    public vitalparsing1a: ec2.CfnSubnet;
    public vitalparsing1c: ec2.CfnSubnet;
    public vitalraw1a: ec2.CfnSubnet;
    public vitalraw1c: ec2.CfnSubnet;
    public vitaljob1a: ec2.CfnSubnet;
    public vitaljob1c: ec2.CfnSubnet;
    public commonservices1a: ec2.CfnSubnet;
    public commonservices1c: ec2.CfnSubnet;

    private readonly vpc: Vpc;
    private readonly projectName: string;
    private readonly stageName: string;
    private readonly stackname: string;
    public readonly resourcesInfo: ResourceInfo[] = [
        {
            id: 'public-subnet-1a',
            cidrBlock: '10.90.16.0/28',
            availabilityZone: '0',
            assign: (subnet) => (this.public1a = subnet),
        },
        {
            id: 'public-subnet-1c',
            cidrBlock: '10.90.16.16/28',
            availabilityZone: '1',
            assign: (subnet) => (this.public1c = subnet),
        },
        {
            id: 'vitaldb-subnet-1a',
            cidrBlock: '10.90.16.32/28',
            availabilityZone: '0',
            assign: (subnet) => (this.vitaldb1a = subnet),
        },
        {
            id: 'vitaldb-subnet-1c',
            cidrBlock: '10.90.16.48/28',
            availabilityZone: '1',
            assign: (subnet) => (this.vitaldb1c = subnet),
        },
        {
            id: 'mobilecachedb-subnet-1a',
            cidrBlock: '10.90.16.64/28',
            availabilityZone: '0',
            assign: (subnet) => (this.mobilecachedb1a = subnet),
        },
        {
            id: 'mobilecachedb-subnet-1c',
            cidrBlock: '10.90.16.80/28',
            availabilityZone: '1',
            assign: (subnet) => (this.mobilecachedb1c = subnet),
        },
        {
            id: 'admindb-subnet-1a',
            cidrBlock: '10.90.16.96/28',
            availabilityZone: '0',
            assign: (subnet) => (this.admindb1a = subnet),
        },
        {
            id: 'admindb-subnet-1c',
            cidrBlock: '10.90.16.112/28',
            availabilityZone: '1',
            assign: (subnet) => (this.admindb1c = subnet),
        },
        {
            id: 'register-subnet-1a',
            cidrBlock: '10.90.16.128/28',
            availabilityZone: '0',
            assign: (subnet) => (this.register1a = subnet),
        },
        {
            id: 'register-subnet-1c',
            cidrBlock: '10.90.16.144/28',
            availabilityZone: '1',
            assign: (subnet) => (this.register1c = subnet),
        },
        {
            id: 'admin-subnet-1a',
            cidrBlock: '10.90.16.160/28',
            availabilityZone: '0',
            assign: (subnet) => (this.admin1a = subnet),
        },
        {
            id: 'admin-subnet-1c',
            cidrBlock: '10.90.16.176/28',
            availabilityZone: '1',
            assign: (subnet) => (this.admin1c = subnet),
        },
        {
            id: 'mobile-subnet-1a',
            cidrBlock: '10.90.16.192/28',
            availabilityZone: '0',
            assign: (subnet) => (this.mobile1a = subnet),
        },
        {
            id: 'mobile-subnet-1c',
            cidrBlock: '10.90.16.208/28',
            availabilityZone: '1',
            assign: (subnet) => (this.mobile1c = subnet),
        },
        {
            id: 'vitalwebhook-subnet-1a',
            cidrBlock: '10.90.16.224/28',
            availabilityZone: '0',
            assign: (subnet) => (this.vitalwebhook1a = subnet),
        },
        {
            id: 'vitalwebhook-subnet-1c',
            cidrBlock: '10.90.16.240/28',
            availabilityZone: '1',
            assign: (subnet) => (this.vitalwebhook1c = subnet),
        },
        {
            id: 'vital-transform-subnet-1a',
            cidrBlock: '10.90.17.0/28',
            availabilityZone: '0',
            assign: (subnet) => (this.vitaltransform1a = subnet),
        },
        {
            id: 'vital-transform-subnet-1c',
            cidrBlock: '10.90.17.16/28',
            availabilityZone: '1',
            assign: (subnet) => (this.vitaltransform1c = subnet),
        },
        {
            id: 'vital-parsing-subnet-1a',
            cidrBlock: '10.90.17.32/28',
            availabilityZone: '0',
            assign: (subnet) => (this.vitalparsing1a = subnet),
        },
        {
            id: 'vital-parsing-subnet-1c',
            cidrBlock: '10.90.17.48/28',
            availabilityZone: '1',
            assign: (subnet) => (this.vitalparsing1c = subnet),
        },
        {
            id: 'vital-raw-subnet-1a',
            cidrBlock: '10.90.17.64/28',
            availabilityZone: '0',
            assign: (subnet) => (this.vitalraw1a = subnet),
        },
        {
            id: 'vital-raw-subnet-1c',
            cidrBlock: '10.90.17.80/28',
            availabilityZone: '1',
            assign: (subnet) => (this.vitalraw1c = subnet),
        },
        {
            id: 'vital-job-subnet-1a',
            cidrBlock: '10.90.17.96/28',
            availabilityZone: '0',
            assign: (subnet) => (this.vitaljob1a = subnet),
        },
        {
            id: 'vital-job-subnet-1c',
            cidrBlock: '10.90.17.112/28',
            availabilityZone: '1',
            assign: (subnet) => (this.vitaljob1c = subnet),
        },
        {
            id: 'common-services-subnet-1a',
            cidrBlock: '10.90.17.128/28',
            availabilityZone: '0',
            assign: (subnet) => (this.commonservices1a = subnet),
        },
        {
            id: 'common-services-subnet-1c',
            cidrBlock: '10.90.17.144/28',
            availabilityZone: '1',
            assign: (subnet) => (this.commonservices1c = subnet),
        },
    ];

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
        for (const resourceInfo of this.resourcesInfo) {
            const subnet = this.createSN(scope, resourceInfo);
            resourceInfo.assign(subnet);
        }
    }

    private createSN(scope: Construct, resourceInfo: ResourceInfo): ec2.CfnSubnet {
        const logigcalId: string = this.Format(scope, resourceInfo.id);
        const subnet = new ec2.CfnSubnet(scope, logigcalId, {
            availabilityZone:
                cdk.Stack.of(scope).availabilityZones[resourceInfo.availabilityZone],
            cidrBlock: resourceInfo.cidrBlock,
            mapPublicIpOnLaunch: false,
            vpcId: this.vpc.vpc.ref,
            tags: [
                {
                    key: `Name`,
                    value: this.createTagName(
                        scope,
                        this.projectName,
                        this.stageName,
                        this.stackname,
                        resourceInfo.id,
                    ),
                },
            ],
        });
        return subnet;
    }
}
