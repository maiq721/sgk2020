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
    [RoutePrefix("api/subject")]
    public class SubjectController : BaseController
    {
        public SubjectController(ISubjectBL subjectBL)
        {
            this.BL = subjectBL;
            this.CurrentModelType = typeof(TMSBO.Model.Subject);
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<ServiceResult> GetAll()
        {
            var res = new ServiceResult();
            try
            {
                res = (this.BL as ISubjectBL).GetAllData();
            }
            catch (Exception ex)
            {
                res.Success = false;
                throw;
            }
            return res;
        }
        [HttpGet]
        [Route("getByUserID/{programID}/{userID}")]
        public async Task<ServiceResult> GetClassSubjectByUserAndProgram(int programID, int userID)
        {
            var res = new ServiceResult();
            try
            {
                res.Data = (this.BL as ISubjectBL).GetClassSubjectByUserAndProgram( programID,  userID);
            }
            catch (Exception ex)
            {
                res.Success = false;
                throw;
            }
            return res;
        }

        [HttpGet]
        [Route("delete/{id}")]
        public async Task<ServiceResult> Delete(int id)
        {
            var res = new ServiceResult();
            try
            {
                res.Success = (this.BL as ISubjectBL).Delete(id);
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
