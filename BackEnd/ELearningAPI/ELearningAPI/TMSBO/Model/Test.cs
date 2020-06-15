using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TMSBO.Model
{
    [Table("Test")]
    public class Test:BaseModel
    {
        public string Name { get; set; }
        [Key]
        public int id { get; set; }
    }
}
