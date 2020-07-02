import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from 'src/app/base/base-component/base-component.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-my-class',
  templateUrl: './my-class.component.html',
  styleUrls: ['./my-class.component.scss']
})
export class MyClassComponent extends BaseComponent implements OnInit {

  currentTab = 2;

  listUserManage = [];

  constructor(private location: Location, private router: Router) { super(); }

  ngOnInit() {
  }

  back() {
    if (window.history.length > 1) {
      this.location.back()
    } else {
      this.router.navigate(['/elearning/client/main'])
    }
  }


}
