import {Component} from '@angular/core';

import 'style-loader!./PageTop.component.scss';

@Component({
  selector: 'page-top',
  templateUrl: 'PageTop.component.html',
})
export class PageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  // constructor(private _state:GlobalState) {
  //   this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
  //     this.isMenuCollapsed = isCollapsed;
  //   });
  // }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
//    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
