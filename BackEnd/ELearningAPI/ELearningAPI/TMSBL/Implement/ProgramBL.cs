using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TMSBO;
using TMSBO.Model;

namespace TMSBL
{
    public class ProgramBL : BaseBL, IProgramBL
    {
        public ServiceResult GetAllData()
        {
            ServiceResult res = new ServiceResult();
            var query = "select * from program";
            res.Data = DL.Query<Program>(query, System.Data.CommandType.Text).Result;
            return res;
        }

        public bool DeleteData(int id)
        {
            var res = false;
            var param = new { 
                v_ProgramID = id
            } ;
            res = DL.Execute("Proc_Program_Delete", param: param).Result;
            return res;
        }
    }
}
