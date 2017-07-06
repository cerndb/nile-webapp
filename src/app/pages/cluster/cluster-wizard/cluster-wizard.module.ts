/**
 * Created by adediosf on 04/07/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }      from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { ClusterWizardInfoComponent } from './cluster-wizard-info/cluster-wizard-info.component';
import { ClusterWizardSizeComponent } from './cluster-wizard-size/cluster-wizard-size.component';
import { ClusterWizardAttributesComponent } from './cluster-wizard-attributes/cluster-wizard-attributes.component';
import { ClusterWizardMenuComponent } from './cluster-wizard-menu/cluster-wizard-menu.component';
import { ClusterWizardComponent } from './cluster-wizard.component';
import { ElementsModule } from '../../../theme/theme.module';
import { ClusterWizardMenuTabComponent } from './cluster-wizard-menu/cluster-wizard-menu-tab/cluster-wizard-menu-tab.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ElementsModule
  ],
  declarations: [
    ClusterWizardComponent,
    ClusterWizardInfoComponent,
    ClusterWizardSizeComponent,
    ClusterWizardAttributesComponent,
    ClusterWizardMenuComponent,
    ClusterWizardMenuTabComponent
  ],
  providers: [
  ],
  exports: [ ClusterWizardComponent ],
})

export class ClusterWizardModule { }
