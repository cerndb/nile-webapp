import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [
    DashboardComponent
  ]
})

export class DashboardModule { }
