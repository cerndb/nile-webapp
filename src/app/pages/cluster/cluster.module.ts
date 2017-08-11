import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule,SharedModule } from 'primeng/primeng';

import { ElementsModule } from '../../theme/theme.module';

import { ClusterComponent } from './cluster.component';
import { ClusterTableComponent } from './cluster-table/cluster-table.component';
import { ClusterTableService } from './cluster-table/cluster-table.service';

import { ClustersService } from '../../api/api/clusters.service';
import { ApiModule }  from '../../api/api.module';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ClusterTablePrimeComponent } from './cluster-table-prime/cluster-table-prime.component';

import { ClusterWizardModule } from './cluster-wizard/cluster-wizard.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    ElementsModule,
    ComponentsModule,
    ClusterWizardModule,
    ApiModule,
    DataTableModule,
    SharedModule,
    PaginationModule.forRoot()
  ],
  declarations: [
    ClusterTableComponent,
    ClusterComponent,
    ClusterTablePrimeComponent
  ],
  providers: [
    ClusterTableService,
    ClustersService
  ]
})

export class ClusterModule { }

