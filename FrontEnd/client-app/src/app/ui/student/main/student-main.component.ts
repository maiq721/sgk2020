import { Component, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/shared/services/client/client.service';
import { BaseComponent } from 'src/app/base/base-component/base-component.component';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services';

/**
 * Màn hình tổng quan đối với view học sinh
 *
 * @export
 * @class StudentMainComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.scss']
})

export class StudentMainComponent extends BaseComponent implements OnInit {


  /**
   * ds môn học theo lớp học của ct
   *
   * @memberof StudentMainComponent
   */
  listClassAndSubject = [];

  constructor(private route: Router, private clientSV: ClientService, private authSV: AuthService) {
    super();
  }

  ngOnInit() {

    const user = this.authSV.getUserInfo();

    this.clientSV.getByUserID(user.ProgramID, user.UserID).pipe(takeUntil(this._onDestroySub)).subscribe(res => {
      if (res && res.Success && res.Data && res.Data.length > 0) {
        this.handleData(res.Data);
      }
    })

  }

  handleData(data) {
    const lstClass = [];
    data.forEach(le => {

      const existClass = lstClass.find(e => e.ID === le.ClassID);

      if (existClass) {

        if (existClass.ListSubject.findIndex(s => s.ID === le.ID) === -1) {
          existClass.ListSubject.push(le);
        }

      } else {
        const c = {
          'ID': le.ClassID, 'ClassName': le.ClassName, 'ListSubject': [le]
        };
        lstClass.push(c);
      }
    });

    this.listClassAndSubject = lstClass;
  }


  clickItem(e, subject) {
    this.route.navigate([`/elearning/client/subject/${subject.ID}`]);
  }
}
