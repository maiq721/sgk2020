import { ClassService } from './../../service/class.service';
import { Class } from './../../model/class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  dataSource: any;
  priority: any[];
  popupVisible: boolean = false;
  class: any;
  formMode = 1;
  popupDeleteVisible: boolean = false;
  listProgram :any;


  constructor(
    private classSV: ClassService
  ) {
    
  }

  ngOnInit(){
    this.dataSource = [
      {
        ClassName: "Lớp 1",
        ProgramName: "Chuong trình tiểu học",
        ProgramID: 1,
        Action: ""
      },
      {
        ClassName: "Lớp 2",
        ProgramID: 1,
        ProgramName: "Chuong trình tiểu học",
        Action: ""
      },
      {
        ClassName: "Lớp 3",
        ProgramID: 1,
        ProgramName: "Chuong trình tiểu học",
        Action: ""
      },
      {
        ProgramID: 1,
        ClassName: "Lớp 4",
        ProgramName: "Chuong trình tiểu học",
        Action: ""
      },
      {
        ProgramID: 1,
        ClassName: "Lớp 5",
        ProgramName: "Chuong trình tiểu học",
        Action: ""
      }
    ];
    this.listProgram = [
      {
        ProgramName: "Chương trình tiểu học",
        ProgramID: 1
      }
    ];
    this.loadData();
  }

  loadData(){
    this.classSV.getClass().subscribe(res => {
      console.log(res);
    });
  }

  showPpopupAdd(){
    this.class = new Class();
    this.formMode = 1;
    this.popupVisible = true;
  }

  showPopupEdit(e){
    this.class = e;
    this.formMode = 2;
    this.popupVisible = true;
  }

  showPopupDelete(e){
    this.class = e;
    this.popupDeleteVisible = true;
  }

  saveData(){
    this.popupVisible = false;
  }

  deleteData(){
    this.popupDeleteVisible = false;
  }

}
