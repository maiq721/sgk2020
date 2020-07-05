import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-lesson-item',
  templateUrl: './grid-lesson-item.component.html',
  styleUrls: ['./grid-lesson-item.component.scss']
})
export class GridLessonItemComponent implements OnInit {

  visible = false;
  @Input() lessonItem: any;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateLesson() {
    localStorage.setItem('LastestClientRoute', window.location.pathname);
    localStorage.setItem('LastestLessonStatus', `{"LessonID":${this.lessonItem.ID}, "Status":${this.lessonItem.LessonStatus ? this.lessonItem.LessonStatus : 0}, "IsChange": 0}`);
    window.open(this.lessonItem.LinkURL, '_self');
  }
}
