import { NgModule } from '@angular/core';
import {CernToolbarComponent, PieChartComponent, ModalDialogComponent,
  TooltipContainerComponent, TooltipContentComponent, TooltipService, StateButtonComponent, ClusterSummaryChartComponent,
  ResourceSummaryChartComponent } from '../components';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgaModule } from '../theme/nga.module';

const ELEMENTS_COMPONENTS = [
  CernToolbarComponent,
  PieChartComponent,
  ModalDialogComponent,
  TooltipContentComponent,
  TooltipContainerComponent,
  StateButtonComponent,
  ClusterSummaryChartComponent,
  ResourceSummaryChartComponent
];

const ELEMENT_SERVICES = [
  TooltipService
];

@NgModule({
  imports: [
    NgxChartsModule,
    NgaModule
  ],
  declarations: [
    ELEMENTS_COMPONENTS
  ],
  exports: [
    ELEMENTS_COMPONENTS
  ],
  providers: [
    ELEMENT_SERVICES
  ]
})

export class ComponentsModule {
}
