using Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TMSBO;
using TMSBO.Model;

namespace TMSBL
{
    public class SubjectBL : BaseBL, ISubjectBL
    {
        public ServiceResult GetAllData()
        {
            ServiceResult res = new ServiceResult();
            res.Data = DL.Query("Proc_Subject_GetAll").Result;
            return res;
        }
        public object GetClassSubjectByUserAndProgram(int programID, int userID)
        {
            var dic = new Dictionary<string, object>() { { "UserID", userID }, { "ProgramID", programID } };
            var p = Utils.ConvertDatabaseParam(dic);
            var res = DL.Query("Proc_GetClassSubjectByUserAndProgram", System.Data.CommandType.StoredProcedure, p).Result;
            return res;
        }

        public bool Delete(int id)
        {
            var res = false;
            var param = new {
                v_SubjectID = id
            };
            res = DL.Execute("Proc_Subject_Delete", param: param).Result;
            return res;
        }

    }
}
