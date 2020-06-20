import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/model/subject';
import { SubjectService } from 'src/app/service/subject.service';
import { ClassService } from 'src/app/service/class.service';
import { takeUntil } from 'rxjs/operators';

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

  unSubscribe : any

  constructor(
    private subjectSV: SubjectService,
    private classSV: ClassService,
  ) { }

  ngOnInit() {
    this.loadData();
    this.loadClasslist();
  }

  loadData(){
    this.subjectSV.getAllData().subscribe(res => {
      if(res && res.Success){
        const dataRes = res.Data;
        this.dataSource = dataRes["Result"];
      }
    });
  }

  loadClasslist(){
    this.classSV.getClass().subscribe(res => {
      if(res && res.Success){
        const dataRes = res.Data;
        this.listClass = dataRes["Result"];
      }
    });
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
