import * as cdk from 'aws-cdk-lib';
import { Vpc, SN, IGW } from './resources';
import { getConfig } from '../config/build-config';

export class HelloCkdStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const config = getConfig(scope);

        // VPC
        const vpc = new Vpc(this, config.projectName, config.environment, `network`);

        // Subnet
        new SN(this, config.projectName, config.environment, `network`, vpc);

        // Internet Gateway
        const internetGateway = new IGW(
            this,
            config.projectName,
            config.environment,
            `network`,
            vpc,
        );
    }
}