using Library;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TMSBO.Model
{
    [ConfigTable("lesson", "", false, "")]
    public class Lesson : BaseModel
    {
        [Key]
        /// <summary>
        /// 
        /// </summary>
        public int ID { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string LessonName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int? TopicID { get; set; }
        /// <summary>
        /// lưu dư thừa tên chủ đề
        /// </summary>
        public string TopicName { get; set; }
        /// <summary>
        /// Lưu dư thừa để lấy bài học theo chương trình học
        /// </summary>
        public int? ProgramID { get; set; }
        /// <summary>
        /// trạng thái: 1 kích hoạt
        /// </summary>
        public int? Status { get; set; }
        /// <summary>
        /// mô tả bài học
        /// </summary>
        public string Description { get; set; }
        /// <summary>
        /// lưu ảnh tiết học
        /// </summary>
        public string Image { get; set; }
        /// <summary>
        /// Link bài học
        /// </summary>
        public string LinkURL { get; set; }
    }
}

