import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public API_URL = 'http://localhost:57999/api/user';
  constructor(private http: HttpClient) {
  }

  login(user): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login`, user);
  }
}
