import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ClusterTable} from './cluster-table/cluster-table.component';
import { ClusterTableService } from './cluster-table/cluster-table.service';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ClusterTable
  ],
  providers: [
    ClusterTableService
  ]
})

export class ClusterModule { }

/** TODO: Here it will be added ADD INSTANCES, REQUEST CLUSTER */
