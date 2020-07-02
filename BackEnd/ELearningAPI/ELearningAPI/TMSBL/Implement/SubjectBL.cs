using Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TMSBO;

namespace TMSBL
{
    public class SubjectBL : BaseBL, ISubjectBL
    {
        public ServiceResult GetAllData()
        {
            ServiceResult res = new ServiceResult();
            res.Data = DL.Query("Proc_Subject_GetAll");
            return res;
        }
        public object GetClassSubjectByUserAndProgram(int programID, int userID)
        {
            var dic = new Dictionary<string, object>() { { "UserID", userID }, { "ProgramID", programID } };
            var p = Utils.ConvertDatabaseParam(dic);
            var res = DL.Query("Proc_GetClassSubjectByUserAndProgram", System.Data.CommandType.StoredProcedure, p).Result;
            return res;
        }

    }
}
