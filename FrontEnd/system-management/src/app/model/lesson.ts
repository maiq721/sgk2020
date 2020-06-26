import { BaseEntity } from './../base/base-model/base-entity';
export class Lesson extends BaseEntity{
    ID: number;
    LessonName: string;
    TopicID: number;
    TopicName: string;
    ProgramID: number;
    Status: number;
    Description: string;
    Image: string;
    LinkURL: string;
}