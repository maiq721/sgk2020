using Library;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TMSBO.Model
{
    [ConfigTable("user_lesson", "", false, "")]
    public class UserLesson : BaseModel
    {
        [Key]
        /// <summary>
        /// user ID
        /// </summary>
        public int ID { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int? UserID { get; set; }
        /// <summary>
        /// tên user
        /// </summary>
        public string UserName { get; set; }
        /// <summary>
        /// bài học id
        /// </summary>
        public int? LessonID { get; set; }
        /// <summary>
        /// tên bài học user đang học
        /// </summary>
        public string LessonName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int? LessonStatus { get; set; }
        /// <summary>
        /// ngày bắt đầu học
        /// </summary>
        public string StartDate { get; set; }
        /// <summary>
        /// thời gian hoàn thành
        /// </summary>
        public string FinishDate { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int? TennantID { get; set; }
        /// <summary>
        /// trạng thái 1: chưa được học, 2 đang học, 3 hoàn thành
        /// </summary>
        public int? Status { get; set; }
    }
}
