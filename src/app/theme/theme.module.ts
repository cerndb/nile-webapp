/**
 * Created by adediosf on 21/02/17.
 */
import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule } from '@angular/router';

import {SideBarComponent, MenuComponent, MenuItemComponent} from "./elements/side-bar";

import {MenuService} from "./elements/side-bar/menu/menu.service";

import {
  BaThemeConfig
} from './theme.config';

import {
  BaThemeConfigProvider
} from './theme.configProvider';

const ELEMENT_COMPONENTS = [
  SideBarComponent,
  MenuItemComponent,
  MenuComponent,
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
        BaThemeConfigProvider,
        BaThemeConfig,
        ...ELEMENT_SERVICES
      ],
    };
  }
}
