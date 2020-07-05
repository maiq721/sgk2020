using Library;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TMSBO.Model
{
    [ConfigTable("class", "", false, "")]
    public class Class : BaseModel
    {
        [Key]
        /// <summary>
        /// 
        /// </summary>
        public int ID { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string ClassName { get; set; }
        /// <summary>
        /// lớp học thuộc chương trình học
        /// </summary>
        public int? ProgramID { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Decription { get; set; }
        /// <summary>
        /// Loại lớp học: 1 mặc định, 2 tự tạo
        /// </summary>
        public int? ClassType { get; set; }
        /// <summary>
        /// Tên user tạo lớp nếu là mặc định thì để rỗng
        /// </summary>
        public int? OwnerID { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string OwnerName { get; set; }
    }
}