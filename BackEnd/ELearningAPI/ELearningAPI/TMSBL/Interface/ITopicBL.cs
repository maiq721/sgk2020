using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TMSBO;

namespace TMSBL
{
    public interface ITopicBL: IBaseBL
    {
        ServiceResult GetAllData();
    }
}
