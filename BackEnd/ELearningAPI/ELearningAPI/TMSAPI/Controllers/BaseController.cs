using Newtonsoft.Json;
using System;
using System.Threading.Tasks;
using System.Web.Configuration;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Routing;
using TMSBL;
using TMSBO;

namespace TMSAPI.Controllers
{
    
    public class BaseController : ApiController
    {
        private IBaseBL _BL;
        protected IBaseBL BL
        {
            get
            {
                if (_BL == null)
                {
                    throw new NotImplementedException("DEV: Chưa gán property 'BL' cho Controller");
                }
                return _BL;
            }
            set
            {
                _BL = value;
            }
        }

        private Type _currentModelType;
        protected Type CurrentModelType
        {
            get
            {
                if (_currentModelType == null)
                {
                    throw new NotImplementedException("Chưa gán property 'CurrentModelType' cho Controller");
                }
                return _currentModelType;
            }
            set
            {
                _currentModelType = value;
            }
        }
        protected BaseBL baseBL;
        public BaseController()
        {
            this.baseBL = new BaseBL();
        }
        public async Task<ServiceResult> GetAll()
        {
            var res = new ServiceResult();
            try
            {
                res.Data = baseBL.Query<BaseModel>("Select * From `task-info`", System.Data.CommandType.Text);
            }catch(Exception ex)
            {
                res.Success = false;
                throw;
            }
            return res;
        }
        [HttpPost]
        [Route("save")]
        public async Task<ServiceResult> SaveData([FromBody]object object1)
        {
            var res = new ServiceResult();
            if (ModelState.IsValid)
            {
                try
                {
                    var baseModel = (BaseModel)JsonConvert.DeserializeObject(object1.ToString(), this.CurrentModelType);
                    res = baseBL.SaveData(baseModel);
                }
                catch (Exception ex)
                {
                    res.Success = false;
                    throw;
                }
            }
            else
            {
                res.Success = false;
                res.Error = "Invalid object Type!";
            }
            return res;
        }

        
    }

}
