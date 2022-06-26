import { Construct } from 'constructs';
import * as cdk from "aws-cdk-lib";

export abstract class Resource {

    constructor() {}

    protected createTagName(scope: Construct, ProjectName: string, StageName: string, stackname: string, originalName: string): string {
        return [
            ProjectName,
            StageName,
            stackname,
            originalName,
        ].join('-');
    }

    // protected Format(scope: Construct, name: string): string {
    //     return name
    //         .split('-')
    //         .map((name) => name[0].toUpperCase() + name.substring(1))
    //         .join('');
    // }

    // protected FomatId(scope: Construct, id: number): string {
    //     return ('00' + id).slice(-3);
    // }
}
