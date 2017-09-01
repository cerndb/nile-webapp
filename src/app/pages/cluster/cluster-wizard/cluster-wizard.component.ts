import { Component, ViewChild, ElementRef } from '@angular/core';
import { ClusterEntity } from '../../../api/model/clusterEntity';
import { ModalDialogComponent}  from '../../../components/modal-dialog/modal-dialog.component';
import { ClusterWizardInfoComponent } from './cluster-wizard-info/cluster-wizard-info.component';
import { ClusterWizardTypeComponent } from './cluster-wizard-type/cluster-wizard-type.component';
import { ClusterWizardAttributesComponent } from './cluster-wizard-attributes/cluster-wizard-attributes.component';
import { ClusterWizardMenuComponent } from './cluster-wizard-menu/cluster-wizard-menu.component';

@Component({
  selector: 'itdb-cluster-wizard',
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

  @ViewChild('error')
  private error:ElementRef;

  @ViewChild(ClusterWizardMenuComponent)
  private menuComponent: ClusterWizardMenuComponent;

  private errorMessage: string = '';

  constructor() {
  }

  isValidForm(): boolean {
    //For edit form the disabled inputs should not be taken into account since they won't be valid
    if(this.infoComponent.create){
      return this.infoComponent.infoForm.valid
        && this.typeComponent.typeForm.form.valid
        && this.attributesComponent.attributesForm.valid;
    }
    else {
      return this.typeComponent.typeForm.form.valid
        && this.attributesComponent.attributesForm.valid;
    }
  }


  createOrSaveCluster(): void {
    //create or edit the cluster
    console.log(this.infoComponent.infoForm.form.value);
    console.log(this.typeComponent.typeForm.form.value);
    console.log(this.attributesComponent.attributesForm.form.value);

    if(!this.validate()) {
      this.error.nativeElement.textContent = this.errorMessage;
      return;
    }

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
        num_brokers: data.hosts.length,
      }
    );

    this.attributesComponent.attributesForm.form.patchValue(
      {
        zk_chroot: data.attributes.zk_chroot,
        port: data.attributes.port_ssl,
        replication_factor: data.attributes['default.replication.factor'],
        retention: data.attributes['log.retention.hours'],
        partitions: data.attributes['num.partitions'],
      }
    );

    this.show();
  }

  public resetForm(): void {
    //to be called when create cluster button has been clicked
    this.infoComponent.infoForm.reset();
    this.typeComponent.typeForm.reset();
    this.attributesComponent.resetDefaultValues();
  }

  public show(): void {
    //in case there was something written before
    if(this.infoComponent.create) {
      this.resetForm();
    }
    this.menuComponent.selectFirstTab();
    this.errorMessage = '';
    this.modal.show();
  }

  public validate(): boolean {

    if(this.typeComponent.typeForm.form.get('type').value  === 'KAFKA'
      && !this.infoComponent.infoForm.form.get('name').value.startsWith('kafka-')) {
        this.errorMessage = 'Kafka cluster name should start with \'kafka-\'.';
        return false;
    }
    else if(this.typeComponent.typeForm.form.get('type').value  === 'ZOOKEEPER'
      && !this.infoComponent.infoForm.form.get('name').value.startsWith('zk-')) {
      this.errorMessage = 'Zookeeper cluster name should start with \'zk-\'.';
      return false;
    }
    else if(this.attributesComponent.attributesForm.form.get('partitions').value
        > this.typeComponent.typeForm.form.get('num_brokers').value){
      this.errorMessage = 'Number of partitions is bigger than number of brokers.';
        return false;
    }
    else if(this.attributesComponent.attributesForm.form.get('replication_factor').value
              > this.typeComponent.typeForm.form.get('num_brokers').value ){
      this.errorMessage = 'Replication factor is bigger than number of brokers.';

        return false
    }

    return true;
  }
}
