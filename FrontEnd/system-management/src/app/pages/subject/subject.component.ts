import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/model/subject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  dataSource: any;
  priority: any[];
  popupVisible: boolean = false;
  subject: any;
  formMode = 1;
  popupDeleteVisible: boolean = false;
  listClass :any;
  constructor() { }

  ngOnInit() {
    this.dataSource = [
      {
        ClassName: "Lớp 1",
        SubjectName: "Môn Toán",
        ClassID: 1,
        Action: ""
      },
      {
        ClassName: "Lớp 2",
        SubjectName: "Môn Tiếng việt",
        ClassID: 1,
        Action: ""
      }
    ];
    this.listClass = [
      {
        ClassName: "Lớp 1",
        ClassID: 1
      }
    ]
  }


  showPpopupAdd(){
    this.subject = new Subject();
    this.formMode = 1;
    this.popupVisible = true;
  }

  showPopupEdit(e){
    this.subject = e;
    this.formMode = 2;
    this.popupVisible = true;
  }

  showPopupDelete(e){
    this.subject = e;
    this.popupDeleteVisible = true;
  }

  saveData(){
    this.popupVisible = false;
  }

  deleteData(){
    this.popupDeleteVisible = false;
  }

}
