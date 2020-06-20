import { ProgramService } from './../../service/program.service';
import { Program } from './../../model/program';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit, OnDestroy {
  dataSource: any;
  popupVisible: boolean = false;
  program: any;
  formMode = 1;
  unSubscribe = new Subject<void>();
  popupDeleteVisible: boolean = false;
  constructor(
    private programSV: ProgramService
  ) { }

  ngOnInit() {
    this.dataSource = []
    this.loadData();
  }

  ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }

  loadData(){
    this.programSV.getallData().pipe(takeUntil(this.unSubscribe)).subscribe(res => {
      if(res && res.Success){
        const dataRes = res.Data;
        this.dataSource = dataRes["Result"];
      }
    });
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
