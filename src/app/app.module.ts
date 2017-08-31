import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routing } from './app.routing';

// App is our top level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { PagesModule } from './pages/pages.module';
import { NgaModule } from './theme/nga.module';
import { GlobalState } from './global.state';

import { Configuration } from './api/configuration';
import { ComponentsModule } from './components/components.module';

// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState
];

export function apiConfig() {
  return new Configuration({
    basePath: 'https://localhost:8080',
  });
}

@NgModule({
  bootstrap: [App],
  declarations: [App],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    NgaModule.forRoot(),
    ComponentsModule,
    PagesModule,
    routing
  ],
  providers: [
    APP_PROVIDERS,
  ]
})
export class AppModule {
  constructor(public appState: AppState) {
  }
}

