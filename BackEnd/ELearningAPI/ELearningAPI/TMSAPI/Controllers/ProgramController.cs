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
    [RoutePrefix("api/program")]
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ProgramController : BaseController
    {
        public ProgramController(IProgramBL classBL)
        {
            this.BL = classBL;
            this.CurrentModelType = typeof(TMSBO.Model.Program);
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<ServiceResult> GetAll()
        {
            var res = new ServiceResult();
            try
            {
                res = (this.BL as IProgramBL).GetAllData();
            }
            catch (Exception ex)
            {
                res.Success = false;
                throw;
            }
            return res;
        }

        //[HttpPost]
        //[Route("save")]
        //public async Task<ServiceResult> SaveDataCon([FromBody] Program program)
        //{
        //    var res = new ServiceResult();
        //    try
        //    {
        //        res = (this.BL as IProgramBL).SaveData(program);
        //    }
        //    catch (Exception ex)
        //    {
        //        res.Success = false;
        //        throw;
        //    }
        //    return res;
        //}

        [HttpDelete]
        [Route("delete/{id}")]
        public async Task<ServiceResult> DeleteData(int id)
        {
            var res = new ServiceResult();
            try
            {
                res.Success = (this.BL as IProgramBL).DeleteData(id);
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
