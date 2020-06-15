using Library;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TMSBO.Model
{
    [ConfigTable("subject", "", false, "")]
    public class Subject : BaseModel
    {
        [Key]
        /// <summary>
        /// 
        /// </summary>
        public int ID { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string SubjectName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int? ClassID { get; set; }
        /// <summary>
        /// mô tả môn học
        /// </summary>
        public string Description { get; set; }
        /// <summary>
        /// lưu đường dẫn ảnh môn học
        /// </summary>
        public string Image { get; set; }
    }
}
