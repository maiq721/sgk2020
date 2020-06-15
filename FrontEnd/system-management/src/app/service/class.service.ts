import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(
    private http: HttpClient
  ) { }

  getClass(){
    const uri = `http://localhost:57999/api/test/value`;
    return this.http.get<Observable<any>>(uri);
  }
}
