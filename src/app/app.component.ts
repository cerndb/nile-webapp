import { Component } from '@angular/core';

import { GlobalState } from './global.state';

import 'style-loader!./app.scss';
import 'style-loader!./theme/initial.scss';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
/* TODO: Component with merge the baTheme(preloaders) and the pages */
export class App {

  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState) {

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });

  }
}
