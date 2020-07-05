import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router,
    private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.get('No-Auth') === 'True') {
      return next.handle(req.clone());
    }
    if (localStorage.getItem('Token')) {
      const clonedreq = req.clone({
        headers: req.headers.set('Authorization', 'Basic ' + localStorage.getItem('Token'))
      });
      return next.handle(clonedreq)
        .pipe(
          tap(
            succ => { },
            err => {
              if (err.status === 401) {
                this.router.navigateByUrl('/login-form');
                this.authService.logOut();
              }
            }
          )
        );
    } else {
      this.router.navigateByUrl('/login-form');
      this.authService.logOut();
      return next.handle(req.clone());
    }
  }
}