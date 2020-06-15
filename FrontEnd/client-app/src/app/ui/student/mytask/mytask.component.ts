import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.scss']
})
export class MytaskComponent implements OnInit {

  activeTab: number;
  constructor() { }

  ngOnInit() {
    this.activeTab = 1;
  }

  switchTab(tab){
    this.activeTab = tab;
  }
}
