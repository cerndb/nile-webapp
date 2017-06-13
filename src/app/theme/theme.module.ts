/**
 * Created by adediosf on 21/02/17.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProjectDropdownMenuComponent, ProjectService } from '../pages/dashboard/project-dropdown-menu';


import { SideBarComponent, MenuComponent, MenuItemComponent, PageTopComponent, ContentTopComponent, MenuService,
  CernToolbarComponent, PieChartComponent, CardComponent, ModalDialogComponent,
  TooltipContainerComponent, TooltipContentComponent, TooltipService} from './elements';

import { BaScrollPosition, TooltipDirective } from './directives';

const ELEMENT_COMPONENTS = [
  SideBarComponent,
  MenuItemComponent,
  MenuComponent,
  PageTopComponent,
  ContentTopComponent,
  CernToolbarComponent,
  PieChartComponent,
  CardComponent,
  ModalDialogComponent,
  TooltipContentComponent,
  TooltipContainerComponent,
  ProjectDropdownMenuComponent
];

const ELEMENT_SERVICES = [
  MenuService,
  TooltipService,
  ProjectService
];

const ELEMENT_DIRECTIVES = [
  BaScrollPosition,
  TooltipDirective,
];


@NgModule({
  declarations: [
    ...ELEMENT_COMPONENTS,
    ...ELEMENT_DIRECTIVES,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule
  ],
  exports: [
    ...ELEMENT_COMPONENTS,
    ...ELEMENT_DIRECTIVES
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
