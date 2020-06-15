using Library;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TMSBO.Model
{
    [ConfigTable("topic", "", false, "")]
    public class Topic : BaseModel
    {
        [Key]
        /// <summary>
        /// 
        /// </summary>
        public int ID { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string TopicName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int? SubjectID { get; set; }
    }
}
