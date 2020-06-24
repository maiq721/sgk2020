import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/base/base-component/base-component.component';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent extends BaseComponent implements OnInit {
  uUsername: string;
  uPassword: string;

  constructor(private route: Router, private userSV: UserService) {
    super();
  }

  ngOnInit() {
  }

  signUp() {
    this.route.navigate(['/login/signup']);
  }

  login() {

    const user = {UserName: this.uUsername, Password: this.uPassword};

    this.userSV.login(user).subscribe(res => {
      if (res && res.Token) {
        localStorage.setItem('Token', res.Token);
        localStorage.setItem('UserInfo', res.UserInfo);

        this.route.navigate(['/client/main']);
      }
    });

  }
}
