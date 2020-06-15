import { Component, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { Router } from '@angular/router';

/**
 * Màn hình tổng quan đối với view học sinh
 *
 * @export
 * @class StudentMainComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.scss']
})

export class StudentMainComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit() {
  }

  clickItem(e){
    this.route.navigate(['student/subject/1']);
  }
}
