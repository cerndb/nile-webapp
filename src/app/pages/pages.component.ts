/**
 * Created by adediosf on 17/02/17.
 */
import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { MENU } from '../app.menu';

import { MenuService } from '../theme/elements/side-bar/menu';

@Component({
  selector: 'nile-pages',
  styles: [],
  template: `
    <nile-cern-toolbar></nile-cern-toolbar>
    <nile-side-bar></nile-side-bar>
    <nile-page-top [isToolMenuVisible]="true" [isProjectMenuVisible]="true"></nile-page-top>
    <div class="al-main">
      <div class="al-content">
        <nile-content-top></nile-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
  `

})

export class PagesComponent implements OnInit {

  constructor(private _menuService: MenuService) {
  }

  /**
   * In order to update the side-bar menu with the pages.menu constant.
   */
  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>MENU);
  }
}
