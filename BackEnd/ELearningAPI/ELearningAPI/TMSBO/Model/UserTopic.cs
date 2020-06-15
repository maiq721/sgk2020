using Library;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TMSBO.Model
{
    [ConfigTable("user_topic", "", false, "")]
    public class UserTopic : BaseModel
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
        public int? TopicID { get; set; }
        /// <summary>
        /// tên bài học user đang học
        /// </summary>
        public string TopicName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int? TopicStatus { get; set; }
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
    }
}
