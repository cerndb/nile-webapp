import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'itdb-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})

export class ModalDialogComponent  implements AfterViewInit{

  modalEl = null;

  constructor (private _rootNode: ElementRef) {}

  public show(): void {
    this.modalEl.modal('show');
  }

  public hide(): void {
    this.modalEl.modal('hide');
  }

  ngAfterViewInit() {
    this.modalEl = $(this._rootNode.nativeElement).find('div.modal');
  }
}
