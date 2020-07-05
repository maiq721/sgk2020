import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceResult } from '../model/service-respon';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(
    private http: HttpClient
  ) { }

  getAllData() : Observable<ServiceResult>{
    const uri = `http://localhost:57999/api/subject/getAll`;
    return this.http.get<ServiceResult>(uri);
  }

  save(param) : Observable<ServiceResult>{
    const uri = `http://localhost:57999/api/subject/save`;
    return this.http.post<ServiceResult>(uri, param);
  }

  delete(id) : Observable<ServiceResult>{
    const uri = `http://localhost:57999/api/subject/delete/${id}`;
    return this.http.get<ServiceResult>(uri);
  }
}
