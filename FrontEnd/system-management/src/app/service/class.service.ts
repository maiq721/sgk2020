import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceResult } from '../model/service-respon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(
    private http: HttpClient
  ) { }

  getClass(): Observable<ServiceResult>{
    const uri = `http://localhost:57999/api/class/getAll`;
    return this.http.get<ServiceResult>(uri);
  }
}
