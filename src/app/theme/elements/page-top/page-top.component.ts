import { Component, Input } from '@angular/core';
import { GlobalState } from '../../../global.state';

import 'style-loader!./page-top.component.scss';

@Component({
  selector: 'nile-page-top',
  templateUrl: 'page-top.component.html',
})

export class PageTopComponent {

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;

  @Input()
  public isToolMenuVisible: boolean;
  @Input()
  public isProjectMenuVisible: boolean;

  constructor(private _state: GlobalState) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

}
