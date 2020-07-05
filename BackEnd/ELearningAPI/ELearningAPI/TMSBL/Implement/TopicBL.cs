using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TMSBO;
using TMSBO.Model;

namespace TMSBL
{
    public class TopicBL : BaseBL, ITopicBL
    {
        public ServiceResult GetAllData()
        {
            ServiceResult res = new ServiceResult();
            res.Data = DL.Query("Proc_Topic_GetAll").Result;
            return res;
        }
        public bool Delete(int id)
        {
            var res = false;
            var param = new
            {
                v_TopicID = id
            };
            res = DL.Execute("Proc_Topic_Delete", param : param).Result;
            return res;
        }
    }
}
