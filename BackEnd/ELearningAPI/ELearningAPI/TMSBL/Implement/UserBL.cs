using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TMSBO;
using TMSBO.Model;

namespace TMSBL
{
    public class UserBL : BaseBL, IUserBL
    {
        public bool LockUser(int userid, int status)
        {
            var query = $"Update user SET Status = {status} WHERE UserID = {userid}";
            return DL.Execute(query, CommandType.Text).Result;
        }

        public ServiceResult GetAllData()
        {
            ServiceResult res = new ServiceResult();
            res.Data = DL.Query("Proc_User_getAll");
            return res;
        }
    }
}
