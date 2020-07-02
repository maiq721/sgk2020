import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class BaseComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line:variable-name
  public _onDestroySub: Subject<void> = new Subject<void>();
  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this._onDestroySub.next();
    this._onDestroySub.complete();
    this._onDestroySub.unsubscribe();
  }
}
