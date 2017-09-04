import { Component } from '@angular/core';
import * as $ from 'jquery';

import { GlobalState } from './global.state';
import { BaThemeConfig } from './theme/theme.config';


@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  template: `
    <main [class.menu-collapsed]="isMenuCollapsed">
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `
})
/* TODO: Component with merge the baTheme(preloaders) and the pages */
export class App {

  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState,
              private themeConfig: BaThemeConfig) {

    themeConfig.config();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });

  }
}
