import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/base/base-service/base.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserLesson } from '../../model/User_Lesson';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  public subject_url = 'http://localhost:57999/api/subject';
  public lesson_url = 'http://localhost:57999/api/lesson';
  public user_lesson_url = 'http://localhost:57999/api/user_lesson';



  constructor(private http: HttpClient) {
  }

  getByUserID(programID, userID): Observable<any> {
    return this.http.get<any>(`${this.subject_url}/getByUserID/${programID}/${userID}`);
  }

  getBySubjectID(subjectID, userID): Observable<any> {
    return this.http.get<any>(`${this.lesson_url}/getBySubjectID/${subjectID}/${userID}`);
  }
  getSubjectDetailByUser(userID): Observable<any> {
    return this.http.get<any>(`${this.lesson_url}/getSubjectDetailByUser/${userID}`);
  }

  updateLessonStatus(lessonID, obj, userID): Observable<any> {
    return this.http.post<any>(`${this.lesson_url}/updateStatus/${lessonID}/${userID}`, obj);
  }

  addUserLesson(userLesson: UserLesson): Observable<any> {
    return this.http.post<any>(`${this.user_lesson_url}/saveData`, userLesson);
  }

}
