import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { AuthService, AppInfoService } from '../../services';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxCheckBoxModule } from 'devextreme-angular/ui/check-box';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxValidatorModule } from 'devextreme-angular/ui/validator';
import { DxValidationGroupModule } from 'devextreme-angular/ui/validation-group';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  uUsername: string;
  uPassword: string;

  constructor(private route: Router, public appInfo: AppInfoService, private userSV: UserService,
    private authService: AuthService) { }

  onLoginClick(args) {
    if (!args.validationGroup.validate().isValid) {
      return;
    }

    //this.authService.logIn(this.login, this.password);

    args.validationGroup.reset();
  }

  login() {

    const user = {UserName: this.uUsername, Password: this.uPassword};

    this.userSV.login(user).subscribe(res => {
      if (res && res.Token) {
        localStorage.setItem('Token', res.Token);
        localStorage.setItem('UserInfo', JSON.stringify(res.UserInfo));

        this.route.navigate(['/home']);
        this.authService.logIn(this.uUsername, this.uPassword);
      }
    });

  }
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxValidationGroupModule
  ],
  declarations: [ LoginFormComponent ],
  exports: [ LoginFormComponent ]
})
export class LoginFormModule { }
