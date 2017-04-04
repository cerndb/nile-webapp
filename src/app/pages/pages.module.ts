/**
 * Created by adediosf on 17/02/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsModule } from '../theme/theme.module';

import { routing } from './pages.routing';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ClusterModule } from './cluster/cluster.module';


@NgModule({
  imports: [
    CommonModule,
    ElementsModule,
    DashboardModule,
    ClusterModule,
    routing
  ],
  declarations: [PagesComponent]
})

export class PagesModule {
}
