import { Component, Input } from '@angular/core';

@Component({
  selector: 'nile-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent {

  @Input() single: any[];
  @Input() multi: any[];

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
//    Object.assign(this, {single, multi})
  }

  onSelect(event) {
    console.log(event);
  }

}
