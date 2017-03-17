import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../../global.state';

import 'style-loader!./content-top.component.scss';

@Component({
  selector: 'content-top',
  templateUrl: 'content-top.component.html'
})

export class ContentTopComponent {

  //for breadcrumbs
  public activePageTitle:string = '';

  constructor(private _state:GlobalState) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        this.activePageTitle = activeLink.title;
      }
    });
  }

}
