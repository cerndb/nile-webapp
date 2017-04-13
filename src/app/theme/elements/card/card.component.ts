import { Component, Input} from '@angular/core';

import 'style-loader!./card.component.scss';

@Component({
  selector: 'nile-card',
  templateUrl: './card.component.html'
})

export class CardComponent {

  @Input() title: String;
  @Input() baCardClass: String;
  @Input() cardType: String;

  constructor() { }
}
