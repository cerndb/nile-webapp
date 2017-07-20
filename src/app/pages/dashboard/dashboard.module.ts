import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsModule } from '../../theme/theme.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { clusterSummaryChart } from '../../components/clusterSummaryChart';
import { resourceSummaryChart } from '../../components/resourceSummaryChart';



@NgModule({
  imports: [
    CommonModule,
    ElementsModule
  ],
  declarations: [
    DashboardComponent,
    clusterSummaryChart,
    resourceSummaryChart
  ],
  providers: [
    DashboardService
  ]
})

export class DashboardModule { }
