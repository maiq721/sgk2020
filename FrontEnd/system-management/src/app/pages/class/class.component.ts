import { ClassService } from './../../service/class.service';
import { Class } from './../../model/class';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProgramService } from 'src/app/service/program.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit, OnDestroy {

  dataSource: any;
  priority: any[];
  popupVisible: boolean = false;
  class: any;
  formMode = 1;
  popupDeleteVisible: boolean = false;
  listProgram :any;

  unSubscribe = new Subject<void>();

  constructor(
    private classSV: ClassService,
    private programSV: ProgramService
  ) {
    
  }

  ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
  ngOnInit(){
    this.loadData();
    this.loadProgram();
  }

  loadData(){
    this.classSV.getClass().pipe(takeUntil(this.unSubscribe)).subscribe(res => {
      if(res && res.Success){
        const dataRes = res.Data;
        this.dataSource = dataRes["Result"];
      }
    });
  }

  loadProgram(){
    this.programSV.getallData().pipe(takeUntil(this.unSubscribe)).subscribe(res => {
      if(res && res.Success){
        const dataRes = res.Data;
        this.listProgram = dataRes["Result"];
      }
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
    if(this.class.ClassName.trim()){
      this.popupVisible = false;
      this.class.State = this.formMode == 1 ? 1 : 2;
      this.class.ClassType = 1;
      this.classSV.save(this.class).subscribe(res => {
        if(res.Success){
          this.loadData();
        }
      });
    }
  }

  deleteData(){
    this.popupDeleteVisible = false;
    this.classSV.delete(this.class.ID).subscribe(res => {
      if(res.Success){
        this.loadData();
      }
    });
  }

}
