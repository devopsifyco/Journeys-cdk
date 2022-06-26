#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HelloCkdStack } from '../lib/hello-ckd-stack';
import { getConfig } from '../config/build-config';

const app = new cdk.App();
const config = getConfig(app);

new HelloCkdStack(app, 'HelloCkdStack', {
  stackName: 'hello-stack',
  // env account.
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
    // common tags for project
    tags: {
      CostCenter: config.costOwner,
      Project: config.projectName,
      ProjectOwner: config.projectOwner,
    },
});