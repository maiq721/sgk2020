/**
* Model cho user_topic để lưu lên server
 * @export
* @class EventForInsert
*/
export class UserTopic 
{
// user ID
ID:  number 
// 
UserID?:  number 
// tên user
UserName:  string 
// bài học id
TopicID?:  number 
// tên bài học user đang học
TopicName:  string 
// 
TopicStatus?:  number 
// ngày bắt đầu học
StartDate:  string 
// thời gian hoàn thành
FinishDate:  string 
// 
TennantID?:  number 
}
