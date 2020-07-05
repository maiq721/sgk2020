using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TMSBO;
using TMSBO.Model;

namespace TMSBL
{
    public class ClassBL : BaseBL, IClassBL
    {
        public ServiceResult GetAllData()
        {
            ServiceResult res = new ServiceResult();
            var query = "select * from class";
            res.Data = DL.Query<dynamic>("Proc_Class_GetAll").Result;
            return res;
        }

        public bool Delete(int id)
        {
            var res = false;
            var param = new
            {
                v_ClassID = id
            };
            res = DL.Execute("Proc_Class_Delete", param: param).Result;
            return res;
        }
    }
}
