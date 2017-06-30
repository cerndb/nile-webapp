import {Component, ContentChild, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import { ModalDialogComponent } from '../../../theme/elements/modal-dialog';
import { NgForm } from '@angular/forms';
import { ClusterEntity } from "../../../api/model/clusterEntity";

@Component({
  selector: 'nile-cluster-dialog',
  templateUrl: './cluster-dialog.component.html',
  styleUrls: ['./cluster-dialog.component.scss'],

})
export class ClusterDialogComponent implements OnInit {

  @ViewChild(ModalDialogComponent)
  public readonly modal: ModalDialogComponent;

  @ViewChild('clusterform')
  private clusterForm: NgForm;

  @ViewChild('title')
  private title: ElementRef;

  private readonly categories;

  // Use to disabled HTML tags
  public create: boolean = true;

  constructor() {
    this.categories = Object.keys(ClusterEntity.ModelClassEnum);
  }

  ngOnInit() {
  }

  createCluster() {
    //create or edit the cluster
    if(this.create){
      console.log('created cluster');
    }
    else {
      console.log('edit cluster');
    }
    this.modal.hide();

  }

  public fillData(data:ClusterEntity): void {
    this.create = false;
    this.title.nativeElement.textContent = 'Edit Cluster';
    console.log(data);

    this.clusterForm.form.patchValue(
      {
        name: data.name,
        superuser: data.username,
        description: data.description,
        category: data.class,
        type: data.type,
  //      retention: data.log_retention_hours,
  //      replication: data.replication_factor,
  //      partitions: data.partitions_number
      });
    this.modal.show();
  }

   public show(): void {
    this.modal.show();
  }

}
