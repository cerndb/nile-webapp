import { Component, ViewChild, ElementRef } from '@angular/core';
import { ClusterEntity } from '../../../api/model/clusterEntity';
import { ModalDialogComponent}  from '../../../theme/elements/modal-dialog/modal-dialog.component';
import { ClusterWizardInfoComponent } from './cluster-wizard-info/cluster-wizard-info.component';
import { ClusterWizardSizeComponent } from './cluster-wizard-size/cluster-wizard-size.component';
import { ClusterWizardAttributesComponent } from './cluster-wizard-attributes/cluster-wizard-attributes.component';

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

  @ViewChild(ClusterWizardSizeComponent)
  private sizeComponent: ClusterWizardSizeComponent;

  @ViewChild(ClusterWizardAttributesComponent)
  private attributesComponent: ClusterWizardAttributesComponent;

  @ViewChild('title')
  private title: ElementRef;


  constructor() {
  }


  createOrSaveCluster(): void {
    //create or edit the cluster
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
    this.sizeComponent.create = false;

    this.title.nativeElement.textContent = 'Edit Cluster';
    console.log(data);

    this.infoComponent.infoForm.form.patchValue(
      {
        name: data.name,
        superuser: data.username,
        description: data.description,
        category: data.class,
        type: data.type,
      });

    this.sizeComponent.sizeForm.form.patchValue(
      {
      }
    );
    this.modal.show();
  }

  public show(): void {
    this.modal.show();
  }
}
