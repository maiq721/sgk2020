using Library;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TMSBO.Model
{
    [ConfigTable("program", "", false, "")]
    public class Program : BaseModel
    {
        [Key]
        /// <summary>
        /// 
        /// </summary>
        public int ID { get; set; }
        /// <summary>
        /// tên chương trình học
        /// </summary>
        public string ProgramName { get; set; }
    }
}
