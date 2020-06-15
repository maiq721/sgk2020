import { BaseEntity } from './../base/base-model/base-entity';
export class User extends BaseEntity{
    UserID: number;
    FullName: string;
    UserName: string;
    Passord: string;
    Email: string;
    Mobile: string;
    Status: number;
    RoleCode: string;
    RoleName: string;
    Permissiondetail: string;
}

export class UserTopic extends BaseEntity{
    ID: number;
    UserID: number;
    UserName: string;
    TopicID: number;
    TopicName: string;
    TopicStatus: number;
    StartDate: Date;
    FinishDate: Date;
}

export class UserRole extends BaseEntity{
    UserRoleID: number;
    UserID: number;
    RoleID: number;
    RoleName: string;
}

export class UserLesson extends BaseEntity{
    ID: number;
    UserID: number;
    LessonID: number;
    LessonName: string;
    LessonStatus: number;
    StartDate: Date;
    FinishDate: Date;
}