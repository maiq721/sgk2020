using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TMSBO;

namespace TMSBL
{
    public interface ISubjectBL: IBaseBL
    {
        ServiceResult GetAllData();

        // lấy dữ liệu môn học và lớp học của môn theo chương trình
        object GetClassSubjectByUserAndProgram(int programID, int userID);
    }
}
