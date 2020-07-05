import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services';
import { Router, ActivatedRoute } from '@angular/router';
import { TransferDataService } from 'src/app/service/common/transfer-data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menuItems = [{
    text: 'Trang cá nhân',
    icon: 'user',
    onClick: () => {
      this.transfer.showWarningToast("Chức năng đang thi công!");
    }
  }, {
    text: 'Đăng xuất',
    icon: 'runner',
    onClick: () => {
      this.authService.logOut();
    }
  }];

  showMyTask = false;

  showMyClass = false;

  userName: string;

  tabActive: number;

  menuMode = 'context';
  constructor(private authService: AuthService, private route: Router, private transfer: TransferDataService) {
    route.events.subscribe((event) => {
      this.getActiveTab();
    });
  }

  ngOnInit() {
    const user = this.authService.getUserInfo();
    this.userName = user.FullName ? user.FullName : "undefined";
    if (user.RoleCode && user.RoleCode === 'Student') {
      this.showMyClass = false;
      this.showMyTask = true;
    } else if (user.RoleCode && user.RoleCode === 'Teacher') {
      this.showMyClass = true;
      this.showMyTask = false;
    }
  }
  getActiveTab() {
    if (location.pathname.includes("mytask")) {
      this.tabActive = 2;

    } else if (location.pathname.includes("myclass")) {
      this.tabActive = 3;

    } else {
      this.tabActive = 1;

    }

  }

  changeOptionContext() {
    if (this.menuMode === 'context') {
      this.menuMode = 'list';
    } else {
      this.menuMode = 'context';
    }
  }

  navigate(link) {
    if (!link) {
      this.route.navigate(['/elearning/client/main']);
    } else {
      this.route.navigate([link]);
    }
    // this.getActiveTab();
  }

}
