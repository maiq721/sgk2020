import { BaseEntity } from './../base/base-model/base-entity';
export class Subject extends BaseEntity{
    ID: number;
    SubjectName: string;
    ClassID: number;
    ClassName: string;
    Description: string;
    Image: string;
}