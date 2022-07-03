import { Construct } from 'constructs';

export abstract class Resource {
    constructor() {}

    protected createTagName(
        scope: Construct,
        projectName: string,
        stageName: string,
        stackname: string,
        originalName: string,
    ): string {
        return [projectName, stageName, stackname, originalName].join('-');
    }

    protected Format(scope: Construct, name: string): string {
        return name
            .split('-')
            .map((name) => name[0].toUpperCase() + name.substring(1))
            .join('');
    }

    // protected FomatId(scope: Construct, id: number): string {
    //     return ('00' + id).slice(-3);
    // }
}
