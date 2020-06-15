import { Lesson } from './../../model/lesson';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  dataSource: any;
  priority: any[];
  popupVisible: boolean = false;
  lesson: any;
  formMode = 1;
  popupDeleteVisible: boolean = false;
  listTopic :any;
  constructor() { }

  ngOnInit() {
    this.dataSource = [
      {
        TopicName: "Cộng trừ 2 chũ số",
        LessonName: "Bài 1",
        TopicID: 1,
        Action: ""
      },
      {
        TopicName: "Cách đặt câu vói chủ ngữ",
        LessonName: "Bài 2",
        TopicID: 2,
        Action: ""
      }
    ];
    this.listTopic = [
      {
        TopicName: "Cộng trừ 2 chũ số",
        TopicID: 1
      },
      {
        TopicName: "Cách đặt câu vói chủ ngữ",
        TopicID: 2
      }
    ]
  }


  showPpopupAdd(){
    this.lesson = new Lesson();
    this.formMode = 1;
    this.popupVisible = true;
  }

  showPopupEdit(e){
    this.lesson = e;
    this.formMode = 2;
    this.popupVisible = true;
  }

  showPopupDelete(e){
    this.lesson = e;
    this.popupDeleteVisible = true;
  }

  saveData(){
    this.popupVisible = false;
  }

  deleteData(){
    this.popupDeleteVisible = false;
  }

}
