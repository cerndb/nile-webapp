import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'itdb-state-button',
  templateUrl: './state-button.component.html',
  styleUrls: ['./state-button.component.scss']
})
export class StateButtonComponent implements OnInit {

  renderValue = '';

  @Input()  state : string;

  states = {
    RUNNING: false,
    AWAITING: false,
    BUSY: false,
    STOPPED: false,
    MAINTENANCE: false,
    FINISHED_FAIL: false,
    FINISHED_OK: false
  };

  constructor() {}

  ngOnInit() {
    this.states[this.state] = true;
    console.log(this.states);
  }
}
