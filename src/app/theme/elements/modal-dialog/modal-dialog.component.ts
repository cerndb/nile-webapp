import { Component } from '@angular/core';

import 'style-loader!./modal-dialog.component.scss';

@Component({
  selector: 'nile-modal-dialog',
  templateUrl: './modal-dialog.component.html'
})

export class ModalDialogComponent  {

  public visible = false;
  public visibleAnimate = false;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 600);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}
