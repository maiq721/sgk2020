using System;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using TMSBL;
using TMSBO;

namespace TMSAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/test")]
    [BasicAuthentication]
    public class TestController : BaseController
    {
        public TestController(ITestBL testBL)
        {
            this.BL = testBL;
            //this.CurrentModelType = typeof(Model.Candidate);
        }
        [HttpGet]
        [Route("value")]
        public string Test()
        {
            return "Hello grand master, API is running!";
        }
        [HttpGet]
        [Route("all")]
        public async Task<ServiceResult> GetDataTest()
        {
            ServiceResult res = new ServiceResult();
            try
            {
                 res.Data = "token OK";
                //res.Data = this.BL... => gọi thẳng vào base
            }
            catch(Exception ex)
            {
                throw ex;
            }
            return res;
        }
    }
}
