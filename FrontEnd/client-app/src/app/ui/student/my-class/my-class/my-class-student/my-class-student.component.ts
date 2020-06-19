import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { BaseComponent } from 'src/app/base/base-component/base-component.component';
import { User } from 'src/app/shared/model/User';

@Component({
  selector: 'app-my-class-student',
  templateUrl: './my-class-student.component.html',
  styleUrls: ['./my-class-student.component.scss']
})
export class MyClassStudentComponent extends BaseComponent implements OnInit {

  listUserStatic = [];

  visiblePopupAddUser = false;

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  constructor() {
    super();
  }

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      const u = new User();
      u.OrderNumber = i+1;
      u.UserID =1;
      u.FullName ="Nguyễn Việt Cường";
      u.Email = "nvcuong1@gmail.com";
      u.Status = "Đang hoạt động";
      this.listUserStatic.push(u);
    }
  }

  clearFilter() {
    this.dataGrid.instance.clearFilter();
  }
}
