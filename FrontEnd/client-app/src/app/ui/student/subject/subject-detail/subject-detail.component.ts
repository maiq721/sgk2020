import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/base/base-component/base-component.component';
import { ClientService } from 'src/app/shared/services/client/client.service';
import { takeUntil } from 'rxjs/operators';
import { TransferDataService } from 'src/app/service/common/transfer-data.service';
import { AuthService } from 'src/app/shared/services';
import { User } from 'src/app/shared/model/User';
import { UserLesson } from 'src/app/shared/model/User_Lesson';
import { FormMode } from 'src/app/base/base-enum/form-mode.enum';
@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.scss']
})
export class SubjectDetailComponent extends BaseComponent implements OnInit {

  currentSubjectID: number;

  listTopicAndLesson = [];

  listRawDataTopicAndLesson = [];

  currentTopic: any;

  currentUser = new User();

  constructor(private location: Location, private router: Router, private routeActivated: ActivatedRoute, private transferSV: TransferDataService
    , private clientSV: ClientService, private authSV: AuthService) {
    super();
  }


  ngOnInit() {

    this.currentUser = this.authSV.getUserInfo();

    this.currentSubjectID = this.routeActivated.snapshot.params.subjectID;

    this.clientSV.getBySubjectID(this.currentSubjectID, this.currentUser.UserID).pipe(takeUntil(this._onDestroySub)).subscribe(res => {
      if (res && res.Success && res.Data && res.Data.length > 0) {
        this.listRawDataTopicAndLesson = res.Data;
        this.upDateLesson();
        this.handleData(this.listRawDataTopicAndLesson);

      }
    });

  }

  /**
   * xử lý data trả về
   *
   * @param {*} data
   * @memberof SubjectDetailComponent
   */
  handleData(data) {
    const lstTopic = [];
    data.forEach(le => {

      const existTopic = lstTopic.find(e => e.TopicID === le.TopicID);

      if (existTopic) {

        if (existTopic.ListLeson.findIndex(s => s.ID === le.ID) === -1) {
          existTopic.ListLeson.push(le);
        }

      } else {
        const c = {
          'TopicID': le.TopicID, 'TopicName': le.TopicName, 'ListLeson': [le]
        };
        lstTopic.push(c);
      }
    });

    this.listTopicAndLesson = lstTopic;

    this.currentTopic = lstTopic[0];
  }

  /**
   * xử lý update trạng thái bài học vừa học
   *
   * @memberof SubjectDetailComponent
   */
  upDateLesson() {
    const lessonStr = localStorage.getItem('LastestLessonStatus');

    if (lessonStr) {
      // trạng thái bài học học từ trang khác
      const lesson = JSON.parse(lessonStr);

      const item = this.listRawDataTopicAndLesson.find(le => le.ID === +lesson.LessonID);
      if (item && +lesson.IsChange && item.LessonStatus !== lesson.Status) {
        // nếu có id thì update, không thì là thêm mới
        if (item.UserLessonID) {
          // trạng thái hiện tại là ht thì thôi
          if (item.LessonStatus !== 3) {
            item.LessonStatus = lesson.Status;

            const obj = { Status: item.LessonStatus };

            this.clientSV.updateLessonStatus(+item.UserLessonID, obj, this.currentUser.UserID).pipe(takeUntil(this._onDestroySub)).subscribe(res => {
              if (res && res.Success) {
                localStorage.removeItem('LastestLessonStatus');
                // trạng thái ht mới 
                if (lesson.Status === 3)
                  this.transferSV.showSuccessToast("Chúc mừng! Bạn đã hoàn thành 1 bài học!");
              }
            });
          }
        } else {
          item.LessonStatus = lesson.Status;
          // thêm user-lesson
          const userLesson = new UserLesson();
          userLesson.UserID = this.currentUser.UserID;
          userLesson.UserName = this.currentUser.UserName;
          userLesson.LessonID = item.ID;
          userLesson.LessonName = item.LessonName;
          userLesson.LessonStatus = lesson.Status;
          userLesson.State = FormMode.Insert;
          this.clientSV.addUserLesson(userLesson).pipe(takeUntil(this._onDestroySub)).subscribe(res => {
            if (res && res.Success) {
              localStorage.removeItem('LastestLessonStatus');
              if (lesson.Status === 3)
                this.transferSV.showSuccessToast("Chúc mừng! Bạn đã hoàn thành 1 bài học!");
            }
          });
        }
      }
    }
  }

  /**
   * đổi chủ đề
   *
   * @param {*} topic
   * @memberof SubjectDetailComponent
   */
  switchTopic(topic) {
    this.currentTopic = topic;
  }

  back() {

    // if (window.history.length > 1) {
    //   this.location.back()
    // } else {
    this.router.navigate(['/elearning/client/main']);
    // }
  }
}
