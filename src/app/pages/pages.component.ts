/**
 * Created by adediosf on 17/02/17.
 */
import { Component } from '@angular/core';

import { MENU } from '../app.menu';

@Component({
  selector: 'pages',
  styles: [],
  template:`
      <h1>Pages component!!</h1>
      <router-outlet></router-outlet>
<!--    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <ba-back-top position="200"></ba-back-top>-->
    `

})

export class Pages {

}
