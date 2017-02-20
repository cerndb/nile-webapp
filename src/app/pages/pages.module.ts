/**
 * Created by adediosf on 17/02/17.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';

import { Pages } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ClusterModule } from './cluster/cluster.module'

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    ClusterModule,
    routing
  ],
  declarations: [Pages]
})

export class PagesModule {
}
