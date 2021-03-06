import { TopicService } from './../../service/topic.service';
import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/model/topic';
import { SubjectService } from 'src/app/service/subject.service';

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
  constructor(
    private subjectSV: SubjectService,
    private topicSv: TopicService
  ) { }

  ngOnInit() {
    this.loadData();
    this.loadSubjectList();
  }
  loadData(){
    this.topicSv.getAllData().subscribe(res => {
      if(res && res.Success){
        this.dataSource = res.Data;
      }
    });
  }

  loadSubjectList(){
    this.subjectSV.getAllData().subscribe(res => {
      if(res && res.Success){
        this.listSubject = res.Data;
      }
    });
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
    if(this.topic.TopicName.trim()){
      this.popupVisible = false;
      this.topic.State = this.formMode == 1 ? 1 : 2;
      this.topicSv.save(this.topic).subscribe(res => {
        if(res.Success){
          this.loadData();
        }
      });
    }
  }

  deleteData(){
    this.popupDeleteVisible = false;
    this.topicSv.delete(this.topic.ID).subscribe(res => {
      if(res.Success){
        this.loadData();
      }
    });
  }


}
