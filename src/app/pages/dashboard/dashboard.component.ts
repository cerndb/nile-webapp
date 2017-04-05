import {Component} from '@angular/core';
import { single, multi } from './data';

@Component({
  selector: 'nile-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent {

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor() {
    Object.assign(this, {single, multi})
  }

  onSelect(event) {
    console.log(event);
  }
}
