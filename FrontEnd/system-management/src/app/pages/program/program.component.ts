import { Program } from './../../model/program';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  dataSource: any;
  popupVisible: boolean = false;
  program: any;
  formMode = 1;
  
  popupDeleteVisible: boolean = false;
  constructor() { }

  ngOnInit() {
    this.dataSource = [
      {
        ProgramName: "Chương rình tiểu học",
        Action: ""
      }
    ]
  }

  showPpopupAdd(){
    this.program = new Program();
    this.formMode = 1;
    this.popupVisible = true;
  }

  showPopupEdit(e){
    this.program = e;
    this.formMode = 2;
    this.popupVisible = true;
  }

  showPopupDelete(e){
    this.program = e;
    this.popupDeleteVisible = true;
  }

  saveData(){
    this.popupVisible = false;
  }

  deleteData(){
    this.popupDeleteVisible = false;
  }

}
