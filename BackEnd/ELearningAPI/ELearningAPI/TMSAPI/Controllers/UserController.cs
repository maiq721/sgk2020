using Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using TMSBL;
using TMSBO.Model;

namespace TMSAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/user")]
    [AllowAnonymous]
    public class UserController : BaseController
    {
        public UserController() { }
        public UserController(IUserBL IBL)
        {
            this.BL = IBL;
            this.CurrentModelType = typeof(User);
        }

        /// <summary>
        /// Đăng nhập
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("login")]
        public IHttpActionResult Login(User user)
        {
            var md5 = new MD5CryptoServiceProvider();
            var userDB = this.BL.Query<User>("Proc_Login", System.Data.CommandType.StoredProcedure, new
            {
                v_UserName = user.UserName,
                v_Password = user.Password //md5.ComputeHash(Encoding.ASCII.GetBytes(password))
            }).Result;


            if (userDB != null)
            {
                userDB[0].Password = null;
                return Ok(new
                {
                    Token = Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(userDB[0].UserID.ToString())),
                    UserInfo = userDB
                });
            }
            return Unauthorized();
        }

        [HttpPost]
        [AllowAnonymous]
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