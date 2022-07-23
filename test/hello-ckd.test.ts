import * as cdk from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { HelloCkdStack } from '../lib/hello-ckd-stack';

const env = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
};

const app = new cdk.App({
    context: {
        config: 'dev',
        dev: {
            projectOwner: 'Quan.devopsify',
            projectName: 'cdk-learning',
            costOwner: 'huyntt.devopsify',
        },
    },
});

const mainStack = new HelloCkdStack(app, `CdkStarterStack`, { env });

<<<<<<< refs/remotes/origin/main
test('snapshot has not changed', () => {
    expect(Template.fromStack(mainStack)).toMatchSnapshot();
});
test('VPC Exists with correct CIDR and Tags', () => {
    expect(
        Template.fromStack(mainStack).hasResourceProperties('AWS::EC2::VPC', {
            CidrBlock: '10.90.16.0/22',
            Tags: [
                {
                    Key: 'Name',
                    Value: 'cdk-learning-dev-network-vpc',
                },
            ],
        }),
    );
});
test('total 26 subnet', () => {
    expect(Template.fromStack(mainStack).resourceCountIs('AWS::EC2::Subnet', 26));
=======
describe('MainStack', () => {
    test('snapshot MainStack', () => {
        expect(Template.fromStack(mainStack)).toMatchSnapshot();
    });
>>>>>>> 6.igw
});
