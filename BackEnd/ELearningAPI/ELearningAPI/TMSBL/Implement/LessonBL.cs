using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TMSBO;

namespace TMSBL
{
    public class LessonBL : BaseBL, ILessonBL
    {
        public ServiceResult GetAllData()
        {
            ServiceResult res = new ServiceResult();
            var query = "select * from lesson";
            res.Data = DL.Query(query, System.Data.CommandType.Text);
            return res;
        }
        
        public object GetBySubjectID(int subjectID)
        {
            var query = $"SELECT l.*, s.SubjectName,s.ClassID FROM lesson l JOIN topic t ON l.TopicID = t.ID JOIN subject s ON t.SubjectID = s.ID WHERE t.SubjectID = {subjectID}";
            var res = DL.Query(query, System.Data.CommandType.Text).Result;
            return res;
        }
    }
}
