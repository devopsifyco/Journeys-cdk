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

describe('MainStack', () => {
    test('snapshot MainStack', () => {
        expect(Template.fromStack(mainStack)).toMatchSnapshot();
    });
});
