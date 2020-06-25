using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TMSBO;

namespace TMSBL
{
    public  interface IProgramBL : IBaseBL
    {
        ServiceResult GetAllData();
        bool DeleteData(int id);
    }
}
