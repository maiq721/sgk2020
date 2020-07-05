import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public API_URL = 'http://localhost:57999/api/user';
  constructor(private http: HttpClient) {
  }

  login(user): Observable<any> {
    let r = this.http.post<any>(`${this.API_URL}/login`, user);
    return r;
  }

  signUP(user): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('No-Auth', 'True');
    return this.http.post<any>(`${this.API_URL}/SignUpUser`, user, {
      headers: headers
    });
  }
}
