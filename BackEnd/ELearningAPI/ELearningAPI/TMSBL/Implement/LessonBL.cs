using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TMSBO;

namespace TMSBL
{
    public class LessonBL : BaseBL, ILessonBL
    {
        public ServiceResult GetAllData()
        {
            ServiceResult res = new ServiceResult();
            var query = "select * from lesson";
            res.Data = DL.Query(query, System.Data.CommandType.Text);
            return res;
        }
    }
}
