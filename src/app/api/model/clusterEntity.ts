/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface ClusterEntity {
    attributes?: { [key: string]: string; };

    class?: ClusterEntity.ModelClassEnum;

    clusterId?: number;

    description?: string;

    eGroup?: string;

    hosts?: Array<string>;

    lbAlias?: string;

    name?: string;

    project?: string;

    state?: ClusterEntity.StateEnum;

    status?: ClusterEntity.StatusEnum;

    type?: string;

    username?: string;

    version?: string;

}
export namespace ClusterEntity {
    export enum ModelClassEnum {
        PROD = <any> 'PROD',
        DEV = <any> 'DEV',
        TEST = <any> 'TEST',
        QA = <any> 'QA',
        REF = <any> 'REF'
    }
    export enum StateEnum {
        RUNNING = <any> 'RUNNING',
        MAINTENANCE = <any> 'MAINTENANCE',
        AWATINGAPPROVAL = <any> 'AWATING_APPROVAL',
        JOBPENDING = <any> 'JOB_PENDING'
    }
    export enum StatusEnum {
        ACTIVE = <any> 'ACTIVE',
        NONACTIVE = <any> 'NON_ACTIVE'
    }
}