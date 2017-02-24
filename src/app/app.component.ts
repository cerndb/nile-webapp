import { Component } from '@angular/core';


import 'style-loader!./app.scss';
import 'style-loader!./theme/initial.scss';


@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
/* TODO: Component with merge the baTheme(preloaders) and the pages */
export class App {
  title = 'app works!';

}
