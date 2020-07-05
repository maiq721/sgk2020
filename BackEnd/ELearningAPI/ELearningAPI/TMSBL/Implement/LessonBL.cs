using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TMSBO;
using TMSBO.Model;

namespace TMSBL
{
    public class LessonBL : BaseBL, ILessonBL
    {
        public ServiceResult GetAllData()
        {
            ServiceResult res = new ServiceResult();
            var query = "select * from lesson";
            res.Data = DL.Query<Lesson>(query, System.Data.CommandType.Text).Result;
            return res;
        }

        public object GetBySubjectID(int subjectID, int userID)
        {
            var query = $"SELECT ul.ID AS UserLessonID,ul.LessonStatus,l.*, s.SubjectName,s.ClassID FROM lesson l LEFT JOIN user_lesson ul ON l.ID = ul.LessonID AND ul.UserID= {userID} JOIN topic t ON l.TopicID = t.ID JOIN subject s ON t.SubjectID = s.ID WHERE t.SubjectID = {subjectID}";
            var res = DL.Query(query, System.Data.CommandType.Text).Result;
            return res;
        }
        public object GetSubjectDetailByUser(int userID)
        {
            var query = $"SELECT ul.ID AS UserLessonID,ul.LessonStatus,l.*, s.SubjectName,s.ClassID FROM lesson l LEFT JOIN user_lesson ul ON l.ID = ul.LessonID AND ul.UserID= {userID} JOIN topic t ON l.TopicID = t.ID JOIN subject s ON t.SubjectID = s.ID";
            var res = DL.Query(query, System.Data.CommandType.Text).Result;
            return res;
        }

        public bool Delete(int id)
        {
            var query = $"Delete from lesson where LessonID = {id}";
            return DL.Execute(query, CommandType.Text).Result;
        }
        public object UpdateStatus(int id, int status, int userID)
        {
            var query = $"UPDATE user_lesson ul set ul.LessonStatus = {status} WHERE ul.ID = {id};";
            var res = DL.ExecuteScalar<object>(query, System.Data.CommandType.Text);
            return res;
        }
    }
}
