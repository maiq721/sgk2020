import { BaseEntity } from './../base/base-model/base-entity';
export class Class extends BaseEntity{
    ID: number;
    ClassName: string;
    ProgramID: number;
    ProgramName: string;
    Decription: string;
    ClassType: number;
    OwnerID: number;
    OwnerName: string;
}