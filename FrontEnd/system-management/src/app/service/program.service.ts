import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceResult } from '../model/service-respon';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(
    private http: HttpClient
  ) { }

  getallData() : Observable<ServiceResult>{
    const uri = `http://localhost:57999/api/program/getAll`;
    return this.http.get<ServiceResult>(uri);
  }

  save(param) : Observable<ServiceResult>{
    const uri = `http://localhost:57999/api/program/save`;
    return this.http.post<ServiceResult>(uri, param);
  }

  delete(id) : Observable<ServiceResult>{
    const uri = `http://localhost:57999/api/program/delete/${id}`;
    return this.http.get<ServiceResult>(uri);
  }
}
