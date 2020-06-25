using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TMSBO;

namespace TMSBL
{
    public class ProgramBL : BaseBL, IProgramBL
    {
        public ServiceResult GetAllData()
        {
            ServiceResult res = new ServiceResult();
            var query = "select * from program";
            res.Data = DL.Query(query, System.Data.CommandType.Text);
            return res;
        }

        public bool DeleteData(int id)
        {
            var res = false;
            res = ExecuteScalarUsingStoredProcedure<bool>("Proc_Program_delete");
            return res;
        }
    }
}
