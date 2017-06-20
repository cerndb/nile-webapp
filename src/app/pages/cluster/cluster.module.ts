import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ElementsModule } from '../../theme/theme.module';
import { FormsModule } from '@angular/forms';

import { ClusterComponent } from './cluster.component';
import { ClusterTableComponent } from './cluster-table/cluster-table.component';
import { ClusterTableService } from './cluster-table/cluster-table.service';
import { ClusterFormComponent } from './cluster-form/cluster-form.component';
import { ClusterDialogComponent } from './cluster-dialog/cluster-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    FormsModule,
    ElementsModule
  ],
  declarations: [
    ClusterTableComponent,
    ClusterFormComponent,
    ClusterComponent,
    ClusterDialogComponent
  ],
  providers: [
    ClusterTableService
  ]
})

export class ClusterModule { }

/** TODO: Here it will be added ADD INSTANCES, REQUEST CLUSTER */
