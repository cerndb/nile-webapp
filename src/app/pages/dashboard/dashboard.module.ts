import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsModule } from '../../theme/theme.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { ClusterSummaryChartComponent } from '../../components/cluster-summary-chart';
import { ResourceSummaryChartComponent } from '../../components/resource-summary-chart';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  imports: [
    CommonModule,
    ElementsModule,
    ComponentsModule
  ],
  declarations: [
    DashboardComponent,
    ClusterSummaryChartComponent,
    ResourceSummaryChartComponent
  ],
  providers: [
    DashboardService
  ]
})

export class DashboardModule { }
