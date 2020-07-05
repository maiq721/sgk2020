import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/base/base-component/base-component.component';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user/user.service';
import { TransferDataService } from 'src/app/service/common/transfer-data.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent extends BaseComponent implements OnInit {
  uUsername: string;
  uPassword: string;

  constructor(private route: Router, private userSV: UserService, private transferDataSV: TransferDataService) {
    super();
  }

  ngOnInit() {
  }

  signUp() {
    this.route.navigate(['/elearning/login/signup']);
  }

  login() {

    const user = { UserName: this.uUsername, Password: this.uPassword };
    if (!this.uUsername || !this.uPassword) {
      this.transferDataSV.showWarningToast("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
    this.userSV.login(user).pipe(takeUntil(this._onDestroySub)).subscribe(res => {
      if (res && res.Token) {
        localStorage.setItem('Token', res.Token);
        localStorage.setItem('UserInfo', JSON.stringify(res.UserInfo));

        this.route.navigate(['/elearning/client/main']);
      } else {
        this.transferDataSV.showWarningToast("Tên đăng nhập hoặc mật khẩu không đúng!");
      }
    });

  }
}
