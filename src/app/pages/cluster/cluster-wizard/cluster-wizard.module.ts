/**
 * Created by adediosf on 04/07/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }      from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { ClusterWizardInfoComponent } from './cluster-wizard-info/cluster-wizard-info.component';
import { ClusterWizardTypeComponent } from './cluster-wizard-type/cluster-wizard-type.component';
import { ClusterWizardAttributesComponent } from './cluster-wizard-attributes/cluster-wizard-attributes.component';
import { ClusterWizardMenuComponent } from './cluster-wizard-menu/cluster-wizard-menu.component';
import { ClusterWizardComponent } from './cluster-wizard.component';
import { ClusterWizardMenuTabComponent } from './cluster-wizard-menu/cluster-wizard-menu-tab/cluster-wizard-menu-tab.component';
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ComponentsModule
  ],
  declarations: [
    ClusterWizardComponent,
    ClusterWizardInfoComponent,
    ClusterWizardTypeComponent,
    ClusterWizardAttributesComponent,
    ClusterWizardMenuComponent,
    ClusterWizardMenuTabComponent,
  ],
  providers: [
  ],
  exports: [ ClusterWizardComponent ],
})

export class ClusterWizardModule { }
