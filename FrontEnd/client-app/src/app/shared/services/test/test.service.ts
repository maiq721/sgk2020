import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/base/base-service/base.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService  {


  public API_URL = 'http://localhost:57999/api/test';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/value`);
  }
}
