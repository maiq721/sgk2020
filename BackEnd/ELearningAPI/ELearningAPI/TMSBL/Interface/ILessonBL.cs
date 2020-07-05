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
        bool Delete(int id);
        object GetBySubjectID(int subjectID, int userID);
        object GetSubjectDetailByUser(int userID);
        object UpdateStatus(int id, int status, int userID);
    }
}
