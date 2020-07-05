import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../model/User';

@Injectable()
export class AuthService {
  loggedIn = true;

  constructor(private router: Router) { }

  logIn(login: string, passord: string) {
    this.loggedIn = true;
    this.router.navigate(['elearning/client']);
  }

  logOut() {
    this.loggedIn = false;
    localStorage.removeItem('Token');
    localStorage.removeItem('UserInfo');
    this.router.navigate(['elearning/login']);
  }

  get isLoggedIn() {
    return this.loggedIn;
  }
  getUserInfo(): User {
    const userstr = localStorage.getItem("UserInfo");
    if (userstr) {
      return JSON.parse(userstr);
    } else {
      return new User();
    }
  }
}

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const user = this.authService.getUserInfo();
    if (user && user.RoleCode) {
      const role = user.RoleCode;
      if (role === 'Teacher' || role === 'Student') {
        return true;
      }
    } else {
      this.router.navigate(['elearning/login']);
    }
    return false;
  }
}
