import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ElementsModule } from '../../theme/theme.module';
import { FormsModule } from '@angular/forms';

import { ClusterComponent } from './cluster.component';
import { ClusterTableComponent } from './cluster-table/cluster-table.component';
import { ClusterTableService } from './cluster-table/cluster-table.service';
import { ClusterDialogComponent } from './cluster-dialog/cluster-dialog.component';

import { ClustersService } from '../../api/api/clusters.service';
import { ApiModule }  from '../../api/api.module';


@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    FormsModule,
    ElementsModule,
    ApiModule
  ],
  declarations: [
    ClusterTableComponent,
    ClusterComponent,
    ClusterDialogComponent
  ],
  providers: [
    ClusterTableService,
    ClustersService
  ]
})

export class ClusterModule { }

