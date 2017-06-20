import { Component } from '@angular/core';
import * as $ from 'jquery';

import { GlobalState } from './global.state';

@Component({
  selector: 'nile-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
/* TODO: Component with merge the baTheme(preloaders) and the pages */
export class AppComponent {

  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState) {

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });

  }
}
