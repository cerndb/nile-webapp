import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsModule } from '../../theme/theme.module';

import { DashboardComponent } from './dashboard.component';
import {DashboardService} from './dashboard.service';


@NgModule({
  imports: [
    CommonModule,
    ElementsModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    DashboardService
  ]
})

export class DashboardModule { }
