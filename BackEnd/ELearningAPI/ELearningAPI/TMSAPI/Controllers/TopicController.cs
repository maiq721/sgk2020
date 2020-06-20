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
    [RoutePrefix("api/topic")]
    public class TopicController : BaseController
    {
        public TopicController(ITopicBL topicBL)
        {
            this.BL = topicBL;
            //this.CurrentModelType = typeof(Model.Candidate);
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<ServiceResult> GetAll()
        {
            var res = new ServiceResult();
            try
            {
                res = (this.BL as ITopicBL).GetAllData();
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
