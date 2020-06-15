import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * component chứa các item trên view lưới
 *nvcuong
 * @export
 * @class GridItemComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})

export class GridItemComponent implements OnInit {

  // link bấm vào
@Input() linkitem =  "#";
// tên
@Input() title = "Item";
// tiến  độ
@Input() progress = 0;

@Input() doneLesson =  0;

@Input() totalLesson = 0;
// arnhitem, mặc định lầ con khủng long
@Input() customClassImg = "subject-1";

@Output() clickItem = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
