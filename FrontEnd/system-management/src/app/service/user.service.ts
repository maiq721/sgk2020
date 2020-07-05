import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceResult } from '../model/service-respon';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public API_URL = 'http://localhost:57999/api/user';
  constructor(
    private http: HttpClient
    
  ) { }

  getAllData() : Observable<ServiceResult>{
    const uri = `http://localhost:57999/api/user/getAll`;
    return this.http.get<ServiceResult>(uri);
  }

  save(param) : Observable<ServiceResult>{
    const uri = `http://localhost:57999/api/user/save`;
    return this.http.post<ServiceResult>(uri, param);
  }

  delete(id) : Observable<ServiceResult>{
    const uri = `http://localhost:57999/api/user/delete/${id}`;
    return this.http.get<ServiceResult>(uri);
  }

  lockUser(id, status): Observable<ServiceResult>{
    const uri = `http://localhost:57999/api/user/lockUser/${id}/${status}`;
    return this.http.get<ServiceResult>(uri);
  }

  login(user): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login`, user);
  }
}
