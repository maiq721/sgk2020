import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/model/topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  dataSource: any;
  priority: any[];
  popupVisible: boolean = false;
  topic: any;
  formMode = 1;
  popupDeleteVisible: boolean = false;
  listSubject :any;
  constructor() { }

  ngOnInit() {
    this.dataSource = [
      {
        TopicName: "Cộng trừ 2 chũ số",
        SubjectName: "Môn Toán",
        SubjectID: 1,
        Action: ""
      },
      {
        TopicName: "Cách đặt câu vói chủ ngữ",
        SubjectName: "Môn Tiếng việt",
        SubjectID: 2,
        Action: ""
      }
    ];
    this.listSubject = [
      {
        SubjectName: "Môn Toán",
        SubjectID: 1
      },
      {
        SubjectName: "Môn Tiếng việt",
        SubjectID: 2
      }
    ]
  }


  showPpopupAdd(){
    this.topic = new Topic();
    this.formMode = 1;
    this.popupVisible = true;
  }

  showPopupEdit(e){
    this.topic = e;
    this.formMode = 2;
    this.popupVisible = true;
  }

  showPopupDelete(e){
    this.topic = e;
    this.popupDeleteVisible = true;
  }

  saveData(){
    this.popupVisible = false;
  }

  deleteData(){
    this.popupDeleteVisible = false;
  }


}
