/**
 * Created by adediosf on 17/02/17.
 */
import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { PAGES_MENU } from './pages.menu';

import { BaMenuService } from '../theme';

@Component({
  selector: 'itdb-pages',
  styles: [],
  template: `
    <itdb-cern-toolbar></itdb-cern-toolbar>
    <ba-page-top [isToolMenuVisible]="true" [isProjectMenuVisible]="true"></ba-page-top>
    <ba-sidebar></ba-sidebar>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
  `

})

export class PagesComponent implements OnInit {

  constructor(private _menuService: BaMenuService) {
  }

  /**
   * In order to update the side-bar menu with the pages.menu constant.
   */
  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
