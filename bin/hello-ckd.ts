#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HelloCkdStack } from '../lib/hello-ckd-stack';

const app = new cdk.App();
new HelloCkdStack(app, 'HelloCkdStack', {
  stackName: 'hello-stack',
  // env account.
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});