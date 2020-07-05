using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TMSBO;

namespace TMSBL
{
    public interface ILessonBL : IBaseBL
    {
        ServiceResult GetAllData();
        object GetBySubjectID(int subjectID);
        bool Delete(int id);
    }
}
