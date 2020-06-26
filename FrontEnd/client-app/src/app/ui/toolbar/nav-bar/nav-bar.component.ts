import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menuItems = [{
    text: 'Trang cá nhân',
    icon: 'user'
  }, {
    text: 'Đăng xuất',
    icon: 'runner',
    onClick: () => {
      this.authService.logOut();
    }
  }];

  userName: string;

  tabActive: number;

  menuMode = 'context';
  constructor(private authService: AuthService, private route: Router) {
    route.events.subscribe((event) => {
      this.getActiveTab();
    });
  }

  ngOnInit() {

    const user = this.authService.getUserInfo();
    this.userName = user.FullName ? user.FullName : "undefined";
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
      this.route.navigate(['/client/main']);
    } else {
      this.route.navigate([link]);
    }
    // this.getActiveTab();
  }

}
