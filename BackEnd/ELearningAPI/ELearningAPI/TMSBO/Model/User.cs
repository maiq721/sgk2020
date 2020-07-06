using Library;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TMSBO.Model
{
    [ConfigTable("user", "", false, "")]
    public class User : BaseModel
    {
        [Key]
        /// <summary>
        /// ID pk mã nhân viên
        /// </summary>
        public int UserID { get; set; }
        /// <summary>
        /// Họ và tên nhân viên
        /// </summary>
        public string UserName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string FullName { get; set; }
        /// <summary>
        /// user đăng ký ở chương trình nào
        /// </summary>
        public int? ProgramID { get; set; }

        public string ProgramName { get; set; }
        /// <summary>
        /// Số điện thoại
        /// </summary>
        public string Mobile { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Email { get; set; }
        /// <summary>
        /// trạng thái của user  (1: chưa kích hoạt , 2: chờ xác nhận, 3: đang hoạt động, 4:Ngừng kích hoạt , 5: đã xóa )
        /// </summary>
        public int? Status { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Password { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Token { get; set; }
        /// <summary>
        /// mã vai trò: vd Admin(lưu enum)
        /// </summary>
        public string RoleCode { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string RoleName { get; set; }
        /// <summary>
        /// ưu vai trò, lưu dạng string: vd: Add; Edit
        /// </summary>
        public string PermissionDetail { get; set; }
    }
}
