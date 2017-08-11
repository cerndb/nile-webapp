/**
 * Created by adediosf on 21/02/17.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjectDropdownMenuComponent, ProjectService } from '../pages/dashboard/project-dropdown-menu';

import { SideBarComponent, MenuComponent, MenuItemComponent, PageTopComponent, ContentTopComponent, MenuService,
  CardComponent} from './elements';

import { BaScrollPosition, TooltipDirective } from './directives';

const ELEMENT_COMPONENTS = [
  SideBarComponent,
  MenuItemComponent,
  MenuComponent,
  PageTopComponent,
  ContentTopComponent,
  CardComponent,
  ProjectDropdownMenuComponent,
];

const ELEMENT_SERVICES = [
  MenuService,
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
    RouterModule
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
