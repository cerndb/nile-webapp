/**
 * Created by adediosf on 17/02/17.
 */
import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { MENU } from '../app.menu';

import {MenuService} from "../theme/elements/side-bar";

@Component({
  selector: 'pages',
  styles: [],
  template:`
      <side-bar></side-bar>
      <menu-bar></menu-bar>
      <router-outlet></router-outlet>
<!--    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <ba-back-top position="200"></ba-back-top>-->
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
