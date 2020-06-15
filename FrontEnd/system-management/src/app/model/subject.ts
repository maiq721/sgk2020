import { BaseEntity } from './../base/base-model/base-entity';
export class Subject extends BaseEntity{
    ID: number;
    SubjectName: string;
    ClassID: number;
    ClassName: string;
}