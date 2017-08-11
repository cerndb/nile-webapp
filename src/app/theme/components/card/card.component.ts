import { Component, Input} from '@angular/core';


@Component({
  selector: 'nile-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

  @Input() title: String;
  @Input() baCardClass: String;

  constructor() { }
}
