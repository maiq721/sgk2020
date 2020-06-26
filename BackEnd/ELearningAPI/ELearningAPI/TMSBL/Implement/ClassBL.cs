using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TMSBO;

namespace TMSBL
{
    public class ClassBL : BaseBL, IClassBL
    {
        public ServiceResult GetAllData()
        {
            ServiceResult res = new ServiceResult();
            var query = "select * from class";
            res.Data = DL.Query("Proc_Class_GetAll");
            return res;
        }
    }
}
