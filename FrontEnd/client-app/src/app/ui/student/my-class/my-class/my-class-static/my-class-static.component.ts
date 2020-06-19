import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { BaseComponent } from 'src/app/base/base-component/base-component.component';

@Component({
  selector: 'app-my-class-static',
  templateUrl: './my-class-static.component.html',
  styleUrls: ['./my-class-static.component.scss']
})
export class MyClassStaticComponent extends BaseComponent implements OnInit {

  listUserStatic = [];
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  clearFilter() {
    this.dataGrid.instance.clearFilter();
  }
}
