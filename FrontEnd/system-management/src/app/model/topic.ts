import { BaseEntity } from './../base/base-model/base-entity';
export class Topic extends BaseEntity{
    ID: number;
    TopicName: string;
    SubjectID: number;
    SubjectName: string;
}