import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import { ClusterEntity } from '../../../api/model/clusterEntity';
import { ModalDialogComponent}  from '../../../theme/elements/modal-dialog/modal-dialog.component';
import { ClusterWizardInfoComponent } from './cluster-wizard-info/cluster-wizard-info.component';
import { ClusterWizardTypeComponent } from './cluster-wizard-type/cluster-wizard-type.component';
import { ClusterWizardAttributesComponent } from './cluster-wizard-attributes/cluster-wizard-attributes.component';
import {ClusterWizardMenuComponent} from "./cluster-wizard-menu/cluster-wizard-menu.component";

@Component({
  selector: 'nile-cluster-wizard',
  templateUrl: './cluster-wizard.component.html',
  styleUrls: ['./cluster-wizard.component.scss']
})
export class ClusterWizardComponent {

  @ViewChild(ModalDialogComponent)
  public readonly modal: ModalDialogComponent;

  @ViewChild(ClusterWizardInfoComponent)
  private infoComponent: ClusterWizardInfoComponent;

  @ViewChild(ClusterWizardTypeComponent)
  private typeComponent: ClusterWizardTypeComponent;

  @ViewChild(ClusterWizardAttributesComponent)
  private attributesComponent: ClusterWizardAttributesComponent;

  @ViewChild('title')
  private title: ElementRef;

  @ViewChild(ClusterWizardMenuComponent)
  private menuComponent: ClusterWizardMenuComponent;

  constructor() {
  }

  isValidForm(): boolean {
    return this.infoComponent.infoForm.valid || !this.infoComponent.create;
  }


  createOrSaveCluster(): void {
    //create or edit the cluster
    console.log(this.infoComponent.infoForm.form.value);
    if(this.infoComponent.create){
      console.log('created cluster');
    }
    else {
      console.log('edit cluster');

    }
    this.modal.hide();
  }

  public fillData(data:ClusterEntity): void {
    this.infoComponent.create = false;
    this.typeComponent.create = false;
    this.attributesComponent.create = false;

    this.title.nativeElement.textContent = 'Edit Cluster';
    console.log(data);

    this.infoComponent.infoForm.form.patchValue(
      {
        name: data.name,
        superuser: data.username,
        description: data.description,
        category: data.class,
      });

    this.typeComponent.typeForm.form.patchValue(
      {
        type: data.type,
      }
    );
    this.show();
  }

  public resetForm(): void {
    //to be called when create cluster has been clicked
    this.infoComponent.infoForm.form.reset();
    this.typeComponent.typeForm.form.reset();
    this.attributesComponent.resetDefaultValues();
  }

  public show(): void {
    //in case there was something written before
    if(this.infoComponent.create) {
      this.resetForm();
    }
    this.menuComponent.selectFirstTab();
    this.modal.show();
  }

  public validate(): boolean {
    //num.partitions and replication factor < number of brokers
    //name is zk or kafka and alphanumeric
    //valid inputs:numbers or texts?

    return true;
  }
}
