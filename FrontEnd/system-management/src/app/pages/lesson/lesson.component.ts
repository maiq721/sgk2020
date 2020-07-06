import { LessonService } from './../../service/lesson.service';
import { TopicService } from './../../service/topic.service';
import { Lesson } from './../../model/lesson';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ProgramService } from 'src/app/service/program.service';

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
  listProgram :any;

  listImageLineLesson=["/assets/image/teacher-f8a276794127655b137d04b03550d2c5.svg",
  "/assets/image/teacher-f8a276794127655b137d04b03550d2c5.svg"
  ];
  constructor(
    private topicsv: TopicService,
    private lessonSv: LessonService,
    private programSV: ProgramService
  ) { }

  ngOnInit() {
    this.loadData();
    this.loadListTopic();
  }

  loadData(){
    this.lessonSv.getAllData().subscribe(res => {
      if(res && res.Success){
        this.dataSource = res.Data;
      }
    });
  }

  loadListTopic(){
    this.topicsv.getAllData().subscribe(res => {
      if(res && res.Success){
        this.listTopic = res.Data;
      }
    });
  }

  loadProgram(){
    this.programSV.getallData().subscribe(res => {
      if(res && res.Success){
        this.listProgram = res.Data;
      }
    });
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
    if(this.formMode === 1){
      this.lesson.Image = Math.floor(Math.random() * 2);
    }
    this.lesson.TopicName = this.listTopic.filter(x => x.ID === this.lesson.TopicID)[0].TopicName;
    if(this.lesson.LessonName.trim()){
      this.popupVisible = false;
      this.lesson.State = this.formMode == 1 ? 1 : 2;
      this.lessonSv.save(this.lesson).subscribe(res => {
        if(res.Success){
          this.loadData();
        }
      });
    }
  }

  deleteData(){
    this.popupDeleteVisible = false;
    this.lessonSv.delete(this.lesson.ID).subscribe(res => {
      if(res.Success){
        this.loadData();
      }
    });
  }

}
