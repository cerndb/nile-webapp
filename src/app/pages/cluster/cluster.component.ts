import { Component, ViewChild } from '@angular/core';
import { ModalDialogComponent } from '../../theme/elements/modal-dialog';
import {ClusterDialogComponent} from './cluster-dialog/cluster-dialog.component';


@Component({
  selector: 'nile-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.scss'],

})

export class ClusterComponent  {

  @ViewChild(ClusterDialogComponent)
  public readonly dialog: ClusterDialogComponent;

  constructor() { }


}
