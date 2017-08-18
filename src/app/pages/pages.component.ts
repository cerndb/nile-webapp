/**
 * Created by adediosf on 17/02/17.
 */
import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { MENU } from '../app.menu';

import { MenuService } from '../theme/components/baMenu';

@Component({
  selector: 'nile-pages',
  styles: [],
  template: `
    <nile-cern-toolbar></nile-cern-toolbar>
    <ba-sidebar></ba-sidebar>
    <ba-page-top [isToolMenuVisible]="true" [isProjectMenuVisible]="true"></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
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
