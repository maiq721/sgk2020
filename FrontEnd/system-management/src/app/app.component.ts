import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import notify from 'devextreme/ui/notify';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) { }

  isAutorized() {
    var user = this.authService.getUserInfo();
    if(user){
      if(this.authService.isLoggedIn && user.RoleCode === "Admin"){
        return true;
      }else{
        return false;
      }
    }
    return false;
    
  }

  // thông báo
}
