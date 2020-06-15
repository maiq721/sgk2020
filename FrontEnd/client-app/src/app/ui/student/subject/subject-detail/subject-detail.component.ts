import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.scss']
})
export class SubjectDetailComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }
  back(){

    if (window.history.length > 1) {
      this.location.back()
    } else {
      this.router.navigate(['/student/main'])
    }
  }
}
