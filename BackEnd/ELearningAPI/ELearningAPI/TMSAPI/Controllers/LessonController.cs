using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using TMSBL;
using TMSBO;

namespace TMSAPI.Controllers
{
    [RoutePrefix("api/lesson")]
    public class LessonController : BaseController
    {
        public LessonController(ILessonBL lessonBL)
        {
            this.BL = lessonBL;
            //this.CurrentModelType = typeof(Model.Candidate);
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<ServiceResult> GetAll()
        {
            var res = new ServiceResult();
            try
            {
                res = (this.BL as ILessonBL).GetAllData();
            }
            catch (Exception ex)
            {
                res.Success = false;
                throw;
            }
            return res;
        }
    }
}
