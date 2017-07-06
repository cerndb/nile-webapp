import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule,SharedModule } from 'primeng/primeng';

import { ElementsModule } from '../../theme/theme.module';
import { FormsModule } from '@angular/forms';

import { ClusterComponent } from './cluster.component';
import { ClusterTableComponent } from './cluster-table/cluster-table.component';
import { ClusterTableService } from './cluster-table/cluster-table.service';
import { ClusterDialogComponent } from './cluster-dialog/cluster-dialog.component';

import { ClustersService } from '../../api/api/clusters.service';
import { ApiModule }  from '../../api/api.module';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ClusterTablePrimeComponent } from './cluster-table-prime/cluster-table-prime.component';

import { ClusterWizardComponent } from './cluster-wizard/cluster-wizard.component';
import { ClusterWizardInfoComponent } from './cluster-wizard/cluster-wizard-info/cluster-wizard-info.component';
import { ClusterWizardSizeComponent } from './cluster-wizard/cluster-wizard-size/cluster-wizard-size.component';
import { ClusterWizardAttributesComponent } from './cluster-wizard/cluster-wizard-attributes/cluster-wizard-attributes.component';
import { ClusterWizardModule } from './cluster-wizard/cluster-wizard.module';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    FormsModule,
    ElementsModule,
    ClusterWizardModule,
    ApiModule,
    DataTableModule,
    SharedModule,
    PaginationModule.forRoot()
  ],
  declarations: [
    ClusterTableComponent,
    ClusterComponent,
    ClusterDialogComponent,
    ClusterTablePrimeComponent
  ],
  providers: [
    ClusterTableService,
    ClustersService
  ]
})

export class ClusterModule { }

