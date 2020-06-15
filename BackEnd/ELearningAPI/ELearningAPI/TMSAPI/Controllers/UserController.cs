using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TMSBL;

namespace TMSAPI.Controllers
{
    [RoutePrefix("api/test")]
    public class UserController : BaseController
    {
        public UserController(IUserBL userBL)
        {
            this.BL = userBL;
            //this.CurrentModelType = typeof(Model.Candidate);
        }

        [HttpGet]
        [Route("")]
        public string Test()
        {
            return "Hello grand master, API is running!";
        }
    }
}
