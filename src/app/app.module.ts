import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App is our top level component
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ElementsModule } from './theme/theme.module';
import { GlobalState } from './global.state';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BrowserAnimationsModule,
    PagesModule,
    ElementsModule.forRoot(),
    routing
  ],
  providers: [
    GlobalState
  ]
})
export class AppModule { }
