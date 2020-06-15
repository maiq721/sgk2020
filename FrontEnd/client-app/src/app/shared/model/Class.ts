/**
* Model cho class để lưu lên server
 * @export
* @class EventForInsert
*/
export class Class 
{
// 
ID:  number ;
// 
ClassName?:  number 
// lớp học thuộc chương trình học
ProgramID?:  number ;
// 
Decription:  string ;
// Loại lớp học: 1 mặc định, 2 tự tạo
ClassType?:  number ;
// Tên user tạo lớp nếu là mặc định thì để rỗng
OwnerID?:  number ;
// 
OwnerName:  string ;
}
