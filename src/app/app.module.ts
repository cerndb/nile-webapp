import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routing } from './app.routing';

// App is our top level component
import { App } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ElementsModule } from './theme/theme.module';
import { GlobalState } from './global.state';


@NgModule({
  bootstrap: [App],
  declarations: [App],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    PagesModule,
    ElementsModule.forRoot(),
    routing
  ],
  providers: [
    GlobalState
  ]
})
export class AppModule { }
