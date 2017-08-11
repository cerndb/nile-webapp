/**
 * Created by adediosf on 21/02/17.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjectDropdownMenuComponent, ProjectService } from '../pages/dashboard/project-dropdown-menu';

import { SideBarComponent, MenuComponent, MenuItemComponent, PageTopComponent, ContentTopComponent, MenuService,
  CardComponent} from './elements';

import { TooltipDirective } from './directives';

import {
  BaThemeConfig
} from './theme.config';

import {
  BaThemeConfigProvider
} from './theme.configProvider';

//import { BaCardBlur } from './components/baCard/baCardBlur.directive';

import {
  BaScrollPosition,
  BaSlimScroll,
  BaThemeRun
} from './directives';

import {
  BaAppPicturePipe,
  BaKameleonPicturePipe,
  BaProfilePicturePipe
} from './pipes';

import {
  BaImageLoaderService,
  BaMenuService,
  BaThemePreloader,
  BaThemeSpinner
} from './services';

import {
  EmailValidator,
  EqualPasswordsValidator
} from './validators';


const NGA_COMPONENTS = [
  SideBarComponent,
  MenuItemComponent,
  MenuComponent,
  PageTopComponent,
  ContentTopComponent,
  CardComponent,
  ProjectDropdownMenuComponent,
];

const NGA_DIRECTIVES = [
  BaScrollPosition,
  BaSlimScroll,
  BaThemeRun,
//  BaCardBlur
];

const NGA_PIPES = [
  BaAppPicturePipe,
  BaKameleonPicturePipe,
  BaProfilePicturePipe
];

const NGA_SERVICES = [
  BaImageLoaderService,
  BaThemePreloader,
  BaThemeSpinner,
  BaMenuService,
  MenuService,
  ProjectService
];

const NGA_VALIDATORS = [
  EmailValidator,
  EqualPasswordsValidator
];

@NgModule({
  declarations: [
    ...NGA_PIPES,
    ...NGA_COMPONENTS,
    ...NGA_DIRECTIVES,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...NGA_PIPES,
    ...NGA_COMPONENTS,
    ...NGA_DIRECTIVES
  ]
})

export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      providers: [
        BaThemeConfigProvider,
        BaThemeConfig,
        ...NGA_VALIDATORS,
        ...NGA_SERVICES
      ],
    };
  }
}
