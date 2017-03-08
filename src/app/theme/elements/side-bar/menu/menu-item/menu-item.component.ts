import {Component, Input, Output, EventEmitter} from '@angular/core';

import 'style-loader!./menu-item.component.scss';

@Component({
  selector: 'menu-item',
  templateUrl: 'menu-item.component.html'
})

export class MenuItemComponent  {

  @Input() menuItem:any;
  @Input() child:boolean = false;
  @Output() itemHover = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();


  constructor() { }

  public onHoverItem($event):void {
    this.itemHover.emit($event);
  }

  public onToggleSubMenu($event, item):boolean {
    $event.item = item;
    this.toggleSubMenu.emit($event);
    return false;
  }

}
