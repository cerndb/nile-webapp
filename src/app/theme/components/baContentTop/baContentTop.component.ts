import { Component } from '@angular/core';
import { GlobalState } from '../../../global.state';


@Component({
  selector: 'ba-content-top',
  templateUrl: 'baContentTop.html',
  styleUrls: ['./baContentTop.scss']
})

export class BaContentTop {

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
