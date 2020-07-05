import { Component } from '@angular/core';

@Component({
  selector: 'child1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child1';

  back(){
    const r = localStorage.getItem('LastestClientRoute');
    const route = r ? r : '/elearning/client/subject/1';
    // chưa xong task 
    const lessonStr = localStorage.getItem('LastestLessonStatus');

    if(lessonStr){
      const lesson = JSON.parse(lessonStr);
      lesson.IsChange = 1;
      lesson.Status = 2;
      localStorage.setItem('LastestLessonStatus', JSON.stringify(lesson));
    }

    window.open(route, '_self');
  }
}
