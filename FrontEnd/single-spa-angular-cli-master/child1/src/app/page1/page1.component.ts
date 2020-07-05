import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'child1-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  showHint = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.router.navigate(['/child1/page2'])
  }
}
