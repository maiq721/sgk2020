/**
* Model cho user để lưu lên server
 * @export
* @class EventForInsert
*/
export class User 
{
// ID pk mã nhân viên
UserID:  number 
// Họ và tên nhân viên
UserName:  string 
// 
FullName:  string 
// user đăng ký ở chương trình nào
ProgramID?:  number 
// Số điện thoại
Mobile:  string 
// 
Email:  string 
// trạng thái của user  (1: chưa kích hoạt , 2: chờ xác nhận, 3: đang hoạt động, 4:Ngừng kích hoạt , 5: đã xóa )
Status?:  any; 
// 
Password:  string 
// 
Token:  string 
// mã vai trò: vd Admin(lưu enum)
RoleCode:  string 
// 
RoleName:  string 
// ưu vai trò, lưu dạng string: vd: Add; Edit
PermissionDetail:  string 

OrderNumber : number;

}
