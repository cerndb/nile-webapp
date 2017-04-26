import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDialogComponent } from '../../../theme/elements/modal-dialog';
import { NgForm } from '@angular/forms';

import 'style-loader!./cluster-dialog.component.scss';

@Component({
  selector: 'nile-cluster-dialog',
  templateUrl: './cluster-dialog.component.html'
})
export class ClusterDialogComponent implements OnInit {

  @ViewChild(ModalDialogComponent)
  public readonly modal: ModalDialogComponent;

  @ViewChild('clusterform')
  private clusterForm: NgForm;

  // Use to disabled HTML tags
  public create: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  createCluster() {
    console.log('save create cluster clicked!');
  }

  public fillData(data): void {
    this.create = false;
    console.log(data);
    console.log(data.type);
    this.clusterForm.form.patchValue(
      {
        name: data.name,
        username: data.userName,
        description: data.description,
        egroup: data.egroup,
        type: data.type
      });
    this.modal.show();
  }

   public show(): void {
    this.modal.show();
  }

}
