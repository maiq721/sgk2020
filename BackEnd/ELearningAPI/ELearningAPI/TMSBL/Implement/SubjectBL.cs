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
    }
}
