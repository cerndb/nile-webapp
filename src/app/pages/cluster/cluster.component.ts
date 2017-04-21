import { Component, ViewChild } from '@angular/core';
import { ModalDialogComponent } from '../../theme/elements/modal-dialog';

import 'style-loader!./cluster.component.scss';

@Component({
  selector: 'nile-cluster',
  templateUrl: './cluster.component.html'
})

export class ClusterComponent  {

  @ViewChild(ModalDialogComponent)
  public readonly modal: ModalDialogComponent;

  constructor() { }

  createCluster() {
    console.log('create cluster clicked!');
  }
}
