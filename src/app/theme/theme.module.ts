/**
 * Created by adediosf on 21/02/17.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SideBarComponent, MenuComponent, MenuItemComponent, PageTopComponent, ContentTopComponent, MenuService,
  CernToolbarComponent, PieChartComponent, CardComponent, ModalDialogComponent } from './elements';


const ELEMENT_COMPONENTS = [
  SideBarComponent,
  MenuItemComponent,
  MenuComponent,
  PageTopComponent,
  ContentTopComponent,
  CernToolbarComponent,
  PieChartComponent,
  CardComponent,
  ModalDialogComponent

];

const ELEMENT_SERVICES = [
  MenuService
];


@NgModule({
  declarations: [
    ...ELEMENT_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule

  ],
  exports: [
    ...ELEMENT_COMPONENTS
  ]
})

export class ElementsModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: ElementsModule,
      providers: [
        ...ELEMENT_SERVICES
      ],
    };
  }
}
