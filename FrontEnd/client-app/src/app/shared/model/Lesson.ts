/**
* Model cho lesson để lưu lên server
 * @export
* @class EventForInsert
*/
export class Lesson {
    // 
    ID: number
    // 
    LessonName: string
    // 
    TopicID?: number
    // lưu dư thừa tên chủ đề
    TopicName: string
    // Lưu dư thừa để lấy bài học theo chương trình học
    ProgramID?: number
    // trạng thái: 1 kích hoạt
    Status?: number
    // mô tả bài học
    Description: string
    // lưu ảnh tiết học
    Image: string
    // Link bài học
    LinkURL: string
}
