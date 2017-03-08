/**
 * Created by adediosf on 17/02/17.
 */
import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { MENU } from '../app.menu';

import {MenuService} from "../theme/elements/SideBar/Menu";

@Component({
  selector: 'pages',
  styles: [],
  template:`
      <side-bar></side-bar>
      <page-top></page-top>
      <div class="al-main">
        <div class="al-content">
            <content-top></content-top>
          <router-outlet></router-outlet>
        </div>
       </div>
    `

})

export class Pages {

  constructor(private _menuService: MenuService) {
  }

  /**
   * In order to update the side-bar menu with the pages.menu constant.
   */
  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>MENU);
  }
}
