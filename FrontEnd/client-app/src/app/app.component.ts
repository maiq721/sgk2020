import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import notify from 'devextreme/ui/notify';
import { Subscription } from 'rxjs';
import { TransferDataService } from './service/common/transfer-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  // @HostBinding('class') get getClass() {
  //   return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  // }
  toastResultMessage: string;
  toastType: string;
  toastSuccessVisible = false;

  unSubs: Array<Subscription> = [];

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService, private tranferDataSV: TransferDataService) { }


  ngOnInit() {
    const toastSub = this.tranferDataSV.toastObject.subscribe(res => {
      this.toastResultMessage = res.text;
      this.toastType = res.type;
      this.toastSuccessVisible = true;
    });
    this.unSubs.push(toastSub);
  }

  ngOnDestroy(): void {
    this.unSubs.forEach(e => {
      if (e) {
        e.unsubscribe();
      }
    });
  }
  // isAutorized() {
  //   return this.authService.isLoggedIn;
  // }

  // thông báo
}
