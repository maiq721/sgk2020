import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child1-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  showHint = false;

  constructor() { }

  ngOnInit() {
  }

  next() {
    const r = localStorage.getItem('LastestClientRoute');
    const route = r ? r : '/elearning/client/subject/1';
    // xong task 
    const lessonStr = localStorage.getItem('LastestLessonStatus');

    if (lessonStr) {
      const lesson = JSON.parse(lessonStr);
      lesson.IsChange = 1;
      lesson.Status = 3;
      localStorage.setItem('LastestLessonStatus', JSON.stringify(lesson));
    }


    window.open(route, '_self');
  }
}
