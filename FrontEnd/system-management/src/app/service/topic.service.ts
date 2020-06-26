import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceResult } from '../model/service-respon';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(
    private http: HttpClient
  ) { }

  getAllData() : Observable<ServiceResult>{
    const uri = `http://localhost:57999/api/topic/getAll`;
    return this.http.get<ServiceResult>(uri);
  }

  save(param) : Observable<ServiceResult>{
    const uri = `http://localhost:57999/api/topic/save`;
    return this.http.post<ServiceResult>(uri, param);
  }

  delete(id) : Observable<ServiceResult>{
    const uri = `http://localhost:57999/api/topic/delete/${id}`;
    return this.http.delete<ServiceResult>(uri);
  }
}
