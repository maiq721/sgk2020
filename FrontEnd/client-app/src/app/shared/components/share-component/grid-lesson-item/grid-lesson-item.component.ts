import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-lesson-item',
  templateUrl: './grid-lesson-item.component.html',
  styleUrls: ['./grid-lesson-item.component.scss']
})
export class GridLessonItemComponent implements OnInit {

  @Input() lessonItem: any;
  
  constructor() { }

  ngOnInit() {
  }

}
