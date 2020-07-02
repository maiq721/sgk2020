import { Component, OnInit } from '@angular/core';
import { BasePopupComponent } from 'src/app/base/base-popup/base-popup.component';

@Component({
  selector: 'app-popup-view-lesson',
  templateUrl: './popup-view-lesson.component.html',
  styleUrls: ['./popup-view-lesson.component.scss']
})
export class PopupViewLessonComponent extends BasePopupComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
