import {Component, ContentChild, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
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

  @ViewChild('title')
  private title: ElementRef;

  // Use to disabled HTML tags
  public create: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  createCluster() {
    console.log('save create cluster clicked!');
    this.modal.hide();
  }

  public fillData(data): void {
    this.create = false;
    this.title.nativeElement.textContent = 'Edit Cluster';
    console.log(data);
    this.clusterForm.form.patchValue(
      {
        name: data.name,
        superuser: data.superuser,
        description: data.description,
        egroup: data.egroup,
        type: data.type,
        retention: data.log_retention_hours,
        replication: data.replication_factor,
        partitions: data.partitions_number
      });
    this.modal.show();
  }

   public show(): void {
    this.modal.show();
  }

}
