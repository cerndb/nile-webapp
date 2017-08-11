import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../../global.state';


@Component({
  selector: 'nile-content-top',
  templateUrl: 'content-top.component.html',
  styleUrls: ['./content-top.component.scss']
})

export class ContentTopComponent {

  //for breadcrumbs
  public activePageTitle: string = '';

  constructor(private _state: GlobalState) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        this.activePageTitle = activeLink.title;
      }
    });
  }

}
