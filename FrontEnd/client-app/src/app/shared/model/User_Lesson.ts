import { BaseEntity } from 'src/app/base/base-model/base-entity';

/**
* Model cho user_lesson để lưu lên server
 * @export
* @class EventForInsert
*/
export class UserLesson extends BaseEntity{
    // user ID
    ID: number;
    // 
    UserID?: number;
    // tên user
    UserName: string;
    // bài học id
    LessonID?: number;
    // tên bài học user đang học
    LessonName: string;
    // 
    LessonStatus?: number;
    // ngày bắt đầu học
    StartDate: string;
    // thời gian hoàn thành
    FinishDate: string;
    // 
    TennantID?: number;
    // trạng thái 1: chưa được học, 2 đang học, 3 hoàn thành
    Status?: number;
}
