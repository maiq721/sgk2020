using Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using TMSBL;
using TMSBO;
using TMSBO.Model;

namespace TMSAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/user_lesson")]
    [BasicAuthentication]
    public class UserLessonController : BaseController
    {
        public UserLessonController(IUserLessonBL lessonBL)
        {
            this.BL = lessonBL;
            this.CurrentModelType = typeof(TMSBO.Model.UserLesson);
        }
        [HttpPost]
        [Route("saveData")]
        public async Task<ServiceResponse> Save([FromBody] UserLesson userLesson)
        {
            var res = new ServiceResponse();
            try
            {
                var objUser = BL.SaveData(userLesson);
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
