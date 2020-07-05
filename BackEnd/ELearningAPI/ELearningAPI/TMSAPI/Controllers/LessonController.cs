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

namespace TMSAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/lesson")]
    public class LessonController : BaseController
    {
        public LessonController(ILessonBL lessonBL)
        {
            this.BL = lessonBL;
            this.CurrentModelType = typeof(TMSBO.Model.Lesson);
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
        
        [HttpGet]
        [Route("getBySubjectID/{subjectID}/{userID}")]
        public async Task<ServiceResult> GetBySubjectID(int subjectID, int userID)
        {
            var res = new ServiceResult();
            try
            {
                res.Data = (this.BL as ILessonBL).GetBySubjectID(subjectID,userID);
            }
            catch (Exception ex)
            {
                res.Success = false;
                throw;
            }
            return res;
        }

        [HttpGet]
        [Route("getSubjectDetailByUser/{userID}")]
        public async Task<ServiceResult> GetSubjectDetailByUser(int userID)
        {
            var res = new ServiceResult();
            try
            {
                res.Data = (this.BL as ILessonBL).GetSubjectDetailByUser(userID);
            }
            catch (Exception ex)
            {
                res.Success = false;
                throw;
            }
            return res;
        }

        /// <summary>
        /// cập nhật bài học theo user
        /// </summary>
        /// <param name="lessonID"></param>
        /// <param name="param"></param>
        /// <param name="userID"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("updateStatus/{lessonID}/{userID}")]
        public async Task<ServiceResult> UpdateStatus(int lessonID, [FromBody] Dictionary<string, object> param, int userID)
        {
            var res = new ServiceResult();
            try
            {
                if (param.ContainsKey("Status"))
                {
                    var status = int.Parse(param["Status"].ToString());
                    res.Data = (this.BL as ILessonBL).UpdateStatus(lessonID, status, userID);
                }
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
                res.Success = (this.BL as ILessonBL).Delete(id);
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
