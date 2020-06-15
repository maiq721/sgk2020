using Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using TMSBL;
using TMSBO.Model;

namespace TMSAPI.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : BaseController
    {
        public UserController() { }
        public UserController(IUserBL IBL)
        {
            this.BL = IBL;
            this.CurrentModelType = typeof(User);
        }
        [HttpPost]
        [Route("SignUp")]
        public async Task<ServiceResponse> SignUp([FromBody] User user)
        {
            var res = new ServiceResponse();
            try
            {
                var objUser = BL.SaveData(user);
                res.Data = objUser;
            }
            catch (Exception ex)
            {
                res.OnException(ex);
                CommonLog.CommonErrorLog(ex, ex.Message);
            }
            return res;
        }  
        [HttpPost]
        [Route("DeleteData")]
        public async Task<ServiceResponse> DeleteData([FromBody] User user)
        {
            var res = new ServiceResponse();
            try
            {
                var objUser = BL.DeleteData(user);
                res.Data = objUser;
            }
            catch (Exception ex)
            {
                res.OnException(ex);
                CommonLog.CommonErrorLog(ex, ex.Message);
            }
            return res;
        }
        
    }
}